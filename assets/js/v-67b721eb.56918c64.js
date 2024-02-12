"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[4080],{9720:(n,s)=>{s.c=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},8492:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>u,data:()=>d});var e=a(3968);const t={href:"https://www.electronjs.org/",target:"_blank",rel:"noopener noreferrer"},o=(0,e.IL)('<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 部署 electron，electron-builder</span>\n<span class="token comment"># Electron 不能全局安装，否则 electron-builder 找不到</span>\n<span class="token function">yarn</span> <span class="token function">add</span> electron@latest <span class="token parameter variable">-D</span> <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> <span class="token function">add</span> electron-builder <span class="token parameter variable">-D</span>\n\nset-ExecutionPolicy RemoteSigned <span class="token comment">#若 yarn 命令报错，则管理员运行此命令</span>\n\n<span class="token comment"># 全局安装时，去除^，手动指定 package.json 中的 electron 版本，然后运行下方打包命令</span>\n<span class="token comment"># 将打包命令加入 package.json，直接使用打包命令</span>\n<span class="token function">yarn</span> postinstall\n<span class="token function">yarn</span> dist\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用问题" tabindex="-1"><a class="header-anchor" href="#使用问题"><span>使用问题</span></a></h2>',2),l=(0,e.QD)("li",null,"electron cdn 需要连接网络，必须用本地环境安装。",-1),p=(0,e.QD)("li",null,"Electron 定位的 location 为 窗口链接，而非网页链接。",-1),c={href:"https://imf.ms/web/2022/07/05/my-first-web-hybird-project-experience/#%E8%B7%A8%E5%9F%9F-cors-%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},r=(0,e.IL)('<h3 id="nsis-配置" tabindex="-1"><a class="header-anchor" href="#nsis-配置"><span>nsis 配置</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;nsis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;oneClick&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否一键安装</span>\n  <span class="token property">&quot;allowElevation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许请求提升。如果为 false，则用户必须使用提升的权限重新启动安装程序。</span>\n  <span class="token property">&quot;allowToChangeInstallationDirectory&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许修改安装目录</span>\n  <span class="token property">&quot;installerIcon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./build/icons/aaa.ico&quot;</span><span class="token punctuation">,</span><span class="token comment">// 安装图标</span>\n  <span class="token property">&quot;uninstallerIcon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./build/icons/bbb.ico&quot;</span><span class="token punctuation">,</span><span class="token comment">//卸载图标</span>\n  <span class="token property">&quot;installerHeaderIcon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./build/icons/aaa.ico&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 安装时头部图标</span>\n  <span class="token property">&quot;createDesktopShortcut&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 创建桌面图标</span>\n  <span class="token property">&quot;createStartMenuShortcut&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// 创建开始菜单图标</span>\n  <span class="token property">&quot;shortcutName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 图标名称</span>\n  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build/script/installer.nsh&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 包含的自定义 nsis 脚本 这个对于构建需求严格得安装过程相当有用。</span>\n  <span class="token property">&quot;script&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;build/script/installer.nsh&quot;</span> <span class="token comment">// NSIS 脚本的路径，用于自定义安装程序。默认为 build / installer.nsi</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包报错" tabindex="-1"><a class="header-anchor" href="#打包报错"><span>打包报错</span></a></h3><p>执行打包命令后，提示 <code>cannot unpack electron zip file, will be re-downloaded</code>。</p><p>手动下载对应版本 electron，然后将压缩包放置于 <code>C:\\Users\\用户名\\AppData\\Local\\electron\\Cache</code>。</p><h3 id="跨系统打包" tabindex="-1"><a class="header-anchor" href="#跨系统打包"><span>跨系统打包</span></a></h3><p>electron 不允许跨系统打包，所以 Mac 打包需要在 iOS 环境，Linux 打包需在 Linux 环境。</p><p>Win11 可允许内建子系统，管理员身份运行 Powershell，输入 bash 即可进入 Linux 子系统。也可以直接打开在 Microsoft store 中下载的 Ubuntu 进入子系统，初次进入 Linux 子系统需要设置 Linux 的用户名及密码。</p><p>更多命令参考：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#安排装更新软件源，安装 node 和 npm 环境</span>\n<span class="token function">sudo</span> <span class="token function">apt-get</span> update\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nodejs\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">npm</span>\n\n<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> npm@latest <span class="token parameter variable">-g</span> <span class="token comment">#升级 npm</span>\n<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> n <span class="token comment">#安装用于安装 nodejs 的模块 n</span>\n<span class="token function">sudo</span> n stable <span class="token comment">#通过 n 模块安装指定的 nodejs</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',10),i={},u=(0,a(9720).c)(i,[["render",function(n,s){const a=(0,e.E1)("ExternalLinkIcon"),i=(0,e.E1)("RouteLink");return(0,e.Wz)(),(0,e.An)("div",null,[(0,e.QD)("p",null,[(0,e.QD)("a",t,[(0,e.mY)("Electron"),(0,e.K2)(a)]),(0,e.mY)(" 是使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序框架。Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序。")]),(0,e.QD)("p",null,[(0,e.mY)("按 "),(0,e.K2)(i,{to:"/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2"},{default:(0,e.Ql)((()=>[(0,e.mY)("环境部署教程")])),_:1}),(0,e.mY)("，部署 yarn，然后部署 electron 环境。")]),o,(0,e.QD)("ul",null,[l,p,(0,e.QD)("li",null,[(0,e.QD)("a",c,[(0,e.mY)("跨域 CORS 配置"),(0,e.K2)(a)]),(0,e.mY)("：有的应用需要访问的是本地 Web Server，与服务端接口在不同域")])]),r])}]]),d=JSON.parse('{"path":"/code/Electron.html","title":"Electron","lang":"zh-CN","frontmatter":{"article":false,"title":"Electron","icon":"layout","order":7,"description":"Electron 是使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序框架。Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序。 按 ，部署 yarn，然后部署 electron 环境。 使用问题 electron cdn 需要连接网络，必须用本地环境安装。 Electron 定位的 l...","head":[["meta",{"property":"og:url","content":"https://newzone.top/code/Electron.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Electron"}],["meta",{"property":"og:description","content":"Electron 是使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序框架。Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序。 按 ，部署 yarn，然后部署 electron 环境。 使用问题 electron cdn 需要连接网络，必须用本地环境安装。 Electron 定位的 l..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-12T06:12:53.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-12T06:12:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Electron\\",\\"description\\":\\"Electron 是使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序框架。Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序。 按 ，部署 yarn，然后部署 electron 环境。 使用问题 electron cdn 需要连接网络，必须用本地环境安装。 Electron 定位的 l...\\"}"]]},"headers":[{"level":2,"title":"使用问题","slug":"使用问题","link":"#使用问题","children":[{"level":3,"title":"nsis 配置","slug":"nsis-配置","link":"#nsis-配置","children":[]},{"level":3,"title":"打包报错","slug":"打包报错","link":"#打包报错","children":[]},{"level":3,"title":"跨系统打包","slug":"跨系统打包","link":"#跨系统打包","children":[]}]}],"git":{"createdTime":1707718373000,"updatedTime":1707718373000,"contributors":[{"name":"Wakerrd","email":"53556416+Wakerrd@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.14,"words":643},"filePathRelative":"code/Electron.md","localizedDate":"2024年2月12日","excerpt":"<p><a href=\\"https://www.electronjs.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Electron</a> 是使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序框架。Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序。</p>\\n<p>按 <a href=\\"/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2\\" target=\\"_blank\\">环境部署教程</a>，部署 yarn，然后部署 electron 环境。</p>","autoDesc":true}')}}]);