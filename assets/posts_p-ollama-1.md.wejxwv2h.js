import{_ as p,C as i,c as o,o as h,j as s,G as l,a4 as n,a as r}from"./chunks/framework.CblLbO68.js";const k="/vfe/images/ollama-1.png",d="/vfe/images/ollama-2.png",B=JSON.parse('{"title":"Ollama 入门","description":"","frontmatter":{"title":"Ollama 入门","date":"2025-02-05T00:00:00.000Z","tags":["ollama","deepseek","LLM"],"outline":"deep"},"headers":[],"relativePath":"posts/p-ollama-1.md","filePath":"posts/p-ollama-1.md","lastUpdated":1742880542000}'),c={name:"posts/p-ollama-1.md"};function F(m,a,g,u,b,C){const e=i("PostMeta"),t=i("PostNav");return h(),o("div",null,[a[0]||(a[0]=s("h1",{id:"ollama-入门",tabindex:"-1"},[r("Ollama 入门 "),s("a",{class:"header-anchor",href:"#ollama-入门","aria-label":'Permalink to "Ollama 入门"'},"​")],-1)),l(e),a[1]||(a[1]=n('<p><a href="https://ollama.com/" target="_blank" rel="noreferrer">Ollama</a> 是一个用于本地化运行大模型的应用，可运行 Deepseek, Llama，QWen 等知名的大模型。</p><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><ul><li>支持多平台部署</li><li>支持命令方式交互(和docker命令很类似)</li><li>支持rest api 方式交互</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>官网下载对应平台的安装包进行安装，我这里选择 macos 版本 安装后，可以浏览器访问 <code>http://localhost:11434/</code> 查看是否正常运行</p><h2 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h2><blockquote><p>官方提供了一个模型仓库，<a href="https://ollama.com/library" target="_blank" rel="noreferrer">https://ollama.com/library</a> 你可以搜索你想要的模型</p></blockquote><div class="tip custom-block"><p class="custom-block-title">提示</p><p>官方建议：应该至少有 8 GB 可用 RAM 来运行 7 B 型号，16 GB 来运行 13 B 型号，32 GB 来运行 33 B 型号。</p></div><p>这里用一个简单的 qwen2 0.5b 的模型来做示例</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ollama</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qwen2:0.5b</span></span></code></pre></div><p>下载启动后，会进入命令行，可以与之进行对话</p><p><img src="'+k+'" alt="ollama-1" loading="lazy"></p><p>输入 <code>/bye</code> 可退出对话</p><p>常用的ollama命令：</p><ul><li><code>ollama list</code> 显示模型列表</li><li><code>ollama show &lt;name&gt;</code> 显示模型的信息</li><li><code>ollama run &lt;name&gt;</code> 运行一个模型，如果没有，会自动下载</li><li><code>ollama rm &lt;name&gt;</code> 删除一个模型</li><li><code>ollama cp &lt;name&gt;</code> 复制一个模型</li><li><code>ollama pull &lt;name&gt;</code> 拉取一个模型</li><li><code>ollama push &lt;name&gt;</code> 推送一个模型</li><li><code>ollama create &lt;file&gt;</code> 从本地文件创建一个模型</li><li><code>ollama stop &lt;name&gt;</code> 停止一个正在运行的模型</li><li><code>ollama ps</code> 显示正在运行的模型列表</li></ul><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><h3 id="rest-api" tabindex="-1">rest api <a class="header-anchor" href="#rest-api" aria-label="Permalink to &quot;rest api&quot;">​</a></h3><p>可以通过 api 方式来调用运行中的模型，如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:11434/api/generate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">model</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deepseek-r1:14b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">prompt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">介绍下GIS是什么</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">stream</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">: false}&quot;</span></span></code></pre></div><p>更多接口参考<a href="https://github.com/ollama/ollama/blob/main/docs/api.md" target="_blank" rel="noreferrer">官方api</a>说明</p><h3 id="web-ui" tabindex="-1">web ui <a class="header-anchor" href="#web-ui" aria-label="Permalink to &quot;web ui&quot;">​</a></h3><p>命令行和api方式都比较原始，可利用一些ui项目来搭建ollama在线web，主要介绍两个开源项目：</p><ol><li>open-webui</li></ol><p>项目地址： <a href="https://github.com/open-webui/open-webui" target="_blank" rel="noreferrer">https://github.com/open-webui/open-webui</a></p><p>介绍下搭建 open-webui的过程</p><p>采用docker方式安装</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3000:8080</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-host=host.docker.internal:host-gateway</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> open-webui:/app/backend/data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> open-webui</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> always</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ghcr.io/open-webui/open-webui:main</span></span></code></pre></div><blockquote><p>这里 open-webui 和 ollama 在同一台机器上</p></blockquote><p>安装完成后，浏览器打开 <code>http://127.0.0.1:3000/</code></p><p>可以选择模型，并进行对话：</p><p><img src="'+d+'" alt="ollama-2" loading="lazy"></p><ol start="2"><li>lobe-chat</li></ol><p>项目地址： <a href="https://github.com/lobehub/lobe-chat" target="_blank" rel="noreferrer">https://github.com/lobehub/lobe-chat</a> 界面比较酷炫</p>',33)),l(t)])}const _=p(c,[["render",F]]);export{B as __pageData,_ as default};
