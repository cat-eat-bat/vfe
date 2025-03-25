import{_ as e,c as a,o as i,a4 as s}from"./chunks/framework.CblLbO68.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"comp/moyu/cesium/cesium.maptiletool.md","filePath":"comp/moyu/cesium/cesium.maptiletool.md","lastUpdated":1742880857000}'),l={name:"comp/moyu/cesium/cesium.maptiletool.md"};function d(o,t,r,h,p,n){return i(),a("div",null,t[0]||(t[0]=[s(`<p><a href="./index.html">Home</a> &gt; <a href="./cesium.html">@mo-yu/cesium</a> &gt; <a href="./cesium.maptiletool.html">MapTileTool</a></p><h2 id="maptiletool-class" tabindex="-1">MapTileTool class <a class="header-anchor" href="#maptiletool-class" aria-label="Permalink to &quot;MapTileTool class&quot;">​</a></h2><p>3DTiles 展示，配合 TileConfigTool 配置结果使用更佳</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MapTileTool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MapTileToolEvents</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MapTileToolEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolBase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToolBaseOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">E</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Extends:</strong> ToolBase&lt;ToolBaseOptions, E&gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MapTileTool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add3DTileset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Constructor</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.maptiletool._constructor_.html">(constructor)(options)</a></td><td></td><td>Constructs a new instance of the <code>MapTileTool</code> class</td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.maptiletool.tiles.html">tiles</a></td><td><code>protected</code></td><td>PrimitiveCollection</td><td></td></tr><tr><td><a href="./cesium.maptiletool.viewer.html">viewer</a></td><td><p><code>protected</code></p><p><code>readonly</code></p></td><td>import(&quot;cesium&quot;).Viewer</td><td></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.maptiletool.add3dtileset.html">add3DTileset(option)</a></td><td></td><td>添加 3DTiles 模型</td></tr><tr><td><a href="./cesium.maptiletool.clear.html">clear()</a></td><td></td><td>清除所有 3dTiles</td></tr><tr><td><a href="./cesium.maptiletool.clearclick.html">clearClick()</a></td><td></td><td>清除选中图层样式</td></tr><tr><td><a href="./cesium.maptiletool.creatematrix.html">createMatrix(translation, hpr, scale)</a></td><td><code>protected</code></td><td></td></tr><tr><td><a href="./cesium.maptiletool.createscale.html">createScale(scaleXYZ)</a></td><td><code>protected</code></td><td></td></tr><tr><td><a href="./cesium.maptiletool.destroy.html">destroy()</a></td><td></td><td>销毁</td></tr><tr><td><a href="./cesium.maptiletool.enable.html">enable()</a></td><td></td><td>启用</td></tr><tr><td><a href="./cesium.maptiletool.getdegree.html">getDegree(prev, next)</a></td><td><code>protected</code></td><td></td></tr><tr><td><a href="./cesium.maptiletool.getposihprscale.html">getPosiHPRScale(mat)</a></td><td><code>protected</code></td><td></td></tr><tr><td><a href="./cesium.maptiletool.gettilebyid.html">getTileById(id)</a></td><td></td><td>根据 id 获取 tile</td></tr><tr><td><a href="./cesium.maptiletool.gettransform.html">getTransform(mat, params)</a></td><td><code>protected</code></td><td></td></tr><tr><td><a href="./cesium.maptiletool.locatetile.html">locateTile(id)</a></td><td></td><td>定位 3DTiles</td></tr><tr><td><a href="./cesium.maptiletool.removetile.html">removeTile(id)</a></td><td></td><td>移除 3DTiles</td></tr><tr><td><a href="./cesium.maptiletool.toggletile.html">toggleTile(id, show)</a></td><td></td><td>显隐 3DTiles</td></tr><tr><td><a href="./cesium.maptiletool.updatehpr.html">updateHPR(prev, params)</a></td><td><code>protected</code></td><td></td></tr><tr><td><a href="./cesium.maptiletool.updatetranslation.html">updateTranslation(prev, params)</a></td><td><code>protected</code></td><td></td></tr></tbody></table>`,14)]))}const k=e(l,[["render",d]]);export{m as __pageData,k as default};
