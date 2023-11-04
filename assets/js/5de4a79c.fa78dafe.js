"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[8375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),i=n(7294),o=n(6010),r=n(6775),l=n(1980),s=n(7392),c=n(12);function u(e){return function(e){var t;return(null==(t=i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:a}),[k,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??k;return d({value:e,tabValues:o})?e:null})();(0,i.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var h=n(2466),f=n(2389);const g="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,h.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==r&&(u(t),l(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":r===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",g)},i.createElement(v,(0,a.Z)({},e,t)),i.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return i.createElement(N,(0,a.Z)({key:String(t)},e))}},6580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),o=n(4866),r=n(5162);const l={id:"authentication",title:"Client JWT authentication"},s=void 0,c={unversionedId:"server/authentication",id:"server/authentication",title:"Client JWT authentication",description:"To authenticate incoming connection (client) Centrifugo can use JSON Web Token (JWT) passed from the client-side. This way Centrifugo may know the ID of user in your application, also application can pass additional data to Centrifugo inside JWT claims. This chapter describes this authentication mechanism.",source:"@site/docs/server/authentication.md",sourceDirName:"server",slug:"/server/authentication",permalink:"/docs/server/authentication",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/authentication.md",tags:[],version:"current",frontMatter:{id:"authentication",title:"Client JWT authentication"},sidebar:"Guides",previous:{title:"Server API walkthrough",permalink:"/docs/server/server_api"},next:{title:"Channels and namespaces",permalink:"/docs/server/channels"}},u={},p=[{value:"Connection JWT claims",id:"connection-jwt-claims",level:2},{value:"sub",id:"sub",level:3},{value:"exp",id:"exp",level:3},{value:"iat",id:"iat",level:3},{value:"jti",id:"jti",level:3},{value:"aud",id:"aud",level:3},{value:"iss",id:"iss",level:3},{value:"info",id:"info",level:3},{value:"b64info",id:"b64info",level:3},{value:"channels",id:"channels",level:3},{value:"subs",id:"subs",level:3},{value:"Subscribe options:",id:"subscribe-options",level:4},{value:"Override object",id:"override-object",level:4},{value:"meta",id:"meta",level:3},{value:"expire_at",id:"expire_at",level:3},{value:"Connection expiration",id:"connection-expiration",level:2},{value:"Examples",id:"examples",level:2},{value:"Simplest token",id:"simplest-token",level:3},{value:"Token with expiration",id:"token-with-expiration",level:3},{value:"Token with additional connection info",id:"token-with-additional-connection-info",level:3},{value:"Investigating problems with JWT",id:"investigating-problems-with-jwt",level:3},{value:"JSON Web Key support",id:"json-web-key-support",level:2},{value:"Dynamic JWKs endpoint",id:"dynamic-jwks-endpoint",level:2}],d={toc:p};function m(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To authenticate incoming connection (client) Centrifugo can use ",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io/introduction"},"JSON Web Token")," (JWT) passed from the client-side. This way Centrifugo may know the ID of user in your application, also application can pass additional data to Centrifugo inside JWT claims. This chapter describes this authentication mechanism."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you prefer to avoid using JWT then look at ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/proxy"},"the proxy feature"),". It allows proxying connection requests from Centrifugo to your application backend endpoint for authentication details.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Using JWT auth can be nice in terms of massive reconnect scenario. Since authentication information is encoded directly in the token this may help to drastically reduce load on your application session backend. See in our ",(0,i.kt)("a",{parentName:"p",href:"/blog/2020/11/12/scaling-websocket#massive-reconnect"},"blog post"),".")),(0,i.kt)("p",null,"Upon connecting to Centrifugo client should provide a connection JWT with several predefined credential claims. Here is a diagram:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4740).Z,width:"2999",height:"1125"})),(0,i.kt)("p",null,"See more info about working with connection tokens on the client side in ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/client_api#client-connection-token"},"client SDK spec"),"."),(0,i.kt)("p",null,"At the moment Centrifugo supports HMAC, RSA and ECDSA JWT algorithms - i.e. HS256, HS384, HS512, RSA256, RSA384, RSA512, EC256, EC384, EC512."),(0,i.kt)("p",null,"We will use Javascript Centrifugo client here for example snippets for client-side and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jpadilla/pyjwt"},"PyJWT")," Python library to generate a connection token on the backend side."),(0,i.kt)("p",null,"To add HMAC secret key to Centrifugo add ",(0,i.kt)("inlineCode",{parentName:"p"},"token_hmac_secret_key")," to configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "token_hmac_secret_key": "<YOUR-SECRET-STRING-HERE>"\n}\n')),(0,i.kt)("p",null,"To add RSA public key (must be PEM encoded string) add ",(0,i.kt)("inlineCode",{parentName:"p"},"token_rsa_public_key")," option, ex:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "token_rsa_public_key": "-----BEGIN PUBLIC KEY-----\\nMFwwDQYJKoZ..."\n}\n')),(0,i.kt)("p",null,"To add ECDSA public key (must be PEM encoded string) add ",(0,i.kt)("inlineCode",{parentName:"p"},"token_ecdsa_public_key")," option, ex:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "token_ecdsa_public_key": "-----BEGIN PUBLIC KEY-----\\nxyz23adf..."\n}\n')),(0,i.kt)("h2",{id:"connection-jwt-claims"},"Connection JWT claims"),(0,i.kt)("p",null,"For connection JWT Centrifugo uses the some standart claims defined in ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519"},"rfc7519"),", also some custom Centrifugo-specific."),(0,i.kt)("h3",{id:"sub"},"sub"),(0,i.kt)("p",null,"This is a standard JWT claim which must contain an ID of the current application user (",(0,i.kt)("strong",{parentName:"p"},"as string"),"). "),(0,i.kt)("p",null,"If a user is not currently authenticated in an application, but you want to let him connect to Centrifugo anyway \u2013 you can use an empty string as a user ID in ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," claim. This is called anonymous access. In this case, you may need to enable corresponding channel namespace options which enable access to protocol features for anonymous users."),(0,i.kt)("h3",{id:"exp"},"exp"),(0,i.kt)("p",null,"This is a UNIX timestamp seconds when the token will expire. This is a standard JWT claim - all JWT libraries for different languages provide an API to set it."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"exp")," claim is not provided then Centrifugo won't expire connection. When provided special algorithm will find connections with ",(0,i.kt)("inlineCode",{parentName:"p"},"exp")," in the past and activate the connection refresh mechanism. Refresh mechanism allows connection to survive and be prolonged. In case of refresh failure, the client connection will be eventually closed by Centrifugo and won't be accepted until new valid and actual credentials are provided in the connection token."),(0,i.kt)("p",null,"You can use the connection expiration mechanism in cases when you don't want users of your app to be subscribed on channels after being banned/deactivated in the application. Or to protect your users from token leakage (providing a reasonably short time of expiration)."),(0,i.kt)("p",null,"Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"exp")," value wisely, you don't need small values because the refresh mechanism will hit your application often with refresh requests. But setting this value too large can lead to slow user connection deactivation. This is a trade-off."),(0,i.kt)("p",null,"Read more about connection expiration ",(0,i.kt)("a",{parentName:"p",href:"#connection-expiration"},"below"),"."),(0,i.kt)("h3",{id:"iat"},"iat"),(0,i.kt)("p",null,"This is a UNIX time when token was issued (seconds). See ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.6"},"definition in RFC"),". This claim is optional but can be useful together with ",(0,i.kt)("a",{parentName:"p",href:"/docs/pro/token_revocation"},"Centrifugo PRO token revocation features"),"."),(0,i.kt)("h3",{id:"jti"},"jti"),(0,i.kt)("p",null,"This is a token unique ID. See ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7"},"definition in RFC"),". This claim is optional but can be useful together with ",(0,i.kt)("a",{parentName:"p",href:"/docs/pro/token_revocation"},"Centrifugo PRO token revocation features"),"."),(0,i.kt)("h3",{id:"aud"},"aud"),(0,i.kt)("p",null,"By default, Centrifugo does not check JWT audience (",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.3"},"rfc7519 aud")," claim)."),(0,i.kt)("p",null,"But you can force this check by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"token_audience")," string option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "token_audience": "centrifugo"\n}\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"token_audience")," will also affect subscription tokens (used for ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/channel_token_auth"},"channel token authorization"),"). If you need to separate connection token configuration and subscription token configuration check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/channel_token_auth#separate-subscription-token-config"},"separate subscription token config")," feature.")),(0,i.kt)("h3",{id:"iss"},"iss"),(0,i.kt)("p",null,"By default, Centrifugo does not check JWT issuer (",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.1"},"rfc7519 iss")," claim)."),(0,i.kt)("p",null,"But you can force this check by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"token_issuer")," string option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "token_issuer": "my_app"\n}\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"token_issuer")," will also affect subscription tokens (used for ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/channel_token_auth"},"channel token authorization"),"). If you need to separate connection token configuration and subscription token configuration check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/channel_token_auth#separate-subscription-token-config"},"separate subscription token config")," feature.")),(0,i.kt)("h3",{id:"info"},"info"),(0,i.kt)("p",null,"This claim is optional - this is additional information about client connection that can be provided for Centrifugo. This information will be included in presence information, join/leave events, and channel publication if it was published from a client-side."),(0,i.kt)("h3",{id:"b64info"},"b64info"),(0,i.kt)("p",null,"If you are using binary Protobuf protocol you may want info to be custom bytes. Use this field in this case."),(0,i.kt)("p",null,"This field contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"base64")," representation of your bytes. After receiving Centrifugo will decode base64 back to bytes and will embed the result into various places described above."),(0,i.kt)("h3",{id:"channels"},"channels"),(0,i.kt)("p",null,"An optional array of strings with server-side channels to subscribe a client to. See more details about ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/server_subs"},"server-side subscriptions"),"."),(0,i.kt)("h3",{id:"subs"},"subs"),(0,i.kt)("p",null,"An optional map of channels with options. This is like a ",(0,i.kt)("inlineCode",{parentName:"p"},"channels")," claim but allows more control over server-side subscription since every channel can be annotated with info, data, and so on using options."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This claim is called ",(0,i.kt)("inlineCode",{parentName:"p"},"subs")," as a shortcut from subscriptions. The claim ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," described above is a standart JWT claim to provide a user ID (it's a shortcut from subject). While claims have similar names they have different purpose in a connection JWT.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "subs": {\n    "channel1": {\n      "data": {"welcome": "welcome to channel1"}\n    },\n    "channel2": {\n      "data": {"welcome": "welcome to channel2"}\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"subscribe-options"},"Subscribe options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"info"),(0,i.kt)("td",{parentName:"tr",align:null},"JSON object"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom channel info")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"b64info"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom channel info in Base64 - to pass binary channel info")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"data"),(0,i.kt)("td",{parentName:"tr",align:null},"JSON object"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom JSON data to return in subscription context inside Connect reply")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"b64data"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Same as ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," but in Base64 to send binary data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"override"),(0,i.kt)("td",{parentName:"tr",align:null},"Override object"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Allows dynamically override some channel options defined in Centrifugo configuration on a per-connection basis (see below available fields)")))),(0,i.kt)("h4",{id:"override-object"},"Override object"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"presence"),(0,i.kt)("td",{parentName:"tr",align:null},"BoolValue"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Override presence")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"join_leave"),(0,i.kt)("td",{parentName:"tr",align:null},"BoolValue"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Override join_leave")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"position"),(0,i.kt)("td",{parentName:"tr",align:null},"BoolValue"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Override position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"recover"),(0,i.kt)("td",{parentName:"tr",align:null},"BoolValue"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Override recover")))),(0,i.kt)("p",null,"BoolValue is an object like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "value": true/false\n}\n')),(0,i.kt)("h3",{id:"meta"},"meta"),(0,i.kt)("p",null,"Meta is an additional JSON object (ex. ",(0,i.kt)("inlineCode",{parentName:"p"},'{"key": "value"}'),") that will be attached to a connection. Unlike ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," it's never exposed to clients inside presence and join/leave payloads and only accessible on a backend side. It may be included in proxy calls from Centrifugo to the application backend (see ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy_include_connection_meta")," option). Also, there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"connections")," API method in Centrifugo PRO that returns this data in the connection description object."),(0,i.kt)("h3",{id:"expire_at"},"expire_at"),(0,i.kt)("p",null,"By default, Centrifugo looks on ",(0,i.kt)("inlineCode",{parentName:"p"},"exp")," claim to configure connection expiration. In most cases this is fine, but there could be situations where you wish to decouple token expiration check with connection expiration time. As soon as the ",(0,i.kt)("inlineCode",{parentName:"p"},"expire_at")," claim is provided (set) in JWT Centrifugo relies on it for setting connection expiration time (JWT expiration still checked over ",(0,i.kt)("inlineCode",{parentName:"p"},"exp")," though)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"expire_at")," is a UNIX timestamp seconds when the connection should expire."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set it to the future time for expiring connection at some point"),(0,i.kt)("li",{parentName:"ul"},"Set it to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," to disable connection expiration (but still check token ",(0,i.kt)("inlineCode",{parentName:"li"},"exp")," claim).")),(0,i.kt)("h2",{id:"connection-expiration"},"Connection expiration"),(0,i.kt)("p",null,"As said above ",(0,i.kt)("inlineCode",{parentName:"p"},"exp")," claim in a connection token allows expiring client connection at some point in time. Let's look in detail at what happens when Centrifugo detects that the connection is going to expire."),(0,i.kt)("p",null,"First, you should do is enable client expiration mechanism in Centrifugo providing a connection JWT with expiration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import jwt\nimport time\n\ntoken = jwt.encode({"sub": "42", "exp": int(time.time()) + 10*60}, "secret").decode()\n\nprint(token)\n')),(0,i.kt)("p",null,"Let's suppose that you set ",(0,i.kt)("inlineCode",{parentName:"p"},"exp")," field to timestamp that will expire in 10 minutes and the client connected to Centrifugo with this token. During 10 minutes the connection will be kept by Centrifugo. When this time passed Centrifugo gives the connection some time (configured, 25 seconds by default) to refresh its credentials and provide a new valid token with new ",(0,i.kt)("inlineCode",{parentName:"p"},"exp"),"."),(0,i.kt)("p",null,"When a client first connects to Centrifugo it receives the ",(0,i.kt)("inlineCode",{parentName:"p"},"ttl")," value in connect reply. That ",(0,i.kt)("inlineCode",{parentName:"p"},"ttl")," value contains the number of seconds after which the client must send the ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh")," command with new credentials to Centrifugo. Centrifugo clients must handle this ",(0,i.kt)("inlineCode",{parentName:"p"},"ttl")," field and automatically start the refresh process."),(0,i.kt)("p",null,"For example, a Javascript browser client will send an AJAX POST request to your application when it's time to refresh credentials. By default, this request goes to ",(0,i.kt)("inlineCode",{parentName:"p"},"/centrifuge/refresh")," URL endpoint. In response your server must return JSON with a new connection JWT:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'{\n    "token": token\n}\n')),(0,i.kt)("p",null,"So you must just return the same connection JWT for your user when rendering the page initially. But with actual valid ",(0,i.kt)("inlineCode",{parentName:"p"},"exp"),". Javascript client will then send them to Centrifugo server and connection will be refreshed for a time you set in ",(0,i.kt)("inlineCode",{parentName:"p"},"exp"),"."),(0,i.kt)("p",null,"In this case, you know which user wants to refresh its connection because this is just a general request to your app - so your session mechanism will tell you about the user."),(0,i.kt)("p",null,"If you don't want to refresh the connection for this user - just return 403 Forbidden on refresh request to your application backend."),(0,i.kt)("p",null,"Javascript client also has options to hook into a refresh mechanism to implement your custom way of refreshing. Other Centrifugo clients also should have hooks to refresh credentials but depending on client API for this can be different - see specific client docs."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Let's look at how to generate connection HS256 JWT in Python:"),(0,i.kt)("h3",{id:"simplest-token"},"Simplest token"),(0,i.kt)(o.Z,{className:"unique-tabs",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import jwt\n\ntoken = jwt.encode({"sub": "42"}, "secret").decode()\n\nprint(token)\n'))),(0,i.kt)(r.Z,{value:"node",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const jose = require('jose');\n\n(async function main() {\n  const secret = new TextEncoder().encode('secret')\n  const alg = 'HS256'\n\n  const token = await new jose.SignJWT({ sub: '42' })\n    .setProtectedHeader({ alg })\n    .sign(secret)\n\n  console.log(token);\n})();\n")))),(0,i.kt)("p",null,"Note that we use the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"token_hmac_secret_key")," from Centrifugo config here (in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"token_hmac_secret_key")," value is just ",(0,i.kt)("inlineCode",{parentName:"p"},"secret"),"). The only two who must know the HMAC secret key is your application backend which generates JWT and Centrifugo. You should never reveal the HMAC secret key to your users."),(0,i.kt)("p",null,"Then you can pass this token to your client side and use it when connecting to Centrifugo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Using centrifuge-js v3"',title:'"Using',"centrifuge-js":!0,'v3"':!0},'var centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket", {\n  token: token\n});\ncentrifuge.connect();\n')),(0,i.kt)("p",null,"See more details about working with connection tokens and handling token expiration on the client-side in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/client_api#client-connection-token"},"real-time SDK API spec"),"."),(0,i.kt)("h3",{id:"token-with-expiration"},"Token with expiration"),(0,i.kt)("p",null,"HS256 token that will be valid for 5 minutes:"),(0,i.kt)(o.Z,{className:"unique-tabs",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import jwt\nimport time\n\nclaims = {"sub": "42", "exp": int(time.time()) + 5*60}\ntoken = jwt.encode(claims, "secret", algorithm="HS256").decode()\nprint(token)\n'))),(0,i.kt)(r.Z,{value:"node",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const jose = require('jose')\n\n(async function main() {\n  const secret = new TextEncoder().encode('secret')\n  const alg = 'HS256'\n\n  const token = await new jose.SignJWT({ sub: '42' })\n    .setProtectedHeader({ alg })\n    .setExpirationTime('5m')\n    .sign(secret)\n\n  console.log(token);\n})();\n")))),(0,i.kt)("h3",{id:"token-with-additional-connection-info"},"Token with additional connection info"),(0,i.kt)("p",null,"Let's attach user name:"),(0,i.kt)(o.Z,{className:"unique-tabs",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import jwt\n\nclaims = {"sub": "42", "info": {"name": "Alexander Emelin"}}\ntoken = jwt.encode(claims, "secret", algorithm="HS256").decode()\nprint(token)\n'))),(0,i.kt)(r.Z,{value:"node",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const jose = require('jose')\n\n(async function main() {\n  const secret = new TextEncoder().encode('secret')\n  const alg = 'HS256'\n\n  const token = await new jose.SignJWT({ sub: '42', info: {\"name\": \"Alexander Emelin\"} })\n    .setProtectedHeader({ alg })\n    .setExpirationTime('5m')\n    .sign(secret)\n\n  console.log(token);\n})();\n")))),(0,i.kt)("h3",{id:"investigating-problems-with-jwt"},"Investigating problems with JWT"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io/"},"jwt.io")," site to investigate the contents of your tokens. Also, server logs usually contain some useful information."),(0,i.kt)("h2",{id:"json-web-key-support"},"JSON Web Key support"),(0,i.kt)("p",null,"Centrifugo supports JSON Web Key (JWK) ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7517"},"spec"),". This means that it's possible to improve JWT security by providing an endpoint to Centrifugo from where to load JWK (by looking at ",(0,i.kt)("inlineCode",{parentName:"p"},"kid")," header of JWT)."),(0,i.kt)("p",null,"A mechanism can be enabled by providing ",(0,i.kt)("inlineCode",{parentName:"p"},"token_jwks_public_endpoint")," string option to Centrifugo (HTTP address)."),(0,i.kt)("p",null,"As soon as ",(0,i.kt)("inlineCode",{parentName:"p"},"token_jwks_public_endpoint")," set all tokens will be verified using JSON Web Key Set loaded from JWKS endpoint. This makes it impossible to use non-JWK based tokens to connect and subscribe to private channels."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Read a tutorial in our blog about ",(0,i.kt)("a",{parentName:"p",href:"/blog/2023/03/31/keycloak-sso-centrifugo"},"using Centrifugo with Keycloak SSO"),". In that case connection tokens are verified using public key loaded from the JWKS endpoint of Keycloak.")),(0,i.kt)("p",null,"At the moment Centrifugo caches keys loaded from an endpoint for one hour."),(0,i.kt)("p",null,"Centrifugo will load keys from JWKS endpoint by issuing GET HTTP request with 1 second timeout and one retry in case of failure (not configurable at the moment)."),(0,i.kt)("p",null,"Centrifugo supports the following key types (",(0,i.kt)("inlineCode",{parentName:"p"},"kty"),") for JWKs tokens:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RSA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EC")," (since Centrifugo v5.1.0)")),(0,i.kt)("p",null,"Once enabled JWKS used for both connection and channel subscription tokens."),(0,i.kt)("h2",{id:"dynamic-jwks-endpoint"},"Dynamic JWKs endpoint"),(0,i.kt)("p",null,"It's possible to extract variables from ",(0,i.kt)("inlineCode",{parentName:"p"},"iss")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"aud")," JWT claims using ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/regexp"},"Go regexp")," named groups, then use variables extracted during ",(0,i.kt)("inlineCode",{parentName:"p"},"iss")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"aud")," matching to construct a JWKS endpoint dynamically upon token validation. In this case JWKS endpoint may be set in config as template."),(0,i.kt)("p",null,"To achieve this Centrifugo provides two additional options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token_issuer_regex")," - match JWT issuer (",(0,i.kt)("inlineCode",{parentName:"li"},"iss")," claim) against this regex, extract named groups to variables, variables are then available for jwks endpoint construction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token_audience_regex")," - match JWT audience (",(0,i.kt)("inlineCode",{parentName:"li"},"aud")," claim) against this regex, extract named groups to variables, variables are then available for jwks endpoint construction.")),(0,i.kt)("p",null,"Let's look at the example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token_issuer_regex": "https://example.com/auth/realms/(?P<realm>[A-z]+)",\n  "token_jwks_public_endpoint": "https://keycloak:443/{{realm}}/protocol/openid-connect/certs",\n}\n')),(0,i.kt)("p",null,"To use variable in ",(0,i.kt)("inlineCode",{parentName:"p"},"token_jwks_public_endpoint")," it must be wrapped in ",(0,i.kt)("inlineCode",{parentName:"p"},"{{")," ",(0,i.kt)("inlineCode",{parentName:"p"},"}}"),"."),(0,i.kt)("p",null,"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"token_issuer_regex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"token_audience_regex")," make sure ",(0,i.kt)("inlineCode",{parentName:"p"},"token_issuer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"token_audience")," not used in the config - otherwise and error will be returned on Centrifugo start."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"token_issuer_regex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"token_audience_regex")," will also affect subscription tokens (used for ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/channel_token_auth"},"channel token authorization"),"). If you need to separate connection token configuration and subscription token configuration check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/channel_token_auth#separate-subscription-token-config"},"separate subscription token config")," feature.")))}m.isMDXComponent=!0},4740:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connection_token-f9073f4996586518997b0568fce5a6b8.png"}}]);