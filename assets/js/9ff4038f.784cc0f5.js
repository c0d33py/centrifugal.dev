"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=o,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={id:"introduction",title:"Centrifugo introduction"},a=void 0,s={unversionedId:"getting-started/introduction",id:"getting-started/introduction",title:"Centrifugo introduction",description:"Centrifugo is an open-source scalable real-time messaging server. Centrifugo can instantly deliver messages to application online users connected over supported transports (WebSocket, HTTP-streaming, SSE/EventSource, WebTransport, GRPC, SockJS). Centrifugo has the concept of a channel \u2013 so it's a user-facing PUB/SUB server.",source:"@site/docs/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/docs/getting-started/introduction",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/getting-started/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Centrifugo introduction"},sidebar:"Introduction",next:{title:"Join community",permalink:"/docs/getting-started/community"}},c={},l=[{value:"Background",id:"background",level:2}],u={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/logo_animated_no_accel.svg",width:"100px",height:"100px",align:"left",style:{marginRight:"10px",float:"left"}}),(0,o.kt)("p",null,"Centrifugo is an open-source scalable real-time messaging server. Centrifugo can instantly deliver messages to application online users connected over supported transports (WebSocket, HTTP-streaming, SSE/EventSource, WebTransport, GRPC, SockJS). Centrifugo has the concept of a channel \u2013 so it's a user-facing PUB/SUB server."),(0,o.kt)("p",null,"Centrifugo is language-agnostic and can be used to build chat apps, live comments, multiplayer games, real-time data visualizations, collaborative tools, etc. in combination with any backend. It is well suited for modern architectures and allows decoupling the business logic from the real-time transport layer."),(0,o.kt)("p",null,"Several official client SDKs for browser and mobile development wrap the bidirectional protocol. In addition, Centrifugo supports a unidirectional approach for simple use cases with no SDK dependency."),(0,o.kt)("admonition",{title:"Real-time?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"By real-time, we indicate a soft real-time. Due to network latencies, garbage collection cycles, and so on, the delay of a delivered message can be up to several hundred milliseconds or higher.")),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(740).Z,width:"2000",height:"1068"})),(0,o.kt)("p",null,"Centrifugo was born more than a decade ago to help applications whose server-side code was written in a language or framework lacking built-in concurrency support. In such cases, managing persistent connections can be a real headache, usually resolvable only by altering the technology stack and investing time in developing a production-ready solution."),(0,o.kt)("p",null,"For instance, frameworks like Django, Flask, Yii, Laravel, Ruby on Rails, and others offer limited or suboptimal support for handling numerous persistent connections for real-time messaging tasks."),(0,o.kt)("p",null,"Here, Centrifugo provides a straightforward and non-obtrusive way to introduce real-time updates and manage lots of persistent connections without radical changes in the application backend architecture. Developers can continue to work on the application's backend using their preferred language or framework, and keep the existing architecture. Just let Centrifugo deal with persistent connections and be a real-time messaging transport layer."),(0,o.kt)("p",null,"These days, Centrifugo offers advanced and unique features that can significantly simplify a developer's workload and save months (if not years) of development time, even if the application's backend is built with an asynchronous concurrent language or framework. One example is that Centrifugo has built-in support for scaling across numerous machines to accommodate more connections while ensuring that channel subscribers on different Centrifugo nodes receive all publications. Or the fact that Centrifugo has a bunch of real-time SDKs which provide subscription multiplexing over WebSocket connection, robust reconnect logic, built-in ping-pong, etc. And there are more things to mention: the documentation uncovers features step by step."),(0,o.kt)("p",null,"Centrifugo fits well with modern architectures and can serve as a universal real-time component, regardless of the application's technology stack. It stands as a viable self-hosted alternative to cloud solutions like Pusher, Ably, or Pubnub."))}d.isMDXComponent=!0},740:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bg_cat-4454fbaae0446c3b1964e06821dd378b.jpg"}}]);