"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5146],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6313:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],s={title:"Centrifugo integration with NodeJS tutorial",tags:["centrifugo","tutorial","proxy"],description:"In this tutorial we are integrating Centrifugo with NodeJS. We are using Centrifugo connect proxy feature to authenticate connections over standard Express.js session middleware.",author:"Alexander Emelin",authorTitle:"Creator of Centrifugo",authorImageURL:"https://github.com/FZambia.png",image:"/img/keyboard.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/2021/10/18/integrating-with-nodejs",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/blog/2021-10-18-integrating-with-nodejs.md",source:"@site/blog/2021-10-18-integrating-with-nodejs.md",title:"Centrifugo integration with NodeJS tutorial",description:"In this tutorial we are integrating Centrifugo with NodeJS. We are using Centrifugo connect proxy feature to authenticate connections over standard Express.js session middleware.",date:"2021-10-18T00:00:00.000Z",formattedDate:"October 18, 2021",tags:[{label:"centrifugo",permalink:"/blog/tags/centrifugo"},{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"proxy",permalink:"/blog/tags/proxy"}],readingTime:6.475,truncated:!0,nextItem:{title:"Centrifugo v3 released",permalink:"/blog/2021/08/31/hello-centrifugo-v3"}},c=[{value:"What we are building",id:"what-we-are-building",children:[]},{value:"Creating Express.js app",id:"creating-expressjs-app",children:[]},{value:"Starting Centrifugo",id:"starting-centrifugo",children:[]},{value:"Adding Nginx",id:"adding-nginx",children:[]},{value:"Send real-time messages",id:"send-real-time-messages",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],u={toc:c};function d(e){var n=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Centrifuge",src:t(1815).Z})),(0,o.kt)("p",null,"Centrifugo is a scalable real-time messaging server in a language-agnostic way. In this tutorial we will integrate Centrifugo with NodeJS backend using a connect proxy feature of Centrifugo for user authentication and native session middleware of ExpressJS framework."),(0,o.kt)("p",null,"Why would NodeJS developers want to integrate a project with Centrifugo? This is a good question especially since there are lots of various tools for real-time messaging available in NodeJS ecosystem."),(0,o.kt)("p",null,"I found several points which could be a good motivation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Centrifugo scales well \u2013 we have a very optimized Redis Engine with client-side sharding and Redis Cluster support. We can also scale with KeyDB, Nats, or Tarantool. Centrifugo can scale to millions connections distributed over different server nodes."),(0,o.kt)("li",{parentName:"ul"},"Centrifugo is pretty fast (written in Go) and can handle thousands of clients per node. Client protocol is optimized for thousands of messages per second."),(0,o.kt)("li",{parentName:"ul"},"Centrifugo provides a variety of features out-of-the-box \u2013 some of them are unique, especially for real-time servers that scale to many nodes."),(0,o.kt)("li",{parentName:"ul"},"Centrifugo works as a separate service \u2013 so can be a universal tool in developer's pocket, can migrate from one project to another, no matter what programming language or framework is used for a business logic.")),(0,o.kt)("p",null,"Having said this all \u2013 let's move to a tutorial itself."),(0,o.kt)("h2",{id:"what-we-are-building"},"What we are building"),(0,o.kt)("p",null,"Not a super-cool app to be honest. Our goal here is to give a reader an idea how integration with Centrifugo could look like. There are many possible apps which could be built on top of this knowledge."),(0,o.kt)("p",null,"The end result here will allow application user to authenticate and once authenticated \u2013 connect to Centrifugo. Centrifugo will proxy connection requests to NodeJS backend and native ExpressJS session middleware will be used for connection authentication. We will also send some periodical real-time messages to a user personal channel."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/examples/tree/master/nodejs_proxy"},"full source code of this tutorial")," located on Github. You can clone examples repo and run this demo by simply writing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up\n")),(0,o.kt)("h2",{id:"creating-expressjs-app"},"Creating Express.js app"),(0,o.kt)("p",null,"Start new NodeJS app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm init\n")),(0,o.kt)("p",null,"Install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install express express-session cookie-parser axios morgan\n")),(0,o.kt)("p",null,"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"const express = require('express');\nconst cookieParser = require(\"cookie-parser\");\nconst sessions = require('express-session');\nconst morgan = require('morgan');\nconst axios = require('axios');\n\nconst app = express();\nconst port = 3000;\napp.use(express.json());\n\nconst oneDay = 1000 * 60 * 60 * 24;\n\napp.use(sessions({\n  secret: \"this_is_my_secret_key\",\n  saveUninitialized: true,\n  cookie: { maxAge: oneDay },\n  resave: false\n}));\napp.use(cookieParser());\napp.use(express.urlencoded({ extended: true }))\napp.use(express.json())\napp.use(express.static('static'));\napp.use(morgan('dev'));\n\napp.get('/', (req, res) => {\n  if (req.session.userid) {\n    res.sendFile('views/app.html', { root: __dirname });\n  } else\n    res.sendFile('views/login.html', { root: __dirname })\n});\n\napp.listen(port, () => {\n  console.log(`Example app listening at http://localhost:${port}`);\n});\n")),(0,o.kt)("p",null,"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"login.html")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"views")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="views/login.html"',title:'"views/login.html"'},'<html>\n\n<body>\n    <form action="/login" method="post">\n        <h2>Login (username: demo-user, password: demo-pass)</h2>\n        <div class="input-field">\n            <input type="text" name="username" id="username" placeholder="Enter Username">\n        </div>\n        <div class="input-field">\n            <input type="password" name="password" id="password" placeholder="Enter Password">\n        </div>\n        <input type="submit" value="Log in">\n    </form>\n</body>\n\n</html>\n')),(0,o.kt)("p",null,"Also create ",(0,o.kt)("inlineCode",{parentName:"p"},"app.html")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"views")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="views/app.html"',title:'"views/app.html"'},'<html>\n\n<head>\n  <link rel="stylesheet" href="app.css">\n  <script src="https://cdn.jsdelivr.net/gh/centrifugal/centrifuge-js@2.8.3/dist/centrifuge.min.js"><\/script>\n</head>\n\n<body>\n  <div>\n    <a href=\'/logout\'>Click to logout</a>\n  </div>\n  <div id="log"></div>\n</body>\n\n</html>\n')),(0,o.kt)("p",null,"Make attention that we import ",(0,o.kt)("inlineCode",{parentName:"p"},"centrifuge-js")," client here which abstracts away Centrifugo bidirectional WebSocket protocol."),(0,o.kt)("p",null,"Let's write an HTTP handler for login form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"const myusername = 'demo-user'\nconst mypassword = 'demo-pass'\n\napp.post('/login', (req, res) => {\n  if (req.body.username == myusername && req.body.password == mypassword) {\n    req.session.userid = req.body.username;\n    res.redirect('/');\n  } else {\n    res.send('Invalid username or password');\n  }\n});\n")),(0,o.kt)("p",null,"In this example we use hardcoded username and password for out single user. Of course in real app you will have a database with user credentials. But since our goal is only show integration with Centrifugo \u2013 we are skipping these hard parts here."),(0,o.kt)("p",null,"Also create a handler for a logout request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"app.get('/logout', (req, res) => {\n  req.session.destroy();\n  res.redirect('/');\n});\n")),(0,o.kt)("p",null,"Now if you run an app with ",(0,o.kt)("inlineCode",{parentName:"p"},"node index.js")," you will see a login form using which you can authenticate. At this point this is a mostly convenient NodeJS application, let's add Centrifugo integration. "),(0,o.kt)("h2",{id:"starting-centrifugo"},"Starting Centrifugo"),(0,o.kt)("p",null,"Run Centrifugo with ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "token_hmac_secret_key": "secret",\n  "admin": true,\n  "admin_password": "password",\n  "admin_secret": "my_admin_secret",\n  "api_key": "my_api_key",\n  "allowed_origins": [\n    "http://localhost:9000"\n  ],\n  "user_subscribe_to_personal": true,\n  "proxy_connect_endpoint": "http://localhost:3000/centrifugo/connect",\n  "proxy_http_headers": [\n    "Cookie"\n  ]\n}\n')),(0,o.kt)("p",null,"I.e.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./centrifugo -c config.json\n")),(0,o.kt)("p",null,"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"app.js")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"static")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="static/app.js"',title:'"static/app.js"'},"function drawText(text) {\n    const div = document.createElement('div');\n    div.innerHTML = text;\n    document.getElementById('log').appendChild(div);\n}\n\nconst centrifuge = new Centrifuge('ws://localhost:9000/connection/websocket');\n\ncentrifuge.on('connect', function () {\n    drawText('Connected to Centrifugo');\n});\n\ncentrifuge.on('disconnect', function () {\n    drawText('Disconnected from Centrifugo');\n});\n\ncentrifuge.on('publish', function (ctx) {\n    drawText('Publication, time = ' + ctx.data.time);\n});\n\ncentrifuge.connect();\n")),(0,o.kt)("h2",{id:"adding-nginx"},"Adding Nginx"),(0,o.kt)("p",null,"Since we are going to use native session auth of ExpressJS we can't just connect from localhost:3000 (where our NodeJS app is served) to Centrifugo running on localhost:8000 \u2013 browser won't send a ",(0,o.kt)("inlineCode",{parentName:"p"},"Cookie")," header to Centrifugo in this case. Due to this reason we need a reverse proxy which will terminate a traffic from frontend and proxy requests to NodeJS process or to Centrifugo depending on URL path. In this case both browser and NodeJS app will share the same origin \u2013 so Cookie will be sent to Centrifugo in WebSocket Upgrade request."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Alternatively, we could also use ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/authentication"},"JWT authentication")," of Centrifugo but that's a topic for another tutorial. Here we are using ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/proxy#connect-proxy"},"connect proxy feature")," for auth. "))),(0,o.kt)("p",null,"Nginx config will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"server {\n  listen 9000;\n\n  server_name localhost;\n\n  location / {\n    proxy_pass http://localhost:3000;\n    proxy_http_version 1.1;\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Fowarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Fowarded-Proto $scheme;\n  }\n\n  location /connection {\n    proxy_pass http://localhost:8000;\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection 'upgrade';\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Fowarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Fowarded-Proto $scheme;\n    proxy_cache_bypass $http_upgrade;\n  }\n}\n")),(0,o.kt)("p",null,"Run Nginx and open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9000"},"http://localhost:9000"),". After authenticating in app you should see an attempt to connect to a WebSocket endpoint. But connection will fail since we need to implement connect proxy handler in NodeJS app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"app.post('/centrifugo/connect', (req, res) => {\n  if (req.session.userid) {\n    res.json({\n      result: {\n        user: req.session.userid\n      }\n    });\n  } else\n    res.json({\n      disconnect: {\n        code: 1000,\n        reason: \"unauthorized\",\n        reconnect: false\n      }\n    });\n});\n")),(0,o.kt)("p",null,"Restart NodeJS process and try opening an app again. Application should now successfully connect to Centrifugo."),(0,o.kt)("h2",{id:"send-real-time-messages"},"Send real-time messages"),(0,o.kt)("p",null,"Let's also periodically publish current server time to a client's personal channel. In Centrifugo configuration we set a ",(0,o.kt)("inlineCode",{parentName:"p"},"user_subscribe_to_personal")," option which turns on ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/server_subs#automatic-personal-channel-subscription"},"automatic subscription to a personal channel")," for each connected user. We can use ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," library and send publish API requests to Centrifugo periodically (according to ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/server_api#http-api"},"API docs"),"): "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"const centrifugoApiClient = axios.create({\n  baseURL: `http://centrifugo:8000/api`,\n  headers: {\n    Authorization: `apikey my_api_key`,\n    'Content-Type': 'application/json',\n  },\n});\n\nsetInterval(async () => {\n  try {\n    await centrifugoApiClient.post('', {\n      method: 'publish',\n      params: {\n        channel: '#' + myusername, // construct personal channel name.\n        data: {\n          time: Math.floor(new Date().getTime() / 1000),\n        },\n      },\n    });\n  } catch (e) {\n    console.error(e.message);\n  }\n}, 5000);\n")),(0,o.kt)("p",null,"After restarting NodeJS you should see periodical updates on application web page."),(0,o.kt)("p",null,"You can also log in into Centrifugo admin web UI ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000")," using password ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," - and play with other available server API from within web interface."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"While not being super useful this example can help understanding core concepts of Centrifugo - specifically connect proxy feature and server API."),(0,o.kt)("p",null,"It's possible to use unidirectional Centrifugo transports instead of bidrectional WebSocket used here \u2013 in this case you can go without using ",(0,o.kt)("inlineCode",{parentName:"p"},"centrifuge-js")," at all."),(0,o.kt)("p",null,"This application scales perfectly if you need to handle more connections \u2013 thanks to Centrifugo builtin PUB/SUB engines."),(0,o.kt)("p",null,"It's also possible to use client-side subscriptions, keep channel history cache, enable channel presence and more. All the power of Centrifugo is in your hands."))}d.isMDXComponent=!0},1815:function(e,n,t){n.Z=t.p+"assets/images/keyboard-38dec1755b401ae21b4e5f92f3d1caa6.png"}}]);