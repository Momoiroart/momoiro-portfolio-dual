# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML portfolio website - Momoiro's Workshop - showcasing digital art, 3D modeling, Live2D, motion design, and programming skills. The site features interactive popups, Sketchfab 3D model embedding, and a dark theme with pink accents.

## Files

```
D:\Claude\
├── CLAUDE.md                          # This file
├── AGENTS.md                          # Workspace rules/behavior for Claude
├── SOUL.md                            # Claude's personality/values
├── USER.md                            # About the user
├── IDENTITY.md
├── TOOLS.md
├── HEARTBEAT.md
├── BOOTSTRAP.md
│
├── my-portfolio/
│       ├── README.md
│       ├── src/
│       │   └── index.html             # Main portfolio (single HTML file with all CSS/JS)
│       └── backup/                    # Timestamped HTML backups
│
├── storage/
│   └── raw-media/                     # All media assets (images, videos, GIFs)
│
└── Notes/
    ├── learning/
    │   ├── portfolio.md               # Learning documentation
    │   ├── Tutorial.md                # Hosting tutorial (Netlify/GitHub Pages)
    │   ├── LearningPath.md
    │   ├── LearningSystem.md          # Learning progress tracker
    │   └── Mastercode.md              # Course materials reference
    └── class-methodological/
        └── ClassMethadological/       # PDF lesson files (Python, OOP, Web Dev, ML, etc.)
```

## Development

This is a static HTML file - no build process required.

**Preview locally:**
- Open `my-portfolio/src/index.html` in a web browser
- Or run `npx serve D:/Claude/my-portfolio/src` in the project directory

**Deploy to Netlify:**
- Go to https://app.netlify.com/drop
- Drag the `my-portfolio/` folder (including `src/` and any linked assets)

**Note:** Media files live in `storage/raw-media/`. If the HTML references `WorkStorage/...` paths, they may need updating to `../../../storage/raw-media/...` relative to `src/index.html`.

## Site Structure

The portfolio has these sections:
1. Hero (title, tags, mini preview thumbnails)
2. About (bio, stats)
3. Showcase (videos/images grid)
4. Skills (6 clickable cards with popups)
5. Testimonials
6. Contact (5 social media links)

## Key Features

**Popup System:** Click any skill card to open a popup with:
- Description
- Media gallery (images/videos from storage/raw-media)
- Related projects list

Data is stored in JavaScript object `popupData` - each skill has a unique key (e.g., 'graphics', '3dmodeling', 'live2d').

**Sketchfab Integration:** Use iframe embeds to display interactive 3D models:
```html
<iframe src="https://sketchfab.com/models/MODEL_ID/embed"></iframe>
```

**Custom Cursor:** JavaScript creates a smooth-following pink cursor effect.

**Starfield:** Canvas-based animated background with twinkling stars.

## Adding/Editing Content

**Change skills popups:** Edit `popupData` object in the `<script>` section of `src/index.html`

**Add projects:** Add new `<article class="project-card">` in the project-grid

**Update contact links:** Edit the contact-grid section with new href values

**Change media:** Update src attributes to point to files in `storage/raw-media/`

## Theme Colors (CSS Variables)

Main colors defined in `:root`:
- `--pink-momo: #ff6b9d` - Main accent
- `--cyan-glow: #4af0e8` - Secondary accent
- `--void: #05030f` - Background
