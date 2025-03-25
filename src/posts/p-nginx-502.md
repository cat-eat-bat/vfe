---
outline: deep
title: nginx代理https域名遇到 502
date: 2024-01-10
tags: ['nginx']
---

# nginx代理https域名遇到 502

<PostMeta />

解决方法：增加配置 `proxy_ssl_server_name on;`

![alt text](/images/502.png)


<PostNav />