import{_ as a,c as i,o as e,a4 as t}from"./chunks/framework.CblLbO68.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"comp/moyu/cesium/index.md","filePath":"comp/moyu/cesium/index.md","lastUpdated":1742880542000}'),n={name:"comp/moyu/cesium/index.md"};function l(p,s,h,k,r,d){return e(),i("div",null,s[0]||(s[0]=[t(`<p><a href="./index.html">Home</a></p><p>封装 cesium 实现的三维图层加载等方法。</p><ul><li>虽然已发布至 npm，但是还需要根据项目实际情况修改，推荐在项目里引入源码（青岛云脑）。</li><li>vite.config.j(t)s 里配置 alias 别名。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &#39;@mo-yu/cesium&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./src/lib/index.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &#39;heatmap.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       __dirname,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       &#39;./src/lib/external/heatmap/heatmap.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><ul><li>tsconfig.json 里配置 paths。</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;paths&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     &quot;@mo-yu/cesium&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/lib/index.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     &quot;heatmap.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/lib/external/heatmap&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span></code></pre></div><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h2 id="packages" tabindex="-1">Packages <a class="header-anchor" href="#packages" aria-label="Permalink to &quot;Packages&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Package</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.html">@mo-yu/cesium</a></td><td></td></tr></tbody></table>`,9)]))}const E=a(n,[["render",l]]);export{c as __pageData,E as default};
