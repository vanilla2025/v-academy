const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');

function readJsonDir(dir) {
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full)
    .filter(name => name.endsWith('.json') && !name.startsWith('_'))
    .sort()
    .map(name => {
      const p = path.join(full, name);
      try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
      catch (e) { throw new Error(`Invalid JSON in ${dir}/${name}: ${e.message}`); }
    })
    .filter(item => item.status !== 'draft' && item.status !== 'archived');
}

const payload = {
  generatedAt: new Date().toISOString(),
  announcements: readJsonDir('content/uploads/announcements'),
  courses: readJsonDir('content/uploads/courses'),
  agents: readJsonDir('content/uploads/agents'),
  workflows: readJsonDir('content/uploads/workflows'),
  guides: readJsonDir('content/uploads/guides')
};

const out = 'window.ACADEMY_UPLOADS = ' + JSON.stringify(payload, null, 2) + ';\n';
fs.writeFileSync(path.join(root, 'content/uploads-manifest.js'), out);
console.log(
  `Built ${payload.announcements.length} announcement(s), ` +
  `${payload.courses.length} course(s), ${payload.agents.length} agent(s), ` +
  `${payload.workflows.length} workflow(s), and ${payload.guides.length} guide(s).`
);
