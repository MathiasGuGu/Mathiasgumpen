// compiled 2022-02-14T16:00:44.675Z
(()=>{var De=Object.create;var V=Object.defineProperty;var $e=Object.getOwnPropertyDescriptor;var Ge=Object.getOwnPropertyNames;var qe=Object.getPrototypeOf,ze=Object.prototype.hasOwnProperty;var We=e=>V(e,"__esModule",{value:!0});var ae=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Ve=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let m of Ge(t))!ze.call(e,m)&&(n||m!=="default")&&V(e,m,{get:()=>t[m],enumerable:!(a=$e(t,m))||a.enumerable});return e},se=(e,t)=>Ve(We(V(e!=null?De(qe(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var Ae=ae((qr,q)=>{(function(){var e=typeof window!="undefined"&&window===this?this:typeof global!="undefined"&&global!=null?global:this,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,o,i){r!=Array.prototype&&r!=Object.prototype&&(r[o]=i.value)};function n(){n=function(){},e.Symbol||(e.Symbol=m)}var a=0;function m(r){return"jscomp_symbol_"+(r||"")+a++}function l(){n();var r=e.Symbol.iterator;r||(r=e.Symbol.iterator=e.Symbol("iterator")),typeof Array.prototype[r]!="function"&&t(Array.prototype,r,{configurable:!0,writable:!0,value:function(){return y(this)}}),l=function(){}}function y(r){var o=0;return N(function(){return o<r.length?{done:!1,value:r[o++]}:{done:!0}})}function N(r){return l(),r={next:r},r[e.Symbol.iterator]=function(){return this},r}function b(r){l();var o=r[Symbol.iterator];return o?o.call(r):y(r)}function S(r){if(!(r instanceof Array)){r=b(r);for(var o,i=[];!(o=r.next()).done;)i.push(o.value);r=i}return r}var E=0;function W(r,o){var i=XMLHttpRequest.prototype.send,s=E++;XMLHttpRequest.prototype.send=function(h){for(var g=[],T=0;T<arguments.length;++T)g[T-0]=arguments[T];var M=this;return r(s),this.addEventListener("readystatechange",function(){M.readyState===4&&o(s)}),i.apply(this,g)}}function w(r,o){var i=fetch;fetch=function(s){for(var h=[],g=0;g<arguments.length;++g)h[g-0]=arguments[g];return new Promise(function(T,M){var oe=E++;r(oe),i.apply(null,[].concat(S(h))).then(function(F){o(oe),T(F)},function(F){o(F),M(F)})})}}var _="img script iframe link audio video source".split(" ");function d(r,o){r=b(r);for(var i=r.next();!i.done;i=r.next())if(i=i.value,o.includes(i.nodeName.toLowerCase())||d(i.children,o))return!0;return!1}function I(r){var o=new MutationObserver(function(i){i=b(i);for(var s=i.next();!s.done;s=i.next())s=s.value,(s.type=="childList"&&d(s.addedNodes,_)||s.type=="attributes"&&_.includes(s.target.tagName.toLowerCase()))&&r(s)});return o.observe(document,{attributes:!0,childList:!0,subtree:!0,attributeFilter:["href","src"]}),o}function O(r,o){if(2<r.length)return performance.now();var i=[];o=b(o);for(var s=o.next();!s.done;s=o.next())s=s.value,i.push({timestamp:s.start,type:"requestStart"}),i.push({timestamp:s.end,type:"requestEnd"});for(o=b(r),s=o.next();!s.done;s=o.next())i.push({timestamp:s.value,type:"requestStart"});for(i.sort(function(h,g){return h.timestamp-g.timestamp}),r=r.length,o=i.length-1;0<=o;o--)switch(s=i[o],s.type){case"requestStart":r--;break;case"requestEnd":if(r++,2<r)return s.timestamp;break;default:throw Error("Internal Error: This should never happen")}return 0}function x(r){r=r||{},this.w=!!r.useMutationObserver,this.u=r.minValue||null,r=window.__tti&&window.__tti.e;var o=window.__tti&&window.__tti.o;this.a=r?r.map(function(i){return{start:i.startTime,end:i.startTime+i.duration}}):[],o&&o.disconnect(),this.b=[],this.f=new Map,this.j=null,this.v=-1/0,this.i=!1,this.h=this.c=this.s=null,W(this.m.bind(this),this.l.bind(this)),w(this.m.bind(this),this.l.bind(this)),f(this),this.w&&(this.h=I(this.B.bind(this)))}x.prototype.getFirstConsistentlyInteractive=function(){var r=this;return new Promise(function(o){r.s=o,document.readyState=="complete"?u(r):window.addEventListener("load",function(){u(r)})})};function u(r){r.i=!0;var o=0<r.a.length?r.a[r.a.length-1].end:0,i=O(r.g,r.b);c(r,Math.max(i+5e3,o))}function c(r,o){!r.i||r.v>o||(clearTimeout(r.j),r.j=setTimeout(function(){var s=performance.timing.navigationStart,i=O(r.g,r.b),s=(window.a&&window.a.A?1e3*window.a.A().C-s:0)||performance.timing.domContentLoadedEventEnd-s;if(r.u)var h=r.u;else performance.timing.domContentLoadedEventEnd?(h=performance.timing,h=h.domContentLoadedEventEnd-h.navigationStart):h=null;var g=performance.now();h===null&&c(r,Math.max(i+5e3,g+1e3));var T=r.a;5e3>g-i?i=null:(i=T.length?T[T.length-1].end:s,i=5e3>g-i?null:Math.max(i,h)),i&&(r.s(i),clearTimeout(r.j),r.i=!1,r.c&&r.c.disconnect(),r.h&&r.h.disconnect()),c(r,performance.now()+1e3)},o-performance.now()),r.v=o)}function f(r){r.c=new PerformanceObserver(function(o){o=b(o.getEntries());for(var i=o.next();!i.done;i=o.next())if(i=i.value,i.entryType==="resource"&&(r.b.push({start:i.fetchStart,end:i.responseEnd}),c(r,O(r.g,r.b)+5e3)),i.entryType==="longtask"){var s=i.startTime+i.duration;r.a.push({start:i.startTime,end:s}),c(r,s+5e3)}}),r.c.observe({entryTypes:["longtask","resource"]})}x.prototype.m=function(r){this.f.set(r,performance.now())},x.prototype.l=function(r){this.f.delete(r)},x.prototype.B=function(){c(this,performance.now()+5e3)},e.Object.defineProperties(x.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return[].concat(S(this.f.values()))}}});var p={getFirstConsistentlyInteractive:function(r){return r=r||{},"PerformanceLongTaskTiming"in window?new x(r).getFirstConsistentlyInteractive():Promise.resolve(null)}};typeof q!="undefined"&&q.exports?q.exports=p:typeof define=="function"&&define.amd?define("ttiPolyfill",[],function(){return p}):window.ttiPolyfill=p})()});var Fe=ae((Wr,z)=>{var Ce=function(e){e=e||window;var t=e.document,n=function(u){var c=!1;if(u.getBoundingClientRect){var f=u.getBoundingClientRect();c={top:Math.max(f.top,0),left:Math.max(f.left,0),bottom:Math.min(f.bottom,e.innerHeight||t.documentElement.clientHeight),right:Math.min(f.right,e.innerWidth||t.documentElement.clientWidth)},c.bottom<=c.top||c.right<=c.left?c=!1:c.area=(c.bottom-c.top)*(c.right-c.left)}return c},a=function(u,c){if(c){var f=n(u);f&&w.push({url:c,area:f.area,rect:f})}},m=function(){for(var u=t.getElementsByTagName("*"),c=/url\(.*(http.*)\)/ig,f=0;f<u.length;f++){var p=u[f],r=e.getComputedStyle(p);if(p.tagName=="IMG"&&a(p,p.currentSrc||p.src),r["background-image"]){c.lastIndex=0;var o=c.exec(r["background-image"]);o&&o.length>1&&a(p,o[1].replace('"',""))}if(p.tagName=="IFRAME")try{var i=n(p);if(i){var s=Ce(p.contentWindow);s&&w.push({tm:s,area:i.area,rect:i})}}catch{}}},l=function(){for(var u={},c=e.performance.getEntriesByType("resource"),f=0;f<c.length;f++)u[c[f].name]=c[f].responseEnd;for(var p=0;p<w.length;p++)"tm"in w[p]||(w[p].tm=u[w[p].url]!==void 0?u[w[p].url]:0)};function y(){return e.PerformanceNavigationTiming&&performance.timeOrigin?(performance.getEntriesByType("navigation")[0].startTime+performance.timeOrigin)/1e3:performance.timing.navigationStart/1e3}function N(){return e.PerformanceNavigationTiming&&performance.timeOrigin?(performance.getEntriesByType("navigation")[0].startTime+performance.timeOrigin)/1e3:performance.timing.navigationStart/1e3}function b(){if(e.PerformancePaintTiming)return(performance.getEntriesByType("paint")[0].startTime+performance.timeOrigin)/1e3}var S=function(){try{var u=y();u=N(),d=(b()-u)*1e3}catch{}if(u===void 0&&d===void 0&&!isNaN(d))try{for(var c=performance.getEntriesByType("paint"),f=0;f<c.length;f++)if(c[f].name=="first-paint"){x=performance.getEntriesByType("navigation")[0].startTime,d=c[f].startTime-x;break}}catch{}if(d===void 0&&"msFirstPaint"in e.performance.timing&&(d=e.performance.timing.msFirstPaint-x),d===void 0&&"chrome"in e&&"loadTimes"in e.chrome){var p=e.chrome.loadTimes();if("firstPaintTime"in p&&p.firstPaintTime>0){var u=p.startLoadTime;"requestTime"in p&&(u=p.requestTime),p.firstPaintTime>=u&&(d=(p.firstPaintTime-u)*1e3)}}if(d===void 0||d<0||d>12e4){d=e.performance.timing.responseStart-x;for(var r={},o=t.getElementsByTagName("head")[0].children,f=0;f<o.length;f++){var i=o[f];i.tagName=="SCRIPT"&&i.src&&!i.async&&(r[i.src]=!0),i.tagName=="LINK"&&i.rel=="stylesheet"&&i.href&&(r[i.href]=!0)}for(var s=e.performance.getEntriesByType("resource"),h=!1,g=0;g<s.length;g++)if(!h&&r[s[g].name]&&(s[g].initiatorType=="script"||s[g].initiatorType=="link")){var T=s[g].responseEnd;(d===void 0||T>d)&&(d=T)}else h=!0}d=Math.max(d,0)},E=function(){for(var u={"0":0},c=0,f=0;f<w.length;f++){var p=d;"tm"in w[f]&&w[f].tm>d&&(p=w[f].tm),u[p]===void 0&&(u[p]=0),u[p]+=w[f].area,c+=w[f].area}var r=Math.max(t.documentElement.clientWidth,e.innerWidth||0)*Math.max(t.documentElement.clientHeight,e.innerHeight||0);if(r>0&&(r=Math.max(r-c,0)*O,u[d]===void 0&&(u[d]=0),u[d]+=r,c+=r),c){for(var o in u)u.hasOwnProperty(o)&&_.push({tm:o,area:u[o]});_.sort(function(h,g){return h.tm-g.tm});for(var i=0,s=0;s<_.length;s++)i+=_[s].area,_[s].progress=i/c}},W=function(){if(_.length){I=0;for(var u=0,c=0,f=0;f<_.length;f++){var p=_[f].tm-u;p>0&&c<1&&(I+=(1-c)*p),u=_[f].tm,c=_[f].progress}}else I=d},w=[],_=[],d,I,O=.1;try{var x=e.performance.timing.navigationStart;m(),l(),S(),E(),W()}catch{}return I};typeof z!="undefined"&&z.exports&&(z.exports=Ce)});var Xe=[()=>typeof PerformanceObserver!="function",()=>typeof WeakRef!="function",()=>{try{return eval("const o={},x={...o},y=(a,...r)=>null"),!1}catch(e){return!0}}],ce=()=>Xe.some(e=>e());function L(e,t={}){document.addEventListener("visibilitychange",()=>document.visibilityState==="hidden"&&e(),t),document.addEventListener("pagehide",e,t)}var R=(...e)=>new Promise((t,n)=>{try{if(!window.performance){n(new Error("Performance API is not supported"));return}if(!e.length){n(new TypeError("A Performance Observer must have a non-empty entryTypes attribute"));return}let a=[].concat(...e.map(l=>window.performance.getEntriesByType(l)));if(a.length){t(a);return}if(typeof window.PerformanceObserver!="function"){n(new Error("PerformanceObserver is not supported"));return}let m=new window.PerformanceObserver((l,y)=>{t(l.getEntries()),y.disconnect()});try{m.observe({entryTypes:e})}catch(l){m.disconnect(),n(l)}}catch(a){n(a)}});var Ue=/\.(\w{2,5})(?:$|\?.*)/,X="images",me="javascript",Ye="stylesheets",Je="other",Ke=[{type:X,pattern:/jpe?g|gif|png|webm/i},{type:me,pattern:/[m|c]?js/i},{type:Ye,pattern:/css/i}];function fe(e,t,n=""){let a=e.match(t);return a&&a.pop()||n}var ue={img:X,image:X,script:me};async function pe({initiatorType:e,name:t}){if(Object.hasOwnProperty.call(ue,e))return ue[e];let n=fe(t,Ue),{type:a}=Ke.find(({pattern:m})=>fe(n,m))||{type:Je};return a}var Ze=Number.parseFloat||window.parseFloat,U=Number.isNaN||window.isNaN,Qe=Number.isFinite||window.isFinite,{MAX_SAFE_INTEGER:de=9007199254740991}=Number;function v(e){if(typeof e!="number")return;let t=Ze(e);if(!U(t)&&!(t<0)&&!!Qe(t))return t>de?de:t}var et="final_asset";async function J(){if(!window.performance||!window.performance.getEntriesByType)return{};let e={},t=await R("resource");for(let n of t){let a=await pe(n);Y(e,a,"count",1),Y(e,a,"load",n.duration),Y(e,a,"size",n.decodedBodySize)}for(let n in e)U(e[n])&&(e[n]=void 0);return e}function Y(e,t,n,a){let m=[et,t,n].join("_");e[m]=e[m]||0,e[m]+=v(a)||0}var tt=["navigate","reload","back_forward"];async function K(){let{connection:e}=window.navigator||{},t={};try{let[{navigation:n=performance.navigation}={}]=await R("navigation");t.navigation_type=typeof n.type=="number"?tt[n.type]:n.type}catch{}return e&&Object.assign(t,{connection_type:e.type,effective_bandwidth:v(e.downlink),effective_connection_type:e.effectiveType,effective_max_bandwidth:v(e.downlinkMax),reduced_data_usage:e.saveData,round_trip_time:v(e.rtt)}),t}async function Z(){let e={window_inner_height:v(window.innerHeight),window_inner_width:v(window.innerWidth)},{screen:t}=window;return t&&Object.assign(e,{screen_color_depth:v(t.colorDepth),screen_pixel_depth:v(t.pixelDepth),screen_orientation_type:t.orientation&&t.orientation.type}),e}function le(e=1){return document.querySelector(`${"*>".repeat(e)}*`)?le(e+1):e}async function Q(){try{return{final_dom_node_count:v(document.querySelectorAll("*").length),final_dom_nest_depth:v(le()),final_html_size:v(document.querySelector("html").outerHTML.length)}}catch{return{final_dom_node_count:void 0,final_dom_nest_depth:void 0,final_html_size:void 0}}}var ge=e=>e.replace(/([A-Z])/g,"_$1").replace(/-/g,"_").toLowerCase().replace(/_j_s_/g,"_js_");var rt=["jsHeapSizeLimit","totalJSHeapSize","usedJSHeapSize"];async function ee(){let{memory:e}=window.performance||{};return e?Object.assign(...rt.map(t=>({[ge(t)]:v(e[t])}))):{}}var nt=()=>null;function H({type:e}){let t=new PerformanceObserver(nt);t.observe({type:e,buffered:!0});let n=t.takeRecords();return t.disconnect(),n}var D=typeof Object.entries=="function"?Object.entries:e=>Object.keys(e).map(t=>[t,e[t]]);var it=/^https:\/\/[\w-]+\.fiverrcdn\.com\//,ot=[{name:"javascript",pattern:/\.m?js($|\?)/},{name:"stylesheets",pattern:/\.css($|\?)/}],at=(e,t)=>t.length/e.length*100,st=(e,t)=>he(t,"encodedBodySize")/he(e,"encodedBodySize")*100,he=(e,t)=>e.reduce((n,a)=>n+a[t],0),ct=(e,t)=>{for(let{name:n,pattern:a}of ot)if(a.test(t.name))return e[n]=e[n]||[],e[n].push(t),e;return e};function ye(){let e=H({type:"resource"}).filter(({name:n})=>it.test(n)).filter(({decodedBodySize:n})=>n>0).reduce(ct,{}),t=D(e).filter(([,n])=>n.length>0).map(([n,a])=>{let m=a.filter(({transferSize:l,duration:y})=>l===0||y===0);return{[`browser_cache_hit_rate_${n}_files`]:at(a,m),[`browser_cache_hit_rate_${n}_bytes`]:st(a,m)}});return Object.assign({},...t)}function ve(){try{let[e,t]=window.performance.getEntriesByType("resource").map(({serverTiming:a=[]})=>a.find(({name:m})=>m==="akam")).filter(Boolean).reduce(([a,m],{description:l})=>l.includes("hit")?[++a,m]:[a,++m],[0,0]),n=e/(e+t)*100;return n?{akamai_hit_rate:n}:{}}catch{return{}}}var te=typeof Object.fromEntries=="function"?Object.fromEntries:e=>e.reduce((t,[n,a])=>Object.assign(t,{[n]:a}),{});var be,P=()=>be=be||ft();function ft(){let e=te([...document.querySelectorAll("meta[name][content]")].map(({name:t,content:n})=>[t,n]));return te([["endpoint",e.browser_stats_api_v1],["pagename",e["fiverrmeta:performance_monitor_pagename"]],["user_id",e.user_id],["ctx_id",e.ctx_id],["uid",e.u_guid],["is_bot",typeof e["fiverrmeta:is_known_crawler"]=="string"?e["fiverrmeta:is_known_crawler"]==="true":void 0]].filter(([,t])=>typeof t!="undefined"))}var we="2.2.2";var A;async function _e(){let e;return A||(A=new WeakRef(await Ee())),e=A.deref(),e||(A=new WeakRef(await Ee())),e=A.deref(),e.elapsed=performance.now(),e}async function Ee(){let e=await Promise.all([J(),K(),ee(),Z(),Q()]);return Object.assign(P(),{url:window.location.href,language:window.navigator.language||void 0,referrer:document.referrer||void 0,client_version:we},ye(),ve(),...e)}var Te=(e,t=20)=>e.length>t?e.substring(0,t):e;function k(e){if(!!e){if(typeof e=="string")return e;try{return[mt(e),pt(e)].filter(Boolean).join(" ")||`${e}`}catch{return`${e}`}}}var mt=e=>typeof e.nodeType=="number"?D(Node).find(([,t])=>t===e.nodeType)[0]:void 0;function pt(e){return typeof e.nodeName!="string"?"":e.nodeType===Node.TEXT_NODE?e.nodeValue:lt(e)}var dt=e=>e?`^="${Te(e)}"`:"";function lt(e){let t=[e.nodeName.toLowerCase()],n=[].map.call(e.attributes,({name:a,value:m})=>`[${a.toLowerCase()}${dt(m)}]`);return n.length&&t.push(n.join("")),t.join("")}function xe(e){try{return JSON.stringify(e,gt)}catch{return}}function gt(e,t){return t instanceof HTMLElement?k(t):t}var{endpoint:ht}=P();function Ne(e){var n,a;if(!((n=e==null?void 0:e.entries)==null?void 0:n.length))return!1;let t=xe({performance:e});return t?Boolean((a=navigator==null?void 0:navigator.sendBeacon)==null?void 0:a.call(navigator,ht,t)):!1}var j=new Set,$={add:j.add.bind(j),isEmpty:()=>j.size===0,empty:function(){let t=Array.from(j);return j.clear(),t}};var yt=500,Se,Ie=!1;async function re(e,{immediate:t=!1}={}){if(clearTimeout(Se),e){let{length:n}=e.map($.add);if(n===0)return;t?B():Se=setTimeout(B,yt),Ie||L(B),Ie=!0;return}B()}var B=async({entries:e=[],page_info:t}={})=>{e.push(...$.empty()),t=t||await _e(),!!e.length&&($.isEmpty()?Ne({entries:e,page_info:t}):B({entries:e,page_info:t}))};var ne=({x:e,y:t,width:n,height:a})=>[e,t,n,a].every(Number.isFinite)?`[x${e} y${t} w${n} h${a}]`:"";function Pe(e){var y,N,b;let t=e.element||e.target||((N=(y=e.sources)==null?void 0:y[0])==null?void 0:N.node),{x:n,y:a,width:m,height:l}=((b=t==null?void 0:t.getBoundingClientRect)==null?void 0:b.call(t))||{};return[n,a,m,l].every(Number.isFinite)?{x:n,y:a,width:m,height:l}:void 0}var ie=class{constructor({type:t,name:n,property:a}){Object.assign(this,{type:t,name:n,property:a,value:0,counter:0}),this.accumulate=this.accumulate.bind(this)}accumulate(t){return t.entryType===this.type&&(this.value+=Number.isNaN(t[this.property])?0:t[this.property],this.counter++),t}getMark(){return{counter:this.counter,entryType:"mark",name:this.name,startTime:this.value}}};var G=new ie({type:"longtask",name:"total_blocking_time",property:"duration"});var vt=[G.accumulate],ke=new Map;function C(e){if(!e)return;let t=e.counter||(ke.get(e.entryType)||0)+1;if(ke.set(e.entryType,t),vt.reduce((m,l)=>l(m),e),e.entryType==="longtask")return;let n=bt(e),a=Pe(e);return{counter:t,target:n,coordinates:a,...e.toJSON()}}function bt(e){if(e.target)return k(e.target);if(e.element)return k(e.element);if(Array.isArray(e.sources))return e.sources.map(({node:t,previousRect:n,currentRect:a})=>[t&&k(t),t&&": ",n?ne(n):"Nothing"," => ",ne(a)].filter(Boolean).join("")).join(", ")}var Oe=e=>(t,n)=>t[e]-n[e];var wt=5e3,Et=1e3,_t=2e3;function Me(){if(!PerformanceObserver.supportedEntryTypes.includes("layout-shift"))return[];if(performance.now()<_t)return[];let e=({startTime:y=Number.NEGATIVE_INFINITY}={})=>({cls:0,entries:[],startTime:y,endTime:Number.NEGATIVE_INFINITY}),t=[e({startTime:Number.NEGATIVE_INFINITY})];H({type:"layout-shift"}).forEach(y=>{let{hadRecentInput:N,startTime:b,value:S}=y;if(N)return;let E=t[t.length-1];(b-E.startTime>wt||b-E.endTime>Et)&&(E=e({startTime:b}),t.push(E)),E.cls+=S,E.endTime=b,E.entries.push(y),y.counter=E.entries.length});let{startTime:n,endTime:a,entries:m,cls:l}=t.sort(Oe("cls")).pop();return[C(m.shift()),C(m.pop()),{name:"cumulative_layout_shift",entryType:"mark",counter:t.length,duration:a-n||0,startTime:l}].filter(Boolean)}var je=se(Ae(),1);async function Be(){let e=await je.default.getFirstConsistentlyInteractive();e&&performance.mark("time_to_interactive",{startTime:e})}var Le=se(Fe(),1),Re=()=>({counter:1,entryType:"mark",name:"speed_index",startTime:(0,Le.default)()});var Tt=["first-input","largest-contentful-paint","longtask","mark","navigation","paint"];async function He(){if(ce())return;let e=P();if(!(!e.endpoint||!e.pagename))try{let t=new PerformanceObserver(n=>{re(n.getEntries().map(C).filter(Boolean))});Tt.forEach(n=>PerformanceObserver.supportedEntryTypes.includes(n)&&t.observe({type:n,buffered:!0})),Be(),L(()=>re([...Me(),G.getMark(),Re()],{immediate:!0}),{once:!0})}catch{}}He();})();
//# sourceMappingURL=index.2.2.2.min.js.map
