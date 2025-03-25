---
title: nginx 反向代理配置地址通配符
date: 2024-01-16
tags: ['nginx']
---
# nginx 反向代理配置地址通配符

<PostMeta />

示例如下:

```lua
  location ~ ^/(nq|nczl)/ {
      rewrite ^/(nq|nczl)/(.*)$ /$2 break;
      proxy_pass http://127.0.0.1:8042;
    }
```

::: tip
注意 rewrite 里的 `/$2`
:::

<PostNav />