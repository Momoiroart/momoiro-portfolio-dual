# Momoiro's Workshop — Portfolio

Static portfolio site for Momoiro's Workshop (digital art + programming).

## Current repo scan (updated)
- Project type: **single-page static site** (HTML with inline CSS/JS)
- Main file: `src/index.html`
- Duplicate working copy: `index.html` (same hash as `src/index.html`)
- No build system detected (`package.json`, `requirements.txt`, etc. not found)
- External dependency: Google Fonts (Orbitron, Space Mono, Syne)

## Structure
- `src/` — primary source files (`index.html`)
- `assets/images/` — image assets (reserved)
- `assets/video/` — video assets (reserved)
- `backup/` — timestamped backups
- `storage/raw-media/` — raw source media library (images/videos/docs/models)

## Backups currently found
- `backup/index-2026-02-18-0139.html`
- `backup/index-2026-02-18-2236.html`
- `backup/index-.html` *(likely accidental filename; still kept as backup)*

## Run locally
Open either file in a browser:
- `src/index.html` (recommended canonical source)
- `index.html` (mirror copy)

## Editing workflow (recommended)
1. Edit only `src/index.html`.
2. After major changes, copy it to `backup/index-YYYY-MM-DD-HHMM.html`.
3. If needed, sync `index.html` from `src/index.html`.

## TODO (optional cleanup)
- Remove or rename `backup/index-.html` to a timestamped filename.
- Keep one canonical entry point long-term (`src/index.html`).
