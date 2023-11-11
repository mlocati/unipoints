(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ca(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Z={},It=[],Ne=()=>{},Ss=()=>!1,Ts=/^on[^a-z]/,ir=e=>Ts.test(e),ua=e=>e.startsWith("onUpdate:"),fe=Object.assign,da=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Is=Object.prototype.hasOwnProperty,B=(e,t)=>Is.call(e,t),F=Array.isArray,Nt=e=>pn(e)==="[object Map]",or=e=>pn(e)==="[object Set]",Va=e=>pn(e)==="[object Date]",z=e=>typeof e=="function",oe=e=>typeof e=="string",$t=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",ao=e=>(G(e)||z(e))&&z(e.then)&&z(e.catch),io=Object.prototype.toString,pn=e=>io.call(e),Ns=e=>pn(e).slice(8,-1),oo=e=>pn(e)==="[object Object]",ma=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jn=ca(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ms=/-(\w)/g,ze=sr(e=>e.replace(Ms,(t,n)=>n?n.toUpperCase():"")),Rs=/\B([A-Z])/g,Ht=sr(e=>e.replace(Rs,"-$1").toLowerCase()),lr=sr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cr=sr(e=>e?`on${lr(e)}`:""),wt=(e,t)=>!Object.is(e,t),Dn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Kn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Wn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let qa;const Dr=()=>qa||(qa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pa(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=oe(r)?js(r):pa(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(oe(e)||G(e))return e}const Fs=/;(?![^(]*\))/g,Ls=/:([^]+)/,$s=/\/\*[^]*?\*\//g;function js(e){const t={};return e.replace($s,"").split(Fs).forEach(n=>{if(n){const r=n.split(Ls);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function fr(e){let t="";if(oe(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=fr(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ds="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zs=ca(Ds);function so(e){return!!e||e===""}function Us(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=cr(e[r],t[r]);return n}function cr(e,t){if(e===t)return!0;let n=Va(e),r=Va(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=$t(e),r=$t(t),n||r)return e===t;if(n=F(e),r=F(t),n||r)return n&&r?Us(e,t):!1;if(n=G(e),r=G(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!cr(e[o],t[o]))return!1}}return String(e)===String(t)}function Hs(e,t){return e.findIndex(n=>cr(n,t))}const ae=e=>oe(e)?e:e==null?"":F(e)||G(e)&&(e.toString===io||!z(e.toString))?JSON.stringify(e,lo,2):String(e),lo=(e,t)=>t&&t.__v_isRef?lo(e,t.value):Nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:or(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!F(t)&&!oo(t)?String(t):t;let Pe;class Bs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!t&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ys(e,t=Pe){t&&t.active&&t.effects.push(e)}function Ks(){return Pe}const ha=e=>{const t=new Set(e);return t.w=0,t.n=0,t},fo=e=>(e.w&at)>0,co=e=>(e.n&at)>0,Ws=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=at},Vs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];fo(a)&&!co(a)?a.delete(e):t[n++]=a,a.w&=~at,a.n&=~at}t.length=n}},zr=new WeakMap;let Jt=0,at=1;const Ur=30;let Se;const yt=Symbol(""),Hr=Symbol("");class ga{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ys(this,r)}run(){if(!this.active)return this.fn();let t=Se,n=tt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Se,Se=this,tt=!0,at=1<<++Jt,Jt<=Ur?Ws(this):Xa(this),this.fn()}finally{Jt<=Ur&&Vs(this),at=1<<--Jt,Se=this.parent,tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Se===this?this.deferStop=!0:this.active&&(Xa(this),this.onStop&&this.onStop(),this.active=!1)}}function Xa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let tt=!0;const uo=[];function Bt(){uo.push(tt),tt=!1}function Yt(){const e=uo.pop();tt=e===void 0?!0:e}function be(e,t,n){if(tt&&Se){let r=zr.get(e);r||zr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ha()),mo(a)}}function mo(e,t){let n=!1;Jt<=Ur?co(e)||(e.n|=at,n=!fo(e)):n=!e.has(Se),n&&(e.add(Se),Se.deps.push(e))}function Ke(e,t,n,r,a,i){const o=zr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((f,u)=>{(u==="length"||!$t(u)&&u>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?ma(n)&&s.push(o.get("length")):(s.push(o.get(yt)),Nt(e)&&s.push(o.get(Hr)));break;case"delete":F(e)||(s.push(o.get(yt)),Nt(e)&&s.push(o.get(Hr)));break;case"set":Nt(e)&&s.push(o.get(yt));break}if(s.length===1)s[0]&&Br(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Br(ha(l))}}function Br(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Ja(r);for(const r of n)r.computed||Ja(r)}function Ja(e,t){(e!==Se||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const qs=ca("__proto__,__v_isRef,__isVue"),po=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($t)),Ga=Xs();function Xs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)be(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Bt();const r=Y(this)[t].apply(this,n);return Yt(),r}}),e}function Js(e){const t=Y(this);return be(t,"has",e),t.hasOwnProperty(e)}class ho{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?fl:yo:i?bo:vo).get(t))return t;const o=F(t);if(!a){if(o&&B(Ga,n))return Reflect.get(Ga,n,r);if(n==="hasOwnProperty")return Js}const s=Reflect.get(t,n,r);return($t(n)?po.has(n):qs(n))||(a||be(t,"get",n),i)?s:ie(s)?o&&ma(n)?s:s.value:G(s)?a?_o(s):ya(s):s}}class go extends ho{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(jt(i)&&ie(i)&&!ie(r))return!1;if(!this._shallow&&(!Vn(r)&&!jt(r)&&(i=Y(i),r=Y(r)),!F(t)&&ie(i)&&!ie(r)))return i.value=r,!0;const o=F(t)&&ma(n)?Number(n)<t.length:B(t,n),s=Reflect.set(t,n,r,a);return t===Y(a)&&(o?wt(r,i)&&Ke(t,"set",n,r):Ke(t,"add",n,r)),s}deleteProperty(t,n){const r=B(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Ke(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!$t(n)||!po.has(n))&&be(t,"has",n),r}ownKeys(t){return be(t,"iterate",F(t)?"length":yt),Reflect.ownKeys(t)}}class Gs extends ho{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Zs=new go,Qs=new Gs,el=new go(!0),va=e=>e,ur=e=>Reflect.getPrototypeOf(e);function wn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(wt(t,i)&&be(a,"get",t),be(a,"get",i));const{has:o}=ur(a),s=r?va:n?xa:rn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function kn(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(wt(e,a)&&be(r,"has",e),be(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function An(e,t=!1){return e=e.__v_raw,!t&&be(Y(e),"iterate",yt),Reflect.get(e,"size",e)}function Za(e){e=Y(e);const t=Y(this);return ur(t).has.call(t,e)||(t.add(e),Ke(t,"add",e,e)),this}function Qa(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=ur(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?wt(t,o)&&Ke(n,"set",e,t):Ke(n,"add",e,t),this}function ei(e){const t=Y(this),{has:n,get:r}=ur(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ke(t,"delete",e,void 0),i}function ti(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Ke(e,"clear",void 0,void 0),n}function On(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?va:e?xa:rn;return!e&&be(s,"iterate",yt),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function En(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=Nt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),u=n?va:t?xa:rn;return!t&&be(i,"iterate",l?Hr:yt),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:this}}function tl(){const e={get(i){return wn(this,i)},get size(){return An(this)},has:kn,add:Za,set:Qa,delete:ei,clear:ti,forEach:On(!1,!1)},t={get(i){return wn(this,i,!1,!0)},get size(){return An(this)},has:kn,add:Za,set:Qa,delete:ei,clear:ti,forEach:On(!1,!0)},n={get(i){return wn(this,i,!0)},get size(){return An(this,!0)},has(i){return kn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:On(!0,!1)},r={get(i){return wn(this,i,!0,!0)},get size(){return An(this,!0)},has(i){return kn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:On(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=En(i,!1,!1),n[i]=En(i,!0,!1),t[i]=En(i,!1,!0),r[i]=En(i,!0,!0)}),[e,n,t,r]}const[nl,rl,al,il]=tl();function ba(e,t){const n=t?e?il:al:e?rl:nl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const ol={get:ba(!1,!1)},sl={get:ba(!1,!0)},ll={get:ba(!0,!1)},vo=new WeakMap,bo=new WeakMap,yo=new WeakMap,fl=new WeakMap;function cl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ul(e){return e.__v_skip||!Object.isExtensible(e)?0:cl(Ns(e))}function ya(e){return jt(e)?e:_a(e,!1,Zs,ol,vo)}function dl(e){return _a(e,!1,el,sl,bo)}function _o(e){return _a(e,!0,Qs,ll,yo)}function _a(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ul(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Mt(e){return jt(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function jt(e){return!!(e&&e.__v_isReadonly)}function Vn(e){return!!(e&&e.__v_isShallow)}function xo(e){return Mt(e)||jt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function wo(e){return Kn(e,"__v_skip",!0),e}const rn=e=>G(e)?ya(e):e,xa=e=>G(e)?_o(e):e;function ko(e){tt&&Se&&(e=Y(e),mo(e.dep||(e.dep=ha())))}function Ao(e,t){e=Y(e);const n=e.dep;n&&Br(n)}function ie(e){return!!(e&&e.__v_isRef===!0)}function nt(e){return ml(e,!1)}function ml(e,t){return ie(e)?e:new pl(e,t)}class pl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:rn(t)}get value(){return ko(this),this._value}set value(t){const n=this.__v_isShallow||Vn(t)||jt(t);t=n?t:Y(t),wt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:rn(t),Ao(this))}}function qn(e){return ie(e)?e.value:e}const hl={get:(e,t,n)=>qn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ie(a)&&!ie(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Oo(e){return Mt(e)?e:new Proxy(e,hl)}class gl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ga(t,()=>{this._dirty||(this._dirty=!0,Ao(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return ko(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function vl(e,t,n=!1){let r,a;const i=z(e);return i?(r=e,a=Ne):(r=e.get,a=e.set),new gl(r,a,i||!a,n)}function rt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){dr(i,t,n)}return a}function Me(e,t,n,r){if(z(e)){const i=rt(e,t,n,r);return i&&ao(i)&&i.catch(o=>{dr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Me(e[i],t,n,r));return a}function dr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){rt(l,null,10,[e,o,s]);return}}bl(e,n,a,r)}function bl(e,t,n,r=!0){console.error(e)}let an=!1,Yr=!1;const me=[];let je=0;const Rt=[];let Be=null,dt=0;const Eo=Promise.resolve();let wa=null;function yl(e){const t=wa||Eo;return e?t.then(this?e.bind(this):e):t}function _l(e){let t=je+1,n=me.length;for(;t<n;){const r=t+n>>>1,a=me[r],i=on(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function ka(e){(!me.length||!me.includes(e,an&&e.allowRecurse?je+1:je))&&(e.id==null?me.push(e):me.splice(_l(e.id),0,e),Co())}function Co(){!an&&!Yr&&(Yr=!0,wa=Eo.then(So))}function xl(e){const t=me.indexOf(e);t>je&&me.splice(t,1)}function wl(e){F(e)?Rt.push(...e):(!Be||!Be.includes(e,e.allowRecurse?dt+1:dt))&&Rt.push(e),Co()}function ni(e,t=an?je+1:0){for(;t<me.length;t++){const n=me[t];n&&n.pre&&(me.splice(t,1),t--,n())}}function Po(e){if(Rt.length){const t=[...new Set(Rt)];if(Rt.length=0,Be){Be.push(...t);return}for(Be=t,Be.sort((n,r)=>on(n)-on(r)),dt=0;dt<Be.length;dt++)Be[dt]();Be=null,dt=0}}const on=e=>e.id==null?1/0:e.id,kl=(e,t)=>{const n=on(e)-on(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function So(e){Yr=!1,an=!0,me.sort(kl);const t=Ne;try{for(je=0;je<me.length;je++){const n=me[je];n&&n.active!==!1&&rt(n,null,14)}}finally{je=0,me.length=0,Po(),an=!1,wa=null,(me.length||Rt.length)&&So()}}function Al(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Z;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[u]||Z;p&&(a=n.map(x=>oe(x)?x.trim():x)),m&&(a=n.map(Wn))}let s,l=r[s=Cr(t)]||r[s=Cr(ze(t))];!l&&i&&(l=r[s=Cr(Ht(t))]),l&&Me(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Me(f,e,6,a)}}function To(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!z(e)){const l=f=>{const u=To(f,t,!0);u&&(s=!0,fe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):fe(o,i),G(e)&&r.set(e,o),o)}function mr(e,t){return!e||!ir(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,Ht(t))||B(e,t))}let Oe=null,pr=null;function Xn(e){const t=Oe;return Oe=e,pr=e&&e.type.__scopeId||null,t}function Ol(e){pr=e}function El(){pr=null}function Cl(e,t=Oe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&pi(-1);const i=Xn(t);let o;try{o=e(...a)}finally{Xn(i),r._d&&pi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Pr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:p,setupState:x,ctx:j,inheritAttrs:I}=e;let H,k;const O=Xn(e);try{if(n.shapeFlag&4){const T=a||r;H=$e(u.call(T,T,m,i,x,p,j)),k=l}else{const T=t;H=$e(T.length>1?T(i,{attrs:l,slots:s,emit:f}):T(i,null)),k=t.props?l:Pl(l)}}catch(T){en.length=0,dr(T,e,1),H=J(kt)}let $=H;if(k&&I!==!1){const T=Object.keys(k),{shapeFlag:W}=$;T.length&&W&7&&(o&&T.some(ua)&&(k=Sl(k,o)),$=Dt($,k))}return n.dirs&&($=Dt($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),H=$,Xn(O),H}const Pl=e=>{let t;for(const n in e)(n==="class"||n==="style"||ir(n))&&((t||(t={}))[n]=e[n]);return t},Sl=(e,t)=>{const n={};for(const r in e)(!ua(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Tl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ri(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(o[p]!==r[p]&&!mr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ri(r,o,f):!0:!!o;return!1}function ri(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!mr(n,i))return!0}return!1}function Il({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Nl=e=>e.__isSuspense;function Ml(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):wl(e)}const Cn={};function _t(e,t,n){return Io(e,t,n)}function Io(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Z){var s;const l=Ks()===((s=le)==null?void 0:s.scope)?le:null;let f,u=!1,m=!1;if(ie(e)?(f=()=>e.value,u=Vn(e)):Mt(e)?(f=()=>e,r=!0):F(e)?(m=!0,u=e.some(T=>Mt(T)||Vn(T)),f=()=>e.map(T=>{if(ie(T))return T.value;if(Mt(T))return ht(T);if(z(T))return rt(T,l,2)})):z(e)?t?f=()=>rt(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return p&&p(),Me(e,l,3,[x])}:f=Ne,t&&r){const T=f;f=()=>ht(T())}let p,x=T=>{p=O.onStop=()=>{rt(T,l,4)}},j;if(ln)if(x=Ne,t?n&&Me(t,l,3,[f(),m?[]:void 0,x]):f(),a==="sync"){const T=Sf();j=T.__watcherHandles||(T.__watcherHandles=[])}else return Ne;let I=m?new Array(e.length).fill(Cn):Cn;const H=()=>{if(O.active)if(t){const T=O.run();(r||u||(m?T.some((W,ce)=>wt(W,I[ce])):wt(T,I)))&&(p&&p(),Me(t,l,3,[T,I===Cn?void 0:m&&I[0]===Cn?[]:I,x]),I=T)}else O.run()};H.allowRecurse=!!t;let k;a==="sync"?k=H:a==="post"?k=()=>ve(H,l&&l.suspense):(H.pre=!0,l&&(H.id=l.uid),k=()=>ka(H));const O=new ga(f,k);t?n?H():I=O.run():a==="post"?ve(O.run.bind(O),l&&l.suspense):O.run();const $=()=>{O.stop(),l&&l.scope&&da(l.scope.effects,O)};return j&&j.push($),$}function Rl(e,t,n){const r=this.proxy,a=oe(e)?e.includes(".")?No(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,n=t);const o=le;zt(this);const s=Io(a,i.bind(r),n);return o?zt(o):xt(),s}function No(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ie(e))ht(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(or(e)||Nt(e))e.forEach(n=>{ht(n,t)});else if(oo(e))for(const n in e)ht(e[n],t);return e}function ai(e,t){const n=Oe;if(n===null)return e;const r=yr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=Z]=t[i];o&&(z(o)&&(o={mounted:o,updated:o}),o.deep&&ht(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function ct(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Bt(),Me(l,n,8,[e.el,s,e,t]),Yt())}}/*! #__NO_SIDE_EFFECTS__ */function Xe(e,t){return z(e)?(()=>fe({name:e.name},t,{setup:e}))():e}const zn=e=>!!e.type.__asyncLoader,Mo=e=>e.type.__isKeepAlive;function Fl(e,t){Ro(e,"a",t)}function Ll(e,t){Ro(e,"da",t)}function Ro(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(hr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Mo(a.parent.vnode)&&$l(r,t,n,a),a=a.parent}}function $l(e,t,n,r){const a=hr(t,e,r,!0);Lo(()=>{da(r[t],a)},n)}function hr(e,t,n=le,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Bt(),zt(n);const s=Me(t,n,e,o);return xt(),Yt(),s});return r?a.unshift(i):a.push(i),i}}const Je=e=>(t,n=le)=>(!ln||e==="sp")&&hr(e,(...r)=>t(...r),n),jl=Je("bm"),Fo=Je("m"),Dl=Je("bu"),zl=Je("u"),Ul=Je("bum"),Lo=Je("um"),Hl=Je("sp"),Bl=Je("rtg"),Yl=Je("rtc");function Kl(e,t=le){hr("ec",e,t)}const $o="components";function gr(e,t){return Vl($o,e,!0,t)||e}const Wl=Symbol.for("v-ndc");function Vl(e,t,n=!0,r=!1){const a=Oe||le;if(a){const i=a.type;if(e===$o){const s=Of(i,!1);if(s&&(s===t||s===ze(t)||s===lr(ze(t))))return i}const o=ii(a[e]||i[e],t)||ii(a.appContext[e],t);return!o&&r?i:o}}function ii(e,t){return e&&(e[t]||e[ze(t)]||e[lr(ze(t))])}function ke(e,t,n,r){let a;const i=n&&n[r];if(F(e)||oe(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Kr=e=>e?qo(e)?yr(e)||e.proxy:Kr(e.parent):null,Qt=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Kr(e.parent),$root:e=>Kr(e.root),$emit:e=>e.emit,$options:e=>Aa(e),$forceUpdate:e=>e.f||(e.f=()=>ka(e.update)),$nextTick:e=>e.n||(e.n=yl.bind(e.proxy)),$watch:e=>Rl.bind(e)}),Sr=(e,t)=>e!==Z&&!e.__isScriptSetup&&B(e,t),ql={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const x=o[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Sr(r,t))return o[t]=1,r[t];if(a!==Z&&B(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&B(f,t))return o[t]=3,i[t];if(n!==Z&&B(n,t))return o[t]=4,n[t];Wr&&(o[t]=0)}}const u=Qt[t];let m,p;if(u)return t==="$attrs"&&be(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Z&&B(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,B(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Sr(a,t)?(a[t]=n,!0):r!==Z&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Z&&B(e,o)||Sr(t,o)||(s=i[0])&&B(s,o)||B(r,o)||B(Qt,o)||B(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function oi(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Wr=!0;function Xl(e){const t=Aa(e),n=e.proxy,r=e.ctx;Wr=!1,t.beforeCreate&&si(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:p,beforeUpdate:x,updated:j,activated:I,deactivated:H,beforeDestroy:k,beforeUnmount:O,destroyed:$,unmounted:T,render:W,renderTracked:ce,renderTriggered:ue,errorCaptured:Ee,serverPrefetch:we,expose:Ue,inheritAttrs:Wt,components:bn,directives:yn,filters:Ar}=t;if(f&&Jl(f,r,null),o)for(const te in o){const q=o[te];z(q)&&(r[te]=q.bind(n))}if(a){const te=a.call(n,n);G(te)&&(e.data=ya(te))}if(Wr=!0,i)for(const te in i){const q=i[te],lt=z(q)?q.bind(n,n):z(q.get)?q.get.bind(n,n):Ne,_n=!z(q)&&z(q.set)?q.set.bind(n):Ne,ft=Ae({get:lt,set:_n});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>ft.value,set:Re=>ft.value=Re})}if(s)for(const te in s)jo(s[te],r,n,te);if(l){const te=z(l)?l.call(n):l;Reflect.ownKeys(te).forEach(q=>{nf(q,te[q])})}u&&si(u,e,"c");function pe(te,q){F(q)?q.forEach(lt=>te(lt.bind(n))):q&&te(q.bind(n))}if(pe(jl,m),pe(Fo,p),pe(Dl,x),pe(zl,j),pe(Fl,I),pe(Ll,H),pe(Kl,Ee),pe(Yl,ce),pe(Bl,ue),pe(Ul,O),pe(Lo,T),pe(Hl,we),F(Ue))if(Ue.length){const te=e.exposed||(e.exposed={});Ue.forEach(q=>{Object.defineProperty(te,q,{get:()=>n[q],set:lt=>n[q]=lt})})}else e.exposed||(e.exposed={});W&&e.render===Ne&&(e.render=W),Wt!=null&&(e.inheritAttrs=Wt),bn&&(e.components=bn),yn&&(e.directives=yn)}function Jl(e,t,n=Ne){F(e)&&(e=Vr(e));for(const r in e){const a=e[r];let i;G(a)?"default"in a?i=Un(a.from||r,a.default,!0):i=Un(a.from||r):i=Un(a),ie(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function si(e,t,n){Me(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function jo(e,t,n,r){const a=r.includes(".")?No(n,r):()=>n[r];if(oe(e)){const i=t[e];z(i)&&_t(a,i)}else if(z(e))_t(a,e.bind(n));else if(G(e))if(F(e))e.forEach(i=>jo(i,t,n,r));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&_t(a,i,e)}}function Aa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Jn(l,f,o,!0)),Jn(l,t,o)),G(t)&&i.set(t,l),l}function Jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Jn(e,i,n,!0),a&&a.forEach(o=>Jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Gl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Gl={data:li,props:fi,emits:fi,methods:Gt,computed:Gt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Gt,directives:Gt,watch:Ql,provide:li,inject:Zl};function li(e,t){return t?e?function(){return fe(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Zl(e,t){return Gt(Vr(e),Vr(t))}function Vr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function Gt(e,t){return e?fe(Object.create(null),e,t):t}function fi(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:fe(Object.create(null),oi(e),oi(t??{})):t}function Ql(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function Do(){return{app:null,config:{isNativeTag:Ss,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ef=0;function tf(e,t){return function(r,a=null){z(r)||(r=fe({},r)),a!=null&&!G(a)&&(a=null);const i=Do(),o=new WeakSet;let s=!1;const l=i.app={_uid:ef++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Tf,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&z(f.install)?(o.add(f),f.install(l,...u)):z(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,m){if(!s){const p=J(r,a);return p.appContext=i,u&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,yr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l},runWithContext(f){Gn=l;try{return f()}finally{Gn=null}}};return l}}let Gn=null;function nf(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function Un(e,t,n=!1){const r=le||Oe;if(r||Gn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Gn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&z(t)?t.call(r&&r.proxy):t}}function rf(e,t,n,r=!1){const a={},i={};Kn(i,br,1),e.propsDefaults=Object.create(null),zo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:dl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function af(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(mr(e.emitsOptions,p))continue;const x=t[p];if(l)if(B(i,p))x!==i[p]&&(i[p]=x,f=!0);else{const j=ze(p);a[j]=qr(l,s,j,x,e,!1)}else x!==i[p]&&(i[p]=x,f=!0)}}}else{zo(e,t,a,i)&&(f=!0);let u;for(const m in s)(!t||!B(t,m)&&((u=Ht(m))===m||!B(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=qr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!B(t,m))&&(delete i[m],f=!0)}f&&Ke(e,"set","$attrs")}function zo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(jn(l))continue;const f=t[l];let u;a&&B(a,u=ze(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:mr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=Y(n),f=s||Z;for(let u=0;u<i.length;u++){const m=i[u];n[m]=qr(a,l,m,f[m],e,!B(f,m))}}return o}function qr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&z(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(zt(a),r=f[n]=l.call(null,t),xt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}function Uo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!z(e)){const u=m=>{l=!0;const[p,x]=Uo(m,t,!0);fe(o,p),x&&s.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return G(e)&&r.set(e,It),It;if(F(i))for(let u=0;u<i.length;u++){const m=ze(i[u]);ci(m)&&(o[m]=Z)}else if(i)for(const u in i){const m=ze(u);if(ci(m)){const p=i[u],x=o[m]=F(p)||z(p)?{type:p}:fe({},p);if(x){const j=mi(Boolean,x.type),I=mi(String,x.type);x[0]=j>-1,x[1]=I<0||j<I,(j>-1||B(x,"default"))&&s.push(m)}}}const f=[o,s];return G(e)&&r.set(e,f),f}function ci(e){return e[0]!=="$"}function ui(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function di(e,t){return ui(e)===ui(t)}function mi(e,t){return F(t)?t.findIndex(n=>di(n,e)):z(t)&&di(t,e)?0:-1}const Ho=e=>e[0]==="_"||e==="$stable",Oa=e=>F(e)?e.map($e):[$e(e)],of=(e,t,n)=>{if(t._n)return t;const r=Cl((...a)=>Oa(t(...a)),n);return r._c=!1,r},Bo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Ho(a))continue;const i=e[a];if(z(i))t[a]=of(a,i,r);else if(i!=null){const o=Oa(i);t[a]=()=>o}}},Yo=(e,t)=>{const n=Oa(t);e.slots.default=()=>n},sf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Kn(t,"_",n)):Bo(t,e.slots={})}else e.slots={},t&&Yo(e,t);Kn(e.slots,br,1)},lf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Z;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Bo(t,a)),o=t}else t&&(Yo(e,t),o={default:1});if(i)for(const s in a)!Ho(s)&&o[s]==null&&delete a[s]};function Xr(e,t,n,r,a=!1){if(F(e)){e.forEach((p,x)=>Xr(p,t&&(F(t)?t[x]:t),n,r,a));return}if(zn(r)&&!a)return;const i=r.shapeFlag&4?yr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,u=s.refs===Z?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(oe(f)?(u[f]=null,B(m,f)&&(m[f]=null)):ie(f)&&(f.value=null)),z(l))rt(l,s,12,[o,u]);else{const p=oe(l),x=ie(l);if(p||x){const j=()=>{if(e.f){const I=p?B(m,l)?m[l]:u[l]:l.value;a?F(I)&&da(I,i):F(I)?I.includes(i)||I.push(i):p?(u[l]=[i],B(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,B(m,l)&&(m[l]=o)):x&&(l.value=o,e.k&&(u[e.k]=o))};o?(j.id=-1,ve(j,n)):j()}}}const ve=Ml;function ff(e){return cf(e)}function cf(e,t){const n=Dr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:p,setScopeId:x=Ne,insertStaticContent:j}=e,I=(c,d,h,g=null,v=null,_=null,A=!1,y=null,w=!!d.dynamicChildren)=>{if(c===d)return;c&&!qt(c,d)&&(g=xn(c),Re(c,v,_,!0),c=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:N,shapeFlag:C}=d;switch(b){case vr:H(c,d,h,g);break;case kt:k(c,d,h,g);break;case Tr:c==null&&O(d,h,g,A);break;case K:bn(c,d,h,g,v,_,A,y,w);break;default:C&1?W(c,d,h,g,v,_,A,y,w):C&6?yn(c,d,h,g,v,_,A,y,w):(C&64||C&128)&&b.process(c,d,h,g,v,_,A,y,w,Et)}N!=null&&v&&Xr(N,c&&c.ref,_,d||c,!d)},H=(c,d,h,g)=>{if(c==null)r(d.el=s(d.children),h,g);else{const v=d.el=c.el;d.children!==c.children&&f(v,d.children)}},k=(c,d,h,g)=>{c==null?r(d.el=l(d.children||""),h,g):d.el=c.el},O=(c,d,h,g)=>{[c.el,c.anchor]=j(c.children,d,h,g,c.el,c.anchor)},$=({el:c,anchor:d},h,g)=>{let v;for(;c&&c!==d;)v=p(c),r(c,h,g),c=v;r(d,h,g)},T=({el:c,anchor:d})=>{let h;for(;c&&c!==d;)h=p(c),a(c),c=h;a(d)},W=(c,d,h,g,v,_,A,y,w)=>{A=A||d.type==="svg",c==null?ce(d,h,g,v,_,A,y,w):we(c,d,v,_,A,y,w)},ce=(c,d,h,g,v,_,A,y)=>{let w,b;const{type:N,props:C,shapeFlag:M,transition:D,dirs:U}=c;if(w=c.el=o(c.type,_,C&&C.is,C),M&8?u(w,c.children):M&16&&Ee(c.children,w,null,g,v,_&&N!=="foreignObject",A,y),U&&ct(c,null,g,"created"),ue(w,c,c.scopeId,A,g),C){for(const V in C)V!=="value"&&!jn(V)&&i(w,V,null,C[V],_,c.children,g,v,He);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Le(b,g,c)}U&&ct(c,null,g,"beforeMount");const X=uf(v,D);X&&D.beforeEnter(w),r(w,d,h),((b=C&&C.onVnodeMounted)||X||U)&&ve(()=>{b&&Le(b,g,c),X&&D.enter(w),U&&ct(c,null,g,"mounted")},v)},ue=(c,d,h,g,v)=>{if(h&&x(c,h),g)for(let _=0;_<g.length;_++)x(c,g[_]);if(v){let _=v.subTree;if(d===_){const A=v.vnode;ue(c,A,A.scopeId,A.slotScopeIds,v.parent)}}},Ee=(c,d,h,g,v,_,A,y,w=0)=>{for(let b=w;b<c.length;b++){const N=c[b]=y?et(c[b]):$e(c[b]);I(null,N,d,h,g,v,_,A,y)}},we=(c,d,h,g,v,_,A)=>{const y=d.el=c.el;let{patchFlag:w,dynamicChildren:b,dirs:N}=d;w|=c.patchFlag&16;const C=c.props||Z,M=d.props||Z;let D;h&&ut(h,!1),(D=M.onVnodeBeforeUpdate)&&Le(D,h,d,c),N&&ct(d,c,h,"beforeUpdate"),h&&ut(h,!0);const U=v&&d.type!=="foreignObject";if(b?Ue(c.dynamicChildren,b,y,h,g,U,_):A||q(c,d,y,null,h,g,U,_,!1),w>0){if(w&16)Wt(y,d,C,M,h,g,v);else if(w&2&&C.class!==M.class&&i(y,"class",null,M.class,v),w&4&&i(y,"style",C.style,M.style,v),w&8){const X=d.dynamicProps;for(let V=0;V<X.length;V++){const re=X[V],Ce=C[re],Ct=M[re];(Ct!==Ce||re==="value")&&i(y,re,Ce,Ct,v,c.children,h,g,He)}}w&1&&c.children!==d.children&&u(y,d.children)}else!A&&b==null&&Wt(y,d,C,M,h,g,v);((D=M.onVnodeUpdated)||N)&&ve(()=>{D&&Le(D,h,d,c),N&&ct(d,c,h,"updated")},g)},Ue=(c,d,h,g,v,_,A)=>{for(let y=0;y<d.length;y++){const w=c[y],b=d[y],N=w.el&&(w.type===K||!qt(w,b)||w.shapeFlag&70)?m(w.el):h;I(w,b,N,null,g,v,_,A,!0)}},Wt=(c,d,h,g,v,_,A)=>{if(h!==g){if(h!==Z)for(const y in h)!jn(y)&&!(y in g)&&i(c,y,h[y],null,A,d.children,v,_,He);for(const y in g){if(jn(y))continue;const w=g[y],b=h[y];w!==b&&y!=="value"&&i(c,y,b,w,A,d.children,v,_,He)}"value"in g&&i(c,"value",h.value,g.value)}},bn=(c,d,h,g,v,_,A,y,w)=>{const b=d.el=c?c.el:s(""),N=d.anchor=c?c.anchor:s("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:D}=d;D&&(y=y?y.concat(D):D),c==null?(r(b,h,g),r(N,h,g),Ee(d.children,h,N,v,_,A,y,w)):C>0&&C&64&&M&&c.dynamicChildren?(Ue(c.dynamicChildren,M,h,v,_,A,y),(d.key!=null||v&&d===v.subTree)&&Ko(c,d,!0)):q(c,d,h,N,v,_,A,y,w)},yn=(c,d,h,g,v,_,A,y,w)=>{d.slotScopeIds=y,c==null?d.shapeFlag&512?v.ctx.activate(d,h,g,A,w):Ar(d,h,g,v,_,A,w):Ua(c,d,w)},Ar=(c,d,h,g,v,_,A)=>{const y=c.component=_f(c,g,v);if(Mo(c)&&(y.ctx.renderer=Et),xf(y),y.asyncDep){if(v&&v.registerDep(y,pe),!c.el){const w=y.subTree=J(kt);k(null,w,d,h)}return}pe(y,c,d,h,v,_,A)},Ua=(c,d,h)=>{const g=d.component=c.component;if(Tl(c,d,h))if(g.asyncDep&&!g.asyncResolved){te(g,d,h);return}else g.next=d,xl(g.update),g.update();else d.el=c.el,g.vnode=d},pe=(c,d,h,g,v,_,A)=>{const y=()=>{if(c.isMounted){let{next:N,bu:C,u:M,parent:D,vnode:U}=c,X=N,V;ut(c,!1),N?(N.el=U.el,te(c,N,A)):N=U,C&&Dn(C),(V=N.props&&N.props.onVnodeBeforeUpdate)&&Le(V,D,N,U),ut(c,!0);const re=Pr(c),Ce=c.subTree;c.subTree=re,I(Ce,re,m(Ce.el),xn(Ce),c,v,_),N.el=re.el,X===null&&Il(c,re.el),M&&ve(M,v),(V=N.props&&N.props.onVnodeUpdated)&&ve(()=>Le(V,D,N,U),v)}else{let N;const{el:C,props:M}=d,{bm:D,m:U,parent:X}=c,V=zn(d);if(ut(c,!1),D&&Dn(D),!V&&(N=M&&M.onVnodeBeforeMount)&&Le(N,X,d),ut(c,!0),C&&Er){const re=()=>{c.subTree=Pr(c),Er(C,c.subTree,c,v,null)};V?d.type.__asyncLoader().then(()=>!c.isUnmounted&&re()):re()}else{const re=c.subTree=Pr(c);I(null,re,h,g,c,v,_),d.el=re.el}if(U&&ve(U,v),!V&&(N=M&&M.onVnodeMounted)){const re=d;ve(()=>Le(N,X,re),v)}(d.shapeFlag&256||X&&zn(X.vnode)&&X.vnode.shapeFlag&256)&&c.a&&ve(c.a,v),c.isMounted=!0,d=h=g=null}},w=c.effect=new ga(y,()=>ka(b),c.scope),b=c.update=()=>w.run();b.id=c.uid,ut(c,!0),b()},te=(c,d,h)=>{d.component=c;const g=c.vnode.props;c.vnode=d,c.next=null,af(c,d.props,g,h),lf(c,d.children,h),Bt(),ni(),Yt()},q=(c,d,h,g,v,_,A,y,w=!1)=>{const b=c&&c.children,N=c?c.shapeFlag:0,C=d.children,{patchFlag:M,shapeFlag:D}=d;if(M>0){if(M&128){_n(b,C,h,g,v,_,A,y,w);return}else if(M&256){lt(b,C,h,g,v,_,A,y,w);return}}D&8?(N&16&&He(b,v,_),C!==b&&u(h,C)):N&16?D&16?_n(b,C,h,g,v,_,A,y,w):He(b,v,_,!0):(N&8&&u(h,""),D&16&&Ee(C,h,g,v,_,A,y,w))},lt=(c,d,h,g,v,_,A,y,w)=>{c=c||It,d=d||It;const b=c.length,N=d.length,C=Math.min(b,N);let M;for(M=0;M<C;M++){const D=d[M]=w?et(d[M]):$e(d[M]);I(c[M],D,h,null,v,_,A,y,w)}b>N?He(c,v,_,!0,!1,C):Ee(d,h,g,v,_,A,y,w,C)},_n=(c,d,h,g,v,_,A,y,w)=>{let b=0;const N=d.length;let C=c.length-1,M=N-1;for(;b<=C&&b<=M;){const D=c[b],U=d[b]=w?et(d[b]):$e(d[b]);if(qt(D,U))I(D,U,h,null,v,_,A,y,w);else break;b++}for(;b<=C&&b<=M;){const D=c[C],U=d[M]=w?et(d[M]):$e(d[M]);if(qt(D,U))I(D,U,h,null,v,_,A,y,w);else break;C--,M--}if(b>C){if(b<=M){const D=M+1,U=D<N?d[D].el:g;for(;b<=M;)I(null,d[b]=w?et(d[b]):$e(d[b]),h,U,v,_,A,y,w),b++}}else if(b>M)for(;b<=C;)Re(c[b],v,_,!0),b++;else{const D=b,U=b,X=new Map;for(b=U;b<=M;b++){const ye=d[b]=w?et(d[b]):$e(d[b]);ye.key!=null&&X.set(ye.key,b)}let V,re=0;const Ce=M-U+1;let Ct=!1,Ya=0;const Vt=new Array(Ce);for(b=0;b<Ce;b++)Vt[b]=0;for(b=D;b<=C;b++){const ye=c[b];if(re>=Ce){Re(ye,v,_,!0);continue}let Fe;if(ye.key!=null)Fe=X.get(ye.key);else for(V=U;V<=M;V++)if(Vt[V-U]===0&&qt(ye,d[V])){Fe=V;break}Fe===void 0?Re(ye,v,_,!0):(Vt[Fe-U]=b+1,Fe>=Ya?Ya=Fe:Ct=!0,I(ye,d[Fe],h,null,v,_,A,y,w),re++)}const Ka=Ct?df(Vt):It;for(V=Ka.length-1,b=Ce-1;b>=0;b--){const ye=U+b,Fe=d[ye],Wa=ye+1<N?d[ye+1].el:g;Vt[b]===0?I(null,Fe,h,Wa,v,_,A,y,w):Ct&&(V<0||b!==Ka[V]?ft(Fe,h,Wa,2):V--)}}},ft=(c,d,h,g,v=null)=>{const{el:_,type:A,transition:y,children:w,shapeFlag:b}=c;if(b&6){ft(c.component.subTree,d,h,g);return}if(b&128){c.suspense.move(d,h,g);return}if(b&64){A.move(c,d,h,Et);return}if(A===K){r(_,d,h);for(let C=0;C<w.length;C++)ft(w[C],d,h,g);r(c.anchor,d,h);return}if(A===Tr){$(c,d,h);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(_),r(_,d,h),ve(()=>y.enter(_),v);else{const{leave:C,delayLeave:M,afterLeave:D}=y,U=()=>r(_,d,h),X=()=>{C(_,()=>{U(),D&&D()})};M?M(_,U,X):X()}else r(_,d,h)},Re=(c,d,h,g=!1,v=!1)=>{const{type:_,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:N,patchFlag:C,dirs:M}=c;if(y!=null&&Xr(y,null,h,c,!0),N&256){d.ctx.deactivate(c);return}const D=N&1&&M,U=!zn(c);let X;if(U&&(X=A&&A.onVnodeBeforeUnmount)&&Le(X,d,c),N&6)Ps(c.component,h,g);else{if(N&128){c.suspense.unmount(h,g);return}D&&ct(c,null,d,"beforeUnmount"),N&64?c.type.remove(c,d,h,v,Et,g):b&&(_!==K||C>0&&C&64)?He(b,d,h,!1,!0):(_===K&&C&384||!v&&N&16)&&He(w,d,h),g&&Ha(c)}(U&&(X=A&&A.onVnodeUnmounted)||D)&&ve(()=>{X&&Le(X,d,c),D&&ct(c,null,d,"unmounted")},h)},Ha=c=>{const{type:d,el:h,anchor:g,transition:v}=c;if(d===K){Cs(h,g);return}if(d===Tr){T(c);return}const _=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:y}=v,w=()=>A(h,_);y?y(c.el,_,w):w()}else _()},Cs=(c,d)=>{let h;for(;c!==d;)h=p(c),a(c),c=h;a(d)},Ps=(c,d,h)=>{const{bum:g,scope:v,update:_,subTree:A,um:y}=c;g&&Dn(g),v.stop(),_&&(_.active=!1,Re(A,c,d,h)),y&&ve(y,d),ve(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},He=(c,d,h,g=!1,v=!1,_=0)=>{for(let A=_;A<c.length;A++)Re(c[A],d,h,g,v)},xn=c=>c.shapeFlag&6?xn(c.component.subTree):c.shapeFlag&128?c.suspense.next():p(c.anchor||c.el),Ba=(c,d,h)=>{c==null?d._vnode&&Re(d._vnode,null,null,!0):I(d._vnode||null,c,d,null,null,null,h),ni(),Po(),d._vnode=c},Et={p:I,um:Re,m:ft,r:Ha,mt:Ar,mc:Ee,pc:q,pbc:Ue,n:xn,o:e};let Or,Er;return t&&([Or,Er]=t(Et)),{render:Ba,hydrate:Or,createApp:tf(Ba,Or)}}function ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function uf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ko(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=et(a[i]),s.el=o.el),n||Ko(o,s)),s.type===vr&&(s.el=o.el)}}function df(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const mf=e=>e.__isTeleport,K=Symbol.for("v-fgt"),vr=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),Tr=Symbol.for("v-stc"),en=[];let Te=null;function R(e=!1){en.push(Te=e?null:[])}function pf(){en.pop(),Te=en[en.length-1]||null}let sn=1;function pi(e){sn+=e}function Wo(e){return e.dynamicChildren=sn>0?Te||It:null,pf(),sn>0&&Te&&Te.push(e),e}function L(e,t,n,r,a,i){return Wo(S(e,t,n,r,a,i,!0))}function Zn(e,t,n,r,a){return Wo(J(e,t,n,r,a,!0))}function Jr(e){return e?e.__v_isVNode===!0:!1}function qt(e,t){return e.type===t.type&&e.key===t.key}const br="__vInternal",Vo=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||ie(e)||z(e)?{i:Oe,r:e,k:t,f:!!n}:e:null);function S(e,t=null,n=null,r=0,a=null,i=e===K?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vo(t),ref:t&&Hn(t),scopeId:pr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Oe};return s?(Ea(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=oe(n)?8:16),sn>0&&!o&&Te&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Te.push(l),l}const J=hf;function hf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Wl)&&(e=kt),Jr(e)){const s=Dt(e,t,!0);return n&&Ea(s,n),sn>0&&!i&&Te&&(s.shapeFlag&6?Te[Te.indexOf(e)]=s:Te.push(s)),s.patchFlag|=-2,s}if(Ef(e)&&(e=e.__vccOpts),t){t=gf(t);let{class:s,style:l}=t;s&&!oe(s)&&(t.class=fr(s)),G(l)&&(xo(l)&&!F(l)&&(l=fe({},l)),t.style=pa(l))}const o=oe(e)?1:Nl(e)?128:mf(e)?64:G(e)?4:z(e)?2:0;return S(e,t,n,r,a,o,i,!0)}function gf(e){return e?xo(e)||br in e?fe({},e):e:null}function Dt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?vf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Vo(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Hn(t)):[a,Hn(t)]:Hn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==K?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function gt(e=" ",t=0){return J(vr,null,e,t)}function de(e="",t=!1){return t?(R(),Zn(kt,null,e)):J(kt,null,e)}function $e(e){return e==null||typeof e=="boolean"?J(kt):F(e)?J(K,null,e.slice()):typeof e=="object"?et(e):J(vr,null,String(e))}function et(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function Ea(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ea(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(br in t)?t._ctx=Oe:a===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),r&64?(n=16,t=[gt(t)]):n=8);e.children=t,e.shapeFlag|=n}function vf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=fr([t.class,r.class]));else if(a==="style")t.style=pa([t.style,r.style]);else if(ir(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Le(e,t,n,r=null){Me(e,t,7,[n,r])}const bf=Do();let yf=0;function _f(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||bf,i={uid:yf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uo(r,a),emitsOptions:To(r,a),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Al.bind(null,i),e.ce&&e.ce(i),i}let le=null,Ca,Pt,hi="__VUE_INSTANCE_SETTERS__";(Pt=Dr()[hi])||(Pt=Dr()[hi]=[]),Pt.push(e=>le=e),Ca=e=>{Pt.length>1?Pt.forEach(t=>t(e)):Pt[0](e)};const zt=e=>{Ca(e),e.scope.on()},xt=()=>{le&&le.scope.off(),Ca(null)};function qo(e){return e.vnode.shapeFlag&4}let ln=!1;function xf(e,t=!1){ln=t;const{props:n,children:r}=e.vnode,a=qo(e);rf(e,n,a,t),sf(e,r);const i=a?wf(e,t):void 0;return ln=!1,i}function wf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=wo(new Proxy(e.ctx,ql));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Af(e):null;zt(e),Bt();const i=rt(r,e,0,[e.props,a]);if(Yt(),xt(),ao(i)){if(i.then(xt,xt),t)return i.then(o=>{gi(e,o,t)}).catch(o=>{dr(o,e,0)});e.asyncDep=i}else gi(e,i,t)}else Xo(e,t)}function gi(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Oo(t)),Xo(e,n)}let vi;function Xo(e,t,n){const r=e.type;if(!e.render){if(!t&&vi&&!r.render){const a=r.template||Aa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=vi(a,f)}}e.render=r.render||Ne}{zt(e),Bt();try{Xl(e)}finally{Yt(),xt()}}}function kf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return be(e,"get","$attrs"),t[n]}}))}function Af(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return kf(e)},slots:e.slots,emit:e.emit,expose:t}}function yr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Oo(wo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qt)return Qt[n](e)},has(t,n){return n in t||n in Qt}}))}function Of(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function Ef(e){return z(e)&&"__vccOpts"in e}const Ae=(e,t)=>vl(e,t,ln);function Cf(e,t,n){const r=arguments.length;return r===2?G(t)&&!F(t)?Jr(t)?J(e,null,[t]):J(e,t):J(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jr(n)&&(n=[n]),J(e,t,n))}const Pf=Symbol.for("v-scx"),Sf=()=>Un(Pf),Tf="3.3.7",If="http://www.w3.org/2000/svg",mt=typeof document<"u"?document:null,bi=mt&&mt.createElement("template"),Nf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?mt.createElementNS(If,e):mt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{bi.innerHTML=r?`<svg>${e}</svg>`:e;const s=bi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Mf=Symbol("_vtc");function Rf(e,t,n){const r=e[Mf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ff=Symbol("_vod");function Lf(e,t,n){const r=e.style,a=oe(n);if(n&&!a){if(t&&!oe(t))for(const i in t)n[i]==null&&Gr(r,i,"");for(const i in n)Gr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Ff in e&&(r.display=i)}}const yi=/\s*!important$/;function Gr(e,t,n){if(F(n))n.forEach(r=>Gr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=$f(e,t);yi.test(n)?e.setProperty(Ht(r),n.replace(yi,""),"important"):e[r]=n}}const _i=["Webkit","Moz","ms"],Ir={};function $f(e,t){const n=Ir[t];if(n)return n;let r=ze(t);if(r!=="filter"&&r in e)return Ir[t]=r;r=lr(r);for(let a=0;a<_i.length;a++){const i=_i[a]+r;if(i in e)return Ir[t]=i}return t}const xi="http://www.w3.org/1999/xlink";function jf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(xi,t.slice(6,t.length)):e.setAttributeNS(xi,t,n);else{const i=zs(t);n==null||i&&!so(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Df(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";f!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=so(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function pt(e,t,n,r){e.addEventListener(t,n,r)}function zf(e,t,n,r){e.removeEventListener(t,n,r)}const wi=Symbol("_vei");function Uf(e,t,n,r,a=null){const i=e[wi]||(e[wi]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Hf(t);if(r){const f=i[t]=Kf(r,a);pt(e,s,f,l)}else o&&(zf(e,s,o,l),i[t]=void 0)}}const ki=/(?:Once|Passive|Capture)$/;function Hf(e){let t;if(ki.test(e)){t={};let r;for(;r=e.match(ki);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ht(e.slice(2)),t]}let Nr=0;const Bf=Promise.resolve(),Yf=()=>Nr||(Bf.then(()=>Nr=0),Nr=Date.now());function Kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(Wf(r,n.value),t,5,[r])};return n.value=e,n.attached=Yf(),n}function Wf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ai=/^on[a-z]/,Vf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Rf(e,r,a):t==="style"?Lf(e,n,r):ir(t)?ua(t)||Uf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qf(e,t,r,a))?Df(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),jf(e,t,r,a))};function qf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ai.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ai.test(t)&&oe(n)?!1:t in e}const Qn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>Dn(t,n):t};function Xf(e){e.target.composing=!0}function Oi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ft=Symbol("_assign"),Jf={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Ft]=Qn(a);const i=r||a.props&&a.props.type==="number";pt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Wn(s)),e[Ft](s)}),n&&pt(e,"change",()=>{e.value=e.value.trim()}),t||(pt(e,"compositionstart",Xf),pt(e,"compositionend",Oi),pt(e,"change",Oi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Ft]=Qn(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Wn(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Gf={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=or(t);pt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Wn(er(o)):er(o));e[Ft](e.multiple?a?new Set(i):i:i[0])}),e[Ft]=Qn(r)},mounted(e,{value:t}){Ei(e,t)},beforeUpdate(e,t,n){e[Ft]=Qn(n)},updated(e,{value:t}){Ei(e,t)}};function Ei(e,t){const n=e.multiple;if(!(n&&!F(t)&&!or(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=er(i);if(n)F(t)?i.selected=Hs(t,o)>-1:i.selected=t.has(o);else if(cr(er(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function er(e){return"_value"in e?e._value:e.value}const Zf=["ctrl","shift","alt","meta"],Qf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Zf.some(n=>e[`${n}Key`]&&!t.includes(n))},ec=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Qf[t[a]];if(i&&i(n,t))return}return e(n,...r)},tc=fe({patchProp:Vf},Nf);let Ci;function nc(){return Ci||(Ci=ff(tc))}const rc=(...e)=>{const t=nc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=ac(r);if(!a)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function ac(e){return oe(e)?document.querySelector(e):e}let Mr=null;function ic(){return Mr===null&&(Mr=fetch("./assets/data.json").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})),Mr}const oc={class:"container-fluid d-flex flex-wrap justify-content-center py-3 mb-4 text-bg-secondary"},sc={class:"d-flex fs-4 mb-0 me-md-auto"},lc={class:"fs-4 text-decoration-none text-light",href:"https://github.com/mlocati/unipoints"},fc=Xe({__name:"HeaderElement",props:{unicodeVersion:{}},setup(e){return(t,n)=>{const r=gr("font-awesome-icon");return R(),L("header",oc,[S("h1",sc,"Codepoints from Unicode v"+ae(t.unicodeVersion),1),S("a",lc,[J(r,{icon:["fab","github"]})])])}}}),cc={class:"container"},uc={class:"input-group mb-3"},dc=S("span",{class:"input-group-text"},"Block",-1),mc=S("option",{value:null},"any",-1),pc=["label"],hc={key:0,disabled:""},gc=["value"],vc=S("span",{class:"input-group-text"},"Search",-1),bc=Xe({__name:"DataFilter",props:{unipointsData:{}},emits:["change"],setup(e,{emit:t}){const n=e;let r=nt(null),a=nt(""),i=null;function o(){i!==null&&(clearTimeout(i),i=null)}const s=t;function l(u,m){return!m.some(p=>{if(!u.name.toUpperCase().includes(p))return!0})}_t(r,async()=>{f()}),_t(a,async()=>{o(),i=setTimeout(()=>f(),300)});function f(){o();const u=a.value.split(/\s+/).filter(p=>p.length>0).map(p=>p.toUpperCase()),m=[];n.unipointsData!==null&&n.unipointsData.planes.forEach(p=>{if(r.value!==null&&r.value.plane!==p.id)return;const x=[];p.blocks.forEach(j=>{if(r.value!==null&&r.value.block!==void 0&&r.value.block!==j.codename)return;let I;u.length===0?I=j.codepoints:I=j.codepoints.filter(H=>l(H,u)),I.length!==0&&x.push({block:j,codepoints:I})}),x.length!==0&&m.push({plane:p,blocks:x})}),s("change",m)}return Fo(()=>f()),(u,m)=>(R(),L("div",cc,[S("div",uc,[dc,u.unipointsData!==null?ai((R(),L("select",{key:0,class:"form-control","onUpdate:modelValue":m[0]||(m[0]=p=>ie(r)?r.value=p:r=p)},[mc,(R(!0),L(K,null,ke(u.unipointsData.planes,p=>(R(),L("optgroup",{key:p.id.toString(),label:`Plane ${p.id}`+(p.name!==""?` (${p.name})`:p.unassigned?" (unassigned)":"")},[p.blocks.length===0?(R(),L("option",hc,"No blocks in this plane")):(R(!0),L(K,{key:1},ke(p.blocks,x=>(R(),L("option",{key:`${p.id}-${x.codename}`,value:{plane:p.id,block:x.codename}},ae(x.name),9,gc))),128))],8,pc))),128))],512)),[[Gf,qn(r)]]):de("",!0),vc,ai(S("input",{type:"search",class:"form-control","onUpdate:modelValue":m[1]||(m[1]=p=>ie(a)?a.value=p:a=p),placeholder:"Filter by name"},null,512),[[Jf,qn(a),void 0,{trim:!0}]])])]))}}),yc={class:"text-center text-light bg-dark p-2"},_c={class:"mb-0"},xc=Xe({__name:"PlaneViewer",props:{plane:{}},setup(e){return(t,n)=>(R(),L("div",yc,[S("h3",_c,[gt(" Plane "+ae(t.plane.id)+" ",1),t.plane.name!==""?(R(),L(K,{key:0},[gt(" ("),t.plane.shortName!==""?(R(),L(K,{key:0},[gt(ae(t.plane.shortName)+" - ",1)],64)):de("",!0),gt(ae(t.plane.name)+") ",1)],64)):de("",!0)])]))}}),wc={class:"text-center text-light bg-secondary p-2"},kc={class:"mb-0"},Pi=Xe({__name:"BlockViewer",props:{block:{}},setup(e){return(t,n)=>(R(),L("div",wc,[S("h4",kc,ae(t.block.name),1)]))}}),Ac={class:"copiable"},Oc={key:0},Si="bg-success",Ti="bg-danger",Ec=Xe({__name:"CopiableText",props:{text:{},displayText:{},code:{type:[Boolean,null]}},setup(e){var f;const t=e,n=Ae(()=>t.displayText??t.text),r=nt(null);let a=null;function i(){r.value===null||a===null||(clearTimeout(a),a=null,r.value.classList.remove(Si,Ti))}function o(u){i(),r.value!==null&&(r.value.classList.add(u?Si:Ti),a=setTimeout(()=>i(),500))}let s;(f=navigator==null?void 0:navigator.clipboard)!=null&&f.writeText?s=()=>navigator.clipboard.writeText(t.text):s=()=>new Promise((u,m)=>{const p=document.createElement("textarea");p.style.width="1px",p.style.height="1px",p.style.overflow="hidden",p.style.top="0",p.style.left="0",p.style.position="fixed",p.value=t.text,document.body.appendChild(p);try{p.focus(),p.select(),document.execCommand("copy")?u():m(new Error("Copy command failed"))}catch(x){m(x)}finally{document.body.removeChild(p)}});function l(u){u.preventDefault(),i(),s().then(()=>{o(!0)}).catch(m=>{console.error(m),o(!1)})}return(u,m)=>{const p=gr("font-awesome-icon");return R(),L("span",Ac,[u.code?(R(),L("code",Oc,ae(n.value),1)):(R(),L(K,{key:1},[gt(ae(n.value),1)],64)),S("a",{href:"#",title:"Copy to clipboard",ref_key:"link",ref:r,onClick:l},[J(p,{icon:["far","copy"]})],512)])}}});const Jo=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Xt=Jo(Ec,[["__scopeId","data-v-c42c3166"]]),_e=e=>(Ol("data-v-cf1d949c"),e=e(),El(),e),Cc={class:"char"},Pc={class:"mb-0"},Sc={key:0,class:"details"},Tc={colspan:"99"},Ic={class:"container mx-4"},Nc={class:"row"},Mc={class:"col"},Rc=_e(()=>S("dt",null,"PHP",-1)),Fc=_e(()=>S("dt",null,"JavaScript",-1)),Lc=_e(()=>S("dt",null,"HTML",-1)),$c=_e(()=>S("dt",null,"Unipoints",-1)),jc=_e(()=>S("dt",null,"Unipoints (less memory)",-1)),Dc={class:"col"},zc={key:0},Uc=_e(()=>S("span",{class:"badge rounded-pill text-bg-primary me-1"},"Old Unicode name",-1)),Hc=_e(()=>S("span",{class:"badge rounded-pill text-bg-primary me-1"},"Formal alias",-1)),Bc=_e(()=>S("span",{class:"badge rounded-pill text-bg-primary me-1"},"Informative alias",-1)),Yc=_e(()=>S("span",{class:"badge rounded-pill text-bg-primary me-1"},"Corrected name",-1)),Kc=_e(()=>S("span",{class:"badge rounded-pill text-bg-primary me-1"},"Control name",-1)),Wc=_e(()=>S("span",{class:"badge rounded-pill text-bg-primary me-1"},"Alternate name",-1)),Vc=_e(()=>S("span",{class:"badge rounded-pill text-bg-primary me-1"},"Figment",-1)),qc=_e(()=>S("span",{class:"badge rounded-pill text-bg-primary me-1"},"Abbreviation",-1)),Xc=Xe({__name:"CodepointViewer",props:{block:{},codepoint:{}},setup(e){const t=e,n=nt(!1),r=Ae(()=>`"\\u{${t.codepoint.id.toString(16).toUpperCase()}}"`),a=Ae(()=>t.codepoint.id<=65535?`'\\u${t.codepoint.id.toString(16).padStart(4,"0")}'`:`'\\u${t.codepoint.char.charCodeAt(0).toString(16).padStart(4,"0")}\\u${t.codepoint.char.charCodeAt(1).toString(16).padStart(4,"0")}'`),i=Ae(()=>`&#x${t.codepoint.id.toString(16).toUpperCase()};`);return(o,s)=>{const l=gr("font-awesome-icon");return R(),L(K,null,[S("tr",{onClick:s[0]||(s[0]=f=>n.value=!n.value)},[S("td",Cc,[S("pre",Pc,ae(o.codepoint.char),1)]),S("td",null,[S("code",null,ae(o.codepoint.name),1)]),S("td",null,[S("button",{class:fr(["btn",n.value?"btn-primary":"btn-outline-primary"])},[J(l,{icon:"fa-solid fa-circle-info"})],2)])]),n.value?(R(),L("tr",Sc,[S("td",Tc,[S("div",Ic,[S("div",Nc,[S("div",Mc,[S("dl",null,[Rc,S("dd",null,[J(Xt,{code:!0,text:r.value},null,8,["text"])]),Fc,S("dd",null,[J(Xt,{code:!0,text:a.value},null,8,["text"])]),Lc,S("dd",null,[J(Xt,{code:!0,text:i.value},null,8,["text"])]),$c,S("dd",null,[J(Xt,{text:`\\MLUnipoints\\Codepoint::${o.codepoint.codename}`,"display-text":`Codepoint::${o.codepoint.codename}`,code:!0},null,8,["text","display-text"])]),jc,S("dd",null,[J(Xt,{text:`\\MLUnipoints\\Codepoint\\${o.block.codename}::${o.codepoint.codename}`,"display-text":`Codepoint\\${o.block.codename}::${o.codepoint.codename}`,code:!0},null,8,["text","display-text"])])])]),S("div",Dc,[o.codepoint.unicode1Name!==void 0?(R(),L("div",zc,[Uc,S("code",null,ae(o.codepoint.unicode1Name),1)])):de("",!0),o.codepoint.formalAliases!==void 0?(R(!0),L(K,{key:1},ke(o.codepoint.formalAliases,f=>(R(),L("div",{key:f},[Hc,S("code",null,ae(f),1)]))),128)):de("",!0),o.codepoint.informativeAliases!==void 0?(R(!0),L(K,{key:2},ke(o.codepoint.informativeAliases,f=>(R(),L("div",{key:f},[Bc,S("code",null,ae(f),1)]))),128)):de("",!0),o.codepoint.correctedNames!==void 0?(R(!0),L(K,{key:3},ke(o.codepoint.correctedNames,f=>(R(),L("div",{key:f},[Yc,S("code",null,ae(f),1)]))),128)):de("",!0),o.codepoint.controlNames!==void 0?(R(!0),L(K,{key:4},ke(o.codepoint.controlNames,f=>(R(),L("div",{key:f},[Kc,S("code",null,ae(f),1)]))),128)):de("",!0),o.codepoint.alternateNames!==void 0?(R(!0),L(K,{key:5},ke(o.codepoint.alternateNames,f=>(R(),L("div",{key:f},[Wc,S("code",null,ae(f),1)]))),128)):de("",!0),o.codepoint.figments!==void 0?(R(!0),L(K,{key:6},ke(o.codepoint.figments,f=>(R(),L("div",{key:f},[Vc,S("code",null,ae(f),1)]))),128)):de("",!0),o.codepoint.abbreviations!==void 0?(R(!0),L(K,{key:7},ke(o.codepoint.abbreviations,f=>(R(),L("div",{key:f},[qc,S("code",null,ae(f),1)]))),128)):de("",!0)])])])])])):de("",!0)],64)}}});const Jc=Jo(Xc,[["__scopeId","data-v-cf1d949c"]]),Gc={class:"container"},Zc={key:0,class:"alert alert-info"},Qc={class:"table table-hover table-sm m-0"},eu=S("colgroup",null,[S("col",{width:"150"}),S("col"),S("col",{width:"1"})],-1),tu={key:0,class:"text-center mt-2"},Pn=1e3,nu=Xe({__name:"DataViewer",props:{filterResults:{}},setup(e){let t=nt(Pn),n=!1;const r=e;_t(r.filterResults,async()=>{t.value=Pn});const a=Ae(()=>{if(n=!1,r.filterResults===null)return[];let i=t.value;const o=[];return r.filterResults.some(s=>{const l={plane:s.plane,blocks:[]};if(s.blocks.some(f=>{const u={block:f.block,codepoints:[]};if(f.codepoints.length<=i?u.codepoints=f.codepoints:u.codepoints=f.codepoints.slice(0,i),l.blocks.push(u),i-=u.codepoints.length,i<=0)return n=!0,!0}),o.push(l),i<=0)return!0}),o});return(i,o)=>(R(),L("div",Gc,[a.value.length===0?(R(),L("div",Zc,"No results")):(R(),L(K,{key:1},[(R(!0),L(K,null,ke(a.value,s=>(R(),L(K,{key:s.plane.id.toString()},[J(xc,{plane:s.plane},null,8,["plane"]),J(Pi,{block:s.blocks[0].block},null,8,["block"]),(R(!0),L(K,null,ke(s.blocks,(l,f)=>(R(),L(K,{key:`${s.plane.id}@${l.codename}`},[f!==0?(R(),Zn(Pi,{key:0,block:l.block},null,8,["block"])):de("",!0),S("table",Qc,[eu,S("tbody",null,[(R(!0),L(K,null,ke(l.codepoints,u=>(R(),Zn(Jc,{key:u.name,block:l.block,codepoint:u},null,8,["block","codepoint"]))),128))])])],64))),128))],64))),128)),qn(n)?(R(),L("div",tu,[S("button",{class:"btn btn-secondary",onClick:o[0]||(o[0]=ec(s=>ie(t)?t.value+=Pn:t+=Pn,["prevent"]))}," Show more ")])):de("",!0)],64))]))}}),ru={key:0,class:"container"},au={key:0,class:"alert alert-danger mt-5 text-center"},iu={key:1,class:"alert alert-info mt-5 text-center fs-4"},ou=S("br",null,null,-1),su={key:0},lu=Xe({__name:"App",setup(e){const t=nt(null),n=nt(null),r=nt(null);return ic().then(a=>{t.value=a}).catch(a=>{n.value=a}),(a,i)=>{const o=gr("font-awesome-icon");return t.value===null?(R(),L("main",ru,[n.value!==null?(R(),L("div",au,ae(n.value),1)):(R(),L("div",iu,[gt(" Loading..."),ou,J(o,{icon:"fa-solid fa-spinner",spin:""})]))])):(R(),L(K,{key:1},[J(fc,{"unicode-version":t.value.unicodeVersion},null,8,["unicode-version"]),t.value?(R(),L("main",su,[J(bc,{"unipoints-data":t.value,onChange:i[0]||(i[0]=s=>r.value=s)},null,8,["unipoints-data"]),r.value!==null?(R(),Zn(nu,{key:0,filterResults:r.value},null,8,["filterResults"])):de("",!0)])):de("",!0)],64))}}});function Ii(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ii(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ii(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tr(e){"@babel/helpers - typeof";return tr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tr(e)}function fu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ni(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cu(e,t,n){return t&&Ni(e.prototype,t),n&&Ni(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pa(e,t){return du(e)||pu(e,t)||Go(e,t)||gu()}function hn(e){return uu(e)||mu(e)||Go(e)||hu()}function uu(e){if(Array.isArray(e))return Zr(e)}function du(e){if(Array.isArray(e))return e}function mu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Go(e,t){if(e){if(typeof e=="string")return Zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zr(e,t)}}function Zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Mi=function(){},Sa={},Zo={},Qo=null,es={mark:Mi,measure:Mi};try{typeof window<"u"&&(Sa=window),typeof document<"u"&&(Zo=document),typeof MutationObserver<"u"&&(Qo=MutationObserver),typeof performance<"u"&&(es=performance)}catch{}var vu=Sa.navigator||{},Ri=vu.userAgent,Fi=Ri===void 0?"":Ri,it=Sa,ee=Zo,Li=Qo,Sn=es;it.document;var Ge=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",ts=~Fi.indexOf("MSIE")||~Fi.indexOf("Trident/"),Tn,In,Nn,Mn,Rn,We="___FONT_AWESOME___",Qr=16,ns="fa",rs="svg-inline--fa",At="data-fa-i2svg",ea="data-fa-pseudo-element",bu="data-fa-pseudo-element-pending",Ta="data-prefix",Ia="data-icon",$i="fontawesome-i2svg",yu="async",_u=["HTML","HEAD","STYLE","SCRIPT"],as=function(){try{return!0}catch{return!1}}(),Q="classic",ne="sharp",Na=[Q,ne];function gn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Q]}})}var fn=gn((Tn={},se(Tn,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),se(Tn,ne,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Tn)),cn=gn((In={},se(In,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),se(In,ne,{solid:"fass",regular:"fasr",light:"fasl"}),In)),un=gn((Nn={},se(Nn,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),se(Nn,ne,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Nn)),xu=gn((Mn={},se(Mn,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),se(Mn,ne,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Mn)),wu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,is="fa-layers-text",ku=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Au=gn((Rn={},se(Rn,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),se(Rn,ne,{900:"fass",400:"fasr",300:"fasl"}),Rn)),os=[1,2,3,4,5,6,7,8,9,10],Ou=os.concat([11,12,13,14,15,16,17,18,19,20]),Eu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dn=new Set;Object.keys(cn[Q]).map(dn.add.bind(dn));Object.keys(cn[ne]).map(dn.add.bind(dn));var Cu=[].concat(Na,hn(dn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vt.GROUP,vt.SWAP_OPACITY,vt.PRIMARY,vt.SECONDARY]).concat(os.map(function(e){return"".concat(e,"x")})).concat(Ou.map(function(e){return"w-".concat(e)})),tn=it.FontAwesomeConfig||{};function Pu(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Su(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var Tu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Tu.forEach(function(e){var t=Pa(e,2),n=t[0],r=t[1],a=Su(Pu(n));a!=null&&(tn[r]=a)})}var ss={styleDefault:"solid",familyDefault:"classic",cssPrefix:ns,replacementClass:rs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tn.familyPrefix&&(tn.cssPrefix=tn.familyPrefix);var Ut=E(E({},ss),tn);Ut.autoReplaceSvg||(Ut.observeMutations=!1);var P={};Object.keys(ss).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Ut[e]=n,nn.forEach(function(r){return r(P)})},get:function(){return Ut[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Ut.cssPrefix=t,nn.forEach(function(n){return n(P)})},get:function(){return Ut.cssPrefix}});it.FontAwesomeConfig=P;var nn=[];function Iu(e){return nn.push(e),function(){nn.splice(nn.indexOf(e),1)}}var Qe=Qr,De={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Nu(e){if(!(!e||!Ge)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ee.head.insertBefore(t,r),e}}var Mu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mn(){for(var e=12,t="";e-- >0;)t+=Mu[Math.random()*62|0];return t}function Kt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ma(e){return e.classList?Kt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ls(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ru(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ls(e[n]),'" ')},"").trim()}function _r(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ra(e){return e.size!==De.size||e.x!==De.x||e.y!==De.y||e.rotate!==De.rotate||e.flipX||e.flipY}function Fu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Lu(e){var t=e.transform,n=e.width,r=n===void 0?Qr:n,a=e.height,i=a===void 0?Qr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ts?l+="translate(".concat(t.x/Qe-r/2,"em, ").concat(t.y/Qe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Qe,"em), calc(-50% + ").concat(t.y/Qe,"em)) "):l+="translate(".concat(t.x/Qe,"em, ").concat(t.y/Qe,"em) "),l+="scale(".concat(t.size/Qe*(t.flipX?-1:1),", ").concat(t.size/Qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var $u=`:root, :host {
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
}`;function fs(){var e=ns,t=rs,n=P.cssPrefix,r=P.replacementClass,a=$u;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ji=!1;function Rr(){P.autoAddCss&&!ji&&(Nu(fs()),ji=!0)}var ju={mixout:function(){return{dom:{css:fs,insertCss:Rr}}},hooks:function(){return{beforeDOMElementCreation:function(){Rr()},beforeI2svg:function(){Rr()}}}},Ve=it||{};Ve[We]||(Ve[We]={});Ve[We].styles||(Ve[We].styles={});Ve[We].hooks||(Ve[We].hooks={});Ve[We].shims||(Ve[We].shims=[]);var Ie=Ve[We],cs=[],Du=function e(){ee.removeEventListener("DOMContentLoaded",e),nr=1,cs.map(function(t){return t()})},nr=!1;Ge&&(nr=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),nr||ee.addEventListener("DOMContentLoaded",Du));function zu(e){Ge&&(nr?setTimeout(e,0):cs.push(e))}function vn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ls(e):"<".concat(t," ").concat(Ru(r),">").concat(i.map(vn).join(""),"</").concat(t,">")}function Di(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Uu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Fr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Uu(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function Hu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ta(e){var t=Hu(e);return t.length===1?t[0].toString(16):null}function Bu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function zi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function na(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=zi(t);typeof Ie.hooks.addPack=="function"&&!a?Ie.hooks.addPack(e,zi(t)):Ie.styles[e]=E(E({},Ie.styles[e]||{}),i),e==="fas"&&na("fa",t)}var Fn,Ln,$n,St=Ie.styles,Yu=Ie.shims,Ku=(Fn={},se(Fn,Q,Object.values(un[Q])),se(Fn,ne,Object.values(un[ne])),Fn),Fa=null,us={},ds={},ms={},ps={},hs={},Wu=(Ln={},se(Ln,Q,Object.keys(fn[Q])),se(Ln,ne,Object.keys(fn[ne])),Ln);function Vu(e){return~Cu.indexOf(e)}function qu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Vu(a)?a:null}var gs=function(){var t=function(i){return Fr(St,function(o,s,l){return o[l]=Fr(s,i,{}),o},{})};us=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ds=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),hs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in St||P.autoFetchSvg,r=Fr(Yu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ms=r.names,ps=r.unicodes,Fa=xr(P.styleDefault,{family:P.familyDefault})};Iu(function(e){Fa=xr(e.styleDefault,{family:P.familyDefault})});gs();function La(e,t){return(us[e]||{})[t]}function Xu(e,t){return(ds[e]||{})[t]}function bt(e,t){return(hs[e]||{})[t]}function vs(e){return ms[e]||{prefix:null,iconName:null}}function Ju(e){var t=ps[e],n=La("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ot(){return Fa}var $a=function(){return{prefix:null,iconName:null,rest:[]}};function xr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Q:n,a=fn[r][e],i=cn[r][e]||cn[r][a],o=e in Ie.styles?e:null;return i||o||null}var Ui=($n={},se($n,Q,Object.keys(un[Q])),se($n,ne,Object.keys(un[ne])),$n);function wr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},se(t,Q,"".concat(P.cssPrefix,"-").concat(Q)),se(t,ne,"".concat(P.cssPrefix,"-").concat(ne)),t),o=null,s=Q;(e.includes(i[Q])||e.some(function(f){return Ui[Q].includes(f)}))&&(s=Q),(e.includes(i[ne])||e.some(function(f){return Ui[ne].includes(f)}))&&(s=ne);var l=e.reduce(function(f,u){var m=qu(P.cssPrefix,u);if(St[u]?(u=Ku[s].includes(u)?xu[s][u]:u,o=u,f.prefix=u):Wu[s].indexOf(u)>-1?(o=u,f.prefix=xr(u,{family:s})):m?f.iconName=m:u!==P.replacementClass&&u!==i[Q]&&u!==i[ne]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var p=o==="fa"?vs(f.iconName):{},x=bt(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||x||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!St.far&&St.fas&&!P.autoFetchSvg&&(f.prefix="fas")}return f},$a());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ne&&(St.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=bt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ot()||"fas"),l}var Gu=function(){function e(){fu(this,e),this.definitions={}}return cu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),na(s,o[s]);var l=un[Q][s];l&&na(l,o[s]),gs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Hi=[],Tt={},Lt={},Zu=Object.keys(Lt);function Qu(e,t){var n=t.mixoutsTo;return Hi=e,Tt={},Object.keys(Lt).forEach(function(r){Zu.indexOf(r)===-1&&delete Lt[r]}),Hi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),tr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Tt[o]||(Tt[o]=[]),Tt[o].push(i[o])})}r.provides&&r.provides(Lt)}),n}function ra(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Tt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Tt[e]||[];a.forEach(function(i){i.apply(null,n)})}function qe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lt[e]?Lt[e].apply(null,t):void 0}function aa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ot();if(t)return t=bt(n,t)||t,Di(bs.definitions,n,t)||Di(Ie.styles,n,t)}var bs=new Gu,ed=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,Ot("noAuto")},td={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ge?(Ot("beforeI2svg",t),qe("pseudoElements2svg",t),qe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,zu(function(){rd({autoReplaceSvgRoot:n}),Ot("watch",t)})}},nd={icon:function(t){if(t===null)return null;if(tr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=xr(t[0]);return{prefix:r,iconName:bt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(wu))){var a=wr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ot(),iconName:bt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ot();return{prefix:i,iconName:bt(i,t)||t}}}},xe={noAuto:ed,config:P,dom:td,parse:nd,library:bs,findIconDefinition:aa,toHtml:vn},rd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(Ie.styles).length>0||P.autoFetchSvg)&&Ge&&P.autoReplaceSvg&&xe.dom.i2svg({node:r})};function kr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return vn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ge){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ad(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ra(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=_r(E(E({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function id(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function ja(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,x=p===void 0?!1:p,j=r.found?r:n,I=j.width,H=j.height,k=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(we){return m.classes.indexOf(we)===-1}).filter(function(we){return we!==""||!!we}).concat(m.classes).join(" "),$={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(H)})},T=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/H*16*.0625,"em")}:{};x&&($.attributes[At]=""),l&&($.children.push({tag:"title",attributes:{id:$.attributes["aria-labelledby"]||"title-".concat(u||mn())},children:[l]}),delete $.attributes.title);var W=E(E({},$),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:E(E({},T),m.styles)}),ce=r.found&&n.found?qe("generateAbstractMask",W)||{children:[],attributes:{}}:qe("generateAbstractIcon",W)||{children:[],attributes:{}},ue=ce.children,Ee=ce.attributes;return W.children=ue,W.attributes=Ee,s?id(W):ad(W)}function Bi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[At]="");var u=E({},o.styles);Ra(a)&&(u.transform=Lu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=_r(u);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function od(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=_r(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Lr=Ie.styles;function ia(e){var t=e[0],n=e[1],r=e.slice(4),a=Pa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var sd={found:!1,width:512,height:512};function ld(e,t){!as&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function oa(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=ot()),new Promise(function(r,a){if(qe("missingIconAbstract"),n==="fa"){var i=vs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Lr[t]&&Lr[t][e]){var o=Lr[t][e];return r(ia(o))}ld(e,t),r(E(E({},sd),{},{icon:P.showMissingIcons&&e?qe("missingIconAbstract")||{}:{}}))})}var Yi=function(){},sa=P.measurePerformance&&Sn&&Sn.mark&&Sn.measure?Sn:{mark:Yi,measure:Yi},Zt='FA "6.4.2"',fd=function(t){return sa.mark("".concat(Zt," ").concat(t," begins")),function(){return ys(t)}},ys=function(t){sa.mark("".concat(Zt," ").concat(t," ends")),sa.measure("".concat(Zt," ").concat(t),"".concat(Zt," ").concat(t," begins"),"".concat(Zt," ").concat(t," ends"))},Da={begin:fd,end:ys},Bn=function(){};function Ki(e){var t=e.getAttribute?e.getAttribute(At):null;return typeof t=="string"}function cd(e){var t=e.getAttribute?e.getAttribute(Ta):null,n=e.getAttribute?e.getAttribute(Ia):null;return t&&n}function ud(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function dd(){if(P.autoReplaceSvg===!0)return Yn.replace;var e=Yn[P.autoReplaceSvg];return e||Yn.replace}function md(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function pd(e){return ee.createElement(e)}function _s(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?md:pd:n;if(typeof e=="string")return ee.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(_s(o,{ceFn:r}))}),a}function hd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Yn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(_s(a),n)}),n.getAttribute(At)===null&&P.keepOriginalSource){var r=ee.createComment(hd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ma(n).indexOf(P.replacementClass))return Yn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return vn(s)}).join(`
`);n.setAttribute(At,""),n.innerHTML=o}};function Wi(e){e()}function xs(e,t){var n=typeof t=="function"?t:Bn;if(e.length===0)n();else{var r=Wi;P.mutateApproach===yu&&(r=it.requestAnimationFrame||Wi),r(function(){var a=dd(),i=Da.begin("mutate");e.map(a),i(),n()})}}var za=!1;function ws(){za=!0}function la(){za=!1}var rr=null;function Vi(e){if(Li&&P.observeMutations){var t=e.treeCallback,n=t===void 0?Bn:t,r=e.nodeCallback,a=r===void 0?Bn:r,i=e.pseudoElementsCallback,o=i===void 0?Bn:i,s=e.observeMutationsRoot,l=s===void 0?ee:s;rr=new Li(function(f){if(!za){var u=ot();Kt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ki(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ki(m.target)&&~Eu.indexOf(m.attributeName))if(m.attributeName==="class"&&cd(m.target)){var p=wr(Ma(m.target)),x=p.prefix,j=p.iconName;m.target.setAttribute(Ta,x||u),j&&m.target.setAttribute(Ia,j)}else ud(m.target)&&a(m.target)})}}),Ge&&rr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function gd(){rr&&rr.disconnect()}function vd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function bd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=wr(Ma(e));return a.prefix||(a.prefix=ot()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Xu(a.prefix,e.innerText)||La(a.prefix,ta(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function yd(e){var t=Kt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||mn()):(t["aria-hidden"]="true",t.focusable="false")),t}function _d(){return{iconName:null,title:null,titleId:null,prefix:null,transform:De,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=bd(e),r=n.iconName,a=n.prefix,i=n.rest,o=yd(e),s=ra("parseNodeAttributes",{},e),l=t.styleParser?vd(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:De,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var xd=Ie.styles;function ks(e){var t=P.autoReplaceSvg==="nest"?qi(e,{styleParser:!1}):qi(e);return~t.extra.classes.indexOf(is)?qe("generateLayersText",e,t):qe("generateSvgReplacementMutation",e,t)}var st=new Set;Na.map(function(e){st.add("fa-".concat(e))});Object.keys(fn[Q]).map(st.add.bind(st));Object.keys(fn[ne]).map(st.add.bind(st));st=hn(st);function Xi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ge)return Promise.resolve();var n=ee.documentElement.classList,r=function(m){return n.add("".concat($i,"-").concat(m))},a=function(m){return n.remove("".concat($i,"-").concat(m))},i=P.autoFetchSvg?st:Na.map(function(u){return"fa-".concat(u)}).concat(Object.keys(xd));i.includes("fa")||i.push("fa");var o=[".".concat(is,":not([").concat(At,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(At,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Kt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Da.begin("onTree"),f=s.reduce(function(u,m){try{var p=ks(m);p&&u.push(p)}catch(x){as||x.name==="MissingIcon"&&console.error(x)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(p){xs(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),m(p)})})}function wd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ks(e).then(function(n){n&&xs([n],t)})}function kd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:aa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:aa(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Ad=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?De:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,p=m===void 0?null:m,x=n.titleId,j=x===void 0?null:x,I=n.classes,H=I===void 0?[]:I,k=n.attributes,O=k===void 0?{}:k,$=n.styles,T=$===void 0?{}:$;if(t){var W=t.prefix,ce=t.iconName,ue=t.icon;return kr(E({type:"icon"},t),function(){return Ot("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(p?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(j||mn()):(O["aria-hidden"]="true",O.focusable="false")),ja({icons:{main:ia(ue),mask:l?ia(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ce,transform:E(E({},De),a),symbol:o,title:p,maskId:u,titleId:j,extra:{attributes:O,styles:T,classes:H}})})}},Od={mixout:function(){return{icon:kd(Ad)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Xi,n.nodeCallback=wd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ee:r,i=n.callback,o=i===void 0?function(){}:i;return Xi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,p=r.extra;return new Promise(function(x,j){Promise.all([oa(a,s),u.iconName?oa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var H=Pa(I,2),k=H[0],O=H[1];x([n,ja({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=_r(s);l.length>0&&(a.style=l);var f;return Ra(o)&&(f=qe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Ed={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return kr({type:"layer"},function(){Ot("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(hn(i)).join(" ")},children:o}]})}}}},Cd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return kr({type:"counter",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),od({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(hn(s))}})})}}}},Pd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?De:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,p=r.styles,x=p===void 0?{}:p;return kr({type:"text",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),Bi({content:n,transform:E(E({},De),i),title:s,extra:{attributes:m,styles:x,classes:["".concat(P.cssPrefix,"-layers-text")].concat(hn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ts){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Bi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Sd=new RegExp('"',"ug"),Ji=[1105920,1112319];function Td(e){var t=e.replace(Sd,""),n=Bu(t,0),r=n>=Ji[0]&&n<=Ji[1],a=t.length===2?t[0]===t[1]:!1;return{value:ta(a?t[0]:t),isSecondary:r||a}}function Gi(e,t){var n="".concat(bu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Kt(e.children),o=i.filter(function(ue){return ue.getAttribute(ea)===t})[0],s=it.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ku),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ne:Q,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?cn[p][l[2].toLowerCase()]:Au[p][f],j=Td(m),I=j.value,H=j.isSecondary,k=l[0].startsWith("FontAwesome"),O=La(x,I),$=O;if(k){var T=Ju(I);T.iconName&&T.prefix&&(O=T.iconName,x=T.prefix)}if(O&&!H&&(!o||o.getAttribute(Ta)!==x||o.getAttribute(Ia)!==$)){e.setAttribute(n,$),o&&e.removeChild(o);var W=_d(),ce=W.extra;ce.attributes[ea]=t,oa(O,x).then(function(ue){var Ee=ja(E(E({},W),{},{icons:{main:ue,mask:$a()},prefix:x,iconName:$,extra:ce,watchable:!0})),we=ee.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(we,e.firstChild):e.appendChild(we),we.outerHTML=Ee.map(function(Ue){return vn(Ue)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Id(e){return Promise.all([Gi(e,"::before"),Gi(e,"::after")])}function Nd(e){return e.parentNode!==document.head&&!~_u.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ea)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Zi(e){if(Ge)return new Promise(function(t,n){var r=Kt(e.querySelectorAll("*")).filter(Nd).map(Id),a=Da.begin("searchPseudoElements");ws(),Promise.all(r).then(function(){a(),la(),t()}).catch(function(){a(),la(),n()})})}var Md={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Zi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ee:r;P.searchPseudoElements&&Zi(a)}}},Qi=!1,Rd={mixout:function(){return{dom:{unwatch:function(){ws(),Qi=!0}}}},hooks:function(){return{bootstrap:function(){Vi(ra("mutationObserverCallbacks",{}))},noAuto:function(){gd()},watch:function(n){var r=n.observeMutationsRoot;Qi?la():Vi(ra("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},eo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Fd={mixout:function(){return{parse:{transform:function(n){return eo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=eo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},x={outer:s,inner:m,path:p};return{tag:"g",attributes:E({},x.outer),children:[{tag:"g",attributes:E({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),x.path)}]}]}}}},$r={x:0,y:0,width:"100%",height:"100%"};function to(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ld(e){return e.tag==="g"?e.children:[e]}var $d={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?wr(a.split(" ").map(function(o){return o.trim()})):$a();return i.prefix||(i.prefix=ot()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,p=o.icon,x=Fu({transform:l,containerWidth:m,iconWidth:f}),j={tag:"rect",attributes:E(E({},$r),{},{fill:"white"})},I=u.children?{children:u.children.map(to)}:{},H={tag:"g",attributes:E({},x.inner),children:[to(E({tag:u.tag,attributes:E(E({},u.attributes),x.path)},I))]},k={tag:"g",attributes:E({},x.outer),children:[H]},O="mask-".concat(s||mn()),$="clip-".concat(s||mn()),T={tag:"mask",attributes:E(E({},$r),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:$},children:Ld(p)},T]};return r.push(W,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat($,")"),mask:"url(#".concat(O,")")},$r)}),{children:r,attributes:a}}}},jd={provides:function(t){var n=!1;it.matchMedia&&(n=it.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Dd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},zd=[ju,Od,Ed,Cd,Pd,Md,Rd,Fd,$d,jd,Dd];Qu(zd,{mixoutsTo:xe});xe.noAuto;xe.config;var Ud=xe.library;xe.dom;var fa=xe.parse;xe.findIconDefinition;xe.toHtml;var Hd=xe.icon;xe.layer;xe.text;xe.counter;function no(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?no(Object(n),!0).forEach(function(r){ge(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):no(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ar(e){"@babel/helpers - typeof";return ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ar(e)}function ge(e,t,n){return t=Wd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Yd(e,t){if(e==null)return{};var n=Bd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Kd(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wd(e){var t=Kd(e,"string");return typeof t=="symbol"?t:String(t)}var Vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},As={exports:{}};(function(e){(function(t){var n=function(k,O,$){if(!f(O)||m(O)||p(O)||x(O)||l(O))return O;var T,W=0,ce=0;if(u(O))for(T=[],ce=O.length;W<ce;W++)T.push(n(k,O[W],$));else{T={};for(var ue in O)Object.prototype.hasOwnProperty.call(O,ue)&&(T[k(ue,$)]=n(k,O[ue],$))}return T},r=function(k,O){O=O||{};var $=O.separator||"_",T=O.split||/(?=[A-Z])/;return k.split(T).join($)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,$){return $?$.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},f=function(k){return k===Object(k)},u=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},p=function(k){return s.call(k)=="[object RegExp]"},x=function(k){return s.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},I=function(k,O){var $=O&&"process"in O?O.process:O;return typeof $!="function"?k:function(T,W){return $(T,k,W)}},H={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(I(a,O),k)},decamelizeKeys:function(k,O){return n(I(o,O),k,O)},pascalizeKeys:function(k,O){return n(I(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=H:t.humps=H})(Vd)})(As);var qd=As.exports,Xd=["class","style"];function Jd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=qd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Gd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Os(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Os(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=Gd(u);break;case"style":l.style=Jd(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Yd(n,Xd);return Cf(e.tag,Ye(Ye(Ye({},t),{},{class:a.class,style:Ye(Ye({},a.style),o)},a.attrs),s),r)}var Es=!1;try{Es=!0}catch{}function Zd(){if(!Es&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function jr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ge({},e,t):{}}function Qd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ge(t,"fa-".concat(e.size),e.size!==null),ge(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ge(t,"fa-pull-".concat(e.pull),e.pull!==null),ge(t,"fa-swap-opacity",e.swapOpacity),ge(t,"fa-bounce",e.bounce),ge(t,"fa-shake",e.shake),ge(t,"fa-beat",e.beat),ge(t,"fa-fade",e.fade),ge(t,"fa-beat-fade",e.beatFade),ge(t,"fa-flash",e.flash),ge(t,"fa-spin-pulse",e.spinPulse),ge(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ro(e){if(e&&ar(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(fa.icon)return fa.icon(e);if(e===null)return null;if(ar(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var em=Xe({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ae(function(){return ro(t.icon)}),i=Ae(function(){return jr("classes",Qd(t))}),o=Ae(function(){return jr("transform",typeof t.transform=="string"?fa.transform(t.transform):t.transform)}),s=Ae(function(){return jr("mask",ro(t.mask))}),l=Ae(function(){return Hd(a.value,Ye(Ye(Ye(Ye({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});_t(l,function(u){if(!u)return Zd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=Ae(function(){return l.value?Os(l.value.abstract[0],{},r):null});return function(){return f.value}}}),tm={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},nm={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"]},rm={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},am={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};Ud.add(tm,nm,am,rm);rc(lu).component("font-awesome-icon",em).mount("#app");
