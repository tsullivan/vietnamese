(window.webpackJsonphenry_game=window.webpackJsonphenry_game||[]).push([[0],{19:function(n,e,t){n.exports=t(22)},22:function(n,e,t){"use strict";t.r(e);var o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var i=t(26),c=t(23),a=t(28),v=t(18),s=new i.a,l=function(n){var e=document.createElement("button");e.appendChild(document.createTextNode("xong")),c.a(e,"click").pipe(Object(a.a)(1),Object(v.a)((function(){s.next(function(n){var e=document.createElement("p");e.innerHTML="Thank you for playing!";var t=document.createElement("table");t.innerHTML=function(){var e="<td>correct: </td><td>".concat(n.correct.join(", "),"</td>"),t="<td>incorrect: </td><td>".concat(n.incorrect.join(", "),"</td>"),o="<td>time: </td><td>".concat(n.time,"</td>");return"<thead><td><bold>score</bold></td></thead>\n    <tbody>\n    <tr>".concat(e,"</tr>\n    <tr>").concat(t,"</tr>\n    <tr>").concat(o,"</tr>\n    </tbody>")}();var o=document.createElement("div");return o.appendChild(e),o.appendChild(t),{domElement:o}}(n))}))).subscribe();var t=document.createElement("p");return t.appendChild(document.createElement("br")),t.appendChild(document.createElement("br")),t.appendChild(document.createElement("br")),t.appendChild(e),t},d=t(24),u=t(25),m=t(27),h=t(7),p={numbers:[{en:"0",vn:"kh\xf4ng"},{en:"1",vn:"m\u1ed9t"},{en:"2",vn:"hai"},{en:"3",vn:"ba"},{en:"4",vn:"b\u1ed3n"},{en:"5",vn:"n\u0103m"},{en:"6",vn:"s\xe1u"},{en:"7",vn:"b\u1ea3y"},{en:"8",vn:"t\xe1m"},{en:"9",vn:"ch\xedn"},{en:"10",vn:"m\u1eeb\u1ecfi"}],animals:[{en:"bear",vn:"g\u1ea5u"},{en:"cat",vn:"m\xe8o"},{en:"dog",vn:"ch\xf3"},{en:"fish",vn:"c\xe1"}],people:[{en:"big brother",vn:"anh trai"},{en:"grandmother",vn:"b\xe0 ngo\u1ea1i , b\xe0 n\u1ed9i ( paternal)"},{en:"dad",vn:"ba , cha , b\u1ed1"},{en:"little sister",vn:"em g\xe1i"},{en:"man",vn:"\u0111\xe0n \xf4ng"},{en:"woman",vn:"\u0111\xe0n b\xe0"},{en:"mom",vn:"m\u1eb9 , m\xe1"}],"the body":[{en:"ear",vn:"tai"},{en:"eyes",vn:"m\u1eafc"},{en:"face",vn:"m\u1eb7t"},{en:"foot",vn:"ch\xe2n"},{en:"hair",vn:"t\xf3c"},{en:"hand",vn:"tay"},{en:"heart",vn:"tim"},{en:"mouth",vn:"mi\u1ec7ng"},{en:"nose",vn:"m\u1ee7i"},{en:"teeth",vn:"r\u0103ng"}],objects:[{en:"brick",vn:"g\u1ea1ch"},{en:"candy",vn:"k\u1eb9o"},{en:"cloud",vn:"m\xe2y"},{en:"house",vn:"nh\xe0"},{en:"pants",vn:"qu\u1ea7n"},{en:"shirt",vn:"\xe1o"},{en:"socks",vn:"d\u1edb"},{en:"wheat",vn:"khoai m\xec"},{en:"shoes",vn:"gi\u1ea7y"}],science:[{en:"planet",vn:"h\xe0nh tin"},{en:"star",vn:"ng\xf4i sao"},{en:"sun",vn:"m\u1eb7t tr\u1eddi"},{en:"moon",vn:"m\u1eb7t tr\u0103ng"}],opposites:[{en:"cold",vn:"l\u1ea1nh"},{en:"dry",vn:"kh\xf4"},{en:"no",vn:"kh\xf4ng"},{en:"hot",vn:"n\xf2ng"},{en:"maybe",vn:"c\xf2 th\u1ec3"},{en:"new",vn:"m\u1edbi"},{en:"pretty",vn:"\u0111\u1eb9p"},{en:"ugly",vn:"x\xe0u"},{en:"wet",vn:"\u01b0\u1eddi"},{en:"yes",vn:"c\xf3"},{en:"old",vn:"c\u0169"}],actions:[{en:"let's go",vn:"\u0111i"},{en:"drink water",vn:"u\u1ed1ng n\u01b0\u1edbc"},{en:"eat rice",vn:"\u0103n c\u01a1m"},{en:"go home",vn:"\u0111i v\u1ec1"},{en:"go take a bath/shower",vn:"\u0111i t\u1ea5m"},{en:"go to school",vn:"\u0111i h\u1ecdc"},{en:"kiss",vn:"h\xf4n"},{en:"go to sleep",vn:"\u0111i ng\u0169 \u0111i"},{en:"go to work",vn:"\u0111i l\xe0m"},{en:"to build",vn:"x\xe2y"},{en:"to drive",vn:"l\xe0i xe"},{en:"to hold",vn:"\xf5m"},{en:"to make",vn:"l\xe1m"},{en:"to nap",vn:"ng\u0169 tr\u01b0a"},{en:"to pick up",vn:"\u1ea5m"},{en:"to play",vn:"ch\u01a1i"},{en:"open the door",vn:"m\u1edb c\u1eeda"},{en:"sleep",vn:"ng\u0169"},{en:"smile",vn:"c\u1eeb\u01a1i"}],numbersAlt:[{en:"eight",vn:"t\xe1m"},{en:"eleven",vn:"m\u1eeb\u1ecfi m\u1ed9t"},{en:"five",vn:"n\u0103m"},{en:"four",vn:"b\u1ed1n"},{en:"nine",vn:"ch\xedn"},{en:"one",vn:"m\u1ed9t"},{en:"seven",vn:"b\u1ea3y"},{en:"ten",vn:"m\u1eeb\u1ecfi"},{en:"thirteen",vn:"m\u1eeb\u1ecfi ba"},{en:"three",vn:"ba"},{en:"twelve",vn:"m\u1eeb\u1ecfi hai"},{en:"two",vn:"hai"},{en:"zero",vn:"kh\xf4ng"},{en:"six",vn:"s\xe1u"}]},b=function(n){var e=Object(h.shuffle)(["vn","en"]),t=function(n,e,t){for(var o=Object(h.sample)(Object.keys(p)),r=void 0,i=void 0,c=void 0;void 0===r;){var a=Object(h.sample)(Object(h.range)(0,p[o].length));c=[i=p[o][a][e]],t&&i===t.answer||(r=p[o][a][n])}if(!i||!c)throw new Error("this error will never be seen");for(;c.length<Math.min(3,p[o].length);){var v=Object(h.sample)(Object(h.range)(0,p[o].length)),s=p[o][v][e];c.includes(s)||c.push(s)}return{category:o,text:r,answer:i,options:c}}(e[0],e[1],n),o=t.category,r=t.text,i=t.answer,c=t.options;return{category:o,text:r,answer:i,options:Object(h.shuffle)(c),shuffle:function(){return Object(h.shuffle)(c)}}},f=new i.a;var g=function(n){return n.map((function(n){return'<button value="'.concat(n,'">').concat(n,"</button>")})).join("&nbsp;")};function w(){console.log("Starting the game!");var n=Date.now(),e={correct:[],incorrect:[],time:0},t=b(),o=!0,r=document.createElement("p"),i=document.createElement("p");r.textContent=t.text,i.innerHTML=g(t.options),c.a(i,"click").pipe(Object(v.a)((function(n){return n})),Object(d.a)((function(n){return function(n){return n&&!!n.value}(n.target)})),Object(v.a)((function(n){return n.target.value})),Object(v.a)((function(n){return n===t.answer?(r.textContent="".concat(t.text,": ").concat(t.answer," \ud83d\udc4d\ud83c\udffb"),o&&e.correct.push(t.answer),function(){t=b(t),r.textContent=t.text,i.innerHTML=g(t.options),o=!0}):(i.innerHTML="\ud83d\udeab",o&&e.incorrect.push(t.answer),o=!1,function(){i.innerHTML=g(t.shuffle())})})),Object(u.a)((function(){e.time=Date.now()-n})),Object(m.a)(600),Object(v.a)((function(n){return n()}))).subscribe();var a=document.createElement("div");a.appendChild(r),a.appendChild(i),a.appendChild(l(e)),f.next({domElement:a})}var y=document.getElementById("root"),k=function(){c.a(document,"click").pipe(Object(a.a)(1),Object(v.a)(w)).subscribe();var n=document.createElement("div");return n.innerHTML="<p>b\u0103\u0341t \u0111\xe2\u0340u</p>",{domElement:n}}();y.appendChild(k.domElement),f.subscribe((function(n){y.innerText="",y.appendChild(n.domElement)})),s.subscribe((function(n){y.innerText="",y.appendChild(n.domElement)})),function(n){if("serviceWorker"in navigator){if(new URL("/vietnamese",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/vietnamese","/service-worker.js");o?(!function(n,e){fetch(n).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):r(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):r(e,n)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.26df190c.chunk.js.map