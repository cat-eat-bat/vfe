添加文章方法，在当前文件夹下，新建 markdown文件，文件名需要以 p- 开头，在markdown文件内头部添加相关信息，

---
title: 文章标题
date: 日期，格式 yyyy-MM-dd
excerpt: 文章摘要...
tags: 标签，如 ["cesium"]
---

在标题下方加上组件 `<PostMeta />` 可显示阅读时间等信息，在文章最后加上组件 `<PostNav />` 添加上下篇文章切换按钮