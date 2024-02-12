"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5056],{9720:(e,n)=>{n.c=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},6220:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>l,data:()=>d});var s=a(3968);const t={href:"https://github.com/Suwayomi/docker-tachidesk",target:"_blank",rel:"noopener noreferrer"},o=(0,s.QD)("p",null,"开源的漫画阅读应用，通过安装扩展插件，可以方便地订阅并聚合漫画源。使用前，需进入 Extensions，点右上角的 Enabled Languages 按钮，设置为中文源，然后会在页面底部发现中文漫画源。安装源后，进入 Souces 中点击进入对应源。",-1),c={href:"https://github.com/tachiyomiorg/tachiyomi",target:"_blank",rel:"noopener noreferrer"},i={href:"https://github.com/Haleydu/Cimoc",target:"_blank",rel:"noopener noreferrer"},r=(0,s.IL)('<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.7&quot;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">tachidesk-docker</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/suwayomi/tachidesk<span class="token punctuation">:</span>latest\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> tachidesk<span class="token punctuation">-</span>docker\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> TZ=Asia/Shanghai <span class="token comment"># Use TZ database name from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones</span>\n      <span class="token punctuation">-</span> DEBUG=false\n      <span class="token punctuation">-</span> BIND_IP=0.0.0.0\n      <span class="token punctuation">-</span> BIND_PORT=4567\n      <span class="token punctuation">-</span> SOCKS_PROXY_ENABLED=false\n      <span class="token punctuation">-</span> DOWNLOAD_AS_CBZ=true\n      <span class="token comment">#- MAX_PARALLEL_UPDATE=3</span>\n      <span class="token comment">#- BASIC_AUTH_ENABLED=true</span>\n      <span class="token comment">#- BASIC_AUTH_USERNAME=manga</span>\n      <span class="token comment">#- BASIC_AUTH_PASSWORD=hello123</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/tachidesk<span class="token punctuation">:</span>/home/suwayomi/.local/share/Tachidesk\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;4567:4567&quot;</span>\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> on<span class="token punctuation">-</span>failure<span class="token punctuation">:</span><span class="token number">3</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以将本地的漫画资源导入到路径 <code>/volume1/docker/tachidesk/local</code>。请注意，导入的漫画需要按文件夹分类，并确保图片按文件名排序。</p><p>点击左侧的 <code>Extensions</code> 按钮，点右上角的 <code>Enabled Languages</code> 选项，将其设置为中文源，然后会在页面底部发现中文漫画源。安装好漫画源扩展后，点击左侧的 <code>Sources</code> 按钮，然后选择不同来源的 <code>BROWSE</code>，即可浏览对应源的在线漫画。在线漫画会下载到 <code>/volume1/docker/tachidesk/downloads</code> 目录。安装各类在线漫画源扩展，以便进行在线搜索、阅读和下载漫画。</p>',3),p={},l=(0,a(9720).c)(p,[["render",function(e,n){const a=(0,s.E1)("ExternalLinkIcon");return(0,s.Wz)(),(0,s.An)("div",null,[(0,s.QD)("p",null,[(0,s.QD)("a",t,[(0,s.mY)("Tachidesk"),(0,s.K2)(a)]),(0,s.mY)(" 是一个免费的开源漫画阅读器，支持在各种客户端上部署，可以方便地订阅并聚合漫画源。为了实现统一的漫画阅读体验和浏览管理，建议将 Tachidesk-Server 部署在 NAS 上，并通过网页端访问以进行漫画阅读，以获得类似应用的操作习惯。")]),o,(0,s.QD)("p",null,[(0,s.mY)("如果你仅使用 Android 设备，可以选择使用开源漫画阅读器 "),(0,s.QD)("a",c,[(0,s.mY)("Tachiyomi"),(0,s.K2)(a)]),(0,s.mY)("。如果你需要访问一些老旧漫画作品，还可以考虑使用 "),(0,s.QD)("a",i,[(0,s.mY)("Cimoc"),(0,s.K2)(a)]),(0,s.mY)("。")]),r])}]]),d=JSON.parse('{"path":"/services/dockers-on-nas/tachidesk.html","title":"Tachidesk：漫画聚合阅读器","lang":"zh-CN","frontmatter":{"article":false,"title":"Tachidesk：漫画聚合阅读器","order":12,"description":"Tachidesk 是一个免费的开源漫画阅读器，支持在各种客户端上部署，可以方便地订阅并聚合漫画源。为了实现统一的漫画阅读体验和浏览管理，建议将 Tachidesk-Server 部署在 NAS 上，并通过网页端访问以进行漫画阅读，以获得类似应用的操作习惯。 开源的漫画阅读应用，通过安装扩展插件，可以方便地订阅并聚合漫画源。使用前，需进入 Extens...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/tachidesk.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Tachidesk：漫画聚合阅读器"}],["meta",{"property":"og:description","content":"Tachidesk 是一个免费的开源漫画阅读器，支持在各种客户端上部署，可以方便地订阅并聚合漫画源。为了实现统一的漫画阅读体验和浏览管理，建议将 Tachidesk-Server 部署在 NAS 上，并通过网页端访问以进行漫画阅读，以获得类似应用的操作习惯。 开源的漫画阅读应用，通过安装扩展插件，可以方便地订阅并聚合漫画源。使用前，需进入 Extens..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-12T06:12:53.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-12T06:12:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Tachidesk：漫画聚合阅读器\\",\\"description\\":\\"Tachidesk 是一个免费的开源漫画阅读器，支持在各种客户端上部署，可以方便地订阅并聚合漫画源。为了实现统一的漫画阅读体验和浏览管理，建议将 Tachidesk-Server 部署在 NAS 上，并通过网页端访问以进行漫画阅读，以获得类似应用的操作习惯。 开源的漫画阅读应用，通过安装扩展插件，可以方便地订阅并聚合漫画源。使用前，需进入 Extens...\\"}"]]},"headers":[],"git":{"createdTime":1707718373000,"updatedTime":1707718373000,"contributors":[{"name":"Wakerrd","email":"53556416+Wakerrd@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.5,"words":451},"filePathRelative":"services/dockers-on-nas/tachidesk.md","localizedDate":"2024年2月12日","excerpt":"<p><a href=\\"https://github.com/Suwayomi/docker-tachidesk\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Tachidesk</a> 是一个免费的开源漫画阅读器，支持在各种客户端上部署，可以方便地订阅并聚合漫画源。为了实现统一的漫画阅读体验和浏览管理，建议将 Tachidesk-Server 部署在 NAS 上，并通过网页端访问以进行漫画阅读，以获得类似应用的操作习惯。</p>\\n<p>开源的漫画阅读应用，通过安装扩展插件，可以方便地订阅并聚合漫画源。使用前，需进入 Extensions，点右上角的 Enabled Languages 按钮，设置为中文源，然后会在页面底部发现中文漫画源。安装源后，进入 Souces 中点击进入对应源。</p>","autoDesc":true}')}}]);