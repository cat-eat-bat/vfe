---
title: vitepress 发布到 github pages
date: 2025-03-28
tags: ["vitepress", "pages"]
outline: deep
---

# vitepress 发布到 github pages

<PostMeta />
## 前言
github pages 服务是面向开发者提供的免费的静态页面服务，可以用于部署技术文档、博客文章等页面。
vitepress 是一个静态站点生成器 (SSG)，专为构建快速、以内容为中心的站点而设计。简而言之，VitePress 获取用 Markdown 编写的内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。

*访问地址*
通常，GitHub Pages 站点的访问地址遵循以下格式：
`https://<username>.github.io/<repository-name>/`

## 步骤
### 准备 vitepress 工程

准备一个vitepress 工程，可以参考 官方。
在 VitePress 配置文件 .vitepress/config.js 中设置 base 路径：
```js
export default {
  base: '/your-repo-name/'  // 替换为你的仓库名
}
```

### github 仓库

- 登录 GitHub
- 创建一个新仓库，名称与项目名称相同
- 选择公开（Public）仓库
  
### 部署脚本
在项目根目录创建 .github/workflows/deploy.yml 文件：
```yaml
name: Deploy VitePress Site

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Install dependencies
        run: npm install
      
      - name: Build site
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.PAT_TOKEN }}
          publish_dir: dist
```

推送代码到 GitHub, 工作流会自动执行部署脚本

###  启用 GitHub Pages

- 进入 GitHub 仓库设置
- 选择 "Pages"
- 选择 "GitHub Actions" 作为构建和部署源
 
## 注意

### Permission

执行 action 可能会报错：
```
在 github aciton 执行报错 remote: Permission to cat-eat-bat/vjpress.git denied to github-actions[bot].
1069 fatal: unable to access 'https://github.com/cat-eat-bat/vjpress.git/': The requested URL returned error: 403
```
这时候就需要设置 git token：

这个错误通常是由于 GitHub Actions 没有适当的权限来推送代码到您的仓库。以下是解决方案：

生成个人访问令牌（Personal Access Token）


进入 GitHub 设置 (Settings)
点击 "Developer settings"
选择 "Personal access tokens"
点击 "Tokens (classic)"
点击 "Generate new token"
选择必要的权限，特别是 repo 和 workflow 权限
生成并复制令牌


在仓库设置中添加 Secrets


进入仓库的 "Settings"
选择 "Secrets and variables"
点击 "Actions"
点击 "New repository secret"
名称设置为 PAT_TOKEN
粘贴刚才生成的个人访问令牌


<PostNav />
