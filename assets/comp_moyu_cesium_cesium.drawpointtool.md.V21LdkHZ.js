import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.CblLbO68.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"comp/moyu/cesium/cesium.drawpointtool.md","filePath":"comp/moyu/cesium/cesium.drawpointtool.md","lastUpdated":1743400838000}'),n={name:"comp/moyu/cesium/cesium.drawpointtool.md"};function o(h,t,l,d,r,p){return a(),i("div",null,t[0]||(t[0]=[e(`<p><a href="./index.html">Home</a> &gt; <a href="./cesium.html">@mo-yu/cesium</a> &gt; <a href="./cesium.drawpointtool.html">DrawPointTool</a></p><h2 id="drawpointtool-class" tabindex="-1">DrawPointTool class <a class="header-anchor" href="#drawpointtool-class" aria-label="Permalink to &quot;DrawPointTool class&quot;">​</a></h2><p>绘制点</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DrawPointTool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">O</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DrawPointToolOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DrawPointToolOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DrawBaseEvents</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DrawPointToolEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DrawBase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">O</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">E</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Extends:</strong> <a href="./cesium.drawbase.html">DrawBase</a>&lt;O, E&gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DrawPointTool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.eventBus.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;left-click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, onLeftClick)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.eventBus.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mouse-move&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, onMouseMove)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.eventBus.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;right-click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, onRightClick)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.eventBus.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;left-dbclick&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, onLeftDBClick)</span></span></code></pre></div><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Constructor</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.drawpointtool._constructor_.html">(constructor)(options)</a></td><td></td><td>Constructs a new instance of the <code>DrawPointTool</code> class</td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.drawpointtool.onleftclick.html">onLeftClick</a></td><td><code>protected</code></td><td>(point: Cartesian3) =&gt; void</td><td></td></tr><tr><td><a href="./cesium.drawpointtool.onleftdbclick.html">onLeftDBClick</a></td><td><code>protected</code></td><td>() =&gt; void</td><td></td></tr><tr><td><a href="./cesium.drawpointtool.onmousemove.html">onMouseMove</a></td><td><code>protected</code></td><td>(point: Cartesian3) =&gt; void</td><td></td></tr><tr><td><a href="./cesium.drawpointtool.onrightclick.html">onRightClick</a></td><td><code>protected</code></td><td>() =&gt; void</td><td></td></tr><tr><td><a href="./cesium.drawpointtool.pointcollection.html">pointCollection</a></td><td><code>protected</code></td><td>PointPrimitiveCollection</td><td></td></tr><tr><td><a href="./cesium.drawpointtool.points.html">points</a></td><td><code>protected</code></td><td>Cartesian3[]</td><td></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.drawpointtool.clear.html">clear()</a></td><td></td><td>清空绘制结果，等待下轮绘制</td></tr><tr><td><a href="./cesium.drawpointtool.destroy.html">destroy()</a></td><td></td><td>销毁</td></tr><tr><td><a href="./cesium.drawpointtool.enable.html">enable()</a></td><td></td><td>启用</td></tr><tr><td><a href="./cesium.drawpointtool.stop.html">stop()</a></td><td></td><td>传递本轮绘制结果，不再绘制，不清空绘制结果</td></tr></tbody></table>`,14)]))}const E=s(n,[["render",o]]);export{c as __pageData,E as default};
