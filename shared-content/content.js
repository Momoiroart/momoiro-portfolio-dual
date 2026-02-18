// shared-content/content.js
// SINGLE SOURCE OF TRUTH — edit here for both static HTML and Astro versions.
// UMD: works in browser (sets window.siteContent) and in Node/Vite (module.exports).
(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) module.exports = factory();
  else root.siteContent = factory();
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  return {

    // ── Hero ──────────────────────────────────────────────────────────────────
    heroTags: ['Python', 'C#', 'Lua', 'Unity', 'Live2D', '3D Art'],

    // filenames only — each version prepends its own mediaBase
    heroShowcase: [
      { file: 'VID_20250914_042848_951.mp4', type: 'video' },
      { file: 'Momoiro.gif',                  type: 'image' },
      { file: 'Drinking tea Hutao.mp4',        type: 'video' },
    ],

    decorationFile: 'Mymodel01 (1).png',

    // ── Showcase ──────────────────────────────────────────────────────────────
    showcase: [
      { title: 'Character Model',  file: 'VID_20250914_042848_951.mp4', type: 'video', desc: 'My signature character design for social media and VTuber use.' },
      { title: 'Animated Artwork', file: 'Momoiro.gif',                  type: 'image', desc: 'Animated GIF of my character in various poses and styles.' },
      { title: 'Live2D Animation', file: 'Drinking tea Hutao.mp4',        type: 'video', desc: 'Dynamic Live2D model for VTuber use.' },
      { title: 'Rigging',          file: 'RiggingforColver.mp4',          type: 'video', desc: 'Behind the scenes rigging process for a Live2D model.' },
    ],

    // ── Skill Popups ──────────────────────────────────────────────────────────
    // media: filenames only
    popupData: {
      graphics: {
        title: 'Computer Graphics',
        category: 'Art & Design',
        description: 'Digital art, illustration, and visual design. Creating promotional materials and banners for various purposes.',
        media: [],
        projects: [
          { title: 'Promotional Art',      desc: 'Marketing materials and banners' },
          { title: 'Digital Illustrations', desc: 'Various art pieces and commissions' },
          { title: 'Social Media Content',  desc: 'Art for VTuber and social platforms' },
        ],
      },
      '3dmodeling': {
        title: '3D Modeling',
        category: '3D Art',
        description: 'Creating 3D assets, environments, and character models. Building models, textures, and animations for games and VR experiences using various 3D tools.',
        media: ['Momoiro.gif', 'Momoiro.mp4'],
        projects: [
          { title: 'Character Models',   desc: '3D character creations and designs' },
          { title: 'Environment Design', desc: '3D scenes and environments' },
          { title: 'Prop Modeling',      desc: 'Various 3D objects and items' },
        ],
      },
      live2d: {
        title: 'Live2D',
        category: 'Animation',
        description: 'Bringing characters to life with 2D animation technology. Creating dynamic, expressive Live2D models for VTuber and interactive use.',
        media: ['Drinking tea Hutao.mp4', 'RiggingforColver.mp4'],
        projects: [
          { title: 'Live2D Models',     desc: 'Interactive 2D character models' },
          { title: 'Expression Systems', desc: 'Multiple expressions and movements' },
          { title: 'VTuber Setup',       desc: 'Ready-to-use Live2D configurations' },
        ],
      },
      motion: {
        title: 'Motion Graphics',
        category: 'Video & Effects',
        description: 'After Effects motion design, visual effects, and animated compositions. Creating engaging video content, transitions, and visual storytelling for promotions and social media.',
        media: ['ColeTiktok.mp4', 'Bamboozled.exe.mp4'],
        projects: [
          { title: 'Video Editing',  desc: 'Promotional and showcase videos' },
          { title: 'Visual Effects', desc: 'VFX and compositing work' },
          { title: 'Motion Design',  desc: 'Animated graphics and transitions' },
        ],
      },
      vrchat: {
        title: 'VRChat Worlds',
        category: 'Virtual Reality',
        description: 'Designing and building immersive virtual reality environments for VRChat. Creating interactive spaces with custom assets, lighting, and atmosphere.',
        media: ['IoliteLand (1).png', 'IoliteLand (5).png', 'IoliteLand (9).png'],
        projects: [
          { title: 'Iolite Lair',         desc: 'Atmospheric cosmos-themed VR world' },
          { title: 'Interactive Spaces',   desc: 'Social VR environments' },
          { title: 'World Optimization',   desc: 'Performance-tuned VR experiences' },
        ],
      },
      unity: {
        title: 'Unity Development',
        category: 'Game Development',
        description: 'Game development, 3D scene design, and interactive experience creation using Unity engine. Building games, VR experiences, and interactive applications.',
        media: [
          'IoliteLair - VRCDefaultWorldScene - Windows, Mac, Linux - Unity 02.mp4',
          'IoliteLand (6).png',
          'IoliteLand (28).png',
        ],
        projects: [
          { title: 'Iolite Lair',      desc: 'Unity-based VR world' },
          { title: 'Game Prototypes',  desc: 'Various game concept projects' },
          { title: 'Interactive Apps', desc: 'Unity-powered applications' },
        ],
      },
    },

    // ── Programming Skills ────────────────────────────────────────────────────
    programmingSkills: [
      { name: 'Python',                      color: 'cyan' },
      { name: 'Object-Oriented Programming', color: 'violet' },
      { name: 'PyQt (GUI)',                  color: 'pink' },
      { name: 'Data Science',                color: 'cyan' },
      { name: 'Pandas',                      color: 'violet' },
      { name: 'Machine Learning',            color: 'pink' },
      { name: 'C#',                          color: 'cyan' },
      { name: 'Unity',                       color: 'violet' },
      { name: 'Lua',                         color: 'pink' },
      { name: 'Roblox Development',          color: 'cyan' },
      { name: 'HTML/CSS',                    color: 'violet' },
      { name: 'Web Development',             color: 'pink' },
      { name: 'Database (SQL)',              color: 'cyan' },
      { name: 'Mobile App Dev',              color: 'violet' },
      { name: 'Game Development',            color: 'pink' },
    ],

    // ── Projects ──────────────────────────────────────────────────────────────
    projects: [
      {
        number: '01',
        title: 'Python Fundamentals',
        category: 'Programming',
        description: 'Core Python programming covering variables, data types, strings, and basic operations.',
        tags: ['Python', 'Basics'],
      },
      {
        number: '02',
        title: 'Mobile Application Development',
        category: 'App Development',
        description: 'Building functional mobile applications from prototype to MVP with user-friendly interfaces.',
        tags: ['Mobile App', 'PyQt', 'MVP'],
      },
      {
        number: '03',
        title: 'Data Science Projects',
        category: 'Data Analysis',
        description: 'Analyzing and visualizing data using Python libraries.',
        tags: ['Python', 'Pandas', 'Visualization'],
      },
      {
        number: '04',
        title: 'Machine Learning',
        category: 'AI & ML',
        description: 'Introduction to ML algorithms and building intelligent systems.',
        tags: ['Machine Learning', 'Python', 'AI'],
      },
      {
        number: '05',
        title: 'Game Development',
        category: 'Games',
        description: 'Creating interactive games using Python - clicker games, paint apps, and more.',
        tags: ['Python', 'Game Dev', 'OOP'],
      },
      {
        number: '06',
        title: 'Web Development',
        category: 'Web',
        description: 'Building dynamic websites with databases, user interactions.',
        tags: ['HTML', 'CSS', 'Database'],
      },
      {
        number: '07',
        title: 'Iolite Lair',
        category: 'VRChat World',
        description: 'Atmospheric VRChat world - dreamy cosmos meets enchanted forest.',
        tags: ['Unity', 'VRChat', 'Environment'],
      },
      {
        number: '08',
        title: 'Roblox Development',
        category: 'Game Development',
        description: 'Creating games for Roblox using Lua scripting.',
        tags: ['Lua', 'Roblox'],
      },
    ],

    // ── Sketchfab Models ──────────────────────────────────────────────────────
    sketchfabModels: [
      { modelId: '06ff6e26018c43b7a5ab653e23c3c6f3', label: 'Hornet Hand — Painted Low Poly Animated' },
      { modelId: 'a765addc976e45c4b6db217f0e0e9388', label: 'Hornet Hand — Low Poly Variant' },
    ],

    // ── Testimonials ──────────────────────────────────────────────────────────
    testimonials: [
      {
        emoji: '🌸',
        author: 'Anonymous Client',
        role: 'Live2D Commission',
        quote: 'Momoiro created the most amazing Live2D model for my VTuber channel! The expressions are so smooth and the rigging is perfect. Highly recommended!',
        bgColor: 'var(--pink-momo)',
      },
      {
        emoji: '👨‍👩‍👧',
        author: 'Parent',
        role: 'Programming Class',
        quote: 'Great teaching! Patient and explains concepts clearly. My child now loves coding thanks to the fun lessons.',
        bgColor: 'var(--cyan-glow)',
      },
      {
        emoji: '🎮',
        author: 'VRChat Community',
        role: 'World Design',
        quote: 'The VRChat world they created is absolutely beautiful! Our community loves hanging out there. The attention to detail is amazing.',
        bgColor: 'var(--violet)',
      },
    ],

    // ── Contact Links ─────────────────────────────────────────────────────────
    contactLinks: [
      { icon: '📸', name: 'Instagram', username: '@nobemomoiro',  url: 'https://www.instagram.com/nobemomoiro/' },
      { icon: '𝕏',  name: 'X / Twitter', username: '@NobeMomoiro', url: 'https://x.com/NobeMomoiro' },
      { icon: '🔗', name: 'Linktree',   username: 'All links',    url: 'https://linktr.ee/NobeMomoiro' },
      { icon: '💼', name: 'Fastwork',   username: 'Commissions',  url: 'https://fastwork.co/user/momoiroart' },
      { icon: '☕', name: 'Ko-fi',      username: 'Support',      url: 'https://ko-fi.com/momoiroart' },
    ],

  };
}));
