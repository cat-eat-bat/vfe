---
outline: deep
---

# celtyui

celtyui 是一个 headless UI 库, 用于归纳项目中的可复用部分，目前支持 vue3 和 react 两个版本的组件

:::warning 注意

- vue 组件统一以 index.vue 命名，实际组件名为组件所在包名，需要关闭项目中的 eslint 校验（'vue/multi-word-component-names': 'off'）。
- react 组件统一以 index.tsx 命名，实际组件名为组件所在包名
- 组件内只提供基础样式，如无必要，不会引入（背景）图片
  :::

### 查看帮助

```bash
npx celtyui@latest -h

Usage: celtyui [options] [command]

添加组件源码（vue3 or react）到您的项目中

Options:
  -v, --version                  显式版本号
  -h, --help                     display help for command

Commands:
  init [options]                 初始化配置文件 [celtyui.json] 到您项目的根目录中
  add [options] [components...]  添加组件源码（vue3 or react）到您的项目中
  demo [options]                 启动本地服务器打开 [celtyui] 内置 demo 页面
  help [command]                 display help for command
```

### 初始化配置（可选）

```shell
npx celtyui@latest init -h

Usage: celtyui init [options]

初始化配置文件 [celtyui.json] 到您项目的根目录中

Options:
  -c, --cwd <cwd>    工作目录，默认当前位置 (default: "xxxxxx\\celtyui")
  -p, --path <path>  组件存放路径，默认 src/components (default: "src/components")
  -t, --port <port>  demo页面监听端口 (default: "3210")
  -l, --lang <lang>  框架类型（vue or react） (default: "vue")
  -h, --help         display help for command
```

可以配置一些参数，目前有：

```json
{
  "path": "src/components", // 组件存放路径
  "port": "3000", // 本地demo服务启动端口
  "lang": "vue" // 组件语言，目前支持 vue 和 react
}
```

```bash
$ npx vtscadd@latest init
```

### 添加组件

```bash
$ npx celtyui@latest add -h

Usage: celtyui add [options] [components...]

添加组件源码（vue3 or react）到您的项目中

Arguments:
  components         需要添加的组件

Options:
  -c, --cwd <cwd>    工作目录，默认当前位置 (default: "xxxxxx\\celtyui")
  -o, --overwrite    覆盖已有的同名组件文件 (default: false)
  -a, --all          添加库内所有组件到您的项目中 (default: false)
  -p, --path <path>  组件存放路径，默认 src/components
  -l, --lang <lang>  框架类型（vue or react），默认vue
  -h, --help         display help for command
```

### 查看 demo

```bash
$ npx celtyui@latest demo -h

Usage: celtyui demo [options]

启动本地服务器打开 [celtyui] 内置 demo 页面

Options:
  -c, --cwd <cwd>    工作目录，默认当前位置 (default: "xxxxxx\\celtyui")
  -p, --port <port>  demo页面监听端口，默认3210
  -l, --lang <lang>  框架类型（vue or react），默认vue
  -h, --help         display help for command
```

### 截图

![alt text](/images/ui1.png)

![alt text](/images/ui2.png)
