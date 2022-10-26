import{_ as e,o,c as s,e as t}from"./app.5a12ac33.js";const n={},d=t('<h1 id="vless" tabindex="-1"><a class="header-anchor" href="#vless" aria-hidden="true">#</a> VLESS</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>VLESS is designed to operate in correctly configured TLS connections, as it does not provide encryption on its own.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>VLESS is deprecated and subject to removal.</p><p>Please consider using the Trojan protocol as a replacement for new deployments.</p></div><h2 id="vless-inbound" tabindex="-1"><a class="header-anchor" href="#vless-inbound" aria-hidden="true">#</a> VLESS Inbound</h2><ul><li>Name: <code>vless</code></li><li>Type: Inbound Protocol</li><li>ID: <code>inbound.vless</code></li></ul><blockquote><p><code>users</code> : [string]</p></blockquote><p>A set of recognized uuid for this inbound.</p><h2 id="vless-outbound" tabindex="-1"><a class="header-anchor" href="#vless-outbound" aria-hidden="true">#</a> VLESS Outbound</h2><ul><li>Name: <code>vless</code></li><li>Type: Outbound Protocol</li><li>ID: <code>outbound.vless</code></li></ul><blockquote><p><code>address</code>: string</p></blockquote><p>The server address. Both IP and domain name is supported.</p><blockquote><p><code>port</code>: number</p></blockquote><p>The server port number.</p><blockquote><p><code>uuid</code>: string</p></blockquote><p>A password recognized by server.</p>',15),c=[d];function i(r,a){return o(),s("div",null,c)}const u=e(n,[["render",i],["__file","vless.html.vue"]]);export{u as default};
