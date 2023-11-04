"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[4282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={id:"tls",title:"Configure TLS"},o=void 0,l={unversionedId:"server/tls",id:"server/tls",title:"Configure TLS",description:"TLS/SSL layer is very important not only for securing your connections but also to increase a",source:"@site/docs/server/tls.md",sourceDirName:"server",slug:"/server/tls",permalink:"/docs/server/tls",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/tls.md",tags:[],version:"current",frontMatter:{id:"tls",title:"Configure TLS"},sidebar:"Guides",previous:{title:"Load balancing",permalink:"/docs/server/load_balancing"},next:{title:"Error and disconnect codes",permalink:"/docs/server/codes"}},s={},c=[{value:"Using crt and key files",id:"using-crt-and-key-files",level:3},{value:"Automatic certificates",id:"automatic-certificates",level:3},{value:"TLS for GRPC API",id:"tls-for-grpc-api",level:3},{value:"TLS for GRPC unidirectional stream",id:"tls-for-grpc-unidirectional-stream",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"TLS/SSL layer is very important not only for securing your connections but also to increase a\nchance to establish Websocket connection."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In most situations you better put TLS termination task on your reverse proxy/load balancing software such as Nginx. This can be a good thing for performance.")),(0,i.kt)("p",null,"There are situations though when you want to serve secure connections by Centrifugo itself."),(0,i.kt)("p",null,"There are two ways to do this: using TLS certificate ",(0,i.kt)("inlineCode",{parentName:"p"},"cert")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," files that you've got\nfrom your CA provider or using automatic certificate handling via ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8555"},"ACME")," provider (only ",(0,i.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," at this moment)."),(0,i.kt)("h3",{id:"using-crt-and-key-files"},"Using crt and key files"),(0,i.kt)("p",null,"In first way you already have ",(0,i.kt)("inlineCode",{parentName:"p"},"cert")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," files. For development you can create self-signed\ncertificate - see ",(0,i.kt)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/ssl-certificate-self"},"this instruction")," as\nexample."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  ...\n  "tls": true,\n  "tls_key": "server.key",\n  "tls_cert": "server.crt"\n}\n')),(0,i.kt)("p",null,"And run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./centrifugo --config=config.json\n")),(0,i.kt)("h3",{id:"automatic-certificates"},"Automatic certificates"),(0,i.kt)("p",null,"For automatic certificates from Let's Encrypt add into configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  ...\n  "tls_autocert": true,\n  "tls_autocert_host_whitelist": "www.example.com",\n  "tls_autocert_cache_dir": "/tmp/certs",\n  "tls_autocert_email": "user@example.com",\n  "tls_autocert_http": true,\n  "tls_autocert_http_addr": ":80"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tls_autocert")," (boolean) says Centrifugo that you want automatic certificate handling using ACME provider."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tls_autocert_host_whitelist")," (string) is a string with your app domain address. This can be comma-separated\nlist. It's optional but recommended for extra security."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tls_autocert_cache_dir")," (string) is a path to a folder to cache issued certificate files. This is optional\nbut will increase performance."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tls_autocert_email")," (string) is optional - it's an email address ACME provider will send notifications\nabout problems with your certificates."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tls_autocert_http")," (boolean) is an option to handle http_01 ACME challenge on non-TLS port."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tls_autocert_http_addr")," (string) can be used to set address for handling http_01 ACME challenge (default is ",(0,i.kt)("inlineCode",{parentName:"p"},":80"),")"),(0,i.kt)("p",null,"When configured correctly and your domain is valid (",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," will not work) - certificates\nwill be retrieved on first request to Centrifugo."),(0,i.kt)("p",null,"Also Let's Encrypt certificates will be automatically renewed."),(0,i.kt)("p",null,"There are two options that allow Centrifugo to support TLS client connections from older\nbrowsers such as Chrome 49 on Windows XP and IE8 on XP:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tls_autocert_force_rsa")," - this is a boolean option, by default ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),". When enabled it forces\nautocert manager generate certificates with 2048-bit RSA keys."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tls_autocert_server_name")," - string option, allows to set server name for client handshake hello.\nThis can be useful to deal with old browsers without SNI support - see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/centrifugal/centrifugo/issues/144#issuecomment-279393819"},"comment"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"grpc_api_tls_disable")," boolean flag allows to disable TLS for GRPC API server but keep it on for HTTP endpoints."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"uni_grpc_tls_disable")," boolean flag allows to disable TLS for GRPC uni stream server but keep it on for HTTP endpoints."),(0,i.kt)("h3",{id:"tls-for-grpc-api"},"TLS for GRPC API"),(0,i.kt)("p",null,"You can provide custom certificate files to configure TLS for GRPC API server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grpc_api_tls")," boolean flag enables TLS for GRPC API server, requires an X509 certificate and a key file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grpc_api_tls_cert")," string provides a path to an X509 certificate file for GRPC API server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grpc_api_tls_key")," string provides a path to an X509 certificate key for GRPC API server")),(0,i.kt)("h3",{id:"tls-for-grpc-unidirectional-stream"},"TLS for GRPC unidirectional stream"),(0,i.kt)("p",null,"You can provide custom certificate files to configure TLS for GRPC unidirectional stream endpoint."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uni_grpc_tls")," boolean flag enables TLS for GRPC server, requires an X509 certificate and a key file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uni_grpc_tls_cert")," string provides a path to an X509 certificate file for GRPC uni stream server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uni_grpc_tls_key")," string provides a path to an X509 certificate key for GRPC uni stream server")))}u.isMDXComponent=!0}}]);