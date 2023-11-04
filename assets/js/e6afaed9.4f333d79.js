"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[4491],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return t?a.createElement(f,s(s({ref:n},u),{},{components:t})):a.createElement(f,s({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const i={id:"faq_index",title:"Frequently Asked Questions"},s=void 0,r={unversionedId:"faq/faq_index",id:"version-3/faq/faq_index",title:"Frequently Asked Questions",description:"Answers to popular questions here.",source:"@site/versioned_docs/version-3/faq/index.md",sourceDirName:"faq",slug:"/faq/",permalink:"/docs/3/faq/",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/faq/index.md",tags:[],version:"3",frontMatter:{id:"faq_index",title:"Frequently Asked Questions"}},l={},c=[{value:"How many connections can one Centrifugo instance handle?",id:"how-many-connections-can-one-centrifugo-instance-handle",level:3},{value:"Memory usage per connection?",id:"memory-usage-per-connection",level:3},{value:"Can Centrifugo scale horizontally?",id:"can-centrifugo-scale-horizontally",level:3},{value:"Message delivery model",id:"message-delivery-model",level:3},{value:"Message order guarantees",id:"message-order-guarantees",level:3},{value:"Should I create channels explicitly?",id:"should-i-create-channels-explicitly",level:3},{value:"What about best practices with the number of channels?",id:"what-about-best-practices-with-the-number-of-channels",level:3},{value:"Any way to exclude message publisher from receiving a message from a channel?",id:"any-way-to-exclude-message-publisher-from-receiving-a-message-from-a-channel",level:3},{value:"Can I have both binary and JSON clients in one channel?",id:"can-i-have-both-binary-and-json-clients-in-one-channel",level:3},{value:"Online presence for chat apps - online status of your contacts",id:"online-presence-for-chat-apps---online-status-of-your-contacts",level:3},{value:"Centrifugo stops accepting new connections, why?",id:"centrifugo-stops-accepting-new-connections-why",level:3},{value:"Can I use Centrifugo without reverse-proxy like Nginx before it?",id:"can-i-use-centrifugo-without-reverse-proxy-like-nginx-before-it",level:3},{value:"Does Centrifugo work with HTTP/2?",id:"does-centrifugo-work-with-http2",level:3},{value:"Is there a way to use a single connection to Centrifugo from different browser tabs?",id:"is-there-a-way-to-use-a-single-connection-to-centrifugo-from-different-browser-tabs",level:3},{value:"What if I need to send push notifications to mobile or web applications?",id:"what-if-i-need-to-send-push-notifications-to-mobile-or-web-applications",level:3},{value:"How can I know a message is delivered to a client?",id:"how-can-i-know-a-message-is-delivered-to-a-client",level:3},{value:"Can I publish new messages over a WebSocket connection from a client?",id:"can-i-publish-new-messages-over-a-websocket-connection-from-a-client",level:3},{value:"How to create a secure channel for two users only (private chat case)?",id:"how-to-create-a-secure-channel-for-two-users-only-private-chat-case",level:3},{value:"What&#39;s the best way to organize channel configuration?",id:"whats-the-best-way-to-organize-channel-configuration",level:3},{value:"Does Centrifugo support webhooks?",id:"does-centrifugo-support-webhooks",level:3},{value:"Why Centrifugo does not have disconnect hooks?",id:"why-centrifugo-does-not-have-disconnect-hooks",level:3},{value:"Is it possible to listen to join/leave events on the app backend side?",id:"is-it-possible-to-listen-to-joinleave-events-on-the-app-backend-side",level:3},{value:"How scalable is the online presence and join/leave features?",id:"how-scalable-is-the-online-presence-and-joinleave-features",level:3},{value:"I have not found an answer to my question here:",id:"i-have-not-found-an-answer-to-my-question-here",level:3}],u={toc:c};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Answers to popular questions here."),(0,o.kt)("h3",{id:"how-many-connections-can-one-centrifugo-instance-handle"},"How many connections can one Centrifugo instance handle?"),(0,o.kt)("p",null,"This depends on many factors. Real-time transport choice, hardware, message rate, size of messages, Centrifugo features enabled, client distribution over channels, compression on/off, etc. So no certain answer to this question exists. Common sense, performance measurements, and monitoring can help here. "),(0,o.kt)("p",null,"Generally, we suggest not put more than 50-100k clients on one node - but you should measure for your use case."),(0,o.kt)("p",null,"You can find a description of a test stand with million WebSocket connections in ",(0,o.kt)("a",{parentName:"p",href:"/blog/2020/02/10/million-connections-with-centrifugo"},"this blog post"),". Though the point above is still valid \u2013 measure and ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/monitoring"},"monitor")," your setup."),(0,o.kt)("h3",{id:"memory-usage-per-connection"},"Memory usage per connection?"),(0,o.kt)("p",null,"Depending on transport used and features enabled the amount of RAM required per each connection can vary."),(0,o.kt)("p",null,"For example, you can expect that each WebSocket connection will cost about 30-50 KB of RAM, thus a server with 1 GB of RAM can handle about 20-30k connections."),(0,o.kt)("p",null,"For other real-time transports, the memory usage per connection can differ (for example, SockJS connections will cost ~ 2 times more RAM than pure WebSocket connections). So the best way is again \u2013 measure for your custom case since depending on Centrifugo transport/features memory usage can vary."),(0,o.kt)("h3",{id:"can-centrifugo-scale-horizontally"},"Can Centrifugo scale horizontally?"),(0,o.kt)("p",null,"Yes, it can do this using built-in engines: Redis, KeyDB, Tarantool, or Nats broker."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/engines"},"engines")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/getting-started/design#scalability-considerations"},"scalability considerations"),"."),(0,o.kt)("h3",{id:"message-delivery-model"},"Message delivery model"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/getting-started/design#message-delivery-model"},"design overview")),(0,o.kt)("h3",{id:"message-order-guarantees"},"Message order guarantees"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/getting-started/design#message-order-guarantees"},"design overview"),"."),(0,o.kt)("h3",{id:"should-i-create-channels-explicitly"},"Should I create channels explicitly?"),(0,o.kt)("p",null,"No. By default, channels are created automatically as soon as the first client subscribed to it. And destroyed automatically when the last client unsubscribes from a channel."),(0,o.kt)("p",null,"When history inside the channel is on then a window of last messages is kept automatically during the retention period. So a client that comes later and subscribes to a channel can retrieve those messages using the call to the history API (or maybe by using the automatic recovery feature which also uses a history internally)."),(0,o.kt)("h3",{id:"what-about-best-practices-with-the-number-of-channels"},"What about best practices with the number of channels?"),(0,o.kt)("p",null,"Channel is a very lightweight ephemeral entity - Centrifugo can deal with lots of channels, don't be afraid to have many channels in an application."),(0,o.kt)("p",null,"But keep in mind that one client should be subscribed to a reasonable number of channels at one moment. Client-side subscription to a channel requires a separate frame from client to server \u2013 more frames mean more heavy initial connection, more heavy reconnect, etc."),(0,o.kt)("p",null,"One example which may lead to channel misusing is a messenger app where user can be part of many groups. In this case, using a separate channel for each group/chat in a messenger may be a bad approach. The problem is that messenger app may have chat list screen \u2013 a view that displays all user groups (probably with pagination). If you are using separate channel for each group then this may lead to lots of subscriptions. Also, with pagination, to receive updates from older chats (not visible on a screen due to pagination) \u2013 user may need to subscribe on their channels too. In this case, using a single personal channel for each user is a preferred approach. As soon as you need to deliver a message to a group you can use Centrifugo ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcast")," API to send it to many users. If your chat groups are huge in size then you may also need additional queuing system between your application backend and Centrifugo to broadcast a message to many personal channels."),(0,o.kt)("h3",{id:"any-way-to-exclude-message-publisher-from-receiving-a-message-from-a-channel"},"Any way to exclude message publisher from receiving a message from a channel?"),(0,o.kt)("p",null,"Currently, no."),(0,o.kt)("p",null,"We know that services like Pusher provide a way to exclude current client by providing a client ID (socket ID) in publish request. A couple of problems with this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client can reconnect while message travels over wire/Backend/Centrifugo \u2013 in this case client has a chance to receive a message unexpectedly since it will have another client ID (socket ID)"),(0,o.kt)("li",{parentName:"ul"},"Client can call a history manually or message recovery process can run upon reconnect \u2013 in this case a message will present in a history")),(0,o.kt)("p",null,"Both cases may result in duplicate messages. These reasons prevent us adding such functionality into Centrifugo, the correct application architecture requires having some sort of idempotent identifier which allow dealing with message duplicates."),(0,o.kt)("p",null,"Once added nobody will think about idempotency and this can lead to hard to catch/fix problems in an application. This can also make enabling channel history harder at some point."),(0,o.kt)("p",null,"Centrifugo behaves similar to Kafka here \u2013 i.e. channel should be considered as immutable stream of events where each channel subscriber simply receives all messages published to a channel."),(0,o.kt)("p",null,"In the future releases Centrifugo may have some sort of server-side message filtering, but we are searching for a proper and safe way of adding it."),(0,o.kt)("h3",{id:"can-i-have-both-binary-and-json-clients-in-one-channel"},"Can I have both binary and JSON clients in one channel?"),(0,o.kt)("p",null,"No. It's not possible to transparently encode binary data into JSON protocol (without converting binary to base64 for example which we don't want to do due to increased complexity and performance penalties). So if you have clients in a channel which work with JSON \u2013 you need to use JSON payloads everywhere."),(0,o.kt)("p",null,"Most Centrifugo bidirectional connectors are using binary Protobuf protocol between a client and Centrifugo. But you can send JSON over Protobuf protocol just fine (since JSON is a UTF-8 encoded sequence of bytes in the end)."),(0,o.kt)("p",null,"To summarize:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if you are using binary Protobuf clients and binary payloads everywhere \u2013 you are fine."),(0,o.kt)("li",{parentName:"ul"},"if you are using binary or JSON clients and valid JSON payloads everywhere \u2013 you are fine."),(0,o.kt)("li",{parentName:"ul"},"if you try to send binary data to JSON protocol based clients \u2013 you will get errors from Centrifugo.")),(0,o.kt)("h3",{id:"online-presence-for-chat-apps---online-status-of-your-contacts"},"Online presence for chat apps - online status of your contacts"),(0,o.kt)("p",null,"While online presence is a good feature it does not fit well for some apps. For example, if you make a chat app - you may probably use a single personal channel for each user. In this case, you cannot find who is online at moment using the built-in Centrifugo presence feature as users do not share a common channel."),(0,o.kt)("p",null,"You can solve this using a separate service that tracks the online status of your users (for example in Redis) and has a bulk API that returns online status approximation for a list of users. This way you will have an efficient scalable way to deal with online statuses. This is also available as ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/pro/user_status"},"Centrifugo PRO feature"),"."),(0,o.kt)("h3",{id:"centrifugo-stops-accepting-new-connections-why"},"Centrifugo stops accepting new connections, why?"),(0,o.kt)("p",null,"The most popular reason behind this is reaching the open file limit. You can make it higher, we described how to do this ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/infra_tuning"},"nearby in this doc"),". Also, check out ",(0,o.kt)("a",{parentName:"p",href:"/blog/2020/11/12/scaling-websocket"},"an article in our blog")," which mentions possible problems when dealing with many persistent connections like WebSocket."),(0,o.kt)("h3",{id:"can-i-use-centrifugo-without-reverse-proxy-like-nginx-before-it"},"Can I use Centrifugo without reverse-proxy like Nginx before it?"),(0,o.kt)("p",null,"Yes, you can - Go standard library designed to allow this. Though proxy before Centrifugo can be very useful for load balancing clients."),(0,o.kt)("h3",{id:"does-centrifugo-work-with-http2"},"Does Centrifugo work with HTTP/2?"),(0,o.kt)("p",null,"Yes, Centrifugo works with HTTP/2."),(0,o.kt)("p",null,"You can disable HTTP/2 running Centrifugo server with ",(0,o.kt)("inlineCode",{parentName:"p"},"GODEBUG")," environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'GODEBUG="http2server=0" centrifugo -c config.json\n')),(0,o.kt)("p",null,"Keep in mind that when using WebSocket you are working only over HTTP/1.1, so HTTP/2 support mostly makes sense for SockJS HTTP transports and unidirectional transports: like EventSource (SSE) and HTTP-streaming."),(0,o.kt)("h3",{id:"is-there-a-way-to-use-a-single-connection-to-centrifugo-from-different-browser-tabs"},"Is there a way to use a single connection to Centrifugo from different browser tabs?"),(0,o.kt)("p",null,"If the underlying transport is HTTP-based, and you use HTTP/2 then this will work automatically. For WebSocket, each browser tab creates a new connection."),(0,o.kt)("h3",{id:"what-if-i-need-to-send-push-notifications-to-mobile-or-web-applications"},"What if I need to send push notifications to mobile or web applications?"),(0,o.kt)("p",null,"Sometimes it's confusing to see a difference between real-time messages and push notifications. Centrifugo is a real-time messaging server. It can not send push notifications to devices - to Apple iOS devices via APNS, Android devices via GCM, or browsers over Web Push API. This is a goal for another software."),(0,o.kt)("p",null,"But the reasonable question here is how can you know when you need to send a real-time message to an online client or push notification to its device for an offline client. The solution is pretty simple. You can keep critical notifications for a client in the database. And when a client reads a message you should send an ack to your backend marking that notification as read by the client. Periodically you can check which notifications were sent to clients but they have not read it (no read ack received). For such notifications, you can send push notifications to its device using your own or another open-source solution. Look at Firebase for example."),(0,o.kt)("h3",{id:"how-can-i-know-a-message-is-delivered-to-a-client"},"How can I know a message is delivered to a client?"),(0,o.kt)("p",null,"You can, but Centrifugo does not have such an API. What you have to do to ensure your client has received a message is sending confirmation ack from your client to your application backend as soon as the client processed the message coming from a Centrifugo channel."),(0,o.kt)("h3",{id:"can-i-publish-new-messages-over-a-websocket-connection-from-a-client"},"Can I publish new messages over a WebSocket connection from a client?"),(0,o.kt)("p",null,"It's possible to publish messages into channels directly from a client (when ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," channel option is enabled). But we strongly discourage this in production usage as those messages just go through Centrifugo without any additional control and validation from the application backend."),(0,o.kt)("p",null,"We suggest using one of the available approaches:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When a user generates an event it must be first delivered to your app backend using a convenient way (for example AJAX POST request for a web application), processed on the backend (validated, saved into the main application database), and then published to Centrifugo using Centrifugo HTTP or GRPC API."),(0,o.kt)("li",{parentName:"ul"},"Utilize the ",(0,o.kt)("a",{parentName:"li",href:"/docs/3/server/proxy#rpc-proxy"},"RPC proxy feature")," \u2013 in this case, you can call RPC over Centrifugo WebSocket which will be translated to an HTTP request to your backend. After receiving this request on the backend you can publish a message to Centrifugo server API. This way you can utilize WebSocket transport between the client and your server in a bidirectional way. HTTP traffic will be concentrated inside your private network."),(0,o.kt)("li",{parentName:"ul"},"Utilize the ",(0,o.kt)("a",{parentName:"li",href:"/docs/3/server/proxy#publish-proxy"},"publish proxy feature")," \u2013 in this case client can call publish on the frontend, this publication request will be transformed into HTTP or GRPC call to the application backend. If your backend allows publishing - Centrifugo will pass the payload to the channel (i.e. will publish message to the channel itself). ")),(0,o.kt)("p",null,"Sometimes publishing from a client directly into a channel (without any backend involved) can be useful though - for personal projects, for demonstrations (like we do in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/examples"},"examples"),") or if you trust your users and want to build an application without backend. In all cases when you don't need any message control on your backend."),(0,o.kt)("h3",{id:"how-to-create-a-secure-channel-for-two-users-only-private-chat-case"},"How to create a secure channel for two users only (private chat case)?"),(0,o.kt)("p",null,"There are several ways to achieve it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use a private channel (starting with ",(0,o.kt)("inlineCode",{parentName:"li"},"$"),") - every time a user subscribes to it your backend should provide a sign to confirm that subscription request. Read more in ",(0,o.kt)("a",{parentName:"li",href:"/docs/3/server/channels#private-channel-prefix"},"channels chapter")),(0,o.kt)("li",{parentName:"ul"},"next is ",(0,o.kt)("a",{parentName:"li",href:"/docs/3/server/channels#user-channel-boundary"},"user limited channels")," (with ",(0,o.kt)("inlineCode",{parentName:"li"},"#"),") - you can create a channel with a name like ",(0,o.kt)("inlineCode",{parentName:"li"},"dialog#42,567")," to limit subscribers only to the user with id ",(0,o.kt)("inlineCode",{parentName:"li"},"42")," and user with ID ",(0,o.kt)("inlineCode",{parentName:"li"},"567"),", this does not fit well for channels with many or dynamic possible subscribers"),(0,o.kt)("li",{parentName:"ul"},"you can use subscribe proxy feature to validate subscriptions, see ",(0,o.kt)("a",{parentName:"li",href:"/docs/3/server/proxy"},"chapter about proxy")),(0,o.kt)("li",{parentName:"ul"},"finally, you can create a hard-to-guess channel name (based on some secret key and user IDs or just generate and save this long unique name into your main app database) so other users won't know this channel to subscribe on it. This is the simplest but not the safest way - but can be reasonable to consider in many situations")),(0,o.kt)("h3",{id:"whats-the-best-way-to-organize-channel-configuration"},"What's the best way to organize channel configuration?"),(0,o.kt)("p",null,"In most situations, your application needs several different real-time features. We suggest using namespaces for every real-time feature if it requires some option enabled."),(0,o.kt)("p",null,"For example, if you need join/leave messages for a chat app - create a special channel namespace with this ",(0,o.kt)("inlineCode",{parentName:"p"},"join_leave")," option enabled. Otherwise, your other channels will receive join/leave messages too - increasing load and traffic in the system but not used by clients."),(0,o.kt)("p",null,"The same relates to other channel options."),(0,o.kt)("h3",{id:"does-centrifugo-support-webhooks"},"Does Centrifugo support webhooks?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/proxy"},"Proxy feature")," allows integrating Centrifugo with your session mechanism (via connect proxy) and provides a way to react to connection events (rpc, subscribe, publish). Also, it opens a road for bidirectional communication with RPC calls. And periodic connection refresh hooks are also there."),(0,o.kt)("p",null,"Centrifugo does not support unsubscribe/disconnect hooks \u2013 see the reasoning below."),(0,o.kt)("h3",{id:"why-centrifugo-does-not-have-disconnect-hooks"},"Why Centrifugo does not have disconnect hooks?"),(0,o.kt)("p",null,"Centrifugo does not support disconnect hooks at this point."),(0,o.kt)("p",null,"First of all, there is no guarantee that the disconnect process will have a time to execute on the client-side (as the client can just switch off its device or simply lose internet connection). This means that a server may notice a connection loss with some delay (thanks to PING/PONG)."),(0,o.kt)("p",null,"Also, Centrifugo node can be unexpectedly killed. So there is a chance that disconnect event won't have a chance to be emitted to the backend."),(0,o.kt)("p",null,"One more reason is that Centrifugo designed to scale to many concurrent connections. Think millions of them. As we ",(0,o.kt)("a",{parentName:"p",href:"https://centrifugal.dev/blog/2020/11/12/scaling-websocket#massive-reconnect"},"mentioned in our blog")," there are cases when all connections start reconnecting at the same time. In this case Centrifugo could potentially generate lots of disconnect events. To reduce the load during connect process Centrifugo has JWT authentication. Even if disconnect events were queued/rate-limited there could be situations when your app processes disconnect hook while user already reconnected and connect event processed. This is a racy situation which you will need to handle somehow (possibly based on unique client ID attached to each connection)."),(0,o.kt)("p",null,"If you need to know that client disconnected and program your business logic around this fact then the reasonable approach could be periodically call your backend from the client-side and update user status somewhere on the backend (use Redis maybe). This is a pretty robust solution where you can't occasionally miss disconnect events. You can also utilize Centrifugo refresh proxy for the task of periodic backend pinging. In this case you will notice that user (or particular client) left app with some delay \u2013 this may be a acceptable trade-off in many cases."),(0,o.kt)("p",null,"Having said that, processing disconnect events may be reasonable \u2013 as a best-effort solution while taking into account everything said above. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifuge"},"Centrifuge")," library for Go language (which is the core of Centrifugo) supports client disconnect callbacks on a server-side \u2013 so technically the possibility exists. If someone comes with a use case which definitely wins from having disconnect hooks in Centrifugo we are ready to discuss this and try to design a proper solution together."),(0,o.kt)("h3",{id:"is-it-possible-to-listen-to-joinleave-events-on-the-app-backend-side"},"Is it possible to listen to join/leave events on the app backend side?"),(0,o.kt)("p",null,"No, join/leave events are only available in the client protocol. In most cases join event can be handled by using ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/proxy#subscribe-proxy"},"subscribe proxy"),". Leave events are harder \u2013 there is no unsubscribe hook available (mostly the same reasons as for disconnect hook described above). So the workaround here can be similar to one for disconnect \u2013 ping an app backend periodically while client is subscribed and thus know that client is currently in a channel with some approximation in time."),(0,o.kt)("h3",{id:"how-scalable-is-the-online-presence-and-joinleave-features"},"How scalable is the online presence and join/leave features?"),(0,o.kt)("p",null,"Online presence is good for channels with a reasonably small number of active subscribers. As soon as there are tons of active subscribers, presence information becomes very expensive in terms of bandwidth (as it contains full information about all clients in a channel)."),(0,o.kt)("p",null,"There is ",(0,o.kt)("inlineCode",{parentName:"p"},"presence_stats")," API method that can be helpful if you only need to know the number of clients (or unique users) in a channel. But in the case of the Redis engine even ",(0,o.kt)("inlineCode",{parentName:"p"},"presence_stats")," call is not optimized for channels with more than several thousand active subscribers."),(0,o.kt)("p",null,"You may consider using a separate service to deal with presence status information that provides information in near real-time maybe with some reasonable approximation. Centrifugo PRO provides a ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/pro/user_status"},"user status")," feature which may fit your needs."),(0,o.kt)("p",null,"The same is true for join/leave messages - as soon as you turn on join/leave events for a channel with many active subscribers each subscriber starts generating indiviaual join/leave events. This may result in many messages sent to each subscriber in a channel, drastically multiplying amount of messages traveling through the system. Especially when all clients reconnect simulteniously. So be careful and estimate the possible load. There is no magic, unfortunately."),(0,o.kt)("h3",{id:"i-have-not-found-an-answer-to-my-question-here"},"I have not found an answer to my question here:"),(0,o.kt)("p",null,"Ask in our community rooms:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://t.me/joinchat/ABFVWBE0AhkyyhREoaboXQ"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Telegram-Group-orange?style=flat&logo=telegram",alt:"Join the chat at https://t.me/joinchat/ABFVWBE0AhkyyhREoaboXQ"}))," ","\xa0",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/tYgADKx"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/719186998686122046?style=flat&label=Discord&logo=discord",alt:"Join the chat at https://discord.gg/tYgADKx"}))))}h.isMDXComponent=!0}}]);