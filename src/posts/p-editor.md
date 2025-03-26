---
title: vscode 设置字体连字效果
date: 2025-03-24
tags: ["vscode"]
outline: deep
---

# vscode 设置字体连字效果

<PostMeta />
经常看到代码中如下图的效果：
![image](https://github.com/user-attachments/assets/4d60bf12-5eb6-4d47-879a-611217fae7d3)

下面说明下如何在 vscode 中设置字体连字效果：

在 `settings.json` 中进行设置：

```json
    "editor.fontSize": 14,
    "editor.fontLigatures": true,
    "editor.fontFamily": "'Maple Mono NF', Menlo, Monaco, 'Courier New'"
```

推荐字体 `Maple Mono NF` 详情： https://font.subf.dev/zh-cn/

<PostNav />
