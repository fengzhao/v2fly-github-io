import{_ as r,r as a,o as c,c as d,a as o,b as t,w as s,d as e,e as l}from"./app.5a12ac33.js";const p={},u=o("h1",{id:"remote-control-api",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#remote-control-api","aria-hidden":"true"},"#"),e(" Remote control API")],-1),h=e("Some V2Ray APIs can be opened for remote control. These APIs are based on "),_={href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"},b=e("gRPC"),v=e(". This API is mostly for advanced users."),f=e("When remote control is turned on, V2Ray will build an outbound proxy by itself, which is identified by the value of the "),g=o("code",null,"tag",-1),m=e(" configuration. The user must manually point all inbound gRPC connections to this outbound proxy through "),x=e("routing"),k=e("."),y=l(`<h2 id="apiobject" tabindex="-1"><a class="header-anchor" href="#apiobject" aria-hidden="true">#</a> ApiObject</h2><p><code>ApiObject</code> corresponds to the <code>api</code> item of the configuration file.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;services&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;HandlerService&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;LoggerService&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;StatsService&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>Outbound proxy ID.</p><blockquote><p><code>services</code>: [string]</p></blockquote><p>The list of available APIs, see <a href="#Supported-api-list">API list</a> for details.</p><h2 id="list-of-supported-apis" tabindex="-1"><a class="header-anchor" href="#list-of-supported-apis" aria-hidden="true">#</a> List of supported APIs</h2><h3 id="handlerservice" tabindex="-1"><a class="header-anchor" href="#handlerservice" aria-hidden="true">#</a> HandlerService</h3><p>Some of the APIs that modify the inbound and outbound proxy:</p><ul><li>Add a new inbound proxy;</li><li>Add a new outbound proxy;</li><li>Delete an existing inbound proxy;</li><li>Delete an existing outbound proxy;</li><li>Add a user to an inbound proxy (only support VMess, VLESS, Trojan);</li><li>Delete a user in an inbound proxy (only support VMess, VLESS, Trojan);</li></ul><h3 id="loggerservice" tabindex="-1"><a class="header-anchor" href="#loggerservice" aria-hidden="true">#</a> LoggerService</h3><p>Supports the restart of the built-in Logger, and can cooperate with logrotate to perform some operations on the log file.</p><h3 id="statsservice" tabindex="-1"><a class="header-anchor" href="#statsservice" aria-hidden="true">#</a> StatsService</h3>`,14),S=e("The built-in data statistics service, please refer to "),q=e("Statistics"),A=e(" for details."),I=o("h3",{id:"observatoryservice",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#observatoryservice","aria-hidden":"true"},"#"),e(" ObservatoryService")],-1),P=e("Connection Observatory"),L=e(" API (v4.38.0+).");function V(j,T){const i=a("ExternalLinkIcon"),n=a("RouterLink");return c(),d("div",null,[u,o("p",null,[h,o("a",_,[b,t(i)]),v]),o("p",null,[f,g,m,t(n,{to:"/en_US/config/routing.html"},{default:s(()=>[x]),_:1}),k]),y,o("p",null,[S,t(n,{to:"/en_US/config/stats.html"},{default:s(()=>[q]),_:1}),A]),I,o("p",null,[t(n,{to:"/en_US/config/observatory.html"},{default:s(()=>[P]),_:1}),L])])}const R=r(p,[["render",V],["__file","api.html.vue"]]);export{R as default};
