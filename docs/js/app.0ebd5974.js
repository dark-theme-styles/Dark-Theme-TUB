(function(t){function e(e){for(var a,n,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)n=s[u],o[n]&&d.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);v&&v(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,n=1;n<r.length;n++){var s=r[n];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=r[0]))}return t}var a={},n={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"aee98f26"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r={about:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise(function(e,r){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"a5203488"}[t]+".css",o=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===a||u===o)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.request=a,delete n[t],v.parentNode.removeChild(v),r(i)},v.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(v)}).then(function(){n[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,r){a=o[t]=[e,r]});e.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+n+")");i.type=a,i.request=n,r[1](i)}o[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(r,a,function(e){return t[e]}.bind(null,a));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/Dark-Theme-TUB/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var v=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0101":function(t,e,r){},"07a4":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("ce5b"),o=r.n(n),i=r("998c"),s=r.n(i),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"app",dark:""}},[r("v-content",{attrs:{id:"v-content"}},[r("v-card",{staticClass:"shake-animation",attrs:{id:"window",color:"primary"}},[r("div",{attrs:{id:"nav"}},[r("v-toolbar",{attrs:{flat:"",color:"success"}},[r("v-toolbar-title",[t._v("\n            $: "+t._s(t.headerTextCurrent)+"\n            "),r("transition",{attrs:{name:"cursor-fade"}},[t.typingText?r("span",[t._v("_")]):t._e()])],1),r("v-spacer"),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[r("v-btn",{attrs:{flat:"",to:"/"}},[t._v("Home")]),r("v-btn",{attrs:{flat:"",to:"/preview"}},[t._v("Preview")]),r("v-btn",{attrs:{flat:"",to:"/todo"}},[t._v("Todo")])],1),r("v-menu",{attrs:{id:"burger-menu",left:"","nudge-bottom":"5","offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({staticClass:"hidden-md-and-up",attrs:{dark:"",icon:""}},a),[r("v-icon",[t._v("menu")])],1)]}}])},[r("v-list",{attrs:{id:"burger-menu-list"}},[r("v-list-tile",[r("v-btn",{attrs:{flat:"",to:"/"}},[t._v("Home")])],1),r("v-list-tile",[r("v-btn",{attrs:{flat:"",to:"/preview"}},[t._v("Preview")])],1),r("v-list-tile",[r("v-btn",{attrs:{flat:"",to:"/todo"}},[t._v("Todo")])],1)],1)],1),r("v-btn",{attrs:{flat:"",icon:"",color:"error"},on:{click:t.shakeAnimationF}},[r("v-icon",[t._v("close")])],1)],1)],1),r("router-view"),r("v-footer",{staticClass:"pa-2 caption",attrs:{height:"23"}},[r("v-spacer"),r("div",[t._v("© "+t._s((new Date).getFullYear()))])],1)],1)],1)],1)},c=[],u=(r("7f7f"),r("5118")),d={name:"App",methods:{shakeAnimationF:function(){for(var t=[document.getElementById("window")],e=function(){var t=a[r];t.classList.toggle("shake-animation-active"),Object(u["setTimeout"])(function(){t.classList.remove("shake-animation-active")},300)},r=0,a=t;r<a.length;r++)e()},displayTitle:function(){Object(u["clearInterval"])(this.intervallID),this.typingText=!0,this.headerTextCurrent="",this.headerText=this.$route.name;var t=this.headerText.length,e=200/t,r=this;this.intervallID=Object(u["setInterval"])(function(){var e=r.headerTextCurrent.length;r.headerTextCurrent+=r.headerText[e],r.headerTextCurrent.length>=t&&(Object(u["clearInterval"])(r.intervallID),Object(u["setTimeout"])(function(){r.typingText=!1},500))},e)}},data:function(){return{headerText:this.$route.name,headerTextCurrent:"",intervallID:null,typingText:!0}},mounted:function(){this.displayTitle()},watch:{$route:function(){this.displayTitle()}}},v=d,f=(r("5c0b"),r("2877")),h=Object(f["a"])(v,l,c,!1,null,null,null),m=h.exports,p=r("8c4f"),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("v-container",{attrs:{"grid-list-md":"",fluid:""}},[r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("Section",{attrs:{icon:"extension",title:"Plugin for UserCSS"}},[r("div",{staticClass:"text-container"},[t._v("\n            First download a plug-in for your web browser to install the CSS.\n            "),r("br"),t._v("We prefer\n            "),r("a",{attrs:{href:"https://github.com/openstyles/stylus"}},[t._v("'Stylus'")]),t._v(".\n            "),r("ul",[r("li",[t._v("Stylus")]),r("ul",[r("li",[t._v("\n                  for Chrome:\n                  "),r("br"),r("a",{attrs:{href:"https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne"}},[t._v("Install Chrome extension")])]),r("li",[t._v("\n                  for Firefox:\n                  "),r("br"),r("a",{attrs:{href:"https://addons.mozilla.org/firefox/addon/styl-us/"}},[t._v("\n                    Install Firefox\n                    extension\n                  ")])]),r("li",[t._v("\n                  for Opera:\n                  "),r("br"),r("a",{attrs:{href:"https://addons.opera.com/extensions/details/stylus/"}},[t._v("\n                    Install Opera\n                    extension\n                  ")])])])]),r("div",{staticClass:"window__content__text"},[t._v("\n              For Safari on Mac, we recommend\n              "),r("a",{attrs:{href:"https://cascadea.app/"}},[t._v("'Cascadea'")]),t._v(".\n            ")])])])],1)],1),r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("Section",{attrs:{icon:"code",title:"Install UserCSS Style"}},[r("v-layout",{attrs:{id:"install-card",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("ThemeCard",{attrs:{headline:"ISIS TUB",content:"Dark theme for most ISIS TUB modules and overall ISIS TUB site.",link:"https://raw.githubusercontent.com/dark-theme-styles/Dark-Theme-TUB/master/dark-theme-isis-tub.user.css",buttonText:"Install UserCSS"}})],1),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("ThemeCard",{attrs:{headline:"MOSES TUB",content:"Dark theme for most Dark theme for most MOSES TUB modules and overall MOSES TUB site.",link:"https://raw.githubusercontent.com/dark-theme-styles/Dark-Theme-TUB/master/dark-theme-moses-tub.user.css",buttonText:"Install UserCSS"}})],1),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("ThemeCard",{attrs:{headline:"Homepage TUB",content:"Dark theme for TUB homepage.",link:"",buttonText:"soon™",showTooltip:""}})],1)],1)],1)],1)],1),r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("Section",{attrs:{icon:"link",title:"Links"}},[r("div",{staticClass:"text-container"},[r("ul",[r("li",[t._v("\n                Visit our Dark-Theme-TUB website for more informations:\n                "),r("p",[r("img",{attrs:{id:"icons",src:"https://raw.githubusercontent.com/dark-theme-styles/dark-theme-styles.github.io/master/images/favicon/android-chrome-512x512.png",alt:"homepage favicon"}}),r("a",{attrs:{href:"https://dark-theme-styles.github.io/Dark-Theme-TUB",target:"_blank"}},[t._v("visit project website")])])]),r("li",[t._v("\n                Visit our Homepage for more dark theme projects:\n                "),r("p",[r("img",{attrs:{id:"icons",src:"https://raw.githubusercontent.com/dark-theme-styles/dark-theme-styles.github.io/master/images/favicon/android-chrome-512x512.png",alt:"homepage favicon"}}),r("a",{attrs:{href:"https://dark-theme-styles.github.io",target:"_blank"}},[t._v("visit Homepage")])])]),r("li",[t._v("\n                GitHub Dark-Theme-TUB project:\n                "),r("p",[r("a",{attrs:{href:"https://github.com/dark-theme-styles/Dark-Theme-TUB",target:"_blank"}},[t._v("visit on GitHub")])])]),r("li",[t._v("\n                GitHub Dark Theme Styles Organization page:\n                "),r("p",[r("a",{attrs:{href:"https://github.com/dark-theme-styles",target:"_blank"}},[t._v("visit on GitHub")])])])])])])],1)],1),r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("Section",{attrs:{icon:"code",title:"Authors"}},[r("div",{staticClass:"window__content"},[r("v-layout",{attrs:{id:"users-card",wrap:"","justify-content-center":""}},[r("v-layout",{attrs:{"justify-content-center":""}},[r("v-flex",{attrs:{xs12:"","offset-xs1":"","offset-sm1":"",sm12:"","offset-md3":""}},[r("ImageCard",{attrs:{imageSrc:"https://avatars1.githubusercontent.com/u/34386047",titleName:"B4rtware",linkHref:"https://github.com/B4rtware"}})],1)],1),r("v-layout",{attrs:{"justify-content-center":""}},[r("v-flex",{attrs:{xs12:"","offset-xs1":"","offset-sm1":"",sm12:"","offset-md3":""}},[r("ImageCard",{attrs:{imageSrc:"https://avatars1.githubusercontent.com/u/38668040",titleName:"Re-Krass",linkHref:"https://github.com/Re-Krass"}})],1)],1)],1)],1)])],1)],1)],1)],1)},b=[],_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{id:"theme-card",color:"accent",height:"100%",tile:""}},[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline mb-0",attrs:{id:"theme-card-headline"}},[t._v(t._s(t.headline))]),r("div",{staticClass:"mt-4"},[t._v(t._s(t.content))])])]),r("v-card-actions",{attrs:{id:"v-card-actions"}},[t.showTooltip?r("v-tooltip",{attrs:{bottom:"",color:"#424242"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({attrs:{block:"",raised:"",color:"success",href:t.link,target:"_blank"}},a),[t._v(t._s(t.buttonText))])]}}],null,!1,287330143)},[r("span",[t._v("coming soon™")])]):r("v-btn",{attrs:{block:"",raised:"",color:"success",href:t.link,target:"_blank"}},[t._v(t._s(t.buttonText))])],1)],1)},y=[],k={name:"ThemeCard",props:{headline:String,content:String,buttonText:String,link:String,showTooltip:Boolean}},x=k,T=(r("accd"),Object(f["a"])(x,_,y,!1,null,"d84cc722",null)),w=T.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{id:"image-cards",color:"accent"}},[r("v-img",{attrs:{src:t.imageSrc,width:"200px",height:"200px",alt:t.titleName+" profile picture"}}),r("v-card-title",{attrs:{"primary-title":"",id:"v-card-title"}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v("\n        "+t._s(t.titleName)+"\n        "),r("a",{attrs:{href:t.linkHref,target:"_blank"}},[r("v-icon",{attrs:{id:"user-link"}},[t._v("link")])],1)])])])],1)},C=[],j={name:"ImageCard",props:{imageSrc:String,titleName:String,linkHref:String}},O=j,I=(r("b6e8"),Object(f["a"])(O,S,C,!1,null,"7aa3c70d",null)),B=I.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("v-app",{attrs:{id:"inspire"}},[r("div",{staticClass:"text-xs-center"},[r("v-btn",{staticClass:"white--text",attrs:{disabled:t.dialog,loading:t.dialog,color:"purple darken-2"},on:{click:function(e){t.dialog=!0}}},[t._v("Start loading")]),r("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{attrs:{color:"primary",dark:""}},[r("v-card-text",[t._v("coming soon™")])],1)],1)],1)])],1)},D=[],E={data:function(){return{dialog:!1}},watch:{dialog:function(t){var e=this;t&&setTimeout(function(){return e.dialog=!1},4e3)}}},H=E,P=Object(f["a"])(H,U,D,!1,null,null,null),$=P.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",[r("v-list-tile",{staticClass:"pb-2"},[r("v-list-tile-avatar",{attrs:{id:"v-list-tile-avatar"}},[r("v-icon",[t._v(t._s(t.icon))])],1),r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(t.title))])],1)],1),t._t("default")],2)},A=[],M={name:"Section",props:{icon:String,title:String}},F=M,L=Object(f["a"])(F,N,A,!1,null,null,null),G=L.exports,q={name:"home",components:{ThemeCard:w,ImageCard:B,DialogWindow:$,Section:G}},z=q,J=(r("5f6b"),Object(f["a"])(z,g,b,!1,null,"63690464",null)),K=J.exports;a["default"].use(p["a"]);var R=new p["a"]({routes:[{path:"/",name:"home",component:K},{path:"/preview",name:"preview",component:function(){return r.e("about").then(r.bind(null,"5b0b"))}},{path:"/todo",name:"todo",component:function(){return r.e("about").then(r.bind(null,"a3b3"))}}]});r("bf40");a["default"].config.productionTip=!1,a["default"].use(o.a,{theme:{primary:"#1e1e1e",secondary:"#f5f5f5",accent:"#2d2d2d",error:"#ff3c4e",info:"#c8c8c8",success:"#39b54a",warning:"#319ae3"}}),a["default"].use(s.a),new a["default"]({router:R,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var a=r("5e27"),n=r.n(a);n.a},"5e27":function(t,e,r){},"5f6b":function(t,e,r){"use strict";var a=r("7918"),n=r.n(a);n.a},7918:function(t,e,r){},accd:function(t,e,r){"use strict";var a=r("0101"),n=r.n(a);n.a},b6e8:function(t,e,r){"use strict";var a=r("07a4"),n=r.n(a);n.a}});
//# sourceMappingURL=app.0ebd5974.js.map