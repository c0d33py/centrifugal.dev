"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[4964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={id:"rate_limiting",title:"Operation rate limits"},o=void 0,l={unversionedId:"pro/rate_limiting",id:"pro/rate_limiting",title:"Operation rate limits",description:"The rate limit feature allows limiting the number of operations each connection or user can issue during a configured time interval. This is useful to protect the system from misusing, detecting and disconnecting abusive or broken (due to the bug in the frontend application) clients which add unwanted load on a server.",source:"@site/docs/pro/rate_limiting.md",sourceDirName:"pro",slug:"/pro/rate_limiting",permalink:"/docs/pro/rate_limiting",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/rate_limiting.md",tags:[],version:"current",frontMatter:{id:"rate_limiting",title:"Operation rate limits"},sidebar:"Pro",previous:{title:"Analytics with ClickHouse",permalink:"/docs/pro/analytics"},next:{title:"Push notification API",permalink:"/docs/pro/push_notifications"}},s={},c=[{value:"In-memory per connection rate limit",id:"in-memory-per-connection-rate-limit",level:2},{value:"In-memory per user rate limit",id:"in-memory-per-user-rate-limit",level:2},{value:"Redis per user rate limit",id:"redis-per-user-rate-limit",level:2},{value:"Disconnecting abusive or misbehaving connections",id:"disconnecting-abusive-or-misbehaving-connections",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The rate limit feature allows limiting the number of operations each connection or user can issue during a configured time interval. This is useful to protect the system from misusing, detecting and disconnecting abusive or broken (due to the bug in the frontend application) clients which add unwanted load on a server."),(0,r.kt)("p",null,"With rate limit properly configured you can protect your Centrifugo installation to some degree without sophisticated third-party solution. Centrifugo PRO protection works best in combination with protection on infrastructure level though."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Throttling",src:n(4195).Z,width:"4258",height:"939"})),(0,r.kt)("h2",{id:"in-memory-per-connection-rate-limit"},"In-memory per connection rate limit"),(0,r.kt)("p",null,"In-memory rate limit is an efficient way to limit number of operations allowed on a per-connection basis \u2013 i.e. inside each individual real-time connection. Our rate limit implementation uses ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Token_bucket"},"token bucket")," algorithm internally."),(0,r.kt)("p",null,"The list of operations which can be rate limited on a per-connection level is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subscribe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"publish")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"history")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"presence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"presence_stats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sub_refresh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rpc")," (with optional method resolution)")),(0,r.kt)("p",null,"In addition, Centrifugo allows defining two special buckets containers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"total")," \u2013 define it to limit the total number of commands per interval (all commands sent from client count), these buckets will always be checked if defined, every command from the client always consumes token from ",(0,r.kt)("inlineCode",{parentName:"li"},"total")," buckets"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default")," - define it if you don't want to configure some command buckets explicitly, default buckets will be used in case command buckets is not configured explicitly.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "client_command_rate_limit": {\n        "enabled": true,\n\n        "default": {\n            "buckets": [\n                {\n                    "interval": "1s",\n                    "rate": 60\n                },\n            ]\n        },\n        "total": {\n            "buckets": [\n                {\n                    "interval": "1s",\n                    "rate": 20\n                },\n                {\n                    "interval": "60s",\n                    "rate": 50\n                },\n            ]\n        },\n        "publish": {\n            "buckets": [\n                {\n                    "interval": "1s",\n                    "rate": 1\n                },\n            ]\n        },\n        "rpc": {\n            "buckets": [\n                {\n                    "interval": "1s",\n                    "rate": 10\n                }\n            ],\n            "method_override": [\n                {\n                    "method": "update_user_status",\n                    "buckets": [\n                        {\n                            "interval": "20s",\n                            "rate": 1\n                        }\n                    ]\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Centrifugo real-time SDKs written in a way that if client receives an error during connect \u2013 it will try to reconnect to a server with backoff algorithm. The same for subscribing to channels (i.e. error from subscribe command) \u2013 subscription request will be retried with a backoff. Refresh and subscription refresh will be also retried automatically by SDK upon errors after in several seconds. Retries of other commands should be handled manually from the client side if needed \u2013 though usually you should choose rate limit limits in a way that normal users of your app never hit the limits.")),(0,r.kt)("h2",{id:"in-memory-per-user-rate-limit"},"In-memory per user rate limit"),(0,r.kt)("p",null,"Another type of rate limit in Centrifugo PRO is a per user ID in-memory rate limit. Like per client rate limit this one is also very efficient since also uses in-memory token buckets. The difference is that instead of rate limit per individual client this type of rate limit takes user ID into account."),(0,r.kt)("p",null,"This type of rate limit only checks commands coming from authenticated users \u2013 i.e. with non-empty user ID set. Requests from anonymous users can't be rate limited with it."),(0,r.kt)("p",null,"The list of operations which can be rate limited is similar to the in-memory rate limit described above. But with ",(0,r.kt)("strong",{parentName:"p"},"additional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," method:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"total")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subscribe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"publish")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"history")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"presence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"presence_stats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sub_refresh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rpc")," (with optional method resolution)")),(0,r.kt)("p",null,"The configuration is very similar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "user_command_rate_limit": {\n        "enabled": true,\n\n        "default": {\n            "buckets": [\n                {\n                    "interval": "1s",\n                    "rate": 60\n                },\n            ]\n        },\n        "publish": {\n            "buckets": [\n                {\n                    "interval": "1s",\n                    "rate": 1\n                }\n            ]\n        },\n        "rpc": {\n            "buckets": [\n                {\n                    "interval": "1s",\n                    "rate": 10\n                }\n            ],\n            "method_override": [\n                {\n                    "method": "update_user_status",\n                    "buckets": [\n                        {\n                            "interval": "20s",\n                            "rate": 1\n                        }\n                    ]\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"redis-per-user-rate-limit"},"Redis per user rate limit"),(0,r.kt)("p",null,"The next type of rate limit in Centrifugo PRO is a distributed per user ID rate limit with Redis as a bucket state storage. In this case limits are global for the entire Centrifugo cluster. If one user executed two commands on different Centrifugo nodes, Centrifugo consumes two tokens from the same bucket kept in Redis. Since this rate limit goes to Redis to check limits, it adds some latency to a command processing. Our implementation tries to provide good throughput characteristics though \u2013 in our tests single Redis instance can handle more than 100k limit check requests per second. And it's possible to scale Redis in the same ways as for Centrifugo Redis Engine. "),(0,r.kt)("p",null,"This type of rate limit only checks commands coming from authenticated users \u2013 i.e. with non-empty user ID set. Requests from anonymous users can't be rate limited with it. The implementation also uses ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Token_bucket"},"token bucket")," algorithm internally."),(0,r.kt)("p",null,"The list of operations which can be rate limited is similar to the in-memory user command rate limit described above. But ",(0,r.kt)("strong",{parentName:"p"},"without")," special bucket ",(0,r.kt)("inlineCode",{parentName:"p"},"total"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subscribe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"publish")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"history")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"presence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"presence_stats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sub_refresh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rpc")," (with optional method resolution)")),(0,r.kt)("p",null,"The configuration is very similar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "redis_user_command_rate_limit": {\n        "enabled": true,\n        "redis_address": "localhost:6379",\n\n        "default": {\n            "buckets": [\n                {\n                    "interval": "1s",\n                    "rate": 60\n                },\n            ]\n        },\n        "publish": {\n            "buckets": [\n                {\n                    "interval": "1s",\n                    "rate": 1\n                }\n            ]\n        },\n        "rpc": {\n            "buckets": [\n                {\n                    "interval": "1s",\n                    "rate": 10\n                }\n            ],\n            "method_override": [\n                {\n                    "method": "update_user_status",\n                    "buckets": [\n                        {\n                            "interval": "20s",\n                            "rate": 1\n                        }\n                    ]\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Redis configuration for rate limit feature matches Centrifugo Redis engine configuration. So Centrifugo supports client-side consistent sharding to scale Redis, Redis Sentinel, Redis Cluster for rate limit feature too."),(0,r.kt)("p",null,"It's also possible to reuse Centrifugo Redis engine by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"use_redis_from_engine")," option instead of custom rate limit Redis configuration declaration, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "redis",\n    "redis_address": "localhost:6379",\n    "redis_user_command_rate_limit": {\n        "enabled": true,\n        "use_redis_from_engine": true,\n        ...\n    }\n}\n')),(0,r.kt)("p",null,"In this case rate limit will simply connect to Redis instances configured for an Engine."),(0,r.kt)("h2",{id:"disconnecting-abusive-or-misbehaving-connections"},"Disconnecting abusive or misbehaving connections"),(0,r.kt)("p",null,"Above we showed how you can define rate limit strategies to protect server resources and prevent execution of many commands inside the connection and from certain user."),(0,r.kt)("p",null,"But there are scenarios when abusive or broken connections may generate a significant load on the server just by calling commands and getting error responses due to rate limit or due to other reasons (like malformed command). Centrifugo PRO provides a way to configure error limits per connection to deal with this case."),(0,r.kt)("p",null,"Error limits are configured as in-memory buckets operating on a per-connection level. When these buckets are full due to lots of errors for an individual connection Centrifugo disconnects the client (with advice to not reconnect, so our SDKs may follow it). This way it's possible to get rid of the connection and rely on HTTP infrastracture tools to deal with client reconnections. Since WebSocket or other our transports (except unidirectional GRPC, but it's usually not available to the public port) are HTTP-based (or start with HTTP request in WebSocket Upgrade case) \u2013 developers can use Nginx ",(0,r.kt)("inlineCode",{parentName:"p"},"limit_req_zone")," directive, Cloudflare rules, iptables, and so on, to protect Centrifugo from unwanted connections."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Centrifugo PRO does not count internal errors for the error limit buckets \u2013 as internal errors is usually not a client's fault.")),(0,r.kt)("p",null,"The configuration on error limits per connection may look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "client_error_limits": {\n        "enabled": true,\n        "total": {\n            "buckets" : [\n                {\n                    "interval": "5s",\n                    "rate": 20\n                }\n            ]\n        }\n    }\n}\n')))}m.isMDXComponent=!0},4195:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/throttling-d57fa1b7f57a68536205482aab2a55cf.png"}}]);