// shared-content/content.js
// SINGLE SOURCE OF TRUTH — edit here for both static HTML and Astro versions.
// ESM module for Astro/Vite

export const siteContent = {

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
          { title: 'Environment Design', desc: 'Virtual spaces and game levels' },
          { title: 'Asset Creation',     desc: 'Props, weapons, and game-ready assets' },
        ],
      },
      live2d: {
        title: 'Live2D',
        category: 'Animation',
        description: 'Creating dynamic 2D animations using Live2D technology. Bringing characters to life with smooth movements and expressions for VTuber and game applications.',
        media: ['Drinking tea Hutao.mp4'],
        projects: [
          { title: 'VTuber Models',    desc: 'Interactive streaming avatars' },
          { title: 'Emote Packs',      desc: 'Animated expressions and reactions' },
          { title: 'Game Sprites',     desc: 'Animated 2D game characters' },
        ],
      },
      motion: {
        title: 'Motion Design',
        category: 'Animation',
        description: 'Creating animated graphics, transitions, and visual effects. Motion graphics for videos, social media, and promotional content.',
        media: [],
        projects: [
          { title: 'Video Intros',     desc: 'Animated openings for content' },
          { title: 'SocialFX', desc: 'Animated posts and stories Media G' },
          { title: 'Transitions',      desc: 'Smooth scene transitions' },
        ],
      },
      vrchat: {
        title: 'VRChat',
        category: 'Virtual Reality',
        description: 'Building immersive VR experiences, avatars, and worlds for VRChat. Creating interactive environments and characters for the VR community.',
        media: [],
        projects: [
          { title: 'VR Avatars',       desc: 'Custom VRChat characters' },
          { title: 'Virtual Worlds',   desc: 'Interactive VR environments' },
          { title: 'Interactive Props', desc: 'Usable objects and gadgets' },
        ],
      },
      unity: {
        title: 'Unity',
        category: 'Game Development',
        description: 'Building games and interactive experiences using Unity engine. Creating gameplay mechanics, levels, and complete game prototypes.',
        media: [],
        projects: [
          { title: 'Game Prototypes',  desc: 'Playable game demos' },
          { title: 'Interactive Apps', desc: 'Unity-based applications' },
          { title: 'VR Experiences',   desc: 'Unity VR projects' },
        ],
      },
    },

    // ── Skills Overview ───────────────────────────────────────────────────────
    skills: [
      { name: 'Computer Graphics',   key: 'graphics',    icon: '🎨' },
      { name: '3D Modeling',        key: '3dmodeling',  icon: '🎲' },
      { name: 'Live2D',             key: 'live2d',      icon: '🎭' },
      { name: 'Motion Design',      key: 'motion',      icon: '🎬' },
      { name: 'VRChat',             key: 'vrchat',       icon: '🥽' },
      { name: 'Unity',              key: 'unity',       icon: '🎮' },
    ],

    // ── Programming Skills ────────────────────────────────────────────────────
    programmingSkills: [
      { name: 'Python',        level: 80, icon: '🐍' },
      { name: 'C#',           level: 65, icon: '🔷' },
      { name: 'Lua (Roblox)', level: 70, icon: '🔴' },
      { name: 'HTML/CSS',     level: 75, icon: '🌐' },
      { name: 'JavaScript',   level: 60, icon: '📜' },
    ],

    // ── Projects ──────────────────────────────────────────────────────────────
    projects: [
      {
        title: 'Momoiro Character',
        desc: 'My signature VTuber character with full Live2D rigging and expressions.',
        tags: ['Live2D', 'Character Art', 'VTuber'],
        image: 'Momoiro.gif',
      },
      {
        title: 'Iolite Land',
        desc: 'A cozy Roblox roleplay world with custom assets and interactive elements.',
        tags: ['Roblox', 'Game Dev', 'Lua'],
        image: 'IoliteLand (1-29).png',
      },
      {
        title: 'VRChat Worlds',
        desc: 'Multiple VRChat world creations shared with the community.',
        tags: ['VRChat', 'VR', 'World Building'],
        image: 'Momoiro.gif',
      },
    ],

    // ── Sketchfab Models ─────────────────────────────────────────────────────
    sketchfabModels: [
      { id: '1dc08b113331955602567ef2621a', title: 'Momoiro Model' },
    ],

    // ── Testimonials ──────────────────────────────────────────────────────────
    testimonials: [
      {
        name: 'Client Alpha',
        role: 'VTuber Agency',
        text: 'Absolutely love the Live2D work! Perfect for streaming.',
      },
      {
        name: 'Client Beta',
        role: 'Game Developer',
        text: 'Great Unity scripts and VRChat assets. Highly recommended!',
      },
      {
        name: 'Client Gamma',
        role: 'Content Creator',
        text: 'Beautiful character designs and smooth animations.',
      },
    ],

    // ── Contact Links ─────────────────────────────────────────────────────────
    contactLinks: [
      { name: 'Discord', url: 'https://discord.gg/example', icon: '💬' },
      { name: 'Twitter', url: 'https://twitter.com/example', icon: '🐦' },
      { name: 'YouTube', url: 'https://youtube.com/@example', icon: '📺' },
      { name: 'GitHub', url: 'https://github.com/Momoiroart', icon: '🐙' },
    ],
};
