(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ua(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Z={},Mt=[],Ne=()=>{},Rs=()=>!1,Fs=/^on[^a-z]/,lr=e=>Fs.test(e),da=e=>e.startsWith("onUpdate:"),fe=Object.assign,ma=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ls=Object.prototype.hasOwnProperty,B=(e,t)=>Ls.call(e,t),R=Array.isArray,Rt=e=>bn(e)==="[object Map]",Yt=e=>bn(e)==="[object Set]",Xa=e=>bn(e)==="[object Date]",z=e=>typeof e=="function",oe=e=>typeof e=="string",jt=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",so=e=>(G(e)||z(e))&&z(e.then)&&z(e.catch),lo=Object.prototype.toString,bn=e=>lo.call(e),$s=e=>bn(e).slice(8,-1),fo=e=>bn(e)==="[object Object]",pa=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yn=ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},js=/-(\w)/g,ze=fr(e=>e.replace(js,(t,n)=>n?n.toUpperCase():"")),Ds=/\B([A-Z])/g,Kt=fr(e=>e.replace(Ds,"-$1").toLowerCase()),cr=fr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cr=fr(e=>e?`on${cr(e)}`:""),At=(e,t)=>!Object.is(e,t),Kn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Gn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Zn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ja;const zr=()=>Ja||(Ja=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ha(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=oe(r)?Bs(r):ha(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(oe(e)||G(e))return e}const zs=/;(?![^(]*\))/g,Us=/:([^]+)/,Hs=/\/\*[^]*?\*\//g;function Bs(e){const t={};return e.replace(Hs,"").split(zs).forEach(n=>{if(n){const r=n.split(Us);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function yn(e){let t="";if(oe(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=yn(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ys="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ks=ua(Ys);function co(e){return!!e||e===""}function Ws(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=_n(e[r],t[r]);return n}function _n(e,t){if(e===t)return!0;let n=Xa(e),r=Xa(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=jt(e),r=jt(t),n||r)return e===t;if(n=R(e),r=R(t),n||r)return n&&r?Ws(e,t):!1;if(n=G(e),r=G(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!_n(e[o],t[o]))return!1}}return String(e)===String(t)}function ga(e,t){return e.findIndex(n=>_n(n,t))}const ie=e=>oe(e)?e:e==null?"":R(e)||G(e)&&(e.toString===lo||!z(e.toString))?JSON.stringify(e,uo,2):String(e),uo=(e,t)=>t&&t.__v_isRef?uo(e,t.value):Rt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Yt(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!R(t)&&!fo(t)?String(t):t;let Se;class Vs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function qs(e,t=Se){t&&t.active&&t.effects.push(e)}function Xs(){return Se}const va=e=>{const t=new Set(e);return t.w=0,t.n=0,t},mo=e=>(e.w&lt)>0,po=e=>(e.n&lt)>0,Js=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=lt},Gs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];mo(a)&&!po(a)?a.delete(e):t[n++]=a,a.w&=~lt,a.n&=~lt}t.length=n}},Ur=new WeakMap;let Qt=0,lt=1;const Hr=30;let Pe;const wt=Symbol(""),Br=Symbol("");class ba{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qs(this,r)}run(){if(!this.active)return this.fn();let t=Pe,n=it;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Pe,Pe=this,it=!0,lt=1<<++Qt,Qt<=Hr?Js(this):Ga(this),this.fn()}finally{Qt<=Hr&&Gs(this),lt=1<<--Qt,Pe=this.parent,it=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pe===this?this.deferStop=!0:this.active&&(Ga(this),this.onStop&&this.onStop(),this.active=!1)}}function Ga(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let it=!0;const ho=[];function Wt(){ho.push(it),it=!1}function Vt(){const e=ho.pop();it=e===void 0?!0:e}function be(e,t,n){if(it&&Pe){let r=Ur.get(e);r||Ur.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=va()),go(a)}}function go(e,t){let n=!1;Qt<=Hr?po(e)||(e.n|=lt,n=!mo(e)):n=!e.has(Pe),n&&(e.add(Pe),Pe.deps.push(e))}function Ke(e,t,n,r,a,i){const o=Ur.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((f,u)=>{(u==="length"||!jt(u)&&u>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?pa(n)&&s.push(o.get("length")):(s.push(o.get(wt)),Rt(e)&&s.push(o.get(Br)));break;case"delete":R(e)||(s.push(o.get(wt)),Rt(e)&&s.push(o.get(Br)));break;case"set":Rt(e)&&s.push(o.get(wt));break}if(s.length===1)s[0]&&Yr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Yr(va(l))}}function Yr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Za(r);for(const r of n)r.computed||Za(r)}function Za(e,t){(e!==Pe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Zs=ua("__proto__,__v_isRef,__isVue"),vo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(jt)),Qa=Qs();function Qs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)be(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Wt();const r=Y(this)[t].apply(this,n);return Vt(),r}}),e}function el(e){const t=Y(this);return be(t,"has",e),t.hasOwnProperty(e)}class bo{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?ml:wo:i?xo:_o).get(t))return t;const o=R(t);if(!a){if(o&&B(Qa,n))return Reflect.get(Qa,n,r);if(n==="hasOwnProperty")return el}const s=Reflect.get(t,n,r);return(jt(n)?vo.has(n):Zs(n))||(a||be(t,"get",n),i)?s:ae(s)?o&&pa(n)?s:s.value:G(s)?a?ko(s):xa(s):s}}class yo extends bo{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Dt(i)&&ae(i)&&!ae(r))return!1;if(!this._shallow&&(!Qn(r)&&!Dt(r)&&(i=Y(i),r=Y(r)),!R(t)&&ae(i)&&!ae(r)))return i.value=r,!0;const o=R(t)&&pa(n)?Number(n)<t.length:B(t,n),s=Reflect.set(t,n,r,a);return t===Y(a)&&(o?At(r,i)&&Ke(t,"set",n,r):Ke(t,"add",n,r)),s}deleteProperty(t,n){const r=B(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Ke(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!jt(n)||!vo.has(n))&&be(t,"has",n),r}ownKeys(t){return be(t,"iterate",R(t)?"length":wt),Reflect.ownKeys(t)}}class tl extends bo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const nl=new yo,rl=new tl,al=new yo(!0),ya=e=>e,ur=e=>Reflect.getPrototypeOf(e);function Sn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(At(t,i)&&be(a,"get",t),be(a,"get",i));const{has:o}=ur(a),s=r?ya:n?ka:sn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Pn(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(At(e,a)&&be(r,"has",e),be(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Tn(e,t=!1){return e=e.__v_raw,!t&&be(Y(e),"iterate",wt),Reflect.get(e,"size",e)}function ei(e){e=Y(e);const t=Y(this);return ur(t).has.call(t,e)||(t.add(e),Ke(t,"add",e,e)),this}function ti(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=ur(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?At(t,o)&&Ke(n,"set",e,t):Ke(n,"add",e,t),this}function ni(e){const t=Y(this),{has:n,get:r}=ur(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ke(t,"delete",e,void 0),i}function ri(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Ke(e,"clear",void 0,void 0),n}function In(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?ya:e?ka:sn;return!e&&be(s,"iterate",wt),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function Nn(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=Rt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),u=n?ya:t?ka:sn;return!t&&be(i,"iterate",l?Br:wt),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function et(e){return function(...t){return e==="delete"?!1:this}}function il(){const e={get(i){return Sn(this,i)},get size(){return Tn(this)},has:Pn,add:ei,set:ti,delete:ni,clear:ri,forEach:In(!1,!1)},t={get(i){return Sn(this,i,!1,!0)},get size(){return Tn(this)},has:Pn,add:ei,set:ti,delete:ni,clear:ri,forEach:In(!1,!0)},n={get(i){return Sn(this,i,!0)},get size(){return Tn(this,!0)},has(i){return Pn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:In(!0,!1)},r={get(i){return Sn(this,i,!0,!0)},get size(){return Tn(this,!0)},has(i){return Pn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:In(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Nn(i,!1,!1),n[i]=Nn(i,!0,!1),t[i]=Nn(i,!1,!0),r[i]=Nn(i,!0,!0)}),[e,n,t,r]}const[ol,sl,ll,fl]=il();function _a(e,t){const n=t?e?fl:ll:e?sl:ol;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const cl={get:_a(!1,!1)},ul={get:_a(!1,!0)},dl={get:_a(!0,!1)},_o=new WeakMap,xo=new WeakMap,wo=new WeakMap,ml=new WeakMap;function pl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hl(e){return e.__v_skip||!Object.isExtensible(e)?0:pl($s(e))}function xa(e){return Dt(e)?e:wa(e,!1,nl,cl,_o)}function gl(e){return wa(e,!1,al,ul,xo)}function ko(e){return wa(e,!0,rl,dl,wo)}function wa(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=hl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ft(e){return Dt(e)?Ft(e.__v_raw):!!(e&&e.__v_isReactive)}function Dt(e){return!!(e&&e.__v_isReadonly)}function Qn(e){return!!(e&&e.__v_isShallow)}function Ao(e){return Ft(e)||Dt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Eo(e){return Gn(e,"__v_skip",!0),e}const sn=e=>G(e)?xa(e):e,ka=e=>G(e)?ko(e):e;function Oo(e){it&&Pe&&(e=Y(e),go(e.dep||(e.dep=va())))}function Co(e,t){e=Y(e);const n=e.dep;n&&Yr(n)}function ae(e){return!!(e&&e.__v_isRef===!0)}function We(e){return vl(e,!1)}function vl(e,t){return ae(e)?e:new bl(e,t)}class bl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:sn(t)}get value(){return Oo(this),this._value}set value(t){const n=this.__v_isShallow||Qn(t)||Dt(t);t=n?t:Y(t),At(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:sn(t),Co(this))}}function gt(e){return ae(e)?e.value:e}const yl={get:(e,t,n)=>gt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ae(a)&&!ae(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function So(e){return Ft(e)?e:new Proxy(e,yl)}class _l{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ba(t,()=>{this._dirty||(this._dirty=!0,Co(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return Oo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function xl(e,t,n=!1){let r,a;const i=z(e);return i?(r=e,a=Ne):(r=e.get,a=e.set),new _l(r,a,i||!a,n)}function ot(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){dr(i,t,n)}return a}function Me(e,t,n,r){if(z(e)){const i=ot(e,t,n,r);return i&&so(i)&&i.catch(o=>{dr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Me(e[i],t,n,r));return a}function dr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ot(l,null,10,[e,o,s]);return}}wl(e,n,a,r)}function wl(e,t,n,r=!0){console.error(e)}let ln=!1,Kr=!1;const me=[];let je=0;const Lt=[];let Be=null,vt=0;const Po=Promise.resolve();let Aa=null;function kl(e){const t=Aa||Po;return e?t.then(this?e.bind(this):e):t}function Al(e){let t=je+1,n=me.length;for(;t<n;){const r=t+n>>>1,a=me[r],i=fn(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function Ea(e){(!me.length||!me.includes(e,ln&&e.allowRecurse?je+1:je))&&(e.id==null?me.push(e):me.splice(Al(e.id),0,e),To())}function To(){!ln&&!Kr&&(Kr=!0,Aa=Po.then(No))}function El(e){const t=me.indexOf(e);t>je&&me.splice(t,1)}function Ol(e){R(e)?Lt.push(...e):(!Be||!Be.includes(e,e.allowRecurse?vt+1:vt))&&Lt.push(e),To()}function ai(e,t=ln?je+1:0){for(;t<me.length;t++){const n=me[t];n&&n.pre&&(me.splice(t,1),t--,n())}}function Io(e){if(Lt.length){const t=[...new Set(Lt)];if(Lt.length=0,Be){Be.push(...t);return}for(Be=t,Be.sort((n,r)=>fn(n)-fn(r)),vt=0;vt<Be.length;vt++)Be[vt]();Be=null,vt=0}}const fn=e=>e.id==null?1/0:e.id,Cl=(e,t)=>{const n=fn(e)-fn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function No(e){Kr=!1,ln=!0,me.sort(Cl);const t=Ne;try{for(je=0;je<me.length;je++){const n=me[je];n&&n.active!==!1&&ot(n,null,14)}}finally{je=0,me.length=0,Io(),ln=!1,Aa=null,(me.length||Lt.length)&&No()}}function Sl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Z;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||Z;h&&(a=n.map(b=>oe(b)?b.trim():b)),m&&(a=n.map(Zn))}let s,l=r[s=Cr(t)]||r[s=Cr(ze(t))];!l&&i&&(l=r[s=Cr(Kt(t))]),l&&Me(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Me(f,e,6,a)}}function Mo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!z(e)){const l=f=>{const u=Mo(f,t,!0);u&&(s=!0,fe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):fe(o,i),G(e)&&r.set(e,o),o)}function mr(e,t){return!e||!lr(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,Kt(t))||B(e,t))}let Ee=null,pr=null;function er(e){const t=Ee;return Ee=e,pr=e&&e.type.__scopeId||null,t}function Pl(e){pr=e}function Tl(){pr=null}function Il(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&hi(-1);const i=er(t);let o;try{o=e(...a)}finally{er(i),r._d&&hi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:h,setupState:b,ctx:F,inheritAttrs:I}=e;let U,w;const A=er(e);try{if(n.shapeFlag&4){const T=a||r;U=$e(u.call(T,T,m,i,b,h,F)),w=l}else{const T=t;U=$e(T.length>1?T(i,{attrs:l,slots:s,emit:f}):T(i,null)),w=t.props?l:Nl(l)}}catch(T){rn.length=0,dr(T,e,1),U=J(Et)}let j=U;if(w&&I!==!1){const T=Object.keys(w),{shapeFlag:W}=j;T.length&&W&7&&(o&&T.some(da)&&(w=Ml(w,o)),j=zt(j,w))}return n.dirs&&(j=zt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),U=j,er(A),U}const Nl=e=>{let t;for(const n in e)(n==="class"||n==="style"||lr(n))&&((t||(t={}))[n]=e[n]);return t},Ml=(e,t)=>{const n={};for(const r in e)(!da(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Rl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ii(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!mr(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ii(r,o,f):!0:!!o;return!1}function ii(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!mr(n,i))return!0}return!1}function Fl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ll=e=>e.__isSuspense;function $l(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Ol(e)}const Mn={};function st(e,t,n){return Ro(e,t,n)}function Ro(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Z){var s;const l=Xs()===((s=le)==null?void 0:s.scope)?le:null;let f,u=!1,m=!1;if(ae(e)?(f=()=>e.value,u=Qn(e)):Ft(e)?(f=()=>e,r=!0):R(e)?(m=!0,u=e.some(T=>Ft(T)||Qn(T)),f=()=>e.map(T=>{if(ae(T))return T.value;if(Ft(T))return yt(T);if(z(T))return ot(T,l,2)})):z(e)?t?f=()=>ot(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return h&&h(),Me(e,l,3,[b])}:f=Ne,t&&r){const T=f;f=()=>yt(T())}let h,b=T=>{h=A.onStop=()=>{ot(T,l,4)}},F;if(un)if(b=Ne,t?n&&Me(t,l,3,[f(),m?[]:void 0,b]):f(),a==="sync"){const T=Mf();F=T.__watcherHandles||(T.__watcherHandles=[])}else return Ne;let I=m?new Array(e.length).fill(Mn):Mn;const U=()=>{if(A.active)if(t){const T=A.run();(r||u||(m?T.some((W,ce)=>At(W,I[ce])):At(T,I)))&&(h&&h(),Me(t,l,3,[T,I===Mn?void 0:m&&I[0]===Mn?[]:I,b]),I=T)}else A.run()};U.allowRecurse=!!t;let w;a==="sync"?w=U:a==="post"?w=()=>ve(U,l&&l.suspense):(U.pre=!0,l&&(U.id=l.uid),w=()=>Ea(U));const A=new ba(f,w);t?n?U():I=A.run():a==="post"?ve(A.run.bind(A),l&&l.suspense):A.run();const j=()=>{A.stop(),l&&l.scope&&ma(l.scope.effects,A)};return F&&F.push(j),j}function jl(e,t,n){const r=this.proxy,a=oe(e)?e.includes(".")?Fo(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,n=t);const o=le;Ut(this);const s=Ro(a,i.bind(r),n);return o?Ut(o):kt(),s}function Fo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function yt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ae(e))yt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)yt(e[n],t);else if(Yt(e)||Rt(e))e.forEach(n=>{yt(n,t)});else if(fo(e))for(const n in e)yt(e[n],t);return e}function Pr(e,t){const n=Ee;if(n===null)return e;const r=yr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=Z]=t[i];o&&(z(o)&&(o={mounted:o,updated:o}),o.deep&&yt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function pt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Wt(),Me(l,n,8,[e.el,s,e,t]),Vt())}}/*! #__NO_SIDE_EFFECTS__ */function Ge(e,t){return z(e)?(()=>fe({name:e.name},t,{setup:e}))():e}const Wn=e=>!!e.type.__asyncLoader,Lo=e=>e.type.__isKeepAlive;function Dl(e,t){$o(e,"a",t)}function zl(e,t){$o(e,"da",t)}function $o(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(hr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Lo(a.parent.vnode)&&Ul(r,t,n,a),a=a.parent}}function Ul(e,t,n,r){const a=hr(t,e,r,!0);Do(()=>{ma(r[t],a)},n)}function hr(e,t,n=le,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Wt(),Ut(n);const s=Me(t,n,e,o);return kt(),Vt(),s});return r?a.unshift(i):a.push(i),i}}const Ze=e=>(t,n=le)=>(!un||e==="sp")&&hr(e,(...r)=>t(...r),n),Hl=Ze("bm"),jo=Ze("m"),Bl=Ze("bu"),Yl=Ze("u"),Kl=Ze("bum"),Do=Ze("um"),Wl=Ze("sp"),Vl=Ze("rtg"),ql=Ze("rtc");function Xl(e,t=le){hr("ec",e,t)}const zo="components";function gr(e,t){return Gl(zo,e,!0,t)||e}const Jl=Symbol.for("v-ndc");function Gl(e,t,n=!0,r=!1){const a=Ee||le;if(a){const i=a.type;if(e===zo){const s=Pf(i,!1);if(s&&(s===t||s===ze(t)||s===cr(ze(t))))return i}const o=oi(a[e]||i[e],t)||oi(a.appContext[e],t);return!o&&r?i:o}}function oi(e,t){return e&&(e[t]||e[ze(t)]||e[cr(ze(t))])}function Ae(e,t,n,r){let a;const i=n&&n[r];if(R(e)||oe(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Wr=e=>e?Go(e)?yr(e)||e.proxy:Wr(e.parent):null,nn=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wr(e.parent),$root:e=>Wr(e.root),$emit:e=>e.emit,$options:e=>Oa(e),$forceUpdate:e=>e.f||(e.f=()=>Ea(e.update)),$nextTick:e=>e.n||(e.n=kl.bind(e.proxy)),$watch:e=>jl.bind(e)}),Tr=(e,t)=>e!==Z&&!e.__isScriptSetup&&B(e,t),Zl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const b=o[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Tr(r,t))return o[t]=1,r[t];if(a!==Z&&B(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&B(f,t))return o[t]=3,i[t];if(n!==Z&&B(n,t))return o[t]=4,n[t];Vr&&(o[t]=0)}}const u=nn[t];let m,h;if(u)return t==="$attrs"&&be(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Z&&B(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,B(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Tr(a,t)?(a[t]=n,!0):r!==Z&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Z&&B(e,o)||Tr(t,o)||(s=i[0])&&B(s,o)||B(r,o)||B(nn,o)||B(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function si(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Vr=!0;function Ql(e){const t=Oa(e),n=e.proxy,r=e.ctx;Vr=!1,t.beforeCreate&&li(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:h,beforeUpdate:b,updated:F,activated:I,deactivated:U,beforeDestroy:w,beforeUnmount:A,destroyed:j,unmounted:T,render:W,renderTracked:ce,renderTriggered:ue,errorCaptured:Oe,serverPrefetch:ke,expose:Ue,inheritAttrs:Xt,components:An,directives:En,filters:Ar}=t;if(f&&ef(f,r,null),o)for(const te in o){const q=o[te];z(q)&&(r[te]=q.bind(n))}if(a){const te=a.call(n,n);G(te)&&(e.data=xa(te))}if(Vr=!0,i)for(const te in i){const q=i[te],dt=z(q)?q.bind(n,n):z(q.get)?q.get.bind(n,n):Ne,On=!z(q)&&z(q.set)?q.set.bind(n):Ne,mt=_e({get:dt,set:On});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>mt.value,set:Re=>mt.value=Re})}if(s)for(const te in s)Uo(s[te],r,n,te);if(l){const te=z(l)?l.call(n):l;Reflect.ownKeys(te).forEach(q=>{sf(q,te[q])})}u&&li(u,e,"c");function pe(te,q){R(q)?q.forEach(dt=>te(dt.bind(n))):q&&te(q.bind(n))}if(pe(Hl,m),pe(jo,h),pe(Bl,b),pe(Yl,F),pe(Dl,I),pe(zl,U),pe(Xl,Oe),pe(ql,ce),pe(Vl,ue),pe(Kl,A),pe(Do,T),pe(Wl,ke),R(Ue))if(Ue.length){const te=e.exposed||(e.exposed={});Ue.forEach(q=>{Object.defineProperty(te,q,{get:()=>n[q],set:dt=>n[q]=dt})})}else e.exposed||(e.exposed={});W&&e.render===Ne&&(e.render=W),Xt!=null&&(e.inheritAttrs=Xt),An&&(e.components=An),En&&(e.directives=En)}function ef(e,t,n=Ne){R(e)&&(e=qr(e));for(const r in e){const a=e[r];let i;G(a)?"default"in a?i=Vn(a.from||r,a.default,!0):i=Vn(a.from||r):i=Vn(a),ae(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function li(e,t,n){Me(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Uo(e,t,n,r){const a=r.includes(".")?Fo(n,r):()=>n[r];if(oe(e)){const i=t[e];z(i)&&st(a,i)}else if(z(e))st(a,e.bind(n));else if(G(e))if(R(e))e.forEach(i=>Uo(i,t,n,r));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&st(a,i,e)}}function Oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>tr(l,f,o,!0)),tr(l,t,o)),G(t)&&i.set(t,l),l}function tr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&tr(e,i,n,!0),a&&a.forEach(o=>tr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=tf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const tf={data:fi,props:ci,emits:ci,methods:en,computed:en,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:en,directives:en,watch:rf,provide:fi,inject:nf};function fi(e,t){return t?e?function(){return fe(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function nf(e,t){return en(qr(e),qr(t))}function qr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function en(e,t){return e?fe(Object.create(null),e,t):t}function ci(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:fe(Object.create(null),si(e),si(t??{})):t}function rf(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function Ho(){return{app:null,config:{isNativeTag:Rs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let af=0;function of(e,t){return function(r,a=null){z(r)||(r=fe({},r)),a!=null&&!G(a)&&(a=null);const i=Ho(),o=new WeakSet;let s=!1;const l=i.app={_uid:af++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Rf,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&z(f.install)?(o.add(f),f.install(l,...u)):z(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,m){if(!s){const h=J(r,a);return h.appContext=i,u&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,yr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l},runWithContext(f){nr=l;try{return f()}finally{nr=null}}};return l}}let nr=null;function sf(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function Vn(e,t,n=!1){const r=le||Ee;if(r||nr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:nr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&z(t)?t.call(r&&r.proxy):t}}function lf(e,t,n,r=!1){const a={},i={};Gn(i,br,1),e.propsDefaults=Object.create(null),Bo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:gl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function ff(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(mr(e.emitsOptions,h))continue;const b=t[h];if(l)if(B(i,h))b!==i[h]&&(i[h]=b,f=!0);else{const F=ze(h);a[F]=Xr(l,s,F,b,e,!1)}else b!==i[h]&&(i[h]=b,f=!0)}}}else{Bo(e,t,a,i)&&(f=!0);let u;for(const m in s)(!t||!B(t,m)&&((u=Kt(m))===m||!B(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Xr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!B(t,m))&&(delete i[m],f=!0)}f&&Ke(e,"set","$attrs")}function Bo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Yn(l))continue;const f=t[l];let u;a&&B(a,u=ze(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:mr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=Y(n),f=s||Z;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Xr(a,l,m,f[m],e,!B(f,m))}}return o}function Xr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&z(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Ut(a),r=f[n]=l.call(null,t),kt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Kt(n))&&(r=!0))}return r}function Yo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!z(e)){const u=m=>{l=!0;const[h,b]=Yo(m,t,!0);fe(o,h),b&&s.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return G(e)&&r.set(e,Mt),Mt;if(R(i))for(let u=0;u<i.length;u++){const m=ze(i[u]);ui(m)&&(o[m]=Z)}else if(i)for(const u in i){const m=ze(u);if(ui(m)){const h=i[u],b=o[m]=R(h)||z(h)?{type:h}:fe({},h);if(b){const F=pi(Boolean,b.type),I=pi(String,b.type);b[0]=F>-1,b[1]=I<0||F<I,(F>-1||B(b,"default"))&&s.push(m)}}}const f=[o,s];return G(e)&&r.set(e,f),f}function ui(e){return e[0]!=="$"}function di(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function mi(e,t){return di(e)===di(t)}function pi(e,t){return R(t)?t.findIndex(n=>mi(n,e)):z(t)&&mi(t,e)?0:-1}const Ko=e=>e[0]==="_"||e==="$stable",Ca=e=>R(e)?e.map($e):[$e(e)],cf=(e,t,n)=>{if(t._n)return t;const r=Il((...a)=>Ca(t(...a)),n);return r._c=!1,r},Wo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Ko(a))continue;const i=e[a];if(z(i))t[a]=cf(a,i,r);else if(i!=null){const o=Ca(i);t[a]=()=>o}}},Vo=(e,t)=>{const n=Ca(t);e.slots.default=()=>n},uf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Gn(t,"_",n)):Wo(t,e.slots={})}else e.slots={},t&&Vo(e,t);Gn(e.slots,br,1)},df=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Z;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Wo(t,a)),o=t}else t&&(Vo(e,t),o={default:1});if(i)for(const s in a)!Ko(s)&&o[s]==null&&delete a[s]};function Jr(e,t,n,r,a=!1){if(R(e)){e.forEach((h,b)=>Jr(h,t&&(R(t)?t[b]:t),n,r,a));return}if(Wn(r)&&!a)return;const i=r.shapeFlag&4?yr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,u=s.refs===Z?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(oe(f)?(u[f]=null,B(m,f)&&(m[f]=null)):ae(f)&&(f.value=null)),z(l))ot(l,s,12,[o,u]);else{const h=oe(l),b=ae(l);if(h||b){const F=()=>{if(e.f){const I=h?B(m,l)?m[l]:u[l]:l.value;a?R(I)&&ma(I,i):R(I)?I.includes(i)||I.push(i):h?(u[l]=[i],B(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,B(m,l)&&(m[l]=o)):b&&(l.value=o,e.k&&(u[e.k]=o))};o?(F.id=-1,ve(F,n)):F()}}}const ve=$l;function mf(e){return pf(e)}function pf(e,t){const n=zr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:h,setScopeId:b=Ne,insertStaticContent:F}=e,I=(c,d,p,g=null,v=null,x=null,E=!1,_=null,k=!!d.dynamicChildren)=>{if(c===d)return;c&&!Gt(c,d)&&(g=Cn(c),Re(c,v,x,!0),c=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:y,ref:N,shapeFlag:S}=d;switch(y){case vr:U(c,d,p,g);break;case Et:w(c,d,p,g);break;case Ir:c==null&&A(d,p,g,E);break;case K:An(c,d,p,g,v,x,E,_,k);break;default:S&1?W(c,d,p,g,v,x,E,_,k):S&6?En(c,d,p,g,v,x,E,_,k):(S&64||S&128)&&y.process(c,d,p,g,v,x,E,_,k,St)}N!=null&&v&&Jr(N,c&&c.ref,x,d||c,!d)},U=(c,d,p,g)=>{if(c==null)r(d.el=s(d.children),p,g);else{const v=d.el=c.el;d.children!==c.children&&f(v,d.children)}},w=(c,d,p,g)=>{c==null?r(d.el=l(d.children||""),p,g):d.el=c.el},A=(c,d,p,g)=>{[c.el,c.anchor]=F(c.children,d,p,g,c.el,c.anchor)},j=({el:c,anchor:d},p,g)=>{let v;for(;c&&c!==d;)v=h(c),r(c,p,g),c=v;r(d,p,g)},T=({el:c,anchor:d})=>{let p;for(;c&&c!==d;)p=h(c),a(c),c=p;a(d)},W=(c,d,p,g,v,x,E,_,k)=>{E=E||d.type==="svg",c==null?ce(d,p,g,v,x,E,_,k):ke(c,d,v,x,E,_,k)},ce=(c,d,p,g,v,x,E,_)=>{let k,y;const{type:N,props:S,shapeFlag:M,transition:D,dirs:H}=c;if(k=c.el=o(c.type,x,S&&S.is,S),M&8?u(k,c.children):M&16&&Oe(c.children,k,null,g,v,x&&N!=="foreignObject",E,_),H&&pt(c,null,g,"created"),ue(k,c,c.scopeId,E,g),S){for(const V in S)V!=="value"&&!Yn(V)&&i(k,V,null,S[V],x,c.children,g,v,He);"value"in S&&i(k,"value",null,S.value),(y=S.onVnodeBeforeMount)&&Le(y,g,c)}H&&pt(c,null,g,"beforeMount");const X=hf(v,D);X&&D.beforeEnter(k),r(k,d,p),((y=S&&S.onVnodeMounted)||X||H)&&ve(()=>{y&&Le(y,g,c),X&&D.enter(k),H&&pt(c,null,g,"mounted")},v)},ue=(c,d,p,g,v)=>{if(p&&b(c,p),g)for(let x=0;x<g.length;x++)b(c,g[x]);if(v){let x=v.subTree;if(d===x){const E=v.vnode;ue(c,E,E.scopeId,E.slotScopeIds,v.parent)}}},Oe=(c,d,p,g,v,x,E,_,k=0)=>{for(let y=k;y<c.length;y++){const N=c[y]=_?nt(c[y]):$e(c[y]);I(null,N,d,p,g,v,x,E,_)}},ke=(c,d,p,g,v,x,E)=>{const _=d.el=c.el;let{patchFlag:k,dynamicChildren:y,dirs:N}=d;k|=c.patchFlag&16;const S=c.props||Z,M=d.props||Z;let D;p&&ht(p,!1),(D=M.onVnodeBeforeUpdate)&&Le(D,p,d,c),N&&pt(d,c,p,"beforeUpdate"),p&&ht(p,!0);const H=v&&d.type!=="foreignObject";if(y?Ue(c.dynamicChildren,y,_,p,g,H,x):E||q(c,d,_,null,p,g,H,x,!1),k>0){if(k&16)Xt(_,d,S,M,p,g,v);else if(k&2&&S.class!==M.class&&i(_,"class",null,M.class,v),k&4&&i(_,"style",S.style,M.style,v),k&8){const X=d.dynamicProps;for(let V=0;V<X.length;V++){const re=X[V],Ce=S[re],Pt=M[re];(Pt!==Ce||re==="value")&&i(_,re,Ce,Pt,v,c.children,p,g,He)}}k&1&&c.children!==d.children&&u(_,d.children)}else!E&&y==null&&Xt(_,d,S,M,p,g,v);((D=M.onVnodeUpdated)||N)&&ve(()=>{D&&Le(D,p,d,c),N&&pt(d,c,p,"updated")},g)},Ue=(c,d,p,g,v,x,E)=>{for(let _=0;_<d.length;_++){const k=c[_],y=d[_],N=k.el&&(k.type===K||!Gt(k,y)||k.shapeFlag&70)?m(k.el):p;I(k,y,N,null,g,v,x,E,!0)}},Xt=(c,d,p,g,v,x,E)=>{if(p!==g){if(p!==Z)for(const _ in p)!Yn(_)&&!(_ in g)&&i(c,_,p[_],null,E,d.children,v,x,He);for(const _ in g){if(Yn(_))continue;const k=g[_],y=p[_];k!==y&&_!=="value"&&i(c,_,y,k,E,d.children,v,x,He)}"value"in g&&i(c,"value",p.value,g.value)}},An=(c,d,p,g,v,x,E,_,k)=>{const y=d.el=c?c.el:s(""),N=d.anchor=c?c.anchor:s("");let{patchFlag:S,dynamicChildren:M,slotScopeIds:D}=d;D&&(_=_?_.concat(D):D),c==null?(r(y,p,g),r(N,p,g),Oe(d.children,p,N,v,x,E,_,k)):S>0&&S&64&&M&&c.dynamicChildren?(Ue(c.dynamicChildren,M,p,v,x,E,_),(d.key!=null||v&&d===v.subTree)&&qo(c,d,!0)):q(c,d,p,N,v,x,E,_,k)},En=(c,d,p,g,v,x,E,_,k)=>{d.slotScopeIds=_,c==null?d.shapeFlag&512?v.ctx.activate(d,p,g,E,k):Ar(d,p,g,v,x,E,k):Ba(c,d,k)},Ar=(c,d,p,g,v,x,E)=>{const _=c.component=Af(c,g,v);if(Lo(c)&&(_.ctx.renderer=St),Ef(_),_.asyncDep){if(v&&v.registerDep(_,pe),!c.el){const k=_.subTree=J(Et);w(null,k,d,p)}return}pe(_,c,d,p,v,x,E)},Ba=(c,d,p)=>{const g=d.component=c.component;if(Rl(c,d,p))if(g.asyncDep&&!g.asyncResolved){te(g,d,p);return}else g.next=d,El(g.update),g.update();else d.el=c.el,g.vnode=d},pe=(c,d,p,g,v,x,E)=>{const _=()=>{if(c.isMounted){let{next:N,bu:S,u:M,parent:D,vnode:H}=c,X=N,V;ht(c,!1),N?(N.el=H.el,te(c,N,E)):N=H,S&&Kn(S),(V=N.props&&N.props.onVnodeBeforeUpdate)&&Le(V,D,N,H),ht(c,!0);const re=Sr(c),Ce=c.subTree;c.subTree=re,I(Ce,re,m(Ce.el),Cn(Ce),c,v,x),N.el=re.el,X===null&&Fl(c,re.el),M&&ve(M,v),(V=N.props&&N.props.onVnodeUpdated)&&ve(()=>Le(V,D,N,H),v)}else{let N;const{el:S,props:M}=d,{bm:D,m:H,parent:X}=c,V=Wn(d);if(ht(c,!1),D&&Kn(D),!V&&(N=M&&M.onVnodeBeforeMount)&&Le(N,X,d),ht(c,!0),S&&Or){const re=()=>{c.subTree=Sr(c),Or(S,c.subTree,c,v,null)};V?d.type.__asyncLoader().then(()=>!c.isUnmounted&&re()):re()}else{const re=c.subTree=Sr(c);I(null,re,p,g,c,v,x),d.el=re.el}if(H&&ve(H,v),!V&&(N=M&&M.onVnodeMounted)){const re=d;ve(()=>Le(N,X,re),v)}(d.shapeFlag&256||X&&Wn(X.vnode)&&X.vnode.shapeFlag&256)&&c.a&&ve(c.a,v),c.isMounted=!0,d=p=g=null}},k=c.effect=new ba(_,()=>Ea(y),c.scope),y=c.update=()=>k.run();y.id=c.uid,ht(c,!0),y()},te=(c,d,p)=>{d.component=c;const g=c.vnode.props;c.vnode=d,c.next=null,ff(c,d.props,g,p),df(c,d.children,p),Wt(),ai(),Vt()},q=(c,d,p,g,v,x,E,_,k=!1)=>{const y=c&&c.children,N=c?c.shapeFlag:0,S=d.children,{patchFlag:M,shapeFlag:D}=d;if(M>0){if(M&128){On(y,S,p,g,v,x,E,_,k);return}else if(M&256){dt(y,S,p,g,v,x,E,_,k);return}}D&8?(N&16&&He(y,v,x),S!==y&&u(p,S)):N&16?D&16?On(y,S,p,g,v,x,E,_,k):He(y,v,x,!0):(N&8&&u(p,""),D&16&&Oe(S,p,g,v,x,E,_,k))},dt=(c,d,p,g,v,x,E,_,k)=>{c=c||Mt,d=d||Mt;const y=c.length,N=d.length,S=Math.min(y,N);let M;for(M=0;M<S;M++){const D=d[M]=k?nt(d[M]):$e(d[M]);I(c[M],D,p,null,v,x,E,_,k)}y>N?He(c,v,x,!0,!1,S):Oe(d,p,g,v,x,E,_,k,S)},On=(c,d,p,g,v,x,E,_,k)=>{let y=0;const N=d.length;let S=c.length-1,M=N-1;for(;y<=S&&y<=M;){const D=c[y],H=d[y]=k?nt(d[y]):$e(d[y]);if(Gt(D,H))I(D,H,p,null,v,x,E,_,k);else break;y++}for(;y<=S&&y<=M;){const D=c[S],H=d[M]=k?nt(d[M]):$e(d[M]);if(Gt(D,H))I(D,H,p,null,v,x,E,_,k);else break;S--,M--}if(y>S){if(y<=M){const D=M+1,H=D<N?d[D].el:g;for(;y<=M;)I(null,d[y]=k?nt(d[y]):$e(d[y]),p,H,v,x,E,_,k),y++}}else if(y>M)for(;y<=S;)Re(c[y],v,x,!0),y++;else{const D=y,H=y,X=new Map;for(y=H;y<=M;y++){const ye=d[y]=k?nt(d[y]):$e(d[y]);ye.key!=null&&X.set(ye.key,y)}let V,re=0;const Ce=M-H+1;let Pt=!1,Wa=0;const Jt=new Array(Ce);for(y=0;y<Ce;y++)Jt[y]=0;for(y=D;y<=S;y++){const ye=c[y];if(re>=Ce){Re(ye,v,x,!0);continue}let Fe;if(ye.key!=null)Fe=X.get(ye.key);else for(V=H;V<=M;V++)if(Jt[V-H]===0&&Gt(ye,d[V])){Fe=V;break}Fe===void 0?Re(ye,v,x,!0):(Jt[Fe-H]=y+1,Fe>=Wa?Wa=Fe:Pt=!0,I(ye,d[Fe],p,null,v,x,E,_,k),re++)}const Va=Pt?gf(Jt):Mt;for(V=Va.length-1,y=Ce-1;y>=0;y--){const ye=H+y,Fe=d[ye],qa=ye+1<N?d[ye+1].el:g;Jt[y]===0?I(null,Fe,p,qa,v,x,E,_,k):Pt&&(V<0||y!==Va[V]?mt(Fe,p,qa,2):V--)}}},mt=(c,d,p,g,v=null)=>{const{el:x,type:E,transition:_,children:k,shapeFlag:y}=c;if(y&6){mt(c.component.subTree,d,p,g);return}if(y&128){c.suspense.move(d,p,g);return}if(y&64){E.move(c,d,p,St);return}if(E===K){r(x,d,p);for(let S=0;S<k.length;S++)mt(k[S],d,p,g);r(c.anchor,d,p);return}if(E===Ir){j(c,d,p);return}if(g!==2&&y&1&&_)if(g===0)_.beforeEnter(x),r(x,d,p),ve(()=>_.enter(x),v);else{const{leave:S,delayLeave:M,afterLeave:D}=_,H=()=>r(x,d,p),X=()=>{S(x,()=>{H(),D&&D()})};M?M(x,H,X):X()}else r(x,d,p)},Re=(c,d,p,g=!1,v=!1)=>{const{type:x,props:E,ref:_,children:k,dynamicChildren:y,shapeFlag:N,patchFlag:S,dirs:M}=c;if(_!=null&&Jr(_,null,p,c,!0),N&256){d.ctx.deactivate(c);return}const D=N&1&&M,H=!Wn(c);let X;if(H&&(X=E&&E.onVnodeBeforeUnmount)&&Le(X,d,c),N&6)Ms(c.component,p,g);else{if(N&128){c.suspense.unmount(p,g);return}D&&pt(c,null,d,"beforeUnmount"),N&64?c.type.remove(c,d,p,v,St,g):y&&(x!==K||S>0&&S&64)?He(y,d,p,!1,!0):(x===K&&S&384||!v&&N&16)&&He(k,d,p),g&&Ya(c)}(H&&(X=E&&E.onVnodeUnmounted)||D)&&ve(()=>{X&&Le(X,d,c),D&&pt(c,null,d,"unmounted")},p)},Ya=c=>{const{type:d,el:p,anchor:g,transition:v}=c;if(d===K){Ns(p,g);return}if(d===Ir){T(c);return}const x=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:E,delayLeave:_}=v,k=()=>E(p,x);_?_(c.el,x,k):k()}else x()},Ns=(c,d)=>{let p;for(;c!==d;)p=h(c),a(c),c=p;a(d)},Ms=(c,d,p)=>{const{bum:g,scope:v,update:x,subTree:E,um:_}=c;g&&Kn(g),v.stop(),x&&(x.active=!1,Re(E,c,d,p)),_&&ve(_,d),ve(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},He=(c,d,p,g=!1,v=!1,x=0)=>{for(let E=x;E<c.length;E++)Re(c[E],d,p,g,v)},Cn=c=>c.shapeFlag&6?Cn(c.component.subTree):c.shapeFlag&128?c.suspense.next():h(c.anchor||c.el),Ka=(c,d,p)=>{c==null?d._vnode&&Re(d._vnode,null,null,!0):I(d._vnode||null,c,d,null,null,null,p),ai(),Io(),d._vnode=c},St={p:I,um:Re,m:mt,r:Ya,mt:Ar,mc:Oe,pc:q,pbc:Ue,n:Cn,o:e};let Er,Or;return t&&([Er,Or]=t(St)),{render:Ka,hydrate:Er,createApp:of(Ka,Er)}}function ht({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function hf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function qo(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=nt(a[i]),s.el=o.el),n||qo(o,s)),s.type===vr&&(s.el=o.el)}}function gf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const vf=e=>e.__isTeleport,K=Symbol.for("v-fgt"),vr=Symbol.for("v-txt"),Et=Symbol.for("v-cmt"),Ir=Symbol.for("v-stc"),rn=[];let Te=null;function L(e=!1){rn.push(Te=e?null:[])}function bf(){rn.pop(),Te=rn[rn.length-1]||null}let cn=1;function hi(e){cn+=e}function Xo(e){return e.dynamicChildren=cn>0?Te||Mt:null,bf(),cn>0&&Te&&Te.push(e),e}function $(e,t,n,r,a,i){return Xo(C(e,t,n,r,a,i,!0))}function rr(e,t,n,r,a){return Xo(J(e,t,n,r,a,!0))}function Gr(e){return e?e.__v_isVNode===!0:!1}function Gt(e,t){return e.type===t.type&&e.key===t.key}const br="__vInternal",Jo=({key:e})=>e??null,qn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||ae(e)||z(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function C(e,t=null,n=null,r=0,a=null,i=e===K?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jo(t),ref:t&&qn(t),scopeId:pr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ee};return s?(Sa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=oe(n)?8:16),cn>0&&!o&&Te&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Te.push(l),l}const J=yf;function yf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Jl)&&(e=Et),Gr(e)){const s=zt(e,t,!0);return n&&Sa(s,n),cn>0&&!i&&Te&&(s.shapeFlag&6?Te[Te.indexOf(e)]=s:Te.push(s)),s.patchFlag|=-2,s}if(Tf(e)&&(e=e.__vccOpts),t){t=_f(t);let{class:s,style:l}=t;s&&!oe(s)&&(t.class=yn(s)),G(l)&&(Ao(l)&&!R(l)&&(l=fe({},l)),t.style=ha(l))}const o=oe(e)?1:Ll(e)?128:vf(e)?64:G(e)?4:z(e)?2:0;return C(e,t,n,r,a,o,i,!0)}function _f(e){return e?Ao(e)||br in e?fe({},e):e:null}function zt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?xf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Jo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(qn(t)):[a,qn(t)]:qn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==K?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zt(e.ssContent),ssFallback:e.ssFallback&&zt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function at(e=" ",t=0){return J(vr,null,e,t)}function de(e="",t=!1){return t?(L(),rr(Et,null,e)):J(Et,null,e)}function $e(e){return e==null||typeof e=="boolean"?J(Et):R(e)?J(K,null,e.slice()):typeof e=="object"?nt(e):J(vr,null,String(e))}function nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:zt(e)}function Sa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Sa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(br in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[at(t)]):n=8);e.children=t,e.shapeFlag|=n}function xf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=yn([t.class,r.class]));else if(a==="style")t.style=ha([t.style,r.style]);else if(lr(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Le(e,t,n,r=null){Me(e,t,7,[n,r])}const wf=Ho();let kf=0;function Af(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||wf,i={uid:kf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yo(r,a),emitsOptions:Mo(r,a),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Sl.bind(null,i),e.ce&&e.ce(i),i}let le=null,Pa,Tt,gi="__VUE_INSTANCE_SETTERS__";(Tt=zr()[gi])||(Tt=zr()[gi]=[]),Tt.push(e=>le=e),Pa=e=>{Tt.length>1?Tt.forEach(t=>t(e)):Tt[0](e)};const Ut=e=>{Pa(e),e.scope.on()},kt=()=>{le&&le.scope.off(),Pa(null)};function Go(e){return e.vnode.shapeFlag&4}let un=!1;function Ef(e,t=!1){un=t;const{props:n,children:r}=e.vnode,a=Go(e);lf(e,n,a,t),uf(e,r);const i=a?Of(e,t):void 0;return un=!1,i}function Of(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Eo(new Proxy(e.ctx,Zl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Sf(e):null;Ut(e),Wt();const i=ot(r,e,0,[e.props,a]);if(Vt(),kt(),so(i)){if(i.then(kt,kt),t)return i.then(o=>{vi(e,o,t)}).catch(o=>{dr(o,e,0)});e.asyncDep=i}else vi(e,i,t)}else Zo(e,t)}function vi(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=So(t)),Zo(e,n)}let bi;function Zo(e,t,n){const r=e.type;if(!e.render){if(!t&&bi&&!r.render){const a=r.template||Oa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=bi(a,f)}}e.render=r.render||Ne}{Ut(e),Wt();try{Ql(e)}finally{Vt(),kt()}}}function Cf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return be(e,"get","$attrs"),t[n]}}))}function Sf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Cf(e)},slots:e.slots,emit:e.emit,expose:t}}function yr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(So(Eo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in nn)return nn[n](e)},has(t,n){return n in t||n in nn}}))}function Pf(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function Tf(e){return z(e)&&"__vccOpts"in e}const _e=(e,t)=>xl(e,t,un);function If(e,t,n){const r=arguments.length;return r===2?G(t)&&!R(t)?Gr(t)?J(e,null,[t]):J(e,t):J(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gr(n)&&(n=[n]),J(e,t,n))}const Nf=Symbol.for("v-scx"),Mf=()=>Vn(Nf),Rf="3.3.7",Ff="http://www.w3.org/2000/svg",bt=typeof document<"u"?document:null,yi=bt&&bt.createElement("template"),Lf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?bt.createElementNS(Ff,e):bt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>bt.createTextNode(e),createComment:e=>bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{yi.innerHTML=r?`<svg>${e}</svg>`:e;const s=yi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},$f=Symbol("_vtc");function jf(e,t,n){const r=e[$f];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Df=Symbol("_vod");function zf(e,t,n){const r=e.style,a=oe(n);if(n&&!a){if(t&&!oe(t))for(const i in t)n[i]==null&&Zr(r,i,"");for(const i in n)Zr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Df in e&&(r.display=i)}}const _i=/\s*!important$/;function Zr(e,t,n){if(R(n))n.forEach(r=>Zr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Uf(e,t);_i.test(n)?e.setProperty(Kt(r),n.replace(_i,""),"important"):e[r]=n}}const xi=["Webkit","Moz","ms"],Nr={};function Uf(e,t){const n=Nr[t];if(n)return n;let r=ze(t);if(r!=="filter"&&r in e)return Nr[t]=r;r=cr(r);for(let a=0;a<xi.length;a++){const i=xi[a]+r;if(i in e)return Nr[t]=i}return t}const wi="http://www.w3.org/1999/xlink";function Hf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(wi,t.slice(6,t.length)):e.setAttributeNS(wi,t,n);else{const i=Ks(t);n==null||i&&!co(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Bf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";f!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=co(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function rt(e,t,n,r){e.addEventListener(t,n,r)}function Yf(e,t,n,r){e.removeEventListener(t,n,r)}const ki=Symbol("_vei");function Kf(e,t,n,r,a=null){const i=e[ki]||(e[ki]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Wf(t);if(r){const f=i[t]=Xf(r,a);rt(e,s,f,l)}else o&&(Yf(e,s,o,l),i[t]=void 0)}}const Ai=/(?:Once|Passive|Capture)$/;function Wf(e){let t;if(Ai.test(e)){t={};let r;for(;r=e.match(Ai);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Kt(e.slice(2)),t]}let Mr=0;const Vf=Promise.resolve(),qf=()=>Mr||(Vf.then(()=>Mr=0),Mr=Date.now());function Xf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(Jf(r,n.value),t,5,[r])};return n.value=e,n.attached=qf(),n}function Jf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ei=/^on[a-z]/,Gf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?jf(e,r,a):t==="style"?zf(e,n,r):lr(t)?da(t)||Kf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Zf(e,t,r,a))?Bf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Hf(e,t,r,a))};function Zf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ei.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ei.test(t)&&oe(n)?!1:t in e}const Ht=e=>{const t=e.props["onUpdate:modelValue"]||!1;return R(t)?n=>Kn(t,n):t};function Qf(e){e.target.composing=!0}function Oi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ve=Symbol("_assign"),ec={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Ve]=Ht(a);const i=r||a.props&&a.props.type==="number";rt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Zn(s)),e[Ve](s)}),n&&rt(e,"change",()=>{e.value=e.value.trim()}),t||(rt(e,"compositionstart",Qf),rt(e,"compositionend",Oi),rt(e,"change",Oi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Ve]=Ht(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Zn(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},tc={deep:!0,created(e,t,n){e[Ve]=Ht(n),rt(e,"change",()=>{const r=e._modelValue,a=dn(e),i=e.checked,o=e[Ve];if(R(r)){const s=ga(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const f=[...r];f.splice(s,1),o(f)}}else if(Yt(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(Qo(e,i))})},mounted:Ci,beforeUpdate(e,t,n){e[Ve]=Ht(n),Ci(e,t,n)}};function Ci(e,{value:t,oldValue:n},r){e._modelValue=t,R(t)?e.checked=ga(t,r.props.value)>-1:Yt(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=_n(t,Qo(e,!0)))}const nc={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=Yt(t);rt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Zn(dn(o)):dn(o));e[Ve](e.multiple?a?new Set(i):i:i[0])}),e[Ve]=Ht(r)},mounted(e,{value:t}){Si(e,t)},beforeUpdate(e,t,n){e[Ve]=Ht(n)},updated(e,{value:t}){Si(e,t)}};function Si(e,t){const n=e.multiple;if(!(n&&!R(t)&&!Yt(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=dn(i);if(n)R(t)?i.selected=ga(t,o)>-1:i.selected=t.has(o);else if(_n(dn(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function dn(e){return"_value"in e?e._value:e.value}function Qo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const rc=["ctrl","shift","alt","meta"],ac={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>rc.some(n=>e[`${n}Key`]&&!t.includes(n))},ic=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=ac[t[a]];if(i&&i(n,t))return}return e(n,...r)},oc=fe({patchProp:Gf},Lf);let Pi;function sc(){return Pi||(Pi=mf(oc))}const lc=(...e)=>{const t=sc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=fc(r);if(!a)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function fc(e){return oe(e)?document.querySelector(e):e}let Rr=null;function cc(){return Rr===null&&(Rr=fetch("./assets/data.json").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})),Rr}const uc={class:"container-fluid d-flex flex-wrap justify-content-center py-3 mb-4 text-bg-secondary"},dc={class:"d-flex fs-4 mb-0 me-md-auto"},mc={class:"fs-4 text-decoration-none text-light",href:"https://github.com/mlocati/unipoints"},pc=Ge({__name:"HeaderElement",props:{unicodeVersion:{}},setup(e){return(t,n)=>{const r=gr("font-awesome-icon");return L(),$("header",uc,[C("h1",dc,"Codepoints from Unicode v"+ie(t.unicodeVersion),1),C("a",mc,[J(r,{icon:["fab","github"]})])])}}}),Ti={};function hc(e){var n,r,a,i,o,s,l;const t=[e.name.toUpperCase()];return e.unicode1Name!==void 0&&t.push(e.unicode1Name.toUpperCase()),(n=e.formalAliases)==null||n.forEach(f=>t.push(f.toUpperCase())),(r=e.informativeAliases)==null||r.forEach(f=>t.push(f.toUpperCase())),(a=e.correctedNames)==null||a.forEach(f=>t.push(f.toUpperCase())),(i=e.controlNames)==null||i.forEach(f=>t.push(f.toUpperCase())),(o=e.alternateNames)==null||o.forEach(f=>t.push(f.toUpperCase())),(s=e.figments)==null||s.forEach(f=>t.push(f.toUpperCase())),(l=e.abbreviations)==null||l.forEach(f=>t.push(f.toUpperCase())),t}function es(e){return Ti[e.id]??(Ti[e.id]=hc(e))}function gc(e,t){return es(e).some(n=>t.every(r=>n.includes(r)))}function vc(e,t){return es(e).some(n=>t.test(n))}const bc={class:"container"},yc={class:"input-group mb-3"},_c=C("span",{class:"input-group-text"},"Block",-1),xc=C("option",{value:null},"any",-1),wc=["label"],kc={key:0,disabled:""},Ac=["value"],Ec=C("span",{class:"input-group-text"},"Search",-1),Oc=["placeholder"],Cc={class:"input-group-text"},Sc=Ge({__name:"DataFilter",props:{unipointsData:{}},emits:["change"],setup(e,{emit:t}){const n=e;let r=We(null),a=We(""),i=null,o=We(!1);const s=_e(()=>{if(a.value.length===0)return null;try{return new RegExp(a.value,"i")}catch{return null}});function l(){i!==null&&(clearTimeout(i),i=null)}const f=t;st(r,async()=>{u()}),st(a,async()=>{l(),i=setTimeout(()=>u(),300)}),st(o,async()=>{u()});function u(){l();const m=a.value.split(/\s+/).filter(F=>F.length>0).map(F=>F.toUpperCase()),h=[],b=s.value;n.unipointsData!==null&&n.unipointsData.planes.forEach(F=>{if(r.value!==null&&r.value.plane!==F.id)return;const I=[];F.blocks.forEach(U=>{if(r.value!==null&&r.value.block!==void 0&&r.value.block!==U.codename)return;let w;if(o.value){if(b===null)return;w=U.codepoints.filter(A=>vc(A,b))}else m.length===0?w=U.codepoints:w=U.codepoints.filter(A=>gc(A,m));w.length!==0&&I.push({block:U,codepoints:w})}),I.length!==0&&h.push({plane:F,blocks:I})}),f("change",h)}return jo(()=>u()),(m,h)=>(L(),$("div",bc,[C("div",yc,[_c,m.unipointsData!==null?Pr((L(),$("select",{key:0,class:"form-control","onUpdate:modelValue":h[0]||(h[0]=b=>ae(r)?r.value=b:r=b)},[xc,(L(!0),$(K,null,Ae(m.unipointsData.planes,b=>(L(),$("optgroup",{key:b.id.toString(),label:`Plane ${b.id}`+(b.name!==""?` (${b.name})`:b.unassigned?" (unassigned)":"")},[b.blocks.length===0?(L(),$("option",kc,"No blocks in this plane")):(L(!0),$(K,{key:1},Ae(b.blocks,F=>(L(),$("option",{key:`${b.id}-${F.codename}`,value:{plane:b.id,block:F.codename}},ie(F.name),9,Ac))),128))],8,wc))),128))],512)),[[nc,gt(r)]]):de("",!0),Ec,Pr(C("input",{type:"search",class:yn(["form-control",gt(o)?s.value===null?"font-monospace is-invalid":"font-monospace is-valid":""]),"onUpdate:modelValue":h[1]||(h[1]=b=>ae(a)?a.value=b:a=b),placeholder:gt(o)?"Filter by regular expression":"Filter by name"},null,10,Oc),[[ec,gt(a),void 0,{trim:!0}]]),C("div",Cc,[C("label",null,[Pr(C("input",{type:"checkbox",class:"form-check-input me-","onUpdate:modelValue":h[2]||(h[2]=b=>ae(o)?o.value=b:o=b)},null,512),[[tc,gt(o)]]),at(" rx ")])])])]))}}),Pc={class:"text-center text-light bg-dark p-2"},Tc={class:"mb-0"},Ic=Ge({__name:"PlaneViewer",props:{plane:{}},setup(e){return(t,n)=>(L(),$("div",Pc,[C("h3",Tc,[at(" Plane "+ie(t.plane.id)+" ",1),t.plane.name!==""?(L(),$(K,{key:0},[at(" ("),t.plane.shortName!==""?(L(),$(K,{key:0},[at(ie(t.plane.shortName)+" - ",1)],64)):de("",!0),at(ie(t.plane.name)+") ",1)],64)):de("",!0)])]))}}),Nc={class:"text-center text-light bg-secondary p-2"},Mc={class:"mb-0"},Ii=Ge({__name:"BlockViewer",props:{block:{}},setup(e){return(t,n)=>(L(),$("div",Nc,[C("h4",Mc,ie(t.block.name),1)]))}}),Rc={class:"copiable"},Fc={key:0},Ni="bg-success",Mi="bg-danger",Lc=Ge({__name:"CopiableText",props:{text:{},displayText:{},code:{type:[Boolean,null]}},setup(e){var f;const t=e,n=_e(()=>t.displayText??t.text),r=We(null);let a=null;function i(){r.value===null||a===null||(clearTimeout(a),a=null,r.value.classList.remove(Ni,Mi))}function o(u){i(),r.value!==null&&(r.value.classList.add(u?Ni:Mi),a=setTimeout(()=>i(),500))}let s;(f=navigator==null?void 0:navigator.clipboard)!=null&&f.writeText?s=()=>navigator.clipboard.writeText(t.text):s=()=>new Promise((u,m)=>{const h=document.createElement("textarea");h.style.width="1px",h.style.height="1px",h.style.overflow="hidden",h.style.top="0",h.style.left="0",h.style.position="fixed",h.value=t.text,document.body.appendChild(h);try{h.focus(),h.select(),document.execCommand("copy")?u():m(new Error("Copy command failed"))}catch(b){m(b)}finally{document.body.removeChild(h)}});function l(u){u.preventDefault(),i(),s().then(()=>{o(!0)}).catch(m=>{console.error(m),o(!1)})}return(u,m)=>{const h=gr("font-awesome-icon");return L(),$("span",Rc,[u.code?(L(),$("code",Fc,ie(n.value),1)):(L(),$(K,{key:1},[at(ie(n.value),1)],64)),C("a",{href:"#",title:"Copy to clipboard",ref_key:"link",ref:r,onClick:l},[J(h,{icon:["far","copy"]})],512)])}}});const ts=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Zt=ts(Lc,[["__scopeId","data-v-c42c3166"]]),xe=e=>(Pl("data-v-d511621c"),e=e(),Tl(),e),$c={class:"char"},jc={class:"mb-0"},Dc={class:"m-0"},zc={key:0,class:"details"},Uc={colspan:"99"},Hc={class:"container mx-4"},Bc={class:"row"},Yc={class:"col"},Kc=xe(()=>C("dt",null,"PHP",-1)),Wc=xe(()=>C("dt",null,"JavaScript",-1)),Vc=xe(()=>C("dt",null,"HTML",-1)),qc=xe(()=>C("dt",null,"Unipoints",-1)),Xc=xe(()=>C("dt",null,"Unipoints (less memory)",-1)),Jc={class:"col"},Gc={key:0},Zc=xe(()=>C("span",{class:"badge rounded-pill text-bg-primary me-1"},"Old Unicode name",-1)),Qc=xe(()=>C("span",{class:"badge rounded-pill text-bg-primary me-1"},"Formal alias",-1)),eu=xe(()=>C("span",{class:"badge rounded-pill text-bg-primary me-1"},"Informative alias",-1)),tu=xe(()=>C("span",{class:"badge rounded-pill text-bg-primary me-1"},"Corrected name",-1)),nu=xe(()=>C("span",{class:"badge rounded-pill text-bg-primary me-1"},"Control name",-1)),ru=xe(()=>C("span",{class:"badge rounded-pill text-bg-primary me-1"},"Alternate name",-1)),au=xe(()=>C("span",{class:"badge rounded-pill text-bg-primary me-1"},"Figment",-1)),iu=xe(()=>C("span",{class:"badge rounded-pill text-bg-primary me-1"},"Abbreviation",-1)),ou=Ge({__name:"CodepointViewer",props:{block:{},codepoint:{}},setup(e){const t=e,n=We(!1),r=_e(()=>`"\\u{${t.codepoint.id.toString(16).toUpperCase()}}"`),a=_e(()=>t.codepoint.id<=65535?`'\\u${t.codepoint.id.toString(16).padStart(4,"0")}'`:`'\\u${t.codepoint.char.charCodeAt(0).toString(16).padStart(4,"0")}\\u${t.codepoint.char.charCodeAt(1).toString(16).padStart(4,"0")}'`),i=_e(()=>`&#x${t.codepoint.id.toString(16).toUpperCase()};`);return(o,s)=>{const l=gr("font-awesome-icon");return L(),$(K,null,[C("tr",{onClick:s[0]||(s[0]=f=>n.value=!n.value)},[C("td",$c,[C("pre",jc,ie(o.codepoint.char),1)]),C("td",null,[C("h5",Dc,ie(o.codepoint.name),1)]),C("td",null,[C("button",{class:yn(["btn",n.value?"btn-primary":"btn-outline-primary"])},[J(l,{icon:"fa-solid fa-circle-info"})],2)])]),n.value?(L(),$("tr",zc,[C("td",Uc,[C("div",Hc,[C("div",Bc,[C("div",Yc,[C("dl",null,[Kc,C("dd",null,[J(Zt,{code:!0,text:r.value},null,8,["text"])]),Wc,C("dd",null,[J(Zt,{code:!0,text:a.value},null,8,["text"])]),Vc,C("dd",null,[J(Zt,{code:!0,text:i.value},null,8,["text"])]),qc,C("dd",null,[J(Zt,{text:`\\MLUnipoints\\Codepoint::${o.codepoint.codename}`,"display-text":`Codepoint::${o.codepoint.codename}`,code:!0},null,8,["text","display-text"])]),Xc,C("dd",null,[J(Zt,{text:`\\MLUnipoints\\Codepoint\\${o.block.codename}::${o.codepoint.codename}`,"display-text":`Codepoint\\${o.block.codename}::${o.codepoint.codename}`,code:!0},null,8,["text","display-text"])])])]),C("div",Jc,[o.codepoint.unicode1Name!==void 0?(L(),$("div",Gc,[Zc,C("code",null,ie(o.codepoint.unicode1Name),1)])):de("",!0),o.codepoint.formalAliases!==void 0?(L(!0),$(K,{key:1},Ae(o.codepoint.formalAliases,f=>(L(),$("div",{key:f},[Qc,C("code",null,ie(f),1)]))),128)):de("",!0),o.codepoint.informativeAliases!==void 0?(L(!0),$(K,{key:2},Ae(o.codepoint.informativeAliases,f=>(L(),$("div",{key:f},[eu,C("code",null,ie(f),1)]))),128)):de("",!0),o.codepoint.correctedNames!==void 0?(L(!0),$(K,{key:3},Ae(o.codepoint.correctedNames,f=>(L(),$("div",{key:f},[tu,C("code",null,ie(f),1)]))),128)):de("",!0),o.codepoint.controlNames!==void 0?(L(!0),$(K,{key:4},Ae(o.codepoint.controlNames,f=>(L(),$("div",{key:f},[nu,C("code",null,ie(f),1)]))),128)):de("",!0),o.codepoint.alternateNames!==void 0?(L(!0),$(K,{key:5},Ae(o.codepoint.alternateNames,f=>(L(),$("div",{key:f},[ru,C("code",null,ie(f),1)]))),128)):de("",!0),o.codepoint.figments!==void 0?(L(!0),$(K,{key:6},Ae(o.codepoint.figments,f=>(L(),$("div",{key:f},[au,C("code",null,ie(f),1)]))),128)):de("",!0),o.codepoint.abbreviations!==void 0?(L(!0),$(K,{key:7},Ae(o.codepoint.abbreviations,f=>(L(),$("div",{key:f},[iu,C("code",null,ie(f),1)]))),128)):de("",!0)])])])])])):de("",!0)],64)}}});const su=ts(ou,[["__scopeId","data-v-d511621c"]]),lu={class:"container"},fu={key:0,class:"alert alert-info"},cu={class:"table table-hover table-sm m-0"},uu=C("colgroup",null,[C("col",{width:"150"}),C("col"),C("col",{width:"1"})],-1),du={key:0,class:"text-center mt-2"},Rn=1e3,mu=Ge({__name:"DataViewer",props:{filterResults:{}},setup(e){let t=We(Rn),n=!1;const r=e;st(r.filterResults,async()=>{t.value=Rn});const a=_e(()=>{if(n=!1,r.filterResults===null)return[];let i=t.value;const o=[];return r.filterResults.some(s=>{const l={plane:s.plane,blocks:[]};if(s.blocks.some(f=>{const u={block:f.block,codepoints:[]};if(f.codepoints.length<=i?u.codepoints=f.codepoints:u.codepoints=f.codepoints.slice(0,i),l.blocks.push(u),i-=u.codepoints.length,i<=0)return n=!0,!0}),o.push(l),i<=0)return!0}),o});return(i,o)=>(L(),$("div",lu,[a.value.length===0?(L(),$("div",fu,"No results")):(L(),$(K,{key:1},[(L(!0),$(K,null,Ae(a.value,s=>(L(),$(K,{key:s.plane.id.toString()},[J(Ic,{plane:s.plane},null,8,["plane"]),J(Ii,{block:s.blocks[0].block},null,8,["block"]),(L(!0),$(K,null,Ae(s.blocks,(l,f)=>(L(),$(K,{key:`${s.plane.id}@${l.codename}`},[f!==0?(L(),rr(Ii,{key:0,block:l.block},null,8,["block"])):de("",!0),C("table",cu,[uu,C("tbody",null,[(L(!0),$(K,null,Ae(l.codepoints,u=>(L(),rr(su,{key:u.name,block:l.block,codepoint:u},null,8,["block","codepoint"]))),128))])])],64))),128))],64))),128)),gt(n)?(L(),$("div",du,[C("button",{class:"btn btn-secondary",onClick:o[0]||(o[0]=ic(s=>ae(t)?t.value+=Rn:t+=Rn,["prevent"]))}," Show more ")])):de("",!0)],64))]))}}),pu={key:0,class:"container"},hu={key:0,class:"alert alert-danger mt-5 text-center"},gu={key:1,class:"alert alert-info mt-5 text-center fs-4"},vu=C("br",null,null,-1),bu={key:0},yu=Ge({__name:"App",setup(e){const t=We(null),n=We(null),r=We(null);return cc().then(a=>{t.value=a}).catch(a=>{n.value=a}),(a,i)=>{const o=gr("font-awesome-icon");return t.value===null?(L(),$("main",pu,[n.value!==null?(L(),$("div",hu,ie(n.value),1)):(L(),$("div",gu,[at(" Loading..."),vu,J(o,{icon:"fa-solid fa-spinner",spin:""})]))])):(L(),$(K,{key:1},[J(pc,{"unicode-version":t.value.unicodeVersion},null,8,["unicode-version"]),t.value?(L(),$("main",bu,[J(Sc,{"unipoints-data":t.value,onChange:i[0]||(i[0]=s=>r.value=s)},null,8,["unipoints-data"]),r.value!==null?(L(),rr(mu,{key:0,filterResults:r.value},null,8,["filterResults"])):de("",!0)])):de("",!0)],64))}}});function Ri(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ri(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ri(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ar(e){"@babel/helpers - typeof";return ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ar(e)}function _u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function xu(e,t,n){return t&&Fi(e.prototype,t),n&&Fi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ta(e,t){return ku(e)||Eu(e,t)||ns(e,t)||Cu()}function xn(e){return wu(e)||Au(e)||ns(e)||Ou()}function wu(e){if(Array.isArray(e))return Qr(e)}function ku(e){if(Array.isArray(e))return e}function Au(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Eu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ns(e,t){if(e){if(typeof e=="string")return Qr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qr(e,t)}}function Qr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ou(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Li=function(){},Ia={},rs={},as=null,is={mark:Li,measure:Li};try{typeof window<"u"&&(Ia=window),typeof document<"u"&&(rs=document),typeof MutationObserver<"u"&&(as=MutationObserver),typeof performance<"u"&&(is=performance)}catch{}var Su=Ia.navigator||{},$i=Su.userAgent,ji=$i===void 0?"":$i,ft=Ia,ee=rs,Di=as,Fn=is;ft.document;var Qe=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",os=~ji.indexOf("MSIE")||~ji.indexOf("Trident/"),Ln,$n,jn,Dn,zn,qe="___FONT_AWESOME___",ea=16,ss="fa",ls="svg-inline--fa",Ot="data-fa-i2svg",ta="data-fa-pseudo-element",Pu="data-fa-pseudo-element-pending",Na="data-prefix",Ma="data-icon",zi="fontawesome-i2svg",Tu="async",Iu=["HTML","HEAD","STYLE","SCRIPT"],fs=function(){try{return!0}catch{return!1}}(),Q="classic",ne="sharp",Ra=[Q,ne];function wn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Q]}})}var mn=wn((Ln={},se(Ln,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),se(Ln,ne,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ln)),pn=wn(($n={},se($n,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),se($n,ne,{solid:"fass",regular:"fasr",light:"fasl"}),$n)),hn=wn((jn={},se(jn,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),se(jn,ne,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),jn)),Nu=wn((Dn={},se(Dn,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),se(Dn,ne,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Dn)),Mu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,cs="fa-layers-text",Ru=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Fu=wn((zn={},se(zn,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),se(zn,ne,{900:"fass",400:"fasr",300:"fasl"}),zn)),us=[1,2,3,4,5,6,7,8,9,10],Lu=us.concat([11,12,13,14,15,16,17,18,19,20]),$u=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_t={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gn=new Set;Object.keys(pn[Q]).map(gn.add.bind(gn));Object.keys(pn[ne]).map(gn.add.bind(gn));var ju=[].concat(Ra,xn(gn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_t.GROUP,_t.SWAP_OPACITY,_t.PRIMARY,_t.SECONDARY]).concat(us.map(function(e){return"".concat(e,"x")})).concat(Lu.map(function(e){return"w-".concat(e)})),an=ft.FontAwesomeConfig||{};function Du(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function zu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var Uu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Uu.forEach(function(e){var t=Ta(e,2),n=t[0],r=t[1],a=zu(Du(n));a!=null&&(an[r]=a)})}var ds={styleDefault:"solid",familyDefault:"classic",cssPrefix:ss,replacementClass:ls,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};an.familyPrefix&&(an.cssPrefix=an.familyPrefix);var Bt=O(O({},ds),an);Bt.autoReplaceSvg||(Bt.observeMutations=!1);var P={};Object.keys(ds).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Bt[e]=n,on.forEach(function(r){return r(P)})},get:function(){return Bt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Bt.cssPrefix=t,on.forEach(function(n){return n(P)})},get:function(){return Bt.cssPrefix}});ft.FontAwesomeConfig=P;var on=[];function Hu(e){return on.push(e),function(){on.splice(on.indexOf(e),1)}}var tt=ea,De={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Bu(e){if(!(!e||!Qe)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ee.head.insertBefore(t,r),e}}var Yu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vn(){for(var e=12,t="";e-- >0;)t+=Yu[Math.random()*62|0];return t}function qt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Fa(e){return e.classList?qt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ms(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ku(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ms(e[n]),'" ')},"").trim()}function _r(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function La(e){return e.size!==De.size||e.x!==De.x||e.y!==De.y||e.rotate!==De.rotate||e.flipX||e.flipY}function Wu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Vu(e){var t=e.transform,n=e.width,r=n===void 0?ea:n,a=e.height,i=a===void 0?ea:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&os?l+="translate(".concat(t.x/tt-r/2,"em, ").concat(t.y/tt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/tt,"em), calc(-50% + ").concat(t.y/tt,"em)) "):l+="translate(".concat(t.x/tt,"em, ").concat(t.y/tt,"em) "),l+="scale(".concat(t.size/tt*(t.flipX?-1:1),", ").concat(t.size/tt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var qu=`:root, :host {
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
}`;function ps(){var e=ss,t=ls,n=P.cssPrefix,r=P.replacementClass,a=qu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ui=!1;function Fr(){P.autoAddCss&&!Ui&&(Bu(ps()),Ui=!0)}var Xu={mixout:function(){return{dom:{css:ps,insertCss:Fr}}},hooks:function(){return{beforeDOMElementCreation:function(){Fr()},beforeI2svg:function(){Fr()}}}},Xe=ft||{};Xe[qe]||(Xe[qe]={});Xe[qe].styles||(Xe[qe].styles={});Xe[qe].hooks||(Xe[qe].hooks={});Xe[qe].shims||(Xe[qe].shims=[]);var Ie=Xe[qe],hs=[],Ju=function e(){ee.removeEventListener("DOMContentLoaded",e),ir=1,hs.map(function(t){return t()})},ir=!1;Qe&&(ir=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),ir||ee.addEventListener("DOMContentLoaded",Ju));function Gu(e){Qe&&(ir?setTimeout(e,0):hs.push(e))}function kn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ms(e):"<".concat(t," ").concat(Ku(r),">").concat(i.map(kn).join(""),"</").concat(t,">")}function Hi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Zu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Lr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Zu(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function Qu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function na(e){var t=Qu(e);return t.length===1?t[0].toString(16):null}function ed(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Bi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ra(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Bi(t);typeof Ie.hooks.addPack=="function"&&!a?Ie.hooks.addPack(e,Bi(t)):Ie.styles[e]=O(O({},Ie.styles[e]||{}),i),e==="fas"&&ra("fa",t)}var Un,Hn,Bn,It=Ie.styles,td=Ie.shims,nd=(Un={},se(Un,Q,Object.values(hn[Q])),se(Un,ne,Object.values(hn[ne])),Un),$a=null,gs={},vs={},bs={},ys={},_s={},rd=(Hn={},se(Hn,Q,Object.keys(mn[Q])),se(Hn,ne,Object.keys(mn[ne])),Hn);function ad(e){return~ju.indexOf(e)}function id(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ad(a)?a:null}var xs=function(){var t=function(i){return Lr(It,function(o,s,l){return o[l]=Lr(s,i,{}),o},{})};gs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),vs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),_s=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in It||P.autoFetchSvg,r=Lr(td,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});bs=r.names,ys=r.unicodes,$a=xr(P.styleDefault,{family:P.familyDefault})};Hu(function(e){$a=xr(e.styleDefault,{family:P.familyDefault})});xs();function ja(e,t){return(gs[e]||{})[t]}function od(e,t){return(vs[e]||{})[t]}function xt(e,t){return(_s[e]||{})[t]}function ws(e){return bs[e]||{prefix:null,iconName:null}}function sd(e){var t=ys[e],n=ja("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ct(){return $a}var Da=function(){return{prefix:null,iconName:null,rest:[]}};function xr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Q:n,a=mn[r][e],i=pn[r][e]||pn[r][a],o=e in Ie.styles?e:null;return i||o||null}var Yi=(Bn={},se(Bn,Q,Object.keys(hn[Q])),se(Bn,ne,Object.keys(hn[ne])),Bn);function wr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},se(t,Q,"".concat(P.cssPrefix,"-").concat(Q)),se(t,ne,"".concat(P.cssPrefix,"-").concat(ne)),t),o=null,s=Q;(e.includes(i[Q])||e.some(function(f){return Yi[Q].includes(f)}))&&(s=Q),(e.includes(i[ne])||e.some(function(f){return Yi[ne].includes(f)}))&&(s=ne);var l=e.reduce(function(f,u){var m=id(P.cssPrefix,u);if(It[u]?(u=nd[s].includes(u)?Nu[s][u]:u,o=u,f.prefix=u):rd[s].indexOf(u)>-1?(o=u,f.prefix=xr(u,{family:s})):m?f.iconName=m:u!==P.replacementClass&&u!==i[Q]&&u!==i[ne]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var h=o==="fa"?ws(f.iconName):{},b=xt(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||b||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!It.far&&It.fas&&!P.autoFetchSvg&&(f.prefix="fas")}return f},Da());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ne&&(It.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=xt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ct()||"fas"),l}var ld=function(){function e(){_u(this,e),this.definitions={}}return xu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),ra(s,o[s]);var l=hn[Q][s];l&&ra(l,o[s]),xs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Ki=[],Nt={},$t={},fd=Object.keys($t);function cd(e,t){var n=t.mixoutsTo;return Ki=e,Nt={},Object.keys($t).forEach(function(r){fd.indexOf(r)===-1&&delete $t[r]}),Ki.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ar(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Nt[o]||(Nt[o]=[]),Nt[o].push(i[o])})}r.provides&&r.provides($t)}),n}function aa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Nt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ct(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Nt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $t[e]?$t[e].apply(null,t):void 0}function ia(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ct();if(t)return t=xt(n,t)||t,Hi(ks.definitions,n,t)||Hi(Ie.styles,n,t)}var ks=new ld,ud=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,Ct("noAuto")},dd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(Ct("beforeI2svg",t),Je("pseudoElements2svg",t),Je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Gu(function(){pd({autoReplaceSvgRoot:n}),Ct("watch",t)})}},md={icon:function(t){if(t===null)return null;if(ar(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:xt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=xr(t[0]);return{prefix:r,iconName:xt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Mu))){var a=wr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ct(),iconName:xt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ct();return{prefix:i,iconName:xt(i,t)||t}}}},we={noAuto:ud,config:P,dom:dd,parse:md,library:ks,findIconDefinition:ia,toHtml:kn},pd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(Ie.styles).length>0||P.autoFetchSvg)&&Qe&&P.autoReplaceSvg&&we.dom.i2svg({node:r})};function kr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return kn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Qe){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function hd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(La(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=_r(O(O({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function gd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function za(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,b=h===void 0?!1:h,F=r.found?r:n,I=F.width,U=F.height,w=a==="fak",A=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(ke){return m.classes.indexOf(ke)===-1}).filter(function(ke){return ke!==""||!!ke}).concat(m.classes).join(" "),j={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(U)})},T=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/U*16*.0625,"em")}:{};b&&(j.attributes[Ot]=""),l&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(u||vn())},children:[l]}),delete j.attributes.title);var W=O(O({},j),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:O(O({},T),m.styles)}),ce=r.found&&n.found?Je("generateAbstractMask",W)||{children:[],attributes:{}}:Je("generateAbstractIcon",W)||{children:[],attributes:{}},ue=ce.children,Oe=ce.attributes;return W.children=ue,W.attributes=Oe,s?gd(W):hd(W)}function Wi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Ot]="");var u=O({},o.styles);La(a)&&(u.transform=Vu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=_r(u);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function vd(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=_r(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $r=Ie.styles;function oa(e){var t=e[0],n=e[1],r=e.slice(4),a=Ta(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(_t.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(_t.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(_t.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var bd={found:!1,width:512,height:512};function yd(e,t){!fs&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function sa(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=ct()),new Promise(function(r,a){if(Je("missingIconAbstract"),n==="fa"){var i=ws(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&$r[t]&&$r[t][e]){var o=$r[t][e];return r(oa(o))}yd(e,t),r(O(O({},bd),{},{icon:P.showMissingIcons&&e?Je("missingIconAbstract")||{}:{}}))})}var Vi=function(){},la=P.measurePerformance&&Fn&&Fn.mark&&Fn.measure?Fn:{mark:Vi,measure:Vi},tn='FA "6.4.2"',_d=function(t){return la.mark("".concat(tn," ").concat(t," begins")),function(){return As(t)}},As=function(t){la.mark("".concat(tn," ").concat(t," ends")),la.measure("".concat(tn," ").concat(t),"".concat(tn," ").concat(t," begins"),"".concat(tn," ").concat(t," ends"))},Ua={begin:_d,end:As},Xn=function(){};function qi(e){var t=e.getAttribute?e.getAttribute(Ot):null;return typeof t=="string"}function xd(e){var t=e.getAttribute?e.getAttribute(Na):null,n=e.getAttribute?e.getAttribute(Ma):null;return t&&n}function wd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function kd(){if(P.autoReplaceSvg===!0)return Jn.replace;var e=Jn[P.autoReplaceSvg];return e||Jn.replace}function Ad(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function Ed(e){return ee.createElement(e)}function Es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ad:Ed:n;if(typeof e=="string")return ee.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Es(o,{ceFn:r}))}),a}function Od(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Jn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Es(a),n)}),n.getAttribute(Ot)===null&&P.keepOriginalSource){var r=ee.createComment(Od(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Fa(n).indexOf(P.replacementClass))return Jn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return kn(s)}).join(`
`);n.setAttribute(Ot,""),n.innerHTML=o}};function Xi(e){e()}function Os(e,t){var n=typeof t=="function"?t:Xn;if(e.length===0)n();else{var r=Xi;P.mutateApproach===Tu&&(r=ft.requestAnimationFrame||Xi),r(function(){var a=kd(),i=Ua.begin("mutate");e.map(a),i(),n()})}}var Ha=!1;function Cs(){Ha=!0}function fa(){Ha=!1}var or=null;function Ji(e){if(Di&&P.observeMutations){var t=e.treeCallback,n=t===void 0?Xn:t,r=e.nodeCallback,a=r===void 0?Xn:r,i=e.pseudoElementsCallback,o=i===void 0?Xn:i,s=e.observeMutationsRoot,l=s===void 0?ee:s;or=new Di(function(f){if(!Ha){var u=ct();qt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!qi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&qi(m.target)&&~$u.indexOf(m.attributeName))if(m.attributeName==="class"&&xd(m.target)){var h=wr(Fa(m.target)),b=h.prefix,F=h.iconName;m.target.setAttribute(Na,b||u),F&&m.target.setAttribute(Ma,F)}else wd(m.target)&&a(m.target)})}}),Qe&&or.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Cd(){or&&or.disconnect()}function Sd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Pd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=wr(Fa(e));return a.prefix||(a.prefix=ct()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=od(a.prefix,e.innerText)||ja(a.prefix,na(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Td(e){var t=qt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||vn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Id(){return{iconName:null,title:null,titleId:null,prefix:null,transform:De,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Pd(e),r=n.iconName,a=n.prefix,i=n.rest,o=Td(e),s=aa("parseNodeAttributes",{},e),l=t.styleParser?Sd(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:De,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Nd=Ie.styles;function Ss(e){var t=P.autoReplaceSvg==="nest"?Gi(e,{styleParser:!1}):Gi(e);return~t.extra.classes.indexOf(cs)?Je("generateLayersText",e,t):Je("generateSvgReplacementMutation",e,t)}var ut=new Set;Ra.map(function(e){ut.add("fa-".concat(e))});Object.keys(mn[Q]).map(ut.add.bind(ut));Object.keys(mn[ne]).map(ut.add.bind(ut));ut=xn(ut);function Zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();var n=ee.documentElement.classList,r=function(m){return n.add("".concat(zi,"-").concat(m))},a=function(m){return n.remove("".concat(zi,"-").concat(m))},i=P.autoFetchSvg?ut:Ra.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Nd));i.includes("fa")||i.push("fa");var o=[".".concat(cs,":not([").concat(Ot,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=qt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ua.begin("onTree"),f=s.reduce(function(u,m){try{var h=Ss(m);h&&u.push(h)}catch(b){fs||b.name==="MissingIcon"&&console.error(b)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(h){Os(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function Md(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ss(e).then(function(n){n&&Os([n],t)})}function Rd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ia(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ia(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Fd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?De:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,h=m===void 0?null:m,b=n.titleId,F=b===void 0?null:b,I=n.classes,U=I===void 0?[]:I,w=n.attributes,A=w===void 0?{}:w,j=n.styles,T=j===void 0?{}:j;if(t){var W=t.prefix,ce=t.iconName,ue=t.icon;return kr(O({type:"icon"},t),function(){return Ct("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(h?A["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(F||vn()):(A["aria-hidden"]="true",A.focusable="false")),za({icons:{main:oa(ue),mask:l?oa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ce,transform:O(O({},De),a),symbol:o,title:h,maskId:u,titleId:F,extra:{attributes:A,styles:T,classes:U}})})}},Ld={mixout:function(){return{icon:Rd(Fd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Zi,n.nodeCallback=Md,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ee:r,i=n.callback,o=i===void 0?function(){}:i;return Zi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(b,F){Promise.all([sa(a,s),u.iconName?sa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var U=Ta(I,2),w=U[0],A=U[1];b([n,za({icons:{main:w,mask:A},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=_r(s);l.length>0&&(a.style=l);var f;return La(o)&&(f=Je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},$d={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return kr({type:"layer"},function(){Ct("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(xn(i)).join(" ")},children:o}]})}}}},jd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return kr({type:"counter",content:n},function(){return Ct("beforeDOMElementCreation",{content:n,params:r}),vd({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(xn(s))}})})}}}},Dd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?De:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,b=h===void 0?{}:h;return kr({type:"text",content:n},function(){return Ct("beforeDOMElementCreation",{content:n,params:r}),Wi({content:n,transform:O(O({},De),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(P.cssPrefix,"-layers-text")].concat(xn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(os){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Wi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},zd=new RegExp('"',"ug"),Qi=[1105920,1112319];function Ud(e){var t=e.replace(zd,""),n=ed(t,0),r=n>=Qi[0]&&n<=Qi[1],a=t.length===2?t[0]===t[1]:!1;return{value:na(a?t[0]:t),isSecondary:r||a}}function eo(e,t){var n="".concat(Pu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=qt(e.children),o=i.filter(function(ue){return ue.getAttribute(ta)===t})[0],s=ft.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ru),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ne:Q,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pn[h][l[2].toLowerCase()]:Fu[h][f],F=Ud(m),I=F.value,U=F.isSecondary,w=l[0].startsWith("FontAwesome"),A=ja(b,I),j=A;if(w){var T=sd(I);T.iconName&&T.prefix&&(A=T.iconName,b=T.prefix)}if(A&&!U&&(!o||o.getAttribute(Na)!==b||o.getAttribute(Ma)!==j)){e.setAttribute(n,j),o&&e.removeChild(o);var W=Id(),ce=W.extra;ce.attributes[ta]=t,sa(A,b).then(function(ue){var Oe=za(O(O({},W),{},{icons:{main:ue,mask:Da()},prefix:b,iconName:j,extra:ce,watchable:!0})),ke=ee.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ke,e.firstChild):e.appendChild(ke),ke.outerHTML=Oe.map(function(Ue){return kn(Ue)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Hd(e){return Promise.all([eo(e,"::before"),eo(e,"::after")])}function Bd(e){return e.parentNode!==document.head&&!~Iu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ta)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function to(e){if(Qe)return new Promise(function(t,n){var r=qt(e.querySelectorAll("*")).filter(Bd).map(Hd),a=Ua.begin("searchPseudoElements");Cs(),Promise.all(r).then(function(){a(),fa(),t()}).catch(function(){a(),fa(),n()})})}var Yd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=to,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ee:r;P.searchPseudoElements&&to(a)}}},no=!1,Kd={mixout:function(){return{dom:{unwatch:function(){Cs(),no=!0}}}},hooks:function(){return{bootstrap:function(){Ji(aa("mutationObserverCallbacks",{}))},noAuto:function(){Cd()},watch:function(n){var r=n.observeMutationsRoot;no?fa():Ji(aa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ro=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Wd={mixout:function(){return{parse:{transform:function(n){return ro(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ro(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:h};return{tag:"g",attributes:O({},b.outer),children:[{tag:"g",attributes:O({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),b.path)}]}]}}}},jr={x:0,y:0,width:"100%",height:"100%"};function ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Vd(e){return e.tag==="g"?e.children:[e]}var qd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?wr(a.split(" ").map(function(o){return o.trim()})):Da();return i.prefix||(i.prefix=ct()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,h=o.icon,b=Wu({transform:l,containerWidth:m,iconWidth:f}),F={tag:"rect",attributes:O(O({},jr),{},{fill:"white"})},I=u.children?{children:u.children.map(ao)}:{},U={tag:"g",attributes:O({},b.inner),children:[ao(O({tag:u.tag,attributes:O(O({},u.attributes),b.path)},I))]},w={tag:"g",attributes:O({},b.outer),children:[U]},A="mask-".concat(s||vn()),j="clip-".concat(s||vn()),T={tag:"mask",attributes:O(O({},jr),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,w]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:Vd(h)},T]};return r.push(W,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(A,")")},jr)}),{children:r,attributes:a}}}},Xd={provides:function(t){var n=!1;ft.matchMedia&&(n=ft.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Jd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Gd=[Xu,Ld,$d,jd,Dd,Yd,Kd,Wd,qd,Xd,Jd];cd(Gd,{mixoutsTo:we});we.noAuto;we.config;var Zd=we.library;we.dom;var ca=we.parse;we.findIconDefinition;we.toHtml;var Qd=we.icon;we.layer;we.text;we.counter;function io(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?io(Object(n),!0).forEach(function(r){ge(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):io(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sr(e){"@babel/helpers - typeof";return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sr(e)}function ge(e,t,n){return t=rm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function em(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function tm(e,t){if(e==null)return{};var n=em(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function nm(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function rm(e){var t=nm(e,"string");return typeof t=="symbol"?t:String(t)}var am=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ps={exports:{}};(function(e){(function(t){var n=function(w,A,j){if(!f(A)||m(A)||h(A)||b(A)||l(A))return A;var T,W=0,ce=0;if(u(A))for(T=[],ce=A.length;W<ce;W++)T.push(n(w,A[W],j));else{T={};for(var ue in A)Object.prototype.hasOwnProperty.call(A,ue)&&(T[w(ue,j)]=n(w,A[ue],j))}return T},r=function(w,A){A=A||{};var j=A.separator||"_",T=A.split||/(?=[A-Z])/;return w.split(T).join(j)},a=function(w){return F(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(A,j){return j?j.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var A=a(w);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(w,A){return r(w,A).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},f=function(w){return w===Object(w)},u=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},h=function(w){return s.call(w)=="[object RegExp]"},b=function(w){return s.call(w)=="[object Boolean]"},F=function(w){return w=w-0,w===w},I=function(w,A){var j=A&&"process"in A?A.process:A;return typeof j!="function"?w:function(T,W){return j(T,w,W)}},U={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,A){return n(I(a,A),w)},decamelizeKeys:function(w,A){return n(I(o,A),w,A)},pascalizeKeys:function(w,A){return n(I(i,A),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=U:t.humps=U})(am)})(Ps);var im=Ps.exports,om=["class","style"];function sm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=im.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function lm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ts(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ts(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=lm(u);break;case"style":l.style=sm(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=tm(n,om);return If(e.tag,Ye(Ye(Ye({},t),{},{class:a.class,style:Ye(Ye({},a.style),o)},a.attrs),s),r)}var Is=!1;try{Is=!0}catch{}function fm(){if(!Is&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Dr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ge({},e,t):{}}function cm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ge(t,"fa-".concat(e.size),e.size!==null),ge(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ge(t,"fa-pull-".concat(e.pull),e.pull!==null),ge(t,"fa-swap-opacity",e.swapOpacity),ge(t,"fa-bounce",e.bounce),ge(t,"fa-shake",e.shake),ge(t,"fa-beat",e.beat),ge(t,"fa-fade",e.fade),ge(t,"fa-beat-fade",e.beatFade),ge(t,"fa-flash",e.flash),ge(t,"fa-spin-pulse",e.spinPulse),ge(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function oo(e){if(e&&sr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ca.icon)return ca.icon(e);if(e===null)return null;if(sr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var um=Ge({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=_e(function(){return oo(t.icon)}),i=_e(function(){return Dr("classes",cm(t))}),o=_e(function(){return Dr("transform",typeof t.transform=="string"?ca.transform(t.transform):t.transform)}),s=_e(function(){return Dr("mask",oo(t.mask))}),l=_e(function(){return Qd(a.value,Ye(Ye(Ye(Ye({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});st(l,function(u){if(!u)return fm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=_e(function(){return l.value?Ts(l.value.abstract[0],{},r):null});return function(){return f.value}}}),dm={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},mm={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"]},pm={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},hm={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};Zd.add(dm,mm,hm,pm);lc(yu).component("font-awesome-icon",um).mount("#app");
