---
outline: deep
---

# Node

## 版本要求

v16+

推荐使用 pnpm 作为包管理工具：

```bash
npm install -g pnpm
```

## 多版本

如果需要安装多个 node 版本环境，推荐使用 `nvm` 进行管理

```shell
nvm ls              //看安装的所有node版本
nvm install 版本号  // 例如：nvm install 14.19.0
nvm use 版本号      // 切换到使用指定的nodejs版本
nvm current       //显示当前版本
```

## 镜像源管理

npm 镜像源管理工具，推荐使用 `nrm`, 安装：

```shell
pnpm install -g nrm
```

使用:

```shell
nrm ls　　             // 查看所有的支持源（有*号的表示当前所使用的源,以下[name]表示源的名称）
nrm use [name]　　     // 将npm下载源切换成指定的源
nrm help　　           // 查看nrm帮助
nrm home [name]　　    // 跳转到指定源的官网
nrm add [name url]    //添加自定义源（name是自定义源的名字，ulr是自定义源的url）
nrm del [name]        //删除源
nrm test [name]       //test速度
```
