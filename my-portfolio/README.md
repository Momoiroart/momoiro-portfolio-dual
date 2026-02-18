# Momoiro's Workshop — Static Portfolio (Legacy + Fallback)

Original static HTML version of the portfolio.

> This project is now mirrored by an Astro migration in `../astro-portfolio/`.
> Keep this static version as fallback/reference unless intentionally decommissioned.

## Current status
- Type: single-page static site (HTML + inline CSS/JS)
- Main static file: `src/index.html`
- Mirror copy: `index.html`
- Shared content source: `../shared-content/content.js`
- Raw media library: `storage/raw-media/`

## Structure
- `src/index.html` — canonical static source
- `index.html` — mirror/compat copy
- `backup/` — timestamped snapshots
- `storage/raw-media/` — images/videos/assets used by both static and Astro

## How static and Astro work together
- Astro app: `../astro-portfolio/`
- Shared data file: `../shared-content/content.js`
- Astro serves media directly from this repo via `publicDir` config

So:
- Update content once in `shared-content/content.js`
- Keep static and Astro in sync with shared data

## Run static version
Open `src/index.html` in a browser.

## Editing workflow (recommended)
1. Prefer editing shared content in `../shared-content/content.js`.
2. If static-specific styling/behavior is needed, edit `src/index.html`.
3. After major static changes, create a backup file:
   - `backup/index-YYYY-MM-DD-HHMM.html`
4. Optionally sync `index.html` from `src/index.html`.

## Astro migration note
Astro implementation is componentized and easier to maintain for future growth.
Use static version as:
- fallback deployment
- visual parity reference
- quick offline single-file copy
