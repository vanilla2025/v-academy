# V | Academy content uploads

## Add an announcement
1. Copy `content/uploads/announcements/_ANNOUNCEMENT-TEMPLATE.json`.
2. Rename it, edit the content, and set `status` to `published`.
3. Commit it to GitHub.
4. Cloudflare must run `npm run build` before publishing.

## Add a course
1. Copy `content/uploads/courses/_COURSE-TEMPLATE.json`.
2. Give the course and every lesson a unique ID.
3. Set `status` to `published`.
4. Commit it to GitHub. The build script adds it to the Academy catalogue.

## Cloudflare Pages settings
- Build command: `npm run build`
- Build output directory: `.`
- Root directory: leave blank

## ChatGPT guide
The permanent direct link is:
`https://v-academy.pages.dev/guides/chatgpt-best-practices/`

## Reporting integration
The existing `js/config.js`, `js/sync.js`, and `apps-script/Code.gs` integration has been retained. Learner progress and events continue to post to the existing Apps Script deployment URL.
