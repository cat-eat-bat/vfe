import{_ as l,C as i,c as p,o as e,j as a,G as n,a4 as k,a as E}from"./chunks/framework.CblLbO68.js";const _=JSON.parse('{"title":"Nginx 缓存设置","description":"","frontmatter":{"title":"Nginx 缓存设置","date":"2025-02-20T00:00:00.000Z","tags":["nginx"],"outline":"deep"},"headers":[],"relativePath":"posts/p-nginx-cache.md","filePath":"posts/p-nginx-cache.md","lastUpdated":1743400838000}'),d={name:"posts/p-nginx-cache.md"};function r(g,s,c,y,o,F){const h=i("PostMeta"),t=i("PostNav");return e(),p("div",null,[s[0]||(s[0]=a("h1",{id:"nginx-中缓存设置",tabindex:"-1"},[E("Nginx 中缓存设置 "),a("a",{class:"header-anchor",href:"#nginx-中缓存设置","aria-label":'Permalink to "Nginx 中缓存设置"'},"​")],-1)),n(h),s[1]||(s[1]=k(`<p>nginx 中关于缓存主要是有<code>Proxy</code>(服务端)缓存，客户端缓存设置</p><h2 id="proxy缓存" tabindex="-1"><code>Proxy</code>缓存 <a class="header-anchor" href="#proxy缓存" aria-label="Permalink to &quot;\`Proxy\`缓存&quot;">​</a></h2><p>在nginx配置的<code>http</code> 增加代理缓存：</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proxy_cache_path </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cache levels</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> keys_zone</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">my_cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m max_size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g inactive</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m use_temp_path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">off;</span></span></code></pre></div><p>参数解释：</p><ul><li>path：强制参数，指定缓存文件的存放路径。</li><li>levels：定义了缓存目录的层级。每层可以用1（最多16种选择，0-f）或2（最多256种选择，00-ff）表示，中间用 : 分隔。</li><li>keys_zone：强制参数，定义共享内存区的名称和大小，该共享内存用于保存缓存项目的元数据（所有活动的key和缓存数据相关的信息），这样nginx可以快速判断一个request是否命中或者未命中缓存，1m可以存储8000个key，10m可以存储80000个key。</li><li>inactive：删除指定时间内未被访问的缓存文件，默认10分钟</li><li>max_size：设置了缓存存储的上限，如果不指定，最大会用掉所有磁盘空间</li><li>use_temp_path：直接把临时文件放在缓存目录中</li></ul><p>对于一些实时性要求非常高的页面或数据来说，就不应该去设置缓存，下面来看看如何配置不缓存的内容。</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server_name cache.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">club</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">URI 中后缀为 .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">txt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 或 .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的设置变量值为 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;no cache&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($request_uri ~ \\.(txt|text)$) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set $</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cache_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;no cache&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>针对反向代理配置缓存：</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    proxy_no_cache $cache_name;      </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">判断该变量是否有值，如果有值则不进行缓存，如果没有值则进行缓存    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    proxy_cache my_cache;            </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">设置缓存内存</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    proxy_cache_valid </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m;        </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">缓存状态为200的请求，缓存时长为5分钟</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    proxy_cache_key $request_uri;    </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">缓存文件的key为请求的URI</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    add_header Nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Cache</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Cached&#39;    </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">把缓存状态设置为头部信息，响应给客户端 用于判断调试 很有用！</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    proxy_pass </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cache_server;  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">代理转发</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="客户端缓存" tabindex="-1">客户端缓存 <a class="header-anchor" href="#客户端缓存" aria-label="Permalink to &quot;客户端缓存&quot;">​</a></h2><p>nginx 里可以设置让浏览器客户端对资源进行缓存，如下：</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">add_header    Cache</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Control  max</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 单位是秒</span></span></code></pre></div>`,13)),n(t)])}const C=l(d,[["render",r]]);export{_ as __pageData,C as default};
