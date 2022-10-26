import{_ as r,r as s,o as l,c as o,a as t,b as n,e as i,d as e}from"./app.5a12ac33.js";const d={},h=i('<h1 id="vmess-protocol" tabindex="-1"><a class="header-anchor" href="#vmess-protocol" aria-hidden="true">#</a> VMess protocol</h1><p>VMess is the original encrypted communication protocol of V2Ray.</p><h2 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h2><p>The current version number is 1.</p><h2 id="rely" tabindex="-1"><a class="header-anchor" href="#rely" aria-hidden="true">#</a> rely</h2><h3 id="underlying-protocol" tabindex="-1"><a class="header-anchor" href="#underlying-protocol" aria-hidden="true">#</a> Underlying protocol</h3><p>VMess is a TCP-based protocol, and all data is transmitted using TCP.</p><h3 id="user-id" tabindex="-1"><a class="header-anchor" href="#user-id" aria-hidden="true">#</a> User ID</h3>',8),c=e("ID is equivalent to "),u={href:"https://en.wikipedia.org/wiki/Universally_unique_identifier",target:"_blank",rel:"noopener noreferrer"},y=e("UUID"),p=e(", which is a 16-byte random number, and its function is equivalent to a token. An ID has the form: de305d54-75b4-431b-adb2-eb6b9e546014, almost completely random, and can be generated by any UUID generator, such as "),m={href:"https://www.uuidgenerator.net/",target:"_blank",rel:"noopener noreferrer"},b=e("this"),f=e("."),g=t("p",null,"The user ID can be specified in [Configuration File] (../config/overview.md).",-1),x=t("h3",{id:"function",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#function","aria-hidden":"true"},"#"),e(" function")],-1),_=e("MD5: "),v={href:"https://en.wikipedia.org/wiki/MD5",target:"_blank",rel:"noopener noreferrer"},k=e("MD5 function"),M=t("ul",null,[t("li",null,"The input parameter is a byte array of any length"),t("li",null,"Output as a 16 byte array")],-1),T=e("HMAC: "),C={href:"https://en.wikipedia.org/wiki/Hash-based_message_authentication_code",target:"_blank",rel:"noopener noreferrer"},w=e("HMAC function"),V=t("ul",null,[t("li",null,[e("The input parameters are: "),t("ul",null,[t("li",null,"H: Hash function"),t("li",null,"K: key, byte array of any length"),t("li",null,"M: message, byte array of any length")])])],-1),I=e("Shake: "),D={href:"https://en.wikipedia.org/wiki/SHA-3",target:"_blank",rel:"noopener noreferrer"},A=e("SHA3-Shake128 function"),P=t("ul",null,[t("li",null,"The input parameter is a string of any length"),t("li",null,"Output as a string of arbitrary length")],-1),S=i('<h2 id="communication-process" tabindex="-1"><a class="header-anchor" href="#communication-process" aria-hidden="true">#</a> Communication process</h2><p>VMess is a stateless protocol, that is, the client and the server can directly transmit data without a handshake, and each data transmission has no effect on other data transmissions before and after. The VMess client initiates a request, and the server determines whether the request comes from a legitimate client. If the verification is passed, the request is forwarded, and the obtained response is sent back to the client. VMess uses an asymmetric format, that is, the request sent by the client and the response from the server use different formats.</p><h2 id="client-request" tabindex="-1"><a class="header-anchor" href="#client-request" aria-hidden="true">#</a> Client request</h2><table><thead><tr><th>16 bytes</th><th>X bytes</th><th>The rest</th></tr></thead><tbody><tr><td>Certification Information</td><td>Instruction part</td><td>Data part</td></tr></tbody></table><h3 id="certification-information" tabindex="-1"><a class="header-anchor" href="#certification-information" aria-hidden="true">#</a> Certification Information</h3><p>The authentication information is a 16-byte hash value, which is calculated as follows:</p><ul><li>H = MD5</li><li>K = User ID (16 bytes)</li><li>M = UTC time, accurate to the second, the value is a random value of 30 seconds before and after the current time (8 bytes, Big Endian)</li><li>Hash = HMAC(H, K, M)</li></ul><h3 id="instruction-part" tabindex="-1"><a class="header-anchor" href="#instruction-part" aria-hidden="true">#</a> Instruction part</h3><p>The instruction part is encrypted by AES-128-CFB:</p><ul><li>Key: MD5(User ID + []byte(&#39;c48619fe-8f02-49e0-b9e9-edf763e17e21&#39;))</li><li>IV: MD5(X + X + X + X), X = []byte (the time when the authentication information is generated) (8 bytes, Big Endian)</li></ul><table><thead><tr><th style="text-align:center;">1 byte</th><th style="text-align:center;">16 bytes</th><th style="text-align:center;">16 bytes</th><th style="text-align:center;">1 byte</th><th style="text-align:center;">1 byte</th><th style="text-align:center;">4 bit</th><th style="text-align:center;">4 bit</th><th style="text-align:center;">1 byte</th><th style="text-align:center;">1 byte</th><th style="text-align:center;">2 bytes</th><th style="text-align:center;">1 byte</th><th style="text-align:center;">N bytes</th><th style="text-align:center;">P byte</th><th style="text-align:center;">4 bytes</th></tr></thead><tbody><tr><td style="text-align:center;">Version number Ver</td><td style="text-align:center;">Data encryption IV</td><td style="text-align:center;">Data encryption Key</td><td style="text-align:center;">Response authentication V</td><td style="text-align:center;">Option Opt</td><td style="text-align:center;">Margin P</td><td style="text-align:center;">Encryption method Sec</td><td style="text-align:center;">Keep</td><td style="text-align:center;">Command Cmd</td><td style="text-align:center;">Port Port</td><td style="text-align:center;">Address type T</td><td style="text-align:center;">Address A</td><td style="text-align:center;">Random value</td><td style="text-align:center;">Check F</td></tr></tbody></table><p>Option Opt details: (when a bit is 1, it means that the option is enabled)</p><table><thead><tr><th style="text-align:center;">0</th><th style="text-align:center;">1</th><th style="text-align:center;">2</th><th style="text-align:center;">3</th><th style="text-align:center;">4</th><th style="text-align:center;">5</th><th style="text-align:center;">6</th><th style="text-align:center;">7</th></tr></thead><tbody><tr><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">M</td><td style="text-align:center;">R</td><td style="text-align:center;">S</td></tr></tbody></table><p>among them:</p><ul><li>Version number Ver: always 1;</li><li>Data encryption IV: random value;</li><li>Data encryption Key: random value;</li><li>Response authentication V: random value;</li><li>Option Opt: <ul><li>S (0x01): standard format data stream (recommended to open);</li><li>R (0x02): The client expects to reuse TCP connections (V2Ray 2.23+ deprecated); <ul><li>This item is valid only when S is turned on;</li></ul></li><li>M (0x04): Turn on metadata obfuscation (recommended); <ul><li>This item is valid only when S is turned on;</li><li>When the item is turned on, the client and the server need to construct two Shake instances respectively, namely RequestMask = Shake (request data IV) and ResponseMask = Shake (response data IV).</li></ul></li><li>X: reserved</li></ul></li><li>Margin P: add the random value of P bytes before the check value;</li><li>Encryption method: Specify the encryption method of the data part, the optional values are: <ul><li>0x00: AES-128-CFB;</li><li>0x01: No encryption;</li><li>0x02: AES-128-GCM;</li><li>0x03: ChaCha20-Poly1305;</li></ul></li><li>Command Cmd: <ul><li>0x01: TCP data;</li><li>0x02: UDP data;</li></ul></li><li>Port Port: integer port number in Big Endian format;</li><li>Address type T: <ul><li>0x01: IPv4</li><li>0x02: domain name</li><li>0x03: IPv6</li></ul></li><li>Address A: <ul><li>When T = 0x01, A is a 4-byte IPv4 address;</li><li>When T = 0x02, A is 1 byte length (L) + L byte domain name;</li><li>When T = 0x03, A is a 16-byte IPv6 address;</li></ul></li><li>Check F: FNV1a hash of all the contents except F in the instruction part;</li></ul><h3 id="data-part" tabindex="-1"><a class="header-anchor" href="#data-part" aria-hidden="true">#</a> Data part</h3><p>The data part has two formats, the default is the basic format.</p><h4 id="basic-format-deprecated" tabindex="-1"><a class="header-anchor" href="#basic-format-deprecated" aria-hidden="true">#</a> Basic format (deprecated)</h4><p>**This format is only for backward compatibility and may be deleted in future versions. **</p><p>All data is considered the actual content of the request. These contents will be sent to the address specified in the instruction section. When Cmd = 0x01, these data will be sent in the form of TCP; when Cmd = 0x02, these data will be sent in the form of UDP.</p><p>This format supports two encryption methods: &quot;No encryption&quot; and &quot;AES-128-CFB&quot;. The encrypted Key and IV are specified by the command part.</p><h4 id="standard-format" tabindex="-1"><a class="header-anchor" href="#standard-format" aria-hidden="true">#</a> standard format</h4><p>When Opt(S) is turned on, the data part uses this format. The actual request data is divided into several small blocks, and the format of each small block is as follows. After the server has verified all the small blocks, it is forwarded in the basic format.</p><table><thead><tr><th style="text-align:center;">2 bytes</th><th style="text-align:center;">L byte</th></tr></thead><tbody><tr><td style="text-align:center;">Length L</td><td style="text-align:center;">data pack</td></tr></tbody></table><p>among them:</p><ul><li>Length L: An integer in Big Endian format, the maximum value is 2^14; <ul><li>When Opt(M) is turned on, the value of L = the true value xor Mask. Mask = (RequestMask.NextByte() &lt;&lt; 8) + RequestMask.NextByte();</li></ul></li><li>Data packet: the data packet encrypted by the specified encryption method;</li></ul><p>Before the transmission ends, there must be actual data in the data packet, that is, data other than the length and authentication data. When the transmission is over, the client must send an empty data packet, that is, L = 0 (no encryption) or authentication data length (with encryption) to indicate the end of the transmission.</p><p>According to different encryption methods, the format of the data packet is as follows:</p><ul><li>No encryption: <ul><li>L byte: actual data;</li></ul></li><li>AES-128-CFB: The entire data part is encrypted using AES-128-CFB <ul><li>4 bytes: FNV1a hash of actual data;</li><li>L-4 bytes: actual data;</li></ul></li><li>AES-128-GCM: Key is the Key of the command part, IV = count (2 bytes) + IV (10 bytes). The count starts from 0 and increments by 1 for each data packet; IV is the 3rd to 12th bytes of the instruction part IV. <ul><li>L-16 bytes: actual data;</li><li>16 bytes: GCM certification information</li></ul></li><li>ChaCha20-Poly1305: Key = MD5 (instruction part Key) + MD5 (MD5 (instruction part Key)), IV = count (2 bytes) + IV (10 bytes). The count starts from 0 and increments by 1 for each data packet; IV is the 3rd to 12th bytes of the instruction part IV. <ul><li>L-16 bytes: actual data;</li><li>16 bytes: Poly1305 authentication information</li></ul></li></ul><h2 id="server-response" tabindex="-1"><a class="header-anchor" href="#server-response" aria-hidden="true">#</a> Server response</h2><p>The response header data is encrypted using AES-128-CFB, the IV is MD5 (Data Encryption IV), and the Key is MD5 (Data Encryption Key). The actual response data varies depending on the encryption settings.</p><table><thead><tr><th>1 byte</th><th>1 byte</th><th>1 byte</th><th>1 byte</th><th>M bytes</th><th>The rest</th></tr></thead><tbody><tr><td>Response authentication V</td><td>Option Opt</td><td>Command Cmd</td><td>Command length M</td><td>Instruction content</td><td>Actual response data</td></tr></tbody></table><p>among them:</p><ul><li>Response authentication V: must be consistent with the response authentication V in the client request;</li><li>Option Opt: <ul><li>0x01: The server is ready to reuse TCP connection (V2Ray 2.23+ is deprecated);</li></ul></li><li>Command Cmd: <ul><li>0x01: dynamic port instruction</li></ul></li><li>Actual response data: <ul><li>If Opt(S) in the request is enabled, the standard format is used, otherwise the basic format is used.</li><li>The format is the same as the request data. <ul><li>When Opt(M) is turned on, the value of length L = the true value xor Mask. Mask = (ResponseMask.NextByte() &lt;&lt; 8) + ResponseMask.NextByte();</li></ul></li></ul></li></ul><h3 id="dynamic-port-instructions" tabindex="-1"><a class="header-anchor" href="#dynamic-port-instructions" aria-hidden="true">#</a> Dynamic port instructions</h3><table><thead><tr><th>1 byte</th><th>2 bytes</th><th>16 bytes</th><th>2 bytes</th><th>1 byte</th><th>1 byte</th></tr></thead><tbody><tr><td>Keep</td><td>Port Port</td><td>User ID</td><td>AlterID</td><td>user level</td><td>Effective time T</td></tr></tbody></table><p>among them:</p><ul><li>Port Port: integer port number in Big Endian format;</li><li>Effective time T: minutes;</li></ul><p>When the client receives the dynamic port instruction, the server has opened a new port for communication, and the client can send data to the new port. After T minutes, this port will become invalid and the client must re-use the main port for communication.</p><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h2><ul><li>To ensure forward compatibility, the value of all reserved fields must be 0.</li></ul>',41);function q(E,B){const a=s("ExternalLinkIcon");return l(),o("div",null,[h,t("p",null,[c,t("a",u,[y,n(a)]),p,t("a",m,[b,n(a)]),f]),g,x,t("ul",null,[t("li",null,[_,t("a",v,[k,n(a)]),M]),t("li",null,[T,t("a",C,[w,n(a)]),V]),t("li",null,[I,t("a",D,[A,n(a)]),P])]),S])}const L=r(d,[["render",q],["__file","vmess.html.vue"]]);export{L as default};
