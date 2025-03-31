import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.CblLbO68.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"comp/moyu/cesium/cesium.drawcircletool.md","filePath":"comp/moyu/cesium/cesium.drawcircletool.md","lastUpdated":1743400838000}'),l={name:"comp/moyu/cesium/cesium.drawcircletool.md"};function r(o,t,d,h,n,c){return a(),i("div",null,t[0]||(t[0]=[e(`<p><a href="./index.html">Home</a> &gt; <a href="./cesium.html">@mo-yu/cesium</a> &gt; <a href="./cesium.drawcircletool.html">DrawCircleTool</a></p><h2 id="drawcircletool-class" tabindex="-1">DrawCircleTool class <a class="header-anchor" href="#drawcircletool-class" aria-label="Permalink to &quot;DrawCircleTool class&quot;">​</a></h2><p>绘制圆</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DrawCircleTool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DrawRectTool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DrawCircleToolOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DrawCircleToolEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Extends:</strong> <a href="./cesium.drawrecttool.html">DrawRectTool</a>&lt;<a href="./cesium.drawcircletooloptions.html">DrawCircleToolOptions</a>, <a href="./cesium.drawcircletoolevents.html">DrawCircleToolEvents</a>&gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DrawCircleTool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.eventBus.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;left-click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, onLeftClick)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.eventBus.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mouse-move&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, onMouseMove)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.eventBus.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;right-click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, onRightClick)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tool.eventBus.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;left-dbclick&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, onLeftDBClick)</span></span></code></pre></div><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Constructor</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.drawcircletool._constructor_.html">(constructor)(options)</a></td><td></td><td>Constructs a new instance of the <code>DrawCircleTool</code> class</td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.drawcircletool.onleftclick.html">onLeftClick</a></td><td><code>protected</code></td><td>(point: Cartesian3) =&gt; void</td><td></td></tr><tr><td><a href="./cesium.drawcircletool.onleftdbclick.html">onLeftDBClick</a></td><td><code>protected</code></td><td>() =&gt; void</td><td></td></tr><tr><td><a href="./cesium.drawcircletool.onmousemove.html">onMouseMove</a></td><td><code>protected</code></td><td>(point: Cartesian3) =&gt; void</td><td></td></tr><tr><td><a href="./cesium.drawcircletool.onrightclick.html">onRightClick</a></td><td><code>protected</code></td><td>() =&gt; void</td><td></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.drawcircletool.clear.html">clear()</a></td><td></td><td>清空绘制结果，等待下轮绘制</td></tr><tr><td><a href="./cesium.drawcircletool.createlfloatarea.html">createLFloatArea()</a></td><td><code>protected</code></td><td>创建拖拽圆</td></tr><tr><td><a href="./cesium.drawcircletool.destroy.html">destroy()</a></td><td></td><td>销毁</td></tr><tr><td><a href="./cesium.drawcircletool.enable.html">enable()</a></td><td></td><td>启用</td></tr><tr><td><a href="./cesium.drawcircletool.handlelineleftclick.html">handleLineLeftClick(point)</a></td><td><code>protected</code></td><td>重写绘制圆鼠标左击事件</td></tr><tr><td><a href="./cesium.drawcircletool.stop.html">stop()</a></td><td></td><td>传递本轮绘制结果，不再绘制，不清空绘制结果</td></tr><tr><td><a href="./cesium.drawcircletool.validatearea.html">validateArea()</a></td><td><code>protected</code></td><td>校验圆</td></tr></tbody></table>`,14)]))}const E=s(l,[["render",r]]);export{k as __pageData,E as default};
