/***************************************************************
 * V | Academy Reporting API v1.7
 * Google Apps Script Web App backend
 *
 * Deploy as Web App:
 * - Execute as: Me
 * - Who has access: Anyone with the link
 *
 * IMPORTANT:
 * - ADMIN_PIN protects admin actions.
 * - Add admin/trainer users in the Permissions tab.
 * - Frontend reads admin/team data via JSONP with PIN.
 ***************************************************************/

const CONFIG = {
  USERS_SHEET: 'Users',
  EVENT_LOG_SHEET: 'Event_Log',
  BADGES_SHEET: 'Badges',
  CERTIFICATES_SHEET: 'Certificates',
  FAVOURITES_SHEET: 'Favourites',
  PERMISSIONS_SHEET: 'Permissions',
  TIMEZONE: 'Australia/Brisbane',
  ADMIN_PIN: 'VA-6849-2173',
  ADMIN_EMAILS: ['ivan@vanillarentals.com.au']
};

const HEADERS = {
  Users: ['Email', 'Name', 'Role', 'First Seen', 'Last Seen', 'Current Course', 'Overall Progress', 'Badges Count', 'Certificates Count', 'Last Event'],
  Event_Log: ['Timestamp', 'Event ID', 'Email', 'Name', 'Role', 'Course ID', 'Course Name', 'Chapter ID', 'Chapter Name', 'Lesson ID', 'Lesson Name', 'Event Type', 'Event Name', 'Item ID', 'Item Name', 'Progress %', 'Status', 'Opened At', 'Acknowledged At', 'Data'],
  Badges: ['Timestamp', 'Email', 'Name', 'Role', 'Course', 'Badge ID', 'Badge Name', 'Data'],
  Certificates: ['Timestamp', 'Email', 'Name', 'Role', 'Course', 'Certificate ID', 'Certificate Name', 'Data'],
  Favourites: ['Timestamp', 'Email', 'Name', 'Role', 'Course', 'Prompt ID', 'Prompt Title', 'Prompt Text', 'Action'],
  Permissions: ['Email', 'Name', 'Learning Role', 'Access Level', 'Active']
};

function doGet(e) {
  try {
    ensureSheets_();
    const action = (e && e.parameter && e.parameter.action) || 'status';
    const callback = e && e.parameter && e.parameter.callback;
    let result;

    if (action === 'access') result = getAccess_(e.parameter.email);
    else if (action === 'verify_admin') result = verifyAdmin_(e.parameter.email, e.parameter.pin);
    else if (action === 'dashboard') result = buildDashboard_(e.parameter.pin, e.parameter.email);
    else if (action === 'cleanup_noise') result = cleanupNoise_(e.parameter.pin, e.parameter.email);
    else if (action === 'rebuild_users') result = rebuildUsers_(e.parameter.pin, e.parameter.email);
    else result = { ok: true, app: 'V | Academy Reporting API', version: '1.7', message: 'API is live.' };

    return callback ? jsonpResponse_(callback, result) : jsonResponse_(result);
  } catch (err) {
    const result = { ok: false, error: String(err), stack: err && err.stack ? err.stack : '' };
    const callback = e && e.parameter && e.parameter.callback;
    return callback ? jsonpResponse_(callback, result) : jsonResponse_(result);
  }
}

function doPost(e) {
  try {
    ensureSheets_();
    const rawPayload = parsePayload_(e);
    const payload = normalisePayload_(rawPayload);
    validatePayload_(payload);
    const eventType = payload.eventType || 'event';

    upsertUser_(payload, eventType);
    appendEvent_(payload, eventType);

    if (eventType === 'badge_earned') appendBadge_(payload);
    if (eventType === 'certificate_earned' || eventType === 'course_completed' || eventType === 'path_completed') appendCertificateIfPresent_(payload, eventType);
    if (eventType === 'prompt_favourited' || eventType === 'prompt_unfavourited') appendFavourite_(payload, eventType);

    return jsonResponse_({ ok: true, eventType, receivedAt: now_() });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err), stack: err && err.stack ? err.stack : '' });
  }
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) throw new Error('No POST body received.');
  try { return JSON.parse(e.postData.contents); }
  catch (err) { throw new Error('POST body was not valid JSON.'); }
}

