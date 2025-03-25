import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.CblLbO68.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"comp/moyu/cesium/cesium.pointstool.md","filePath":"comp/moyu/cesium/cesium.pointstool.md","lastUpdated":1742880857000}'),o={name:"comp/moyu/cesium/cesium.pointstool.md"};function n(l,t,d,h,r,p){return a(),i("div",null,t[0]||(t[0]=[e(`<p><a href="./index.html">Home</a> &gt; <a href="./cesium.html">@mo-yu/cesium</a> &gt; <a href="./cesium.pointstool.html">PointsTool</a></p><h2 id="pointstool-class" tabindex="-1">PointsTool class <a class="header-anchor" href="#pointstool-class" aria-label="Permalink to &quot;PointsTool class&quot;">​</a></h2><p>使用 primitive 添加点位数据，性能更好 可以选择把点位渲染为 billboard、label，聚合功能可选</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PointsTool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolBase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToolBaseOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PointsToolEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Extends:</strong> ToolBase&lt;ToolBaseOptions, <a href="./cesium.pointstoolevents.html">PointsToolEvents</a>&gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PointsTool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addPoints</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(config)</span></span></code></pre></div><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Constructor</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.pointstool._constructor_.html">(constructor)(options)</a></td><td></td><td>Constructs a new instance of the <code>PointsTool</code> class</td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.pointstool.prefix.html">prefix</a></td><td><code>static</code></td><td>string</td><td></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.pointstool.addpoints.html">addPoints(option)</a></td><td></td><td>添加点位集合</td></tr><tr><td><a href="./cesium.pointstool.clear.html">clear()</a></td><td></td><td>清除</td></tr><tr><td><a href="./cesium.pointstool.destroy.html">destroy()</a></td><td></td><td>销毁</td></tr><tr><td><a href="./cesium.pointstool.enable.html">enable()</a></td><td></td><td>启用</td></tr><tr><td><a href="./cesium.pointstool.getpointsbyid.html">getPointsById(id)</a></td><td></td><td>根据 id 获取点位数据</td></tr><tr><td><a href="./cesium.pointstool.locatepoints.html">locatePoints(id)</a></td><td></td><td>定位至点位集合</td></tr><tr><td><a href="./cesium.pointstool.removepoints.html">removePoints(id)</a></td><td></td><td>移除点位集合</td></tr><tr><td><a href="./cesium.pointstool.togglepoints.html">togglePoints(id, show)</a></td><td></td><td>点位集合显隐</td></tr></tbody></table>`,14)]))}const m=s(o,[["render",n]]);export{k as __pageData,m as default};
