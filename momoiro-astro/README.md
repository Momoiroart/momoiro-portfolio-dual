# Momoiro Portfolio

> *A dark-themed portfolio website showcasing digital art, 3D modeling, Live2D, motion design, and programming with pink/cyan accents.*

[![Status](https://img.shields.io/badge/status-active-success?style=flat-square)](.)
[![Framework](https://img.shields.io/badge/framework-Astro-FF5D01?style=flat-square)](https://astro.build)
[![Deployment](https://img.shields.io/badge/deployment-dual%20architecture-blueviolet?style=flat-square)](.)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

---

## Preview

**Live Demo:** [https://momoirosworkshop.netlify.app/](https://momoirosworkshop.netlify.app/)

---

## About

**Momoiro Portfolio** is a creative portfolio website designed with a unique **dual architecture** approach:

- **Modern Astro Version** — Component-based, fast, and SEO-optimized (primary)
- **Static HTML Fallback** — Legacy-compatible for direct hosting anywhere
- **Shared Content System** — Single source of truth for all portfolio data
- **Rich Media Support** — Optimized storage for images, videos, and 3D models

---

## Repository Structure

```
momoiro-astro/
│
├── astro-portfolio/                    ← Primary Astro version
│   ├── src/
│   │   ├── layouts/
│   │   │   └── Layout.astro           ← Full HTML shell, all CSS, global JS
│   │   ├── pages/
│   │   │   └── index.astro            ← Homepage (imports content.js)
│   │   └── components/
│   │       ├── Popup.astro            ← Data bridge (define:vars → browser JS)
│   │       ├── Hero.astro, About.astro, Showcase.astro
│   │       ├── Skills.astro, ProgrammingSkills.astro
│   │       ├── Projects.astro, Sketchfab.astro
│   │       ├── Testimonials.astro, Contact.astro
│   │       ├── Footer.astro, Loader.astro
│   ├── public/                        ← Astro public assets
│   ├── astro.config.mjs               ← publicDir: '../my-portfolio/storage/raw-media'
│   ├── package.json
│   └── tsconfig.json
│
├── my-portfolio/                       ← Static HTML fallback
│   ├── src/
│   │   └── index.html                 ← Static HTML (loads content.js at runtime)
│   ├── storage/
│   │   └── raw-media/                 ← All media assets
│   └── backup/                        ← Version backups
│
├── shared-content/
│   └── content.js                     ← SINGLE SOURCE OF TRUTH — edit site data here
│
└── Notes/                             ← Learning docs, course materials
```

---

## Key Features

| Feature | Description |
|---|---|
| **Dual Architecture** | Astro + Static HTML for maximum flexibility |
| **Shared Content** | Single `content.js` powers both versions |
| **Component-Based** | Modular Astro components for easy maintenance |
| **Media Optimized** | Centralized storage for all portfolio assets |
| **SEO-Ready** | Astro's built-in SEO optimizations |
| **Fast Loading** | Zero JS by default, progressive enhancement |
| **Legacy Support** | Static HTML fallback for universal compatibility |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn package manager
- Git

### Quick Start (Astro Version)

1. **Navigate to Astro directory:**
   ```bash
   cd astro-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:4321
   ```

### Build for Production

```bash
npm run build
npm run preview
```

The build output will be in the `dist/` directory.

### Static HTML Preview

Open `my-portfolio/src/index.html` directly in a browser (no server needed).

---

## Tech Stack

### Modern Stack (Astro)

| Layer | Technology |
|---|---|
| Framework | Astro 4.x |
| Language | JavaScript / TypeScript |
| Styling | CSS / Tailwind (configurable) |
| Components | Astro Components |
| Build Tool | Vite |
| Deployment | Vercel / Netlify / GitHub Pages |

### Legacy Stack (Static HTML)

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 |
| Scripting | Vanilla JavaScript |
| Assets | Local storage |
| Deployment | Any static host |

---

## Architecture Overview

### Dual Deployment Strategy

```
┌─────────────────────────────────────────────┐
│         Shared Content Source               │
│      (shared-content/content.js)            │
└──────────────┬──────────────────────────────┘
               │
       ┌───────┴───────┐
       │               │
       ▼               ▼
┌─────────────┐ ┌─────────────┐
│   Astro     │ │   Static    │
│   Version   │ │   HTML      │
│             │ │   Version   │
│  - Modern   │ │  - Legacy   │
│  - Fast     │ │  - Simple   │
│  - SEO      │ │  - Compat   │
└─────────────┘ └─────────────┘
       │               │
       └───────┬───────┘
               │
               ▼
        ┌─────────────┐
        │   storage/  │
        │ (Media Lib) │
        └─────────────┘
```

### Why This Approach?

- **Best of Both Worlds** — Modern tools + Legacy compatibility
- **Single Content Source** — Update once, deploy everywhere
- **Easy Migration** — Start with static, upgrade to Astro anytime
- **Portfolio Flexibility** — Choose deployment based on host requirements

---

## Content Management

### Editing Portfolio Content

All portfolio content lives in `shared-content/content.js`. This file is a UMD module that works in both environments:

- **Browser (static HTML):** `<script src="../../shared-content/content.js">` sets `window.siteContent`
- **Node/Vite (Astro):** `createRequire(import.meta.url)('../../../shared-content/content.js')` returns the object

### Adding Media

1. Place files in `my-portfolio/storage/raw-media/`
2. Reference filenames in `content.js` (no paths - just filenames)
3. Astro's `publicDir` config copies them to `dist/` automatically

### Popup Data Flow (Astro)

`Popup.astro` receives `popupData` (filenames only) at build time, serializes it to JSON, and injects it into a `<script define:vars={{ serialized, mediaBase }}>` block. Browser JS reconstructs full paths at runtime:

```js
popupData[key].media = rawData[key].media.map(f => mediaBase + f);
```

---

## Deployment

### Astro Version (Primary/Recommended)

```bash
npm run build   # from astro-portfolio/
```

Drag `astro-portfolio/dist/` to netlify.app/drop.

### Static HTML Version (Backup)

Works as-is - open `my-portfolio/src/index.html` in a browser. The `../../shared-content/content.js` path resolves correctly from disk.

**For Netlify standalone:** Copy `shared-content/content.js` into `my-portfolio/src/`, change the script tag to `<script src="./content.js">`, then drag `my-portfolio/` to Netlify.

---

## Theme Colors

CSS variables in `Layout.astro` (`:root`):

| Variable | Color | Usage |
|---|---|---|
| `--pink-momo` | #ff6b9d | Main accent |
| `--cyan-glow` | #4af0e8 | Secondary accent |
| `--void` | #05030f | Background |
| `--violet` | #7c4fd0 | Accent |
| `--lavender` | #b48fff | Accent |
| `--iolite` | #4b2fa0 | Accent |

---

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Component Guidelines

- Keep components small and focused
- Use semantic HTML
- Follow Astro best practices
- Test both Astro and static versions
- Update `content.js` for data changes

---

## Project Entry Points

| Version | Entry Point | Use Case |
|---|---|---|
| **Astro** | `astro-portfolio/src/pages/index.astro` | Modern hosting (Vercel, Netlify) |
| **Static** | `my-portfolio/src/index.html` | Simple hosting (GitHub Pages, FTP) |

---

## Performance

- **Lighthouse Score:** 95+ (Astro version)
- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Total Bundle Size:** < 50KB (excluding media)

---

## License

This project is for personal portfolio use. All creative work showcased is original.

---

## Acknowledgments

- Built with [Astro](https://astro.build)
- Inspired by modern portfolio best practices
- Media optimizations by community feedback

---

> **Portfolio Philosophy:** Simple, fast, and showcases work - not framework complexity.
