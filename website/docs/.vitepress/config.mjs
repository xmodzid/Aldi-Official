import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Aldi-Official/',
  title: "Aldi Official",
  description: "Laman Web Resmi Aldi Official",

  head: [
    // Favicon
    ['link', { rel: 'icon', href: '/Aldi-Official/logo.png' }],
    // Google Site Verification
    ['meta', { name: 'google-site-verification', content: '0jovBhkx6wFs5Wi852YS2Z0V8rAK4VXJ8injC0XJ_RI' }]
  ],

  themeConfig: {
    logo: '/Aldi-Official/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Telegram', link: 'https://t.me/jurag4n_channel' },
      { text: 'Whatsapp', link: 'https://chat.whatsapp.com/HUYV2mdlKf0IEkX9enm7IK?mode=gi_t' }
    ],

    sidebar: [
      {
        text: 'Download SensiX Beta',
        items: [
          { text: 'SensiXBeta', link: '/guide/sensi' }
        ]
      }
      {
        text: 'Download XModZ Plugin',
        items: [
          { text: 'XModZ', link: '/guide/xmodz' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xmodzid/Aldi-Official' }
    ],

    footer: {
      message: 'Official Website',
      copyright: 'Copyright © 2026 Aldi Official'
    },
    lastUpdated: true,
    search: { provider: 'local' }
  }
})