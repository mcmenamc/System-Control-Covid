(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},a={app:0},s=[];function i(t){return c.p+"js/"+({Login:"Login",Register:"Register",about:"about",error:"error"}[t]||t)+"."+{Login:"d852dabb",Register:"2ccbf741",about:"4491247a","chunk-2d0c7a95":"bdd04921","chunk-2d0d9f7e":"925d4289",error:"abde61db"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1,error:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({Login:"Login",Register:"Register",about:"about",error:"error"}[t]||t)+"."+{Login:"31d6cfe0",Register:"31d6cfe0",about:"ed2198da","chunk-2d0c7a95":"31d6cfe0","chunk-2d0d9f7e":"31d6cfe0",error:"da8d5b60"}[t]+".css",a=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===a))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[t],f.parentNode.removeChild(f),r(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0082":function(t,e,r){},"034f":function(t,e,r){"use strict";r("85ec")},2695:function(t,e,r){t.exports=r.p+"img/fondo.41633050.jpg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.$vuetify.breakpoint.mdAndUp?n("v-app-bar",{staticClass:"d-flex justify-center",attrs:{elevation:"0",app:"",color:t.bgcolor}},[n("v-img",{staticClass:"mr-5 poiter",attrs:{width:"180",src:r("9d64")},on:{click:function(e){return t.inicio()}}}),t._l(t.links,(function(e){return n("v-btn",{key:e.id,staticClass:"mr-2 custom-transform-class text-none text-md-h6",attrs:{text:e.btn,to:e.url,color:e.color,plain:e.btn}},[t._v(" "+t._s(e.name)+" ")])}))],2):t._e(),t.$vuetify.breakpoint.smAndDown?n("v-app-bar",{attrs:{elevation:"0",app:"",color:t.bgcolor}},[n("v-row",{staticClass:"flex justify-center align-center"},[n("v-col",{staticClass:"d-flex justify-start",attrs:{cols:"6",sm:"4"}},[n("v-img",{attrs:{width:"150",src:r("9d64")}})],1),n("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"6",sm:"4"}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-icon",[t._v(t._s("fas "+(t.drawer?"fa-times":"fa-bars")))])],1)],1)],1)],1):t._e(),n("v-navigation-drawer",{attrs:{app:"",temporary:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("div",{staticClass:"pa-2"},[n("v-btn",{attrs:{to:t.links[4].url,color:t.links[4].color,block:""}},[t._v(" "+t._s(t.links[4].name)+" ")])],1),n("div",{class:"pa-2 "},[n("v-btn",{attrs:{to:t.links[5].url,color:t.links[5].color,block:""}},[t._v(" "+t._s(t.links[5].name)+" ")])],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[t._v("SISTEMA-COVID-19")])],1)],1),n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"primary--text text--accent-4"}},t._l(t.links,(function(e){return n("v-list-item",{key:e.id,class:e.btn?"":"d-none",attrs:{to:e.url}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1)],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("XyzTransition",{attrs:{appear:"",xyz:"fade in-left-100% out-right-100%",mode:"out-in"}},[n("router-view")],1)],1)],1),n("v-footer",{attrs:{color:"primary lighten-1",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(e){return n("v-btn",{key:e.id,staticClass:"my-2",attrs:{color:"white",text:"",rounded:""}},[t._v(" "+t._s(e.name)+" ")])})),n("v-col",{staticClass:"primary lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Sistema Control Covid")])])],2)],1)],1)},a=[],s={name:"App",data:function(){return{links:[{name:"Inicio",url:"/",btn:!0,color:"primary",icon:"fas fa-home"},{name:"Acerca de",url:"/about",btn:!0,color:"primary",icon:"fas fa-question-circle"},{name:"Contacto",url:"/contact",btn:!0,color:"primary",icon:"fas fa-info-circle"},{name:"Sintomas",url:"/sintomas",btn:!0,color:"primary",icon:"fas fa-ambulance"},{name:"Entrar",url:"/login",btn:!1,color:"primary"},{name:"Registrar",url:"/register",btn:!1,color:"success"}],bgcolor:"transparent",drawer:!1}},mounted:function(){var t=this;window.onscroll=function(){t.changeColor()}},methods:{changeColor:function(){document.body.scrollTop>75||document.documentElement.scrollTop>75?this.bgcolor="white":this.bgcolor="transparent"},inicio:function(){"/"!==this.$router.currentRoute.path&&this.$router.push("/")}}},i=s,c=(r("034f"),r("2877")),l=Object(c["a"])(i,o,a,!1,null,null,null),u=l.exports,d=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-img",{attrs:{height:t.$vuetify.breakpoint.mobile?"auto":"92vh",src:r("2695")}},[n("v-row",{class:"img-fondo d-flex flex-wrap justify-center "+(t.$vuetify.breakpoint.mobile?"my-4":"my-12")},[n("v-col",{attrs:{cols:"12",md:"11",lg:"9",xl:"7"}},[n("v-row",{staticClass:"align-center"},[n("v-col",{attrs:{md:"6"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("v-img",{attrs:{src:r("6044")}})],1),n("v-row",{staticClass:"justify-center"},[n("v-col",{staticClass:"my-3",attrs:{cols:"10"}},[n("p",{staticClass:"text-justify text-normal"},[t._v(" El coronavirus (COVID-19) se informó por primera vez en Wuhan, Hubei, China, en diciembre de 2019; el brote fue reconocido posteriormente como una pandemia por la Organización Mundial de la Salud (OMS) el 11 de marzo de 2020. ")])])],1),n("v-row",{staticClass:"d-flex justify-center"},[n("v-col",{attrs:{cols:"auto",sm:"4",md:"5",lg:"4"}},[n("v-btn",{staticClass:"text-none",attrs:{rounded:"",color:"primary"}},[t._v("Como Protegerse "),n("v-icon",{attrs:{right:""}},[t._v("fas fa-shield-virus")])],1)],1),n("v-col",{attrs:{cols:"auto",sm:"4",md:"5",lg:"4"}},[n("v-btn",{attrs:{rounded:"",href:"https://previenecovid19.puebla.gob.mx/",target:"_blank",text:"",color:"primary"}},[t._v("Acerca de Covid-19 🡢 ")])],1)],1)],1),n("v-row",{staticClass:"d-flex justify-center my-5"},[n("v-col",{staticClass:"text-one txt-size",attrs:{align:"center",cols:"12"}},[t._v("Casos Covid-19")]),n("v-col",{staticClass:"text-one rojo-text txt-letters",attrs:{align:"center",cols:"auto",sm:"4"}},[t._v("MUNDIAL "),n("p",{staticClass:"grey--text"},[t._v(t._s(t.covid.cases.toLocaleString()))])]),n("v-col",{staticClass:"text-one rojo-text txt-letters",attrs:{cols:"auto",sm:"4"}},[t._v(" FALLECIDOS "),n("p",{staticClass:"grey--text"},[t._v(" "+t._s(t.covid.deaths.toLocaleString())+" ")])]),n("v-col",{staticClass:"text-one rojo-text txt-letters",attrs:{cols:"auto",sm:"4"}},[t._v("RECUPERADOS "),n("p",{staticClass:"grey--text"},[t._v(" "+t._s(t.covid.recovered.toLocaleString())+" ")])])],1)],1),n("v-col",{attrs:{md:"6"}},[n("v-img",{attrs:{contain:"",src:r("a732")}})],1)],1)],1)],1)],1),n("v-row",{staticClass:"my-10 d-flex justify-center white"},[n("v-col",{attrs:{cols:"12",md:"11",lg:"9",xl:"8"}},[n("v-row",{staticClass:"my-16"},[n("v-col",{staticClass:"error",attrs:{cols:"7"}}),n("v-col",{staticClass:"info",attrs:{cols:"5"}})],1)],1)],1)],1)},p=[],m={name:"Home",data:function(){return{covid:{cases:0,deaths:0,recovered:0},dialog:!1}},created:function(){this.getCovid()},methods:{getCovid:function(){var t=this;this.axios.get("https://coronavirus-19-api.herokuapp.com/all").then((function(e){t.covid=e.data}))}}},v=m,g=(r("f87b"),Object(c["a"])(v,f,p,!1,null,"632d2abb",null)),h=g.exports;n["default"].use(d["a"]);var b=[{path:"/user/:id",component:function(){return r.e("chunk-2d0c7a95").then(r.bind(null,"5224"))},meta:{requiresAuth:!0},children:[{path:"/",name:"User",component:function(){return r.e("chunk-2d0d9f7e").then(r.bind(null,"6a30"))}}]},{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"*",name:"NotFound",component:function(){return r.e("error").then(r.bind(null,"9703"))}},{path:"/login",name:"Login",component:function(){return r.e("Login").then(r.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return r.e("Register").then(r.bind(null,"73cf"))}}],y=new d["a"]({mode:"history",base:"/",routes:b}),x=y,_=r("2f62");n["default"].use(_["a"]);var C=new _["a"].Store({state:{user:{id:"",name:"",email:"",role:"",token:"",avatar:"",created_at:"",deleted_at:""}},mutations:{},actions:{},modules:{}}),w=r("ce5b"),k=r.n(w);r("bf40");n["default"].use(k.a);var j=new k.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#2a81ea",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"fa"}}),S=(r("e792"),r("d5e8"),r("15f5"),r("5496")),L=(r("bbf4"),r("1dce")),O=r.n(L),A=r("f9d5"),E=r.n(A),P=(r("4413"),r("bc3a")),R=r.n(P),F=r("130e");n["default"].use(E.a),n["default"].use(S["a"]),n["default"].use(O.a),n["default"].use(F["a"],R.a),R.a.defaults.baseURL="https://sistema-control-covid.herokuapp.com/api",new n["default"]({router:x,store:C,vuetify:j,render:function(t){return t(u)}}).$mount("#app")},6044:function(t,e,r){t.exports=r.p+"img/coronovirus.61462894.jpg"},"85ec":function(t,e,r){},"9d64":function(t,e,r){t.exports=r.p+"img/logo.8f11d4ea.png"},a732:function(t,e,r){t.exports=r.p+"img/imageb5.9af89cd3.png"},f87b:function(t,e,r){"use strict";r("0082")}});
//# sourceMappingURL=app.0c2a09e3.js.map