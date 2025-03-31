import{_ as p,C as i,c as l,o as h,j as a,G as t,a4 as k,a as r}from"./chunks/framework.CblLbO68.js";const m=JSON.parse('{"title":"nginx 反向代理配置地址通配符","description":"","frontmatter":{"title":"nginx 反向代理配置地址通配符","date":"2024-01-16T00:00:00.000Z","tags":["nginx"]},"headers":[],"relativePath":"posts/p-nginx-prefix.md","filePath":"posts/p-nginx-prefix.md","lastUpdated":1743400838000}'),d={name:"posts/p-nginx-prefix.md"};function E(o,s,g,c,y,_){const n=i("PostMeta"),e=i("PostNav");return h(),l("div",null,[s[0]||(s[0]=a("h1",{id:"nginx-反向代理配置地址通配符",tabindex:"-1"},[r("nginx 反向代理配置地址通配符 "),a("a",{class:"header-anchor",href:"#nginx-反向代理配置地址通配符","aria-label":'Permalink to "nginx 反向代理配置地址通配符"'},"​")],-1)),t(n),s[1]||(s[1]=k(`<p>示例如下:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  location ~ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nq|nczl)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      rewrite </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nq|nczl)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)$ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      proxy_pass </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.0.1:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8042</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>注意 rewrite 里的 <code>/$2</code></p></div>`,3)),t(e)])}const F=p(d,[["render",E]]);export{m as __pageData,F as default};
