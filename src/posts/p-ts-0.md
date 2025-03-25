---
title: tsconfig.json 生成
date: 2025-02-22
tags: ["typescript"]
outline: deep
---

# tsconfig.json 生成

<PostMeta />

作为日常依赖于 vite 这个编译工具的开发者，似乎忘记了如何手动生成 `tsconfig.json`, 做个记录

使用 `npm init ` 初始化项目后，安装必要的`ts`相关的依赖:

```shell
pnpm install -D typescript @types/node

```

然后就可以生成一个完整版的 tsconfig.json :

```shell
npx tsc --init
```

常用的一个 `tsconfig.json` 如下:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "moduleResolution": "node",
    "strict": true,
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "outDir": "./dist"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

<PostNav />