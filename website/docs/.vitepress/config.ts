import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: "Aldi Official",
  description: "Laman Web Resmi Aldi Official, Semua Tutorial, Aplikasi, Ada Di Sini",

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],

  ],
  
  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Telegram', link: 'https://t.me/jurag4n_channel' },
      { text: 'Whatsapp', link: 'https://chat.whatsapp.com/HUYV2mdlKf0IEkX9enm7IK?mode=gi_t' },
    ],

    sidebar: [
      {
        text: 'Download SensiX Beta',
        items: [
          { text: 'SensiXBeta', link: '/guide/sensi' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xmodzid/Aldi-Official' }
    ],

    footer: {
      message: 'Official Website ',
      copyright: 'Copyright © 2026 Aldi Official'
    },

    search: { provider: 'local' }
  }
})
