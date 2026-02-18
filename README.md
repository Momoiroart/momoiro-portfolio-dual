# Momoiro Portfolio (Dual Architecture)

A portfolio project that ships in two forms:

- **Astro app** (`astro-portfolio/`) for modular, maintainable development
- **Static HTML fallback** (`my-portfolio/`) for portability and direct hosting

Both versions share a single content source:

- `shared-content/content.js`

And both rely on a shared media library:

- `my-portfolio/storage/raw-media/`

## Why this architecture?

- Keep legacy static compatibility
- Evolve quickly with Astro components
- Avoid duplicated content by centralizing data in `shared-content/content.js`

## Main entry points

- Astro: `astro-portfolio/src/pages/index.astro`
- Static: `my-portfolio/src/index.html`

## Run Astro locally

```bash
cd astro-portfolio
npm install
npm run dev
```

## Build Astro

```bash
cd astro-portfolio
npm run build
npm run preview
```