function normalisePayload_(raw) {
  raw = raw || {};
  const profile = raw.profile || {};
  const event = raw.event || {};
  const data = raw.data || {};
  const eventData = event.data || {};
  return {
    email: raw.email || profile.email || '',
    name: raw.name || profile.name || '',
    role: raw.role || profile.role || '',
    courseId: raw.courseId || raw.course_id || event.courseId || event.course_id || data.courseId || profile.currentCourse || '',
    course: raw.course || event.course || data.course || profile.currentCourse || '',
    chapterId: raw.chapterId || raw.chapter_id || event.chapterId || event.chapter_id || data.chapterId || '',
    chapter: raw.chapter || event.chapter || data.chapter || '',
    lessonId: raw.lessonId || raw.lesson_id || event.lessonId || event.lesson_id || data.lessonId || '',
    eventType: raw.eventType || raw.event_type || event.type || 'event',
    eventName: raw.eventName || raw.event_name || event.name || event.eventName || '',
    itemId: raw.itemId || raw.item_id || event.itemId || event.item_id || event.badgeId || event.certificateId || event.promptId || '',
    itemName: raw.itemName || raw.item_name || event.itemName || event.item_name || event.badgeName || event.certificateName || event.promptTitle || event.name || '',
    badgeId: raw.badgeId || event.badgeId || event.itemId || '',
    badgeName: raw.badgeName || event.badgeName || event.itemName || '',
    certificateId: raw.certificateId || event.certificateId || event.itemId || '',
    certificateName: raw.certificateName || event.certificateName || event.itemName || '',
    promptId: raw.promptId || event.promptId || event.itemId || '',
    promptTitle: raw.promptTitle || event.promptTitle || event.itemName || '',
    promptText: raw.promptText || event.promptText || '',
    overallProgress: raw.overallProgress || raw.progress || profile.overallProgress || data.overallProgress || data.progress || '',
    progress: raw.progress ?? event.progress ?? eventData.progress ?? data.progress ?? '',
    status: raw.status || event.status || eventData.status || data.status || '',
    openedAt: raw.openedAt || event.openedAt || eventData.openedAt || data.openedAt || '',
    acknowledgedAt: raw.acknowledgedAt || event.acknowledgedAt || eventData.acknowledgedAt || data.acknowledgedAt || '',
    badgesCount: raw.badgesCount || profile.badgesCount || '',
    certificatesCount: raw.certificatesCount || profile.certificatesCount || '',
    data: raw
  };
}

function validatePayload_(p) {
  if (!p.email) throw new Error('Missing required field: email');
  if (!p.name) throw new Error('Missing required field: name');
  if (!p.role) throw new Error('Missing required field: role');
}

function ensureSheets_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(HEADERS).forEach(name => {
    let sheet = ss.getSheetByName(name);
    if (!sheet) sheet = ss.insertSheet(name);
    ensureHeader_(sheet, HEADERS[name]);
    if (name === CONFIG.EVENT_LOG_SHEET) ensureColumns_(sheet, HEADERS.Event_Log);
  });
  seedPermissions_();
}


function seedPermissions_() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.PERMISSIONS_SHEET);
  const existing = sheetObjects_(sheet).map(r => normaliseEmail_(r.Email));
  CONFIG.ADMIN_EMAILS.forEach(email => {
    if (!existing.includes(normaliseEmail_(email))) {
      sheet.appendRow([email, 'Ivan', 'AI Specialist', 'Administrator', true]);
    }
  });
}

function ensureHeader_(sheet, headers) {
  const current = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const isBlank = current.every(v => String(v || '').trim() === '');
  if (isBlank) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
}

function ensureColumns_(sheet, requiredHeaders) {
  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  const current = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(v => String(v || '').trim());
  const missing = requiredHeaders.filter(h => !current.includes(h));
  if (!missing.length) return;
  const start = current.length + 1;
  sheet.getRange(1, start, 1, missing.length).setValues([missing]);
  sheet.getRange(1, start, 1, missing.length).setFontWeight('bold');
  sheet.setFrozenRows(1);
}

function appendMappedRow_(sheet, valuesByHeader) {
  const width = Math.max(sheet.getLastColumn(), 1);
  const headers = sheet.getRange(1, 1, 1, width).getValues()[0].map(v => String(v || '').trim());
  const row = headers.map(header => Object.prototype.hasOwnProperty.call(valuesByHeader, header) ? valuesByHeader[header] : '');
  sheet.appendRow(row);
}

