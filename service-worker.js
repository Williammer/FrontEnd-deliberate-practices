"use strict";var precacheConfig=[["./index.html","58d31611c7b4ed6a93fc260132f82210"],["./static/css/main.ab6ffdba.css","d959fc30d622ea04572893cf4099eee9"],["./static/js/0.e7b20359.chunk.js","b9afaee15207b2eb226fc87ceb089a7c"],["./static/js/1.86ceaddc.chunk.js","e4c9de2b5d771814e78ba014792fbb80"],["./static/js/10.75daaeae.chunk.js","f97795c8c737dee5f89e3a2cdb6abdb3"],["./static/js/11.4e839634.chunk.js","6eef89d89a7a7af79b6d935c66bad04d"],["./static/js/12.625cf2a8.chunk.js","d872ca8273cc7c52e9bd1ae97224f7d0"],["./static/js/13.a3118397.chunk.js","927d330f79b52f71c6659a5334899b5b"],["./static/js/14.a412fc77.chunk.js","83f6d78e183ce8097dcddd6f5ccf8a41"],["./static/js/15.12ef367b.chunk.js","da20c89f45a9ea28f87bb6acafcd4c04"],["./static/js/16.c695923b.chunk.js","293aad5aa844a78c3e8b539d217aee7b"],["./static/js/17.83de7e3a.chunk.js","7bf191e901386e99f57d21db1b59f752"],["./static/js/18.7e807943.chunk.js","5e758c3c1988ae9df66c69aae6e87d5e"],["./static/js/19.0467fde3.chunk.js","9ff0bdd2a3b578f746e3e1478cb2e9a1"],["./static/js/2.8e3d8111.chunk.js","40c1bfd96b4cb92278bf6db5013cfcd2"],["./static/js/3.5b128a3f.chunk.js","52d8f7936b0d74a55db85142feeb034b"],["./static/js/4.cc87fb7e.chunk.js","10bbbf1b484b63a7dbae51b1d9edd05f"],["./static/js/5.610288d2.chunk.js","9c345b2aca7a14b44abd36c0d53efcdb"],["./static/js/6.1c2f6090.chunk.js","53fcf32de59be8a4feba3408f6968147"],["./static/js/7.1bbe0328.chunk.js","31e933117342a58a9d054212594291a7"],["./static/js/8.764725b7.chunk.js","79b83cbc6f145342d809baf1a91548f9"],["./static/js/9.0a2e5ab3.chunk.js","007d5f92f135d59b649cc18089603a6d"],["./static/js/main.652ad6f1.js","dd35cb674bf844dda80dfa25d5513e48"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});