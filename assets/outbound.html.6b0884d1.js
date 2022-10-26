import{_ as c,r as p,o as l,c as u,a as n,b as e,w as t,e as a,d as o}from"./app.5a12ac33.js";const i={},r=a(`<h1 id="outbounds" tabindex="-1"><a class="header-anchor" href="#outbounds" aria-hidden="true">#</a> Outbounds</h1><p>outbound</p><p>\u51FA\u7AD9\u8FDE\u63A5\u7528\u4E8E\u5411\u8FDC\u7A0B\u7F51\u7AD9\u6216\u4E0B\u4E00\u7EA7\u4EE3\u7406\u670D\u52A1\u5668\u53D1\u9001\u6570\u636E\uFF0C\u53EF\u7528\u7684\u534F\u8BAE\u8BF7\u89C1\u534F\u8BAE\u5217\u8868\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sendThrough&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2.3.4&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;proxySettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;mux&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;concurrency&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>protocol</code>: name of <code>&lt;outbound&gt;</code></p></blockquote><p>\u51FA\u7AD9\u534F\u8BAE\u540D\u79F0\u3002</p><blockquote><p><code>settings</code>: settings of <code>&lt;outbound&gt;</code></p></blockquote><p>\u51FA\u7AD9\u534F\u8BAE\u8BBE\u7F6E\u3002</p><blockquote><p><code>sendThrough</code>: string</p></blockquote><p>\u7528\u4E8E\u53D1\u9001\u6570\u636E\u7684 IP \u5730\u5740\uFF0C\u5F53\u4E3B\u673A\u6709\u591A\u4E2A IP \u5730\u5740\u65F6\u6709\u6548\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>&quot;0.0.0.0&quot;</code>\u3002</p><blockquote><p><code>tag</code>: string</p></blockquote><p>\u6B64\u51FA\u7AD9\u8FDE\u63A5\u7684\u6807\u8BC6\uFF0C\u7528\u4E8E\u5728\u5176\u5B83\u7684\u914D\u7F6E\u4E2D\u5B9A\u4F4D\u6B64\u8FDE\u63A5\u3002\u5F53\u5176\u503C\u4E0D\u4E3A\u7A7A\u65F6\uFF0C\u5FC5\u987B\u5728\u6240\u6709 tag \u4E2D\u552F\u4E00\u3002</p>`,12),d=n("code",null,"streamSettings",-1),k=o(": "),b=o("StreamObject"),h=a('<p>\u5E95\u5C42\u4F20\u8F93\u914D\u7F6E\u3002</p><blockquote><p><code>proxySettings</code>: <a href="#ProxyObject">ProxyObject</a></p></blockquote><p>\u51FA\u7AD9\u4EE3\u7406\u914D\u7F6E\u3002\u5F53\u51FA\u7AD9\u4EE3\u7406\u751F\u6548\u65F6\u3002</p><blockquote><p><code>mux</code>: <a href="#MuxObject">MuxObject</a></p></blockquote><p>Mux \u914D\u7F6E\u3002</p><h2 id="\u652F\u6301\u7684\u4EE3\u7406\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301\u7684\u4EE3\u7406\u534F\u8BAE" aria-hidden="true">#</a> \u652F\u6301\u7684\u4EE3\u7406\u534F\u8BAE</h2>',6),v=o("SOCKS"),m=o("VMess"),_=o("VLite"),q=o("Shadowsocks"),g=o("Freedom"),f=o("Loopback"),x=o("Blackhole"),y=o("DNS"),j=o("Trojan"),S=o("VLESS"),M=a(`<h2 id="proxyobject" tabindex="-1"><a class="header-anchor" href="#proxyobject" aria-hidden="true">#</a> ProxyObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;another-outbound-tag&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;transportLayer&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>\u5F53\u6307\u5B9A\u53E6\u4E00\u4E2A\u51FA\u7AD9\u8FDE\u63A5\u7684\u6807\u8BC6\u65F6\uFF0C\u6B64\u51FA\u7AD9\u8FDE\u63A5\u53D1\u51FA\u7684\u6570\u636E\uFF0C\u5C06\u88AB\u8F6C\u53D1\u81F3\u6240\u6307\u5B9A\u7684\u51FA\u7AD9\u8FDE\u63A5\u53D1\u51FA\u3002</p><blockquote><p><code>transportLayer</code>: true | false</p></blockquote><p>\u662F\u5426\u542F\u7528\u4F20\u8F93\u5C42\u8F6C\u53D1\u652F\u6301\u3002\u5728\u542F\u7528\u540E,\u6B64\u51FA\u7AD9\u8FDE\u63A5\u7684\u4F20\u8F93\u5C42\u534F\u8BAE\u5C06\u4FDD\u6301\u751F\u6548\uFF08\u5982\u679C\u4F20\u8F93\u5C42\u534F\u8BAE\u652F\u6301\uFF09\u3002</p><p>\u5982\u679C\u4E0D\u542F\u7528\u6B64\u9009\u9879, \u5728\u8F6C\u53D1\u65F6\u4F20\u8F93\u5C42\u534F\u8BAE\u5C06\u5931\u6548\uFF0C\u53EA\u80FD\u4F7F\u7528\u9ED8\u8BA4\u7684 TCP \u4F20\u8F93\u534F\u8BAE\u3002</p><h2 id="muxobject" tabindex="-1"><a class="header-anchor" href="#muxobject" aria-hidden="true">#</a> MuxObject</h2>`,8),P=o("Mux \u529F\u80FD\u5B9E\u73B0\u4E86\u5728\u4E00\u6761 TCP \u8FDE\u63A5\u4E0A\u5206\u53D1\u591A\u6761 TCP \u8FDE\u63A5\u7684\u6570\u636E\u3002\u534F\u8BAE\u7EC6\u8282\u8BE6\u89C1 "),C=o("Mux.Cool"),O=o("\u3002"),T=a(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;concurrency&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>enabled</code>: true | false</p></blockquote><p>\u662F\u5426\u542F\u7528 Mux\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>false</code>\u3002</p><blockquote><p><code>concurrency</code>: number</p></blockquote><p>\u6700\u5927\u5E76\u53D1\u8FDE\u63A5\u6570\u3002\u6700\u5C0F\u503C <code>1</code>\uFF0C\u6700\u5927\u503C <code>1024</code>\uFF0C\u9ED8\u8BA4\u503C <code>8</code>\u3002</p><p>\u5982\u679C\u586B\u8D1F\u6570\uFF0C\u5982 <code>-1</code>\uFF0C\u5219\u4E0D\u52A0\u8F7D Mux \u6A21\u5757\u3002</p><p>\u6B64\u6570\u503C\u8868\u793A\u4E86\u4E00\u4E2A TCP \u8FDE\u63A5\u4E0A\u6700\u591A\u627F\u8F7D\u7684 Mux \u8FDE\u63A5\u6570\u91CF\u3002\u5F53\u5BA2\u6237\u7AEF\u53D1\u51FA\u4E86 8 \u4E2A TCP \u8BF7\u6C42\uFF0C\u800C <code>concurrency=8</code> \u65F6\uFF0CV2Ray \u53EA\u4F1A\u53D1\u51FA\u4E00\u6761\u5B9E\u9645\u7684\u8FDE\u63A5\uFF0C\u5BA2\u6237\u7AEF\u7684 8 \u4E2A\u8BF7\u6C42\u5168\u90E8\u7531\u8FD9\u6761\u8FDE\u63A5\u4F20\u8F93\u3002</p>`,7);function V(L,N){const s=p("RouterLink");return l(),u("div",null,[r,n("blockquote",null,[n("p",null,[d,k,e(s,{to:"/v5/config/stream.html"},{default:t(()=>[b]),_:1})])]),h,n("ul",null,[n("li",null,[e(s,{to:"/v5/config/proxy/socks.html"},{default:t(()=>[v]),_:1})]),n("li",null,[e(s,{to:"/v5/config/proxy/vmess.html"},{default:t(()=>[m]),_:1})]),n("li",null,[e(s,{to:"/v5/config/proxy/vlite.html"},{default:t(()=>[_]),_:1})]),n("li",null,[e(s,{to:"/v5/config/proxy/shadowsocks.html"},{default:t(()=>[q]),_:1})]),n("li",null,[e(s,{to:"/v5/config/proxy/freedom.html"},{default:t(()=>[g]),_:1})]),n("li",null,[e(s,{to:"/v5/config/proxy/loopback.html"},{default:t(()=>[f]),_:1})]),n("li",null,[e(s,{to:"/v5/config/proxy/blackhole.html"},{default:t(()=>[x]),_:1})]),n("li",null,[e(s,{to:"/v5/config/proxy/dns.html"},{default:t(()=>[y]),_:1})]),n("li",null,[e(s,{to:"/v5/config/proxy/trojan.html"},{default:t(()=>[j]),_:1})]),n("li",null,[e(s,{to:"/v5/config/proxy/vless.html"},{default:t(()=>[S]),_:1})])]),M,n("p",null,[P,e(s,{to:"/developer/protocols/muxcool.html"},{default:t(()=>[C]),_:1}),O]),T])}const B=c(i,[["render",V],["__file","outbound.html.vue"]]);export{B as default};
