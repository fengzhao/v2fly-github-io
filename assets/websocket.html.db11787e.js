import{_ as e,o,c as a,e as t}from"./app.5a12ac33.js";const r={},c=t('<h1 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h1><h2 id="websocket-stream" tabindex="-1"><a class="header-anchor" href="#websocket-stream" aria-hidden="true">#</a> WebSocket Stream</h2><ul><li>Name: <code>ws</code></li><li>Type: Transport Protocol</li><li>ID: <code>stream.ws</code></li></ul><blockquote><p><code>path</code>: string</p></blockquote><p>The HTTP path for the websocket request. Empty value means root(/).</p><blockquote><p><code>maxEarlyData</code>: number</p></blockquote><p>The max number of bytes of early data.</p><blockquote><p><code>useBrowserForwarding</code>: true | false</p></blockquote><p>Whether to enable browser forwarder.</p><blockquote><p><code>earlyDataHeaderName</code>: string</p></blockquote><p>The header name for WebSocket Early Data. If not set, the early data will be send through path.</p><blockquote><p>&#39;header&#39;: [ <a href="#Header">Header</a> ]</p></blockquote><p>The header to be sent in HTTP request.</p><h2 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h2><blockquote><p>&#39;key&#39; : string</p></blockquote><p>The HTTP header key.</p><blockquote><p>&#39;value&#39; : string</p></blockquote><p>The HTTP header value.</p>',18),d=[c];function s(l,h){return o(),a("div",null,d)}const n=e(r,[["render",s],["__file","websocket.html.vue"]]);export{n as default};