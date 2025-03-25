---
outline: deep
---

# 引入
相关包已发布到 npm  可以直接使用 pnpm install 进行安装。
::: code-group
```shell [pnpm]
pnpm add @vintage-gis/core 
pnpm add @vintage-gis/ol 
```

```shell [npm]
npm install @vintage-gis/core 
npm install @vintage-gis/ol 
```
:::

需要同步引入依赖包
::: code-group
```shell [pnpm]
pnpm add ol 
pnpm add proj4
```

```shell [npm]
npm install ol
npm install proj4
```
:::
**vite 插件**

同步开发了一个 vite插件用于实现客户端加载 shp 图层等功能，使用：
::: code-group
```shell [pnpm]
pnpm add -D @vintage-gis/vite-plugin
```
```shell [npm]
npm install -D @vintage-gis/vite-plugin
```
:::
在 vite.config.ts 中配置：

```typescript
import { vintageMapPlugin } from '@vintage-gis/vite-plugin'

```
在 plugins 中加入:

```ts
 vintageMapPlugin(),
```