function upsertUser_(p, eventType) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.USERS_SHEET);
  const email = normaliseEmail_(p.email);
  const now = now_();
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const emailCol = headers.indexOf('Email');
  let rowIndex = -1;
  for (let i = 1; i < data.length; i++) {
    if (normaliseEmail_(data[i][emailCol]) === email) { rowIndex = i + 1; break; }
  }
  const row = [email, p.name || '', p.role || '', now, now, p.course || '', p.overallProgress || p.progress || '', p.badgesCount || '', p.certificatesCount || '', eventType];
  if (rowIndex === -1) sheet.appendRow(row);
  else {
    const existingFirstSeen = sheet.getRange(rowIndex, 4).getValue();
    row[3] = existingFirstSeen || now;
    sheet.getRange(rowIndex, 1, 1, row.length).setValues([row]);
  }
}

function appendEvent_(p, eventType) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.EVENT_LOG_SHEET);
  const eventId = Utilities.getUuid();
  const values = {
    'Timestamp': now_(),
    'Event ID': eventId,
    'Email': normaliseEmail_(p.email),
    'Name': p.name || '',
    'Role': p.role || '',
    'Course ID': p.courseId || slug_(p.course || ''),
    'Course': p.course || '',
    'Course Name': p.course || '',
    'Chapter ID': p.chapterId || slug_(p.chapter || ''),
    'Chapter': p.chapter || '',
    'Chapter Name': p.chapter || '',
    'Lesson ID': p.lessonId || '',
    'Lesson Name': p.itemName || p.eventName || '',
    'Event Type': eventType,
    'Event Name': p.eventName || '',
    'Item ID': p.itemId || p.badgeId || p.certificateId || p.promptId || '',
    'Item Name': p.itemName || p.badgeName || p.certificateName || p.promptTitle || '',
    'Progress': p.progress,
    'Progress %': p.progress,
    'Status': p.status || '',
    'Opened At': p.openedAt || '',
    'Acknowledged At': p.acknowledgedAt || '',
    'Data': JSON.stringify(p.data || p)
  };
  appendMappedRow_(sheet, values);
}

function appendBadge_(p) {
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.BADGES_SHEET).appendRow([now_(), normaliseEmail_(p.email), p.name || '', p.role || '', p.course || '', p.badgeId || p.itemId || '', p.badgeName || p.itemName || '', JSON.stringify(p.data || {})]);
}

function appendCertificateIfPresent_(p, eventType) {
  const certificateId = p.certificateId || p.itemId || (eventType === 'course_completed' || eventType === 'path_completed' ? slug_(p.course) + '_certificate' : '');
  const certificateName = p.certificateName || p.itemName || (eventType === 'course_completed' || eventType === 'path_completed' ? (p.course || 'Course') + ' Certificate' : '');
  if (!certificateId && !certificateName) return;
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.CERTIFICATES_SHEET).appendRow([now_(), normaliseEmail_(p.email), p.name || '', p.role || '', p.course || '', certificateId, certificateName, JSON.stringify(p.data || {})]);
}

function appendFavourite_(p, eventType) {
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.FAVOURITES_SHEET).appendRow([now_(), normaliseEmail_(p.email), p.name || '', p.role || '', p.course || '', p.promptId || p.itemId || '', p.promptTitle || p.itemName || '', p.promptText || '', eventType]);
}

function buildDashboard_(pin, email) {
  checkAdmin_(pin, email);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const users = sheetObjects_(ss.getSheetByName(CONFIG.USERS_SHEET));
  const events = sheetObjects_(ss.getSheetByName(CONFIG.EVENT_LOG_SHEET));
  const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - 7);
  const byEmail = {};
  events.forEach(e => {
    const email = normaliseEmail_(e.Email);
    if (!email) return;
    if (!byEmail[email]) byEmail[email] = { events: 0 };
    byEmail[email].events++;
    byEmail[email].lastEvent = e['Event Type'] || '';
    byEmail[email].lastEventName = e['Event Name'] || '';
    byEmail[email].lastSeen = e.Timestamp || '';
  });
  const learners = users.map(u => {
    const email = normaliseEmail_(u.Email);
    return { email, name: u.Name || '', role: u.Role || '', lastSeen: u['Last Seen'] || byEmail[email]?.lastSeen || '', lastEvent: u['Last Event'] || byEmail[email]?.lastEvent || '', progress: u['Overall Progress'] || '', events: byEmail[email]?.events || 0 };
  });
  const active7Days = learners.filter(u => parseDate_(u.lastSeen) >= cutoff).length;
  const recent = events.slice(-15).reverse().map(e => ({ timestamp: e.Timestamp, email: e.Email, name: e.Name, role: e.Role, course: e.Course, eventType: e['Event Type'], eventName: e['Event Name'] }));
  return { ok: true, totalLearners: learners.length, active7Days, totalEvents: events.length, learners, recent };
}


