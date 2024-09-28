import{_ as h,c as k,b as i,d as a,e,w as l,a as t,r as p,o as d}from"./app-CXxhzMRH.js";const r={};function o(g,s){const n=p("RouteLink");return d(),k("div",null,[s[18]||(s[18]=i("h2",{id:"概述",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#概述"},[i("span",null,"概述")])],-1)),s[19]||(s[19]=i("p",null,"在本主题中，侧边栏 特指 位于页面 最左侧的内容区域，用于导航到不同的页面。",-1)),s[20]||(s[20]=i("p",null,[a("在 "),i("code",null,"vuepress"),a(" 的默认主题 "),i("code",null,"@vuepress/theme-default"),a(" 中，侧边栏是通过 "),i("code",null,"sidebar"),a(" 进行配置。")],-1)),i("p",null,[i("strong",null,[s[1]||(s[1]=a("但在本主题中，为使其更具语义化，主题将侧边栏配置整合到了 ")),e(n,{to:"/notes/theme/config/notes%E9%85%8D%E7%BD%AE.html"},{default:l(()=>s[0]||(s[0]=[a("notes 配置")])),_:1}),s[2]||(s[2]=a(" 中"))]),s[3]||(s[3]=a(" 。 通过一个 ")),s[4]||(s[4]=i("code",null,"note",-1)),s[5]||(s[5]=a(" 对应一个 ")),s[6]||(s[6]=i("code",null,"sidebar",-1)),s[7]||(s[7]=a(" 的方式，实现更加简洁，语义化的侧边栏配置。"))]),s[21]||(s[21]=t(`<p>同时，为了满足 用户不希望使用 <code>notes</code> 功能的需求，本主题也提供了 <code>sidebar</code> 的选项进行侧边栏配置。</p><h2 id="notes-中的侧边栏配置" tabindex="-1"><a class="header-anchor" href="#notes-中的侧边栏配置"><span>Notes 中的侧边栏配置</span></a></h2><p><code>notes</code> 的功能是聚合一系列的文章，通过侧边栏来导航到 notes 中不同的文章。</p><p>你可以在 <code>notes</code> 目录下创建多个 <code>note</code> ，在每一个 <code>note</code> 中单独配置 <code>sidebar</code>:</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineNoteConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>

<span class="line diff add"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">noteA</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineNoteConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  dir</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">note A</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  link</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/note-a/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  sidebar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line diff add"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">one item</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">link</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">one</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> },</span></span>
<span class="line diff add"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">two item</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">link</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">two</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> },</span></span>
<span class="line diff add"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ]</span></span>
<span class="line diff add"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    notes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      link</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      dir</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">notes</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      notes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">noteA</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">], </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)),i("p",null,[s[9]||(s[9]=a("主题提供了 ")),s[10]||(s[10]=i("code",null,"defineNoteConfig",-1)),s[11]||(s[11]=a(" 来帮助你配置 note , 你可以参考 ")),e(n,{to:"/notes/theme/config/notes%E9%85%8D%E7%BD%AE.html"},{default:l(()=>s[8]||(s[8]=[a("这里")])),_:1}),s[12]||(s[12]=a("来查看如何配置。"))]),s[22]||(s[22]=i("h2",{id:"通用-sidebar-配置",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#通用-sidebar-配置"},[i("span",null,"通用 Sidebar 配置")])],-1)),i("p",null,[s[14]||(s[14]=a("如果你不想使用 ")),s[15]||(s[15]=i("code",null,"notes",-1)),s[16]||(s[16]=a(" 的方式来管理系列文章，但又期望通过侧边栏来导航到不同的文章， 可以通过 ")),e(n,{to:"/notes/theme/config/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE.html#sidebar"},{default:l(()=>s[13]||(s[13]=[a("sidebar")])),_:1}),s[17]||(s[17]=a(" 通用配置来实现。"))]),s[23]||(s[23]=t(`<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    notes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    sidebar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">      &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/config/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">侧边栏配置</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">link</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">sidebar-1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">侧边栏配置</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">link</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">sidebar-2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const m=h(r,[["render",o],["__file","index.html.vue"]]),u=JSON.parse(`{"path":"/config/sidebar/","title":"侧边栏配置","lang":"zh-CN","frontmatter":{"title":"侧边栏配置","author":"Plume Theme","createTime":"2024/08/15 21:05:36","permalink":"/config/sidebar/","description":"概述 在本主题中，侧边栏 特指 位于页面 最左侧的内容区域，用于导航到不同的页面。 在 vuepress 的默认主题 @vuepress/theme-default 中，侧边栏是通过 sidebar 进行配置。 但在本主题中，为使其更具语义化，主题将侧边栏配置整合到了 中 。 通过一个 note 对应一个 sidebar 的方式，实现更加简洁，语义化的...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/vue/config/sidebar/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"侧边栏配置"}],["meta",{"property":"og:description","content":"概述 在本主题中，侧边栏 特指 位于页面 最左侧的内容区域，用于导航到不同的页面。 在 vuepress 的默认主题 @vuepress/theme-default 中，侧边栏是通过 sidebar 进行配置。 但在本主题中，为使其更具语义化，主题将侧边栏配置整合到了 中 。 通过一个 note 对应一个 sidebar 的方式，实现更加简洁，语义化的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-27T15:01:01.000Z"}],["meta",{"property":"article:author","content":"Plume Theme"}],["meta",{"property":"article:modified_time","content":"2024-09-27T15:01:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"侧边栏配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-27T15:01:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Plume Theme\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"Notes 中的侧边栏配置","slug":"notes-中的侧边栏配置","link":"#notes-中的侧边栏配置","children":[]},{"level":2,"title":"通用 Sidebar 配置","slug":"通用-sidebar-配置","link":"#通用-sidebar-配置","children":[]}],"readingTime":{"minutes":1.36,"words":409},"git":{"createdTime":1727449261000,"updatedTime":1727449261000,"contributors":[{"name":"与或非","email":"10851059+yuhuofei9527@user.noreply.gitee.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/theme/config/侧边栏配置.md"}`);export{m as comp,u as data};
