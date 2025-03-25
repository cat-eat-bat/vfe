---
title: 安装 Tailwindcss （基于parcel）
date: 2025-02-24
tags: ["tailwind","parcel"]
outline: deep
---

# 安装 Tailwindcss （基于parcel）

<PostMeta />

> tw 版本基于最新的 `4.0.9`, 引入方式和之前版本有所不同

## 创建工程

```shell
mkdir my-project
cd my-project
npm init -y
pnpm install -D parcel
```

## 安装 Tailwind CSS

```shell
pnpm install -D tailwindcss @tailwindcss/postcss
```

## 配置 PostCSS

在项目根目录中创建一个 `.postcssrc` 文件，并启用 `@tailwindcss/postcss` 插件
::: code-group
```json [.postcssrc]
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```
:::

## 引入 tailwindcss

创建一个 `./src/index.css` 文件并为 `Tailwind CSS` 添加一个 @import。

```css
@import "tailwindcss";
```

## 页面使用
创建index.html, 并引入 index.css

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="./index.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>
```


<PostNav />