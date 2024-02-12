"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[826],{9720:(n,e)=>{e.c=(n,e)=>{const s=n.__vccOpts||n;for(const[n,a]of e)s[n]=a;return s}},2092:(n,e,s)=>{s.r(e),s.d(e,{comp:()=>_,data:()=>S});var a=s(3968);const t={href:"https://github.com/n8n-io/n8n",target:"_blank",rel:"noopener noreferrer"},i={href:"https://sspai.com/prime/story/automation-n8n",target:"_blank",rel:"noopener noreferrer"},o={href:"https://reorx.com/blog/sharing-my-footprints-automation/",target:"_blank",rel:"noopener noreferrer"},l=(0,a.IL)('<h2 id="部署-n8n" tabindex="-1"><a class="header-anchor" href="#部署-n8n"><span>部署 n8n</span></a></h2><ol><li>在桌面终端运行 <code>git clone https://github.com/n8n-io/n8n.git</code> 命令，下载 n8n 的仓库文件，并将其复制到 NAS。</li><li>切换路径 <code>cd /volume3/storage/n8n/docker/compose/withPostgres</code>。</li><li>运行 <code>sudo docker-compose up -d</code> 命令进行部署。</li></ol><p>在初次部署时，你可能会遇到 <code>for n8n Container &quot;5a6edd16e779&quot; is unhealthy.</code> 的提示，这时只需忽略该提示，再次运行 <code>sudo docker-compose up -d</code> 命令即可解决问题。如果在更新 git 仓库文件后重新部署时遇到提示无需更新的情况，你可以先删除容器，然后重新部署。</p><p>下面是部署 n8n 的 Docker 配置文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># https://github.com/n8n-io/n8n/tree/master/docker/compose/withPostgres</span>\n<span class="token comment"># https://docs.n8n.io/hosting/installation/server-setups/docker-compose/#5-create-docker-compose-file</span>\n<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.8&quot;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">n8n-postgres</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span><span class="token number">11</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> n8n<span class="token punctuation">-</span>postgres\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> POSTGRES_USER\n      <span class="token punctuation">-</span> POSTGRES_PASSWORD\n      <span class="token punctuation">-</span> POSTGRES_DB\n      <span class="token punctuation">-</span> POSTGRES_NON_ROOT_USER\n      <span class="token punctuation">-</span> POSTGRES_NON_ROOT_PASSWORD\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/n8n/db<span class="token punctuation">:</span>/var/lib/postgresql/data\n      <span class="token punctuation">-</span> ./init<span class="token punctuation">-</span>data.sh<span class="token punctuation">:</span>/docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d/init<span class="token punctuation">-</span>data.sh\n    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>\n      <span class="token key atrule">test</span><span class="token punctuation">:</span>\n        <span class="token punctuation">[</span>\n          <span class="token string">&quot;CMD-SHELL&quot;</span><span class="token punctuation">,</span>\n          <span class="token string">&quot;pg_isready -h localhost -U ${POSTGRES_USER} -d ${POSTGRES_DB}&quot;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span>\n      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 5s\n      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s\n      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">10</span>\n\n  <span class="token key atrule">n8n</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.n8n.io/n8nio/n8n\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> n8n\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> N8N_HOST=$<span class="token punctuation">{</span>N8N_HOST<span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> NODE_ENV=production\n      <span class="token punctuation">-</span> N8N_EDITOR_BASE_URL=$<span class="token punctuation">{</span>N8N_EDITOR_BASE_URL<span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> VUE_APP_URL_BASE_API=$<span class="token punctuation">{</span>N8N_EDITOR_BASE_URL<span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> WEBHOOK_URL=$<span class="token punctuation">{</span>N8N_EDITOR_BASE_URL<span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> DB_TYPE=postgresdb\n      <span class="token punctuation">-</span> DB_POSTGRESDB_HOST=n8n<span class="token punctuation">-</span>postgres\n      <span class="token punctuation">-</span> DB_POSTGRESDB_PORT=5432\n      <span class="token punctuation">-</span> DB_POSTGRESDB_DATABASE=$<span class="token punctuation">{</span>POSTGRES_DB<span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> DB_POSTGRESDB_USER=$<span class="token punctuation">{</span>POSTGRES_NON_ROOT_USER<span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> DB_POSTGRESDB_PASSWORD=$<span class="token punctuation">{</span>POSTGRES_NON_ROOT_PASSWORD<span class="token punctuation">}</span>\n      <span class="token punctuation">-</span> TZ=Asia/Shanghai\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 5720<span class="token punctuation">:</span><span class="token number">5678</span>\n    <span class="token key atrule">links</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> n8n<span class="token punctuation">-</span>postgres\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/n8n/storage<span class="token punctuation">:</span>/home/node/.n8n\n    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>\n      <span class="token key atrule">n8n-postgres</span><span class="token punctuation">:</span>\n        <span class="token key atrule">condition</span><span class="token punctuation">:</span> service_healthy\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述文件中，<code>/volume1/docker/n8n</code> 被指定为 n8n 的配置目录，你需要确保 n8n 有该路径的读写权限，否则项目可能会在启动时报错。</p><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h2><p>在当前目录的 <code>.env</code> 文件中，可以更改 PostgreSQL 的默认数据库名称、用户和密码。</p><div class="language-env line-numbers-mode" data-ext="env" data-title="env"><pre class="language-env"><code>N8N_HOST=localnas.com\nN8N_EDITOR_BASE_URL=http://localnas.com:5720/\n\nPOSTGRES_USER=changeUser\nPOSTGRES_PASSWORD=changePassword\nPOSTGRES_DB=n8n\n\nPOSTGRES_NON_ROOT_USER=changeUser\nPOSTGRES_NON_ROOT_PASSWORD=changePassword\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>N8N_HOST</code> 和 <code>N8N_EDITOR_BASE_URL</code> 用于第三方 API 的回调访问。如果你启用了外网调用 n8n 的访问权限，建议开启 Two-factor authentication (2FA)，以防止 API 信息泄露。不建议将 <code>N8N_HOST</code> 设为内部域名，否则在后续设置中可能会出现 <code>Bad Request: bad webhook: An HTTPS URL must be provided for webhook</code> 错误。</p><h2 id="节点介绍" tabindex="-1"><a class="header-anchor" href="#节点介绍"><span>节点介绍</span></a></h2><h3 id="http-request" tabindex="-1"><a class="header-anchor" href="#http-request"><span>HTTP Request</span></a></h3>',12),p={href:"https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/",target:"_blank",rel:"noopener noreferrer"},c=(0,a.QD)("p",null,"在使用过程中，如果遇到网页端连接不稳定的问题，可以在节点设置中的 On Error 选项选择 Continue，并在 Options 中添加超时选项，例如 Timeout 10000 ms。",-1),r=(0,a.QD)("h3",{id:"if",tabindex:"-1"},[(0,a.QD)("a",{class:"header-anchor",href:"#if"},[(0,a.QD)("span",null,"IF")])],-1),u={href:"https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if/",target:"_blank",rel:"noopener noreferrer"},d=(0,a.QD)("code",null,"{{}}",-1),m=(0,a.IL)('<figure><img src="https://img.newzone.top/2023-12-12-22-43-08.png?imageMogr2/format/webp?imageMogr2/format/webp/thumbnail/400x" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="github-trigger" tabindex="-1"><a class="header-anchor" href="#github-trigger"><span>Github Trigger</span></a></h3><p>Github Trigger 节点可以通过在 Github 上设置 Webhook 来获得推送通知。</p><p>如果遇到 <code>Workflow could not be activated: A webhook with the identical URL probably exists already. Please delete it manually on Github!</code> 的错误提示，通常是因为在仓库中存在多个相同的 Webhook 地址。你可以进入 repo 仓库，选择 <code>Settings &gt; Code and automation &gt; Webhooks</code>，手动删除重复的 Webhook 地址来解决这个问题。</p><h2 id="使用-tips" tabindex="-1"><a class="header-anchor" href="#使用-tips"><span>使用 Tips</span></a></h2><h3 id="变量路径" tabindex="-1"><a class="header-anchor" href="#变量路径"><span>变量路径</span></a></h3><p>对于一些复杂的输入变量，你可以直接使用 n8n 自带的工具来复制路径。在 INPUT 区域选择 JSON，点击要选择的参数，然后点击 INPUT 右上角的复制按钮，选择 <code>Copy Parameter Path</code>。</p><figure><img src="https://img.newzone.top/2023-12-14-12-37-36.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="其他操作记录" tabindex="-1"><a class="header-anchor" href="#其他操作记录"><span>其他操作记录</span></a></h2><h3 id="discord-oauth2" tabindex="-1"><a class="header-anchor" href="#discord-oauth2"><span>Discord OAuth2</span></a></h3>',10),k={href:"https://discord.com/developers/applications",target:"_blank",rel:"noopener noreferrer"},v=(0,a.QD)("p",null,"接着，将 CLIENT ID 和 CLIENT SECRET 添加到 n8n 中即可。",-1),h={href:"https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-",target:"_blank",rel:"noopener noreferrer"},b=(0,a.QD)("p",null,"通过上述步骤，你可以灵活地使用 n8n 来构建自动化工作流，实现数据的聚合、管理和分析。希望这些信息能够帮助你高效地使用 n8n，使你的工作和生活更加自动化和便捷。如果你在使用过程中遇到任何问题或有更多的经验分享，请在评论区留言，我们可以一起讨论和解决。",-1),g={},_=(0,s(9720).c)(g,[["render",function(n,e){const s=(0,a.E1)("ExternalLinkIcon");return(0,a.Wz)(),(0,a.An)("div",null,[(0,a.QD)("p",null,[(0,a.QD)("a",t,[(0,a.mY)("n8n"),(0,a.K2)(s)]),(0,a.mY)(" 是一款功能强大的工作流程自动化工具，可以自行托管，并允许用户添加自定义函数、逻辑和应用程序。n8n 社区提供了丰富的第三方 API 节点，方便用户连接和使用主流的海外服务。")]),(0,a.QD)("p",null,[(0,a.mY)("对于初学者，建议先跟随教程 "),(0,a.QD)("a",i,[(0,a.mY)("基于 n8n 的开源自动化：以滴答清单同步 Notion 为例"),(0,a.K2)(s)]),(0,a.mY)(" 来熟悉 n8n 的基本操作和广泛应用。更多关于 n8n 的使用案例和详细介绍，可以参考 "),(0,a.QD)("a",o,[(0,a.mY)("使用自动化工作流聚合信息摄入和输出"),(0,a.K2)(s)]),(0,a.mY)("。")]),l,(0,a.QD)("p",null,[(0,a.QD)("a",p,[(0,a.mY)("HTTP Request"),(0,a.K2)(s)]),(0,a.mY)(" 节点允许你使用 REST API 发出 HTTP 请求，从任何应用程序或服务中查询数据。")]),c,r,(0,a.QD)("p",null,[(0,a.QD)("a",u,[(0,a.mY)("IF"),(0,a.K2)(s)]),(0,a.mY)(" 节点允许你根据比较操作有条件地分割工作流。注意，布尔值的 true 和 false 需要使用双重花括号 "),d,(0,a.mY)(" 包围。")]),m,(0,a.QD)("p",null,[(0,a.mY)("在 "),(0,a.QD)("a",k,[(0,a.mY)("Discord Applications"),(0,a.K2)(s)]),(0,a.mY)(" 中新建应用，然后在 OAuth2 > General > Redirects 中添加回调地址。")]),v,(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.QD)("a",h,[(0,a.mY)("Where can I find my User/Server/Message ID?"),(0,a.K2)(s)])])]),b])}]]),S=JSON.parse('{"path":"/services/dockers-on-nas/n8n.html","title":"n8n：工作流自动化","lang":"zh-CN","frontmatter":{"article":false,"title":"n8n：工作流自动化","order":81,"description":"n8n 是一款功能强大的工作流程自动化工具，可以自行托管，并允许用户添加自定义函数、逻辑和应用程序。n8n 社区提供了丰富的第三方 API 节点，方便用户连接和使用主流的海外服务。 对于初学者，建议先跟随教程 基于 n8n 的开源自动化：以滴答清单同步 Notion 为例 来熟悉 n8n 的基本操作和广泛应用。更多关于 n8n 的使用案例和详细介绍，可...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/n8n.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"n8n：工作流自动化"}],["meta",{"property":"og:description","content":"n8n 是一款功能强大的工作流程自动化工具，可以自行托管，并允许用户添加自定义函数、逻辑和应用程序。n8n 社区提供了丰富的第三方 API 节点，方便用户连接和使用主流的海外服务。 对于初学者，建议先跟随教程 基于 n8n 的开源自动化：以滴答清单同步 Notion 为例 来熟悉 n8n 的基本操作和广泛应用。更多关于 n8n 的使用案例和详细介绍，可..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://img.newzone.top/2023-12-12-22-43-08.png?imageMogr2/format/webp?imageMogr2/format/webp/thumbnail/400x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-12T06:12:53.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"n8n：工作流自动化"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-12T06:12:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"n8n：工作流自动化\\",\\"description\\":\\"n8n 是一款功能强大的工作流程自动化工具，可以自行托管，并允许用户添加自定义函数、逻辑和应用程序。n8n 社区提供了丰富的第三方 API 节点，方便用户连接和使用主流的海外服务。 对于初学者，建议先跟随教程 基于 n8n 的开源自动化：以滴答清单同步 Notion 为例 来熟悉 n8n 的基本操作和广泛应用。更多关于 n8n 的使用案例和详细介绍，可...\\"}"]]},"headers":[{"level":2,"title":"部署 n8n","slug":"部署-n8n","link":"#部署-n8n","children":[]},{"level":2,"title":"环境变量","slug":"环境变量","link":"#环境变量","children":[]},{"level":2,"title":"节点介绍","slug":"节点介绍","link":"#节点介绍","children":[{"level":3,"title":"HTTP Request","slug":"http-request","link":"#http-request","children":[]},{"level":3,"title":"IF","slug":"if","link":"#if","children":[]},{"level":3,"title":"Github Trigger","slug":"github-trigger","link":"#github-trigger","children":[]}]},{"level":2,"title":"使用 Tips","slug":"使用-tips","link":"#使用-tips","children":[{"level":3,"title":"变量路径","slug":"变量路径","link":"#变量路径","children":[]}]},{"level":2,"title":"其他操作记录","slug":"其他操作记录","link":"#其他操作记录","children":[{"level":3,"title":"Discord OAuth2","slug":"discord-oauth2","link":"#discord-oauth2","children":[]}]}],"git":{"createdTime":1707718373000,"updatedTime":1707718373000,"contributors":[{"name":"Wakerrd","email":"53556416+Wakerrd@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.74,"words":1121},"filePathRelative":"services/dockers-on-nas/n8n.md","localizedDate":"2024年2月12日","excerpt":"<p><a href=\\"https://github.com/n8n-io/n8n\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">n8n</a> 是一款功能强大的工作流程自动化工具，可以自行托管，并允许用户添加自定义函数、逻辑和应用程序。n8n 社区提供了丰富的第三方 API 节点，方便用户连接和使用主流的海外服务。</p>\\n<p>对于初学者，建议先跟随教程 <a href=\\"https://sspai.com/prime/story/automation-n8n\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">基于 n8n 的开源自动化：以滴答清单同步 Notion 为例</a> 来熟悉 n8n 的基本操作和广泛应用。更多关于 n8n 的使用案例和详细介绍，可以参考 <a href=\\"https://reorx.com/blog/sharing-my-footprints-automation/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">使用自动化工作流聚合信息摄入和输出</a>。</p>","autoDesc":true}')}}]);