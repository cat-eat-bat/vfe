---
outline: deep
title: nginx 反向代理出现 302 异常
date: 2024-01-15
tags: ['nginx']
---
# nginx 反向代理出现 302 异常

<PostMeta />

解决：在 location 添加以下配置项

```lua
proxy_set_header Host $host:$server_port;
```

<PostNav />