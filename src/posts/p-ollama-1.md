---
title: Ollama 入门
date: 2025-02-05
tags: ["ollama","deepseek","LLM"]
outline: deep
---

# Ollama 入门

<PostMeta />

[Ollama](https://ollama.com/) 是一个用于本地化运行大模型的应用，可运行 Deepseek, Llama，QWen 等知名的大模型。

## 特性

- 支持多平台部署
- 支持命令方式交互(和docker命令很类似)
- 支持rest api 方式交互

## 安装
官网下载对应平台的安装包进行安装，我这里选择 macos 版本
安装后，可以浏览器访问 `http://localhost:11434/` 查看是否正常运行

## 运行

> 官方提供了一个模型仓库，https://ollama.com/library  你可以搜索你想要的模型

::: tip 提示
官方建议：应该至少有 8 GB 可用 RAM 来运行 7 B 型号，16 GB 来运行 13 B 型号，32 GB 来运行 33 B 型号。
:::

这里用一个简单的 qwen2 0.5b 的模型来做示例

```shell
ollama run qwen2:0.5b
```

下载启动后，会进入命令行，可以与之进行对话

![ollama-1](/images/ollama-1.png)

输入 `/bye` 可退出对话

常用的ollama命令：

- `ollama list` 显示模型列表
- `ollama show <name>` 显示模型的信息 
- `ollama run <name>` 运行一个模型，如果没有，会自动下载
- `ollama rm <name>` 删除一个模型
- `ollama cp <name>` 复制一个模型
- `ollama pull <name>` 拉取一个模型
- `ollama push <name>` 推送一个模型
- `ollama create <file>` 从本地文件创建一个模型
- `ollama stop <name>` 停止一个正在运行的模型
- `ollama ps` 显示正在运行的模型列表

## 扩展

### rest api
可以通过 api 方式来调用运行中的模型，如：

```shell
curl http://localhost:11434/api/generate -d "{\"model\":\"deepseek-r1:14b\", \"prompt\":\"介绍下GIS是什么\", \"stream\": false}"
```
更多接口参考[官方api](https://github.com/ollama/ollama/blob/main/docs/api.md)说明

### web ui

命令行和api方式都比较原始，可利用一些ui项目来搭建ollama在线web，主要介绍两个开源项目：

1. open-webui

项目地址： https://github.com/open-webui/open-webui

介绍下搭建 open-webui的过程

采用docker方式安装

```shell
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```
> 这里 open-webui 和 ollama 在同一台机器上

安装完成后，浏览器打开 `http://127.0.0.1:3000/`

可以选择模型，并进行对话：

![ollama-2](/images/ollama-2.png)


2. lobe-chat

项目地址： https://github.com/lobehub/lobe-chat  界面比较酷炫


<PostNav />
