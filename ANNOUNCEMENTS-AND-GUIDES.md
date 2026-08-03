# V | Academy — announcements and guides

## How the pieces fit together

1. The guide page lives at `guides/chatgpt-best-practices/index.html`.
2. The Academy knows that guide by the internal ID `chatgpt-best-practices`.
3. The announcement file lives at `content/uploads/announcements/2026-08-chatgpt-best-practices.json`.
4. Its `destination` points to that guide ID.
5. `npm run build` scans the announcement folder and rebuilds `content/uploads-manifest.js`.
6. The dashboard reads the manifest and displays the announcement under **What's new**.
7. Clicking **Open guide** changes only the Academy's right panel. The sidebar, user profile and progress remain visible.

## Direct link for staff

`https://v-academy.pages.dev/#guide/chatgpt-best-practices`

This route opens the guide inside the V | Academy layout.

## Add another announcement later

1. In GitHub, open `content/uploads/announcements/`.
2. Copy `_ANNOUNCEMENT-TEMPLATE.json`.
3. Rename it using a date and short description, for example:
   `2026-09-new-gmail-workflow.json`
4. Give it a unique `id`.
5. Change `status` from `draft` to `published`.
6. Commit the file. Cloudflare runs `npm run build` and publishes it.

Example announcement that opens an internal guide:

```json
{
  "id": "new-guide-2026-09",
  "title": "New guide available",
  "summary": "A short explanation for staff.",
  "badge": "New",
  "published": "10/09/2026",
  "priority": 50,
  "status": "published",
  "destination": {
    "type": "guide",
    "id": "chatgpt-best-practices"
  },
  "linkText": "Open guide"
}
```

## Announcement controls

- `status`: use `draft`, `published`, or `archived`.
- `priority`: higher numbers appear first.
- `badge`: examples include `New`, `Required reading`, and `Updated`.
- `published`: display date in Australian format.
- `destination.id`: must match a guide ID registered in `js/app.js`.

To remove an announcement from the dashboard without deleting its record, change:

```json
"status": "archived"
```

The JSON file stays in GitHub as a historical record, but the build excludes it from the live dashboard.

## Update the ChatGPT guide later

Replace:

`guides/chatgpt-best-practices/index.html`

Keep the same file path and guide ID. Existing links and the announcement will continue working.

When screenshots or interface wording changes:

1. update the guide HTML;
2. update the visible screenshot version/capture date inside the guide;
3. update `reviewed` and `interfaceVersion` for the guide in `js/app.js`;
4. optionally publish a new announcement with the badge `Updated`.

## Cloudflare Pages settings

- Build command: `npm run build`
- Build output directory: `.`
- Root directory: leave blank
