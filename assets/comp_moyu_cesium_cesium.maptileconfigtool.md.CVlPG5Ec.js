import{_ as i,c as s,o as a,a4 as e}from"./chunks/framework.CblLbO68.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"comp/moyu/cesium/cesium.maptileconfigtool.md","filePath":"comp/moyu/cesium/cesium.maptileconfigtool.md","lastUpdated":1743400838000}'),l={name:"comp/moyu/cesium/cesium.maptileconfigtool.md"};function o(h,t,n,d,p,r){return a(),s("div",null,t[0]||(t[0]=[e(`<p><a href="./index.html">Home</a> &gt; <a href="./cesium.html">@mo-yu/cesium</a> &gt; <a href="./cesium.maptileconfigtool.html">MapTileConfigTool</a></p><h2 id="maptileconfigtool-class" tabindex="-1">MapTileConfigTool class <a class="header-anchor" href="#maptileconfigtool-class" aria-label="Permalink to &quot;MapTileConfigTool class&quot;">​</a></h2><p>3DTiles 展示配置</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MapTileConfigTool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MapTileTool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MapTileConfigToolEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Extends:</strong> <a href="./cesium.maptiletool.html">MapTileTool</a>&lt;<a href="./cesium.maptileconfigtoolevents.html">MapTileConfigToolEvents</a>&gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MapTileConfigTool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add3DTileset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateTile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;lat&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Constructor</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.maptileconfigtool._constructor_.html">(constructor)(options)</a></td><td></td><td>Constructs a new instance of the <code>MapTileConfigTool</code> class</td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.maptileconfigtool.handler.html">handler</a></td><td><code>protected</code></td><td>ScreenSpaceEventHandler | undefined</td><td></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.maptileconfigtool.clear.html">clear()</a></td><td></td><td>清除所有 3dTiles</td></tr><tr><td><a href="./cesium.maptileconfigtool.deletetile.html">deleteTile(id)</a></td><td></td><td>清除指定 3dTiles</td></tr><tr><td><a href="./cesium.maptileconfigtool.destroy.html">destroy()</a></td><td></td><td>销毁</td></tr><tr><td><a href="./cesium.maptileconfigtool.enable.html">enable()</a></td><td></td><td>启用</td></tr><tr><td><a href="./cesium.maptileconfigtool.updatetile.html">updateTile(id, key, params)</a></td><td></td><td>更新 3DTiles 偏移、旋转，缩放参数</td></tr></tbody></table>`,14)]))}const m=i(l,[["render",o]]);export{k as __pageData,m as default};
