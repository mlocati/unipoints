(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ua(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Z={},Mt=[],Ne=()=>{},Fs=()=>!1,$s=/^on[^a-z]/,sr=e=>$s.test(e),da=e=>e.startsWith("onUpdate:"),fe=Object.assign,ma=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ls=Object.prototype.hasOwnProperty,B=(e,t)=>Ls.call(e,t),$=Array.isArray,Rt=e=>vn(e)==="[object Map]",Yt=e=>vn(e)==="[object Set]",qa=e=>vn(e)==="[object Date]",U=e=>typeof e=="function",ae=e=>typeof e=="string",jt=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",oo=e=>(G(e)||U(e))&&U(e.then)&&U(e.catch),so=Object.prototype.toString,vn=e=>so.call(e),js=e=>vn(e).slice(8,-1),lo=e=>vn(e)==="[object Object]",pa=e=>ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Bn=ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},zs=/-(\w)/g,Ue=lr(e=>e.replace(zs,(t,n)=>n?n.toUpperCase():"")),Ds=/\B([A-Z])/g,Kt=lr(e=>e.replace(Ds,"-$1").toLowerCase()),fr=lr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Or=lr(e=>e?`on${fr(e)}`:""),At=(e,t)=>!Object.is(e,t),Yn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Jn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Gn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Xa;const Dr=()=>Xa||(Xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cr(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ae(r)?Ys(r):cr(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(ae(e)||G(e))return e}const Us=/;(?![^(]*\))/g,Hs=/:([^]+)/,Bs=/\/\*[^]*?\*\//g;function Ys(e){const t={};return e.replace(Bs,"").split(Us).forEach(n=>{if(n){const r=n.split(Hs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function bn(e){let t="";if(ae(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=bn(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ks="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ws=ua(Ks);function fo(e){return!!e||e===""}function Vs(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=yn(e[r],t[r]);return n}function yn(e,t){if(e===t)return!0;let n=qa(e),r=qa(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=jt(e),r=jt(t),n||r)return e===t;if(n=$(e),r=$(t),n||r)return n&&r?Vs(e,t):!1;if(n=G(e),r=G(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!yn(e[o],t[o]))return!1}}return String(e)===String(t)}function ha(e,t){return e.findIndex(n=>yn(n,t))}const oe=e=>ae(e)?e:e==null?"":$(e)||G(e)&&(e.toString===so||!U(e.toString))?JSON.stringify(e,co,2):String(e),co=(e,t)=>t&&t.__v_isRef?co(e,t.value):Rt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Yt(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!$(t)&&!lo(t)?String(t):t;let Se;class qs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Xs(e,t=Se){t&&t.active&&t.effects.push(e)}function Js(){return Se}const ga=e=>{const t=new Set(e);return t.w=0,t.n=0,t},uo=e=>(e.w&lt)>0,mo=e=>(e.n&lt)>0,Gs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=lt},Zs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];uo(a)&&!mo(a)?a.delete(e):t[n++]=a,a.w&=~lt,a.n&=~lt}t.length=n}},Ur=new WeakMap;let Zt=0,lt=1;const Hr=30;let Pe;const wt=Symbol(""),Br=Symbol("");class va{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Xs(this,r)}run(){if(!this.active)return this.fn();let t=Pe,n=it;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Pe,Pe=this,it=!0,lt=1<<++Zt,Zt<=Hr?Gs(this):Ja(this),this.fn()}finally{Zt<=Hr&&Zs(this),lt=1<<--Zt,Pe=this.parent,it=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pe===this?this.deferStop=!0:this.active&&(Ja(this),this.onStop&&this.onStop(),this.active=!1)}}function Ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let it=!0;const po=[];function Wt(){po.push(it),it=!1}function Vt(){const e=po.pop();it=e===void 0?!0:e}function ye(e,t,n){if(it&&Pe){let r=Ur.get(e);r||Ur.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ga()),ho(a)}}function ho(e,t){let n=!1;Zt<=Hr?mo(e)||(e.n|=lt,n=!uo(e)):n=!e.has(Pe),n&&(e.add(Pe),Pe.deps.push(e))}function We(e,t,n,r,a,i){const o=Ur.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&$(e)){const l=Number(r);o.forEach((f,u)=>{(u==="length"||!jt(u)&&u>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":$(e)?pa(n)&&s.push(o.get("length")):(s.push(o.get(wt)),Rt(e)&&s.push(o.get(Br)));break;case"delete":$(e)||(s.push(o.get(wt)),Rt(e)&&s.push(o.get(Br)));break;case"set":Rt(e)&&s.push(o.get(wt));break}if(s.length===1)s[0]&&Yr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Yr(ga(l))}}function Yr(e,t){const n=$(e)?e:[...e];for(const r of n)r.computed&&Ga(r);for(const r of n)r.computed||Ga(r)}function Ga(e,t){(e!==Pe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Qs=ua("__proto__,__v_isRef,__isVue"),go=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(jt)),Za=el();function el(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)ye(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Wt();const r=Y(this)[t].apply(this,n);return Vt(),r}}),e}function tl(e){const t=Y(this);return ye(t,"has",e),t.hasOwnProperty(e)}class vo{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?pl:_o:i?xo:yo).get(t))return t;const o=$(t);if(!a){if(o&&B(Za,n))return Reflect.get(Za,n,r);if(n==="hasOwnProperty")return tl}const s=Reflect.get(t,n,r);return(jt(n)?go.has(n):Qs(n))||(a||ye(t,"get",n),i)?s:le(s)?o&&pa(n)?s:s.value:G(s)?a?wo(s):xa(s):s}}class bo extends vo{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(zt(i)&&le(i)&&!le(r))return!1;if(!this._shallow&&(!Zn(r)&&!zt(r)&&(i=Y(i),r=Y(r)),!$(t)&&le(i)&&!le(r)))return i.value=r,!0;const o=$(t)&&pa(n)?Number(n)<t.length:B(t,n),s=Reflect.set(t,n,r,a);return t===Y(a)&&(o?At(r,i)&&We(t,"set",n,r):We(t,"add",n,r)),s}deleteProperty(t,n){const r=B(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&We(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!jt(n)||!go.has(n))&&ye(t,"has",n),r}ownKeys(t){return ye(t,"iterate",$(t)?"length":wt),Reflect.ownKeys(t)}}class nl extends vo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const rl=new bo,al=new nl,il=new bo(!0),ba=e=>e,ur=e=>Reflect.getPrototypeOf(e);function On(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(At(t,i)&&ye(a,"get",t),ye(a,"get",i));const{has:o}=ur(a),s=r?ba:n?wa:on;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Sn(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(At(e,a)&&ye(r,"has",e),ye(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Pn(e,t=!1){return e=e.__v_raw,!t&&ye(Y(e),"iterate",wt),Reflect.get(e,"size",e)}function Qa(e){e=Y(e);const t=Y(this);return ur(t).has.call(t,e)||(t.add(e),We(t,"add",e,e)),this}function ei(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=ur(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?At(t,o)&&We(n,"set",e,t):We(n,"add",e,t),this}function ti(e){const t=Y(this),{has:n,get:r}=ur(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&We(t,"delete",e,void 0),i}function ni(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&We(e,"clear",void 0,void 0),n}function In(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?ba:e?wa:on;return!e&&ye(s,"iterate",wt),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function Tn(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=Rt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),u=n?ba:t?wa:on;return!t&&ye(i,"iterate",l?Br:wt),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function et(e){return function(...t){return e==="delete"?!1:this}}function ol(){const e={get(i){return On(this,i)},get size(){return Pn(this)},has:Sn,add:Qa,set:ei,delete:ti,clear:ni,forEach:In(!1,!1)},t={get(i){return On(this,i,!1,!0)},get size(){return Pn(this)},has:Sn,add:Qa,set:ei,delete:ti,clear:ni,forEach:In(!1,!0)},n={get(i){return On(this,i,!0)},get size(){return Pn(this,!0)},has(i){return Sn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:In(!0,!1)},r={get(i){return On(this,i,!0,!0)},get size(){return Pn(this,!0)},has(i){return Sn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:In(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Tn(i,!1,!1),n[i]=Tn(i,!0,!1),t[i]=Tn(i,!1,!0),r[i]=Tn(i,!0,!0)}),[e,n,t,r]}const[sl,ll,fl,cl]=ol();function ya(e,t){const n=t?e?cl:fl:e?ll:sl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const ul={get:ya(!1,!1)},dl={get:ya(!1,!0)},ml={get:ya(!0,!1)},yo=new WeakMap,xo=new WeakMap,_o=new WeakMap,pl=new WeakMap;function hl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gl(e){return e.__v_skip||!Object.isExtensible(e)?0:hl(js(e))}function xa(e){return zt(e)?e:_a(e,!1,rl,ul,yo)}function vl(e){return _a(e,!1,il,dl,xo)}function wo(e){return _a(e,!0,al,ml,_o)}function _a(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=gl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ft(e){return zt(e)?Ft(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function Zn(e){return!!(e&&e.__v_isShallow)}function ko(e){return Ft(e)||zt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Ao(e){return Jn(e,"__v_skip",!0),e}const on=e=>G(e)?xa(e):e,wa=e=>G(e)?wo(e):e;function Eo(e){it&&Pe&&(e=Y(e),ho(e.dep||(e.dep=ga())))}function Co(e,t){e=Y(e);const n=e.dep;n&&Yr(n)}function le(e){return!!(e&&e.__v_isRef===!0)}function ze(e){return bl(e,!1)}function bl(e,t){return le(e)?e:new yl(e,t)}class yl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:on(t)}get value(){return Eo(this),this._value}set value(t){const n=this.__v_isShallow||Zn(t)||zt(t);t=n?t:Y(t),At(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:on(t),Co(this))}}function Oo(e){return le(e)?e.value:e}const xl={get:(e,t,n)=>Oo(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function So(e){return Ft(e)?e:new Proxy(e,xl)}class _l{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new va(t,()=>{this._dirty||(this._dirty=!0,Co(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return Eo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function wl(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Ne):(r=e.get,a=e.set),new _l(r,a,i||!a,n)}function ot(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){dr(i,t,n)}return a}function Me(e,t,n,r){if(U(e)){const i=ot(e,t,n,r);return i&&oo(i)&&i.catch(o=>{dr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Me(e[i],t,n,r));return a}function dr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ot(l,null,10,[e,o,s]);return}}kl(e,n,a,r)}function kl(e,t,n,r=!0){console.error(e)}let sn=!1,Kr=!1;const me=[];let je=0;const $t=[];let Ye=null,vt=0;const Po=Promise.resolve();let ka=null;function Al(e){const t=ka||Po;return e?t.then(this?e.bind(this):e):t}function El(e){let t=je+1,n=me.length;for(;t<n;){const r=t+n>>>1,a=me[r],i=ln(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function Aa(e){(!me.length||!me.includes(e,sn&&e.allowRecurse?je+1:je))&&(e.id==null?me.push(e):me.splice(El(e.id),0,e),Io())}function Io(){!sn&&!Kr&&(Kr=!0,ka=Po.then(No))}function Cl(e){const t=me.indexOf(e);t>je&&me.splice(t,1)}function Ol(e){$(e)?$t.push(...e):(!Ye||!Ye.includes(e,e.allowRecurse?vt+1:vt))&&$t.push(e),Io()}function ri(e,t=sn?je+1:0){for(;t<me.length;t++){const n=me[t];n&&n.pre&&(me.splice(t,1),t--,n())}}function To(e){if($t.length){const t=[...new Set($t)];if($t.length=0,Ye){Ye.push(...t);return}for(Ye=t,Ye.sort((n,r)=>ln(n)-ln(r)),vt=0;vt<Ye.length;vt++)Ye[vt]();Ye=null,vt=0}}const ln=e=>e.id==null?1/0:e.id,Sl=(e,t)=>{const n=ln(e)-ln(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function No(e){Kr=!1,sn=!0,me.sort(Sl);const t=Ne;try{for(je=0;je<me.length;je++){const n=me[je];n&&n.active!==!1&&ot(n,null,14)}}finally{je=0,me.length=0,To(),sn=!1,ka=null,(me.length||$t.length)&&No()}}function Pl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Z;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||Z;h&&(a=n.map(g=>ae(g)?g.trim():g)),m&&(a=n.map(Gn))}let s,l=r[s=Or(t)]||r[s=Or(Ue(t))];!l&&i&&(l=r[s=Or(Kt(t))]),l&&Me(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Me(f,e,6,a)}}function Mo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=f=>{const u=Mo(f,t,!0);u&&(s=!0,fe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):($(i)?i.forEach(l=>o[l]=null):fe(o,i),G(e)&&r.set(e,o),o)}function mr(e,t){return!e||!sr(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,Kt(t))||B(e,t))}let Ee=null,pr=null;function Qn(e){const t=Ee;return Ee=e,pr=e&&e.type.__scopeId||null,t}function Il(e){pr=e}function Tl(){pr=null}function Nl(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&pi(-1);const i=Qn(t);let o;try{o=e(...a)}finally{Qn(i),r._d&&pi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:h,setupState:g,ctx:S,inheritAttrs:k}=e;let M,x;const _=Qn(e);try{if(n.shapeFlag&4){const I=a||r;M=Le(u.call(I,I,m,i,g,h,S)),x=l}else{const I=t;M=Le(I.length>1?I(i,{attrs:l,slots:s,emit:f}):I(i,null)),x=t.props?l:Ml(l)}}catch(I){nn.length=0,dr(I,e,1),M=q(Et)}let L=M;if(x&&k!==!1){const I=Object.keys(x),{shapeFlag:W}=L;I.length&&W&7&&(o&&I.some(da)&&(x=Rl(x,o)),L=Dt(L,x))}return n.dirs&&(L=Dt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),M=L,Qn(_),M}const Ml=e=>{let t;for(const n in e)(n==="class"||n==="style"||sr(n))&&((t||(t={}))[n]=e[n]);return t},Rl=(e,t)=>{const n={};for(const r in e)(!da(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Fl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ai(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!mr(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ai(r,o,f):!0:!!o;return!1}function ai(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!mr(n,i))return!0}return!1}function $l({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ll=e=>e.__isSuspense;function jl(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):Ol(e)}const Nn={};function st(e,t,n){return Ro(e,t,n)}function Ro(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Z){var s;const l=Js()===((s=se)==null?void 0:s.scope)?se:null;let f,u=!1,m=!1;if(le(e)?(f=()=>e.value,u=Zn(e)):Ft(e)?(f=()=>e,r=!0):$(e)?(m=!0,u=e.some(I=>Ft(I)||Zn(I)),f=()=>e.map(I=>{if(le(I))return I.value;if(Ft(I))return yt(I);if(U(I))return ot(I,l,2)})):U(e)?t?f=()=>ot(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return h&&h(),Me(e,l,3,[g])}:f=Ne,t&&r){const I=f;f=()=>yt(I())}let h,g=I=>{h=_.onStop=()=>{ot(I,l,4)}},S;if(cn)if(g=Ne,t?n&&Me(t,l,3,[f(),m?[]:void 0,g]):f(),a==="sync"){const I=Rf();S=I.__watcherHandles||(I.__watcherHandles=[])}else return Ne;let k=m?new Array(e.length).fill(Nn):Nn;const M=()=>{if(_.active)if(t){const I=_.run();(r||u||(m?I.some((W,ce)=>At(W,k[ce])):At(I,k)))&&(h&&h(),Me(t,l,3,[I,k===Nn?void 0:m&&k[0]===Nn?[]:k,g]),k=I)}else _.run()};M.allowRecurse=!!t;let x;a==="sync"?x=M:a==="post"?x=()=>ve(M,l&&l.suspense):(M.pre=!0,l&&(M.id=l.uid),x=()=>Aa(M));const _=new va(f,x);t?n?M():k=_.run():a==="post"?ve(_.run.bind(_),l&&l.suspense):_.run();const L=()=>{_.stop(),l&&l.scope&&ma(l.scope.effects,_)};return S&&S.push(L),L}function zl(e,t,n){const r=this.proxy,a=ae(e)?e.includes(".")?Fo(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=se;Ut(this);const s=Ro(a,i.bind(r),n);return o?Ut(o):kt(),s}function Fo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function yt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))yt(e.value,t);else if($(e))for(let n=0;n<e.length;n++)yt(e[n],t);else if(Yt(e)||Rt(e))e.forEach(n=>{yt(n,t)});else if(lo(e))for(const n in e)yt(e[n],t);return e}function Pr(e,t){const n=Ee;if(n===null)return e;const r=yr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=Z]=t[i];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&yt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function pt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Wt(),Me(l,n,8,[e.el,s,e,t]),Vt())}}/*! #__NO_SIDE_EFFECTS__ */function Ge(e,t){return U(e)?(()=>fe({name:e.name},t,{setup:e}))():e}const Kn=e=>!!e.type.__asyncLoader,$o=e=>e.type.__isKeepAlive;function Dl(e,t){Lo(e,"a",t)}function Ul(e,t){Lo(e,"da",t)}function Lo(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(hr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)$o(a.parent.vnode)&&Hl(r,t,n,a),a=a.parent}}function Hl(e,t,n,r){const a=hr(t,e,r,!0);zo(()=>{ma(r[t],a)},n)}function hr(e,t,n=se,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Wt(),Ut(n);const s=Me(t,n,e,o);return kt(),Vt(),s});return r?a.unshift(i):a.push(i),i}}const Ze=e=>(t,n=se)=>(!cn||e==="sp")&&hr(e,(...r)=>t(...r),n),Bl=Ze("bm"),jo=Ze("m"),Yl=Ze("bu"),Kl=Ze("u"),Wl=Ze("bum"),zo=Ze("um"),Vl=Ze("sp"),ql=Ze("rtg"),Xl=Ze("rtc");function Jl(e,t=se){hr("ec",e,t)}const Do="components";function gr(e,t){return Zl(Do,e,!0,t)||e}const Gl=Symbol.for("v-ndc");function Zl(e,t,n=!0,r=!1){const a=Ee||se;if(a){const i=a.type;if(e===Do){const s=If(i,!1);if(s&&(s===t||s===Ue(t)||s===fr(Ue(t))))return i}const o=ii(a[e]||i[e],t)||ii(a.appContext[e],t);return!o&&r?i:o}}function ii(e,t){return e&&(e[t]||e[Ue(t)]||e[fr(Ue(t))])}function Ae(e,t,n,r){let a;const i=n&&n[r];if($(e)||ae(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Wr=e=>e?Go(e)?yr(e)||e.proxy:Wr(e.parent):null,tn=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wr(e.parent),$root:e=>Wr(e.root),$emit:e=>e.emit,$options:e=>Ea(e),$forceUpdate:e=>e.f||(e.f=()=>Aa(e.update)),$nextTick:e=>e.n||(e.n=Al.bind(e.proxy)),$watch:e=>zl.bind(e)}),Ir=(e,t)=>e!==Z&&!e.__isScriptSetup&&B(e,t),Ql={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Ir(r,t))return o[t]=1,r[t];if(a!==Z&&B(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&B(f,t))return o[t]=3,i[t];if(n!==Z&&B(n,t))return o[t]=4,n[t];Vr&&(o[t]=0)}}const u=tn[t];let m,h;if(u)return t==="$attrs"&&ye(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Z&&B(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,B(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Ir(a,t)?(a[t]=n,!0):r!==Z&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Z&&B(e,o)||Ir(t,o)||(s=i[0])&&B(s,o)||B(r,o)||B(tn,o)||B(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function oi(e){return $(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Vr=!0;function ef(e){const t=Ea(e),n=e.proxy,r=e.ctx;Vr=!1,t.beforeCreate&&si(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:h,beforeUpdate:g,updated:S,activated:k,deactivated:M,beforeDestroy:x,beforeUnmount:_,destroyed:L,unmounted:I,render:W,renderTracked:ce,renderTriggered:ue,errorCaptured:Ce,serverPrefetch:ke,expose:He,inheritAttrs:Xt,components:kn,directives:An,filters:Ar}=t;if(f&&tf(f,r,null),o)for(const te in o){const X=o[te];U(X)&&(r[te]=X.bind(n))}if(a){const te=a.call(n,n);G(te)&&(e.data=xa(te))}if(Vr=!0,i)for(const te in i){const X=i[te],dt=U(X)?X.bind(n,n):U(X.get)?X.get.bind(n,n):Ne,En=!U(X)&&U(X.set)?X.set.bind(n):Ne,mt=be({get:dt,set:En});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>mt.value,set:Re=>mt.value=Re})}if(s)for(const te in s)Uo(s[te],r,n,te);if(l){const te=U(l)?l.call(n):l;Reflect.ownKeys(te).forEach(X=>{lf(X,te[X])})}u&&si(u,e,"c");function pe(te,X){$(X)?X.forEach(dt=>te(dt.bind(n))):X&&te(X.bind(n))}if(pe(Bl,m),pe(jo,h),pe(Yl,g),pe(Kl,S),pe(Dl,k),pe(Ul,M),pe(Jl,Ce),pe(Xl,ce),pe(ql,ue),pe(Wl,_),pe(zo,I),pe(Vl,ke),$(He))if(He.length){const te=e.exposed||(e.exposed={});He.forEach(X=>{Object.defineProperty(te,X,{get:()=>n[X],set:dt=>n[X]=dt})})}else e.exposed||(e.exposed={});W&&e.render===Ne&&(e.render=W),Xt!=null&&(e.inheritAttrs=Xt),kn&&(e.components=kn),An&&(e.directives=An)}function tf(e,t,n=Ne){$(e)&&(e=qr(e));for(const r in e){const a=e[r];let i;G(a)?"default"in a?i=Wn(a.from||r,a.default,!0):i=Wn(a.from||r):i=Wn(a),le(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function si(e,t,n){Me($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Uo(e,t,n,r){const a=r.includes(".")?Fo(n,r):()=>n[r];if(ae(e)){const i=t[e];U(i)&&st(a,i)}else if(U(e))st(a,e.bind(n));else if(G(e))if($(e))e.forEach(i=>Uo(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&st(a,i,e)}}function Ea(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>er(l,f,o,!0)),er(l,t,o)),G(t)&&i.set(t,l),l}function er(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&er(e,i,n,!0),a&&a.forEach(o=>er(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=nf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const nf={data:li,props:fi,emits:fi,methods:Qt,computed:Qt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Qt,directives:Qt,watch:af,provide:li,inject:rf};function li(e,t){return t?e?function(){return fe(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function rf(e,t){return Qt(qr(e),qr(t))}function qr(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function Qt(e,t){return e?fe(Object.create(null),e,t):t}function fi(e,t){return e?$(e)&&$(t)?[...new Set([...e,...t])]:fe(Object.create(null),oi(e),oi(t??{})):t}function af(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function Ho(){return{app:null,config:{isNativeTag:Fs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let of=0;function sf(e,t){return function(r,a=null){U(r)||(r=fe({},r)),a!=null&&!G(a)&&(a=null);const i=Ho(),o=new WeakSet;let s=!1;const l=i.app={_uid:of++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Ff,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&U(f.install)?(o.add(f),f.install(l,...u)):U(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,m){if(!s){const h=q(r,a);return h.appContext=i,u&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,yr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l},runWithContext(f){tr=l;try{return f()}finally{tr=null}}};return l}}let tr=null;function lf(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function Wn(e,t,n=!1){const r=se||Ee;if(r||tr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:tr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r&&r.proxy):t}}function ff(e,t,n,r=!1){const a={},i={};Jn(i,br,1),e.propsDefaults=Object.create(null),Bo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:vl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function cf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(mr(e.emitsOptions,h))continue;const g=t[h];if(l)if(B(i,h))g!==i[h]&&(i[h]=g,f=!0);else{const S=Ue(h);a[S]=Xr(l,s,S,g,e,!1)}else g!==i[h]&&(i[h]=g,f=!0)}}}else{Bo(e,t,a,i)&&(f=!0);let u;for(const m in s)(!t||!B(t,m)&&((u=Kt(m))===m||!B(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Xr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!B(t,m))&&(delete i[m],f=!0)}f&&We(e,"set","$attrs")}function Bo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Bn(l))continue;const f=t[l];let u;a&&B(a,u=Ue(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:mr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=Y(n),f=s||Z;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Xr(a,l,m,f[m],e,!B(f,m))}}return o}function Xr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&U(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Ut(a),r=f[n]=l.call(null,t),kt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Kt(n))&&(r=!0))}return r}function Yo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const u=m=>{l=!0;const[h,g]=Yo(m,t,!0);fe(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return G(e)&&r.set(e,Mt),Mt;if($(i))for(let u=0;u<i.length;u++){const m=Ue(i[u]);ci(m)&&(o[m]=Z)}else if(i)for(const u in i){const m=Ue(u);if(ci(m)){const h=i[u],g=o[m]=$(h)||U(h)?{type:h}:fe({},h);if(g){const S=mi(Boolean,g.type),k=mi(String,g.type);g[0]=S>-1,g[1]=k<0||S<k,(S>-1||B(g,"default"))&&s.push(m)}}}const f=[o,s];return G(e)&&r.set(e,f),f}function ci(e){return e[0]!=="$"}function ui(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function di(e,t){return ui(e)===ui(t)}function mi(e,t){return $(t)?t.findIndex(n=>di(n,e)):U(t)&&di(t,e)?0:-1}const Ko=e=>e[0]==="_"||e==="$stable",Ca=e=>$(e)?e.map(Le):[Le(e)],uf=(e,t,n)=>{if(t._n)return t;const r=Nl((...a)=>Ca(t(...a)),n);return r._c=!1,r},Wo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Ko(a))continue;const i=e[a];if(U(i))t[a]=uf(a,i,r);else if(i!=null){const o=Ca(i);t[a]=()=>o}}},Vo=(e,t)=>{const n=Ca(t);e.slots.default=()=>n},df=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Jn(t,"_",n)):Wo(t,e.slots={})}else e.slots={},t&&Vo(e,t);Jn(e.slots,br,1)},mf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Z;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Wo(t,a)),o=t}else t&&(Vo(e,t),o={default:1});if(i)for(const s in a)!Ko(s)&&o[s]==null&&delete a[s]};function Jr(e,t,n,r,a=!1){if($(e)){e.forEach((h,g)=>Jr(h,t&&($(t)?t[g]:t),n,r,a));return}if(Kn(r)&&!a)return;const i=r.shapeFlag&4?yr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,u=s.refs===Z?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(ae(f)?(u[f]=null,B(m,f)&&(m[f]=null)):le(f)&&(f.value=null)),U(l))ot(l,s,12,[o,u]);else{const h=ae(l),g=le(l);if(h||g){const S=()=>{if(e.f){const k=h?B(m,l)?m[l]:u[l]:l.value;a?$(k)&&ma(k,i):$(k)?k.includes(i)||k.push(i):h?(u[l]=[i],B(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,B(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(u[e.k]=o))};o?(S.id=-1,ve(S,n)):S()}}}const ve=jl;function pf(e){return hf(e)}function hf(e,t){const n=Dr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:h,setScopeId:g=Ne,insertStaticContent:S}=e,k=(c,d,p,v=null,b=null,A=null,C=!1,w=null,E=!!d.dynamicChildren)=>{if(c===d)return;c&&!Gt(c,d)&&(v=Cn(c),Re(c,b,A,!0),c=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:y,ref:R,shapeFlag:T}=d;switch(y){case vr:M(c,d,p,v);break;case Et:x(c,d,p,v);break;case Tr:c==null&&_(d,p,v,C);break;case K:kn(c,d,p,v,b,A,C,w,E);break;default:T&1?W(c,d,p,v,b,A,C,w,E):T&6?An(c,d,p,v,b,A,C,w,E):(T&64||T&128)&&y.process(c,d,p,v,b,A,C,w,E,St)}R!=null&&b&&Jr(R,c&&c.ref,A,d||c,!d)},M=(c,d,p,v)=>{if(c==null)r(d.el=s(d.children),p,v);else{const b=d.el=c.el;d.children!==c.children&&f(b,d.children)}},x=(c,d,p,v)=>{c==null?r(d.el=l(d.children||""),p,v):d.el=c.el},_=(c,d,p,v)=>{[c.el,c.anchor]=S(c.children,d,p,v,c.el,c.anchor)},L=({el:c,anchor:d},p,v)=>{let b;for(;c&&c!==d;)b=h(c),r(c,p,v),c=b;r(d,p,v)},I=({el:c,anchor:d})=>{let p;for(;c&&c!==d;)p=h(c),a(c),c=p;a(d)},W=(c,d,p,v,b,A,C,w,E)=>{C=C||d.type==="svg",c==null?ce(d,p,v,b,A,C,w,E):ke(c,d,b,A,C,w,E)},ce=(c,d,p,v,b,A,C,w)=>{let E,y;const{type:R,props:T,shapeFlag:F,transition:D,dirs:H}=c;if(E=c.el=o(c.type,A,T&&T.is,T),F&8?u(E,c.children):F&16&&Ce(c.children,E,null,v,b,A&&R!=="foreignObject",C,w),H&&pt(c,null,v,"created"),ue(E,c,c.scopeId,C,v),T){for(const V in T)V!=="value"&&!Bn(V)&&i(E,V,null,T[V],A,c.children,v,b,Be);"value"in T&&i(E,"value",null,T.value),(y=T.onVnodeBeforeMount)&&$e(y,v,c)}H&&pt(c,null,v,"beforeMount");const J=gf(b,D);J&&D.beforeEnter(E),r(E,d,p),((y=T&&T.onVnodeMounted)||J||H)&&ve(()=>{y&&$e(y,v,c),J&&D.enter(E),H&&pt(c,null,v,"mounted")},b)},ue=(c,d,p,v,b)=>{if(p&&g(c,p),v)for(let A=0;A<v.length;A++)g(c,v[A]);if(b){let A=b.subTree;if(d===A){const C=b.vnode;ue(c,C,C.scopeId,C.slotScopeIds,b.parent)}}},Ce=(c,d,p,v,b,A,C,w,E=0)=>{for(let y=E;y<c.length;y++){const R=c[y]=w?nt(c[y]):Le(c[y]);k(null,R,d,p,v,b,A,C,w)}},ke=(c,d,p,v,b,A,C)=>{const w=d.el=c.el;let{patchFlag:E,dynamicChildren:y,dirs:R}=d;E|=c.patchFlag&16;const T=c.props||Z,F=d.props||Z;let D;p&&ht(p,!1),(D=F.onVnodeBeforeUpdate)&&$e(D,p,d,c),R&&pt(d,c,p,"beforeUpdate"),p&&ht(p,!0);const H=b&&d.type!=="foreignObject";if(y?He(c.dynamicChildren,y,w,p,v,H,A):C||X(c,d,w,null,p,v,H,A,!1),E>0){if(E&16)Xt(w,d,T,F,p,v,b);else if(E&2&&T.class!==F.class&&i(w,"class",null,F.class,b),E&4&&i(w,"style",T.style,F.style,b),E&8){const J=d.dynamicProps;for(let V=0;V<J.length;V++){const re=J[V],Oe=T[re],Pt=F[re];(Pt!==Oe||re==="value")&&i(w,re,Oe,Pt,b,c.children,p,v,Be)}}E&1&&c.children!==d.children&&u(w,d.children)}else!C&&y==null&&Xt(w,d,T,F,p,v,b);((D=F.onVnodeUpdated)||R)&&ve(()=>{D&&$e(D,p,d,c),R&&pt(d,c,p,"updated")},v)},He=(c,d,p,v,b,A,C)=>{for(let w=0;w<d.length;w++){const E=c[w],y=d[w],R=E.el&&(E.type===K||!Gt(E,y)||E.shapeFlag&70)?m(E.el):p;k(E,y,R,null,v,b,A,C,!0)}},Xt=(c,d,p,v,b,A,C)=>{if(p!==v){if(p!==Z)for(const w in p)!Bn(w)&&!(w in v)&&i(c,w,p[w],null,C,d.children,b,A,Be);for(const w in v){if(Bn(w))continue;const E=v[w],y=p[w];E!==y&&w!=="value"&&i(c,w,y,E,C,d.children,b,A,Be)}"value"in v&&i(c,"value",p.value,v.value)}},kn=(c,d,p,v,b,A,C,w,E)=>{const y=d.el=c?c.el:s(""),R=d.anchor=c?c.anchor:s("");let{patchFlag:T,dynamicChildren:F,slotScopeIds:D}=d;D&&(w=w?w.concat(D):D),c==null?(r(y,p,v),r(R,p,v),Ce(d.children,p,R,b,A,C,w,E)):T>0&&T&64&&F&&c.dynamicChildren?(He(c.dynamicChildren,F,p,b,A,C,w),(d.key!=null||b&&d===b.subTree)&&qo(c,d,!0)):X(c,d,p,R,b,A,C,w,E)},An=(c,d,p,v,b,A,C,w,E)=>{d.slotScopeIds=w,c==null?d.shapeFlag&512?b.ctx.activate(d,p,v,C,E):Ar(d,p,v,b,A,C,E):Ha(c,d,E)},Ar=(c,d,p,v,b,A,C)=>{const w=c.component=Ef(c,v,b);if($o(c)&&(w.ctx.renderer=St),Cf(w),w.asyncDep){if(b&&b.registerDep(w,pe),!c.el){const E=w.subTree=q(Et);x(null,E,d,p)}return}pe(w,c,d,p,b,A,C)},Ha=(c,d,p)=>{const v=d.component=c.component;if(Fl(c,d,p))if(v.asyncDep&&!v.asyncResolved){te(v,d,p);return}else v.next=d,Cl(v.update),v.update();else d.el=c.el,v.vnode=d},pe=(c,d,p,v,b,A,C)=>{const w=()=>{if(c.isMounted){let{next:R,bu:T,u:F,parent:D,vnode:H}=c,J=R,V;ht(c,!1),R?(R.el=H.el,te(c,R,C)):R=H,T&&Yn(T),(V=R.props&&R.props.onVnodeBeforeUpdate)&&$e(V,D,R,H),ht(c,!0);const re=Sr(c),Oe=c.subTree;c.subTree=re,k(Oe,re,m(Oe.el),Cn(Oe),c,b,A),R.el=re.el,J===null&&$l(c,re.el),F&&ve(F,b),(V=R.props&&R.props.onVnodeUpdated)&&ve(()=>$e(V,D,R,H),b)}else{let R;const{el:T,props:F}=d,{bm:D,m:H,parent:J}=c,V=Kn(d);if(ht(c,!1),D&&Yn(D),!V&&(R=F&&F.onVnodeBeforeMount)&&$e(R,J,d),ht(c,!0),T&&Cr){const re=()=>{c.subTree=Sr(c),Cr(T,c.subTree,c,b,null)};V?d.type.__asyncLoader().then(()=>!c.isUnmounted&&re()):re()}else{const re=c.subTree=Sr(c);k(null,re,p,v,c,b,A),d.el=re.el}if(H&&ve(H,b),!V&&(R=F&&F.onVnodeMounted)){const re=d;ve(()=>$e(R,J,re),b)}(d.shapeFlag&256||J&&Kn(J.vnode)&&J.vnode.shapeFlag&256)&&c.a&&ve(c.a,b),c.isMounted=!0,d=p=v=null}},E=c.effect=new va(w,()=>Aa(y),c.scope),y=c.update=()=>E.run();y.id=c.uid,ht(c,!0),y()},te=(c,d,p)=>{d.component=c;const v=c.vnode.props;c.vnode=d,c.next=null,cf(c,d.props,v,p),mf(c,d.children,p),Wt(),ri(),Vt()},X=(c,d,p,v,b,A,C,w,E=!1)=>{const y=c&&c.children,R=c?c.shapeFlag:0,T=d.children,{patchFlag:F,shapeFlag:D}=d;if(F>0){if(F&128){En(y,T,p,v,b,A,C,w,E);return}else if(F&256){dt(y,T,p,v,b,A,C,w,E);return}}D&8?(R&16&&Be(y,b,A),T!==y&&u(p,T)):R&16?D&16?En(y,T,p,v,b,A,C,w,E):Be(y,b,A,!0):(R&8&&u(p,""),D&16&&Ce(T,p,v,b,A,C,w,E))},dt=(c,d,p,v,b,A,C,w,E)=>{c=c||Mt,d=d||Mt;const y=c.length,R=d.length,T=Math.min(y,R);let F;for(F=0;F<T;F++){const D=d[F]=E?nt(d[F]):Le(d[F]);k(c[F],D,p,null,b,A,C,w,E)}y>R?Be(c,b,A,!0,!1,T):Ce(d,p,v,b,A,C,w,E,T)},En=(c,d,p,v,b,A,C,w,E)=>{let y=0;const R=d.length;let T=c.length-1,F=R-1;for(;y<=T&&y<=F;){const D=c[y],H=d[y]=E?nt(d[y]):Le(d[y]);if(Gt(D,H))k(D,H,p,null,b,A,C,w,E);else break;y++}for(;y<=T&&y<=F;){const D=c[T],H=d[F]=E?nt(d[F]):Le(d[F]);if(Gt(D,H))k(D,H,p,null,b,A,C,w,E);else break;T--,F--}if(y>T){if(y<=F){const D=F+1,H=D<R?d[D].el:v;for(;y<=F;)k(null,d[y]=E?nt(d[y]):Le(d[y]),p,H,b,A,C,w,E),y++}}else if(y>F)for(;y<=T;)Re(c[y],b,A,!0),y++;else{const D=y,H=y,J=new Map;for(y=H;y<=F;y++){const xe=d[y]=E?nt(d[y]):Le(d[y]);xe.key!=null&&J.set(xe.key,y)}let V,re=0;const Oe=F-H+1;let Pt=!1,Ka=0;const Jt=new Array(Oe);for(y=0;y<Oe;y++)Jt[y]=0;for(y=D;y<=T;y++){const xe=c[y];if(re>=Oe){Re(xe,b,A,!0);continue}let Fe;if(xe.key!=null)Fe=J.get(xe.key);else for(V=H;V<=F;V++)if(Jt[V-H]===0&&Gt(xe,d[V])){Fe=V;break}Fe===void 0?Re(xe,b,A,!0):(Jt[Fe-H]=y+1,Fe>=Ka?Ka=Fe:Pt=!0,k(xe,d[Fe],p,null,b,A,C,w,E),re++)}const Wa=Pt?vf(Jt):Mt;for(V=Wa.length-1,y=Oe-1;y>=0;y--){const xe=H+y,Fe=d[xe],Va=xe+1<R?d[xe+1].el:v;Jt[y]===0?k(null,Fe,p,Va,b,A,C,w,E):Pt&&(V<0||y!==Wa[V]?mt(Fe,p,Va,2):V--)}}},mt=(c,d,p,v,b=null)=>{const{el:A,type:C,transition:w,children:E,shapeFlag:y}=c;if(y&6){mt(c.component.subTree,d,p,v);return}if(y&128){c.suspense.move(d,p,v);return}if(y&64){C.move(c,d,p,St);return}if(C===K){r(A,d,p);for(let T=0;T<E.length;T++)mt(E[T],d,p,v);r(c.anchor,d,p);return}if(C===Tr){L(c,d,p);return}if(v!==2&&y&1&&w)if(v===0)w.beforeEnter(A),r(A,d,p),ve(()=>w.enter(A),b);else{const{leave:T,delayLeave:F,afterLeave:D}=w,H=()=>r(A,d,p),J=()=>{T(A,()=>{H(),D&&D()})};F?F(A,H,J):J()}else r(A,d,p)},Re=(c,d,p,v=!1,b=!1)=>{const{type:A,props:C,ref:w,children:E,dynamicChildren:y,shapeFlag:R,patchFlag:T,dirs:F}=c;if(w!=null&&Jr(w,null,p,c,!0),R&256){d.ctx.deactivate(c);return}const D=R&1&&F,H=!Kn(c);let J;if(H&&(J=C&&C.onVnodeBeforeUnmount)&&$e(J,d,c),R&6)Rs(c.component,p,v);else{if(R&128){c.suspense.unmount(p,v);return}D&&pt(c,null,d,"beforeUnmount"),R&64?c.type.remove(c,d,p,b,St,v):y&&(A!==K||T>0&&T&64)?Be(y,d,p,!1,!0):(A===K&&T&384||!b&&R&16)&&Be(E,d,p),v&&Ba(c)}(H&&(J=C&&C.onVnodeUnmounted)||D)&&ve(()=>{J&&$e(J,d,c),D&&pt(c,null,d,"unmounted")},p)},Ba=c=>{const{type:d,el:p,anchor:v,transition:b}=c;if(d===K){Ms(p,v);return}if(d===Tr){I(c);return}const A=()=>{a(p),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(c.shapeFlag&1&&b&&!b.persisted){const{leave:C,delayLeave:w}=b,E=()=>C(p,A);w?w(c.el,A,E):E()}else A()},Ms=(c,d)=>{let p;for(;c!==d;)p=h(c),a(c),c=p;a(d)},Rs=(c,d,p)=>{const{bum:v,scope:b,update:A,subTree:C,um:w}=c;v&&Yn(v),b.stop(),A&&(A.active=!1,Re(C,c,d,p)),w&&ve(w,d),ve(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Be=(c,d,p,v=!1,b=!1,A=0)=>{for(let C=A;C<c.length;C++)Re(c[C],d,p,v,b)},Cn=c=>c.shapeFlag&6?Cn(c.component.subTree):c.shapeFlag&128?c.suspense.next():h(c.anchor||c.el),Ya=(c,d,p)=>{c==null?d._vnode&&Re(d._vnode,null,null,!0):k(d._vnode||null,c,d,null,null,null,p),ri(),To(),d._vnode=c},St={p:k,um:Re,m:mt,r:Ba,mt:Ar,mc:Ce,pc:X,pbc:He,n:Cn,o:e};let Er,Cr;return t&&([Er,Cr]=t(St)),{render:Ya,hydrate:Er,createApp:sf(Ya,Er)}}function ht({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function gf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function qo(e,t,n=!1){const r=e.children,a=t.children;if($(r)&&$(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=nt(a[i]),s.el=o.el),n||qo(o,s)),s.type===vr&&(s.el=o.el)}}function vf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const bf=e=>e.__isTeleport,K=Symbol.for("v-fgt"),vr=Symbol.for("v-txt"),Et=Symbol.for("v-cmt"),Tr=Symbol.for("v-stc"),nn=[];let Ie=null;function j(e=!1){nn.push(Ie=e?null:[])}function yf(){nn.pop(),Ie=nn[nn.length-1]||null}let fn=1;function pi(e){fn+=e}function Xo(e){return e.dynamicChildren=fn>0?Ie||Mt:null,yf(),fn>0&&Ie&&Ie.push(e),e}function z(e,t,n,r,a,i){return Xo(P(e,t,n,r,a,i,!0))}function nr(e,t,n,r,a){return Xo(q(e,t,n,r,a,!0))}function Gr(e){return e?e.__v_isVNode===!0:!1}function Gt(e,t){return e.type===t.type&&e.key===t.key}const br="__vInternal",Jo=({key:e})=>e??null,Vn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ae(e)||le(e)||U(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function P(e,t=null,n=null,r=0,a=null,i=e===K?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jo(t),ref:t&&Vn(t),scopeId:pr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ee};return s?(Oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ae(n)?8:16),fn>0&&!o&&Ie&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ie.push(l),l}const q=xf;function xf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Gl)&&(e=Et),Gr(e)){const s=Dt(e,t,!0);return n&&Oa(s,n),fn>0&&!i&&Ie&&(s.shapeFlag&6?Ie[Ie.indexOf(e)]=s:Ie.push(s)),s.patchFlag|=-2,s}if(Tf(e)&&(e=e.__vccOpts),t){t=_f(t);let{class:s,style:l}=t;s&&!ae(s)&&(t.class=bn(s)),G(l)&&(ko(l)&&!$(l)&&(l=fe({},l)),t.style=cr(l))}const o=ae(e)?1:Ll(e)?128:bf(e)?64:G(e)?4:U(e)?2:0;return P(e,t,n,r,a,o,i,!0)}function _f(e){return e?ko(e)||br in e?fe({},e):e:null}function Dt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?wf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Jo(s),ref:t&&t.ref?n&&a?$(a)?a.concat(Vn(t)):[a,Vn(t)]:Vn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==K?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function at(e=" ",t=0){return q(vr,null,e,t)}function de(e="",t=!1){return t?(j(),nr(Et,null,e)):q(Et,null,e)}function Le(e){return e==null||typeof e=="boolean"?q(Et):$(e)?q(K,null,e.slice()):typeof e=="object"?nt(e):q(vr,null,String(e))}function nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function Oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(br in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[at(t)]):n=8);e.children=t,e.shapeFlag|=n}function wf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=bn([t.class,r.class]));else if(a==="style")t.style=cr([t.style,r.style]);else if(sr(a)){const i=t[a],o=r[a];o&&i!==o&&!($(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function $e(e,t,n,r=null){Me(e,t,7,[n,r])}const kf=Ho();let Af=0;function Ef(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||kf,i={uid:Af++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new qs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yo(r,a),emitsOptions:Mo(r,a),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Pl.bind(null,i),e.ce&&e.ce(i),i}let se=null,Sa,It,hi="__VUE_INSTANCE_SETTERS__";(It=Dr()[hi])||(It=Dr()[hi]=[]),It.push(e=>se=e),Sa=e=>{It.length>1?It.forEach(t=>t(e)):It[0](e)};const Ut=e=>{Sa(e),e.scope.on()},kt=()=>{se&&se.scope.off(),Sa(null)};function Go(e){return e.vnode.shapeFlag&4}let cn=!1;function Cf(e,t=!1){cn=t;const{props:n,children:r}=e.vnode,a=Go(e);ff(e,n,a,t),df(e,r);const i=a?Of(e,t):void 0;return cn=!1,i}function Of(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ao(new Proxy(e.ctx,Ql));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Pf(e):null;Ut(e),Wt();const i=ot(r,e,0,[e.props,a]);if(Vt(),kt(),oo(i)){if(i.then(kt,kt),t)return i.then(o=>{gi(e,o,t)}).catch(o=>{dr(o,e,0)});e.asyncDep=i}else gi(e,i,t)}else Zo(e,t)}function gi(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=So(t)),Zo(e,n)}let vi;function Zo(e,t,n){const r=e.type;if(!e.render){if(!t&&vi&&!r.render){const a=r.template||Ea(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=vi(a,f)}}e.render=r.render||Ne}{Ut(e),Wt();try{ef(e)}finally{Vt(),kt()}}}function Sf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ye(e,"get","$attrs"),t[n]}}))}function Pf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Sf(e)},slots:e.slots,emit:e.emit,expose:t}}function yr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(So(Ao(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in tn)return tn[n](e)},has(t,n){return n in t||n in tn}}))}function If(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function Tf(e){return U(e)&&"__vccOpts"in e}const be=(e,t)=>wl(e,t,cn);function Nf(e,t,n){const r=arguments.length;return r===2?G(t)&&!$(t)?Gr(t)?q(e,null,[t]):q(e,t):q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gr(n)&&(n=[n]),q(e,t,n))}const Mf=Symbol.for("v-scx"),Rf=()=>Wn(Mf),Ff="3.3.7",$f="http://www.w3.org/2000/svg",bt=typeof document<"u"?document:null,bi=bt&&bt.createElement("template"),Lf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?bt.createElementNS($f,e):bt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>bt.createTextNode(e),createComment:e=>bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{bi.innerHTML=r?`<svg>${e}</svg>`:e;const s=bi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},jf=Symbol("_vtc");function zf(e,t,n){const r=e[jf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Df=Symbol("_vod");function Uf(e,t,n){const r=e.style,a=ae(n);if(n&&!a){if(t&&!ae(t))for(const i in t)n[i]==null&&Zr(r,i,"");for(const i in n)Zr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Df in e&&(r.display=i)}}const yi=/\s*!important$/;function Zr(e,t,n){if($(n))n.forEach(r=>Zr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Hf(e,t);yi.test(n)?e.setProperty(Kt(r),n.replace(yi,""),"important"):e[r]=n}}const xi=["Webkit","Moz","ms"],Nr={};function Hf(e,t){const n=Nr[t];if(n)return n;let r=Ue(t);if(r!=="filter"&&r in e)return Nr[t]=r;r=fr(r);for(let a=0;a<xi.length;a++){const i=xi[a]+r;if(i in e)return Nr[t]=i}return t}const _i="http://www.w3.org/1999/xlink";function Bf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(_i,t.slice(6,t.length)):e.setAttributeNS(_i,t,n);else{const i=Ws(t);n==null||i&&!fo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Yf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";f!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=fo(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function rt(e,t,n,r){e.addEventListener(t,n,r)}function Kf(e,t,n,r){e.removeEventListener(t,n,r)}const wi=Symbol("_vei");function Wf(e,t,n,r,a=null){const i=e[wi]||(e[wi]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Vf(t);if(r){const f=i[t]=Jf(r,a);rt(e,s,f,l)}else o&&(Kf(e,s,o,l),i[t]=void 0)}}const ki=/(?:Once|Passive|Capture)$/;function Vf(e){let t;if(ki.test(e)){t={};let r;for(;r=e.match(ki);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Kt(e.slice(2)),t]}let Mr=0;const qf=Promise.resolve(),Xf=()=>Mr||(qf.then(()=>Mr=0),Mr=Date.now());function Jf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(Gf(r,n.value),t,5,[r])};return n.value=e,n.attached=Xf(),n}function Gf(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ai=/^on[a-z]/,Zf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?zf(e,r,a):t==="style"?Uf(e,n,r):sr(t)?da(t)||Wf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qf(e,t,r,a))?Yf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Bf(e,t,r,a))};function Qf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ai.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ai.test(t)&&ae(n)?!1:t in e}const Ht=e=>{const t=e.props["onUpdate:modelValue"]||!1;return $(t)?n=>Yn(t,n):t};function ec(e){e.target.composing=!0}function Ei(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ve=Symbol("_assign"),tc={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Ve]=Ht(a);const i=r||a.props&&a.props.type==="number";rt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Gn(s)),e[Ve](s)}),n&&rt(e,"change",()=>{e.value=e.value.trim()}),t||(rt(e,"compositionstart",ec),rt(e,"compositionend",Ei),rt(e,"change",Ei))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Ve]=Ht(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Gn(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},nc={deep:!0,created(e,t,n){e[Ve]=Ht(n),rt(e,"change",()=>{const r=e._modelValue,a=un(e),i=e.checked,o=e[Ve];if($(r)){const s=ha(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const f=[...r];f.splice(s,1),o(f)}}else if(Yt(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(Qo(e,i))})},mounted:Ci,beforeUpdate(e,t,n){e[Ve]=Ht(n),Ci(e,t,n)}};function Ci(e,{value:t,oldValue:n},r){e._modelValue=t,$(t)?e.checked=ha(t,r.props.value)>-1:Yt(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=yn(t,Qo(e,!0)))}const rc={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=Yt(t);rt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Gn(un(o)):un(o));e[Ve](e.multiple?a?new Set(i):i:i[0])}),e[Ve]=Ht(r)},mounted(e,{value:t}){Oi(e,t)},beforeUpdate(e,t,n){e[Ve]=Ht(n)},updated(e,{value:t}){Oi(e,t)}};function Oi(e,t){const n=e.multiple;if(!(n&&!$(t)&&!Yt(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=un(i);if(n)$(t)?i.selected=ha(t,o)>-1:i.selected=t.has(o);else if(yn(un(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function un(e){return"_value"in e?e._value:e.value}function Qo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ac=["ctrl","shift","alt","meta"],ic={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ac.some(n=>e[`${n}Key`]&&!t.includes(n))},es=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=ic[t[a]];if(i&&i(n,t))return}return e(n,...r)},oc=fe({patchProp:Zf},Lf);let Si;function sc(){return Si||(Si=pf(oc))}const lc=(...e)=>{const t=sc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=fc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function fc(e){return ae(e)?document.querySelector(e):e}let Rr=null;function cc(){return Rr===null&&(Rr=fetch("./assets/data.json").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})),Rr}const uc={class:"container-fluid d-flex flex-wrap justify-content-center py-3 mb-4 text-bg-secondary"},dc={class:"d-flex fs-4 mb-0 me-md-auto"},mc={class:"fs-4 text-decoration-none text-light",href:"https://github.com/mlocati/unipoints"},pc=Ge({__name:"HeaderElement",props:{unicodeVersion:{}},setup(e){return(t,n)=>{const r=gr("font-awesome-icon");return j(),z("header",uc,[P("h1",dc,"Codepoints from Unicode v"+oe(t.unicodeVersion),1),P("a",mc,[q(r,{icon:["fab","github"]})])])}}}),Pi={};function hc(e){var n,r,a,i,o,s,l;const t=[e.name.toUpperCase()];return e.unicode1Name!==void 0&&t.push(e.unicode1Name.toUpperCase()),(n=e.formalAliases)==null||n.forEach(f=>t.push(f.toUpperCase())),(r=e.informativeAliases)==null||r.forEach(f=>t.push(f.toUpperCase())),(a=e.correctedNames)==null||a.forEach(f=>t.push(f.toUpperCase())),(i=e.controlNames)==null||i.forEach(f=>t.push(f.toUpperCase())),(o=e.alternateNames)==null||o.forEach(f=>t.push(f.toUpperCase())),(s=e.figments)==null||s.forEach(f=>t.push(f.toUpperCase())),(l=e.abbreviations)==null||l.forEach(f=>t.push(f.toUpperCase())),t}function ts(e){return Pi[e.id]??(Pi[e.id]=hc(e))}function gc(e,t){return ts(e).some(n=>t.every(r=>n.includes(r)))}function vc(e,t){return ts(e).some(n=>t.test(n))}const bc={class:"container"},yc={class:"input-group mb-3"},xc=P("span",{class:"input-group-text"},"Block",-1),_c=P("option",{value:null},"any",-1),wc=["label"],kc={key:0,disabled:""},Ac=["value"],Ec=P("span",{class:"input-group-text"},"Search",-1),Cc=["placeholder"],Oc={class:"input-group-text"},Sc=Ge({__name:"DataFilter",props:{unipointsData:{}},emits:["change"],setup(e,{emit:t}){const n=e,r=ze(null),a=ze("");let i=null;const o=ze(!1);function s(h){if(h.length===0)return[];const g=[],S=[];let k;return(k=a.value.match(/^&#x([0-9a-f]{1,6});$/i))!==null?g.push(parseInt(k[1],16)):(k=a.value.match(/^&#([0-9]{1,7});$/))!==null?g.push(parseInt(k[1],10)):(k=a.value.match(/^["']?\\u([0-9a-f]{4})["']?$/i))!==null||(k=a.value.match(/^["']?\\x([0-9a-f]{2})["']?$/i))!==null||(k=a.value.match(/^"?\\u\{([0-9a-f]{1,6})\}"?$/i))!==null?g.push(parseInt(k[1],16)):(k=a.value.match(/^["']?\\u([0-9a-f]{4})\\u([0-9a-f]{4})["']?$/i))!==null?S.push({high:parseInt(k[1],16),low:parseInt(k[2],16)}):((k=a.value.match(/^([0-9]{1,7})$/))!==null&&g.push(parseInt(k[1],10)),(k=a.value.match(/^([0-9a-f]{1,6})$/i))!==null&&g.push(parseInt(k[1],16))),S.forEach(M=>{M.high>=55296&&M.high<=56319&&M.low>=56320&&M.low<=57343&&g.push(65536+(M.high-55296<<10)+(M.low-56320))}),g.filter(M=>M>=0&&M<=1114111).filter((M,x,_)=>_.indexOf(M)===x)}const l=be(()=>{if(a.value.length===0)return new Error("Please specify the regular expression");try{return new RegExp(a.value,"i")}catch(h){return h instanceof Error?h:new Error((h==null?void 0:h.toString())||"?")}});function f(){i!==null&&(clearTimeout(i),i=null)}const u=t;st(r,async()=>{m()}),st(a,async()=>{f(),i=setTimeout(()=>m(),300)}),st(o,async()=>{m()});function m(){f();const h=l.value;if(o.value&&l.value instanceof Error){u("change",l.value);return}const g=[];if(n.unipointsData===null){u("change",g);return}if(!o.value){if(Array.from(a.value).length===1&&n.unipointsData.planes.some(M=>M.blocks.some(x=>x.codepoints.some(_=>{if(_.char===a.value)return g.push({plane:M,blocks:[{block:x,codepoints:[_]}]}),!0}))),g.length>0){u("change",g);return}const k=s(a.value);if(k.length>0&&(n.unipointsData.planes.forEach(M=>{if(r.value!==null&&r.value.plane!==M.id)return;const x=[];M.blocks.forEach(_=>{if(r.value!==null&&r.value.block!==void 0&&r.value.block!==_.codename)return;const L=_.codepoints.filter(I=>k.includes(I.id));L.length!==0&&x.push({block:_,codepoints:L})}),x.length!==0&&g.push({plane:M,blocks:x})}),g.length>0)){u("change",g);return}}const S=a.value.split(/\s+/).filter(k=>k.length>0).map(k=>k.toUpperCase());n.unipointsData.planes.forEach(k=>{if(r.value!==null&&r.value.plane!==k.id)return;const M=[];k.blocks.forEach(x=>{if(r.value!==null&&r.value.block!==void 0&&r.value.block!==x.codename)return;let _;if(o.value){if(h instanceof Error)return;_=x.codepoints.filter(L=>vc(L,h))}else S.length===0?_=x.codepoints:_=x.codepoints.filter(L=>gc(L,S));_.length!==0&&M.push({block:x,codepoints:_})}),M.length!==0&&g.push({plane:k,blocks:M})}),u("change",g)}return jo(()=>m()),(h,g)=>(j(),z("div",bc,[P("div",yc,[xc,h.unipointsData!==null?Pr((j(),z("select",{key:0,class:"form-control","onUpdate:modelValue":g[0]||(g[0]=S=>r.value=S)},[_c,(j(!0),z(K,null,Ae(h.unipointsData.planes,S=>(j(),z("optgroup",{key:S.id.toString(),label:`Plane ${S.id}`+(S.name!==""?` (${S.name})`:S.unassigned?" (unassigned)":"")},[S.blocks.length===0?(j(),z("option",kc,"No blocks in this plane")):(j(!0),z(K,{key:1},Ae(S.blocks,k=>(j(),z("option",{key:`${S.id}-${k.codename}`,value:{plane:S.id,block:k.codename}},oe(k.name),9,Ac))),128))],8,wc))),128))],512)),[[rc,r.value]]):de("",!0),Ec,Pr(P("input",{type:"search",class:bn(["form-control",o.value?l.value instanceof RegExp?"font-monospace is-valid":"font-monospace is-invalid":""]),"onUpdate:modelValue":g[1]||(g[1]=S=>a.value=S),placeholder:o.value?"Filter by regular expression":"Filter by name or codepoint"},null,10,Cc),[[tc,a.value,void 0,{trim:!0}]]),P("div",Oc,[P("label",null,[Pr(P("input",{type:"checkbox",class:"form-check-input me-","onUpdate:modelValue":g[2]||(g[2]=S=>o.value=S)},null,512),[[nc,o.value]]),at(" rx ")])])])]))}}),Pc={class:"text-center text-light bg-dark p-2"},Ic={class:"mb-0"},Tc=Ge({__name:"PlaneViewer",props:{plane:{}},setup(e){return(t,n)=>(j(),z("div",Pc,[P("h3",Ic,[at(" Plane "+oe(t.plane.id)+" ",1),t.plane.name!==""?(j(),z(K,{key:0},[at(" ("),t.plane.shortName!==""?(j(),z(K,{key:0},[at(oe(t.plane.shortName)+" - ",1)],64)):de("",!0),at(oe(t.plane.name)+") ",1)],64)):de("",!0)])]))}}),Nc={class:"text-center text-light bg-secondary p-2"},Mc={class:"mb-0"},Ii=Ge({__name:"BlockViewer",props:{block:{}},setup(e){return(t,n)=>(j(),z("div",Nc,[P("h4",Mc,oe(t.block.name),1)]))}}),Rc={class:"copiable"},Fc={key:0},Ti="text-success",Ni="text-danger",$c=Ge({__name:"CopiableText",props:{text:{},displayText:{},code:{type:Boolean},iconSize:{}},setup(e){var u;const t=e,n=be(()=>t.displayText??t.text),r=ze(null);let a=null;const i=be(()=>{const m={};return t.iconSize&&(m["font-size"]=t.iconSize),m});function o(){r.value===null||a===null||(clearTimeout(a),a=null,r.value.classList.remove(Ti,Ni))}function s(m){o(),r.value!==null&&(r.value.classList.add(m?Ti:Ni),a=setTimeout(()=>o(),500))}let l;(u=navigator==null?void 0:navigator.clipboard)!=null&&u.writeText?l=()=>navigator.clipboard.writeText(t.text):l=()=>new Promise((m,h)=>{const g=document.createElement("textarea");g.style.width="1px",g.style.height="1px",g.style.overflow="hidden",g.style.top="0",g.style.left="0",g.style.position="fixed",g.value=t.text,document.body.appendChild(g);try{g.focus(),g.select(),document.execCommand("copy")?m():h(new Error("Copy command failed"))}catch(S){h(S)}finally{document.body.removeChild(g)}});function f(){o(),l().then(()=>{s(!0)}).catch(m=>{console.error(m),s(!1)})}return(m,h)=>{const g=gr("font-awesome-icon");return j(),z("span",Rc,[m.code?(j(),z("code",Fc,oe(n.value),1)):(j(),z(K,{key:1},[at(oe(n.value),1)],64)),P("a",{href:"#",title:"Copy to clipboard",ref_key:"link",ref:r,onClick:h[0]||(h[0]=es(S=>f(),["prevent","stop"])),style:cr(i.value)},[q(g,{icon:["far","copy"]})],4)])}}});const ns=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},gt=ns($c,[["__scopeId","data-v-f3d80ade"]]),_e=e=>(Il("data-v-ce5530e2"),e=e(),Tl(),e),Lc={class:"char"},jc={class:"mb-0"},zc={class:"m-0"},Dc={key:0,class:"details"},Uc={colspan:"99"},Hc={class:"container mx-4"},Bc={class:"row"},Yc={class:"col"},Kc=_e(()=>P("dt",null,"PHP",-1)),Wc=_e(()=>P("dt",null,"JavaScript",-1)),Vc=_e(()=>P("dt",null,"HTML",-1)),qc=_e(()=>P("dt",null,"Unipoints",-1)),Xc=_e(()=>P("dt",null,"Unipoints (less memory)",-1)),Jc={class:"col"},Gc={key:0},Zc=_e(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Old Unicode name",-1)),Qc=_e(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Formal alias",-1)),eu=_e(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Informative alias",-1)),tu=_e(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Corrected name",-1)),nu=_e(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Control name",-1)),ru=_e(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Alternate name",-1)),au=_e(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Figment",-1)),iu=_e(()=>P("span",{class:"badge rounded-pill text-bg-primary me-1"},"Abbreviation",-1)),ou=Ge({__name:"CodepointViewer",props:{block:{},codepoint:{}},setup(e){const t=e,n=ze(!1),r=be(()=>`"\\u{${t.codepoint.id.toString(16).toUpperCase()}}"`),a=be(()=>t.codepoint.id<=65535?`'\\u${t.codepoint.id.toString(16).padStart(4,"0")}'`:`'\\u${t.codepoint.char.charCodeAt(0).toString(16).padStart(4,"0")}\\u${t.codepoint.char.charCodeAt(1).toString(16).padStart(4,"0")}'`),i=be(()=>`&#x${t.codepoint.id.toString(16).toUpperCase()};`);return(o,s)=>{const l=gr("font-awesome-icon");return j(),z(K,null,[P("tr",{onClick:s[0]||(s[0]=f=>n.value=!n.value)},[P("td",Lc,[P("pre",jc,[q(gt,{text:o.codepoint.char,"icon-size":"66%"},null,8,["text"])])]),P("td",null,[P("h5",zc,[q(gt,{text:o.codepoint.name},null,8,["text"])])]),P("td",null,[P("button",{class:bn(["btn",n.value?"btn-primary":"btn-outline-primary"])},[q(l,{icon:"fa-solid fa-circle-info"})],2)])]),n.value?(j(),z("tr",Dc,[P("td",Uc,[P("div",Hc,[P("div",Bc,[P("div",Yc,[P("dl",null,[Kc,P("dd",null,[q(gt,{code:!0,text:r.value},null,8,["text"])]),Wc,P("dd",null,[q(gt,{code:!0,text:a.value},null,8,["text"])]),Vc,P("dd",null,[q(gt,{code:!0,text:i.value},null,8,["text"])]),qc,P("dd",null,[q(gt,{text:`\\MLUnipoints\\Codepoint::${o.codepoint.codename}`,"display-text":`Codepoint::${o.codepoint.codename}`,code:!0},null,8,["text","display-text"])]),Xc,P("dd",null,[q(gt,{text:`\\MLUnipoints\\Codepoint\\${o.block.codename}::${o.codepoint.codename}`,"display-text":`Codepoint\\${o.block.codename}::${o.codepoint.codename}`,code:!0},null,8,["text","display-text"])])])]),P("div",Jc,[o.codepoint.unicode1Name!==void 0?(j(),z("div",Gc,[Zc,P("code",null,oe(o.codepoint.unicode1Name),1)])):de("",!0),o.codepoint.formalAliases!==void 0?(j(!0),z(K,{key:1},Ae(o.codepoint.formalAliases,f=>(j(),z("div",{key:f},[Qc,P("code",null,oe(f),1)]))),128)):de("",!0),o.codepoint.informativeAliases!==void 0?(j(!0),z(K,{key:2},Ae(o.codepoint.informativeAliases,f=>(j(),z("div",{key:f},[eu,P("code",null,oe(f),1)]))),128)):de("",!0),o.codepoint.correctedNames!==void 0?(j(!0),z(K,{key:3},Ae(o.codepoint.correctedNames,f=>(j(),z("div",{key:f},[tu,P("code",null,oe(f),1)]))),128)):de("",!0),o.codepoint.controlNames!==void 0?(j(!0),z(K,{key:4},Ae(o.codepoint.controlNames,f=>(j(),z("div",{key:f},[nu,P("code",null,oe(f),1)]))),128)):de("",!0),o.codepoint.alternateNames!==void 0?(j(!0),z(K,{key:5},Ae(o.codepoint.alternateNames,f=>(j(),z("div",{key:f},[ru,P("code",null,oe(f),1)]))),128)):de("",!0),o.codepoint.figments!==void 0?(j(!0),z(K,{key:6},Ae(o.codepoint.figments,f=>(j(),z("div",{key:f},[au,P("code",null,oe(f),1)]))),128)):de("",!0),o.codepoint.abbreviations!==void 0?(j(!0),z(K,{key:7},Ae(o.codepoint.abbreviations,f=>(j(),z("div",{key:f},[iu,P("code",null,oe(f),1)]))),128)):de("",!0)])])])])])):de("",!0)],64)}}});const su=ns(ou,[["__scopeId","data-v-ce5530e2"]]),lu={class:"container"},fu={key:0,class:"alert alert-info"},cu={class:"table table-hover table-sm m-0"},uu=P("colgroup",null,[P("col",{width:"150"}),P("col"),P("col",{width:"1"})],-1),du={key:0,class:"text-center mt-2"},Mn=1e3,mu=Ge({__name:"DataViewer",props:{filterResults:{}},setup(e){let t=ze(Mn),n=!1;const r=e;st(r.filterResults,async()=>{t.value=Mn});const a=be(()=>{if(n=!1,r.filterResults===null)return[];let i=t.value;const o=[];return r.filterResults.some(s=>{const l={plane:s.plane,blocks:[]};if(s.blocks.some(f=>{const u={block:f.block,codepoints:[]};if(f.codepoints.length<=i?u.codepoints=f.codepoints:u.codepoints=f.codepoints.slice(0,i),l.blocks.push(u),i-=u.codepoints.length,i<=0)return n=!0,!0}),o.push(l),i<=0)return!0}),o});return(i,o)=>(j(),z("div",lu,[a.value.length===0?(j(),z("div",fu,"No results")):(j(),z(K,{key:1},[(j(!0),z(K,null,Ae(a.value,s=>(j(),z(K,{key:s.plane.id.toString()},[q(Tc,{plane:s.plane},null,8,["plane"]),q(Ii,{block:s.blocks[0].block},null,8,["block"]),(j(!0),z(K,null,Ae(s.blocks,(l,f)=>(j(),z(K,{key:`${s.plane.id}@${l.codename}`},[f!==0?(j(),nr(Ii,{key:0,block:l.block},null,8,["block"])):de("",!0),P("table",cu,[uu,P("tbody",null,[(j(!0),z(K,null,Ae(l.codepoints,u=>(j(),nr(su,{key:u.name,block:l.block,codepoint:u},null,8,["block","codepoint"]))),128))])])],64))),128))],64))),128)),Oo(n)?(j(),z("div",du,[P("button",{class:"btn btn-secondary",onClick:o[0]||(o[0]=es(s=>le(t)?t.value+=Mn:t+=Mn,["prevent"]))}," Show more ")])):de("",!0)],64))]))}}),pu={key:0,class:"container"},hu={key:0,class:"alert alert-danger mt-5 text-center"},gu={key:1,class:"alert alert-info mt-5 text-center fs-4"},vu=P("br",null,null,-1),bu={key:0},yu={key:0,class:"container alert alert-danger"},xu=Ge({__name:"App",setup(e){const t=ze(null),n=ze(null),r=ze(null),a=ze(null);cc().then(o=>{t.value=o}).catch(o=>{n.value=o});function i(o){o instanceof Error?(r.value=null,a.value=o):(r.value=o,a.value=null)}return(o,s)=>{const l=gr("font-awesome-icon");return t.value===null?(j(),z("main",pu,[n.value!==null?(j(),z("div",hu,oe(n.value),1)):(j(),z("div",gu,[at(" Loading..."),vu,q(l,{icon:"fa-solid fa-spinner",spin:""})]))])):(j(),z(K,{key:1},[q(pc,{"unicode-version":t.value.unicodeVersion},null,8,["unicode-version"]),t.value?(j(),z("main",bu,[q(Sc,{"unipoints-data":t.value,onChange:s[0]||(s[0]=f=>i(f))},null,8,["unipoints-data"]),a.value!==null?(j(),z("div",yu,oe(a.value.message),1)):r.value!==null?(j(),nr(mu,{key:1,filterResults:r.value},null,8,["filterResults"])):de("",!0)])):de("",!0)],64))}}});function Mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mi(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rr(e){"@babel/helpers - typeof";return rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rr(e)}function _u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ri(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wu(e,t,n){return t&&Ri(e.prototype,t),n&&Ri(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pa(e,t){return Au(e)||Cu(e,t)||rs(e,t)||Su()}function xn(e){return ku(e)||Eu(e)||rs(e)||Ou()}function ku(e){if(Array.isArray(e))return Qr(e)}function Au(e){if(Array.isArray(e))return e}function Eu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function rs(e,t){if(e){if(typeof e=="string")return Qr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qr(e,t)}}function Qr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ou(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Su(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fi=function(){},Ia={},as={},is=null,os={mark:Fi,measure:Fi};try{typeof window<"u"&&(Ia=window),typeof document<"u"&&(as=document),typeof MutationObserver<"u"&&(is=MutationObserver),typeof performance<"u"&&(os=performance)}catch{}var Pu=Ia.navigator||{},$i=Pu.userAgent,Li=$i===void 0?"":$i,ft=Ia,ee=as,ji=is,Rn=os;ft.document;var Qe=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",ss=~Li.indexOf("MSIE")||~Li.indexOf("Trident/"),Fn,$n,Ln,jn,zn,qe="___FONT_AWESOME___",ea=16,ls="fa",fs="svg-inline--fa",Ct="data-fa-i2svg",ta="data-fa-pseudo-element",Iu="data-fa-pseudo-element-pending",Ta="data-prefix",Na="data-icon",zi="fontawesome-i2svg",Tu="async",Nu=["HTML","HEAD","STYLE","SCRIPT"],cs=function(){try{return!0}catch{return!1}}(),Q="classic",ne="sharp",Ma=[Q,ne];function _n(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Q]}})}var dn=_n((Fn={},ie(Fn,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ie(Fn,ne,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Fn)),mn=_n(($n={},ie($n,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie($n,ne,{solid:"fass",regular:"fasr",light:"fasl"}),$n)),pn=_n((Ln={},ie(Ln,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(Ln,ne,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ln)),Mu=_n((jn={},ie(jn,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie(jn,ne,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),jn)),Ru=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,us="fa-layers-text",Fu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$u=_n((zn={},ie(zn,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(zn,ne,{900:"fass",400:"fasr",300:"fasl"}),zn)),ds=[1,2,3,4,5,6,7,8,9,10],Lu=ds.concat([11,12,13,14,15,16,17,18,19,20]),ju=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hn=new Set;Object.keys(mn[Q]).map(hn.add.bind(hn));Object.keys(mn[ne]).map(hn.add.bind(hn));var zu=[].concat(Ma,xn(hn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",xt.GROUP,xt.SWAP_OPACITY,xt.PRIMARY,xt.SECONDARY]).concat(ds.map(function(e){return"".concat(e,"x")})).concat(Lu.map(function(e){return"w-".concat(e)})),rn=ft.FontAwesomeConfig||{};function Du(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Uu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var Hu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hu.forEach(function(e){var t=Pa(e,2),n=t[0],r=t[1],a=Uu(Du(n));a!=null&&(rn[r]=a)})}var ms={styleDefault:"solid",familyDefault:"classic",cssPrefix:ls,replacementClass:fs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rn.familyPrefix&&(rn.cssPrefix=rn.familyPrefix);var Bt=O(O({},ms),rn);Bt.autoReplaceSvg||(Bt.observeMutations=!1);var N={};Object.keys(ms).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Bt[e]=n,an.forEach(function(r){return r(N)})},get:function(){return Bt[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){Bt.cssPrefix=t,an.forEach(function(n){return n(N)})},get:function(){return Bt.cssPrefix}});ft.FontAwesomeConfig=N;var an=[];function Bu(e){return an.push(e),function(){an.splice(an.indexOf(e),1)}}var tt=ea,De={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yu(e){if(!(!e||!Qe)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ee.head.insertBefore(t,r),e}}var Ku="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gn(){for(var e=12,t="";e-- >0;)t+=Ku[Math.random()*62|0];return t}function qt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ra(e){return e.classList?qt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ps(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ps(e[n]),'" ')},"").trim()}function xr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Fa(e){return e.size!==De.size||e.x!==De.x||e.y!==De.y||e.rotate!==De.rotate||e.flipX||e.flipY}function Vu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function qu(e){var t=e.transform,n=e.width,r=n===void 0?ea:n,a=e.height,i=a===void 0?ea:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ss?l+="translate(".concat(t.x/tt-r/2,"em, ").concat(t.y/tt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/tt,"em), calc(-50% + ").concat(t.y/tt,"em)) "):l+="translate(".concat(t.x/tt,"em, ").concat(t.y/tt,"em) "),l+="scale(".concat(t.size/tt*(t.flipX?-1:1),", ").concat(t.size/tt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Xu=`:root, :host {
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
}`;function hs(){var e=ls,t=fs,n=N.cssPrefix,r=N.replacementClass,a=Xu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Di=!1;function Fr(){N.autoAddCss&&!Di&&(Yu(hs()),Di=!0)}var Ju={mixout:function(){return{dom:{css:hs,insertCss:Fr}}},hooks:function(){return{beforeDOMElementCreation:function(){Fr()},beforeI2svg:function(){Fr()}}}},Xe=ft||{};Xe[qe]||(Xe[qe]={});Xe[qe].styles||(Xe[qe].styles={});Xe[qe].hooks||(Xe[qe].hooks={});Xe[qe].shims||(Xe[qe].shims=[]);var Te=Xe[qe],gs=[],Gu=function e(){ee.removeEventListener("DOMContentLoaded",e),ar=1,gs.map(function(t){return t()})},ar=!1;Qe&&(ar=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),ar||ee.addEventListener("DOMContentLoaded",Gu));function Zu(e){Qe&&(ar?setTimeout(e,0):gs.push(e))}function wn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ps(e):"<".concat(t," ").concat(Wu(r),">").concat(i.map(wn).join(""),"</").concat(t,">")}function Ui(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},$r=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Qu(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function ed(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function na(e){var t=ed(e);return t.length===1?t[0].toString(16):null}function td(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Hi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ra(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Hi(t);typeof Te.hooks.addPack=="function"&&!a?Te.hooks.addPack(e,Hi(t)):Te.styles[e]=O(O({},Te.styles[e]||{}),i),e==="fas"&&ra("fa",t)}var Dn,Un,Hn,Tt=Te.styles,nd=Te.shims,rd=(Dn={},ie(Dn,Q,Object.values(pn[Q])),ie(Dn,ne,Object.values(pn[ne])),Dn),$a=null,vs={},bs={},ys={},xs={},_s={},ad=(Un={},ie(Un,Q,Object.keys(dn[Q])),ie(Un,ne,Object.keys(dn[ne])),Un);function id(e){return~zu.indexOf(e)}function od(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!id(a)?a:null}var ws=function(){var t=function(i){return $r(Tt,function(o,s,l){return o[l]=$r(s,i,{}),o},{})};vs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),bs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),_s=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Tt||N.autoFetchSvg,r=$r(nd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ys=r.names,xs=r.unicodes,$a=_r(N.styleDefault,{family:N.familyDefault})};Bu(function(e){$a=_r(e.styleDefault,{family:N.familyDefault})});ws();function La(e,t){return(vs[e]||{})[t]}function sd(e,t){return(bs[e]||{})[t]}function _t(e,t){return(_s[e]||{})[t]}function ks(e){return ys[e]||{prefix:null,iconName:null}}function ld(e){var t=xs[e],n=La("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ct(){return $a}var ja=function(){return{prefix:null,iconName:null,rest:[]}};function _r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Q:n,a=dn[r][e],i=mn[r][e]||mn[r][a],o=e in Te.styles?e:null;return i||o||null}var Bi=(Hn={},ie(Hn,Q,Object.keys(pn[Q])),ie(Hn,ne,Object.keys(pn[ne])),Hn);function wr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ie(t,Q,"".concat(N.cssPrefix,"-").concat(Q)),ie(t,ne,"".concat(N.cssPrefix,"-").concat(ne)),t),o=null,s=Q;(e.includes(i[Q])||e.some(function(f){return Bi[Q].includes(f)}))&&(s=Q),(e.includes(i[ne])||e.some(function(f){return Bi[ne].includes(f)}))&&(s=ne);var l=e.reduce(function(f,u){var m=od(N.cssPrefix,u);if(Tt[u]?(u=rd[s].includes(u)?Mu[s][u]:u,o=u,f.prefix=u):ad[s].indexOf(u)>-1?(o=u,f.prefix=_r(u,{family:s})):m?f.iconName=m:u!==N.replacementClass&&u!==i[Q]&&u!==i[ne]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var h=o==="fa"?ks(f.iconName):{},g=_t(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Tt.far&&Tt.fas&&!N.autoFetchSvg&&(f.prefix="fas")}return f},ja());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ne&&(Tt.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=_t(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ct()||"fas"),l}var fd=function(){function e(){_u(this,e),this.definitions={}}return wu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),ra(s,o[s]);var l=pn[Q][s];l&&ra(l,o[s]),ws()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Yi=[],Nt={},Lt={},cd=Object.keys(Lt);function ud(e,t){var n=t.mixoutsTo;return Yi=e,Nt={},Object.keys(Lt).forEach(function(r){cd.indexOf(r)===-1&&delete Lt[r]}),Yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),rr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Nt[o]||(Nt[o]=[]),Nt[o].push(i[o])})}r.provides&&r.provides(Lt)}),n}function aa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Nt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Nt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lt[e]?Lt[e].apply(null,t):void 0}function ia(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ct();if(t)return t=_t(n,t)||t,Ui(As.definitions,n,t)||Ui(Te.styles,n,t)}var As=new fd,dd=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,Ot("noAuto")},md={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(Ot("beforeI2svg",t),Je("pseudoElements2svg",t),Je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Zu(function(){hd({autoReplaceSvgRoot:n}),Ot("watch",t)})}},pd={icon:function(t){if(t===null)return null;if(rr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_t(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=_r(t[0]);return{prefix:r,iconName:_t(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(Ru))){var a=wr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ct(),iconName:_t(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ct();return{prefix:i,iconName:_t(i,t)||t}}}},we={noAuto:dd,config:N,dom:md,parse:pd,library:As,findIconDefinition:ia,toHtml:wn},hd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(Te.styles).length>0||N.autoFetchSvg)&&Qe&&N.autoReplaceSvg&&we.dom.i2svg({node:r})};function kr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return wn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Qe){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function gd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Fa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=xr(O(O({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function vd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function za(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,g=h===void 0?!1:h,S=r.found?r:n,k=S.width,M=S.height,x=a==="fak",_=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(function(ke){return m.classes.indexOf(ke)===-1}).filter(function(ke){return ke!==""||!!ke}).concat(m.classes).join(" "),L={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(M)})},I=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(k/M*16*.0625,"em")}:{};g&&(L.attributes[Ct]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(u||gn())},children:[l]}),delete L.attributes.title);var W=O(O({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:O(O({},I),m.styles)}),ce=r.found&&n.found?Je("generateAbstractMask",W)||{children:[],attributes:{}}:Je("generateAbstractIcon",W)||{children:[],attributes:{}},ue=ce.children,Ce=ce.attributes;return W.children=ue,W.attributes=Ce,s?vd(W):gd(W)}function Ki(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Ct]="");var u=O({},o.styles);Fa(a)&&(u.transform=qu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=xr(u);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function bd(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=xr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Lr=Te.styles;function oa(e){var t=e[0],n=e[1],r=e.slice(4),a=Pa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(xt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(xt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var yd={found:!1,width:512,height:512};function xd(e,t){!cs&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function sa(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=ct()),new Promise(function(r,a){if(Je("missingIconAbstract"),n==="fa"){var i=ks(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Lr[t]&&Lr[t][e]){var o=Lr[t][e];return r(oa(o))}xd(e,t),r(O(O({},yd),{},{icon:N.showMissingIcons&&e?Je("missingIconAbstract")||{}:{}}))})}var Wi=function(){},la=N.measurePerformance&&Rn&&Rn.mark&&Rn.measure?Rn:{mark:Wi,measure:Wi},en='FA "6.4.2"',_d=function(t){return la.mark("".concat(en," ").concat(t," begins")),function(){return Es(t)}},Es=function(t){la.mark("".concat(en," ").concat(t," ends")),la.measure("".concat(en," ").concat(t),"".concat(en," ").concat(t," begins"),"".concat(en," ").concat(t," ends"))},Da={begin:_d,end:Es},qn=function(){};function Vi(e){var t=e.getAttribute?e.getAttribute(Ct):null;return typeof t=="string"}function wd(e){var t=e.getAttribute?e.getAttribute(Ta):null,n=e.getAttribute?e.getAttribute(Na):null;return t&&n}function kd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Ad(){if(N.autoReplaceSvg===!0)return Xn.replace;var e=Xn[N.autoReplaceSvg];return e||Xn.replace}function Ed(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function Cd(e){return ee.createElement(e)}function Cs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ed:Cd:n;if(typeof e=="string")return ee.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Cs(o,{ceFn:r}))}),a}function Od(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Xn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Cs(a),n)}),n.getAttribute(Ct)===null&&N.keepOriginalSource){var r=ee.createComment(Od(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ra(n).indexOf(N.replacementClass))return Xn.replace(t);var a=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return wn(s)}).join(`
`);n.setAttribute(Ct,""),n.innerHTML=o}};function qi(e){e()}function Os(e,t){var n=typeof t=="function"?t:qn;if(e.length===0)n();else{var r=qi;N.mutateApproach===Tu&&(r=ft.requestAnimationFrame||qi),r(function(){var a=Ad(),i=Da.begin("mutate");e.map(a),i(),n()})}}var Ua=!1;function Ss(){Ua=!0}function fa(){Ua=!1}var ir=null;function Xi(e){if(ji&&N.observeMutations){var t=e.treeCallback,n=t===void 0?qn:t,r=e.nodeCallback,a=r===void 0?qn:r,i=e.pseudoElementsCallback,o=i===void 0?qn:i,s=e.observeMutationsRoot,l=s===void 0?ee:s;ir=new ji(function(f){if(!Ua){var u=ct();qt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Vi(m.addedNodes[0])&&(N.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&N.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Vi(m.target)&&~ju.indexOf(m.attributeName))if(m.attributeName==="class"&&wd(m.target)){var h=wr(Ra(m.target)),g=h.prefix,S=h.iconName;m.target.setAttribute(Ta,g||u),S&&m.target.setAttribute(Na,S)}else kd(m.target)&&a(m.target)})}}),Qe&&ir.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Sd(){ir&&ir.disconnect()}function Pd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Id(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=wr(Ra(e));return a.prefix||(a.prefix=ct()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=sd(a.prefix,e.innerText)||La(a.prefix,na(e.innerText))),!a.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Td(e){var t=qt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||gn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Nd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:De,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Id(e),r=n.iconName,a=n.prefix,i=n.rest,o=Td(e),s=aa("parseNodeAttributes",{},e),l=t.styleParser?Pd(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:De,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Md=Te.styles;function Ps(e){var t=N.autoReplaceSvg==="nest"?Ji(e,{styleParser:!1}):Ji(e);return~t.extra.classes.indexOf(us)?Je("generateLayersText",e,t):Je("generateSvgReplacementMutation",e,t)}var ut=new Set;Ma.map(function(e){ut.add("fa-".concat(e))});Object.keys(dn[Q]).map(ut.add.bind(ut));Object.keys(dn[ne]).map(ut.add.bind(ut));ut=xn(ut);function Gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();var n=ee.documentElement.classList,r=function(m){return n.add("".concat(zi,"-").concat(m))},a=function(m){return n.remove("".concat(zi,"-").concat(m))},i=N.autoFetchSvg?ut:Ma.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Md));i.includes("fa")||i.push("fa");var o=[".".concat(us,":not([").concat(Ct,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=qt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Da.begin("onTree"),f=s.reduce(function(u,m){try{var h=Ps(m);h&&u.push(h)}catch(g){cs||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(h){Os(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function Rd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ps(e).then(function(n){n&&Os([n],t)})}function Fd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ia(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ia(a||{})),e(r,O(O({},n),{},{mask:a}))}}var $d=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?De:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,h=m===void 0?null:m,g=n.titleId,S=g===void 0?null:g,k=n.classes,M=k===void 0?[]:k,x=n.attributes,_=x===void 0?{}:x,L=n.styles,I=L===void 0?{}:L;if(t){var W=t.prefix,ce=t.iconName,ue=t.icon;return kr(O({type:"icon"},t),function(){return Ot("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(h?_["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(S||gn()):(_["aria-hidden"]="true",_.focusable="false")),za({icons:{main:oa(ue),mask:l?oa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ce,transform:O(O({},De),a),symbol:o,title:h,maskId:u,titleId:S,extra:{attributes:_,styles:I,classes:M}})})}},Ld={mixout:function(){return{icon:Fd($d)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Gi,n.nodeCallback=Rd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ee:r,i=n.callback,o=i===void 0?function(){}:i;return Gi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(g,S){Promise.all([sa(a,s),u.iconName?sa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var M=Pa(k,2),x=M[0],_=M[1];g([n,za({icons:{main:x,mask:_},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=xr(s);l.length>0&&(a.style=l);var f;return Fa(o)&&(f=Je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},jd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return kr({type:"layer"},function(){Ot("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(xn(i)).join(" ")},children:o}]})}}}},zd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return kr({type:"counter",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),bd({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(xn(s))}})})}}}},Dd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?De:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,g=h===void 0?{}:h;return kr({type:"text",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),Ki({content:n,transform:O(O({},De),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(xn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ss){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ki({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ud=new RegExp('"',"ug"),Zi=[1105920,1112319];function Hd(e){var t=e.replace(Ud,""),n=td(t,0),r=n>=Zi[0]&&n<=Zi[1],a=t.length===2?t[0]===t[1]:!1;return{value:na(a?t[0]:t),isSecondary:r||a}}function Qi(e,t){var n="".concat(Iu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=qt(e.children),o=i.filter(function(ue){return ue.getAttribute(ta)===t})[0],s=ft.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Fu),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ne:Q,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?mn[h][l[2].toLowerCase()]:$u[h][f],S=Hd(m),k=S.value,M=S.isSecondary,x=l[0].startsWith("FontAwesome"),_=La(g,k),L=_;if(x){var I=ld(k);I.iconName&&I.prefix&&(_=I.iconName,g=I.prefix)}if(_&&!M&&(!o||o.getAttribute(Ta)!==g||o.getAttribute(Na)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var W=Nd(),ce=W.extra;ce.attributes[ta]=t,sa(_,g).then(function(ue){var Ce=za(O(O({},W),{},{icons:{main:ue,mask:ja()},prefix:g,iconName:L,extra:ce,watchable:!0})),ke=ee.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ke,e.firstChild):e.appendChild(ke),ke.outerHTML=Ce.map(function(He){return wn(He)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Bd(e){return Promise.all([Qi(e,"::before"),Qi(e,"::after")])}function Yd(e){return e.parentNode!==document.head&&!~Nu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ta)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function eo(e){if(Qe)return new Promise(function(t,n){var r=qt(e.querySelectorAll("*")).filter(Yd).map(Bd),a=Da.begin("searchPseudoElements");Ss(),Promise.all(r).then(function(){a(),fa(),t()}).catch(function(){a(),fa(),n()})})}var Kd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=eo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ee:r;N.searchPseudoElements&&eo(a)}}},to=!1,Wd={mixout:function(){return{dom:{unwatch:function(){Ss(),to=!0}}}},hooks:function(){return{bootstrap:function(){Xi(aa("mutationObserverCallbacks",{}))},noAuto:function(){Sd()},watch:function(n){var r=n.observeMutationsRoot;to?fa():Xi(aa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},no=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Vd={mixout:function(){return{parse:{transform:function(n){return no(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=no(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:h};return{tag:"g",attributes:O({},g.outer),children:[{tag:"g",attributes:O({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),g.path)}]}]}}}},jr={x:0,y:0,width:"100%",height:"100%"};function ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qd(e){return e.tag==="g"?e.children:[e]}var Xd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?wr(a.split(" ").map(function(o){return o.trim()})):ja();return i.prefix||(i.prefix=ct()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,h=o.icon,g=Vu({transform:l,containerWidth:m,iconWidth:f}),S={tag:"rect",attributes:O(O({},jr),{},{fill:"white"})},k=u.children?{children:u.children.map(ro)}:{},M={tag:"g",attributes:O({},g.inner),children:[ro(O({tag:u.tag,attributes:O(O({},u.attributes),g.path)},k))]},x={tag:"g",attributes:O({},g.outer),children:[M]},_="mask-".concat(s||gn()),L="clip-".concat(s||gn()),I={tag:"mask",attributes:O(O({},jr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,x]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:qd(h)},I]};return r.push(W,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(_,")")},jr)}),{children:r,attributes:a}}}},Jd={provides:function(t){var n=!1;ft.matchMedia&&(n=ft.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Gd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Zd=[Ju,Ld,jd,zd,Dd,Kd,Wd,Vd,Xd,Jd,Gd];ud(Zd,{mixoutsTo:we});we.noAuto;we.config;var Qd=we.library;we.dom;var ca=we.parse;we.findIconDefinition;we.toHtml;var em=we.icon;we.layer;we.text;we.counter;function ao(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ao(Object(n),!0).forEach(function(r){ge(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ao(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function or(e){"@babel/helpers - typeof";return or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},or(e)}function ge(e,t,n){return t=am(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function nm(e,t){if(e==null)return{};var n=tm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function rm(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function am(e){var t=rm(e,"string");return typeof t=="symbol"?t:String(t)}var im=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Is={exports:{}};(function(e){(function(t){var n=function(x,_,L){if(!f(_)||m(_)||h(_)||g(_)||l(_))return _;var I,W=0,ce=0;if(u(_))for(I=[],ce=_.length;W<ce;W++)I.push(n(x,_[W],L));else{I={};for(var ue in _)Object.prototype.hasOwnProperty.call(_,ue)&&(I[x(ue,L)]=n(x,_[ue],L))}return I},r=function(x,_){_=_||{};var L=_.separator||"_",I=_.split||/(?=[A-Z])/;return x.split(I).join(L)},a=function(x){return S(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(_,L){return L?L.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var _=a(x);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(x,_){return r(x,_).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},f=function(x){return x===Object(x)},u=function(x){return s.call(x)=="[object Array]"},m=function(x){return s.call(x)=="[object Date]"},h=function(x){return s.call(x)=="[object RegExp]"},g=function(x){return s.call(x)=="[object Boolean]"},S=function(x){return x=x-0,x===x},k=function(x,_){var L=_&&"process"in _?_.process:_;return typeof L!="function"?x:function(I,W){return L(I,x,W)}},M={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,_){return n(k(a,_),x)},decamelizeKeys:function(x,_){return n(k(o,_),x,_)},pascalizeKeys:function(x,_){return n(k(i,_),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=M:t.humps=M})(im)})(Is);var om=Is.exports,sm=["class","style"];function lm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=om.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function fm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ts(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ts(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=fm(u);break;case"style":l.style=lm(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=nm(n,sm);return Nf(e.tag,Ke(Ke(Ke({},t),{},{class:a.class,style:Ke(Ke({},a.style),o)},a.attrs),s),r)}var Ns=!1;try{Ns=!0}catch{}function cm(){if(!Ns&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function zr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ge({},e,t):{}}function um(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ge(t,"fa-".concat(e.size),e.size!==null),ge(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ge(t,"fa-pull-".concat(e.pull),e.pull!==null),ge(t,"fa-swap-opacity",e.swapOpacity),ge(t,"fa-bounce",e.bounce),ge(t,"fa-shake",e.shake),ge(t,"fa-beat",e.beat),ge(t,"fa-fade",e.fade),ge(t,"fa-beat-fade",e.beatFade),ge(t,"fa-flash",e.flash),ge(t,"fa-spin-pulse",e.spinPulse),ge(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function io(e){if(e&&or(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ca.icon)return ca.icon(e);if(e===null)return null;if(or(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var dm=Ge({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=be(function(){return io(t.icon)}),i=be(function(){return zr("classes",um(t))}),o=be(function(){return zr("transform",typeof t.transform=="string"?ca.transform(t.transform):t.transform)}),s=be(function(){return zr("mask",io(t.mask))}),l=be(function(){return em(a.value,Ke(Ke(Ke(Ke({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});st(l,function(u){if(!u)return cm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=be(function(){return l.value?Ts(l.value.abstract[0],{},r):null});return function(){return f.value}}}),mm={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},pm={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"]},hm={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},gm={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};Qd.add(mm,pm,gm,hm);lc(xu).component("font-awesome-icon",dm).mount("#app");
