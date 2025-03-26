import{_ as e,c as a,o as d,a4 as i}from"./chunks/framework.CblLbO68.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"comp/moyu/cesium/cesium.heatmapoptions.md","filePath":"comp/moyu/cesium/cesium.heatmapoptions.md","lastUpdated":1742972824000}'),r={name:"comp/moyu/cesium/cesium.heatmapoptions.md"};function o(s,t,p,m,n,h){return d(),a("div",null,t[0]||(t[0]=[i('<p><a href="./index.html">Home</a> &gt; <a href="./cesium.html">@mo-yu/cesium</a> &gt; <a href="./cesium.heatmapoptions.html">HeatMapOptions</a></p><h2 id="heatmapoptions-interface" tabindex="-1">HeatMapOptions interface <a class="header-anchor" href="#heatmapoptions-interface" aria-label="Permalink to &quot;HeatMapOptions interface&quot;">​</a></h2><p>热力图配置参数</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HeatMapOptions</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./cesium.heatmapoptions.bounds.html">bounds</a></td><td></td><td>[number, number, number, number]</td><td>经纬度边界 [xMin,yMin,xMax,yMax]</td></tr><tr><td><a href="./cesium.heatmapoptions.datafield.html">dataField?</a></td><td></td><td>string</td><td><em>(Optional)</em> geojson-properties 内代表权重的属性字段名称，属性值必须是数字，默认名称&quot;value&quot;</td></tr><tr><td><a href="./cesium.heatmapoptions.defaultvalue.html">defaultValue?</a></td><td></td><td>number</td><td><em>(Optional)</em> 若 feature.properties[dataField]不是数字，赋予默认值，默认 0</td></tr><tr><td><a href="./cesium.heatmapoptions.delta.html">delta?</a></td><td></td><td>number</td><td><em>(Optional)</em> 经纬度插值间隔,值越小网格越密 默认：0.001</td></tr><tr><td><a href="./cesium.heatmapoptions.heatmapjs.html">heatmapjs?</a></td><td></td><td>HeatmapConfiguration</td><td><em>(Optional)</em> heatmap.js 的 HeatmapConfiguration</td></tr><tr><td><a href="./cesium.heatmapoptions.height.html">height?</a></td><td></td><td>number</td><td><em>(Optional)</em> 几何体单位权重高度， 单位：米，默认：50</td></tr><tr><td><a href="./cesium.heatmapoptions.id.html">id?</a></td><td></td><td>string</td><td><em>(Optional)</em> 唯一标识</td></tr><tr><td><a href="./cesium.heatmapoptions.locate.html">locate?</a></td><td></td><td>boolean</td><td><em>(Optional)</em> 加载后定位</td></tr><tr><td><a href="./cesium.heatmapoptions.max.html">max?</a></td><td></td><td>number</td><td><em>(Optional)</em> 所有 feature.properties[dataField]的最大值，不提供则自动获取</td></tr><tr><td><a href="./cesium.heatmapoptions.min.html">min?</a></td><td></td><td>number</td><td><em>(Optional)</em> 所有 feature.properties[dataField]的最小值，不提供则自动获取</td></tr><tr><td><a href="./cesium.heatmapoptions.minheight.html">minheight?</a></td><td></td><td>number</td><td><em>(Optional)</em> 几何体起始高度， 单位：米，默认：0</td></tr><tr><td><a href="./cesium.heatmapoptions.url.html">url</a></td><td></td><td>string | object</td><td>点信息，支持 4326 坐标系 FeatureCollection 对象或请求链接</td></tr></tbody></table>',7)]))}const c=e(r,[["render",o]]);export{u as __pageData,c as default};
