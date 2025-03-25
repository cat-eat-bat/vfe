---
title: 设置 REM 实现页面自适应
date: 2025-02-18
tags: ["js","rem"]
outline: deep
---

# 设置 REM 实现页面自适应

<PostMeta />

主要是根据设计稿尺寸来调整 rem，代码如下:

```js
// 设置设计稿宽度和高度
const designWidth = 1920
const designHeight = 1080

// 设置根元素初始字体大小
const initialFontSize = 100

// 计算根元素字体大小
function setRem() {
  const html = document.documentElement
  const width = window.innerWidth || document.body.clientWidth
  const height = window.innerHeight || document.body.clientHeight

  // 计算宽度缩放比例和高度缩放比例
  const widthScale = width / designWidth
  const heightScale = height / designHeight

  // 选择较小的缩放比例，以保证页面内容完整显示
  const scale = Math.min(widthScale, heightScale)

  // 计算新的根元素字体大小
  const fontSize = initialFontSize * scale

  // 设置根元素字体大小
  html.style.fontSize = fontSize + 'px'
}

// 初始化
setRem()

// 监听屏幕尺寸变化
window.addEventListener('resize', setRem)

```

<PostNav />
