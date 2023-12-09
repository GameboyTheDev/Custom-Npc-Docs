import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Custom-Npc",
  description: "",
  base: "/Custom-Npc/",
  themeConfig: {
    logo: '/assets/CustomNpcIconNoBG.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Guide", link: './guide/index' },
      { text: "Learn more", link: './learnmore' },
      { text: "Changelog", link: './changelog' },
      { text: "Install", link: "https://create.roblox.com/marketplace/asset/14535952834/" }

      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Custom-Npc Docs',
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})
