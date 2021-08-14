(()=>{"use strict";var t,e,n,o,r={568:(t,e,n)=>{n.d(e,{gx:()=>o.gx,x:()=>o.x,fw:()=>o.fw,ev:()=>o.ev,H3:()=>o.H3,v:()=>o.v,Ky:()=>o.Ky});var o=n(234)},234:(t,e,n)=>{function o(){}function r(t,e){for(const n in e)t[n]=e[n];return t}function s(t){return t()}function i(){return Object.create(null)}function c(t){t.forEach(s)}function l(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let u;function f(t,e){return u||(u=document.createElement("a")),u.href=e,t===u.href}function p(t){return 0===Object.keys(t).length}function d(t,...e){if(null==t)return o;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function h(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function m(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function g(t){return null==t?"":t}n.d(e,{f_:()=>$t,P$:()=>X,gx:()=>q,R3:()=>b,f0:()=>r,Lj:()=>T,cK:()=>z,gb:()=>st,q2:()=>m,x:()=>U,YC:()=>ht,vp:()=>gt,RM:()=>k,og:()=>w,bG:()=>_,cS:()=>x,Jv:()=>h,fw:()=>I,gC:()=>pt,Lo:()=>ft,li:()=>ut,dv:()=>rt,CR:()=>lt,S1:()=>vt,$T:()=>y,sB:()=>l,oL:()=>E,ye:()=>mt,ZT:()=>o,Gu:()=>g,ev:()=>G,H3:()=>D,j7:()=>c,N8:()=>a,oW:()=>N,SA:()=>O,v:()=>Z,UF:()=>L,rT:()=>S,Bm:()=>A,Dh:()=>C,Jn:()=>f,Ld:()=>d,fL:()=>j,Ky:()=>W,Ui:()=>it,et:()=>ct,xf:()=>at}),new Set;let v,$=!1;function b(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function k(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function C(){return j(" ")}function x(){return j("")}function E(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function T(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function L(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:T(t,o,e[o])}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function A(t,e){t.value=null==e?"":e}function N(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}function O(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function P(t){v=t}function R(){if(!v)throw new Error("Function called outside component initialization");return v}function D(t){R().$$.on_mount.push(t)}function q(t){R().$$.after_update.push(t)}function G(t){R().$$.on_destroy.push(t)}function U(){const t=R();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function Z(t,e){R().$$.context.set(t,e)}function I(t){return R().$$.context.get(t)}function z(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}new Set;const M=[],K=[],Y=[],B=[],F=Promise.resolve();let H=!1;function J(){H||(H=!0,F.then(tt))}function W(){return J(),F}function X(t){Y.push(t)}let Q=!1;const V=new Set;function tt(){if(!Q){Q=!0;do{for(let t=0;t<M.length;t+=1){const e=M[t];P(e),et(e.$$)}for(P(null),M.length=0;K.length;)K.pop()();for(let t=0;t<Y.length;t+=1){const e=Y[t];V.has(e)||(V.add(e),e())}Y.length=0}while(M.length);for(;B.length;)B.pop()();H=!1,Q=!1,V.clear()}}function et(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}const nt=new Set;let ot;function rt(){ot={r:0,c:[],p:ot}}function st(){ot.r||c(ot.c),ot=ot.p}function it(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function ct(t,e,n,o){if(t&&t.o){if(nt.has(t))return;nt.add(t),ot.c.push((()=>{nt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function lt(t,e){const n=e.token={};function o(t,o,r,s){if(e.token!==n)return;e.resolved=s;let i=e.ctx;void 0!==r&&(i=i.slice(),i[r]=s);const c=t&&(e.current=t)(i);let l=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(rt(),ct(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),st())})):e.block.d(1),c.c(),it(c,1),c.m(e.mount(),e.anchor),l=!0),e.block=c,e.blocks&&(e.blocks[o]=c),l&&tt()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=R();if(t.then((t=>{P(n),o(e.then,1,e.value,t),P(null)}),(t=>{if(P(n),o(e.catch,2,e.error,t),P(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}function at(t,e,n){const o=e.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,n)}const ut="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ft(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}let dt;function ht(t){t&&t.c()}function mt(t,e,n,o){const{fragment:r,on_mount:i,on_destroy:a,after_update:u}=t.$$;r&&r.m(e,n),o||X((()=>{const e=i.map(s).filter(l);a?a.push(...e):c(e),t.$$.on_mount=[]})),u.forEach(X)}function gt(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e,n,r,s,l,a,u=[-1]){const f=v;P(t);const p=t.$$={fragment:null,ctx:null,props:l,update:o,not_equal:s,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:i(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};a&&a(p.root);let d=!1;if(p.ctx=n?n(t,e.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&s(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),d&&function(t,e){-1===t.$$.dirty[0]&&(M.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],p.update(),d=!0,c(p.before_update),p.fragment=!!r&&r(p.ctx),e.target){if(e.hydrate){$=!0;const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(w)}else p.fragment&&p.fragment.c();e.intro&&it(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),$=!1,tt()}P(f)}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(dt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(s).filter(l);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){c(this.$$.on_disconnect)}$destroy(){gt(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!p(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class $t{$destroy(){gt(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!p(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}}},s={};function i(t){var e=s[t];if(void 0!==e)return e.exports;var n=s[t]={exports:{}};return r[t].call(n.exports,n,n.exports,i),n.exports}i.m=r,i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.f={},i.e=t=>Promise.all(Object.keys(i.f).reduce(((e,n)=>(i.f[n](t,e),e)),[])),i.u=t=>t+"."+t+".js",i.miniCssF=t=>t+".css",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="svelte-app:",i.l=(n,o,r,s)=>{if(t[n])t[n].push(o);else{var c,l;if(void 0!==r)for(var a=document.getElementsByTagName("script"),u=0;u<a.length;u++){var f=a[u];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==e+r){c=f;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",e+r),c.src=n),t[n]=[o];var p=(e,o)=>{c.onerror=c.onload=null,clearTimeout(d);var r=t[n];if(delete t[n],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((t=>t(o))),e)return e(o)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),l&&document.head.appendChild(c)}},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t+"../"})(),n=t=>new Promise(((e,n)=>{var o=i.miniCssF(t),r=i.p+o;if(((t,e)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=(i=n[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===t||r===e))return i}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){var i;if((r=(i=s[o]).getAttribute("data-href"))===t||r===e)return i}})(o,r))return e();((t,e,n,o)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=s=>{if(r.onerror=r.onload=null,"load"===s.type)n();else{var i=s&&("load"===s.type?"missing":s.type),c=s&&s.target&&s.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=c,r.parentNode.removeChild(r),o(l)}},r.href=e,document.head.appendChild(r)})(t,r,e,n)})),o={234:0},i.f.miniCss=(t,e)=>{o[t]?e.push(o[t]):0!==o[t]&&{280:1,419:1,420:1,425:1,678:1,914:1}[t]&&e.push(o[t]=n(t).then((()=>{o[t]=0}),(e=>{throw delete o[t],e})))},(()=>{var t={234:0};i.f.j=(e,n)=>{var o=i.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise(((n,r)=>o=t[e]=[n,r]));n.push(o[2]=r);var s=i.p+i.u(e),c=new Error;i.l(s,(n=>{if(i.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,o[1](c)}}),"chunk-"+e,e)}};var e=(e,n)=>{var o,r,[s,c,l]=n,a=0;for(o in c)i.o(c,o)&&(i.m[o]=c[o]);for(l&&l(i),e&&e(n);a<s.length;a++)r=s[a],i.o(t,r)&&t[r]&&t[r][0](),t[s[a]]=0},n=self.webpackChunksvelte_app=self.webpackChunksvelte_app||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),(()=>{var t=i(234);const{window:e}=t.li;function n(t,e,n){const o=t.slice();return o[5]=e[n],o[7]=n,o}function o(e){let n,o,r,s,i,c,l=e[5].name+"";return{c(){n=(0,t.bG)("li"),o=(0,t.bG)("a"),r=(0,t.fL)(l),i=(0,t.Dh)(),(0,t.Lj)(o,"href",s=e[5].link),(0,t.Lj)(o,"class","svelte-1pzffkv"),(0,t.Lj)(n,"class",c=(0,t.Gu)(e[3]===e[5].link?"link is-active":"link")+" svelte-1pzffkv")},m(e,s){(0,t.$T)(e,n,s),(0,t.R3)(n,o),(0,t.R3)(o,r),(0,t.R3)(n,i)},p(e,i){4&i&&l!==(l=e[5].name+"")&&(0,t.rT)(r,l),4&i&&s!==(s=e[5].link)&&(0,t.Lj)(o,"href",s),12&i&&c!==(c=(0,t.Gu)(e[3]===e[5].link?"link is-active":"link")+" svelte-1pzffkv")&&(0,t.Lj)(n,"class",c)},d(e){e&&(0,t.og)(n)}}}function r(r){let s,i,c,l,a,u,f,p,d,h,m,g=r[2],v=[];for(let t=0;t<g.length;t+=1)v[t]=o(n(r,g,t));return{c(){s=(0,t.bG)("header"),i=(0,t.bG)("figure"),c=(0,t.bG)("img"),a=(0,t.Dh)(),u=(0,t.bG)("h2"),f=(0,t.fL)(r[0]),p=(0,t.Dh)(),d=(0,t.bG)("ul");for(let t=0;t<v.length;t+=1)v[t].c();(0,t.Jn)(c.src,l=r[1])||(0,t.Lj)(c,"src",l),(0,t.Lj)(c,"alt",""),(0,t.Lj)(u,"class","svelte-1pzffkv"),(0,t.Lj)(i,"class","svelte-1pzffkv"),(0,t.Lj)(d,"class","svelte-1pzffkv"),(0,t.Lj)(s,"class","svelte-1pzffkv")},m(n,o){(0,t.$T)(n,s,o),(0,t.R3)(s,i),(0,t.R3)(i,c),(0,t.R3)(i,a),(0,t.R3)(i,u),(0,t.R3)(u,f),(0,t.R3)(s,p),(0,t.R3)(s,d);for(let t=0;t<v.length;t+=1)v[t].m(d,null);h||(m=(0,t.oL)(e,"hashchange",r[4]),h=!0)},p(e,[r]){if(2&r&&!(0,t.Jn)(c.src,l=e[1])&&(0,t.Lj)(c,"src",l),1&r&&(0,t.rT)(f,e[0]),12&r){let t;for(g=e[2],t=0;t<g.length;t+=1){const s=n(e,g,t);v[t]?v[t].p(s,r):(v[t]=o(s),v[t].c(),v[t].m(d,null))}for(;t<v.length;t+=1)v[t].d(1);v.length=g.length}},i:t.ZT,o:t.ZT,d(e){e&&(0,t.og)(s),(0,t.RM)(v,e),h=!1,m()}}}function s(t,e,n){let{appTitle:o}=e,{appIcon:r}=e,{appNavLinks:s}=e,i=window.location.hash;return t.$$set=t=>{"appTitle"in t&&n(0,o=t.appTitle),"appIcon"in t&&n(1,r=t.appIcon),"appNavLinks"in t&&n(2,s=t.appNavLinks)},[o,r,s,i,function(){n(3,i=window.location.hash)}]}class c extends t.f_{constructor(e){super(),(0,t.S1)(this,e,s,r,t.N8,{appTitle:0,appIcon:1,appNavLinks:2})}}const l=c;function a(e){let n;return{c(){n=(0,t.bG)("main"),n.innerHTML='<figure class="svelte-ujh9c4"><img src="" alt=""/> \n    <h2>Author</h2></figure> \n  <p></p> \n  <nav><div class="social-container svelte-ujh9c4"><ul class="social-icons svelte-ujh9c4"><li class="svelte-ujh9c4"><a href="https://www.instagram.com/sameer_kavad/" class="svelte-ujh9c4"><i class="fa fa-instagram svelte-ujh9c4"></i></a></li> \n        <li class="svelte-ujh9c4"><a href="https://twitter.com/sameerkavad?s=20" class="svelte-ujh9c4"><i class="fa fa-twitter svelte-ujh9c4"></i></a></li> \n        <li class="svelte-ujh9c4"><a href="https://www.facebook.com/Sameer-Kavad-102497231514261" class="svelte-ujh9c4"><i class="fa fa-facebook svelte-ujh9c4"></i></a></li></ul></div></nav> \n\t<a href="#/admin/create" class="small svelte-ujh9c4">Create new post</a>',(0,t.Lj)(n,"class","svelte-ujh9c4")},m(e,o){(0,t.$T)(e,n,o)},p:t.ZT,i:t.ZT,o:t.ZT,d(e){e&&(0,t.og)(n)}}}class u extends t.f_{constructor(e){super(),(0,t.S1)(this,e,null,a,t.N8,{})}}const f=u;function p(t){if(!t)throw Error("Parameter args is required");if(!t.component==!t.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(t.component&&(t.asyncComponent=()=>Promise.resolve(t.component)),"function"!=typeof t.asyncComponent)throw Error("Parameter asyncComponent must be a function");if(t.conditions){Array.isArray(t.conditions)||(t.conditions=[t.conditions]);for(let e=0;e<t.conditions.length;e++)if(!t.conditions[e]||"function"!=typeof t.conditions[e])throw Error("Invalid parameter conditions["+e+"]")}return t.loadingComponent&&(t.asyncComponent.loading=t.loadingComponent,t.asyncComponent.loadingParams=t.loadingParams||void 0),{component:t.asyncComponent,userData:t.userData,conditions:t.conditions&&t.conditions.length?t.conditions:void 0,props:t.props&&Object.keys(t.props).length?t.props:{},_sveltesparouter:!0}}var d=i(568);const h=[];function m(t,e){return{subscribe:g(t,e).subscribe}}function g(e,n=t.ZT){let o;const r=new Set;function s(n){if((0,t.N8)(e,n)&&(e=n,o)){const t=!h.length;for(const t of r)t[1](),h.push(t,e);if(t){for(let t=0;t<h.length;t+=2)h[t][0](h[t+1]);h.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t.ZT){const l=[i,c];return r.add(l),1===r.size&&(o=n(s)||t.ZT),i(e),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}function v(e,n,o){const r=!Array.isArray(e),s=r?[e]:e,i=n.length<2;return m(o,(e=>{let o=!1;const c=[];let l=0,a=t.ZT;const u=()=>{if(l)return;a();const o=n(r?c[0]:c,e);i?e(o):a=(0,t.sB)(o)?o:t.ZT},f=s.map(((e,n)=>(0,t.Ld)(e,(t=>{c[n]=t,l&=~(1<<n),o&&u()}),(()=>{l|=1<<n}))));return o=!0,u(),function(){(0,t.j7)(f),a()}}))}function $(e){let n,o,r;const s=[e[2]];var i=e[0];function c(e){let n={};for(let e=0;e<s.length;e+=1)n=(0,t.f0)(n,s[e]);return{props:n}}return i&&(n=new i(c()),n.$on("routeEvent",e[7])),{c(){n&&(0,t.YC)(n.$$.fragment),o=(0,t.cS)()},m(e,s){n&&(0,t.ye)(n,e,s),(0,t.$T)(e,o,s),r=!0},p(e,r){const l=4&r?(0,t.Lo)(s,[(0,t.gC)(e[2])]):{};if(i!==(i=e[0])){if(n){(0,t.dv)();const e=n;(0,t.et)(e.$$.fragment,1,0,(()=>{(0,t.vp)(e,1)})),(0,t.gb)()}i?(n=new i(c()),n.$on("routeEvent",e[7]),(0,t.YC)(n.$$.fragment),(0,t.Ui)(n.$$.fragment,1),(0,t.ye)(n,o.parentNode,o)):n=null}else i&&n.$set(l)},i(e){r||(n&&(0,t.Ui)(n.$$.fragment,e),r=!0)},o(e){n&&(0,t.et)(n.$$.fragment,e),r=!1},d(e){e&&(0,t.og)(o),n&&(0,t.vp)(n,e)}}}function b(e){let n,o,r;const s=[{params:e[1]},e[2]];var i=e[0];function c(e){let n={};for(let e=0;e<s.length;e+=1)n=(0,t.f0)(n,s[e]);return{props:n}}return i&&(n=new i(c()),n.$on("routeEvent",e[6])),{c(){n&&(0,t.YC)(n.$$.fragment),o=(0,t.cS)()},m(e,s){n&&(0,t.ye)(n,e,s),(0,t.$T)(e,o,s),r=!0},p(e,r){const l=6&r?(0,t.Lo)(s,[2&r&&{params:e[1]},4&r&&(0,t.gC)(e[2])]):{};if(i!==(i=e[0])){if(n){(0,t.dv)();const e=n;(0,t.et)(e.$$.fragment,1,0,(()=>{(0,t.vp)(e,1)})),(0,t.gb)()}i?(n=new i(c()),n.$on("routeEvent",e[6]),(0,t.YC)(n.$$.fragment),(0,t.Ui)(n.$$.fragment,1),(0,t.ye)(n,o.parentNode,o)):n=null}else i&&n.$set(l)},i(e){r||(n&&(0,t.Ui)(n.$$.fragment,e),r=!0)},o(e){n&&(0,t.et)(n.$$.fragment,e),r=!1},d(e){e&&(0,t.og)(o),n&&(0,t.vp)(n,e)}}}function y(e){let n,o,r,s;const i=[b,$],c=[];function l(t,e){return t[1]?0:1}return n=l(e),o=c[n]=i[n](e),{c(){o.c(),r=(0,t.cS)()},m(e,o){c[n].m(e,o),(0,t.$T)(e,r,o),s=!0},p(e,[s]){let a=n;n=l(e),n===a?c[n].p(e,s):((0,t.dv)(),(0,t.et)(c[a],1,1,(()=>{c[a]=null})),(0,t.gb)(),o=c[n],o?o.p(e,s):(o=c[n]=i[n](e),o.c()),(0,t.Ui)(o,1),o.m(r.parentNode,r))},i(e){s||((0,t.Ui)(o),s=!0)},o(e){(0,t.et)(o),s=!1},d(e){c[n].d(e),e&&(0,t.og)(r)}}}function w(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const k=m(null,(function(t){t(w());const e=()=>{t(w())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}})),_=(v(k,(t=>t.location)),v(k,(t=>t.querystring)),g(void 0));function j(e,n,o){let{routes:r={}}=n,{prefix:s=""}=n,{restoreScrollState:i=!1}=n;class c{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:o}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,r,s,i=[],c="",l=t.split("/");for(l[0]||l.shift();r=l.shift();)"*"===(n=r[0])?(i.push("wild"),c+="/(.*)"):":"===n?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),c+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~o?"?":"")+"\\"+r.substring(s))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+"/?$","i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=o}match(t){if(s)if("string"==typeof s){if(!t.startsWith(s))return null;t=t.substr(s.length)||"/"}else if(s instanceof RegExp){const e=t.match(s);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;){try{n[this._keys[o]]=decodeURIComponent(e[o+1]||"")||null}catch(t){n[this._keys[o]]=null}o++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const l=[];r instanceof Map?r.forEach(((t,e)=>{l.push(new c(e,t))})):Object.keys(r).forEach((t=>{l.push(new c(t,r[t]))}));let a=null,u=null,f={};const p=(0,d.x)();async function h(t,e){await(0,d.Ky)(),p(t,e)}let m=null,g=null;i&&(g=t=>{m=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",g),(0,d.gx)((()=>{m?window.scrollTo(m.__svelte_spa_router_scrollX,m.__svelte_spa_router_scrollY):window.scrollTo(0,0)})));let v=null,$=null;const b=k.subscribe((async t=>{v=t;let e=0;for(;e<l.length;){const n=l[e].match(t.location);if(!n){e++;continue}const r={route:l[e].path,location:t.location,querystring:t.querystring,userData:l[e].userData,params:n&&"object"==typeof n&&Object.keys(n).length?n:null};if(!await l[e].checkConditions(r))return o(0,a=null),$=null,void h("conditionsFailed",r);h("routeLoading",Object.assign({},r));const s=l[e].component;if($!=s){s.loading?(o(0,a=s.loading),$=s,o(1,u=s.loadingParams),o(2,f={}),h("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:u}))):(o(0,a=null),$=null);const e=await s();if(t!=v)return;o(0,a=e&&e.default||e),$=s}return n&&"object"==typeof n&&Object.keys(n).length?o(1,u=n):o(1,u=null),o(2,f=l[e].props),void h("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:u})).then((()=>{_.set(u)}))}o(0,a=null),$=null,_.set(void 0)}));return(0,d.ev)((()=>{b(),g&&window.removeEventListener("popstate",g)})),e.$$set=t=>{"routes"in t&&o(3,r=t.routes),"prefix"in t&&o(4,s=t.prefix),"restoreScrollState"in t&&o(5,i=t.restoreScrollState)},e.$$.update=()=>{32&e.$$.dirty&&(history.scrollRestoration=i?"manual":"auto")},[a,u,f,r,s,i,function(n){t.cK.call(this,e,n)},function(n){t.cK.call(this,e,n)}]}class C extends t.f_{constructor(e){super(),(0,t.S1)(this,e,j,y,t.N8,{routes:3,prefix:4,restoreScrollState:5})}}const x=C;function E(e){let n,o,r,s,i;return o=new l({props:{appTitle:"App",appNavLinks:e[0],appIcon:""}}),s=new x({props:{routes:e[1]}}),{c(){n=(0,t.bG)("main"),(0,t.YC)(o.$$.fragment),r=(0,t.Dh)(),(0,t.YC)(s.$$.fragment),(0,t.Lj)(n,"class","svelte-1evlp8d")},m(e,c){(0,t.$T)(e,n,c),(0,t.ye)(o,n,null),(0,t.R3)(n,r),(0,t.ye)(s,n,null),i=!0},p:t.ZT,i(e){i||((0,t.Ui)(o.$$.fragment,e),(0,t.Ui)(s.$$.fragment,e),i=!0)},o(e){(0,t.et)(o.$$.fragment,e),(0,t.et)(s.$$.fragment,e),i=!1},d(e){e&&(0,t.og)(n),(0,t.vp)(o),(0,t.vp)(s)}}}function T(t){return[[{name:"Sports",link:"#/sports"},{name:"Culture",link:"#/culture"},{name:"Politics",link:"#/politics"},{name:"About",link:"#/"}],{"/":f,"/culture":p({asyncComponent:()=>Promise.all([i.e(86),i.e(852),i.e(420)]).then(i.bind(i,420))}),"/sports":p({asyncComponent:()=>Promise.all([i.e(86),i.e(852),i.e(678)]).then(i.bind(i,678))}),"/politics":p({asyncComponent:()=>Promise.all([i.e(86),i.e(852),i.e(280)]).then(i.bind(i,280))}),"/posts/:postId":p({asyncComponent:()=>Promise.all([i.e(86),i.e(852),i.e(425)]).then(i.bind(i,425))}),"/admin/create":p({asyncComponent:()=>Promise.all([i.e(86),i.e(419)]).then(i.bind(i,419))}),"*":p({asyncComponent:()=>i.e(914).then(i.bind(i,914))})}]}class L extends t.f_{constructor(e){super(),(0,t.S1)(this,e,T,E,t.N8,{})}}new L({target:document.body,props:{name:"world"}})})()})();