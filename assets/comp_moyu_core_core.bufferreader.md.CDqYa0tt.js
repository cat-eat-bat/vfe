import{_ as e,c as r,o as d,a4 as a}from"./chunks/framework.CblLbO68.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"comp/moyu/core/core.bufferreader.md","filePath":"comp/moyu/core/core.bufferreader.md","lastUpdated":1743400838000}'),o={name:"comp/moyu/core/core.bufferreader.md"};function s(h,t,f,i,c,n){return d(),r("div",null,t[0]||(t[0]=[a('<p><a href="./index.html">Home</a> &gt; <a href="./core.html">@mo-yu/core</a> &gt; <a href="./core.bufferreader.html">BufferReader</a></p><h2 id="bufferreader-class" tabindex="-1">BufferReader class <a class="header-anchor" href="#bufferreader-class" aria-label="Permalink to &quot;BufferReader class&quot;">​</a></h2><p>二进制数据读取</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BufferReader</span></span></code></pre></div><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Constructor</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./core.bufferreader._constructor_.html">(constructor)(buffer, littleEndian)</a></td><td></td><td>Constructs a new instance of the <code>BufferReader</code> class</td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./core.bufferreader.buffer.html">buffer</a></td><td><code>readonly</code></td><td>ArrayBuffer</td><td>获取数据缓冲区</td></tr><tr><td><a href="./core.bufferreader.dataview.html">dataView</a></td><td><code>readonly</code></td><td>DataView</td><td>获取数据视图</td></tr><tr><td><a href="./core.bufferreader.offset.html">offset</a></td><td><code>readonly</code></td><td>number</td><td>获取当前指针位置</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><a href="./core.bufferreader.readbuffer.html">readBuffer(count)</a></td><td></td><td>读取指定字节数量的数据缓冲，并 skip(指定字节数量)</td></tr><tr><td><a href="./core.bufferreader.readfloat32.html">readFloat32()</a></td><td></td><td>读取一个 32 位单精度浮点数，并 skip(4)</td></tr><tr><td><a href="./core.bufferreader.readfloat64.html">readFloat64()</a></td><td></td><td>读取一个 64 位双精度浮点数，并 skip(8)</td></tr><tr><td><a href="./core.bufferreader.readint16.html">readInt16()</a></td><td></td><td>读取一个有符号双字节，并 skip(2)</td></tr><tr><td><a href="./core.bufferreader.readint32.html">readInt32()</a></td><td></td><td>读取一个有符号整数，并 skip(4)</td></tr><tr><td><a href="./core.bufferreader.readint8.html">readInt8()</a></td><td></td><td>读取一个有符号单字节，并 skip(1)</td></tr><tr><td><a href="./core.bufferreader.readstring.html">readString(count)</a></td><td></td><td>读取指定字节数量的数据缓冲转换为字符串，并 skip(指定字节数量)</td></tr><tr><td><a href="./core.bufferreader.readuint16.html">readUint16()</a></td><td></td><td>读取一个无符号双字节，并 skip(2)</td></tr><tr><td><a href="./core.bufferreader.readuint32.html">readUint32()</a></td><td></td><td>读取一个无符号整数，并 skip(4)</td></tr><tr><td><a href="./core.bufferreader.readuint8.html">readUint8()</a></td><td></td><td>读取一个无符号单字节，并 skip(1)</td></tr><tr><td><a href="./core.bufferreader.reset.html">reset()</a></td><td></td><td>指针复位</td></tr><tr><td><a href="./core.bufferreader.seek.html">seek(to)</a></td><td></td><td>指针跳转到指定位置</td></tr><tr><td><a href="./core.bufferreader.skip.html">skip(count)</a></td><td></td><td>指针跳过指定字节数</td></tr></tbody></table>',11)]))}const p=e(o,[["render",s]]);export{u as __pageData,p as default};
