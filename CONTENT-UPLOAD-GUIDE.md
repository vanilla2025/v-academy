# V | Academy content uploads

V | Academy 3.10 separates the **platform** from the **content**. Normal content additions should not require edits to `js/app.js`, `content/catalog.js`, Apps Script, or the site navigation.

## Content folders

- `content/uploads/announcements/` — Bulletin Board notices and required reading
- `content/uploads/courses/` — training courses
- `content/uploads/agents/` — agent guides shown under Tools & Workflows
- `content/uploads/workflows/` — reusable workflows shown under Tools & Workflows
- `content/uploads/guides/` — metadata for standalone/embedded HTML guides

Cloudflare runs `npm run build`. The build script scans these folders and writes `content/uploads-manifest.js` automatically. Do not edit the manifest by hand.

## Add an agent

1. Copy `content/uploads/agents/_AGENT-TEMPLATE.json`.
2. Rename it, for example `new-agent.json`.
3. Give it a unique `id` and a short URL-safe `slug`.
4. Complete the content and set `status` to `published`.
5. Commit to GitHub.

Example route:

`slug: "rent-history"` → `https://v-academy.pages.dev/agent/rent-history`

The RentHistory Agent is the first production agent using this system:

`content/uploads/agents/rent-history-agent.json`

## Add a workflow

1. Copy `content/uploads/workflows/_WORKFLOW-TEMPLATE.json`.
2. Give it a unique `id`, `slug`, useful instructions and a complete prompt.
3. Set `status` to `published`.
4. Commit to GitHub.

Example route:

`slug: "owner-follow-up"` → `https://v-academy.pages.dev/workflow/owner-follow-up`

## Add a guide

A guide has two pieces:

1. The guide page, for example `guides/example-guide/index.html`.
2. A metadata file in `content/uploads/guides/`.

Copy `_GUIDE-TEMPLATE.json`, update it and publish it.

Example route:

`https://v-academy.pages.dev/guide/chatgpt-best-practices`

The older physical page URL may still work, but staff links should use the Academy route so the sidebar and Academy context remain visible.

## Add an announcement

1. Copy `content/uploads/announcements/_ANNOUNCEMENT-TEMPLATE.json`.
2. Rename it and update the title, summary, publication date and destination.
3. Set `status` to `published`.
4. Commit to GitHub.

Announcements appear on the Bulletin Board from the moment they are published. Required unread announcements can also take over the startup view until acknowledged.

## Add a course

1. Copy `content/uploads/courses/_COURSE-TEMPLATE.json`.
2. Give the course and every lesson unique IDs.
3. Set `status` to `published`.
4. Commit to GitHub.

A lesson has a direct route in this format:

`https://v-academy.pages.dev/training/<course-id>/<lesson-id>`

## Direct URLs

V3.10 supports bookmarkable Academy routes:

- `/` — Dashboard / required bulletin startup
- `/bulletin-board` — Bulletin Board
- `/training` — Training
- `/training/<course-id>/<lesson-id>` — lesson
- `/tools` — Tools & Workflows
- `/agent/<slug>` — agent guide
- `/workflow/<slug>` — workflow
- `/tool/<slug>` — AI capability guidance
- `/guide/<slug>` — embedded guide
- `/progress` — Progress
- `/settings` — Settings

The `_redirects` file sends direct Cloudflare requests back through `index.html`, allowing the Academy shell to stay in place on refresh.

## Cloudflare Pages settings

- Build command: `npm run build`
- Build output directory: `.`
- Root directory: leave blank

## When a full platform release is required

A new full Academy release is only needed when changing things such as routing, layout, navigation, tracking, profile behaviour, shared components, or Apps Script integration.

Adding a normal course, agent, workflow, guide or announcement should now be a content-only change.
