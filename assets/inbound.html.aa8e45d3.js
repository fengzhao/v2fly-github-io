import{_ as l,r as c,o as i,c as p,a as o,b as s,w as e,e as a,d as n}from"./app.5a12ac33.js";const u={},d=a(`<h1 id="inbounds" tabindex="-1"><a class="header-anchor" href="#inbounds" aria-hidden="true">#</a> Inbounds</h1><p>inbound</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span><span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sniffing&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>protocol</code>: name of <code>&lt;inbound&gt;</code></p></blockquote>`,4),r=n("The name of the inbound "),_=n("proxy"),h=n(" protocol."),f=o("blockquote",null,[o("p",null,[o("code",null,"settings"),n(": settings of "),o("code",null,"<inbound>")])],-1),b=n("The settings for the inbound "),k=n("proxy"),g=n(" protocol."),m=a('<blockquote><p><code>port</code>: string</p></blockquote><p>The listening port for the inbound.</p><p>It can be <code>&quot;443&quot;</code> or <code>&quot;20-21&quot;</code> or <code>&quot;22,3389&quot;</code> .</p><blockquote><p><code>listen</code>: string</p></blockquote><p>The listening IP address for the inbound.</p><blockquote><p><code>tag</code>: string</p></blockquote><p>The Tag of the inbound. This is used as an identifier for outbounds.</p><blockquote><p><code>sniffing</code>: <a href="#SniffingObject">SniffingObject</a></p></blockquote><p>The sniffing settings for the inbound. It allows the connection to be routed based on its content and metadata.</p>',9),q=o("code",null,"streamSettings",-1),v=n(": "),x=n("StreamObject"),S=o("p",null,"The stream settings for the inbound. This determine how the protocol data is transferred.",-1),y=o("h2",{id:"supported-proxy-protocol",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#supported-proxy-protocol","aria-hidden":"true"},"#"),n(" Supported Proxy Protocol")],-1),T=n("SOCKS"),j=n("VMess"),U=n("VLite"),O=n("Shadowsocks"),V=n("HTTP"),w=n("Dokodemo"),I=n("Trojan"),L=n("VLESS"),N=o("h2",{id:"sniffingobject",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#sniffingobject","aria-hidden":"true"},"#"),n(" SniffingObject")],-1),P=o("blockquote",null,[o("p",null,[o("code",null,"enabled"),n(": true | false")])],-1),B=o("blockquote",null,[o("p",null,[o("code",null,"destOverride"),n(": [ string ]")])],-1),C=o("blockquote",null,[o("p",null,[o("code",null,"metadataOnly"),n(": true | false")])],-1);function E(R,D){const t=c("RouterLink");return i(),p("div",null,[d,o("p",null,[r,s(t,{to:"/en_US/v5/config/proxy.html"},{default:e(()=>[_]),_:1}),h]),f,o("p",null,[b,s(t,{to:"/en_US/v5/config/proxy.html"},{default:e(()=>[k]),_:1}),g]),m,o("blockquote",null,[o("p",null,[q,v,s(t,{to:"/en_US/v5/config/stream.html"},{default:e(()=>[x]),_:1})])]),S,y,o("ul",null,[o("li",null,[s(t,{to:"/en_US/v5/config/proxy/socks.html"},{default:e(()=>[T]),_:1})]),o("li",null,[s(t,{to:"/en_US/v5/config/proxy/vmess.html"},{default:e(()=>[j]),_:1})]),o("li",null,[s(t,{to:"/en_US/v5/config/proxy/vlite.html"},{default:e(()=>[U]),_:1})]),o("li",null,[s(t,{to:"/en_US/v5/config/proxy/shadowsocks.html"},{default:e(()=>[O]),_:1})]),o("li",null,[s(t,{to:"/en_US/v5/config/proxy/http.html"},{default:e(()=>[V]),_:1})]),o("li",null,[s(t,{to:"/en_US/v5/config/proxy/dokodemo.html"},{default:e(()=>[w]),_:1})]),o("li",null,[s(t,{to:"/en_US/v5/config/proxy/trojan.html"},{default:e(()=>[I]),_:1})]),o("li",null,[s(t,{to:"/en_US/v5/config/proxy/vless.html"},{default:e(()=>[L]),_:1})])]),N,P,B,C])}const K=l(u,[["render",E],["__file","inbound.html.vue"]]);export{K as default};