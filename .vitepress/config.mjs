import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link",{rel: "icon", href: "芒果.png"}]],
  title: "我的女孩陈淑琴",
  description: "A VitePress Site",
  themeConfig: {
    sidebar: false,
    aside: "left",
    outlineTitle: "目录",
    outline: [2,6],
    logo: "/芒果.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '伟', 
        items:[
        {text: "琴", link: "/"},
        {text: "小提琴", link: "/markdown-examples"},
      ] },
      { text: '宏伟', link: '/markdown-examples' },
      { text: '自动生成侧边栏1', link: '/front-end/react/' },
      { text: '自动生成侧边栏2', link: '/backend/rabbitmq/' },
      { text: '两边蓝演示', link: '/两边栏演示'}
    ],

    /* sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown 演示', link: '/markdown-examples' },
          { text: 'Runtime API 演示', link: '/api-examples' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown 演示', link: '/markdown-examples' },
          { text: 'Runtime API 演示', link: '/api-examples' }
        ]
      },
      { "/front-end/react": set_sidebar("front-end/react"),
        "/backend/rabbitmq": set_sidebar("backend/rabbitmq"),
        
     }
    ], */

    /* sidebar: { "/front-end/react": set_sidebar("front-end/react"),
        "/backend/rabbitmq": set_sidebar("backend/rabbitmq"),        
     }, */
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
    copyright:"Copyright@ 2025 Albert Lin&Chen",
  },
   // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
})
