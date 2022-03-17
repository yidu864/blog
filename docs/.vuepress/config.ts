import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: "yidu864's log",
  description: "yidu864's log",

  // 主题和它的配置
  theme: 'Gungnir',
  themeConfig: {
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
  },
})
