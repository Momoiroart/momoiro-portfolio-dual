# Momoiro's Workshop — Portfolio

> Dark-themed creative portfolio showcasing digital art, 3D modeling, Live2D, motion design, VRChat, and programming.

[![Live](https://img.shields.io/badge/live-momoiro--portfolio--dual.vercel.app-ff6b9d?style=flat-square)](https://momoiro-portfolio-dual.vercel.app/)
[![Auto Deploy](https://img.shields.io/badge/vercel-auto%20deploy%20on%20push-00C7B7?style=flat-square)](https://vercel.com)
[![GitHub](https://img.shields.io/badge/github-momoiro--portfolio--dual-7c4fd0?style=flat-square)](https://github.com/Momoiroart/momoiro-portfolio-dual)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

---

## Live Site

**[https://momoiro-portfolio-dual.vercel.app/](https://momoiro-portfolio-dual.vercel.app/)**

GitHub → Vercel auto-deploy is active. Push to `main` and Vercel redeploys automatically.

> Currently serving the **Static HTML version** (`static-legacy/`).
> Astro version (`src/`) is on hold — builds successfully on Vercel's server.

---

## Architecture

```
momoiro-portfolio-dual/
│
├── static-legacy/          ← LIVE version (deployed to Vercel)
│   ├── index.html          ← Full portfolio page (single file, self-contained)
│   ├── storage/            ← All media: images, videos, 3D models
│   └── vercel.json         ← Static deployment config
│
├── src/                    ← Astro version (on hold)
│   ├── layouts/
│   ├── pages/
│   └── *.astro             ← Component files
│
├── shared-content/
│   └── content.js          ← Shared data source for Astro version
│
├── storage/                ← Root media library (used by Astro build)
├── public/                 ← Astro public assets
├── screenshots/            ← Repo preview images
│
├── vercel.json             ← Root config: outputDirectory = static-legacy
├── astro.config.mjs        ← Astro config
└── package.json
```

---

## Deploy

### Push to auto-deploy (recommended)

```bash
cd D:\Claude\_publish\momoiro-portfolio-dual
git add .
git commit -m "update: describe your changes"
git push
```

Vercel picks up the push and redeploys automatically.

### Force manual deploy

```bash
cd D:\Claude\_publish\momoiro-portfolio-dual
vercel --prod --yes
```

---

## Backup

A git tag backup of the working version is saved:

```bash
# View backups
git tag -l "backup/*"

# Restore backup
git checkout backup/static-working-2026-02

# Create new backup
git tag -a "backup/YYYY-MM-label" -m "description"
git push origin --tags
```

---

## Editing Content

### Static version (current live)

Edit `static-legacy/index.html` directly — all content and styles are in one file.

Media files live in `static-legacy/storage/` and are referenced as `storage/filename`.

### Astro version (on hold)

Edit `shared-content/content.js`:

| Key | Section |
|-----|---------|
| `heroTags` | Hero section tags |
| `heroShowcase` | Hero carousel media |
| `showcase` | Main showcase grid |
| `popupData` | Skill popup data + media |
| `skills` | Skill cards |
| `programmingSkills` | Programming languages |
| `projects` | Project gallery |
| `testimonials` | Client testimonials |
| `contactLinks` | Contact / social links |

---

## Local Dev (Astro)

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 (single file, static version) |
| Framework | Astro 4.x (on hold) |
| Styling | CSS3 with custom properties |
| Scripting | Vanilla JavaScript |
| Fonts | Orbitron, Space Mono, Syne (Google Fonts) |
| Hosting | Vercel (GitHub auto-deploy) |

### Theme Colors

| Variable | Value | Use |
|----------|-------|-----|
| `--pink-momo` | `#ff6b9d` | Main accent |
| `--cyan-glow` | `#4af0e8` | Secondary accent |
| `--void` | `#05030f` | Background |
| `--violet` | `#7c4fd0` | Highlights |
| `--lavender` | `#b48fff` | Soft highlights |

---

## Portfolio Sections

| Section | Description |
|---------|-------------|
| Hero | Intro, tags, showcase carousel |
| Skills | Computer graphics, 3D, Live2D, motion, VRChat, Unity, programming |
| Showcase | Featured work grid |
| Projects | Project cards with links |
| Testimonials | Client feedback |
| Contact | Socials and contact links |

---

## Related Projects

| Project | Live | GitHub |
|---------|------|--------|
| **This Portfolio** | [momoiro-portfolio-dual.vercel.app](https://momoiro-portfolio-dual.vercel.app/) | [momoiro-portfolio-dual](https://github.com/Momoiroart/momoiro-portfolio-dual) |
| **Learn Guide** | [learn-guide.vercel.app](https://learn-guide.vercel.app) | [conference-learn-guide](https://github.com/Momoiroart/conference-learn-guide) |
| **Conference Builder** | — | [conference-portfolio-builder](https://github.com/Momoiroart/conference-portfolio-builder) |
| **MySpaceInvader** | — | [MySpaceInavder](https://github.com/Momoiroart/MySpaceInavder) |

---

## License

MIT — Personal portfolio project. All creative work is original.
