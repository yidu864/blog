import { defineUserConfig } from 'vuepress'
import type { GungnirThemeOptions } from 'vuepress-theme-gungnir'
import { navbar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

const repo = 'yidu864/blog'

export default defineUserConfig<GungnirThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: "yidu864's log",
  description: "yidu864's log",

  // 主题和它的配置
  theme: 'gungnir',
  themeConfig: {
    repo,
    docsDir: 'docs',
    docsBranch: 'main',

    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: 'yidu864',
      avatar: '/imgs/avatar.jpg',

      // 必须：个人简介，将在首页显示
      description: 'a simple coder',

      // 可选：社交平台账号，将在首页和移动端侧边栏显示
      sns: {
        github: 'yidu864', // Github
        email: '943070101@qq.com', // 邮箱
        // linkedin: 'xiaohan-zou-55bba0160', // 领英
        // facebook: 'renovamen.zou', // Facebook
        // twitter: 'renovamen_zxh', // 推特
        // zhihu: 'chao-neng-gui-su', // 知乎
        // weibo: 'your-weibo-id', // 新浪微博
        // rss: '/rss.xml', // RSS 文件的链接
        // 添加其他的社交平台
        // bilibili: {
        //   icon: 'ri-bilibili-line', // 社交平台的图标
        //   link: 'https://www.bilibili.com/', // 主页链接
        // },
      },
    },
    homeHeaderImages: [
      {
        path: '/imgs/home-bg/1.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/imgs/home-bg/2.jpg',
        mask: 'rgb(251, 170, 152, .2)',
      },
      {
        path: '/imgs/home-bg/3.jpg',
        mask: 'rgb(251, 170, 152, .2)',
      },
    ],
    locales: {
      '/': {
        navbar: navbar.zh,
      },
    },
    pages: {
      tags: {
        subtitle: 'Black Sheep Wall',
        bgImage: {
          path: '/imgs/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)',
        },
      },
      links: {
        subtitle:
          'When you are looking at the stars, please put the brightest star shining night sky as my soul.',
        bgImage: {
          path: '/imgs/pages/links.jpg',
          mask: 'rgba(64, 118, 190, 0.5)',
        },
      },
    },
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      giscus: {
        repo: 'ninjiaGongyu/blog-comments',
        repoId: 'R_kgDOHBjyCQ',
        category: 'Announcements',
        categoryId: 'DIC_kwDOHBjyCc4COKZm',
        darkTheme: 'https://zxh.io/styles/giscus-dark.css',
      },
      mdPlus: {
        all: true,
      },
      // ga: 'G-HCQSX53XFG',
      // ba: '75381d210789d3eaf855fa16246860cc',
      // rss: {
      //   siteURL: 'https://zxh.io',
      //   copyright: 'Renovamen 2018-2022',
      // },
    },
    footer: `
      &copy; <a href="https://github.com/yidu864" target="_blank">yidu864</a> 2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,
    markdown: {
      extractHeaders: {
        level: [2, 3, 4, 5],
      },
      code: {
        lineNumbers: false,
      },
    },
  },
  plugins: [['vuepress-plugin-chart'], ['@renovamen/vuepress-plugin-mermaid']],
})
