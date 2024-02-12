"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5768],{9720:(e,n)=>{n.c=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}},5208:(e,n,s)=>{s.r(n),s.d(n,{comp:()=>p,data:()=>l});var a=s(3968);const o=(0,a.QD)("p",null,"在日常工作中，我需要管理大量以 Markdown 格式编写的笔记和文档。这些资料往往包含敏感信息，不适合公开分享，但我又希望能有一个方便的方式来查看和管理这些文档。Docsify 是一个轻量级的文档网站生成器，支持将 Markdown 文件即时转换为网页格式，非常适合作为个人或团队的文档查看工具。",-1),t=(0,a.QD)("code",null,"Run, PowerShell.exe -NoExit -Command &{docsify serve --port 3030}, D:\\web\\marketing",-1),c={href:"https://github.com/rockbenben/docsify-docker",target:"_blank",rel:"noopener noreferrer"},r=(0,a.IL)('<p>以下是通过 Docker 部署 Docsify 的命令，这可以让你轻松地在任何支持 Docker 的环境中部署自己的私密文件服务器：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.8&quot;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">docsify</span><span class="token punctuation">:</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> docsify<span class="token punctuation">-</span>server\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> rockben/docsify<span class="token punctuation">-</span>server\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/docsify/docs<span class="token punctuation">:</span>/docs\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;3310:3000&quot;</span>\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 Docker 配置文件定义了一个服务 <code>docsify</code>：</p><ul><li><code>volumes</code> 映射了本地的文档目录到容器内，使得容器可以访问并展示这些 Markdown 文件。</li><li><code>ports</code> 将容器的 3000 端口映射到本地的 3310 端口，你可以通过访问本地的 3310 端口来查看文档。</li></ul><p>通过以上步骤，我们可以轻松地利用 Docsify 和 Docker 构建一个私密且高效的文件服务器。这不仅简化了我们的工作流程，还提高了文档管理的安全性和便捷性。无论是个人笔记、团队协作文件还是企业内部资料，利用这种方法，你都能享受到快速、安全且易于管理的文档服务。现在，尝试动手实践，为你的文档管理带来一场革新吧！</p><p>如果你在部署或使用过程中遇到任何问题，欢迎在评论区留言交流，我们可以一起探讨解决方案。</p>',6),i={},p=(0,s(9720).c)(i,[["render",function(e,n){const s=(0,a.E1)("ExternalLinkIcon");return(0,a.Wz)(),(0,a.An)("div",null,[o,(0,a.QD)("p",null,[(0,a.mY)("起初，我通过一个 ahk 脚本在开机时执行 "),t,(0,a.mY)(" 命令来启动 Docsify 服务。虽然这种方法能够工作，但启动和维护过程相对繁琐。为了提高效率并实现更好的部署方式，我转向了 Docker 技术，并构建了一个名为 "),(0,a.QD)("a",c,[(0,a.mY)("docsify-docker"),(0,a.K2)(s)]),(0,a.mY)(" 的项目。这个项目不仅简化了部署流程，还能自动检测 docsify-cli 的更新，确保文档服务器始终保持最新状态。")]),r])}]]),l=JSON.parse('{"path":"/services/dockers-on-nas/docsify.html","title":"Docsify：私密文件服务器","lang":"zh-CN","frontmatter":{"article":false,"title":"Docsify：私密文件服务器","order":103,"description":"在日常工作中，我需要管理大量以 Markdown 格式编写的笔记和文档。这些资料往往包含敏感信息，不适合公开分享，但我又希望能有一个方便的方式来查看和管理这些文档。Docsify 是一个轻量级的文档网站生成器，支持将 Markdown 文件即时转换为网页格式，非常适合作为个人或团队的文档查看工具。 起初，我通过一个 ahk 脚本在开机时执行 Run, ...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/docsify.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Docsify：私密文件服务器"}],["meta",{"property":"og:description","content":"在日常工作中，我需要管理大量以 Markdown 格式编写的笔记和文档。这些资料往往包含敏感信息，不适合公开分享，但我又希望能有一个方便的方式来查看和管理这些文档。Docsify 是一个轻量级的文档网站生成器，支持将 Markdown 文件即时转换为网页格式，非常适合作为个人或团队的文档查看工具。 起初，我通过一个 ahk 脚本在开机时执行 Run, ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-12T06:12:53.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-12T06:12:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Docsify：私密文件服务器\\",\\"description\\":\\"在日常工作中，我需要管理大量以 Markdown 格式编写的笔记和文档。这些资料往往包含敏感信息，不适合公开分享，但我又希望能有一个方便的方式来查看和管理这些文档。Docsify 是一个轻量级的文档网站生成器，支持将 Markdown 文件即时转换为网页格式，非常适合作为个人或团队的文档查看工具。 起初，我通过一个 ahk 脚本在开机时执行 Run, ...\\"}"]]},"headers":[],"git":{"createdTime":1707718373000,"updatedTime":1707718373000,"contributors":[{"name":"Wakerrd","email":"53556416+Wakerrd@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.93,"words":578},"filePathRelative":"services/dockers-on-nas/docsify.md","localizedDate":"2024年2月12日","excerpt":"<p>在日常工作中，我需要管理大量以 Markdown 格式编写的笔记和文档。这些资料往往包含敏感信息，不适合公开分享，但我又希望能有一个方便的方式来查看和管理这些文档。Docsify 是一个轻量级的文档网站生成器，支持将 Markdown 文件即时转换为网页格式，非常适合作为个人或团队的文档查看工具。</p>\\n<p>起初，我通过一个 ahk 脚本在开机时执行 <code>Run, PowerShell.exe -NoExit -Command &amp;{docsify serve --port 3030}, D:\\\\web\\\\marketing</code> 命令来启动 Docsify 服务。虽然这种方法能够工作，但启动和维护过程相对繁琐。为了提高效率并实现更好的部署方式，我转向了 Docker 技术，并构建了一个名为 <a href=\\"https://github.com/rockbenben/docsify-docker\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">docsify-docker</a> 的项目。这个项目不仅简化了部署流程，还能自动检测 docsify-cli 的更新，确保文档服务器始终保持最新状态。</p>","autoDesc":true}')}}]);