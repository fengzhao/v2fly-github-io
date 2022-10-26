import{_ as e,o as t,c as o,e as c}from"./app.5a12ac33.js";const a={},d=c('<h1 id="kcp-mkcp" tabindex="-1"><a class="header-anchor" href="#kcp-mkcp" aria-hidden="true">#</a> KCP(mKCP)</h1><p>mKCP constructs a TCP like stream tunnel based on a UDP connection. Please make sure firewall rules have been set up correctly. mKCP consumes additional traffic to transfer data with less delay and may consume for traffic than TCP based transport.</p><h2 id="mkcp-stream-transport" tabindex="-1"><a class="header-anchor" href="#mkcp-stream-transport" aria-hidden="true">#</a> mKCP Stream Transport</h2><ul><li>Name: <code>kcp</code></li><li>Type: Transport Protocol</li><li>ID: <code>stream.kcp</code></li></ul><blockquote><p><code>seed</code>: string</p></blockquote><p>The encryption seed for traffic obfuscator. Need to be the same on both sides.</p><blockquote><p><code>mtu</code>: number</p></blockquote><p>Maximum transmission unit. This value is typically between <code>576</code> - <code>1460</code>. It is <code>1350</code> by default.</p><blockquote><p><code>tti</code>: number</p></blockquote><p>Transmission time interval in a millisecond. mKCP will send data at this frequency. Please choose a value between <code>10</code> - <code>100</code>. It is <code>50</code> by default.</p><blockquote><p><code>uplinkCapacity</code>: number</p></blockquote><p>Upload bandwidth capacity. The maximum speed to send data in MB/s. It is <code>5</code> by default. Beware it is Byte, not Bit. You can set it to <code>0</code> for very low bandwidth.</p><blockquote><p><code>downlinkCapacity</code>: number</p></blockquote><p>Download bandwidth capacity. The maximum speed to receive data in MB/s. It is <code>20</code> by default. Beware it is Byte, not Bit. You can set it to <code>0</code> for very low bandwidth.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>uplinkCapacity</code> and <code>downlinkCapacity</code> decide the transfer speed of mKCP. In the client uplink&#39;s case, the client&#39;s <code>uplinkCapacity</code> determines the speed packets are sent, and the server side&#39;s <code>downlinkCapacity</code> determines the speed server receives the traffic. and the lower one will be the effective one. It is recommended to set <code>downlinkCapacity</code> to a relatively large value, like 100, and set <code>uplinkCapacity</code> to the actual network speed. If the speed is insufficient, one may increase the value of <code>uplinkCapacity</code> , until 2 times the actual bandwidth.</p></div><blockquote><p><code>congestion</code>: true | false</p></blockquote><p>Whether congestion control is enabled. It is <code>false</code> by default. This will instruct V2Ray to decrease transfer speed if there is too much packet loss.</p><blockquote><p><code>readBufferSize</code>: number</p></blockquote><p>The read buffer size of a single connection, in MB. It is <code>2</code> by default.</p><blockquote><p><code>writeBufferSize</code>: number</p></blockquote><p>The write buffer size of a single connection, in MB. It is <code>2</code> by default.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>readBufferSize</code> and <code>writeBufferSize</code> determine the memory usage of a connection. If transfer speed is the priority, one may set a higher <code>readBufferSize</code> and <code>writeBufferSize</code>, to increase transfer speed at the cost of higher memory usage. If the network speed is less than 20 MB/s, the default value should sufficient. Otherwise, increase <code>readBufferSize</code> and <code>writeBufferSize</code>&#39;s and balance the memory usage and transfer speed manually.</p></div>',22),i=[d];function s(n,r){return t(),o("div",null,i)}const p=e(a,[["render",s],["__file","kcp.html.vue"]]);export{p as default};
