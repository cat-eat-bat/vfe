import{_ as o,C as e,c as p,o as r,j as a,G as s,a4 as l,a as d}from"./chunks/framework.CblLbO68.js";const v=JSON.parse('{"title":"nginx 反向代理出现 302 异常","description":"","frontmatter":{"outline":"deep","title":"nginx 反向代理出现 302 异常","date":"2024-01-15T00:00:00.000Z","tags":["nginx"]},"headers":[],"relativePath":"posts/p-nginx-302.md","filePath":"posts/p-nginx-302.md","lastUpdated":1742972824000}'),c={name:"posts/p-nginx-302.md"};function _(g,t,h,x,k,m){const n=e("PostMeta"),i=e("PostNav");return r(),p("div",null,[t[0]||(t[0]=a("h1",{id:"nginx-反向代理出现-302-异常",tabindex:"-1"},[d("nginx 反向代理出现 302 异常 "),a("a",{class:"header-anchor",href:"#nginx-反向代理出现-302-异常","aria-label":'Permalink to "nginx 反向代理出现 302 异常"'},"​")],-1)),s(n),t[1]||(t[1]=l('<p>解决：在 location 添加以下配置项</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proxy_set_header Host $</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:$server_port;</span></span></code></pre></div>',2)),s(i)])}const E=o(c,[["render",_]]);export{v as __pageData,E as default};
