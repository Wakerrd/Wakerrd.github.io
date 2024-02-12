"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5032],{9720:(n,a)=>{a.c=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}},7880:(n,a,s)=>{s.r(a),s.d(a,{comp:()=>o,data:()=>r});var t=s(3968);const e={href:"https://github.com/ossrs/srs-stack",target:"_blank",rel:"noopener noreferrer"},c=(0,t.IL)('<p>在我的日常工作和学习中，我通常会开启直播，但如果推送多路流，会对上传带宽造成较大压力。通过使用 SRS Stack，这个问题得到了解决。</p><p>目前，我将电脑上的 OBS 推流到 NAS 上的 SRS Stack，然后在 NAS 上进行多平台统一转播。这样一来，我能够节省上行带宽，同时避免客户端推送多路流。然而，需要注意的是，SRS Stack 目前仅支持最多同时进行三个平台的转播。如果你需要更多平台，可以运行多个实例。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">srs-stack</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/ossrs/srs<span class="token punctuation">-</span>stack<span class="token punctuation">:</span><span class="token number">5</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> srs<span class="token punctuation">-</span>stack\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/srs<span class="token punctuation">-</span>stack/data<span class="token punctuation">:</span>/data\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 23322<span class="token punctuation">:</span><span class="token number">2022</span>\n      <span class="token punctuation">-</span> 23323<span class="token punctuation">:</span><span class="token number">2443</span>\n      <span class="token punctuation">-</span> 1935<span class="token punctuation">:</span><span class="token number">1935</span>\n      <span class="token punctuation">-</span> 8000<span class="token punctuation">:</span>8000/udp\n      <span class="token punctuation">-</span> 10080<span class="token punctuation">:</span>10080/udp\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),p={},o=(0,s(9720).c)(p,[["render",function(n,a){const s=(0,t.E1)("ExternalLinkIcon");return(0,t.Wz)(),(0,t.An)("div",null,[(0,t.QD)("p",null,[(0,t.mY)("SRS 是一个免费开源的实时视频服务器应用，通过 "),(0,t.QD)("a",e,[(0,t.mY)("SRS Stack"),(0,t.K2)(s)]),(0,t.mY)(" 能够轻松在多平台上进行简单高效的直播同步推流部署。")]),c])}]]),r=JSON.parse('{"path":"/services/dockers-on-nas/srs-stack.html","title":"SRS Stack：直播推流","lang":"zh-CN","frontmatter":{"article":false,"title":"SRS Stack：直播推流","order":83,"description":"SRS 是一个免费开源的实时视频服务器应用，通过 SRS Stack 能够轻松在多平台上进行简单高效的直播同步推流部署。 在我的日常工作和学习中，我通常会开启直播，但如果推送多路流，会对上传带宽造成较大压力。通过使用 SRS Stack，这个问题得到了解决。 目前，我将电脑上的 OBS 推流到 NAS 上的 SRS Stack，然后在 NAS 上进行多...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/srs-stack.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"SRS Stack：直播推流"}],["meta",{"property":"og:description","content":"SRS 是一个免费开源的实时视频服务器应用，通过 SRS Stack 能够轻松在多平台上进行简单高效的直播同步推流部署。 在我的日常工作和学习中，我通常会开启直播，但如果推送多路流，会对上传带宽造成较大压力。通过使用 SRS Stack，这个问题得到了解决。 目前，我将电脑上的 OBS 推流到 NAS 上的 SRS Stack，然后在 NAS 上进行多..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-12T06:12:53.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-12T06:12:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"SRS Stack：直播推流\\",\\"description\\":\\"SRS 是一个免费开源的实时视频服务器应用，通过 SRS Stack 能够轻松在多平台上进行简单高效的直播同步推流部署。 在我的日常工作和学习中，我通常会开启直播，但如果推送多路流，会对上传带宽造成较大压力。通过使用 SRS Stack，这个问题得到了解决。 目前，我将电脑上的 OBS 推流到 NAS 上的 SRS Stack，然后在 NAS 上进行多...\\"}"]]},"headers":[],"git":{"createdTime":1707718373000,"updatedTime":1707718373000,"contributors":[{"name":"Wakerrd","email":"53556416+Wakerrd@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.82,"words":246},"filePathRelative":"services/dockers-on-nas/srs-stack.md","localizedDate":"2024年2月12日","excerpt":"<p>SRS 是一个免费开源的实时视频服务器应用，通过 <a href=\\"https://github.com/ossrs/srs-stack\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SRS Stack</a> 能够轻松在多平台上进行简单高效的直播同步推流部署。</p>\\n<p>在我的日常工作和学习中，我通常会开启直播，但如果推送多路流，会对上传带宽造成较大压力。通过使用 SRS Stack，这个问题得到了解决。</p>\\n<p>目前，我将电脑上的 OBS 推流到 NAS 上的 SRS Stack，然后在 NAS 上进行多平台统一转播。这样一来，我能够节省上行带宽，同时避免客户端推送多路流。然而，需要注意的是，SRS Stack 目前仅支持最多同时进行三个平台的转播。如果你需要更多平台，可以运行多个实例。</p>","autoDesc":true}')}}]);