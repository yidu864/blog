import { defineUserConfig, viteBundler } from 'vuepress'
import { gungnirTheme } from 'vuepress-theme-gungnir'
import { navbar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

const fullyear = new Date().getFullYear()

export default defineUserConfig({
  // 站点配置
  lang: 'zh-CN',
  title: "yidu864's log",
  description: "yidu864's log",

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/imgs/logo/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/imgs/logo/favicon-32x32.png`,
      },
    ],
    ['meta', { name: 'application-name', content: 'Xiaohan Zou' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Xiaohan Zou' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    ],
    ['meta', { name: 'theme-color', content: '#377bb5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#377bb5' }],
  ],

  bundler: viteBundler(),

  // 主题和它的配置
  theme: gungnirTheme({
    repo: 'yidu864/yidu864.github.io',
    docsDir: 'docs',
    docsBranch: 'main',

    hitokoto: 'https://v1.hitokoto.cn?c=i', // enable hitokoto (一言) or not?

    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: 'yidu864',
      avatar: '/imgs/avatar.jpg',

      // 必须：个人简介，将在首页显示
      description: 'on learning...',

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
      'https://iili.io/HYxX50l.png',
      'https://iili.io/HYxXusf.png',
      'https://iili.io/HYxXIxs.png',
      'https://iili.io/HYxXxbn.png',
      'https://iili.io/HYxXoOX.png',
      'https://iili.io/HYxXnRt.png',
    ]
      .map((v) => ({
        path: v,
        mask: 'rgb(251, 170, 152, .2)',
      }))
      .reverse(),
    pages: {
      tags: {
        subtitle: 'Black Sheep Wall',
        bgImage: {
          path: 'https://iili.io/HYxX2WJ.png',
          mask: 'rgba(211, 136, 37, .5)',
        },
      },
      links: {
        subtitle:
          'When you are looking at the stars, please put the brightest star shining night sky as my soul.',
        bgImage: {
          path: 'https://iili.io/HYxX3iv.png',
          mask: 'rgba(64, 118, 190, 0.5)',
        },
      },
    },
    navbar: navbar.zh,
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      giscus: {
        repo: 'ninjiaGongyu/blog-comments',
        repoId: 'R_kgDOHBjyCQ',
        category: 'Announcements',
        categoryId: 'DIC_kwDOHBjyCc4COKZm',
        darkTheme: 'https://yidu864.github.io/style/giscus-dark.css',
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
      &copy; <a href="https://github.com/yidu864" target="_blank">yidu864</a> ${
        fullyear === 2022 ? '' : '2022 -'
      } ${fullyear}
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,
    locales: {
      '/': {
        navbar: navbar.zh,
      },
    },
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5],
    },
    code: {
      lineNumbers: false,
    },
  },
})
