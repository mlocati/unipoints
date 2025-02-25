(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ca(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Z={},Nt=[],Ne=()=>{},Rs=()=>!1,Fs=/^on[^a-z]/,sr=e=>Fs.test(e),ua=e=>e.startsWith("onUpdate:"),fe=Object.assign,da=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},$s=Object.prototype.hasOwnProperty,B=(e,t)=>$s.call(e,t),$=Array.isArray,Mt=e=>vn(e)==="[object Map]",Bt=e=>vn(e)==="[object Set]",qa=e=>vn(e)==="[object Date]",U=e=>typeof e=="function",ie=e=>typeof e=="string",Lt=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",oo=e=>(G(e)||U(e))&&U(e.then)&&U(e.catch),so=Object.prototype.toString,vn=e=>so.call(e),Ls=e=>vn(e).slice(8,-1),lo=e=>vn(e)==="[object Object]",ma=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Bn=ca(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},js=/-(\w)/g,Ue=lr(e=>e.replace(js,(t,n)=>n?n.toUpperCase():"")),Ds=/\B([A-Z])/g,Yt=lr(e=>e.replace(Ds,"-$1").toLowerCase()),fr=lr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cr=lr(e=>e?`on${fr(e)}`:""),kt=(e,t)=>!Object.is(e,t),Yn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Jn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Gn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Xa;const Dr=()=>Xa||(Xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pa(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ie(r)?Bs(r):pa(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(ie(e)||G(e))return e}const zs=/;(?![^(]*\))/g,Us=/:([^]+)/,Hs=/\/\*[^]*?\*\//g;function Bs(e){const t={};return e.replace(Hs,"").split(zs).forEach(n=>{if(n){const r=n.split(Us);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function bn(e){let t="";if(ie(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=bn(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ys="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ks=ca(Ys);function fo(e){return!!e||e===""}function Ws(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=yn(e[r],t[r]);return n}function yn(e,t){if(e===t)return!0;let n=qa(e),r=qa(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Lt(e),r=Lt(t),n||r)return e===t;if(n=$(e),r=$(t),n||r)return n&&r?Ws(e,t):!1;if(n=G(e),r=G(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!yn(e[o],t[o]))return!1}}return String(e)===String(t)}function ha(e,t){return e.findIndex(n=>yn(n,t))}const ae=e=>ie(e)?e:e==null?"":$(e)||G(e)&&(e.toString===so||!U(e.toString))?JSON.stringify(e,co,2):String(e),co=(e,t)=>t&&t.__v_isRef?co(e,t.value):Mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Bt(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!$(t)&&!lo(t)?String(t):t;let Pe;class Vs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!t&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function qs(e,t=Pe){t&&t.active&&t.effects.push(e)}function Xs(){return Pe}const ga=e=>{const t=new Set(e);return t.w=0,t.n=0,t},uo=e=>(e.w&lt)>0,mo=e=>(e.n&lt)>0,Js=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=lt},Gs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];uo(a)&&!mo(a)?a.delete(e):t[n++]=a,a.w&=~lt,a.n&=~lt}t.length=n}},zr=new WeakMap;let Zt=0,lt=1;const Ur=30;let Se;const xt=Symbol(""),Hr=Symbol("");class va{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qs(this,r)}run(){if(!this.active)return this.fn();let t=Se,n=it;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Se,Se=this,it=!0,lt=1<<++Zt,Zt<=Ur?Js(this):Ja(this),this.fn()}finally{Zt<=Ur&&Gs(this),lt=1<<--Zt,Se=this.parent,it=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Se===this?this.deferStop=!0:this.active&&(Ja(this),this.onStop&&this.onStop(),this.active=!1)}}function Ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let it=!0;const po=[];function Kt(){po.push(it),it=!1}function Wt(){const e=po.pop();it=e===void 0?!0:e}function be(e,t,n){if(it&&Se){let r=zr.get(e);r||zr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ga()),ho(a)}}function ho(e,t){let n=!1;Zt<=Ur?mo(e)||(e.n|=lt,n=!uo(e)):n=!e.has(Se),n&&(e.add(Se),Se.deps.push(e))}function We(e,t,n,r,a,i){const o=zr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&$(e)){const l=Number(r);o.forEach((f,u)=>{(u==="length"||!Lt(u)&&u>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":$(e)?ma(n)&&s.push(o.get("length")):(s.push(o.get(xt)),Mt(e)&&s.push(o.get(Hr)));break;case"delete":$(e)||(s.push(o.get(xt)),Mt(e)&&s.push(o.get(Hr)));break;case"set":Mt(e)&&s.push(o.get(xt));break}if(s.length===1)s[0]&&Br(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Br(ga(l))}}function Br(e,t){const n=$(e)?e:[...e];for(const r of n)r.computed&&Ga(r);for(const r of n)r.computed||Ga(r)}function Ga(e,t){(e!==Se||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Zs=ca("__proto__,__v_isRef,__isVue"),go=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Lt)),Za=Qs();function Qs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)be(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Kt();const r=Y(this)[t].apply(this,n);return Wt(),r}}),e}function el(e){const t=Y(this);return be(t,"has",e),t.hasOwnProperty(e)}class vo{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?ml:xo:i?_o:yo).get(t))return t;const o=$(t);if(!a){if(o&&B(Za,n))return Reflect.get(Za,n,r);if(n==="hasOwnProperty")return el}const s=Reflect.get(t,n,r);return(Lt(n)?go.has(n):Zs(n))||(a||be(t,"get",n),i)?s:le(s)?o&&ma(n)?s:s.value:G(s)?a?wo(s):_a(s):s}}class bo extends vo{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(jt(i)&&le(i)&&!le(r))return!1;if(!this._shallow&&(!Zn(r)&&!jt(r)&&(i=Y(i),r=Y(r)),!$(t)&&le(i)&&!le(r)))return i.value=r,!0;const o=$(t)&&ma(n)?Number(n)<t.length:B(t,n),s=Reflect.set(t,n,r,a);return t===Y(a)&&(o?kt(r,i)&&We(t,"set",n,r):We(t,"add",n,r)),s}deleteProperty(t,n){const r=B(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&We(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Lt(n)||!go.has(n))&&be(t,"has",n),r}ownKeys(t){return be(t,"iterate",$(t)?"length":xt),Reflect.ownKeys(t)}}class tl extends vo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const nl=new bo,rl=new tl,al=new bo(!0),ba=e=>e,cr=e=>Reflect.getPrototypeOf(e);function On(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(kt(t,i)&&be(a,"get",t),be(a,"get",i));const{has:o}=cr(a),s=r?ba:n?wa:on;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Pn(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(kt(e,a)&&be(r,"has",e),be(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Sn(e,t=!1){return e=e.__v_raw,!t&&be(Y(e),"iterate",xt),Reflect.get(e,"size",e)}function Qa(e){e=Y(e);const t=Y(this);return cr(t).has.call(t,e)||(t.add(e),We(t,"add",e,e)),this}function ei(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=cr(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?kt(t,o)&&We(n,"set",e,t):We(n,"add",e,t),this}function ti(e){const t=Y(this),{has:n,get:r}=cr(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&We(t,"delete",e,void 0),i}function ni(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&We(e,"clear",void 0,void 0),n}function In(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?ba:e?wa:on;return!e&&be(s,"iterate",xt),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function Tn(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=Mt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),u=n?ba:t?wa:on;return!t&&be(i,"iterate",l?Hr:xt),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}},[Symbol.iterator](){return this}}}}function et(e){return function(...t){return e==="delete"?!1:this}}function il(){const e={get(i){return On(this,i)},get size(){return Sn(this)},has:Pn,add:Qa,set:ei,delete:ti,clear:ni,forEach:In(!1,!1)},t={get(i){return On(this,i,!1,!0)},get size(){return Sn(this)},has:Pn,add:Qa,set:ei,delete:ti,clear:ni,forEach:In(!1,!0)},n={get(i){return On(this,i,!0)},get size(){return Sn(this,!0)},has(i){return Pn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:In(!0,!1)},r={get(i){return On(this,i,!0,!0)},get size(){return Sn(this,!0)},has(i){return Pn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:In(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Tn(i,!1,!1),n[i]=Tn(i,!0,!1),t[i]=Tn(i,!1,!0),r[i]=Tn(i,!0,!0)}),[e,n,t,r]}const[ol,sl,ll,fl]=il();function ya(e,t){const n=t?e?fl:ll:e?sl:ol;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const cl={get:ya(!1,!1)},ul={get:ya(!1,!0)},dl={get:ya(!0,!1)},yo=new WeakMap,_o=new WeakMap,xo=new WeakMap,ml=new WeakMap;function pl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hl(e){return e.__v_skip||!Object.isExtensible(e)?0:pl(Ls(e))}function _a(e){return jt(e)?e:xa(e,!1,nl,cl,yo)}function gl(e){return xa(e,!1,al,ul,_o)}function wo(e){return xa(e,!0,rl,dl,xo)}function xa(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=hl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Rt(e){return jt(e)?Rt(e.__v_raw):!!(e&&e.__v_isReactive)}function jt(e){return!!(e&&e.__v_isReadonly)}function Zn(e){return!!(e&&e.__v_isShallow)}function ko(e){return Rt(e)||jt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Ao(e){return Jn(e,"__v_skip",!0),e}const on=e=>G(e)?_a(e):e,wa=e=>G(e)?wo(e):e;function Eo(e){it&&Se&&(e=Y(e),ho(e.dep||(e.dep=ga())))}function Co(e,t){e=Y(e);const n=e.dep;n&&Br(n)}function le(e){return!!(e&&e.__v_isRef===!0)}function De(e){return vl(e,!1)}function vl(e,t){return le(e)?e:new bl(e,t)}class bl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:on(t)}get value(){return Eo(this),this._value}set value(t){const n=this.__v_isShallow||Zn(t)||jt(t);t=n?t:Y(t),kt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:on(t),Co(this))}}function Oo(e){return le(e)?e.value:e}const yl={get:(e,t,n)=>Oo(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Po(e){return Rt(e)?e:new Proxy(e,yl)}class _l{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new va(t,()=>{this._dirty||(this._dirty=!0,Co(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return Eo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function xl(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Ne):(r=e.get,a=e.set),new _l(r,a,i||!a,n)}function ot(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){ur(i,t,n)}return a}function Me(e,t,n,r){if(U(e)){const i=ot(e,t,n,r);return i&&oo(i)&&i.catch(o=>{ur(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Me(e[i],t,n,r));return a}function ur(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ot(l,null,10,[e,o,s]);return}}wl(e,n,a,r)}function wl(e,t,n,r=!0){console.error(e)}let sn=!1,Yr=!1;const me=[];let je=0;const Ft=[];let Ye=null,gt=0;const So=Promise.resolve();let ka=null;function kl(e){const t=ka||So;return e?t.then(this?e.bind(this):e):t}function Al(e){let t=je+1,n=me.length;for(;t<n;){const r=t+n>>>1,a=me[r],i=ln(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function Aa(e){(!me.length||!me.includes(e,sn&&e.allowRecurse?je+1:je))&&(e.id==null?me.push(e):me.splice(Al(e.id),0,e),Io())}function Io(){!sn&&!Yr&&(Yr=!0,ka=So.then(No))}function El(e){const t=me.indexOf(e);t>je&&me.splice(t,1)}function Cl(e){$(e)?Ft.push(...e):(!Ye||!Ye.includes(e,e.allowRecurse?gt+1:gt))&&Ft.push(e),Io()}function ri(e,t=sn?je+1:0){for(;t<me.length;t++){const n=me[t];n&&n.pre&&(me.splice(t,1),t--,n())}}function To(e){if(Ft.length){const t=[...new Set(Ft)];if(Ft.length=0,Ye){Ye.push(...t);return}for(Ye=t,Ye.sort((n,r)=>ln(n)-ln(r)),gt=0;gt<Ye.length;gt++)Ye[gt]();Ye=null,gt=0}}const ln=e=>e.id==null?1/0:e.id,Ol=(e,t)=>{const n=ln(e)-ln(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function No(e){Yr=!1,sn=!0,me.sort(Ol);const t=Ne;try{for(je=0;je<me.length;je++){const n=me[je];n&&n.active!==!1&&ot(n,null,14)}}finally{je=0,me.length=0,To(),sn=!1,ka=null,(me.length||Ft.length)&&No()}}function Pl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Z;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[u]||Z;p&&(a=n.map(b=>ie(b)?b.trim():b)),m&&(a=n.map(Gn))}let s,l=r[s=Cr(t)]||r[s=Cr(Ue(t))];!l&&i&&(l=r[s=Cr(Yt(t))]),l&&Me(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Me(f,e,6,a)}}function Mo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=f=>{const u=Mo(f,t,!0);u&&(s=!0,fe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):($(i)?i.forEach(l=>o[l]=null):fe(o,i),G(e)&&r.set(e,o),o)}function dr(e,t){return!e||!sr(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,Yt(t))||B(e,t))}let Ee=null,mr=null;function Qn(e){const t=Ee;return Ee=e,mr=e&&e.type.__scopeId||null,t}function Sl(e){mr=e}function Il(){mr=null}function Tl(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&pi(-1);const i=Qn(t);let o;try{o=e(...a)}finally{Qn(i),r._d&&pi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Or(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:p,setupState:b,ctx:S,inheritAttrs:x}=e;let M,w;const A=Qn(e);try{if(n.shapeFlag&4){const I=a||r;M=Le(u.call(I,I,m,i,b,p,S)),w=l}else{const I=t;M=Le(I.length>1?I(i,{attrs:l,slots:s,emit:f}):I(i,null)),w=t.props?l:Nl(l)}}catch(I){nn.length=0,ur(I,e,1),M=J(At)}let L=M;if(w&&x!==!1){const I=Object.keys(w),{shapeFlag:W}=L;I.length&&W&7&&(o&&I.some(ua)&&(w=Ml(w,o)),L=Dt(L,w))}return n.dirs&&(L=Dt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),M=L,Qn(A),M}const Nl=e=>{let t;for(const n in e)(n==="class"||n==="style"||sr(n))&&((t||(t={}))[n]=e[n]);return t},Ml=(e,t)=>{const n={};for(const r in e)(!ua(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Rl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ai(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(o[p]!==r[p]&&!dr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ai(r,o,f):!0:!!o;return!1}function ai(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!dr(n,i))return!0}return!1}function Fl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const $l=e=>e.__isSuspense;function Ll(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):Cl(e)}const Nn={};function st(e,t,n){return Ro(e,t,n)}function Ro(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Z){var s;const l=Xs()===((s=se)==null?void 0:s.scope)?se:null;let f,u=!1,m=!1;if(le(e)?(f=()=>e.value,u=Zn(e)):Rt(e)?(f=()=>e,r=!0):$(e)?(m=!0,u=e.some(I=>Rt(I)||Zn(I)),f=()=>e.map(I=>{if(le(I))return I.value;if(Rt(I))return bt(I);if(U(I))return ot(I,l,2)})):U(e)?t?f=()=>ot(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return p&&p(),Me(e,l,3,[b])}:f=Ne,t&&r){const I=f;f=()=>bt(I())}let p,b=I=>{p=A.onStop=()=>{ot(I,l,4)}},S;if(cn)if(b=Ne,t?n&&Me(t,l,3,[f(),m?[]:void 0,b]):f(),a==="sync"){const I=Mf();S=I.__watcherHandles||(I.__watcherHandles=[])}else return Ne;let x=m?new Array(e.length).fill(Nn):Nn;const M=()=>{if(A.active)if(t){const I=A.run();(r||u||(m?I.some((W,ce)=>kt(W,x[ce])):kt(I,x)))&&(p&&p(),Me(t,l,3,[I,x===Nn?void 0:m&&x[0]===Nn?[]:x,b]),x=I)}else A.run()};M.allowRecurse=!!t;let w;a==="sync"?w=M:a==="post"?w=()=>ve(M,l&&l.suspense):(M.pre=!0,l&&(M.id=l.uid),w=()=>Aa(M));const A=new va(f,w);t?n?M():x=A.run():a==="post"?ve(A.run.bind(A),l&&l.suspense):A.run();const L=()=>{A.stop(),l&&l.scope&&da(l.scope.effects,A)};return S&&S.push(L),L}function jl(e,t,n){const r=this.proxy,a=ie(e)?e.includes(".")?Fo(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=se;zt(this);const s=Ro(a,i.bind(r),n);return o?zt(o):wt(),s}function Fo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function bt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))bt(e.value,t);else if($(e))for(let n=0;n<e.length;n++)bt(e[n],t);else if(Bt(e)||Mt(e))e.forEach(n=>{bt(n,t)});else if(lo(e))for(const n in e)bt(e[n],t);return e}function Pr(e,t){const n=Ee;if(n===null)return e;const r=br(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=Z]=t[i];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&bt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function pt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Kt(),Me(l,n,8,[e.el,s,e,t]),Wt())}}/*! #__NO_SIDE_EFFECTS__ */function Ge(e,t){return U(e)?(()=>fe({name:e.name},t,{setup:e}))():e}const Kn=e=>!!e.type.__asyncLoader,$o=e=>e.type.__isKeepAlive;function Dl(e,t){Lo(e,"a",t)}function zl(e,t){Lo(e,"da",t)}function Lo(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(pr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)$o(a.parent.vnode)&&Ul(r,t,n,a),a=a.parent}}function Ul(e,t,n,r){const a=pr(t,e,r,!0);Do(()=>{da(r[t],a)},n)}function pr(e,t,n=se,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Kt(),zt(n);const s=Me(t,n,e,o);return wt(),Wt(),s});return r?a.unshift(i):a.push(i),i}}const Ze=e=>(t,n=se)=>(!cn||e==="sp")&&pr(e,(...r)=>t(...r),n),Hl=Ze("bm"),jo=Ze("m"),Bl=Ze("bu"),Yl=Ze("u"),Kl=Ze("bum"),Do=Ze("um"),Wl=Ze("sp"),Vl=Ze("rtg"),ql=Ze("rtc");function Xl(e,t=se){pr("ec",e,t)}const zo="components";function hr(e,t){return Gl(zo,e,!0,t)||e}const Jl=Symbol.for("v-ndc");function Gl(e,t,n=!0,r=!1){const a=Ee||se;if(a){const i=a.type;if(e===zo){const s=Sf(i,!1);if(s&&(s===t||s===Ue(t)||s===fr(Ue(t))))return i}const o=ii(a[e]||i[e],t)||ii(a.appContext[e],t);return!o&&r?i:o}}function ii(e,t){return e&&(e[t]||e[Ue(t)]||e[fr(Ue(t))])}function Ae(e,t,n,r){let a;const i=n&&n[r];if($(e)||ie(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Kr=e=>e?Go(e)?br(e)||e.proxy:Kr(e.parent):null,tn=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Kr(e.parent),$root:e=>Kr(e.root),$emit:e=>e.emit,$options:e=>Ea(e),$forceUpdate:e=>e.f||(e.f=()=>Aa(e.update)),$nextTick:e=>e.n||(e.n=kl.bind(e.proxy)),$watch:e=>jl.bind(e)}),Sr=(e,t)=>e!==Z&&!e.__isScriptSetup&&B(e,t),Zl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const b=o[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Sr(r,t))return o[t]=1,r[t];if(a!==Z&&B(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&B(f,t))return o[t]=3,i[t];if(n!==Z&&B(n,t))return o[t]=4,n[t];Wr&&(o[t]=0)}}const u=tn[t];let m,p;if(u)return t==="$attrs"&&be(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Z&&B(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,B(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Sr(a,t)?(a[t]=n,!0):r!==Z&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Z&&B(e,o)||Sr(t,o)||(s=i[0])&&B(s,o)||B(r,o)||B(tn,o)||B(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function oi(e){return $(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Wr=!0;function Ql(e){const t=Ea(e),n=e.proxy,r=e.ctx;Wr=!1,t.beforeCreate&&si(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:p,beforeUpdate:b,updated:S,activated:x,deactivated:M,beforeDestroy:w,beforeUnmount:A,destroyed:L,unmounted:I,render:W,renderTracked:ce,renderTriggered:ue,errorCaptured:Ce,serverPrefetch:ke,expose:He,inheritAttrs:qt,components:kn,directives:An,filters:kr}=t;if(f&&ef(f,r,null),o)for(const te in o){const q=o[te];U(q)&&(r[te]=q.bind(n))}if(a){const te=a.call(n,n);G(te)&&(e.data=_a(te))}if(Wr=!0,i)for(const te in i){const q=i[te],dt=U(q)?q.bind(n,n):U(q.get)?q.get.bind(n,n):Ne,En=!U(q)&&U(q.set)?q.set.bind(n):Ne,mt=_e({get:dt,set:En});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>mt.value,set:Re=>mt.value=Re})}if(s)for(const te in s)Uo(s[te],r,n,te);if(l){const te=U(l)?l.call(n):l;Reflect.ownKeys(te).forEach(q=>{sf(q,te[q])})}u&&si(u,e,"c");function pe(te,q){$(q)?q.forEach(dt=>te(dt.bind(n))):q&&te(q.bind(n))}if(pe(Hl,m),pe(jo,p),pe(Bl,b),pe(Yl,S),pe(Dl,x),pe(zl,M),pe(Xl,Ce),pe(ql,ce),pe(Vl,ue),pe(Kl,A),pe(Do,I),pe(Wl,ke),$(He))if(He.length){const te=e.exposed||(e.exposed={});He.forEach(q=>{Object.defineProperty(te,q,{get:()=>n[q],set:dt=>n[q]=dt})})}else e.exposed||(e.exposed={});W&&e.render===Ne&&(e.render=W),qt!=null&&(e.inheritAttrs=qt),kn&&(e.components=kn),An&&(e.directives=An)}function ef(e,t,n=Ne){$(e)&&(e=Vr(e));for(const r in e){const a=e[r];let i;G(a)?"default"in a?i=Wn(a.from||r,a.default,!0):i=Wn(a.from||r):i=Wn(a),le(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function si(e,t,n){Me($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Uo(e,t,n,r){const a=r.includes(".")?Fo(n,r):()=>n[r];if(ie(e)){const i=t[e];U(i)&&st(a,i)}else if(U(e))st(a,e.bind(n));else if(G(e))if($(e))e.forEach(i=>Uo(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&st(a,i,e)}}function Ea(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>er(l,f,o,!0)),er(l,t,o)),G(t)&&i.set(t,l),l}function er(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&er(e,i,n,!0),a&&a.forEach(o=>er(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=tf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const tf={data:li,props:fi,emits:fi,methods:Qt,computed:Qt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Qt,directives:Qt,watch:rf,provide:li,inject:nf};function li(e,t){return t?e?function(){return fe(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function nf(e,t){return Qt(Vr(e),Vr(t))}function Vr(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function Qt(e,t){return e?fe(Object.create(null),e,t):t}function fi(e,t){return e?$(e)&&$(t)?[...new Set([...e,...t])]:fe(Object.create(null),oi(e),oi(t??{})):t}function rf(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function Ho(){return{app:null,config:{isNativeTag:Rs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let af=0;function of(e,t){return function(r,a=null){U(r)||(r=fe({},r)),a!=null&&!G(a)&&(a=null);const i=Ho(),o=new WeakSet;let s=!1;const l=i.app={_uid:af++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Rf,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&U(f.install)?(o.add(f),f.install(l,...u)):U(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,m){if(!s){const p=J(r,a);return p.appContext=i,u&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,br(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l},runWithContext(f){tr=l;try{return f()}finally{tr=null}}};return l}}let tr=null;function sf(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function Wn(e,t,n=!1){const r=se||Ee;if(r||tr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:tr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r&&r.proxy):t}}function lf(e,t,n,r=!1){const a={},i={};Jn(i,vr,1),e.propsDefaults=Object.create(null),Bo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:gl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function ff(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(dr(e.emitsOptions,p))continue;const b=t[p];if(l)if(B(i,p))b!==i[p]&&(i[p]=b,f=!0);else{const S=Ue(p);a[S]=qr(l,s,S,b,e,!1)}else b!==i[p]&&(i[p]=b,f=!0)}}}else{Bo(e,t,a,i)&&(f=!0);let u;for(const m in s)(!t||!B(t,m)&&((u=Yt(m))===m||!B(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=qr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!B(t,m))&&(delete i[m],f=!0)}f&&We(e,"set","$attrs")}function Bo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Bn(l))continue;const f=t[l];let u;a&&B(a,u=Ue(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:dr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=Y(n),f=s||Z;for(let u=0;u<i.length;u++){const m=i[u];n[m]=qr(a,l,m,f[m],e,!B(f,m))}}return o}function qr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&U(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(zt(a),r=f[n]=l.call(null,t),wt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Yt(n))&&(r=!0))}return r}function Yo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const u=m=>{l=!0;const[p,b]=Yo(m,t,!0);fe(o,p),b&&s.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return G(e)&&r.set(e,Nt),Nt;if($(i))for(let u=0;u<i.length;u++){const m=Ue(i[u]);ci(m)&&(o[m]=Z)}else if(i)for(const u in i){const m=Ue(u);if(ci(m)){const p=i[u],b=o[m]=$(p)||U(p)?{type:p}:fe({},p);if(b){const S=mi(Boolean,b.type),x=mi(String,b.type);b[0]=S>-1,b[1]=x<0||S<x,(S>-1||B(b,"default"))&&s.push(m)}}}const f=[o,s];return G(e)&&r.set(e,f),f}function ci(e){return e[0]!=="$"}function ui(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function di(e,t){return ui(e)===ui(t)}function mi(e,t){return $(t)?t.findIndex(n=>di(n,e)):U(t)&&di(t,e)?0:-1}const Ko=e=>e[0]==="_"||e==="$stable",Ca=e=>$(e)?e.map(Le):[Le(e)],cf=(e,t,n)=>{if(t._n)return t;const r=Tl((...a)=>Ca(t(...a)),n);return r._c=!1,r},Wo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Ko(a))continue;const i=e[a];if(U(i))t[a]=cf(a,i,r);else if(i!=null){const o=Ca(i);t[a]=()=>o}}},Vo=(e,t)=>{const n=Ca(t);e.slots.default=()=>n},uf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Jn(t,"_",n)):Wo(t,e.slots={})}else e.slots={},t&&Vo(e,t);Jn(e.slots,vr,1)},df=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Z;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Wo(t,a)),o=t}else t&&(Vo(e,t),o={default:1});if(i)for(const s in a)!Ko(s)&&o[s]==null&&delete a[s]};function Xr(e,t,n,r,a=!1){if($(e)){e.forEach((p,b)=>Xr(p,t&&($(t)?t[b]:t),n,r,a));return}if(Kn(r)&&!a)return;const i=r.shapeFlag&4?br(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,u=s.refs===Z?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(ie(f)?(u[f]=null,B(m,f)&&(m[f]=null)):le(f)&&(f.value=null)),U(l))ot(l,s,12,[o,u]);else{const p=ie(l),b=le(l);if(p||b){const S=()=>{if(e.f){const x=p?B(m,l)?m[l]:u[l]:l.value;a?$(x)&&da(x,i):$(x)?x.includes(i)||x.push(i):p?(u[l]=[i],B(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,B(m,l)&&(m[l]=o)):b&&(l.value=o,e.k&&(u[e.k]=o))};o?(S.id=-1,ve(S,n)):S()}}}const ve=Ll;function mf(e){return pf(e)}function pf(e,t){const n=Dr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:p,setScopeId:b=Ne,insertStaticContent:S}=e,x=(c,d,h,g=null,v=null,k=null,C=!1,_=null,E=!!d.dynamicChildren)=>{if(c===d)return;c&&!Jt(c,d)&&(g=Cn(c),Re(c,v,k,!0),c=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:y,ref:R,shapeFlag:T}=d;switch(y){case gr:M(c,d,h,g);break;case At:w(c,d,h,g);break;case Ir:c==null&&A(d,h,g,C);break;case K:kn(c,d,h,g,v,k,C,_,E);break;default:T&1?W(c,d,h,g,v,k,C,_,E):T&6?An(c,d,h,g,v,k,C,_,E):(T&64||T&128)&&y.process(c,d,h,g,v,k,C,_,E,Ot)}R!=null&&v&&Xr(R,c&&c.ref,k,d||c,!d)},M=(c,d,h,g)=>{if(c==null)r(d.el=s(d.children),h,g);else{const v=d.el=c.el;d.children!==c.children&&f(v,d.children)}},w=(c,d,h,g)=>{c==null?r(d.el=l(d.children||""),h,g):d.el=c.el},A=(c,d,h,g)=>{[c.el,c.anchor]=S(c.children,d,h,g,c.el,c.anchor)},L=({el:c,anchor:d},h,g)=>{let v;for(;c&&c!==d;)v=p(c),r(c,h,g),c=v;r(d,h,g)},I=({el:c,anchor:d})=>{let h;for(;c&&c!==d;)h=p(c),a(c),c=h;a(d)},W=(c,d,h,g,v,k,C,_,E)=>{C=C||d.type==="svg",c==null?ce(d,h,g,v,k,C,_,E):ke(c,d,v,k,C,_,E)},ce=(c,d,h,g,v,k,C,_)=>{let E,y;const{type:R,props:T,shapeFlag:F,transition:z,dirs:H}=c;if(E=c.el=o(c.type,k,T&&T.is,T),F&8?u(E,c.children):F&16&&Ce(c.children,E,null,g,v,k&&R!=="foreignObject",C,_),H&&pt(c,null,g,"created"),ue(E,c,c.scopeId,C,g),T){for(const V in T)V!=="value"&&!Bn(V)&&i(E,V,null,T[V],k,c.children,g,v,Be);"value"in T&&i(E,"value",null,T.value),(y=T.onVnodeBeforeMount)&&$e(y,g,c)}H&&pt(c,null,g,"beforeMount");const X=hf(v,z);X&&z.beforeEnter(E),r(E,d,h),((y=T&&T.onVnodeMounted)||X||H)&&ve(()=>{y&&$e(y,g,c),X&&z.enter(E),H&&pt(c,null,g,"mounted")},v)},ue=(c,d,h,g,v)=>{if(h&&b(c,h),g)for(let k=0;k<g.length;k++)b(c,g[k]);if(v){let k=v.subTree;if(d===k){const C=v.vnode;ue(c,C,C.scopeId,C.slotScopeIds,v.parent)}}},Ce=(c,d,h,g,v,k,C,_,E=0)=>{for(let y=E;y<c.length;y++){const R=c[y]=_?nt(c[y]):Le(c[y]);x(null,R,d,h,g,v,k,C,_)}},ke=(c,d,h,g,v,k,C)=>{const _=d.el=c.el;let{patchFlag:E,dynamicChildren:y,dirs:R}=d;E|=c.patchFlag&16;const T=c.props||Z,F=d.props||Z;let z;h&&ht(h,!1),(z=F.onVnodeBeforeUpdate)&&$e(z,h,d,c),R&&pt(d,c,h,"beforeUpdate"),h&&ht(h,!0);const H=v&&d.type!=="foreignObject";if(y?He(c.dynamicChildren,y,_,h,g,H,k):C||q(c,d,_,null,h,g,H,k,!1),E>0){if(E&16)qt(_,d,T,F,h,g,v);else if(E&2&&T.class!==F.class&&i(_,"class",null,F.class,v),E&4&&i(_,"style",T.style,F.style,v),E&8){const X=d.dynamicProps;for(let V=0;V<X.length;V++){const re=X[V],Oe=T[re],Pt=F[re];(Pt!==Oe||re==="value")&&i(_,re,Oe,Pt,v,c.children,h,g,Be)}}E&1&&c.children!==d.children&&u(_,d.children)}else!C&&y==null&&qt(_,d,T,F,h,g,v);((z=F.onVnodeUpdated)||R)&&ve(()=>{z&&$e(z,h,d,c),R&&pt(d,c,h,"updated")},g)},He=(c,d,h,g,v,k,C)=>{for(let _=0;_<d.length;_++){const E=c[_],y=d[_],R=E.el&&(E.type===K||!Jt(E,y)||E.shapeFlag&70)?m(E.el):h;x(E,y,R,null,g,v,k,C,!0)}},qt=(c,d,h,g,v,k,C)=>{if(h!==g){if(h!==Z)for(const _ in h)!Bn(_)&&!(_ in g)&&i(c,_,h[_],null,C,d.children,v,k,Be);for(const _ in g){if(Bn(_))continue;const E=g[_],y=h[_];E!==y&&_!=="value"&&i(c,_,y,E,C,d.children,v,k,Be)}"value"in g&&i(c,"value",h.value,g.value)}},kn=(c,d,h,g,v,k,C,_,E)=>{const y=d.el=c?c.el:s(""),R=d.anchor=c?c.anchor:s("");let{patchFlag:T,dynamicChildren:F,slotScopeIds:z}=d;z&&(_=_?_.concat(z):z),c==null?(r(y,h,g),r(R,h,g),Ce(d.children,h,R,v,k,C,_,E)):T>0&&T&64&&F&&c.dynamicChildren?(He(c.dynamicChildren,F,h,v,k,C,_),(d.key!=null||v&&d===v.subTree)&&qo(c,d,!0)):q(c,d,h,R,v,k,C,_,E)},An=(c,d,h,g,v,k,C,_,E)=>{d.slotScopeIds=_,c==null?d.shapeFlag&512?v.ctx.activate(d,h,g,C,E):kr(d,h,g,v,k,C,E):Ha(c,d,E)},kr=(c,d,h,g,v,k,C)=>{const _=c.component=Af(c,g,v);if($o(c)&&(_.ctx.renderer=Ot),Ef(_),_.asyncDep){if(v&&v.registerDep(_,pe),!c.el){const E=_.subTree=J(At);w(null,E,d,h)}return}pe(_,c,d,h,v,k,C)},Ha=(c,d,h)=>{const g=d.component=c.component;if(Rl(c,d,h))if(g.asyncDep&&!g.asyncResolved){te(g,d,h);return}else g.next=d,El(g.update),g.update();else d.el=c.el,g.vnode=d},pe=(c,d,h,g,v,k,C)=>{const _=()=>{if(c.isMounted){let{next:R,bu:T,u:F,parent:z,vnode:H}=c,X=R,V;ht(c,!1),R?(R.el=H.el,te(c,R,C)):R=H,T&&Yn(T),(V=R.props&&R.props.onVnodeBeforeUpdate)&&$e(V,z,R,H),ht(c,!0);const re=Or(c),Oe=c.subTree;c.subTree=re,x(Oe,re,m(Oe.el),Cn(Oe),c,v,k),R.el=re.el,X===null&&Fl(c,re.el),F&&ve(F,v),(V=R.props&&R.props.onVnodeUpdated)&&ve(()=>$e(V,z,R,H),v)}else{let R;const{el:T,props:F}=d,{bm:z,m:H,parent:X}=c,V=Kn(d);if(ht(c,!1),z&&Yn(z),!V&&(R=F&&F.onVnodeBeforeMount)&&$e(R,X,d),ht(c,!0),T&&Er){const re=()=>{c.subTree=Or(c),Er(T,c.subTree,c,v,null)};V?d.type.__asyncLoader().then(()=>!c.isUnmounted&&re()):re()}else{const re=c.subTree=Or(c);x(null,re,h,g,c,v,k),d.el=re.el}if(H&&ve(H,v),!V&&(R=F&&F.onVnodeMounted)){const re=d;ve(()=>$e(R,X,re),v)}(d.shapeFlag&256||X&&Kn(X.vnode)&&X.vnode.shapeFlag&256)&&c.a&&ve(c.a,v),c.isMounted=!0,d=h=g=null}},E=c.effect=new va(_,()=>Aa(y),c.scope),y=c.update=()=>E.run();y.id=c.uid,ht(c,!0),y()},te=(c,d,h)=>{d.component=c;const g=c.vnode.props;c.vnode=d,c.next=null,ff(c,d.props,g,h),df(c,d.children,h),Kt(),ri(),Wt()},q=(c,d,h,g,v,k,C,_,E=!1)=>{const y=c&&c.children,R=c?c.shapeFlag:0,T=d.children,{patchFlag:F,shapeFlag:z}=d;if(F>0){if(F&128){En(y,T,h,g,v,k,C,_,E);return}else if(F&256){dt(y,T,h,g,v,k,C,_,E);return}}z&8?(R&16&&Be(y,v,k),T!==y&&u(h,T)):R&16?z&16?En(y,T,h,g,v,k,C,_,E):Be(y,v,k,!0):(R&8&&u(h,""),z&16&&Ce(T,h,g,v,k,C,_,E))},dt=(c,d,h,g,v,k,C,_,E)=>{c=c||Nt,d=d||Nt;const y=c.length,R=d.length,T=Math.min(y,R);let F;for(F=0;F<T;F++){const z=d[F]=E?nt(d[F]):Le(d[F]);x(c[F],z,h,null,v,k,C,_,E)}y>R?Be(c,v,k,!0,!1,T):Ce(d,h,g,v,k,C,_,E,T)},En=(c,d,h,g,v,k,C,_,E)=>{let y=0;const R=d.length;let T=c.length-1,F=R-1;for(;y<=T&&y<=F;){const z=c[y],H=d[y]=E?nt(d[y]):Le(d[y]);if(Jt(z,H))x(z,H,h,null,v,k,C,_,E);else break;y++}for(;y<=T&&y<=F;){const z=c[T],H=d[F]=E?nt(d[F]):Le(d[F]);if(Jt(z,H))x(z,H,h,null,v,k,C,_,E);else break;T--,F--}if(y>T){if(y<=F){const z=F+1,H=z<R?d[z].el:g;for(;y<=F;)x(null,d[y]=E?nt(d[y]):Le(d[y]),h,H,v,k,C,_,E),y++}}else if(y>F)for(;y<=T;)Re(c[y],v,k,!0),y++;else{const z=y,H=y,X=new Map;for(y=H;y<=F;y++){const ye=d[y]=E?nt(d[y]):Le(d[y]);ye.key!=null&&X.set(ye.key,y)}let V,re=0;const Oe=F-H+1;let Pt=!1,Ka=0;const Xt=new Array(Oe);for(y=0;y<Oe;y++)Xt[y]=0;for(y=z;y<=T;y++){const ye=c[y];if(re>=Oe){Re(ye,v,k,!0);continue}let Fe;if(ye.key!=null)Fe=X.get(ye.key);else for(V=H;V<=F;V++)if(Xt[V-H]===0&&Jt(ye,d[V])){Fe=V;break}Fe===void 0?Re(ye,v,k,!0):(Xt[Fe-H]=y+1,Fe>=Ka?Ka=Fe:Pt=!0,x(ye,d[Fe],h,null,v,k,C,_,E),re++)}const Wa=Pt?gf(Xt):Nt;for(V=Wa.length-1,y=Oe-1;y>=0;y--){const ye=H+y,Fe=d[ye],Va=ye+1<R?d[ye+1].el:g;Xt[y]===0?x(null,Fe,h,Va,v,k,C,_,E):Pt&&(V<0||y!==Wa[V]?mt(Fe,h,Va,2):V--)}}},mt=(c,d,h,g,v=null)=>{const{el:k,type:C,transition:_,children:E,shapeFlag:y}=c;if(y&6){mt(c.component.subTree,d,h,g);return}if(y&128){c.suspense.move(d,h,g);return}if(y&64){C.move(c,d,h,Ot);return}if(C===K){r(k,d,h);for(let T=0;T<E.length;T++)mt(E[T],d,h,g);r(c.anchor,d,h);return}if(C===Ir){L(c,d,h);return}if(g!==2&&y&1&&_)if(g===0)_.beforeEnter(k),r(k,d,h),ve(()=>_.enter(k),v);else{const{leave:T,delayLeave:F,afterLeave:z}=_,H=()=>r(k,d,h),X=()=>{T(k,()=>{H(),z&&z()})};F?F(k,H,X):X()}else r(k,d,h)},Re=(c,d,h,g=!1,v=!1)=>{const{type:k,props:C,ref:_,children:E,dynamicChildren:y,shapeFlag:R,patchFlag:T,dirs:F}=c;if(_!=null&&Xr(_,null,h,c,!0),R&256){d.ctx.deactivate(c);return}const z=R&1&&F,H=!Kn(c);let X;if(H&&(X=C&&C.onVnodeBeforeUnmount)&&$e(X,d,c),R&6)Ms(c.component,h,g);else{if(R&128){c.suspense.unmount(h,g);return}z&&pt(c,null,d,"beforeUnmount"),R&64?c.type.remove(c,d,h,v,Ot,g):y&&(k!==K||T>0&&T&64)?Be(y,d,h,!1,!0):(k===K&&T&384||!v&&R&16)&&Be(E,d,h),g&&Ba(c)}(H&&(X=C&&C.onVnodeUnmounted)||z)&&ve(()=>{X&&$e(X,d,c),z&&pt(c,null,d,"unmounted")},h)},Ba=c=>{const{type:d,el:h,anchor:g,transition:v}=c;if(d===K){Ns(h,g);return}if(d===Ir){I(c);return}const k=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:_}=v,E=()=>C(h,k);_?_(c.el,k,E):E()}else k()},Ns=(c,d)=>{let h;for(;c!==d;)h=p(c),a(c),c=h;a(d)},Ms=(c,d,h)=>{const{bum:g,scope:v,update:k,subTree:C,um:_}=c;g&&Yn(g),v.stop(),k&&(k.active=!1,Re(C,c,d,h)),_&&ve(_,d),ve(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Be=(c,d,h,g=!1,v=!1,k=0)=>{for(let C=k;C<c.length;C++)Re(c[C],d,h,g,v)},Cn=c=>c.shapeFlag&6?Cn(c.component.subTree):c.shapeFlag&128?c.suspense.next():p(c.anchor||c.el),Ya=(c,d,h)=>{c==null?d._vnode&&Re(d._vnode,null,null,!0):x(d._vnode||null,c,d,null,null,null,h),ri(),To(),d._vnode=c},Ot={p:x,um:Re,m:mt,r:Ba,mt:kr,mc:Ce,pc:q,pbc:He,n:Cn,o:e};let Ar,Er;return t&&([Ar,Er]=t(Ot)),{render:Ya,hydrate:Ar,createApp:of(Ya,Ar)}}function ht({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function hf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function qo(e,t,n=!1){const r=e.children,a=t.children;if($(r)&&$(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=nt(a[i]),s.el=o.el),n||qo(o,s)),s.type===gr&&(s.el=o.el)}}function gf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const vf=e=>e.__isTeleport,K=Symbol.for("v-fgt"),gr=Symbol.for("v-txt"),At=Symbol.for("v-cmt"),Ir=Symbol.for("v-stc"),nn=[];let Ie=null;function j(e=!1){nn.push(Ie=e?null:[])}function bf(){nn.pop(),Ie=nn[nn.length-1]||null}let fn=1;function pi(e){fn+=e}function Xo(e){return e.dynamicChildren=fn>0?Ie||Nt:null,bf(),fn>0&&Ie&&Ie.push(e),e}function D(e,t,n,r,a,i){return Xo(P(e,t,n,r,a,i,!0))}function nr(e,t,n,r,a){return Xo(J(e,t,n,r,a,!0))}function Jr(e){return e?e.__v_isVNode===!0:!1}function Jt(e,t){return e.type===t.type&&e.key===t.key}const vr="__vInternal",Jo=({key:e})=>e??null,Vn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ie(e)||le(e)||U(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function P(e,t=null,n=null,r=0,a=null,i=e===K?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jo(t),ref:t&&Vn(t),scopeId:mr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ee};return s?(Oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ie(n)?8:16),fn>0&&!o&&Ie&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ie.push(l),l}const J=yf;function yf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Jl)&&(e=At),Jr(e)){const s=Dt(e,t,!0);return n&&Oa(s,n),fn>0&&!i&&Ie&&(s.shapeFlag&6?Ie[Ie.indexOf(e)]=s:Ie.push(s)),s.patchFlag|=-2,s}if(If(e)&&(e=e.__vccOpts),t){t=_f(t);let{class:s,style:l}=t;s&&!ie(s)&&(t.class=bn(s)),G(l)&&(ko(l)&&!$(l)&&(l=fe({},l)),t.style=pa(l))}const o=ie(e)?1:$l(e)?128:vf(e)?64:G(e)?4:U(e)?2:0;return P(e,t,n,r,a,o,i,!0)}function _f(e){return e?ko(e)||vr in e?fe({},e):e:null}function Dt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?xf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Jo(s),ref:t&&t.ref?n&&a?$(a)?a.concat(Vn(t)):[a,Vn(t)]:Vn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==K?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function at(e=" ",t=0){return J(gr,null,e,t)}function de(e="",t=!1){return t?(j(),nr(At,null,e)):J(At,null,e)}function Le(e){return e==null||typeof e=="boolean"?J(At):$(e)?J(K,null,e.slice()):typeof e=="object"?nt(e):J(gr,null,String(e))}function nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function Oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(vr in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[at(t)]):n=8);e.children=t,e.shapeFlag|=n}function xf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=bn([t.class,r.class]));else if(a==="style")t.style=pa([t.style,r.style]);else if(sr(a)){const i=t[a],o=r[a];o&&i!==o&&!($(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function $e(e,t,n,r=null){Me(e,t,7,[n,r])}const wf=Ho();let kf=0;function Af(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||wf,i={uid:kf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yo(r,a),emitsOptions:Mo(r,a),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Pl.bind(null,i),e.ce&&e.ce(i),i}let se=null,Pa,St,hi="__VUE_INSTANCE_SETTERS__";(St=Dr()[hi])||(St=Dr()[hi]=[]),St.push(e=>se=e),Pa=e=>{St.length>1?St.forEach(t=>t(e)):St[0](e)};const zt=e=>{Pa(e),e.scope.on()},wt=()=>{se&&se.scope.off(),Pa(null)};function Go(e){return e.vnode.shapeFlag&4}let cn=!1;function Ef(e,t=!1){cn=t;const{props:n,children:r}=e.vnode,a=Go(e);lf(e,n,a,t),uf(e,r);const i=a?Cf(e,t):void 0;return cn=!1,i}function Cf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ao(new Proxy(e.ctx,Zl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Pf(e):null;zt(e),Kt();const i=ot(r,e,0,[e.props,a]);if(Wt(),wt(),oo(i)){if(i.then(wt,wt),t)return i.then(o=>{gi(e,o,t)}).catch(o=>{ur(o,e,0)});e.asyncDep=i}else gi(e,i,t)}else Zo(e,t)}function gi(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Po(t)),Zo(e,n)}let vi;function Zo(e,t,n){const r=e.type;if(!e.render){if(!t&&vi&&!r.render){const a=r.template||Ea(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=vi(a,f)}}e.render=r.render||Ne}{zt(e),Kt();try{Ql(e)}finally{Wt(),wt()}}}function Of(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return be(e,"get","$attrs"),t[n]}}))}function Pf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Of(e)},slots:e.slots,emit:e.emit,expose:t}}function br(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Po(Ao(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in tn)return tn[n](e)},has(t,n){return n in t||n in tn}}))}function Sf(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function If(e){return U(e)&&"__vccOpts"in e}const _e=(e,t)=>xl(e,t,cn);function Tf(e,t,n){const r=arguments.length;return r===2?G(t)&&!$(t)?Jr(t)?J(e,null,[t]):J(e,t):J(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jr(n)&&(n=[n]),J(e,t,n))}const Nf=Symbol.for("v-scx"),Mf=()=>Wn(Nf),Rf="3.3.7",Ff="http://www.w3.org/2000/svg",vt=typeof document<"u"?document:null,bi=vt&&vt.createElement("template"),$f={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?vt.createElementNS(Ff,e):vt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>vt.createTextNode(e),createComment:e=>vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{bi.innerHTML=r?`<svg>${e}</svg>`:e;const s=bi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Lf=Symbol("_vtc");function jf(e,t,n){const r=e[Lf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Df=Symbol("_vod");function zf(e,t,n){const r=e.style,a=ie(n);if(n&&!a){if(t&&!ie(t))for(const i in t)n[i]==null&&Gr(r,i,"");for(const i in n)Gr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Df in e&&(r.display=i)}}const yi=/\s*!important$/;function Gr(e,t,n){if($(n))n.forEach(r=>Gr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Uf(e,t);yi.test(n)?e.setProperty(Yt(r),n.replace(yi,""),"important"):e[r]=n}}const _i=["Webkit","Moz","ms"],Tr={};function Uf(e,t){const n=Tr[t];if(n)return n;let r=Ue(t);if(r!=="filter"&&r in e)return Tr[t]=r;r=fr(r);for(let a=0;a<_i.length;a++){const i=_i[a]+r;if(i in e)return Tr[t]=i}return t}const xi="http://www.w3.org/1999/xlink";function Hf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(xi,t.slice(6,t.length)):e.setAttributeNS(xi,t,n);else{const i=Ks(t);n==null||i&&!fo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Bf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";f!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=fo(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function rt(e,t,n,r){e.addEventListener(t,n,r)}function Yf(e,t,n,r){e.removeEventListener(t,n,r)}const wi=Symbol("_vei");function Kf(e,t,n,r,a=null){const i=e[wi]||(e[wi]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Wf(t);if(r){const f=i[t]=Xf(r,a);rt(e,s,f,l)}else o&&(Yf(e,s,o,l),i[t]=void 0)}}const ki=/(?:Once|Passive|Capture)$/;function Wf(e){let t;if(ki.test(e)){t={};let r;for(;r=e.match(ki);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Yt(e.slice(2)),t]}let Nr=0;const Vf=Promise.resolve(),qf=()=>Nr||(Vf.then(()=>Nr=0),Nr=Date.now());function Xf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(Jf(r,n.value),t,5,[r])};return n.value=e,n.attached=qf(),n}function Jf(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ai=/^on[a-z]/,Gf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?jf(e,r,a):t==="style"?zf(e,n,r):sr(t)?ua(t)||Kf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Zf(e,t,r,a))?Bf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Hf(e,t,r,a))};function Zf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ai.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ai.test(t)&&ie(n)?!1:t in e}const Ut=e=>{const t=e.props["onUpdate:modelValue"]||!1;return $(t)?n=>Yn(t,n):t};function Qf(e){e.target.composing=!0}function Ei(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ve=Symbol("_assign"),ec={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Ve]=Ut(a);const i=r||a.props&&a.props.type==="number";rt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Gn(s)),e[Ve](s)}),n&&rt(e,"change",()=>{e.value=e.value.trim()}),t||(rt(e,"compositionstart",Qf),rt(e,"compositionend",Ei),rt(e,"change",Ei))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Ve]=Ut(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Gn(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},tc={deep:!0,created(e,t,n){e[Ve]=Ut(n),rt(e,"change",()=>{const r=e._modelValue,a=un(e),i=e.checked,o=e[Ve];if($(r)){const s=ha(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const f=[...r];f.splice(s,1),o(f)}}else if(Bt(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(Qo(e,i))})},mounted:Ci,beforeUpdate(e,t,n){e[Ve]=Ut(n),Ci(e,t,n)}};function Ci(e,{value:t,oldValue:n},r){e._modelValue=t,$(t)?e.checked=ha(t,r.props.value)>-1:Bt(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=yn(t,Qo(e,!0)))}const nc={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=Bt(t);rt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Gn(un(o)):un(o));e[Ve](e.multiple?a?new Set(i):i:i[0])}),e[Ve]=Ut(r)},mounted(e,{value:t}){Oi(e,t)},beforeUpdate(e,t,n){e[Ve]=Ut(n)},updated(e,{value:t}){Oi(e,t)}};function Oi(e,t){const n=e.multiple;if(!(n&&!$(t)&&!Bt(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=un(i);if(n)$(t)?i.selected=ha(t,o)>-1:i.selected=t.has(o);else if(yn(un(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function un(e){return"_value"in e?e._value:e.value}function Qo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const rc=["ctrl","shift","alt","meta"],ac={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>rc.some(n=>e[`${n}Key`]&&!t.includes(n))},ic=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=ac[t[a]];if(i&&i(n,t))return}return e(n,...r)},oc=fe({patchProp:Gf},$f);let Pi;function sc(){return Pi||(Pi=mf(oc))}const lc=(...e)=>{const t=sc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=fc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function fc(e){return ie(e)?document.querySelector(e):e}let Mr=null;function cc(){return Mr===null&&(Mr=fetch("./assets/data.json").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})),Mr}const uc={class:"container-fluid d-flex flex-wrap justify-content-center py-3 mb-4 text-bg-secondary"},dc={class:"d-flex fs-4 mb-0 me-md-auto"},mc={class:"fs-4 text-decoration-none text-light",href:"https://github.com/mlocati/unipoints"},pc=Ge({__name:"HeaderElement",props:{unicodeVersion:{}},setup(e){return(t,n)=>{const r=hr("font-awesome-icon");return j(),D("header",uc,[P("h1",dc,"Codepoints from Unicode v"+ae(t.unicodeVersion),1),P("a",mc,[J(r,{icon:["fab","github"]})])])}}}),Si={};function hc(e){var n,r,a,i,o,s,l;const t=[e.name.toUpperCase()];return e.unicode1Name!==void 0&&t.push(e.unicode1Name.toUpperCase()),(n=e.formalAliases)==null||n.forEach(f=>t.push(f.toUpperCase())),(r=e.informativeAliases)==null||r.forEach(f=>t.push(f.toUpperCase())),(a=e.correctedNames)==null||a.forEach(f=>t.push(f.toUpperCase())),(i=e.controlNames)==null||i.forEach(f=>t.push(f.toUpperCase())),(o=e.alternateNames)==null||o.forEach(f=>t.push(f.toUpperCase())),(s=e.figments)==null||s.forEach(f=>t.push(f.toUpperCase())),(l=e.abbreviations)==null||l.forEach(f=>t.push(f.toUpperCase())),t}function es(e){return Si[e.id]??(Si[e.id]=hc(e))}function gc(e,t){return es(e).some(n=>t.every(r=>n.includes(r)))}function vc(e,t){return es(e).some(n=>t.test(n))}const bc={class:"container"},yc={class:"input-group mb-3"},_c=P("span",{class:"input-group-text"},"Block",-1),xc=P("option",{value:null},"any",-1),wc=["label"],kc={key:0,disabled:""},Ac=["value"],Ec=P("span",{class:"input-group-text"},"Search",-1),Cc=["placeholder"],Oc={class:"input-group-text"},Pc=Ge({__name:"DataFilter",props:{unipointsData:{}},emits:["change"],setup(e,{emit:t}){const n=e,r=De(null),a=De("");let i=null;const o=De(!1);function s(p){if(p.length===0)return[];const b=[],S=[];let x;return(x=a.value.match(/^&#x([0-9a-f]{1,6});$/i))!==null?b.push(parseInt(x[1],16)):(x=a.value.match(/^&#([0-9]{1,7});$/))!==null?b.push(parseInt(x[1],10)):(x=a.value.match(/^["']?\\u([0-9a-f]{4})["']?$/i))!==null||(x=a.value.match(/^["']?\\x([0-9a-f]{2})["']?$/i))!==null||(x=a.value.match(/^"?\\u\{([0-9a-f]{1,6})\}"?$/i))!==null?b.push(parseInt(x[1],16)):(x=a.value.match(/^["']?\\u([0-9a-f]{4})\\u([0-9a-f]{4})["']?$/i))!==null?S.push({high:parseInt(x[1],16),low:parseInt(x[2],16)}):((x=a.value.match(/^([0-9]{1,7})$/))!==null&&b.push(parseInt(x[1],10)),(x=a.value.match(/^([0-9a-f]{1,6})$/i))!==null&&b.push(parseInt(x[1],16))),S.forEach(M=>{M.high>=55296&&M.high<=56319&&M.low>=56320&&M.low<=57343&&b.push(65536+(M.high-55296<<10)+(M.low-56320))}),b.filter(M=>M>=0&&M<=1114111).filter((M,w,A)=>A.indexOf(M)===w)}const l=_e(()=>{if(a.value.length===0)return new Error("Please specify the regular expression");try{return new RegExp(a.value,"i")}catch(p){return p instanceof Error?p:new Error((p==null?void 0:p.toString())||"?")}});function f(){i!==null&&(clearTimeout(i),i=null)}const u=t;st(r,async()=>{m()}),st(a,async()=>{f(),i=setTimeout(()=>m(),300)}),st(o,async()=>{m()});function m(){f();const p=l.value;if(o.value&&l.value instanceof Error){u("change",l.value);return}const b=[];if(!o.value){const x=o.value?[]:s(a.value);if(x.length>0&&(n.unipointsData!==null&&n.unipointsData.planes.forEach(M=>{if(r.value!==null&&r.value.plane!==M.id)return;const w=[];M.blocks.forEach(A=>{if(r.value!==null&&r.value.block!==void 0&&r.value.block!==A.codename)return;const L=A.codepoints.filter(I=>x.includes(I.id));L.length!==0&&w.push({block:A,codepoints:L})}),w.length!==0&&b.push({plane:M,blocks:w})}),b.length>0)){u("change",b);return}}const S=a.value.split(/\s+/).filter(x=>x.length>0).map(x=>x.toUpperCase());n.unipointsData!==null&&n.unipointsData.planes.forEach(x=>{if(r.value!==null&&r.value.plane!==x.id)return;const M=[];x.blocks.forEach(w=>{if(r.value!==null&&r.value.block!==void 0&&r.value.block!==w.codename)return;let A;if(o.value){if(p instanceof Error)return;A=w.codepoints.filter(L=>vc(L,p))}else S.length===0?A=w.codepoints:A=w.codepoints.filter(L=>gc(L,S));A.length!==0&&M.push({block:w,codepoints:A})}),M.length!==0&&b.push({plane:x,blocks:M})}),u("change",b)}return jo(()=>m()),(p,b)=>(j(),D("div",bc,[P("div",yc,[_c,p.unipointsData!==null?Pr((j(),D("select",{key:0,class:"form-control","onUpdate:modelValue":b[0]||(b[0]=S=>r.value=S)},[xc,(j(!0),D(K,null,Ae(p.unipointsData.planes,S=>(j(),D("optgroup",{key:S.id.toString(),label:`Plane ${S.id}`+(S.name!==""?` (${S.name})`:S.unassigned?" (unassigned)":"")},[S.blocks.length===0?(j(),D("option",kc,"No blocks in this plane")):(j(!0),D(K,{key:1},Ae(S.blocks,x=>(j(),D("option",{key:`${S.id}-${x.codename}`,value:{plane:S.id,block:x.codename}},ae(x.name),9,Ac))),128))],8,wc))),128))],512)),[[nc,r.value]]):de("",!0),Ec,Pr(P("input",{type:"search",class:bn(["form-control",o.value?l.value instanceof RegExp?"font-monospace is-valid":"font-monospace is-invalid":""]),"onUpdate:modelValue":b[1]||(b[1]=S=>a.value=S),placeholder:o.value?"Filter by regular expression":"Filter by name or codepoint"},null,10,Cc),[[ec,a.value,void 0,{trim:!0}]]),P("div",Oc,[P("label",null,[Pr(P("input",{type:"checkbox",class:"form-check-input me-","onUpdate:modelValue":b[2]||(b[2]=S=>o.value=S)},null,512),[[tc,o.value]]),at(" rx ")])])])]))}}),Sc={class:"text-center text-light bg-dark p-2"},Ic={class:"mb-0"},Tc=Ge({__name:"PlaneViewer",props:{plane:{}},setup(e){return(t,n)=>(j(),D("div",Sc,[P("h3",Ic,[at(" Plane "+ae(t.plane.id)+" ",1),t.plane.name!==""?(j(),D(K,{key:0},[at(" ("),t.plane.shortName!==""?(j(),D(K,{key:0},[at(ae(t.plane.shortName)+" - ",1)],64)):de("",!0),at(ae(t.plane.name)+") ",1)],64)):de("",!0)])]))}}),Nc={class:"text-center text-light bg-secondary p-2"},Mc={class:"mb-0"},Ii=Ge({__name:"BlockViewer",props:{block:{}},setup(e){return(t,n)=>(j(),D("div",Nc,[P("h4",Mc,ae(t.block.name),1)]))}}),Rc={class:"copiable"},Fc={key:0},Ti="bg-success",Ni="bg-danger",$c=Ge({__name:"CopiableText",props:{text:{},displayText:{},code:{type:[Boolean,null]}},setup(e){var f;const t=e,n=_e(()=>t.displayText??t.text),r=De(null);let a=null;function i(){r.value===null||a===null||(clearTimeout(a),a=null,r.value.classList.remove(Ti,Ni))}function o(u){i(),r.value!==null&&(r.value.classList.add(u?Ti:Ni),a=setTimeout(()=>i(),500))}let s;(f=navigator==null?void 0:navigator.clipboard)!=null&&f.writeText?s=()=>navigator.clipboard.writeText(t.text):s=()=>new Promise((u,m)=>{const p=document.createElement("textarea");p.style.width="1px",p.style.height="1px",p.style.overflow="hidden",p.style.top="0",p.style.left="0",p.style.position="fixed",p.value=t.text,document.body.appendChild(p);try{p.focus(),p.select(),document.execCommand("copy")?u():m(new Error("Copy command failed"))}catch(b){m(b)}finally{document.body.removeChild(p)}});function l(u){u.preventDefault(),i(),s().then(()=>{o(!0)}).catch(m=>{console.error(m),o(!1)})}return(u,m)=>{const p=hr("font-awesome-icon");return j(),D("span",Rc,[u.code?(j(),D("code",Fc,ae(n.value),1)):(j(),D(K,{key:1},[at(ae(n.value),1)],64)),P("a",{href:"#",title:"Copy to clipboard",ref_key:"link",ref:r,onClick:l},[J(p,{icon:["far","copy"]})],512)])}}});const ts=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Gt=ts($c,[["__scopeId","data-v-c42c3166"]]),xe=e=>(Sl("data-v-d511621c"),e=e(),Il(),e),Lc={class:"char"},jc={class:"mb-0"},Dc={class:"m-0"},zc={key:0,class:"details"},Uc={colspan:"99"},Hc={class:"container mx-4"},Bc={class:"row"},Yc={class:"col"},Kc=xe(()=>P("dt",null,"PHP",-1)),Wc=xe(()=>P("dt",null,"JavaScript",-1)),Vc=xe(()=>P("dt",null,"HTML",-1)),qc=xe(()=>P("dt",null,"Unipoints",-1)),Xc=xe(()=>P("dt",null,"Unipoints (less memory)",-1)),Jc={class:"col"},Gc={key:0},Zc=xe(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Old Unicode name",-1)),Qc=xe(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Formal alias",-1)),eu=xe(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Informative alias",-1)),tu=xe(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Corrected name",-1)),nu=xe(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Control name",-1)),ru=xe(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Alternate name",-1)),au=xe(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Figment",-1)),iu=xe(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Abbreviation",-1)),ou=Ge({__name:"CodepointViewer",props:{block:{},codepoint:{}},setup(e){const t=e,n=De(!1),r=_e(()=>`"\\u{${t.codepoint.id.toString(16).toUpperCase()}}"`),a=_e(()=>t.codepoint.id<=65535?`'\\u${t.codepoint.id.toString(16).padStart(4,"0")}'`:`'\\u${t.codepoint.char.charCodeAt(0).toString(16).padStart(4,"0")}\\u${t.codepoint.char.charCodeAt(1).toString(16).padStart(4,"0")}'`),i=_e(()=>`&#x${t.codepoint.id.toString(16).toUpperCase()};`);return(o,s)=>{const l=hr("font-awesome-icon");return j(),D(K,null,[P("tr",{onClick:s[0]||(s[0]=f=>n.value=!n.value)},[P("td",Lc,[P("pre",jc,ae(o.codepoint.char),1)]),P("td",null,[P("h5",Dc,ae(o.codepoint.name),1)]),P("td",null,[P("button",{class:bn(["btn",n.value?"btn-primary":"btn-outline-primary"])},[J(l,{icon:"fa-solid fa-circle-info"})],2)])]),n.value?(j(),D("tr",zc,[P("td",Uc,[P("div",Hc,[P("div",Bc,[P("div",Yc,[P("dl",null,[Kc,P("dd",null,[J(Gt,{code:!0,text:r.value},null,8,["text"])]),Wc,P("dd",null,[J(Gt,{code:!0,text:a.value},null,8,["text"])]),Vc,P("dd",null,[J(Gt,{code:!0,text:i.value},null,8,["text"])]),qc,P("dd",null,[J(Gt,{text:`\\MLUnipoints\\Codepoint::${o.codepoint.codename}`,"display-text":`Codepoint::${o.codepoint.codename}`,code:!0},null,8,["text","display-text"])]),Xc,P("dd",null,[J(Gt,{text:`\\MLUnipoints\\Codepoint\\${o.block.codename}::${o.codepoint.codename}`,"display-text":`Codepoint\\${o.block.codename}::${o.codepoint.codename}`,code:!0},null,8,["text","display-text"])])])]),P("div",Jc,[o.codepoint.unicode1Name!==void 0?(j(),D("div",Gc,[Zc,P("code",null,ae(o.codepoint.unicode1Name),1)])):de("",!0),o.codepoint.formalAliases!==void 0?(j(!0),D(K,{key:1},Ae(o.codepoint.formalAliases,f=>(j(),D("div",{key:f},[Qc,P("code",null,ae(f),1)]))),128)):de("",!0),o.codepoint.informativeAliases!==void 0?(j(!0),D(K,{key:2},Ae(o.codepoint.informativeAliases,f=>(j(),D("div",{key:f},[eu,P("code",null,ae(f),1)]))),128)):de("",!0),o.codepoint.correctedNames!==void 0?(j(!0),D(K,{key:3},Ae(o.codepoint.correctedNames,f=>(j(),D("div",{key:f},[tu,P("code",null,ae(f),1)]))),128)):de("",!0),o.codepoint.controlNames!==void 0?(j(!0),D(K,{key:4},Ae(o.codepoint.controlNames,f=>(j(),D("div",{key:f},[nu,P("code",null,ae(f),1)]))),128)):de("",!0),o.codepoint.alternateNames!==void 0?(j(!0),D(K,{key:5},Ae(o.codepoint.alternateNames,f=>(j(),D("div",{key:f},[ru,P("code",null,ae(f),1)]))),128)):de("",!0),o.codepoint.figments!==void 0?(j(!0),D(K,{key:6},Ae(o.codepoint.figments,f=>(j(),D("div",{key:f},[au,P("code",null,ae(f),1)]))),128)):de("",!0),o.codepoint.abbreviations!==void 0?(j(!0),D(K,{key:7},Ae(o.codepoint.abbreviations,f=>(j(),D("div",{key:f},[iu,P("code",null,ae(f),1)]))),128)):de("",!0)])])])])])):de("",!0)],64)}}});const su=ts(ou,[["__scopeId","data-v-d511621c"]]),lu={class:"container"},fu={key:0,class:"alert alert-info"},cu={class:"table table-hover table-sm m-0"},uu=P("colgroup",null,[P("col",{width:"150"}),P("col"),P("col",{width:"1"})],-1),du={key:0,class:"text-center mt-2"},Mn=1e3,mu=Ge({__name:"DataViewer",props:{filterResults:{}},setup(e){let t=De(Mn),n=!1;const r=e;st(r.filterResults,async()=>{t.value=Mn});const a=_e(()=>{if(n=!1,r.filterResults===null)return[];let i=t.value;const o=[];return r.filterResults.some(s=>{const l={plane:s.plane,blocks:[]};if(s.blocks.some(f=>{const u={block:f.block,codepoints:[]};if(f.codepoints.length<=i?u.codepoints=f.codepoints:u.codepoints=f.codepoints.slice(0,i),l.blocks.push(u),i-=u.codepoints.length,i<=0)return n=!0,!0}),o.push(l),i<=0)return!0}),o});return(i,o)=>(j(),D("div",lu,[a.value.length===0?(j(),D("div",fu,"No results")):(j(),D(K,{key:1},[(j(!0),D(K,null,Ae(a.value,s=>(j(),D(K,{key:s.plane.id.toString()},[J(Tc,{plane:s.plane},null,8,["plane"]),J(Ii,{block:s.blocks[0].block},null,8,["block"]),(j(!0),D(K,null,Ae(s.blocks,(l,f)=>(j(),D(K,{key:`${s.plane.id}@${l.codename}`},[f!==0?(j(),nr(Ii,{key:0,block:l.block},null,8,["block"])):de("",!0),P("table",cu,[uu,P("tbody",null,[(j(!0),D(K,null,Ae(l.codepoints,u=>(j(),nr(su,{key:u.name,block:l.block,codepoint:u},null,8,["block","codepoint"]))),128))])])],64))),128))],64))),128)),Oo(n)?(j(),D("div",du,[P("button",{class:"btn btn-secondary",onClick:o[0]||(o[0]=ic(s=>le(t)?t.value+=Mn:t+=Mn,["prevent"]))}," Show more ")])):de("",!0)],64))]))}}),pu={key:0,class:"container"},hu={key:0,class:"alert alert-danger mt-5 text-center"},gu={key:1,class:"alert alert-info mt-5 text-center fs-4"},vu=P("br",null,null,-1),bu={key:0},yu={key:0,class:"container alert alert-danger"},_u=Ge({__name:"App",setup(e){const t=De(null),n=De(null),r=De(null),a=De(null);cc().then(o=>{t.value=o}).catch(o=>{n.value=o});function i(o){o instanceof Error?(r.value=null,a.value=o):(r.value=o,a.value=null)}return(o,s)=>{const l=hr("font-awesome-icon");return t.value===null?(j(),D("main",pu,[n.value!==null?(j(),D("div",hu,ae(n.value),1)):(j(),D("div",gu,[at(" Loading..."),vu,J(l,{icon:"fa-solid fa-spinner",spin:""})]))])):(j(),D(K,{key:1},[J(pc,{"unicode-version":t.value.unicodeVersion},null,8,["unicode-version"]),t.value?(j(),D("main",bu,[J(Pc,{"unipoints-data":t.value,onChange:s[0]||(s[0]=f=>i(f))},null,8,["unipoints-data"]),a.value!==null?(j(),D("div",yu,ae(a.value.message),1)):r.value!==null?(j(),nr(mu,{key:1,filterResults:r.value},null,8,["filterResults"])):de("",!0)])):de("",!0)],64))}}});function Mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mi(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rr(e){"@babel/helpers - typeof";return rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rr(e)}function xu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ri(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wu(e,t,n){return t&&Ri(e.prototype,t),n&&Ri(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sa(e,t){return Au(e)||Cu(e,t)||ns(e,t)||Pu()}function _n(e){return ku(e)||Eu(e)||ns(e)||Ou()}function ku(e){if(Array.isArray(e))return Zr(e)}function Au(e){if(Array.isArray(e))return e}function Eu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ns(e,t){if(e){if(typeof e=="string")return Zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zr(e,t)}}function Zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ou(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fi=function(){},Ia={},rs={},as=null,is={mark:Fi,measure:Fi};try{typeof window<"u"&&(Ia=window),typeof document<"u"&&(rs=document),typeof MutationObserver<"u"&&(as=MutationObserver),typeof performance<"u"&&(is=performance)}catch{}var Su=Ia.navigator||{},$i=Su.userAgent,Li=$i===void 0?"":$i,ft=Ia,ee=rs,ji=as,Rn=is;ft.document;var Qe=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",os=~Li.indexOf("MSIE")||~Li.indexOf("Trident/"),Fn,$n,Ln,jn,Dn,qe="___FONT_AWESOME___",Qr=16,ss="fa",ls="svg-inline--fa",Et="data-fa-i2svg",ea="data-fa-pseudo-element",Iu="data-fa-pseudo-element-pending",Ta="data-prefix",Na="data-icon",Di="fontawesome-i2svg",Tu="async",Nu=["HTML","HEAD","STYLE","SCRIPT"],fs=function(){try{return!0}catch{return!1}}(),Q="classic",ne="sharp",Ma=[Q,ne];function xn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Q]}})}var dn=xn((Fn={},oe(Fn,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),oe(Fn,ne,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Fn)),mn=xn(($n={},oe($n,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),oe($n,ne,{solid:"fass",regular:"fasr",light:"fasl"}),$n)),pn=xn((Ln={},oe(Ln,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),oe(Ln,ne,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ln)),Mu=xn((jn={},oe(jn,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),oe(jn,ne,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),jn)),Ru=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,cs="fa-layers-text",Fu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$u=xn((Dn={},oe(Dn,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),oe(Dn,ne,{900:"fass",400:"fasr",300:"fasl"}),Dn)),us=[1,2,3,4,5,6,7,8,9,10],Lu=us.concat([11,12,13,14,15,16,17,18,19,20]),ju=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hn=new Set;Object.keys(mn[Q]).map(hn.add.bind(hn));Object.keys(mn[ne]).map(hn.add.bind(hn));var Du=[].concat(Ma,_n(hn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yt.GROUP,yt.SWAP_OPACITY,yt.PRIMARY,yt.SECONDARY]).concat(us.map(function(e){return"".concat(e,"x")})).concat(Lu.map(function(e){return"w-".concat(e)})),rn=ft.FontAwesomeConfig||{};function zu(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Uu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var Hu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hu.forEach(function(e){var t=Sa(e,2),n=t[0],r=t[1],a=Uu(zu(n));a!=null&&(rn[r]=a)})}var ds={styleDefault:"solid",familyDefault:"classic",cssPrefix:ss,replacementClass:ls,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rn.familyPrefix&&(rn.cssPrefix=rn.familyPrefix);var Ht=O(O({},ds),rn);Ht.autoReplaceSvg||(Ht.observeMutations=!1);var N={};Object.keys(ds).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Ht[e]=n,an.forEach(function(r){return r(N)})},get:function(){return Ht[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){Ht.cssPrefix=t,an.forEach(function(n){return n(N)})},get:function(){return Ht.cssPrefix}});ft.FontAwesomeConfig=N;var an=[];function Bu(e){return an.push(e),function(){an.splice(an.indexOf(e),1)}}var tt=Qr,ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yu(e){if(!(!e||!Qe)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ee.head.insertBefore(t,r),e}}var Ku="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gn(){for(var e=12,t="";e-- >0;)t+=Ku[Math.random()*62|0];return t}function Vt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ra(e){return e.classList?Vt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ms(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ms(e[n]),'" ')},"").trim()}function yr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Fa(e){return e.size!==ze.size||e.x!==ze.x||e.y!==ze.y||e.rotate!==ze.rotate||e.flipX||e.flipY}function Vu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function qu(e){var t=e.transform,n=e.width,r=n===void 0?Qr:n,a=e.height,i=a===void 0?Qr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&os?l+="translate(".concat(t.x/tt-r/2,"em, ").concat(t.y/tt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/tt,"em), calc(-50% + ").concat(t.y/tt,"em)) "):l+="translate(".concat(t.x/tt,"em, ").concat(t.y/tt,"em) "),l+="scale(".concat(t.size/tt*(t.flipX?-1:1),", ").concat(t.size/tt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Xu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ps(){var e=ss,t=ls,n=N.cssPrefix,r=N.replacementClass,a=Xu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var zi=!1;function Rr(){N.autoAddCss&&!zi&&(Yu(ps()),zi=!0)}var Ju={mixout:function(){return{dom:{css:ps,insertCss:Rr}}},hooks:function(){return{beforeDOMElementCreation:function(){Rr()},beforeI2svg:function(){Rr()}}}},Xe=ft||{};Xe[qe]||(Xe[qe]={});Xe[qe].styles||(Xe[qe].styles={});Xe[qe].hooks||(Xe[qe].hooks={});Xe[qe].shims||(Xe[qe].shims=[]);var Te=Xe[qe],hs=[],Gu=function e(){ee.removeEventListener("DOMContentLoaded",e),ar=1,hs.map(function(t){return t()})},ar=!1;Qe&&(ar=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),ar||ee.addEventListener("DOMContentLoaded",Gu));function Zu(e){Qe&&(ar?setTimeout(e,0):hs.push(e))}function wn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ms(e):"<".concat(t," ").concat(Wu(r),">").concat(i.map(wn).join(""),"</").concat(t,">")}function Ui(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Fr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Qu(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function ed(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ta(e){var t=ed(e);return t.length===1?t[0].toString(16):null}function td(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Hi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function na(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Hi(t);typeof Te.hooks.addPack=="function"&&!a?Te.hooks.addPack(e,Hi(t)):Te.styles[e]=O(O({},Te.styles[e]||{}),i),e==="fas"&&na("fa",t)}var zn,Un,Hn,It=Te.styles,nd=Te.shims,rd=(zn={},oe(zn,Q,Object.values(pn[Q])),oe(zn,ne,Object.values(pn[ne])),zn),$a=null,gs={},vs={},bs={},ys={},_s={},ad=(Un={},oe(Un,Q,Object.keys(dn[Q])),oe(Un,ne,Object.keys(dn[ne])),Un);function id(e){return~Du.indexOf(e)}function od(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!id(a)?a:null}var xs=function(){var t=function(i){return Fr(It,function(o,s,l){return o[l]=Fr(s,i,{}),o},{})};gs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),vs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),_s=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in It||N.autoFetchSvg,r=Fr(nd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});bs=r.names,ys=r.unicodes,$a=_r(N.styleDefault,{family:N.familyDefault})};Bu(function(e){$a=_r(e.styleDefault,{family:N.familyDefault})});xs();function La(e,t){return(gs[e]||{})[t]}function sd(e,t){return(vs[e]||{})[t]}function _t(e,t){return(_s[e]||{})[t]}function ws(e){return bs[e]||{prefix:null,iconName:null}}function ld(e){var t=ys[e],n=La("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ct(){return $a}var ja=function(){return{prefix:null,iconName:null,rest:[]}};function _r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Q:n,a=dn[r][e],i=mn[r][e]||mn[r][a],o=e in Te.styles?e:null;return i||o||null}var Bi=(Hn={},oe(Hn,Q,Object.keys(pn[Q])),oe(Hn,ne,Object.keys(pn[ne])),Hn);function xr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},oe(t,Q,"".concat(N.cssPrefix,"-").concat(Q)),oe(t,ne,"".concat(N.cssPrefix,"-").concat(ne)),t),o=null,s=Q;(e.includes(i[Q])||e.some(function(f){return Bi[Q].includes(f)}))&&(s=Q),(e.includes(i[ne])||e.some(function(f){return Bi[ne].includes(f)}))&&(s=ne);var l=e.reduce(function(f,u){var m=od(N.cssPrefix,u);if(It[u]?(u=rd[s].includes(u)?Mu[s][u]:u,o=u,f.prefix=u):ad[s].indexOf(u)>-1?(o=u,f.prefix=_r(u,{family:s})):m?f.iconName=m:u!==N.replacementClass&&u!==i[Q]&&u!==i[ne]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var p=o==="fa"?ws(f.iconName):{},b=_t(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||b||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!It.far&&It.fas&&!N.autoFetchSvg&&(f.prefix="fas")}return f},ja());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ne&&(It.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=_t(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ct()||"fas"),l}var fd=function(){function e(){xu(this,e),this.definitions={}}return wu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),na(s,o[s]);var l=pn[Q][s];l&&na(l,o[s]),xs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Yi=[],Tt={},$t={},cd=Object.keys($t);function ud(e,t){var n=t.mixoutsTo;return Yi=e,Tt={},Object.keys($t).forEach(function(r){cd.indexOf(r)===-1&&delete $t[r]}),Yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),rr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Tt[o]||(Tt[o]=[]),Tt[o].push(i[o])})}r.provides&&r.provides($t)}),n}function ra(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Tt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ct(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Tt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $t[e]?$t[e].apply(null,t):void 0}function aa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ct();if(t)return t=_t(n,t)||t,Ui(ks.definitions,n,t)||Ui(Te.styles,n,t)}var ks=new fd,dd=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,Ct("noAuto")},md={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(Ct("beforeI2svg",t),Je("pseudoElements2svg",t),Je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Zu(function(){hd({autoReplaceSvgRoot:n}),Ct("watch",t)})}},pd={icon:function(t){if(t===null)return null;if(rr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_t(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=_r(t[0]);return{prefix:r,iconName:_t(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(Ru))){var a=xr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ct(),iconName:_t(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ct();return{prefix:i,iconName:_t(i,t)||t}}}},we={noAuto:dd,config:N,dom:md,parse:pd,library:ks,findIconDefinition:aa,toHtml:wn},hd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(Te.styles).length>0||N.autoFetchSvg)&&Qe&&N.autoReplaceSvg&&we.dom.i2svg({node:r})};function wr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return wn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Qe){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function gd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Fa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=yr(O(O({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function vd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function Da(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,b=p===void 0?!1:p,S=r.found?r:n,x=S.width,M=S.height,w=a==="fak",A=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(function(ke){return m.classes.indexOf(ke)===-1}).filter(function(ke){return ke!==""||!!ke}).concat(m.classes).join(" "),L={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(M)})},I=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(x/M*16*.0625,"em")}:{};b&&(L.attributes[Et]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(u||gn())},children:[l]}),delete L.attributes.title);var W=O(O({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:O(O({},I),m.styles)}),ce=r.found&&n.found?Je("generateAbstractMask",W)||{children:[],attributes:{}}:Je("generateAbstractIcon",W)||{children:[],attributes:{}},ue=ce.children,Ce=ce.attributes;return W.children=ue,W.attributes=Ce,s?vd(W):gd(W)}function Ki(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Et]="");var u=O({},o.styles);Fa(a)&&(u.transform=qu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=yr(u);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function bd(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=yr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $r=Te.styles;function ia(e){var t=e[0],n=e[1],r=e.slice(4),a=Sa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(yt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(yt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(yt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var yd={found:!1,width:512,height:512};function _d(e,t){!fs&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function oa(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=ct()),new Promise(function(r,a){if(Je("missingIconAbstract"),n==="fa"){var i=ws(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&$r[t]&&$r[t][e]){var o=$r[t][e];return r(ia(o))}_d(e,t),r(O(O({},yd),{},{icon:N.showMissingIcons&&e?Je("missingIconAbstract")||{}:{}}))})}var Wi=function(){},sa=N.measurePerformance&&Rn&&Rn.mark&&Rn.measure?Rn:{mark:Wi,measure:Wi},en='FA "6.4.2"',xd=function(t){return sa.mark("".concat(en," ").concat(t," begins")),function(){return As(t)}},As=function(t){sa.mark("".concat(en," ").concat(t," ends")),sa.measure("".concat(en," ").concat(t),"".concat(en," ").concat(t," begins"),"".concat(en," ").concat(t," ends"))},za={begin:xd,end:As},qn=function(){};function Vi(e){var t=e.getAttribute?e.getAttribute(Et):null;return typeof t=="string"}function wd(e){var t=e.getAttribute?e.getAttribute(Ta):null,n=e.getAttribute?e.getAttribute(Na):null;return t&&n}function kd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Ad(){if(N.autoReplaceSvg===!0)return Xn.replace;var e=Xn[N.autoReplaceSvg];return e||Xn.replace}function Ed(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function Cd(e){return ee.createElement(e)}function Es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ed:Cd:n;if(typeof e=="string")return ee.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Es(o,{ceFn:r}))}),a}function Od(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Xn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Es(a),n)}),n.getAttribute(Et)===null&&N.keepOriginalSource){var r=ee.createComment(Od(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ra(n).indexOf(N.replacementClass))return Xn.replace(t);var a=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return wn(s)}).join(`
`);n.setAttribute(Et,""),n.innerHTML=o}};function qi(e){e()}function Cs(e,t){var n=typeof t=="function"?t:qn;if(e.length===0)n();else{var r=qi;N.mutateApproach===Tu&&(r=ft.requestAnimationFrame||qi),r(function(){var a=Ad(),i=za.begin("mutate");e.map(a),i(),n()})}}var Ua=!1;function Os(){Ua=!0}function la(){Ua=!1}var ir=null;function Xi(e){if(ji&&N.observeMutations){var t=e.treeCallback,n=t===void 0?qn:t,r=e.nodeCallback,a=r===void 0?qn:r,i=e.pseudoElementsCallback,o=i===void 0?qn:i,s=e.observeMutationsRoot,l=s===void 0?ee:s;ir=new ji(function(f){if(!Ua){var u=ct();Vt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Vi(m.addedNodes[0])&&(N.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&N.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Vi(m.target)&&~ju.indexOf(m.attributeName))if(m.attributeName==="class"&&wd(m.target)){var p=xr(Ra(m.target)),b=p.prefix,S=p.iconName;m.target.setAttribute(Ta,b||u),S&&m.target.setAttribute(Na,S)}else kd(m.target)&&a(m.target)})}}),Qe&&ir.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pd(){ir&&ir.disconnect()}function Sd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Id(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=xr(Ra(e));return a.prefix||(a.prefix=ct()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=sd(a.prefix,e.innerText)||La(a.prefix,ta(e.innerText))),!a.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Td(e){var t=Vt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||gn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Nd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Id(e),r=n.iconName,a=n.prefix,i=n.rest,o=Td(e),s=ra("parseNodeAttributes",{},e),l=t.styleParser?Sd(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Md=Te.styles;function Ps(e){var t=N.autoReplaceSvg==="nest"?Ji(e,{styleParser:!1}):Ji(e);return~t.extra.classes.indexOf(cs)?Je("generateLayersText",e,t):Je("generateSvgReplacementMutation",e,t)}var ut=new Set;Ma.map(function(e){ut.add("fa-".concat(e))});Object.keys(dn[Q]).map(ut.add.bind(ut));Object.keys(dn[ne]).map(ut.add.bind(ut));ut=_n(ut);function Gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();var n=ee.documentElement.classList,r=function(m){return n.add("".concat(Di,"-").concat(m))},a=function(m){return n.remove("".concat(Di,"-").concat(m))},i=N.autoFetchSvg?ut:Ma.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Md));i.includes("fa")||i.push("fa");var o=[".".concat(cs,":not([").concat(Et,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Et,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Vt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=za.begin("onTree"),f=s.reduce(function(u,m){try{var p=Ps(m);p&&u.push(p)}catch(b){fs||b.name==="MissingIcon"&&console.error(b)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(p){Cs(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),m(p)})})}function Rd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ps(e).then(function(n){n&&Cs([n],t)})}function Fd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:aa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:aa(a||{})),e(r,O(O({},n),{},{mask:a}))}}var $d=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?ze:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,p=m===void 0?null:m,b=n.titleId,S=b===void 0?null:b,x=n.classes,M=x===void 0?[]:x,w=n.attributes,A=w===void 0?{}:w,L=n.styles,I=L===void 0?{}:L;if(t){var W=t.prefix,ce=t.iconName,ue=t.icon;return wr(O({type:"icon"},t),function(){return Ct("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(p?A["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(S||gn()):(A["aria-hidden"]="true",A.focusable="false")),Da({icons:{main:ia(ue),mask:l?ia(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ce,transform:O(O({},ze),a),symbol:o,title:p,maskId:u,titleId:S,extra:{attributes:A,styles:I,classes:M}})})}},Ld={mixout:function(){return{icon:Fd($d)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Gi,n.nodeCallback=Rd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ee:r,i=n.callback,o=i===void 0?function(){}:i;return Gi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,p=r.extra;return new Promise(function(b,S){Promise.all([oa(a,s),u.iconName?oa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var M=Sa(x,2),w=M[0],A=M[1];b([n,Da({icons:{main:w,mask:A},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=yr(s);l.length>0&&(a.style=l);var f;return Fa(o)&&(f=Je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},jd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return wr({type:"layer"},function(){Ct("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(_n(i)).join(" ")},children:o}]})}}}},Dd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return wr({type:"counter",content:n},function(){return Ct("beforeDOMElementCreation",{content:n,params:r}),bd({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(_n(s))}})})}}}},zd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?ze:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,p=r.styles,b=p===void 0?{}:p;return wr({type:"text",content:n},function(){return Ct("beforeDOMElementCreation",{content:n,params:r}),Ki({content:n,transform:O(O({},ze),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(N.cssPrefix,"-layers-text")].concat(_n(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(os){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ki({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ud=new RegExp('"',"ug"),Zi=[1105920,1112319];function Hd(e){var t=e.replace(Ud,""),n=td(t,0),r=n>=Zi[0]&&n<=Zi[1],a=t.length===2?t[0]===t[1]:!1;return{value:ta(a?t[0]:t),isSecondary:r||a}}function Qi(e,t){var n="".concat(Iu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Vt(e.children),o=i.filter(function(ue){return ue.getAttribute(ea)===t})[0],s=ft.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Fu),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ne:Q,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?mn[p][l[2].toLowerCase()]:$u[p][f],S=Hd(m),x=S.value,M=S.isSecondary,w=l[0].startsWith("FontAwesome"),A=La(b,x),L=A;if(w){var I=ld(x);I.iconName&&I.prefix&&(A=I.iconName,b=I.prefix)}if(A&&!M&&(!o||o.getAttribute(Ta)!==b||o.getAttribute(Na)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var W=Nd(),ce=W.extra;ce.attributes[ea]=t,oa(A,b).then(function(ue){var Ce=Da(O(O({},W),{},{icons:{main:ue,mask:ja()},prefix:b,iconName:L,extra:ce,watchable:!0})),ke=ee.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ke,e.firstChild):e.appendChild(ke),ke.outerHTML=Ce.map(function(He){return wn(He)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Bd(e){return Promise.all([Qi(e,"::before"),Qi(e,"::after")])}function Yd(e){return e.parentNode!==document.head&&!~Nu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ea)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function eo(e){if(Qe)return new Promise(function(t,n){var r=Vt(e.querySelectorAll("*")).filter(Yd).map(Bd),a=za.begin("searchPseudoElements");Os(),Promise.all(r).then(function(){a(),la(),t()}).catch(function(){a(),la(),n()})})}var Kd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=eo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ee:r;N.searchPseudoElements&&eo(a)}}},to=!1,Wd={mixout:function(){return{dom:{unwatch:function(){Os(),to=!0}}}},hooks:function(){return{bootstrap:function(){Xi(ra("mutationObserverCallbacks",{}))},noAuto:function(){Pd()},watch:function(n){var r=n.observeMutationsRoot;to?la():Xi(ra("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},no=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Vd={mixout:function(){return{parse:{transform:function(n){return no(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=no(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:p};return{tag:"g",attributes:O({},b.outer),children:[{tag:"g",attributes:O({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),b.path)}]}]}}}},Lr={x:0,y:0,width:"100%",height:"100%"};function ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qd(e){return e.tag==="g"?e.children:[e]}var Xd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?xr(a.split(" ").map(function(o){return o.trim()})):ja();return i.prefix||(i.prefix=ct()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,p=o.icon,b=Vu({transform:l,containerWidth:m,iconWidth:f}),S={tag:"rect",attributes:O(O({},Lr),{},{fill:"white"})},x=u.children?{children:u.children.map(ro)}:{},M={tag:"g",attributes:O({},b.inner),children:[ro(O({tag:u.tag,attributes:O(O({},u.attributes),b.path)},x))]},w={tag:"g",attributes:O({},b.outer),children:[M]},A="mask-".concat(s||gn()),L="clip-".concat(s||gn()),I={tag:"mask",attributes:O(O({},Lr),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,w]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:qd(p)},I]};return r.push(W,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(A,")")},Lr)}),{children:r,attributes:a}}}},Jd={provides:function(t){var n=!1;ft.matchMedia&&(n=ft.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Gd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Zd=[Ju,Ld,jd,Dd,zd,Kd,Wd,Vd,Xd,Jd,Gd];ud(Zd,{mixoutsTo:we});we.noAuto;we.config;var Qd=we.library;we.dom;var fa=we.parse;we.findIconDefinition;we.toHtml;var em=we.icon;we.layer;we.text;we.counter;function ao(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ao(Object(n),!0).forEach(function(r){ge(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ao(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function or(e){"@babel/helpers - typeof";return or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},or(e)}function ge(e,t,n){return t=am(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function nm(e,t){if(e==null)return{};var n=tm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function rm(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function am(e){var t=rm(e,"string");return typeof t=="symbol"?t:String(t)}var im=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ss={exports:{}};(function(e){(function(t){var n=function(w,A,L){if(!f(A)||m(A)||p(A)||b(A)||l(A))return A;var I,W=0,ce=0;if(u(A))for(I=[],ce=A.length;W<ce;W++)I.push(n(w,A[W],L));else{I={};for(var ue in A)Object.prototype.hasOwnProperty.call(A,ue)&&(I[w(ue,L)]=n(w,A[ue],L))}return I},r=function(w,A){A=A||{};var L=A.separator||"_",I=A.split||/(?=[A-Z])/;return w.split(I).join(L)},a=function(w){return S(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(A,L){return L?L.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var A=a(w);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(w,A){return r(w,A).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},f=function(w){return w===Object(w)},u=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},p=function(w){return s.call(w)=="[object RegExp]"},b=function(w){return s.call(w)=="[object Boolean]"},S=function(w){return w=w-0,w===w},x=function(w,A){var L=A&&"process"in A?A.process:A;return typeof L!="function"?w:function(I,W){return L(I,w,W)}},M={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,A){return n(x(a,A),w)},decamelizeKeys:function(w,A){return n(x(o,A),w,A)},pascalizeKeys:function(w,A){return n(x(i,A),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=M:t.humps=M})(im)})(Ss);var om=Ss.exports,sm=["class","style"];function lm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=om.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function fm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Is(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=fm(u);break;case"style":l.style=lm(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=nm(n,sm);return Tf(e.tag,Ke(Ke(Ke({},t),{},{class:a.class,style:Ke(Ke({},a.style),o)},a.attrs),s),r)}var Ts=!1;try{Ts=!0}catch{}function cm(){if(!Ts&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function jr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ge({},e,t):{}}function um(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ge(t,"fa-".concat(e.size),e.size!==null),ge(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ge(t,"fa-pull-".concat(e.pull),e.pull!==null),ge(t,"fa-swap-opacity",e.swapOpacity),ge(t,"fa-bounce",e.bounce),ge(t,"fa-shake",e.shake),ge(t,"fa-beat",e.beat),ge(t,"fa-fade",e.fade),ge(t,"fa-beat-fade",e.beatFade),ge(t,"fa-flash",e.flash),ge(t,"fa-spin-pulse",e.spinPulse),ge(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function io(e){if(e&&or(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(fa.icon)return fa.icon(e);if(e===null)return null;if(or(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var dm=Ge({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=_e(function(){return io(t.icon)}),i=_e(function(){return jr("classes",um(t))}),o=_e(function(){return jr("transform",typeof t.transform=="string"?fa.transform(t.transform):t.transform)}),s=_e(function(){return jr("mask",io(t.mask))}),l=_e(function(){return em(a.value,Ke(Ke(Ke(Ke({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});st(l,function(u){if(!u)return cm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=_e(function(){return l.value?Is(l.value.abstract[0],{},r):null});return function(){return f.value}}}),mm={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},pm={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"]},hm={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},gm={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};Qd.add(mm,pm,gm,hm);lc(_u).component("font-awesome-icon",dm).mount("#app");
