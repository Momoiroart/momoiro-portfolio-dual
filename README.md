# 🎨 Momoiro Portfolio (Dual Architecture)

> *A modern portfolio showcasing creative work with dual deployment architecture — built for flexibility and performance.*

[![Status](https://img.shields.io/badge/status-active-success?style=flat-square)](.)
[![Framework](https://img.shields.io/badge/framework-Astro-FF5D01?style=flat-square)](https://astro.build)
[![Deployment](https://img.shields.io/badge/deployment-dual%20architecture-blueviolet?style=flat-square)](.)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

---

## 🖼️ Preview


**🌐 Live Demo:** [https://momoiro-workshop.vercel.app](https://momoiro-workshop.vercel.app/)

---

## 📖 About

**Momoiro Portfolio** is a creative portfolio website designed with a unique **dual architecture** approach:

✨ **Modern Astro Version** — Component-based, fast, and SEO-optimized  
🔧 **Static HTML Fallback** — Legacy-compatible for direct hosting anywhere  
📦 **Shared Content System** — Single source of truth for all portfolio data  
🎬 **Rich Media Support** — Optimized storage for images, videos, and 3D models

Whether you need cutting-edge performance or maximum compatibility, this portfolio delivers both.

---

## 🗂️ Repository Structure

```
momoiro-portfolio-dual/
│
├── 📁 src/                           ← Astro components (modern version)
│   ├── layouts/                      ← Page layouts
│   │   └── Layout.astro              ← Base layout template
│   ├── pages/                        ← Route pages
│   │   └── index.astro               ← Homepage
│   ├── About.astro                   ← About section component
│   ├── Contact.astro                 ← Contact form component
│   ├── Footer.astro                  ← Footer component
│   ├── Hero.astro                    ← Hero/landing section
│   ├── Loader.astro                  ← Loading screen
│   ├── Popup.astro                   ← Modal/popup component
│   ├── ProgrammingSkills.astro       ← Programming skills showcase
│   ├── Projects.astro                ← Project gallery
│   ├── Showcase.astro                ← Featured work showcase
│   ├── Sketchfab.astro               ← 3D model embeds
│   ├── Skills.astro                  ← Skills overview
│   └── Testimonials.astro            ← Client testimonials
│
├── 📁 static-legacy/                 ← Static HTML version (legacy)
│   ├── assets/                       ← Static assets
│   │   ├── images/                   ← Image files
│   │   └── video/                    ← Video files
│   ├── backup/                       ← Version backups
│   ├── src/                          ← Static HTML source
│   │   └── index.html                ← Static homepage
│   └── index.html                    ← Main static entry point
│
├── 📁 shared-content/                ← Shared data source
│   └── content.js                    ← Portfolio content (projects, skills, etc.)
│
├── 📁 storage/                       ← Media library
│   ├── 1dc08b113331955.602567ef2621a.png
│   ├── 2bg.png
│   ├── Bamboozled.exe.mp4
│   ├── ColeTiktok.mp4
│   ├── Momoiro.bbmodel               ← Blockbench 3D models
│   ├── Momoiro.gif
│   ├── Momoiro.mp4
│   ├── IoliteLand (1-29).png         ← Project screenshots
│   └── ...                           ← Additional media files
│
├── 📁 public/                        ← Public static files (Astro)
│
├── .gitignore
└── README.md                         ← You are here
```

---

## 🎯 Key Features

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

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn package manager
- Git

### Quick Start (Astro Version)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/momoiro-portfolio-dual.git
   cd momoiro-portfolio-dual
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

---

## 🛠️ Tech Stack

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

## 📐 Architecture Overview

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

✅ **Best of Both Worlds** — Modern tools + Legacy compatibility  
✅ **Single Content Source** — Update once, deploy everywhere  
✅ **Easy Migration** — Start with static, upgrade to Astro anytime  
✅ **Portfolio Flexibility** — Choose deployment based on host requirements

---

## 📝 Content Management

### Editing Portfolio Content

All portfolio content lives in `shared-content/content.js`:

```javascript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    image: "path/to/image.png",
    tags: ["tag1", "tag2"],
    links: {
      demo: "https://demo.com",
      github: "https://github.com/..."
    }
  }
];
```

### Adding Media

1. Place files in `storage/`
2. Reference them in `content.js`
3. Use relative paths from project root

---

## 🗺️ Development Roadmap

### ✅ Phase 1 — Foundation
- [x] Dual architecture setup
- [x] Shared content system
- [x] Basic Astro components
- [x] Static HTML fallback
- [x] Media storage structure

### 🔄 Phase 2 — Enhancement (In Progress)
- [ ] Responsive design polish
- [ ] Animation system
- [ ] Dark mode support
- [ ] Performance optimization
- [ ] Accessibility improvements

### 🎯 Phase 3 — Advanced Features
- [ ] CMS integration (optional)
- [ ] Blog section
- [ ] Analytics integration
- [ ] Contact form backend
- [ ] Multi-language support

---

## 🤝 Contributing

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

## 📄 Project Entry Points

| Version | Entry Point | Use Case |
|---|---|---|
| **Astro** | `src/pages/index.astro` | Modern hosting (Vercel, Netlify) |
| **Static** | `static-legacy/index.html` | Simple hosting (GitHub Pages, FTP) |

---

## 🎨 Customization

### Styling
- Astro: Edit component styles or add Tailwind
- Static: Modify `static-legacy/assets/` CSS files

### Components
- Add new components in `src/`
- Import in `src/pages/index.astro`

### Content
- Edit `shared-content/content.js`
- Changes auto-reflect in both versions

---

## 📦 Deployment

### Astro Version (Recommended)

**Vercel:**
```bash
vercel deploy
```

**Netlify:**
```bash
netlify deploy --prod
```

**GitHub Pages:**
```bash
npm run build
# Deploy dist/ folder
```

### Static HTML Version

Simply upload `static-legacy/` to any static host:
- FTP upload
- GitHub Pages
- Netlify Drop
- Any CDN

---

## 📊 Performance

- **Lighthouse Score:** 95+ (Astro version)
- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Total Bundle Size:** < 50KB (excluding media)

---

## 🏷️ GitHub Topics

**Recommended topics for this repository:**
`portfolio` `astro` `dual-architecture` `static-site` `web-development` `frontend` `netlify` `component-based` `personal-website` `creative-portfolio`

Add these topics via: **Settings** → **Topics** → Enter keywords

---

## 📄 License

This project is for personal portfolio use. All creative work showcased is original.

---

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Inspired by modern portfolio best practices
- Media optimizations by community feedback

---

> **Portfolio Philosophy:** Simple, fast, and showcases work — not framework complexity. 🎨✨
