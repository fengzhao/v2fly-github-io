import{_ as n,o as s,c as o,e}from"./app.5a12ac33.js";const a={},t=e(`<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h1><ul><li>\u540D\u79F0\uFF1A<code>http</code></li><li>\u7C7B\u578B\uFF1A\u5165\u7AD9\uFF0F\u51FA\u7AD9</li></ul><p>HTTP \u7684\u914D\u7F6E\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C<code>InboundConfigurationObject</code> \u548C <code>OutboundConfigurationObject</code>\uFF0C\u5206\u522B\u5BF9\u5E94\u5165\u7AD9\u548C\u51FA\u7AD9\u534F\u8BAE\u914D\u7F6E\u4E2D\u7684 <code>settings</code> \u9879\u3002</p><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;accounts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;allowTransparent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5E94\u8BE5\u6CE8\u610F\uFF0C\u867D\u7136 <code>http inbound</code> \u53EF\u4EE5\u63D0\u4F9B\u516C\u5171\u670D\u52A1\uFF0C\u4F46 http \u534F\u8BAE\u6CA1\u6709\u5BF9\u4F20\u8F93\u52A0\u5BC6\uFF0C\u4E0D\u9002\u5B9C\u7ECF\u516C\u7F51\u4E2D\u4F20\u8F93\uFF0C\u66F4\u5BB9\u6613\u6210\u4E3A\u88AB\u4EBA\u7528\u4F5C\u653B\u51FB\u7684\u8089\u9E21\u3002<code>http inbound</code> \u66F4\u6709\u610F\u4E49\u7684\u7528\u6CD5\u662F\u5728\u5C40\u57DF\u7F51\u6216\u672C\u673A\u73AF\u5883\u4E0B\u76D1\u542C\uFF0C\u4E3A\u5176\u4ED6\u7A0B\u5E8F\u63D0\u4F9B\u672C\u5730\u670D\u52A1\u3002</p></div><blockquote><p><code>timeout</code>: number</p></blockquote><p>\u4ECE\u5BA2\u6237\u7AEF\u8BFB\u53D6\u6570\u636E\u7684\u8D85\u65F6\u8BBE\u7F6E\uFF08\u79D2\uFF09\uFF0C0 \u8868\u793A\u4E0D\u9650\u65F6\u3002\u9ED8\u8BA4\u503C\u4E3A 300\u3002 V2Ray 3.1 \u540E\u7B49\u4EF7\u4E8E\u5BF9\u5E94\u7528\u6237\u7B49\u7EA7\u7684 <code>connIdle</code> \u7B56\u7565\u3002</p><blockquote><p><code>accounts</code>: [<a href="#accountobject">AccountObject</a>]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u4E3A\u4E00\u4E2A\u7528\u6237\u5E10\u53F7\u3002\u9ED8\u8BA4\u503C\u4E3A\u7A7A\u3002</p><p>\u5F53 <code>accounts</code> \u975E\u7A7A\u65F6\uFF0CHTTP \u4EE3\u7406\u5C06\u5BF9\u5165\u7AD9\u8FDE\u63A5\u8FDB\u884C Basic Authentication \u9A8C\u8BC1\u3002</p><blockquote><p><code>allowTransparent</code>: true | false</p></blockquote><p>\u5F53\u4E3A <code>true</code> \u65F6\uFF0C\u4F1A\u8F6C\u53D1\u6240\u6709 HTTP \u8BF7\u6C42\uFF0C\u800C\u975E\u53EA\u662F\u4EE3\u7406\u8BF7\u6C42\u3002\u82E5\u914D\u7F6E\u4E0D\u5F53\uFF0C\u5F00\u542F\u6B64\u9009\u9879\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF\u3002</p><blockquote><p><code>userLevel</code>: number</p></blockquote><p>\u7528\u6237\u7B49\u7EA7\uFF0C\u6240\u6709\u8FDE\u63A5\u4F7F\u7528\u8FD9\u4E00\u7B49\u7EA7\u3002</p><h3 id="accountobject" tabindex="-1"><a class="header-anchor" href="#accountobject" aria-hidden="true">#</a> AccountObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>user</code>: string</p></blockquote><p>\u7528\u6237\u540D\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\u3002\u5FC5\u586B\u3002</p><blockquote><p><code>pass</code>: string</p></blockquote><p>\u5BC6\u7801\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\u3002\u5FC5\u586B\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5728 Linux \u4E2D\u4F7F\u7528\u4EE5\u4E0B\u73AF\u5883\u53D8\u91CF\u5373\u53EF\u5728\u5F53\u524D session \u4F7F\u7528\u5168\u5C40 HTTP \u4EE3\u7406\uFF08\u5F88\u591A\u8F6F\u4EF6\u90FD\u652F\u6301\u8FD9\u4E00\u8BBE\u7F6E\uFF0C\u4E5F\u6709\u4E0D\u652F\u6301\u7684\uFF09\u3002</p><ul><li><code>export http_proxy=http://127.0.0.1:8080/</code> (\u5730\u5740\u987B\u6539\u6210\u4F60\u914D\u7F6E\u7684 HTTP \u5165\u7AD9\u4EE3\u7406\u5730\u5740)</li><li><code>export https_proxy=$http_proxy</code></li></ul></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.108.1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">3128</span><span class="token punctuation">,</span>
            <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(V2Ray 4.21.0+)</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5E94\u8BE5\u6CE8\u610F\uFF0C\u867D\u7136 <code>http outbound</code> \u53EF\u4EE5\u4F5C\u4E3A\u5BF9\u5916\u8BBF\u95EE\u7684\u914D\u7F6E\uFF0C\u4F46 <code>http proxy</code> \u534F\u8BAE\u6CA1\u6709\u5BF9\u4F20\u8F93\u52A0\u5BC6\uFF0C\u4E0D\u9002\u5B9C\u7ECF\u516C\u7F51\u4E2D\u4F20\u8F93\uFF0C\u4E14\u56E0\u4E0D\u652F\u6301 udp \u4F20\u8F93\u5C06\u4F1A\u5BFC\u81F4 core \u529F\u80FD\u53D7\u9650\uFF08Routing \u8FC7\u7A0B\u7684\u7684 DNS \u67E5\u8BE2\u4E0D\u53EF\u7528\uFF09\u3002<code>http outbound</code> \u66F4\u6709\u610F\u4E49\u7684\u7528\u6CD5\u662F\u5728\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF0C\u53EA\u80FD\u4F7F\u7528 <code>http proxy</code> \u5BF9\u5916\u8BBF\u95EE\u5185\u90E8\u7F51\u7EDC\u4E2D\uFF0C\u4F5C\u4E3A\u4E3A\u5176\u4ED6\u534F\u8BAE\u8FDE\u63A5\u4EE3\u7406\u670D\u52A1\u5668\u7684\u524D\u7F6E\u4EE3\u7406\u4F7F\u7528\uFF08\u89C1 <code>OutboundObject</code> \u7684 <code>ProxySettingsObject</code>\uFF09\u3002\u53E6\u56E0 <code>http proxy</code> \u53EA\u80FD\u4EE3\u7406 tcp \u534F\u8BAE\uFF0Cudp \u7CFB\u7684\u534F\u8BAE\u5747\u4E0D\u80FD\u901A\u8FC7\u3002</p></div><p>(V2Ray 4.21.1+)</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>4.20.0 \u7248\u672C\u4E2D\u5F15\u5165\u4E86 http outbound \u4F5C\u4E3A\u5176\u4ED6\u534F\u8BAE\u7684\u524D\u7F6E\u4EE3\u7406\u7528\u6CD5\u4E2D\uFF0C\u7F3A\u4E4F\u4E86\u5BF9 TLS \u914D\u7F6E\u7684\u652F\u6301\u30024.21.1 \u7684\u8865\u4E01\u7248\u672C\u4E2D\u5BF9 <code>streamSettings</code> \u4E2D\u7684 <code>security</code> \u548C <code>tlsSettings</code> \u4FDD\u7559\u751F\u6548\u3002\u76EE\u524D\u524D\u7F6E\u4EE3\u7406\u7684\u7528\u6CD5\u4E2D\uFF0Cvmess/tcp\u3001vmess/tcp-tls \u548C shadowsocks \u7B49\u4E09\u79CD\u534F\u8BAE\u65B9\u5F0F\u53EF\u4F7F\u7528\uFF0C\u5176\u4ED6\u4F20\u8F93\u534F\u8BAE\u7684\u524D\u7F6E\u4EE3\u7406\u7528\u6CD5\u9700\u540E\u7EED\u7248\u672C\u5F00\u53D1\u652F\u6301\u3002</p></div><blockquote><p><code>servers</code>: \u6570\u7EC4</p></blockquote><p>HTTP \u4EE3\u7406\u670D\u52A1\u5668\u914D\u7F6E\uFF0C\u82E5\u914D\u7F6E\u591A\u4E2A\uFF0C\u5FAA\u73AF\u4F7F\u7528 (RoundRobin)\u3002</p><blockquote><p><code>address</code>: string</p></blockquote><p>HTTP \u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740\uFF0C\u5FC5\u586B\u3002</p><blockquote><p><code>port</code>: int</p></blockquote><p>HTTP \u4EE3\u7406\u670D\u52A1\u5668\u7AEF\u53E3\uFF0C\u5FC5\u586B\u3002</p><blockquote><p><code>user</code>: [<a href="#accountobject">AccountObject</a>]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u4E3A\u4E00\u4E2A\u7528\u6237\u5E10\u53F7\u3002\u9ED8\u8BA4\u503C\u4E3A\u7A7A\u3002</p>`,36),p=[t];function c(u,i){return s(),o("div",null,p)}const d=n(a,[["render",c],["__file","http.html.vue"]]);export{d as default};
