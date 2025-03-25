---
outline: deep
---

# 基本结构

```plaintext
├── .husky          # husky代码提交校验配置文件
├── .vscode       # IDE 工具推荐配置文件
│   │   ├── extensions.json  # 推荐安装的 vscode 插件
│   │   ├── settings.json  # 设置扩展程序或 vscode 编辑器的一些属性
├── scripts  # 编译、运行脚本等
│   │   ├── build.js  # 编译脚本等
│   │   ├── plugins.ts  # vite 相关插件
│   │   ├── ....  # 其他脚本
├── locales  # 国际化文件存放处
│   │   ├── en.yaml  # 英文配置
│   │   ├── zh-CN.yaml  # 中文配置
├── public  # 静态资源
│   │   ├── images  # 静态图片等
│   │   ├── favicon.ico  # favicon
│   │   ├── .....
├── mock  # mock 模拟后台数据
│   │   ├── index.ts  # 模拟后台接口返回
│   │   ├── ...
├── src
│   ├── assets     # 字体、图片等静态资源
│   ├── components  # 自定义通用组件
│   │   ├── commonChart  # xx自定义组件
│   │   ├── map       # gis地图组件
│   ├── hooks  # vue hooks
│   ├── layout  # 主要页面布局
│   ├── router  # 路由配置
│   ├── store  # pinia 状态管理
│   ├── service  # 业务代码
│   ├── style  # 全局样式
│   │   ├── reset.scss  # 全局重置样式文件
│   │   ├── index.css  # 自定义样式配置文件
│   │   ├── ...
│   ├── types  # 全局 TS 类型配置
│   ├── utils  # 全局工具方法
│   │   ├── http  # 封装 axios 文件
│   │   └── auth.ts  # 处理用户信息和 token 相关
│   │   ├── mitt.ts  # 触发公共事件，类似 EventBus
│   ├── views  # 存放业务代码页面
│    │   ├── login  # 登录（示例）
│   ├── App.vue  # 入口页面
│   ├── main.ts  # 入口文件
├── types  # 全局 TS 类型配置
│   │   ├── global.d.ts  # 全局类型声明文件
│   │   ├── env.d.ts  # 全局类型声明文件
├── .env  # 全局环境变量配置
├── .env.development  # 开发环境变量配置
├── .env.production  # 生产环境变量配置
├── .eslintignore  # eslint 语法检查忽略文件
├── .eslintrc.js  # eslint 语法检查配置
├── .gitignore  # git 提交忽略文件
├── .prettierrc.js  # prettier 插件配置
├── .stylelintignore  # stylelint 插件检查忽略文件
├── Dockerfile  # docker镜像打包文件
├── index.html  # html 主入口
├── package.json  # 依赖包管理以及命令配置
├── postcss.config.js  # postcss 插件配置
├── CHANGELOG.md  # 版本更新日志
├── README.md  # README
├── stylelint.config.js  # stylelint 配置
├── tailwind.config.js  # tailwindcss 配置
├── tsconfig.json  # typescript 配置
└── vite.config.ts  # vite 配置
```