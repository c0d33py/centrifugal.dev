"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1616],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9080:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={id:"load_balancing",title:"Load Balancing"},c=void 0,p={unversionedId:"server/load_balancing",id:"server/load_balancing",isDocsHomePage:!1,title:"Load Balancing",description:"This chapter shows how to deal with persistent connection load balancing.",source:"@site/docs/server/load_balancing.md",sourceDirName:"server",slug:"/server/load_balancing",permalink:"/docs/server/load_balancing",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/load_balancing.md",version:"current",frontMatter:{id:"load_balancing",title:"Load Balancing"},sidebar:"Guides",previous:{title:"Infrastructure tuning",permalink:"/docs/server/infra_tuning"},next:{title:"Configure TLS",permalink:"/docs/server/tls"}},l=[{value:"Nginx configuration",id:"nginx-configuration",children:[{value:"Separate domain for Centrifugo",id:"separate-domain-for-centrifugo",children:[]},{value:"Embed to a location of web site",id:"embed-to-a-location-of-web-site",children:[]},{value:"worker_connections",id:"worker_connections",children:[]}]}],u={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This chapter shows how to deal with persistent connection load balancing."),(0,a.kt)("h2",{id:"nginx-configuration"},"Nginx configuration"),(0,a.kt)("p",null,"Although it's possible to use Centrifugo without any reverse proxy before it,\nit's still a good idea to keep Centrifugo behind mature reverse proxy to deal with\nedge cases when handling HTTP/Websocket connections from the wild. Also you probably\nwant some sort of load balancing eventually between Centrifugo nodes so that proxy\ncan be such a balancer too."),(0,a.kt)("p",null,"In this section we will look at ",(0,a.kt)("a",{parentName:"p",href:"http://nginx.org/"},"Nginx")," configuration to deploy Centrifugo."),(0,a.kt)("p",null,"Minimal Nginx version \u2013 ",(0,a.kt)("strong",{parentName:"p"},"1.3.13")," because it was the first version that can proxy\nWebsocket connections."),(0,a.kt)("p",null,"There are 2 ways: running Centrifugo server as separate service on its own\ndomain or embed it to a location of your web site (for example to ",(0,a.kt)("inlineCode",{parentName:"p"},"/centrifugo"),")."),(0,a.kt)("h3",{id:"separate-domain-for-centrifugo"},"Separate domain for Centrifugo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"upstream centrifugo {\n    # uncomment ip_hash if using SockJS transport with many upstream servers.\n    #ip_hash;\n    server 127.0.0.1:8000;\n}\n\nmap $http_upgrade $connection_upgrade {\n    default upgrade;\n    ''      close;\n}\n\n#server {\n#   listen 80;\n#   server_name centrifugo.example.com;\n#   rewrite ^(.*) https://$server_name$1 permanent;\n#}\n\nserver {\n\n    server_name centrifugo.example.com;\n\n    listen 80;\n\n    #listen 443 ssl;\n    #ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n    #ssl_ciphers AES128-SHA:AES256-SHA:RC4-SHA:DES-CBC3-SHA:RC4-MD5;\n    #ssl_certificate /etc/nginx/ssl/wildcard.example.com.crt;\n    #ssl_certificate_key /etc/nginx/ssl/wildcard.example.com.key;\n    #ssl_session_cache shared:SSL:10m;ssl_session_timeout 10m;\n\n    include /etc/nginx/mime.types;\n    default_type application/octet-stream;\n\n    sendfile on;\n    tcp_nopush on;\n    tcp_nodelay on;\n    gzip on;\n    gzip_min_length 1000;\n    gzip_proxied any;\n\n    # Only retry if there was a communication error, not a timeout\n    # on the Tornado server (to avoid propagating \"queries of death\"\n    # to all frontends)\n    proxy_next_upstream error;\n\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Scheme $scheme;\n    proxy_set_header Host $http_host;\n\n    location /connection {\n        proxy_pass http://centrifugo;\n        proxy_buffering off;\n        keepalive_timeout 65;\n        proxy_read_timeout 60s;\n        proxy_http_version 1.1;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Scheme $scheme;\n        proxy_set_header Host $http_host;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $connection_upgrade;\n    }\n    \n    location / {\n        proxy_pass http://centrifugo;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n}\n")),(0,a.kt)("h3",{id:"embed-to-a-location-of-web-site"},"Embed to a location of web site"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"upstream centrifugo {\n    # uncomment ip_hash if using SockJS transport with many upstream servers.\n    #ip_hash;\n    server 127.0.0.1:8000;\n}\n\nmap $http_upgrade $connection_upgrade {\n    default upgrade;\n    ''      close;\n}\n\nserver {\n\n    # ... your web site Nginx config\n\n    location /centrifugo/ {\n        rewrite ^/centrifugo/(.*)        /$1 break;\n        proxy_pass_header Server;\n        proxy_set_header Host $http_host;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Scheme $scheme;\n        proxy_pass http://centrifugo;\n    }\n\n    location /centrifugo/connection {\n        rewrite ^/centrifugo(.*)        $1 break;\n\n        proxy_next_upstream error;\n        gzip on;\n        gzip_min_length 1000;\n        gzip_proxied any;\n        proxy_buffering off;\n        keepalive_timeout 65;\n        proxy_pass http://centrifugo;\n        proxy_read_timeout 60s;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Scheme $scheme;\n        proxy_set_header Host $http_host;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $connection_upgrade;\n    }\n}\n")),(0,a.kt)("h3",{id:"worker_connections"},"worker_connections"),(0,a.kt)("p",null,"You may also need to update ",(0,a.kt)("inlineCode",{parentName:"p"},"worker_connections")," option of Nginx:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"events {\n    worker_connections 65535;\n}\n")))}d.isMDXComponent=!0}}]);