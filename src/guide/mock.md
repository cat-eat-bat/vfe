---
outline: deep
---

# Mock 数据

## 引入

```
pnpm add -D mockjs  vite-plugin-mock
```

## mock 接口

在 src/mock 下新建  login.ts, 写入：

```typescript
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/login',
    method: 'post',
    response: ({ body }) => {
      if (body.username === 'admin') {
        return {
          success: true,
          data: {
            username: 'admin',
            // 一个用户可能有多个角色
            roles: ['admin'],
            accessToken: 'eyJhbGciOiJIUzUxMiJ9.admin',
            refreshToken: 'eyJhbGciOiJIUzUxMiJ9.adminRefresh',
            expires: '2023/10/30 00:00:00'
          }
        }
      } else {
        return {
          success: true,
          data: {
            username: 'common',
            // 一个用户可能有多个角色
            roles: ['common'],
            accessToken: 'eyJhbGciOiJIUzUxMiJ9.common',
            refreshToken: 'eyJhbGciOiJIUzUxMiJ9.commonRefresh',
            expires: '2023/10/30 00:00:00'
          }
        }
      }
    }
  }
] as MockMethod[]
```
## 配置 vite 

配置来启用mock的接口，在 vite 配置的 plugins 部分配置mock:

```typescript
 import { viteMockServe } from 'vite-plugin-mock'

      // mock支持
      viteMockServe({
        mockPath: './src/mock',
        enable:command === 'serve',
        logger: false
      })
```

代码中使用测试