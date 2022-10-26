import{_ as t,r as d,o as s,c as a,a as o,b as n,d as e,e as p}from"./app.5a12ac33.js";const r={},u=o("h1",{id:"shadowsocks",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#shadowsocks","aria-hidden":"true"},"#"),e(" Shadowsocks")],-1),h={href:"https://shadowsocks.org",target:"_blank",rel:"noopener noreferrer"},i=e("Shadowsocks"),l=e(" \u534F\u8BAE\uFF0C\u517C\u5BB9\u5927\u90E8\u5206\u5176\u5B83\u7248\u672C\u7684\u5B9E\u73B0\u3002"),q=p('<h2 id="shadowsocks-\u5165\u7AD9" tabindex="-1"><a class="header-anchor" href="#shadowsocks-\u5165\u7AD9" aria-hidden="true">#</a> Shadowsocks \u5165\u7AD9</h2><p>inbound.shadowsocks</p><blockquote><p><code>method</code> : string</p></blockquote><p>\u52A0\u5BC6\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u89C1<a href="#%E5%8A%A0%E5%AF%86%E6%96%B9%E5%BC%8F%E5%88%97%E8%A1%A8">\u52A0\u5BC6\u65B9\u5F0F\u5217\u8868</a>\u3002</p><blockquote><p><code>password</code>: string</p></blockquote><p>\u670D\u52A1\u5668\u8BA4\u53EF\u7684\u5BC6\u7801\u3002Shadowsocks \u534F\u8BAE\u4E0D\u9650\u5236\u5BC6\u7801\u957F\u5EA6\uFF0C\u4F46\u77ED\u5BC6\u7801\u4F1A\u66F4\u53EF\u80FD\u88AB\u7834\u89E3\uFF0C\u5EFA\u8BAE\u4F7F\u7528 16 \u5B57\u7B26\u6216\u66F4\u957F\u7684\u5BC6\u7801\u3002</p><blockquote><p><code>networks</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>\u53EF\u63A5\u6536\u7684\u7F51\u7EDC\u8FDE\u63A5\u7C7B\u578B\uFF0C\u6BD4\u5982\u5F53\u6307\u5B9A\u4E3A <code>&quot;tcp&quot;</code> \u65F6\uFF0CShadowsocks \u5165\u7AD9\u4EC5\u4F1A\u63A5\u6536 TCP \u6D41\u91CF\u3002\u9ED8\u8BA4\u503C\u4E3A <code>&quot;tcp&quot;</code>\u3002</p><blockquote><p><code>packetEncoding</code>: [&quot;None&quot; | &quot;Packet&quot;]</p></blockquote><p>UDP \u5305\u7F16\u7801\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>None</code>\u3002 \u5F53\u8BE5\u503C\u4E3A <code>None</code> \u65F6\uFF0CUDP \u5C06\u6839\u636E\u76EE\u6807\u5730\u5740\u88AB\u6620\u5C04 (Address and Port-Dependent Mapping)\u3002 \u5F53\u8BE5\u503C\u4E3A <code>Packet</code> \u65F6\uFF0CUDP \u5C06\u88AB\u7AEF\u70B9\u72EC\u7ACB\u6620\u5C04 (Endpoint Independent Mapping)\uFF0C\u6B64 UDP \u884C\u4E3A\u4E5F\u88AB\u79F0\u4E3A FullCone \u6216 NAT1\u3002</p><h2 id="shadowsocks-\u51FA\u7AD9" tabindex="-1"><a class="header-anchor" href="#shadowsocks-\u51FA\u7AD9" aria-hidden="true">#</a> Shadowsocks \u51FA\u7AD9</h2><p>outbound.shadowsocks</p><blockquote><p><code>address</code>: string</p></blockquote><p>\u670D\u52A1\u5668\u5730\u5740\uFF0C\u652F\u6301 IP \u5730\u5740\u6216\u8005\u57DF\u540D\u3002</p><blockquote><p><code>port</code>: number</p></blockquote><p>\u670D\u52A1\u5668\u7AEF\u53E3\u53F7\u3002</p><blockquote><p><code>method</code> : string</p></blockquote><p>\u52A0\u5BC6\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u89C1<a href="#%E5%8A%A0%E5%AF%86%E6%96%B9%E5%BC%8F%E5%88%97%E8%A1%A8">\u52A0\u5BC6\u65B9\u5F0F\u5217\u8868</a>\u3002</p><blockquote><p><code>password</code>: string</p></blockquote><p>\u670D\u52A1\u5668\u8BA4\u53EF\u7684\u5BC6\u7801\u3002Shadowsocks \u534F\u8BAE\u4E0D\u9650\u5236\u5BC6\u7801\u957F\u5EA6\uFF0C\u4F46\u77ED\u5BC6\u7801\u4F1A\u66F4\u53EF\u80FD\u88AB\u7834\u89E3\uFF0C\u5EFA\u8BAE\u4F7F\u7528 16 \u5B57\u7B26\u6216\u66F4\u957F\u7684\u5BC6\u7801\u3002</p><h2 id="\u52A0\u5BC6\u65B9\u5F0F\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u52A0\u5BC6\u65B9\u5F0F\u5217\u8868" aria-hidden="true">#</a> \u52A0\u5BC6\u65B9\u5F0F\u5217\u8868</h2><ul><li><code>&quot;aes-256-gcm&quot;</code></li><li><code>&quot;aes-128-gcm&quot;</code></li><li><code>&quot;chacha20-poly1305&quot;</code> \u6216 <code>&quot;chacha20-ietf-poly1305&quot;</code></li><li><code>&quot;none&quot;</code> \u6216 <code>&quot;plain&quot;</code></li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>&quot;none&quot; \u4E0D\u52A0\u5BC6\u65B9\u5F0F\u4E0B\uFF0C\u670D\u52A1\u5668\u7AEF\u4E0D\u4F1A\u9A8C\u8BC1 &quot;password&quot; \u4E2D\u7684\u5BC6\u7801\u3002\u4E00\u822C\u9700\u8981\u52A0\u4E0A TLS \u5E76\u5728\u4F20\u8F93\u5C42\u4F7F\u7528\u5B89\u5168\u914D\u7F6E\uFF0C\u4F8B\u5982 WebSocket \u914D\u7F6E\u8F83\u957F\u7684 path</p></div>',23);function k(b,_){const c=d("ExternalLinkIcon");return s(),a("div",null,[u,o("p",null,[o("a",h,[i,n(c)]),l]),q])}const E=t(r,[["render",k],["__file","shadowsocks.html.vue"]]);export{E as default};