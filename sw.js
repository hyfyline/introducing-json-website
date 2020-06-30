const cacheName="v1",cacheAssets=["introducing-json.html","affiliated-technologies.html","grammar.html","script.js","css/main.css","css/_typography.css","css/_space.css","css/_color.css","css/affiliated-technologies.css","css/grammar.css","img/favicon.ico","img/logo-icon-sml-36wx36h.png","img/array-sml-600w.png","img/number-sml-600w.png","img/object-sml-600w.png","img/string-sml-600w.png","img/value-sml-600w.png","img/whitespace-sml-600w.png","img/book-poster.png","img/json-article.png","img/json-conference.jpg","img/json-logo.jpg","img/language-icon3-150w.png","img/back-to-top-icon-58wx58h.png"];self.addEventListener("install",s=>{s.waitUntil(caches.open("v1").then(s=>{s.addAll(cacheAssets)}).then(()=>self.skipWaiting()))}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(s=>Promise.all(s.map(s=>{if("v1"!==s)return caches.delete(s)}))))}),self.addEventListener("fetch",s=>{s.respondWith(fetch(s.request).catch(()=>caches.match(s.request)))});