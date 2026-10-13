import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NLP Group iOS UI',
  description: 'Pure iOS Human Interface Design System for Web & Modern Frameworks — NLP Group',
  base: '/ios-design-system/',

  head: [
    ['meta', { name: 'theme-color', content: '#007AFF' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'NLP Group iOS UI' }],
    ['meta', { property: 'og:title', content: 'NLP Group iOS UI — iOS Design System' }],
    ['meta', { property: 'og:description', content: 'Pure iOS HIG Design System cho Web & Modern Frameworks' }],
  ],

  themeConfig: {
    siteTitle: '@nlpgroup/ios-ui',

    nav: [
      { text: 'Bắt đầu', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/switch' },
      { text: 'Tokens', link: '/guide/tokens' },
      {
        text: 'v0.1.0',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/alisababivip/ios-design-system',
          },
          {
            text: 'GitHub Packages',
            link: 'https://github.com/alisababivip?tab=packages',
          },
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
          collapsed: false,
          items: [
            { text: 'Switch',            link: '/components/switch' },
            { text: 'Segmented Control', link: '/components/segmented-control' },
            { text: 'Slider',            link: '/components/slider' },
            { text: 'Stepper',           link: '/components/stepper' },
            { text: 'Text Field',        link: '/components/text-field' },
            { text: 'Pin / OTP Input',   link: '/components/pin-input' },
            { text: 'Secure Field',      link: '/components/secure-field' },
          ],
        },
        {
          text: 'Sắp ra mắt',
          collapsed: true,
          items: [
            { text: 'Navigation Bar', link: '/components/navbar' },
            { text: 'Tab Bar',        link: '/components/tabbar' },
            { text: 'Toast / HUD',    link: '/components/toast' },
            { text: 'Date Picker',    link: '/components/date-picker' },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/alisababivip/ios-design-system',
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2024 NLP Group — Kiến tạo hệ sinh thái đổi mới bền vững',
    },

    search: {
      provider: 'local',
    },

    editLink: {
      pattern:
        'https://github.com/alisababivip/ios-design-system/edit/main/apps/docs/:path',
      text: 'Chỉnh sửa trang này trên GitHub',
    },

    lastUpdated: {
      text: 'Cập nhật lần cuối',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
})
