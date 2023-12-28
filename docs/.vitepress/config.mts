import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Custom-Npc",
  description: "The Offical Documentation/Guide for the roblox plugin 'Custom-Npc'.",

  base: "/Custom-Npc-Docs/",

  head: [['link', { rel: 'icon', href: '/Custom-Npc-Docs/favicon.ico' }]],

  themeConfig: {
    siteTitle: "Custom-Npc",
    logo: "/icon.png",

    editLink: {
      pattern: 'https://github.com/GameboyTheDev/Custom-Npc-Docs',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Built With VitePress',
      copyright: 'Copyright © 2019-present GameboyTheDev'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Guide", link: '/guide/index' },
      { text: "Learn more", link: '/learnmore' },
      { text: "Changelog", link: '/changelog' },
      { text: "Install", link: "https://create.roblox.com/marketplace/asset/14535952834/" }

      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Creating An Npc', link: '/guide/' },
            { text: 'Saving & Loading Npcs', link: '/guide/savingandloading' },
            { text: 'Uploading Npcs', link: '/guide/uploadingnpcs' },
            { text: 'Editing An Npc', link: '/guide/editing' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GameboyTheDev/Custom-Npc-Docs' },
      // { icon: {svg: "/assets/DevforumIcon"}, link: 'https://devforum.roblox.com/t/custom-npc-customizing-npcs-just-got-a-lot-easier'}
    ],
  }
})
