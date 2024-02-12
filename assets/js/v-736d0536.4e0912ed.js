"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[568],{9720:(n,a)=>{a.c=(n,a)=>{const t=n.__vccOpts||n;for(const[n,e]of a)t[n]=e;return t}},7152:(n,a,t)=>{t.r(a),t.d(a,{comp:()=>c,data:()=>p});var e=t(3968);const s=(0,e.QD)("p",null,"Git 是版本控制的最佳方法。我的博客和开源软件都是部署在 GitHub 上，但有些含有私钥的代码不希望部署在外网，因此选择使用 GitLab 镜像私有化部署到本地。",-1),i={href:"https://docs.gitlab.com/ee/install/docker.html",target:"_blank",rel:"noopener noreferrer"},l=(0,e.IL)('<h2 id="部署命令" tabindex="-1"><a class="header-anchor" href="#部署命令"><span>部署命令</span></a></h2><p>GitLab 会占用 4G 内存，初始化部署时间较长，最好等半小时在连接。你可以在服务器上使用 <code>sudo docker logs -f gitlab</code> 来跟踪部署进度。</p><p>部署好后，在服务器上运行 <code>sudo docker exec -it gitlab grep &#39;Password:&#39; /etc/gitlab/initial_root_password</code> 获取 root 用户的初始随机密码。如果无法用获得的密码登录，可能是因为你的初始化部署有问题，需清空配置文件夹，然后重新部署。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.6&#39;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">web</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;gitlab/gitlab-ce:latest&#39;</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> <span class="token string">&#39;gitlab&#39;</span>\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> <span class="token string">&#39;gitlab&#39;</span>\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> <span class="token string">&#39;Asia/Shanghai&#39;</span>\n      <span class="token key atrule">GITLAB_OMNIBUS_CONFIG</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n        external_url &#39;http://192.168.2.3:49140&#39;\n        gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 49142</span>\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&#39;49140:49140&#39;</span>\n      <span class="token punctuation">-</span> <span class="token string">&#39;49142:22&#39;</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/GitLab/config<span class="token punctuation">:</span>/etc/gitlab\n      <span class="token punctuation">-</span> /volume1/docker/GitLab/logs<span class="token punctuation">:</span>/var/log/gitlab\n      <span class="token punctuation">-</span> /volume1/docker/GitLab/data<span class="token punctuation">:</span>/var/opt/gitlab\n    <span class="token key atrule">shm_size</span><span class="token punctuation">:</span> <span class="token string">&#39;256m&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始配置" tabindex="-1"><a class="header-anchor" href="#初始配置"><span>初始配置</span></a></h2><p>SourceTree、GitHub Desktop 均支持管理 GitLab 项目，操作类似。注意，如果本地已经建好了项目，先不要在 GitLab 网页上建立任何数据，直接上传就好，否则容易报错。</p><p>以下是命令行的初始配置步骤：</p><ol><li><p><strong>在 GitLab 上创建新仓库</strong>：</p><ul><li>登录到您的 GitLab 实例。</li><li>创建一个新的仓库（Project）。在仓库创建页面上，填写必要的信息，例如仓库名称、描述等。</li></ul></li><li><p><strong>在本地初始化 Git 仓库</strong>：</p><ul><li>打开终端或命令提示符。</li><li>导航到您的项目文件夹：<code>cd 路径到您的项目文件夹</code></li><li>初始化 Git 仓库：<code>git init</code></li><li>添加文件到仓库：<code>git add .</code> （这会添加所有文件，如果只想添加特定文件，可以用<code>git add 文件名</code>）</li></ul></li><li><p><strong>配置 Git 仓库</strong>：</p><ul><li>设置您的用户信息（如果之前没有设置的话）： <ul><li><code>git config --global user.name &quot;您的名字&quot;</code></li><li><code>git config --global user.email &quot;您的邮箱&quot;</code></li></ul></li><li>提交您的更改：<code>git commit -m &quot;首次提交&quot;</code></li></ul></li><li><p><strong>将本地仓库关联到 GitLab</strong>：</p><ul><li>获取您在 GitLab 上创建的仓库的 URL。这通常是<code>http://您的NAS地址/用户名/仓库名.git</code>。</li><li>在终端中关联 GitLab 仓库：<code>git remote add origin 仓库URL</code></li></ul></li><li><p><strong>上传代码到 GitLab</strong>：</p><ul><li>推送代码到 GitLab：<code>git push -u origin master</code>（或者如果您使用的是 main 分支，就是<code>git push -u origin main</code>）</li><li>初始推送会提示你输入账户密码。</li></ul></li><li><p><strong>后续更新</strong>：</p><ul><li>以后当您进行了更多的更改并想要上传这些更改时，您只需要运行<code>git add .</code>，<code>git commit -m &quot;更新信息&quot;</code>和<code>git push</code>。</li></ul></li></ol><h2 id="常用功能" tabindex="-1"><a class="header-anchor" href="#常用功能"><span>常用功能</span></a></h2><p>比较提交：先进入项目并选择“提交”。接着选择需要比较的提交版本，并点击右侧的“浏览文件”。然后点击顶部的“比较”按钮，接着点击中间的“交换”按钮，再点击“比较”。这样便可将所选提交版本与当前版本进行比较，查看整体修改内容。此功能适用于同一文件多次修改的情况，方便直接查看经过多次修改后，版本的整体变更情况。</p>',10),o={},c=(0,t(9720).c)(o,[["render",function(n,a){const t=(0,e.E1)("ExternalLinkIcon");return(0,e.Wz)(),(0,e.An)("div",null,[s,(0,e.QD)("p",null,[(0,e.QD)("a",i,[(0,e.mY)("GitLab"),(0,e.K2)(t)]),(0,e.mY)(" 功能与 GitHub 类似，提供了集成/持续部署（CI/CD）和项目管理工具，适合用于源代码管理和版本控制。")]),l])}]]),p=JSON.parse('{"path":"/services/dockers-on-nas/gitlab.html","title":"GitLab：私有化版本控制","lang":"zh-CN","frontmatter":{"article":false,"title":"GitLab：私有化版本控制","order":103,"description":"Git 是版本控制的最佳方法。我的博客和开源软件都是部署在 GitHub 上，但有些含有私钥的代码不希望部署在外网，因此选择使用 GitLab 镜像私有化部署到本地。 GitLab 功能与 GitHub 类似，提供了集成/持续部署（CI/CD）和项目管理工具，适合用于源代码管理和版本控制。 部署命令 GitLab 会占用 4G 内存，初始化部署时间较长...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/gitlab.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"GitLab：私有化版本控制"}],["meta",{"property":"og:description","content":"Git 是版本控制的最佳方法。我的博客和开源软件都是部署在 GitHub 上，但有些含有私钥的代码不希望部署在外网，因此选择使用 GitLab 镜像私有化部署到本地。 GitLab 功能与 GitHub 类似，提供了集成/持续部署（CI/CD）和项目管理工具，适合用于源代码管理和版本控制。 部署命令 GitLab 会占用 4G 内存，初始化部署时间较长..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-12T06:12:53.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-12T06:12:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"GitLab：私有化版本控制\\",\\"description\\":\\"Git 是版本控制的最佳方法。我的博客和开源软件都是部署在 GitHub 上，但有些含有私钥的代码不希望部署在外网，因此选择使用 GitLab 镜像私有化部署到本地。 GitLab 功能与 GitHub 类似，提供了集成/持续部署（CI/CD）和项目管理工具，适合用于源代码管理和版本控制。 部署命令 GitLab 会占用 4G 内存，初始化部署时间较长...\\"}"]]},"headers":[{"level":2,"title":"部署命令","slug":"部署命令","link":"#部署命令","children":[]},{"level":2,"title":"初始配置","slug":"初始配置","link":"#初始配置","children":[]},{"level":2,"title":"常用功能","slug":"常用功能","link":"#常用功能","children":[]}],"git":{"createdTime":1707718373000,"updatedTime":1707718373000,"contributors":[{"name":"Wakerrd","email":"53556416+Wakerrd@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.76,"words":829},"filePathRelative":"services/dockers-on-nas/gitlab.md","localizedDate":"2024年2月12日","excerpt":"<p>Git 是版本控制的最佳方法。我的博客和开源软件都是部署在 GitHub 上，但有些含有私钥的代码不希望部署在外网，因此选择使用 GitLab 镜像私有化部署到本地。</p>\\n<p><a href=\\"https://docs.gitlab.com/ee/install/docker.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">GitLab</a> 功能与 GitHub 类似，提供了集成/持续部署（CI/CD）和项目管理工具，适合用于源代码管理和版本控制。</p>\\n<h2>部署命令</h2>\\n<p>GitLab 会占用 4G 内存，初始化部署时间较长，最好等半小时在连接。你可以在服务器上使用 <code>sudo docker logs -f gitlab</code> 来跟踪部署进度。</p>","autoDesc":true}')}}]);