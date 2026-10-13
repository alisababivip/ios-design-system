import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NLP Group iOS UI',
  description: 'Pure iOS Human Interface Design System for Web & Modern Frameworks',
  base: '/ios-design-system/',   // phải khớp với tên repo GitHub

  head: [
    ['meta', { name: 'theme-color', content: '#007AFF' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'NLP Group iOS UI' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '@nlpgroup/ios-ui',

    nav: [
      { text: 'Bắt đầu', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/switch' },
      { text: 'Tokens', link: '/tokens/' },
      {
        text: 'v0.1.0',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'GitHub', link: 'https://github.com/alisababivip/ios-design-system' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Hướng dẫn',
          items: [
            { text: 'Giới thiệu', link: '/guide/' },
            { text: 'Cài đặt', link: '/guide/getting-started' },
            { text: 'Design Tokens', link: '/guide/tokens' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Controls & Inputs',
          items: [
            { text: 'Switch',             link: '/components/switch' },
            { text: 'Segmented Control',  link: '/components/segmented-control' },
            { text: 'Slider',             link: '/components/slider' },
            { text: 'Stepper',            link: '/components/stepper' },
            { text: 'Text Field',         link: '/components/text-field' },
            { text: 'Pin / OTP Input',    link: '/components/pin-input' },
            { text: 'Secure Field',       link: '/components/secure-field' },
          ],
        },
        {
          text: 'Sắp ra mắt',
          items: [
            { text: 'Navigation Bar',  link: '/components/navbar' },
            { text: 'Tab Bar',         link: '/components/tabbar' },
            { text: 'Toast / HUD',     link: '/components/toast' },
            { text: 'Date Picker',     link: '/components/date-picker' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alisababivip/ios-design-system' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2024 NLP Group — Kiến tạo hệ sinh thái đổi mới bền vững',
    },

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/alisababivip/ios-design-system/edit/main/apps/docs/:path',
      text: 'Chỉnh sửa trang này trên GitHub',
    },

    lastUpdated: {
      text: 'Cập nhật lần cuối',
    },
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
})
