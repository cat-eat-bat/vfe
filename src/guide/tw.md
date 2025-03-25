---
outline: deep
---

# 集成 tailwindcss

## 添加依赖

```shell
 pnpm add -D tailwindcss postcss autoprefixer
```

## 生成配置文件

```shell
npx tailwindcss init -p 
```

## 修改tailwind.config.js

```js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


## CSS 引入 Tailwind
创建 tailwind.css 并写入:

```css
/*! @import */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## main.ts 引入 tailwind.css

```js
import './style/tailwind.css'
```

##  vite 配置相关插件

```js
 postcss: {
        plugins: [
          pxtorem({
            rootValue: 100,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 10
          }),
          postcssPresetEnv({
            browsers: getBrowsers(command)
          }) as any,
          // 这两行必须!
          require('tailwindcss'),
          require('autoprefixer')
        ]
      },
```
## 安装 vscode 相关插件

- PostCSS Language Support
- Tailwind CSS IntelliSense