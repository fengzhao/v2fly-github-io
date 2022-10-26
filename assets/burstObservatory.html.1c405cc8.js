import{_ as e,o,c as t,e as c}from"./app.5a12ac33.js";const r={},i=c('<h1 id="burst-observatory" tabindex="-1"><a class="header-anchor" href="#burst-observatory" aria-hidden="true">#</a> Burst Observatory</h1><ul><li>Name: <code>burstObservatory</code></li><li>Type: Service</li><li>ID: <code>service.burstObservatory</code></li></ul><blockquote><p><code>subjectSelector</code>: string</p></blockquote><p>The selectors for outbound under observation</p><blockquote><p><code>pingConfig</code>: <a href="#PingConfigObject">PingConfigObject</a></p></blockquote><h3 id="pingconfigobject" tabindex="-1"><a class="header-anchor" href="#pingconfigobject" aria-hidden="true">#</a> PingConfigObject</h3><blockquote><p><code>destination</code>: string</p></blockquote><p>Ping destination URL. It should return 204 on success.</p><blockquote><p><code>connectivity</code>: string</p></blockquote><p>Connectivity check URL.</p><blockquote><p><code>interval</code>: number</p></blockquote><p>Health check interval, int64 values of time.Duration</p><blockquote><p><code>samplingCount</code>: number</p></blockquote><p>Sampling count is the amount of recent ping results which are kept for calculation</p><blockquote><p><code>timeout</code>: number</p></blockquote><p>Ping timeout, int64 values of time.Duration</p>',16),n=[i];function a(s,u){return o(),t("div",null,n)}const b=e(r,[["render",a],["__file","burstObservatory.html.vue"]]);export{b as default};