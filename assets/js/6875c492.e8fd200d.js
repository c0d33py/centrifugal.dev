"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[8610],{9058:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7294),l=a(6010),r=a(179),s=a(7524),o=a(9960),i=a(5999);const c="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",g="sidebarItem__DBe",d="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function E(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:g},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title)))))))}var h=a(3102);function f(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return n.createElement(h.Zo,{component:f,props:e})}function v(e){let{sidebar:t}=e;const a=(0,s.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(E,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:s,...o}=e,i=t&&t.items.length>0;return n.createElement(r.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(v,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},1158:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(5999),r=a(2244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(r.Z,{permalink:s,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},5289:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(4996),r=a(9460);function s(e){let{children:t,className:a}=e;const{frontMatter:s,assets:o,metadata:{description:i}}=(0,r.C)(),{withBaseUrl:c}=(0,l.C)(),m=o.image??s.image,u=s.keywords??[];return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i&&n.createElement("meta",{itemProp:"description",content:i}),m&&n.createElement("link",{itemProp:"image",href:c(m,{absolute:!0})}),u.length>0&&n.createElement("meta",{itemProp:"keywords",content:u.join(",")}),t)}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(7294),l=a(6010),r=a(5999),s=a(8824),o=a(1944),i=a(5281),c=a(9960),m=a(9058),u=a(1158),g=a(197),d=a(2426);function p(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function E(e){let{tag:t}=e;const a=p(t);return n.createElement(n.Fragment,null,n.createElement(o.d,{title:a}),n.createElement(g.Z,{tag:"blog_tags_posts"}))}function h(e){let{tag:t,items:a,sidebar:l,listMetadata:s}=e;const o=p(t);return n.createElement(m.Z,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(c.Z,{href:t.allTagsPath},n.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(d.Z,{items:a}),n.createElement(u.Z,{metadata:s}))}function f(e){return n.createElement(o.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(E,e),n.createElement(h,e))}},2244:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010),r=a(9960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},9460:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>s});var n=a(7294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:s},t)}function o(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},8824:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(7294),l=a(2263);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}},2426:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(9960),r=a(9460),s=a(5289);const o={container:"container_nU41",leftColumn:"leftColumn_mxRM"};function i(e){return n.createElement(n.Fragment,null,n.createElement(c,e))}function c(e){let{items:t,component:a=m}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}function m(e){let{className:t}=e;const{metadata:a}=(0,r.C)();console.log(a);const{permalink:i,title:c,formattedDate:m,frontMatter:u,description:g}=a,d=a.authors[0];return n.createElement(s.Z,{className:t},n.createElement("div",{className:o.container},n.createElement("div",{className:o.leftColumn},n.createElement("img",{src:u.image,width:"200px"})),n.createElement("div",{className:o.rightColumn},n.createElement("div",null,n.createElement(l.Z,{itemProp:"url",to:i,style:{fontSize:"1.0em"}},c)),n.createElement("div",{style:{fontSize:"0.8em",color:"#6d6666"}},m," by ",null==d?void 0:d.name),n.createElement("div",null,n.createElement("div",null,n.createElement("div",{style:{fontSize:"0.9em"}},g))))))}}}]);