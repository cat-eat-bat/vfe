---
title: Nginx 缓存设置
date: 2025-02-20
tags: ["nginx"]
outline: deep
---
# Nginx 中缓存设置

<PostMeta />

nginx 中关于缓存主要是有`Proxy`(服务端)缓存，客户端缓存设置

## `Proxy`缓存

在nginx配置的`http` 增加代理缓存：

```lua
proxy_cache_path /data/nginx/cache levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m use_temp_path=off;
```

参数解释：
- path：强制参数，指定缓存文件的存放路径。
- levels：定义了缓存目录的层级。每层可以用1（最多16种选择，0-f）或2（最多256种选择，00-ff）表示，中间用 : 分隔。
- keys_zone：强制参数，定义共享内存区的名称和大小，该共享内存用于保存缓存项目的元数据（所有活动的key和缓存数据相关的信息），这样nginx可以快速判断一个request是否命中或者未命中缓存，1m可以存储8000个key，10m可以存储80000个key。
- inactive：删除指定时间内未被访问的缓存文件，默认10分钟
- max_size：设置了缓存存储的上限，如果不指定，最大会用掉所有磁盘空间
- use_temp_path：直接把临时文件放在缓存目录中

对于一些实时性要求非常高的页面或数据来说，就不应该去设置缓存，下面来看看如何配置不缓存的内容。

```lua
server {
    listen 80;
    server_name cache.lion.club;
    #URI 中后缀为 .txt 或 .text 的设置变量值为 "no cache"
    if ($request_uri ~ \.(txt|text)$) {
        set $cache_name "no cache"
    }

}
```

针对反向代理配置缓存：

```lua
location / {
    proxy_no_cache $cache_name;      #判断该变量是否有值，如果有值则不进行缓存，如果没有值则进行缓存    
    proxy_cache my_cache;            #设置缓存内存
    proxy_cache_valid 200 5m;        #缓存状态为200的请求，缓存时长为5分钟
    proxy_cache_key $request_uri;    #缓存文件的key为请求的URI
    add_header Nginx-Cache-Status 'Cached'    #把缓存状态设置为头部信息，响应给客户端 用于判断调试 很有用！
    proxy_pass http://cache_server;  #代理转发
}

```

## 客户端缓存

nginx 里可以设置让浏览器客户端对资源进行缓存，如下：

```lua
add_header    Cache-Control  max-age=3600; # 单位是秒
```












<PostNav />