import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Aldi-Official/',
  title: "Aldi Official",
  description: "Laman Web Resmi Aldi Official",

  head: [
    ['link', { rel: 'icon', href: '/Aldi-Official/logo.png' }],
    ['meta', { name: 'google-site-verification', content: '0jovBhkx6wFs5Wi852YS2Z0V8rAK4VXJ8injC0XJ_RI' }]
  ],

  themeConfig: {
    logo: '/Aldi-Official/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Telegram', link: 'https://t.me/jurag4n_channel' },
      { text: 'Whatsapp', link: 'https://chat.whatsapp.com/HUYV2mdlKf0IEkX9enm7IK?mode=gi_t' }
    ],

    // Sidebar interaktif dengan ikon
    sidebar: [
      {
        text: 'Download',
        items: [
          { text: 'SensiX Beta', link: '/guide/sensi', icon: 'download' },
          { text: 'XModZ Plugin', link: '/guide/xmodz', icon: 'puzzle-piece' }
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Apa itu XModZ', link: '/guide/xmodz-info', icon: 'info-circle' },
          { text: 'FAQ', link: '/guide/faq', icon: 'question-circle' }
        ]
      },
      {
        text: 'Community',
        items: [
          { text: 'Telegram', link: 'https://t.me/jurag4n_channel', icon: 'telegram' },
          { text: 'GitHub', link: 'https://github.com/xmodzid/Aldi-Official', icon: 'github' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xmodzid/Aldi-Official' },
      { icon: 'twitter', link: 'https://twitter.com/youraccount' },
      { icon: 'telegram', link: 'https://t.me/jurag4n_channel' }
    ],

    footer: {
      message: 'Aldi Official Website',
      copyright: 'Copyright © 2026 Aldi Official'
    },

    lastUpdated: true,
    search: { provider: 'local' },

    outline: [2, 3],
    docFooter: { prev: 'Sebelumnya', next: 'Selanjutnya' },

    // Hero homepage (menggunakan custom component di /index.md)
    hero: {
      image: '/Aldi-Official/logo.png',
      title: 'Aldi Official',
      tagline: 'Platform Plugin Mod PUBG Mobile Lite & Tools Android',
      cta: [
        { text: 'Download SensiX Beta', link: '/guide/sensi', type: 'primary' },
        { text: 'Download XModZ Plugin', link: '/guide/xmodz', type: 'secondary' }
      ]
    }
  }
})