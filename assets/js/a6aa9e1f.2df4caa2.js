"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[3089],{9058:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7294),l=a(6010),r=a(179),i=a(7524),s=a(9960),o=a(5999);const c="sidebar_re4s",m="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",u="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function E(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:u},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var v=a(3102);function b(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return n.createElement(v.Zo,{component:b,props:e})}function h(e){let{sidebar:t}=e;const a=(0,i.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(f,{sidebar:t}):n.createElement(E,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:i,...s}=e,o=t&&t.items.length>0;return n.createElement(r.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(h,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},46:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(7294),l=a(6010),r=a(2263),i=a(1944),s=a(5281),o=a(9058),c=a(1158),m=a(197),d=a(2426);function u(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:l,blogTitle:s,permalink:o}=t,c="/"===o?a:s;return n.createElement(n.Fragment,null,n.createElement(i.d,{title:c,description:l}),n.createElement(m.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(o.Z,{sidebar:l},n.createElement(d.Z,{items:a}),n.createElement(c.Z,{metadata:t}))}function p(e){return n.createElement(i.FG,{className:(0,l.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},n.createElement(u,e),n.createElement(g,e))}},1158:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(5999),r=a(2244);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&n.createElement(r.Z,{permalink:i,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},5289:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(4996),r=a(9460);function i(e){let{children:t,className:a}=e;const{frontMatter:i,assets:s,metadata:{description:o}}=(0,r.C)(),{withBaseUrl:c}=(0,l.C)(),m=s.image??i.image,d=i.keywords??[];return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},o&&n.createElement("meta",{itemProp:"description",content:o}),m&&n.createElement("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&n.createElement("meta",{itemProp:"keywords",content:d.join(",")}),t)}},2244:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010),r=a(9960);function i(e){const{permalink:t,title:a,subLabel:i,isNext:s}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},9460:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>i});var n=a(7294),l=a(902);const r=n.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:i},t)}function s(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},2426:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(9960),r=a(9460),i=a(5289);const s={container:"container_nU41",leftColumn:"leftColumn_mxRM"};function o(e){return n.createElement(n.Fragment,null,n.createElement(c,e))}function c(e){let{items:t,component:a=m}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}function m(e){let{className:t}=e;const{metadata:a}=(0,r.C)();console.log(a);const{permalink:o,title:c,formattedDate:m,frontMatter:d,description:u}=a,g=a.authors[0];return n.createElement(i.Z,{className:t},n.createElement("div",{className:s.container},n.createElement("div",{className:s.leftColumn},n.createElement("img",{src:d.image,width:"200px"})),n.createElement("div",{className:s.rightColumn},n.createElement("div",null,n.createElement(l.Z,{itemProp:"url",to:o,style:{fontSize:"1.0em"}},c)),n.createElement("div",{style:{fontSize:"0.8em",color:"#6d6666"}},m," by ",null==g?void 0:g.name),n.createElement("div",null,n.createElement("div",null,n.createElement("div",{style:{fontSize:"0.9em"}},u))))))}}}]);