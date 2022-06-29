(function(){"use strict";var t={7003:function(t,e,n){var o=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("NavBar"),n("v-main",[n("router-view")],1),n("FooterComp")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"surface",light:""}},[n("v-tabs",{attrs:{"align-with-title":""}},[n("v-tab",{attrs:{to:"/"}},[t._v("INICIO")]),n("v-tab",{attrs:{to:"/description"}},[t._v("EXPERIENCIA")]),n("v-tab",{attrs:{to:"/portfolio"}},[t._v("PROYECTOS")])],1)],1)},s=[],u=n(1001),l=n(3453),c=n.n(l),f=n(426),p=n(4227),v=n(3458),d={},h=(0,u.Z)(d,a,s,!1,null,null,null),m=h.exports;c()(h,{VAppBar:f.Z,VTab:p.Z,VTabs:v.Z});var b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{padless:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Desarrollado por Sebastián Castillo Soto")])])],1)},g=[],y=n(2102),C=n(899),w={},Z=(0,u.Z)(w,b,g,!1,null,null,null),O=Z.exports;c()(Z,{VCol:y.Z,VFooter:C.Z});var _={name:"App",data:()=>({}),components:{NavBar:m,FooterComp:O}},E=_,S=n(7524),k=n(7877),A=(0,u.Z)(E,r,i,!1,null,null,null),T=A.exports;c()(A,{VApp:S.Z,VMain:k.Z});var j=n(8345),V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:""}},[o("v-row",{staticClass:"align-center"},[o("v-col",{attrs:{cols:"4"}},[o("v-img",{attrs:{src:n(3405)}})],1),o("v-col",{staticClass:"text-center",attrs:{cols:"8"}},[o("h2",{staticClass:"text-h2 py-2"},[t._v("SEBASTIÁN CASTILLO SOTO")]),o("h3",{staticClass:"text-h3"},[t._v("PSICÓLOGO Y DESARROLLADOR WEB")])])],1)],1)},x=[],N={name:"HomeView"},P=N,I=n(9846),L=n(7047),B=n(2877),F=(0,u.Z)(P,V,x,!1,null,null,null),D=F.exports;c()(F,{VCol:y.Z,VContainer:I.Z,VImg:L.Z,VRow:B.Z}),o.Z.use(j.Z);const R=[{path:"/",name:"home",component:D},{path:"/description",name:"description",component:()=>n.e(443).then(n.bind(n,7221))},{path:"/portfolio",name:"portfolio",component:()=>n.e(880).then(n.bind(n,3880))},{path:"/:catchAll(.*)",name:"ErrorView",component:()=>n.e(565).then(n.bind(n,1565))}],M=new j.Z({mode:"history",base:"/sebastiancastillosoto-cv/",routes:R});var $=M,Y=n(629);o.Z.use(Y.ZP);var q=new Y.ZP.Store({state:{portfolio:[{src:"https://ia601408.us.archive.org/2/items/sc139-githubportfolio/Satournow.png",link:"https://sebastiancastillo139.github.io/Satournow/",name:"Sa-Tour-Now!"},{src:"https://ia601408.us.archive.org/2/items/sc139-githubportfolio/viajeschile.png",link:"https://sebastiancastillo139.github.io/Viajes-Chile/",name:"Viajes Chile"},{src:"https://ia601408.us.archive.org/2/items/sc139-githubportfolio/meetandcoffee.png",link:"https://sebastiancastillo139.github.io/meet-and-coffee-in-vue/",name:"Meet & Coffee"}]},getters:{getPortfolio(t){return t.portfolio}},mutations:{},actions:{},modules:{}}),H=n(1910);o.Z.use(H.Z);var G=new H.Z({});o.Z.config.productionTip=!1,new o.Z({router:$,store:q,vuetify:G,render:t=>t(T)}).$mount("#app")},3405:function(t,e,n){t.exports=n.p+"img/profilepic.d5b53284.jpg"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],i=t[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+(443===t?"about":t)+"."+{443:"07888a14",565:"80b68982",880:"5d32b578"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{565:"bb335e43",880:"8476bcae"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="sebastiancastillosoto-cv:";n.l=function(o,r,i,a){if(t[o])t[o].push(r);else{var s,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+i){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=o),t[o]=[r];var p=function(e,n){s.onerror=s.onload=null,clearTimeout(v);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/sebastiancastillosoto-cv/"}(),function(){var t=function(t,e,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=i,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===t||i===e)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(e(a,s))return r();t(o,s,r,i)}))},r={143:0};n.f.miniCss=function(t,e){var n={565:1,880:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(e),s=new Error,u=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],s=o[1],u=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var c=u(n)}for(e&&e(o);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunksebastiancastillosoto_cv"]=self["webpackChunksebastiancastillosoto_cv"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7003)}));o=n.O(o)})();
//# sourceMappingURL=app.89dd58d8.js.map