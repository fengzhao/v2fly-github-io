import{_ as c,r as a,o as l,c as r,a as n,b as e,w as i,d as s,e as o}from"./app.5a12ac33.js";const u={},d=n("h1",{id:"trojan",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#trojan","aria-hidden":"true"},"#"),s(" Trojan")],-1),k=n("ul",null,[n("li",null,[s("\u540D\u79F0\uFF1A"),n("code",null,"trojan")]),n("li",null,"\u7C7B\u578B\uFF1A\u5165\u7AD9 / \u51FA\u7AD9")],-1),b={href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"},v=s("Trojan"),q=s(" \u534F\u8BAE\u8BBE\u8BA1\u6307\u5357"),m=o(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Trojan \u88AB\u8BBE\u8BA1\u5DE5\u4F5C\u5728\u6B63\u786E\u914D\u7F6E\u7684\u52A0\u5BC6 TLS \u96A7\u9053\u4E2D</p></div><p>Trojan \u7684\u914D\u7F6E\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C<code>InboundConfigurationObject</code> \u548C <code>OutboundConfigurationObject</code>\uFF0C\u5206\u522B\u5BF9\u5E94\u5165\u7AD9\u548C\u51FA\u7AD9\u534F\u8BAE\u914D\u7F6E\u4E2D\u7684 <code>settings</code> \u9879\u3002</p><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@v2fly.org&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fallbacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>clients</code>: [ <a href="#clientobject">ClientObject</a> ]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u4E2D\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A <a href="#clientobject">ClientObject</a>\u3002</p><blockquote><p><code>fallbacks</code>: [ <a href="#fallbackobject">FallbackObject</a> ]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u4E00\u7CFB\u5217\u5F3A\u5927\u7684\u56DE\u843D\u5206\u6D41\u914D\u7F6E\uFF08\u53EF\u9009\uFF09\u3002</p><h3 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@v2fly.org&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>password</code>: string</p></blockquote><p>\u5FC5\u586B\uFF0C\u4EFB\u610F\u5B57\u7B26\u4E32\u3002</p><blockquote><p><code>email</code>: string</p></blockquote><p>\u90AE\u4EF6\u5730\u5740\uFF0C\u53EF\u9009\uFF0C\u7528\u4E8E\u6807\u8BC6\u7528\u6237</p><blockquote><p><code>level</code>: number</p></blockquote>`,15),h=s("\u7528\u6237\u7B49\u7EA7\uFF0C\u9ED8\u8BA4\u503C\u4E3A "),j=n("code",null,"0",-1),g=s("\u3002\u8BE6\u89C1 "),f=s("\u672C\u5730\u7B56\u7565"),_=s("\u3002"),y=o(`<h3 id="fallbackobject" tabindex="-1"><a class="header-anchor" href="#fallbackobject" aria-hidden="true">#</a> FallbackObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;alpn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
    <span class="token property">&quot;xver&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>v4.31.0+\uFF0CV2Ray \u7684 Trojan \u6709\u5B8C\u6574\u7684 VLESS fallbacks \u652F\u6301\uFF0C\u914D\u7F6E\u65B9\u5F0F\u5B8C\u5168\u4E00\u81F4\uFF0C\u540E\u7EED VLESS fallbacks \u5347\u7EA7\u65F6\u4F1A\u540C\u6B65\u8DDF\u8FDB\u3002</p><p>\u89E6\u53D1\u56DE\u843D\u7684\u6761\u4EF6\u4E5F\u57FA\u672C\u76F8\u540C\uFF1A\u9996\u5305\u957F\u5EA6 &lt; 58 \u6216\u7B2C 57 \u4E2A\u5B57\u8282\u4E0D\u4E3A &#39;\\r&#39;\uFF08\u56E0\u4E3A Trojan \u6CA1\u6709\u534F\u8BAE\u7248\u672C\uFF09\u6216\u8EAB\u4EFD\u8BA4\u8BC1\u5931\u8D25\u3002</p><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
            <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@v2fly.org&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>servers</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u4E2D\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A <a href="#serverobject">ServerObject</a>\u3002</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@v2fly.org&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>\u670D\u52A1\u5668\u5730\u5740\uFF0C\u652F\u6301 IPv4\u3001IPv6 \u548C\u57DF\u540D\u3002\u5FC5\u586B\u3002</p><blockquote><p><code>port</code>: number</p></blockquote><p>\u670D\u52A1\u5668\u7AEF\u53E3\uFF0C\u5FC5\u586B\u3002</p><blockquote><p><code>password</code>: string</p></blockquote><p>\u5FC5\u586B\uFF0C\u4EFB\u610F\u5B57\u7B26\u4E32\u3002</p><blockquote><p><code>email</code>: string</p></blockquote><p>\u90AE\u4EF6\u5730\u5740\uFF0C\u53EF\u9009\uFF0C\u7528\u4E8E\u6807\u8BC6\u7528\u6237</p><blockquote><p><code>level</code>: number</p></blockquote><p>\u7528\u6237\u7B49\u7EA7</p>`,20);function x(O,w){const t=a("ExternalLinkIcon"),p=a("RouterLink");return l(),r("div",null,[d,k,n("p",null,[n("a",b,[v,e(t)]),q]),m,n("p",null,[h,j,g,e(p,{to:"/config/policy.html"},{default:i(()=>[f]),_:1}),_]),y])}const S=c(u,[["render",x],["__file","trojan.html.vue"]]);export{S as default};
