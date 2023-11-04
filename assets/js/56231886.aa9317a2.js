"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={id:"quickstart",sidebar_label:"Quickstart tutorial",title:"Quickstart tutorial \u23f1\ufe0f"},r=void 0,l={unversionedId:"getting-started/quickstart",id:"version-3/getting-started/quickstart",title:"Quickstart tutorial \u23f1\ufe0f",description:"Here we will build a very simple browser application with Centrifugo. It works in a way that users connect to Centrifugo over WebSocket, subscribe to a channel, and start receiving all messages published to that channel. In our case, we will send a counter value to all channel subscribers to update it in all open browser tabs in real-time.",source:"@site/versioned_docs/version-3/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/3/getting-started/quickstart",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/getting-started/quickstart.md",tags:[],version:"3",frontMatter:{id:"quickstart",sidebar_label:"Quickstart tutorial",title:"Quickstart tutorial \u23f1\ufe0f"},sidebar:"Introduction",previous:{title:"Install Centrifugo",permalink:"/docs/3/getting-started/installation"},next:{title:"Main highlights",permalink:"/docs/3/getting-started/highlights"}},s={},c=[{value:"More examples",id:"more-examples",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here we will build a very simple browser application with Centrifugo. It works in a way that users connect to Centrifugo over WebSocket, subscribe to a channel, and start receiving all messages published to that channel. In our case, we will send a counter value to all channel subscribers to update it in all open browser tabs in real-time."),(0,i.kt)("p",null,"First you need to ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/getting-started/installation"},"install Centrifugo"),". Below in this example, we will use a binary file release for simplicity. Once you have Centrifugo available on your machine you can generate minimal required configuration file with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./centrifugo genconfig\n")),(0,i.kt)("p",null,"This helper command will generate ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," file in the working directory with content like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "token_hmac_secret_key": "46b38493-147e-4e3f-86e0-dc5ec54f5133",\n  "admin_password": "ad0dff75-3131-4a02-8d64-9279b4f1c57b",\n  "admin_secret": "583bc4b7-0fa5-4c4a-8566-16d3ce4ad401",\n  "api_key": "aaaf202f-b5f8-4b34-bf88-f6c03a1ecda6",\n  "allowed_origins": []\n}\n')),(0,i.kt)("p",null,"Now we can start a server. Let's start it with a built-in admin web interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"./centrifugo --config=config.json --admin\n")),(0,i.kt)("p",null,"We could also enable the admin web interface by not using ",(0,i.kt)("inlineCode",{parentName:"p"},"--admin")," flag but by adding ",(0,i.kt)("inlineCode",{parentName:"p"},'"admin": true')," option to the JSON configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "token_hmac_secret_key": "46b38493-147e-4e3f-86e0-dc5ec54f5133",\n  "admin": true,\n  "admin_password": "ad0dff75-3131-4a02-8d64-9279b4f1c57b",\n  "admin_secret": "583bc4b7-0fa5-4c4a-8566-16d3ce4ad401",\n  "api_key": "aaaf202f-b5f8-4b34-bf88-f6c03a1ecda6",\n  "allowed_origins": []\n}\n')),(0,i.kt)("p",null,"And then running only with a path to a configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"./centrifugo --config=config.json\n")),(0,i.kt)("p",null,"Now open ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000"),". You should see Centrifugo admin web panel. Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"admin_password")," value from the configuration file to log in."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin web panel",src:n(9260).Z,width:"2896",height:"1448"})),(0,i.kt)("p",null,"Inside the admin panel, you should see that one Centrifugo node is running, and it does not have connected clients."),(0,i.kt)("p",null,"Now let's create ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file with our simple app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<html>\n    <head>\n        <title>Centrifugo quick start</title>\n    </head>\n    <body>\n        <div id="counter">-</div>\n        <script src="https://cdn.jsdelivr.net/gh/centrifugal/centrifuge-js@2.8.4/dist/centrifuge.min.js"><\/script>\n        <script type="text/javascript">\n            const container = document.getElementById(\'counter\')\n            const centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket");\n            centrifuge.setToken("<TOKEN>");\n            \n            centrifuge.on(\'connect\', function(ctx) {\n                console.log("connected", ctx);\n            });\n\n            centrifuge.on(\'disconnect\', function(ctx) {\n                console.log("disconnected", ctx);\n            });\n\n            centrifuge.subscribe("channel", function(ctx) {\n                container.innerHTML = ctx.data.value;\n                document.title = ctx.data.value;\n            });\n\n            centrifuge.connect();\n        <\/script>\n    </body>\n</html>\n')),(0,i.kt)("p",null,"Note that we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"centrifuge-js")," 2.8.4 in this example, you better use its latest version at the moment of reading this tutorial."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," above we created an instance of a client (called ",(0,i.kt)("inlineCode",{parentName:"p"},"Centrifuge"),") passing Centrifugo default WebSocket endpoint address to it, then we subscribed to a channel called ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," and provided a callback function to process incoming real-time messages. Then we called ",(0,i.kt)("inlineCode",{parentName:"p"},".connect()")," method to start a WebSocket connection. "),(0,i.kt)("p",null,"Now you need to serve this file with an HTTP server. In a real-world Javascript application, you will serve your HTML files with a web server of your choice \u2013 but for this simple example we can use a simple built-in Centrifugo static file server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./centrifugo serve --port 3000\n")),(0,i.kt)("p",null,"Alternatively, if you have Python 3 installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m http.server 3000\n")),(0,i.kt)("p",null,"These commands start a simple static file web server that serves the current directory on port 3000. Make sure you still have Centrifugo server running. Open ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"."),(0,i.kt)("p",null,"Now if you look at browser developer tools or in Centrifugo logs you will notice that a connection can not be successfully established:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2021-09-01 10:17:33 [INF] request Origin is not authorized due to empty allowed_origins origin=http://localhost:3000\n")),(0,i.kt)("p",null,"That's because we have not set ",(0,i.kt)("inlineCode",{parentName:"p"},"allowed_origins")," in the configuration. Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"allowed_origins")," like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  ...\n  "allowed_origins": [\n    "http://localhost:3000"\n  ]\n}\n')),(0,i.kt)("p",null,"Allowed origins is a security option for request originating from web browsers \u2013 see ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#allowed_origins"},"more details")," in server configuration docs. Restart Centrifugo after modifying ",(0,i.kt)("inlineCode",{parentName:"p"},"allowed_origins")," in a configuration file."),(0,i.kt)("p",null,"Now if you reload a browser window with an application you should see new information logs in server output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'2021-02-26 17:47:47 [INF] invalid connection token error="jwt: token format is not valid" client=45a1b8f4-d6dc-4679-9927-93e41c14ad93\n2021-02-26 17:47:47 [INF] disconnect after handling command client=45a1b8f4-d6dc-4679-9927-93e41c14ad93 command="id:1 params:\\"{\\\\\\"token\\\\\\":\\\\\\"<TOKEN>\\\\\\"}\\" " reason="invalid token" user=\n')),(0,i.kt)("p",null,"We still can not connect. That's because the client should provide a valid JWT (JSON Web Token) to authenticate itself. This token ",(0,i.kt)("strong",{parentName:"p"},"must be generated on your backend")," and passed to a client-side (over template variables or using separate AJAX call \u2013 whatever way you prefer). Since in our simple example we don't have an application backend we can quickly generate an example token for a user using ",(0,i.kt)("inlineCode",{parentName:"p"},"centrifugo")," sub-command ",(0,i.kt)("inlineCode",{parentName:"p"},"gentoken"),". Like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./centrifugo gentoken -u 123722\n")),(0,i.kt)("p",null,"\u2013 where ",(0,i.kt)("inlineCode",{parentName:"p"},"-u")," flag sets user ID. The output should be like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HMAC SHA-256 JWT for user 123722 with expiration TTL 168h0m0s:\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM3MjIiLCJleHAiOjE1OTAxODYzMTZ9.YMJVJsQbK_p1fYFWkcoKBYr718AeavAk3MAYvxcMk0M\n")),(0,i.kt)("p",null,"\u2013 you will have another token value since this one is based on randomly generated ",(0,i.kt)("inlineCode",{parentName:"p"},"token_hmac_secret_key")," from the configuration file we created at the beginning of this tutorial. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/server/authentication"},"authentication docs")," for information about proper token generation in real app."),(0,i.kt)("p",null,"Now we can copy generated HMAC SHA-256 JWT and paste it into ",(0,i.kt)("inlineCode",{parentName:"p"},"centrifuge.setToken")," call instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"<TOKEN>")," placeholder in ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file. I.e.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'centrifuge.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM3MjIiLCJleHAiOjE1OTAxODYzMTZ9.YMJVJsQbK_p1fYFWkcoKBYr718AeavAk3MAYvxcMk0M");\n')),(0,i.kt)("p",null,"That's it! If you reload your browser tab \u2013 the connection will be successfully established and the client will subscribe to a channel."),(0,i.kt)("p",null,"Open developer tools and look at WebSocket frames panel, you should see sth like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connected",src:n(3347).Z,width:"2872",height:"1290"})),(0,i.kt)("p",null,"OK, the last thing we need to do here is to publish a new counter value to a channel and make sure our app works properly."),(0,i.kt)("p",null,"We can do this over Centrifugo API sending an HTTP request to default API endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/api"),", but let's do this over the admin web panel first."),(0,i.kt)("p",null,"Open Centrifugo admin web panel in another browser tab (",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/"),") and go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions")," section. Select publish action, insert channel name that you want to publish to \u2013 in our case this is a string ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," and insert into ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," area JSON like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": 1\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Admin publish",src:n(1326).Z,width:"2256",height:"1146"})),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit")," button and check out the application browser tab \u2013 counter value must be immediately received and displayed."),(0,i.kt)("p",null,"Open several browser tabs with our app and make sure all tabs receive a message as soon as you publish it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Message received",src:n(2861).Z,width:"2478",height:"1306"})),(0,i.kt)("p",null,"BTW, let's also look at how you can publish data to channel over Centrifugo API from a terminal using ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," tool:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey aaaf202f-b5f8-4b34-bf88-f6c03a1ecda6" \\\n  --request POST \\\n  --data \'{"method": "publish", "params": {"channel": "channel", "data": {"value": 2}}}\' \\\n  http://localhost:8000/api\n')),(0,i.kt)("p",null,"\u2013 where for ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header we set ",(0,i.kt)("inlineCode",{parentName:"p"},"api_key")," value from Centrifugo config file generated above."),(0,i.kt)("p",null,"We did it! We built the simplest browser real-time app with Centrifugo and its Javascript client. It does not have a backend, it's not very useful, to be honest, but it should give you an insight on how to start working with Centrifugo server. Read more about Centrifugo server in the next documentations chapters \u2013 it can do much much more than we just showed here. ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/getting-started/integration"},"Integration guide")," describes a process of idiomatic Centrifugo integration with your application backend."),(0,i.kt)("h3",{id:"more-examples"},"More examples"),(0,i.kt)("p",null,"Several more examples are located on Github \u2013 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/examples"},"check out this repo"),"."),(0,i.kt)("p",null,"Also, check out ",(0,i.kt)("a",{parentName:"p",href:"/blog"},"our blog")," with several tutorials."))}u.isMDXComponent=!0},9260:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quick_start_admin-3a12aa4705d288a373385439769dca64.png"},3347:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quick_start_connected-5451759f67df727f1acac355bee6090d.png"},2861:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quick_start_message-367c9f516d7cc6803a1075be28469bf8.png"},1326:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quick_start_publish-1533c714ac1f760e270a5e1851f2ebb9.png"}}]);