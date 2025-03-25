---
title: geoserver 栅格切片背景无法透明
date: 2024-06-02
tags: ['geoserver']
---

# geoserver 栅格切片背景无法透明问题解决

<PostMeta />

**解决思路**： 需要覆盖tiff数据的颜色值

**步骤**：

1. 找到该图层，进入数据设置标签，设置 覆盖参数：

![alt text](/images/geoserver-bg.png)

2. 保存后，进入切片管理页面，对该数据重新进行切片，即可

::: tip
注意此时切片需要选择 `reseed` ，生成新的切片
:::

<PostNav />