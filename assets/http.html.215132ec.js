import{_ as n,o as e,c as s,e as o}from"./app.5a12ac33.js";const t={},a=o(`<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h1><ul><li>Name: <code>http</code></li><li>Type: Inbound/Outbound</li></ul><p>The HTTP configuration is divided into two parts, <code>InboundConfigurationObject</code> and <code>OutboundConfigurationObject</code>, which correspond to the <code>settings</code> items in the inbound and outbound protocol configuration respectively.</p><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>It should be noted that although <code>http inbound</code> can provide public services, the http protocol does not encrypt the transmission and is not suitable for transmission over the public network. It is more likely to be a broiler for attacks. A more meaningful usage of <code>http inbound</code> is to monitor in a local area network or local environment to provide local services for other programs.</p></div><blockquote><p><code>timeout</code>: number</p></blockquote><p>The timeout setting (seconds) for reading data from the client, 0 means unlimited time. The default value is 300. After V2Ray 3.1, it is equivalent to the <code>connIdle</code> strategy corresponding to the user level.</p><blockquote><p><code>accounts</code>: [<a href="#accountobject">AccountObject</a>]</p></blockquote><p>An array, each element in the array is a user account. The default value is empty.</p><p>When <code>accounts</code> is not empty, the HTTP proxy will perform HTTP Basic Authentication for inbound connections.</p><blockquote><p><code>allowTransparent</code>: true | false</p></blockquote><p>When <code>true</code>, all HTTP requests will be forwarded, not just proxy requests. If not configured properly, turning on this option will cause an endless loop.</p><blockquote><p><code>userLevel</code>: number</p></blockquote><p>User level, all connections use this level.</p><h3 id="accountobject" tabindex="-1"><a class="header-anchor" href="#accountobject" aria-hidden="true">#</a> AccountObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>user</code>: string</p></blockquote><p>User name, string type. Required.</p><blockquote><p><code>pass</code>: string</p></blockquote><p>Password, string type. Required.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Use the following environment variables in Linux to use the global HTTP proxy in the current session (many software supports this setting, and some do not).</p><ul><li><code>export http_proxy=http://127.0.0.1:8080/</code> (The address must be changed to the HTTP inbound proxy address you configured)</li><li><code>export https_proxy=$http_proxy</code></li></ul></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(V2Ray 4.21.0+)</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>It should be noted that although <code>http outbound</code> can be used as a configuration for external access, the <code>http proxy</code> protocol does not encrypt the transmission, which is not suitable for transmission over the public network, and because it does not support UDP transmission, the core functions will be limited (Routing&#39;s DNS queries may not be available). The more meaningful usage of <code>http outbound</code> is that under special circumstances, you can only use <code>http proxy</code> to access the internal network externally, as a pre-proxy for connecting to proxy servers for other protocols (see <code>ProxySettingsObject</code> of <code>OutboundObject</code>) . In addition, because <code>http proxy</code> can only proxy the TCP protocol, none of the UDP protocols can pass.</p></div><p>(V2Ray 4.21.1+)</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>In version 4.20.0, http outbound was introduced as the pre-proxy usage of other protocols, and it lacked support for TLS configuration. In the 4.21.1 patch version, the <code>security</code> and <code>tlsSettings</code> in <code>streamSettings</code> remain effective. In the current usage of front proxy, three protocol methods such as vmess/tcp, vmess/tcp-tls and shadowsocks can be used. The usage of front proxy for other transmission protocols needs to be developed and supported in subsequent versions.</p></div><blockquote><p><code>servers</code>: array</p></blockquote><p>HTTP proxy server configuration, if you configure more than one, use (RoundRobin) circularly.</p><blockquote><p><code>address</code>: string</p></blockquote><p>HTTP proxy server address, required.</p><blockquote><p><code>port</code>: int</p></blockquote><p>HTTP proxy server port, required.</p><blockquote><p><code>user</code>: [<a href="#accountobject">AccountObject</a>]</p></blockquote><p>An array, each element in the array is a user account. The default value is empty.</p>`,36),c=[a];function p(r,i){return e(),s("div",null,c)}const l=n(t,[["render",p],["__file","http.html.vue"]]);export{l as default};