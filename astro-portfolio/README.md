# Momoiro's Workshop — Astro Portfolio

Astro migration of the Momoiro portfolio, kept alongside the original static HTML version.

## Project status
- ✅ Astro version active in this folder (`astro-portfolio/`)
- ✅ Original static version kept in `../my-portfolio/`
- ✅ Shared content source used by both versions: `../shared-content/content.js`

## Tech stack
- Astro `^5.17.x`
- Static output (`output: 'static'`)
- No framework adapter (plain Astro components)

## Key architecture

### 1) Astro app (this folder)
- Entry page: `src/pages/index.astro`
- Global layout/styles/scripts: `src/layouts/Layout.astro`
- Sectionized components in `src/components/`:
  - `Hero.astro`, `About.astro`, `Showcase.astro`, `Skills.astro`
  - `ProgrammingSkills.astro`, `Projects.astro`, `Sketchfab.astro`
  - `Testimonials.astro`, `Contact.astro`, `Popup.astro`
  - `Loader.astro`, `Footer.astro`

### 2) Shared content model
- Source of truth: `../shared-content/content.js`
- Provides:
  - hero tags/showcase
  - popup data
  - showcase/projects/programming skills
  - sketchfab models
  - testimonials and contact links
- Loaded in Astro via `createRequire(...)` in `src/pages/index.astro`.

### 3) Static media strategy
- `astro.config.mjs` sets:
  - `publicDir: '../my-portfolio/storage/raw-media'`
- Result: media from static storage is served at `/` in Astro.
- `mediaBase` in Astro is currently `/`.

## Run
From `astro-portfolio/`:

```bash
npm install
npm run dev
```

Build/preview:

```bash
npm run build
npm run preview
```

## Relationship with static version

Static site lives at `../my-portfolio/`.

- Static entry file: `../my-portfolio/src/index.html` (and mirror `../my-portfolio/index.html`)
- Static site references shared content using:
  - `../../shared-content/content.js`
- Static media references use `../storage/raw-media/...`

## Editing workflow (recommended)
1. Edit shared text/data in `../shared-content/content.js` for cross-version consistency.
2. Edit Astro UI in `src/components/` and `src/layouts/Layout.astro`.
3. Keep static HTML as fallback/reference unless intentionally retiring it.

## Notes from repo scan
- Astro migration is substantial and componentized.
- Static and Astro are both wired to shared content.
- Some source files show minor mojibake characters (encoding artifacts), e.g. in a few text nodes/icons; functionality unaffected but worth cleanup later.
