import{_ as i,c as a,o as n,a4 as t}from"./chunks/framework.CblLbO68.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"comp/moyu/cesium/cesium.wallentityoption.md","filePath":"comp/moyu/cesium/cesium.wallentityoption.md","lastUpdated":1743403817000}'),l={name:"comp/moyu/cesium/cesium.wallentityoption.md"};function p(h,s,e,k,r,o){return n(),a("div",null,s[0]||(s[0]=[t(`<p><a href="./index.html">Home</a> &gt; <a href="./cesium.html">@mo-yu/cesium</a> &gt; <a href="./cesium.wallentityoption.html">WallEntityOption</a></p><h2 id="wallentityoption-type" tabindex="-1">WallEntityOption type <a class="header-anchor" href="#wallentityoption-type" aria-label="Permalink to &quot;WallEntityOption type&quot;">​</a></h2><p>WallEntity 参数，改造了 Wall 属性，在原始参数基础上更改了(使用 css 颜色)颜色类参数: material outlineColor 更改了高度数组围为数字，由实际的点数确定数组 minimumHeights maximumHeights 添加了自定义材质 customMaterial，会覆盖 cesium 原生材质 material 扩展 distanceDisplayCondition 传递方式 distanceDisplayCondition: [near, far]</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WallEntityOption</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EntityOption</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Omit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    WallGraphics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ConstructorOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;positions&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;minimumHeights&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;maximumHeights&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;material&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;outlineColor&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;distanceDisplayCondition&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    material</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MaterialProperty</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    customMaterial</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomMaterial</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    positions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Cartesian3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    minimumHeights</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    maximumHeights</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    outlineColor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Property</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    distanceDisplayCondition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Property</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DistanceDisplayCondition</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><p><strong>References:</strong> <a href="./cesium.entityoption.html">EntityOption</a>, <a href="./cesium.custommaterial.html">CustomMaterial</a></p>`,6)]))}const F=i(l,[["render",p]]);export{d as __pageData,F as default};
