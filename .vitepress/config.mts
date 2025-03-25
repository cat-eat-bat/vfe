/*
 * @Author: Alex
 * @LastEditors: Alex yxfacw@163.com
 * @Date: 2024-11-20
 * @Description:
 */
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Vintage",
  // 这里的 :title 将替换为从页面的第一个 <h1> 标题推断出的文本 eg: Hello - Vintage Java
  titleTemplate: ":title - Vintage FE",
  description: "Vintage JS Docs",
  // 站点将部署到的 base URL
  base: "/vfe",
  srcDir: "./src",
  outDir: "./dist",
  lastUpdated: true,
  markdown: {
    image: {
      // 图片懒加载
      lazyLoading: true,
    },
  },
  themeConfig: {
    search: {
      provider: "local",
    },
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "规范",
        link: "/guide/node",
        activeMatch: "/guide/",
      },
         {
        text: "文章",
        link: "/posts",
        activeMatch: "/posts/",
      },
      {
        text: "组件",
        items: [{
          text: "@vintage-gis",
          link: '/comp/vintage',
        },
        {text: '@mo-yu', link: '/comp/moyu', activeMatch: '/comp/moyu'},
        {text: 'celtyui', link: '/comp/celtyui'}
      ]
      },
      {
        text: "生态",
        items: [
          { text: "java资源", link: "https://nync.piesat.cn/vjpress/" }
        ],
      },
    ],

    sidebar: {
      "/guide": [
        {
          text: "基础环境",
          collapsed: false,
          items: [
            { text: "Node", link: "/guide/node" },
            { text: "IDE", link: "/guide/ide" },
            { text: "框架", link: "/guide/framework" },
          ],
        },
        {
          text: "目录规范",
          collapsed: false,
          items: [
            { text: "结构", link: "/guide/dir-base" },
            { text: "其他", link: "/guide/dir-other" }
          ],
        },
        {
          text: "代码规范",
          collapsed: false,
          items: [
            { text: "Eslint", link: "/guide/code-eslint" },
            { text: "Prettier", link: "/guide/code-prettier" }
          ],
        },
        {
          text: "国际化&Mock",
          collapsed: false,
          items: [
            { text: "国际化", link: "/guide/i18n" },
            { text: "Mock数据", link: "/guide/mock" }
          ],
        },
        {
          text: "集成",
          collapsed: false,
          items: [
            { text: "tailwindcss", link: "/guide/tw" }
          ],
        },
        {
          text: "移动端",
          collapsed: false,
          items: [
            { text: "小程序", link: "/guide/weapp" },
            { text: "App", link: "/guide/app" },
            { text: "H5", link: "/guide/h5" },
          ],
        },
      ],
      "/comp/moyu": [
        {
          text: "@mo-yu/core",
          link: '/comp/moyu/core'
        },
        {
          text: "@mo-yu/vue",
          link: '/comp/moyu/vue'
        },
        {
          text: "@mo-yu/cesium",
          link: '/comp/moyu/cesium'
        }
      ],
      "/comp/vintage": [
        {
          text: "快速使用",
          collapsed: false,
          items: [
            { text: "引入", link: "/comp/vintage/qs-1" },
            { text: "初始化", link: "/comp/vintage/qs-2" },
            { text: "vue组件", link: "/comp/vintage/qs-3" },
          ],
        },
        {
          text: "地图样式",
          collapsed: false,
          items: [
            { text: "定义", link: "/comp/vintage/style-1" },
            { text: "数据源", link: "/comp/vintage/style-3" },
            { text: "图层类型", link: "/comp/vintage/style-2" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "gitlab",
        link: "https://git.piesat.cn:10004/NanJingRDC/NYNC/Foundation/vintage-websites",
        ariaLabel: "gitlab repo url",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Alex",
    },
    editLink: {
      pattern:
        "https://git.piesat.cn:10004/NanJingRDC/NYNC/Foundation/vintage-websites/edit/main/fe-press/src/:path",
      text: "帮助完善此文档",
    },
  },
});