function verifyAdmin_(email, pin) {
  checkAdmin_(pin, email);
  const access = getAccess_(email);
  return { ok: true, accessLevel: access.accessLevel };
}

function getAccess_(email) {
  email = normaliseEmail_(email);
  if (!email) return { ok: true, accessLevel: 'Learner' };
  if ((CONFIG.ADMIN_EMAILS || []).map(normaliseEmail_).includes(email)) {
    return { ok: true, accessLevel: 'Administrator' };
  }
  const rows = sheetObjects_(SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.PERMISSIONS_SHEET));
  const match = rows.find(r => normaliseEmail_(r.Email) === email && String(r.Active).toLowerCase() !== 'false');
  return { ok: true, accessLevel: match ? (match['Access Level'] || 'Learner') : 'Learner' };
}

function cleanupNoise_(pin, email) {
  checkAdmin_(pin, email);
  const noisy = new Set(['lesson_opened', 'tool_opened', 'page_opened', 'menu_clicked', 'tool_used', 'prompt_copied']);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.EVENT_LOG_SHEET);
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return { ok: true, message: 'No rows to clean.' };
  const headers = values[0];
  const typeCol = headers.indexOf('Event Type');
  let deleted = 0;
  for (let r = values.length; r >= 2; r--) {
    const eventType = String(values[r - 1][typeCol] || '');
    if (noisy.has(eventType)) { sheet.deleteRow(r); deleted++; }
  }
  return { ok: true, message: 'Deleted ' + deleted + ' noisy click/open events.' };
}

function rebuildUsers_(pin, email) {
  checkAdmin_(pin, email);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const usersSheet = ss.getSheetByName(CONFIG.USERS_SHEET);
  const events = sheetObjects_(ss.getSheetByName(CONFIG.EVENT_LOG_SHEET));
  const byEmail = {};
  events.forEach(e => {
    const email = normaliseEmail_(e.Email);
    if (!email) return;
    if (!byEmail[email]) byEmail[email] = { email, name: e.Name, role: e.Role, first: e.Timestamp, last: e.Timestamp, lastEvent: e['Event Type'], events: 0 };
    const u = byEmail[email];
    u.events++;
    u.name = e.Name || u.name;
    u.role = e.Role || u.role;
    u.last = e.Timestamp || u.last;
    u.lastEvent = e['Event Type'] || u.lastEvent;
  });
  usersSheet.clearContents();
  usersSheet.getRange(1, 1, 1, HEADERS.Users.length).setValues([HEADERS.Users]);
  const rows = Object.values(byEmail).map(u => [u.email, u.name || '', u.role || '', u.first || '', u.last || '', '', '', '', '', u.lastEvent || '']);
  if (rows.length) usersSheet.getRange(2, 1, rows.length, HEADERS.Users.length).setValues(rows);
  return { ok: true, message: 'Rebuilt Users summary from Event_Log for ' + rows.length + ' learner(s).' };
}

function checkAdmin_(pin, email) {
  if (!CONFIG.ADMIN_PIN || CONFIG.ADMIN_PIN === 'CHANGE_ME') throw new Error('Set ADMIN_PIN in Code.gs before using admin actions.');
  if (String(pin || '') !== CONFIG.ADMIN_PIN) throw new Error('Invalid administrator PIN.');
  const access = getAccess_(email).accessLevel;
  if (access !== 'Administrator' && access !== 'Trainer') throw new Error('This email is not listed as Trainer or Administrator in the Permissions tab.');
}

function sheetObjects_(sheet) {
  if (!sheet) return [];
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return [];
  const headers = values[0].map(String);
  return values.slice(1).filter(r => r.some(v => String(v || '').trim() !== '')).map(row => {
    const o = {};
    headers.forEach((h, i) => o[h] = row[i]);
    return o;
  });
}

function parseDate_(value) {
  if (value instanceof Date) return value;
  const s = String(value || '').replace(' ', 'T');
  const d = new Date(s);
  return isNaN(d) ? new Date(0) : d;
}

function jsonResponse_(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
function jsonpResponse_(callback, obj) { return ContentService.createTextOutput(String(callback).replace(/[^a-zA-Z0-9_.$]/g, '') + '(' + JSON.stringify(obj) + ');').setMimeType(ContentService.MimeType.JAVASCRIPT); }
function now_() { return Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'yyyy-MM-dd HH:mm:ss'); }
function normaliseEmail_(email) { return String(email || '').trim().toLowerCase(); }
function slug_(text) { return String(text || '').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, ''); }
