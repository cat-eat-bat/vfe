import{_ as e,c as a,o as s,a4 as i}from"./chunks/framework.CblLbO68.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"comp/moyu/cesium/cesium.mapscenetool.md","filePath":"comp/moyu/cesium/cesium.mapscenetool.md","lastUpdated":1742880542000}'),o={name:"comp/moyu/cesium/cesium.mapscenetool.md"};function l(d,t,h,n,r,p){return s(),a("div",null,t[0]||(t[0]=[i(`<p><a href="./index.html">Home</a> &gt; <a href="./cesium.html">@mo-yu/cesium</a> &gt; <a href="./cesium.mapscenetool.html">MapSceneTool</a></p><h2 id="mapscenetool-class" tabindex="-1">MapSceneTool class <a class="header-anchor" href="#mapscenetool-class" aria-label="Permalink to &quot;MapSceneTool class&quot;">​</a></h2><p>初始化场景</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MapSceneTool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToolBase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MapSceneToolOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MapSceneToolEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Extends:</strong> ToolBase&lt;MapSceneToolOptions, MapSceneToolEvents&gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MapSceneTool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prepareScene</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(config, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Constructor</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.mapscenetool._constructor_.html">(constructor)(options)</a></td><td></td><td>Constructs a new instance of the <code>MapSceneTool</code> class</td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.mapscenetool.basemap.html">baseMap</a></td><td></td><td><a href="./cesium.basemaptool.html">BaseMapTool</a></td><td></td></tr><tr><td><a href="./cesium.mapscenetool.camera.html">camera</a></td><td></td><td><a href="./cesium.mapcameratool.html">MapCameraTool</a></td><td></td></tr><tr><td><a href="./cesium.mapscenetool.config.html">config</a></td><td><code>readonly</code></td><td><a href="./cesium.sceneconfig.html">SceneConfig</a> | undefined</td><td></td></tr><tr><td><a href="./cesium.mapscenetool.fly.html">fly</a></td><td></td><td><a href="./cesium.mapflytool.html">MapFlyTool</a></td><td></td></tr><tr><td><a href="./cesium.mapscenetool.geo.html">geo</a></td><td></td><td><a href="./cesium.mapgeotool.html">MapGeoTool</a></td><td></td></tr><tr><td><a href="./cesium.mapscenetool.heat.html">heat</a></td><td></td><td><a href="./cesium.heatmaptool.html">HeatMapTool</a></td><td></td></tr><tr><td><a href="./cesium.mapscenetool.mask.html">mask</a></td><td></td><td>MapMaskTool</td><td></td></tr><tr><td><a href="./cesium.mapscenetool.points.html">points</a></td><td></td><td><a href="./cesium.pointstool.html">PointsTool</a></td><td></td></tr><tr><td><a href="./cesium.mapscenetool.tile.html">tile</a></td><td></td><td><a href="./cesium.maptiletool.html">MapTileTool</a></td><td></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.mapscenetool.clear.html">clear()</a></td><td></td><td>清空当前场景图层</td></tr><tr><td><a href="./cesium.mapscenetool.destroy.html">destroy()</a></td><td></td><td>销毁</td></tr><tr><td><a href="./cesium.mapscenetool.enable.html">enable()</a></td><td></td><td>启用</td></tr><tr><td><a href="./cesium.mapscenetool.preparescene.html">prepareScene(config, duration)</a></td><td></td><td></td></tr></tbody></table>`,14)]))}const k=e(o,[["render",l]]);export{m as __pageData,k as default};
