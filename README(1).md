# V | Academy

**Version:** 3.10.1 — Content Architecture & Direct Routing  
**Release Date:** 11 August 2026

## Overview

V | Academy is Vanilla Rentals' AI-enabled operational learning platform. It combines training, reusable workflows, agent guidance, required staff updates and practical AI capability guidance inside one consistent Academy shell.

## V3.10.1 Highlights

- Separated the Academy platform from uploadable content.
- Added upload folders for agents, workflows and guides alongside courses and announcements.
- Moved the RentHistory Agent out of the hardcoded catalogue and into `content/uploads/agents/rent-history-agent.json`.
- Added clean, bookmarkable routes such as `/agent/rent-history` and `/guide/chatgpt-best-practices`.
- Added Cloudflare fallback routing via `_redirects`, so refreshing a direct content link keeps the Academy interface intact.
- Kept local-file testing compatible by using hash-based routes only when the site is opened from `file://`.
- Existing learner state, Bulletin Board acknowledgement tracking, Prompt Builder, Google Sheet reporting and Apps Script integration remain in place.

## Content model

Normal content lives under `content/uploads/`:

- `announcements/`
- `courses/`
- `agents/`
- `workflows/`
- `guides/`

Run `npm run build` to rebuild `content/uploads-manifest.js`. Cloudflare Pages does this automatically when configured with the build command.

## Platform files

These should change much less often:

- `js/app.js`
- `js/config.js`
- `js/sync.js`
- `css/academy.css`
- `index.html`
- `apps-script/Code.gs`

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `.`
- Root directory: blank

The `_redirects` file must remain in the published root for direct Academy URLs to work after refresh.

## Reporting

No Google Sheet schema change is required for V3.10. Existing Apps Script and reporting behaviour are retained.
