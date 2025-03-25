---
title: Js代码判断客户端是否可以访问google
date: 2025-02-07
tags: ["js","google"]
outline: deep
---

# Js代码判断客户端是否可以访问google

<PostMeta />

> 缘起：在巴基斯坦项目中，由于客户在国外，他们要求加载的底图服务是`google map`, 而在测试系统时，我们都是在国内网络环境中访问，正常情况下（没有科学上网），
是无法查看底图的，所以希望程序能实现在客户端作出判断，在无法访问谷歌底图服务情况下，自动切换为其他可用的底图服务(该项目中采用的是  `mapbox` 底图)

直接贴实现代码:
```js
function checkGoogleAccess(timeout = 500): Promise<any> {
  return new Promise((resolve, reject) => {
    // 创建时间戳用于图片URL,避免缓存
    const timestamp = new Date().getTime()
    const imgSrc = `https://www.google.com/favicon.ico?t=${timestamp}`
    const img = new Image()
    // 设置超时定时器
    const timeoutTimer = setTimeout(() => {
      img.onload = img.onerror = null
      resolve({
        accessible: false,
        error: 'Timeout while checking Google accessibility'
      })
    }, timeout)
    // 图片加载成功
    img.onload = () => {
      clearTimeout(timeoutTimer)
      resolve({
        accessible: true,
        error: null
      })
    }
    // 图片加载失败
    img.onerror = () => {
      clearTimeout(timeoutTimer)
      resolve({
        accessible: false,
        error: 'Failed to load Google favicon'
      })
    }
    // 开始加载图片
    img.src = imgSrc
  })
}

// 调用方法
 try {
    const result = await checkGoogleAccess()
    if (result.accessible) {
      console.log('Google 可以访问')
    } else {
      console.log('Google 无法访问:', result.error)
    }
  } catch (error) {
    console.error('检查过程出错:', error)
  }

```


<PostNav />