import{_ as a,c as s,o as e,a4 as i}from"./chunks/framework.CblLbO68.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"comp/moyu/cesium/cesium.heatmaptool.md","filePath":"comp/moyu/cesium/cesium.heatmaptool.md","lastUpdated":1742880857000}'),h={name:"comp/moyu/cesium/cesium.heatmaptool.md"};function o(l,t,d,p,n,r){return e(),s("div",null,t[0]||(t[0]=[i(`<p><a href="./index.html">Home</a> &gt; <a href="./cesium.html">@mo-yu/cesium</a> &gt; <a href="./cesium.heatmaptool.html">HeatMapTool</a></p><h2 id="heatmaptool-class" tabindex="-1">HeatMapTool class <a class="header-anchor" href="#heatmaptool-class" aria-label="Permalink to &quot;HeatMapTool class&quot;">​</a></h2><p>热力图展示</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HeatMapTool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolBase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToolBaseOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HeatMapToolEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Extends:</strong> ToolBase&lt;ToolBaseOptions, HeatMapToolEvents&gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HeatMapTool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addHeatMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Constructor</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.heatmaptool._constructor_.html">(constructor)(options)</a></td><td></td><td>Constructs a new instance of the <code>HeatMapTool</code> class</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.heatmaptool.addheatmap.html">addHeatMap(option)</a></td><td></td><td>添加 heatMap</td></tr><tr><td><a href="./cesium.heatmaptool.clear.html">clear()</a></td><td></td><td>清除所有 heatMap</td></tr><tr><td><a href="./cesium.heatmaptool.destroy.html">destroy()</a></td><td></td><td>销毁</td></tr><tr><td><a href="./cesium.heatmaptool.enable.html">enable()</a></td><td></td><td>启用</td></tr><tr><td><a href="./cesium.heatmaptool.getheatbyid.html">getHeatById(id)</a></td><td></td><td>根据 id 获取 heatMap</td></tr><tr><td><a href="./cesium.heatmaptool.locateheat.html">locateHeat(id)</a></td><td></td><td>定位 heatMap</td></tr><tr><td><a href="./cesium.heatmaptool.removeheat.html">removeHeat(id)</a></td><td></td><td>移除 heatMap</td></tr><tr><td><a href="./cesium.heatmaptool.toggleheat.html">toggleHeat(id, show)</a></td><td></td><td>显隐 heatMap</td></tr></tbody></table>`,12)]))}const m=a(h,[["render",o]]);export{k as __pageData,m as default};
