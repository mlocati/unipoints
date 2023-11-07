(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function la(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const J={},Pt=[],Ce=()=>{},Is=()=>!1,Ns=/^on[^a-z]/,rr=e=>Ns.test(e),fa=e=>e.startsWith("onUpdate:"),le=Object.assign,ca=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ms=Object.prototype.hasOwnProperty,U=(e,t)=>Ms.call(e,t),M=Array.isArray,St=e=>dn(e)==="[object Map]",ar=e=>dn(e)==="[object Set]",qa=e=>dn(e)==="[object Date]",$=e=>typeof e=="function",ie=e=>typeof e=="string",Rt=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",io=e=>(X(e)||$(e))&&$(e.then)&&$(e.catch),oo=Object.prototype.toString,dn=e=>oo.call(e),Rs=e=>dn(e).slice(8,-1),so=e=>dn(e)==="[object Object]",ua=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ln=la(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ir=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Fs=/-(\w)/g,$e=ir(e=>e.replace(Fs,(t,n)=>n?n.toUpperCase():"")),Ls=/\B([A-Z])/g,jt=ir(e=>e.replace(Ls,"-$1").toLowerCase()),or=ir(e=>e.charAt(0).toUpperCase()+e.slice(1)),kr=ir(e=>e?`on${or(e)}`:""),bt=(e,t)=>!Object.is(e,t),$n=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Yn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Kn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Xa;const Lr=()=>Xa||(Xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function da(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ie(r)?zs(r):da(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(ie(e)||X(e))return e}const $s=/;(?![^(]*\))/g,Ds=/:([^]+)/,js=/\/\*[^]*?\*\//g;function zs(e){const t={};return e.replace(js,"").split($s).forEach(n=>{if(n){const r=n.split(Ds);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ma(e){let t="";if(ie(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=ma(e[n]);r&&(t+=r+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Us="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hs=la(Us);function lo(e){return!!e||e===""}function Bs(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=sr(e[r],t[r]);return n}function sr(e,t){if(e===t)return!0;let n=qa(e),r=qa(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Rt(e),r=Rt(t),n||r)return e===t;if(n=M(e),r=M(t),n||r)return n&&r?Bs(e,t):!1;if(n=X(e),r=X(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!sr(e[o],t[o]))return!1}}return String(e)===String(t)}function Ys(e,t){return e.findIndex(n=>sr(n,t))}const Pe=e=>ie(e)?e:e==null?"":M(e)||X(e)&&(e.toString===oo||!$(e.toString))?JSON.stringify(e,fo,2):String(e),fo=(e,t)=>t&&t.__v_isRef?fo(e,t.value):St(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:ar(t)?{[`Set(${t.size})`]:[...t.values()]}:X(t)&&!M(t)&&!so(t)?String(t):t;let ke;class Ks{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ke,!t&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ke;try{return ke=this,t()}finally{ke=n}}}on(){ke=this}off(){ke=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ws(e,t=ke){t&&t.active&&t.effects.push(e)}function Vs(){return ke}const pa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},co=e=>(e.w&et)>0,uo=e=>(e.n&et)>0,qs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=et},Xs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];co(a)&&!uo(a)?a.delete(e):t[n++]=a,a.w&=~et,a.n&=~et}t.length=n}},$r=new WeakMap;let Wt=0,et=1;const Dr=30;let Ae;const ht=Symbol(""),jr=Symbol("");class ha{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ws(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=Ze;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,Ze=!0,et=1<<++Wt,Wt<=Dr?qs(this):Ja(this),this.fn()}finally{Wt<=Dr&&Xs(this),et=1<<--Wt,Ae=this.parent,Ze=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(Ja(this),this.onStop&&this.onStop(),this.active=!1)}}function Ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ze=!0;const mo=[];function zt(){mo.push(Ze),Ze=!1}function Ut(){const e=mo.pop();Ze=e===void 0?!0:e}function ge(e,t,n){if(Ze&&Ae){let r=$r.get(e);r||$r.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=pa()),po(a)}}function po(e,t){let n=!1;Wt<=Dr?uo(e)||(e.n|=et,n=!co(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function He(e,t,n,r,a,i){const o=$r.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&M(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Rt(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":M(e)?ua(n)&&s.push(o.get("length")):(s.push(o.get(ht)),St(e)&&s.push(o.get(jr)));break;case"delete":M(e)||(s.push(o.get(ht)),St(e)&&s.push(o.get(jr)));break;case"set":St(e)&&s.push(o.get(ht));break}if(s.length===1)s[0]&&zr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);zr(pa(l))}}function zr(e,t){const n=M(e)?e:[...e];for(const r of n)r.computed&&Ga(r);for(const r of n)r.computed||Ga(r)}function Ga(e,t){(e!==Ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Js=la("__proto__,__v_isRef,__isVue"),ho=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rt)),Za=Gs();function Gs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){zt();const r=Y(this)[t].apply(this,n);return Ut(),r}}),e}function Zs(e){const t=Y(this);return ge(t,"has",e),t.hasOwnProperty(e)}class go{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?ul:xo:i?yo:bo).get(t))return t;const o=M(t);if(!a){if(o&&U(Za,n))return Reflect.get(Za,n,r);if(n==="hasOwnProperty")return Zs}const s=Reflect.get(t,n,r);return(Rt(n)?ho.has(n):Js(n))||(a||ge(t,"get",n),i)?s:ae(s)?o&&ua(n)?s:s.value:X(s)?a?_o(s):ba(s):s}}class vo extends go{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Ft(i)&&ae(i)&&!ae(r))return!1;if(!this._shallow&&(!Wn(r)&&!Ft(r)&&(i=Y(i),r=Y(r)),!M(t)&&ae(i)&&!ae(r)))return i.value=r,!0;const o=M(t)&&ua(n)?Number(n)<t.length:U(t,n),s=Reflect.set(t,n,r,a);return t===Y(a)&&(o?bt(r,i)&&He(t,"set",n,r):He(t,"add",n,r)),s}deleteProperty(t,n){const r=U(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&He(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Rt(n)||!ho.has(n))&&ge(t,"has",n),r}ownKeys(t){return ge(t,"iterate",M(t)?"length":ht),Reflect.ownKeys(t)}}class Qs extends go{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const el=new vo,tl=new Qs,nl=new vo(!0),ga=e=>e,lr=e=>Reflect.getPrototypeOf(e);function xn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(bt(t,i)&&ge(a,"get",t),ge(a,"get",i));const{has:o}=lr(a),s=r?ga:n?xa:en;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function _n(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(bt(e,a)&&ge(r,"has",e),ge(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function wn(e,t=!1){return e=e.__v_raw,!t&&ge(Y(e),"iterate",ht),Reflect.get(e,"size",e)}function Qa(e){e=Y(e);const t=Y(this);return lr(t).has.call(t,e)||(t.add(e),He(t,"add",e,e)),this}function ei(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=lr(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?bt(t,o)&&He(n,"set",e,t):He(n,"add",e,t),this}function ti(e){const t=Y(this),{has:n,get:r}=lr(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&He(t,"delete",e,void 0),i}function ni(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&He(e,"clear",void 0,void 0),n}function kn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?ga:e?xa:en;return!e&&ge(s,"iterate",ht),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function An(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=St(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?ga:t?xa:en;return!t&&ge(i,"iterate",l?jr:ht),{next(){const{value:m,done:p}=c.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:this}}function rl(){const e={get(i){return xn(this,i)},get size(){return wn(this)},has:_n,add:Qa,set:ei,delete:ti,clear:ni,forEach:kn(!1,!1)},t={get(i){return xn(this,i,!1,!0)},get size(){return wn(this)},has:_n,add:Qa,set:ei,delete:ti,clear:ni,forEach:kn(!1,!0)},n={get(i){return xn(this,i,!0)},get size(){return wn(this,!0)},has(i){return _n.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:kn(!0,!1)},r={get(i){return xn(this,i,!0,!0)},get size(){return wn(this,!0)},has(i){return _n.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=An(i,!1,!1),n[i]=An(i,!0,!1),t[i]=An(i,!1,!0),r[i]=An(i,!0,!0)}),[e,n,t,r]}const[al,il,ol,sl]=rl();function va(e,t){const n=t?e?sl:ol:e?il:al;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const ll={get:va(!1,!1)},fl={get:va(!1,!0)},cl={get:va(!0,!1)},bo=new WeakMap,yo=new WeakMap,xo=new WeakMap,ul=new WeakMap;function dl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ml(e){return e.__v_skip||!Object.isExtensible(e)?0:dl(Rs(e))}function ba(e){return Ft(e)?e:ya(e,!1,el,ll,bo)}function pl(e){return ya(e,!1,nl,fl,yo)}function _o(e){return ya(e,!0,tl,cl,xo)}function ya(e,t,n,r,a){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ml(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Tt(e){return Ft(e)?Tt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function Wn(e){return!!(e&&e.__v_isShallow)}function wo(e){return Tt(e)||Ft(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function ko(e){return Yn(e,"__v_skip",!0),e}const en=e=>X(e)?ba(e):e,xa=e=>X(e)?_o(e):e;function Ao(e){Ze&&Ae&&(e=Y(e),po(e.dep||(e.dep=pa())))}function Oo(e,t){e=Y(e);const n=e.dep;n&&zr(n)}function ae(e){return!!(e&&e.__v_isRef===!0)}function tn(e){return hl(e,!1)}function hl(e,t){return ae(e)?e:new gl(e,t)}class gl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:en(t)}get value(){return Ao(this),this._value}set value(t){const n=this.__v_isShallow||Wn(t)||Ft(t);t=n?t:Y(t),bt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:en(t),Oo(this))}}function Vn(e){return ae(e)?e.value:e}const vl={get:(e,t,n)=>Vn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ae(a)&&!ae(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Eo(e){return Tt(e)?e:new Proxy(e,vl)}class bl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ha(t,()=>{this._dirty||(this._dirty=!0,Oo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return Ao(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function yl(e,t,n=!1){let r,a;const i=$(e);return i?(r=e,a=Ce):(r=e.get,a=e.set),new bl(r,a,i||!a,n)}function Qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){fr(i,t,n)}return a}function Se(e,t,n,r){if($(e)){const i=Qe(e,t,n,r);return i&&io(i)&&i.catch(o=>{fr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Se(e[i],t,n,r));return a}function fr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Qe(l,null,10,[e,o,s]);return}}xl(e,n,a,r)}function xl(e,t,n,r=!0){console.error(e)}let nn=!1,Ur=!1;const ue=[];let Fe=0;const It=[];let ze=null,lt=0;const Co=Promise.resolve();let _a=null;function _l(e){const t=_a||Co;return e?t.then(this?e.bind(this):e):t}function wl(e){let t=Fe+1,n=ue.length;for(;t<n;){const r=t+n>>>1,a=ue[r],i=rn(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function wa(e){(!ue.length||!ue.includes(e,nn&&e.allowRecurse?Fe+1:Fe))&&(e.id==null?ue.push(e):ue.splice(wl(e.id),0,e),Po())}function Po(){!nn&&!Ur&&(Ur=!0,_a=Co.then(To))}function kl(e){const t=ue.indexOf(e);t>Fe&&ue.splice(t,1)}function Al(e){M(e)?It.push(...e):(!ze||!ze.includes(e,e.allowRecurse?lt+1:lt))&&It.push(e),Po()}function ri(e,t=nn?Fe+1:0){for(;t<ue.length;t++){const n=ue[t];n&&n.pre&&(ue.splice(t,1),t--,n())}}function So(e){if(It.length){const t=[...new Set(It)];if(It.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((n,r)=>rn(n)-rn(r)),lt=0;lt<ze.length;lt++)ze[lt]();ze=null,lt=0}}const rn=e=>e.id==null?1/0:e.id,Ol=(e,t)=>{const n=rn(e)-rn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function To(e){Ur=!1,nn=!0,ue.sort(Ol);const t=Ce;try{for(Fe=0;Fe<ue.length;Fe++){const n=ue[Fe];n&&n.active!==!1&&Qe(n,null,14)}}finally{Fe=0,ue.length=0,So(),nn=!1,_a=null,(ue.length||It.length)&&To()}}function El(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[u]||J;p&&(a=n.map(_=>ie(_)?_.trim():_)),m&&(a=n.map(Kn))}let s,l=r[s=kr(t)]||r[s=kr($e(t))];!l&&i&&(l=r[s=kr(jt(t))]),l&&Se(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Se(c,e,6,a)}}function Io(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!$(e)){const l=c=>{const u=Io(c,t,!0);u&&(s=!0,le(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(X(e)&&r.set(e,null),null):(M(i)?i.forEach(l=>o[l]=null):le(o,i),X(e)&&r.set(e,o),o)}function cr(e,t){return!e||!rr(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,jt(t))||U(e,t))}let xe=null,ur=null;function qn(e){const t=xe;return xe=e,ur=e&&e.type.__scopeId||null,t}function Cl(e){ur=e}function Pl(){ur=null}function Sl(e,t=xe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&hi(-1);const i=qn(t);let o;try{o=e(...a)}finally{qn(i),r._d&&hi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ar(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:p,setupState:_,ctx:F,inheritAttrs:T}=e;let j,k;const O=qn(e);try{if(n.shapeFlag&4){const S=a||r;j=Me(u.call(S,S,m,i,_,p,F)),k=l}else{const S=t;j=Me(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),k=t.props?l:Tl(l)}}catch(S){Gt.length=0,fr(S,e,1),j=Q(yt)}let R=j;if(k&&T!==!1){const S=Object.keys(k),{shapeFlag:K}=R;S.length&&K&7&&(o&&S.some(fa)&&(k=Il(k,o)),R=Lt(R,k))}return n.dirs&&(R=Lt(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),j=R,qn(O),j}const Tl=e=>{let t;for(const n in e)(n==="class"||n==="style"||rr(n))&&((t||(t={}))[n]=e[n]);return t},Il=(e,t)=>{const n={};for(const r in e)(!fa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Nl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ai(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(o[p]!==r[p]&&!cr(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ai(r,o,c):!0:!!o;return!1}function ai(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!cr(n,i))return!0}return!1}function Ml({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Rl=e=>e.__isSuspense;function Fl(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):Al(e)}const On={};function gt(e,t,n){return No(e,t,n)}function No(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=J){var s;const l=Vs()===((s=se)==null?void 0:s.scope)?se:null;let c,u=!1,m=!1;if(ae(e)?(c=()=>e.value,u=Wn(e)):Tt(e)?(c=()=>e,r=!0):M(e)?(m=!0,u=e.some(S=>Tt(S)||Wn(S)),c=()=>e.map(S=>{if(ae(S))return S.value;if(Tt(S))return ut(S);if($(S))return Qe(S,l,2)})):$(e)?t?c=()=>Qe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),Se(e,l,3,[_])}:c=Ce,t&&r){const S=c;c=()=>ut(S())}let p,_=S=>{p=O.onStop=()=>{Qe(S,l,4)}},F;if(on)if(_=Ce,t?n&&Se(t,l,3,[c(),m?[]:void 0,_]):c(),a==="sync"){const S=If();F=S.__watcherHandles||(S.__watcherHandles=[])}else return Ce;let T=m?new Array(e.length).fill(On):On;const j=()=>{if(O.active)if(t){const S=O.run();(r||u||(m?S.some((K,fe)=>bt(K,T[fe])):bt(S,T)))&&(p&&p(),Se(t,l,3,[S,T===On?void 0:m&&T[0]===On?[]:T,_]),T=S)}else O.run()};j.allowRecurse=!!t;let k;a==="sync"?k=j:a==="post"?k=()=>he(j,l&&l.suspense):(j.pre=!0,l&&(j.id=l.uid),k=()=>wa(j));const O=new ha(c,k);t?n?j():T=O.run():a==="post"?he(O.run.bind(O),l&&l.suspense):O.run();const R=()=>{O.stop(),l&&l.scope&&ca(l.scope.effects,O)};return F&&F.push(R),R}function Ll(e,t,n){const r=this.proxy,a=ie(e)?e.includes(".")?Mo(r,e):()=>r[e]:e.bind(r,r);let i;$(t)?i=t:(i=t.handler,n=t);const o=se;$t(this);const s=No(a,i.bind(r),n);return o?$t(o):vt(),s}function Mo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ut(e,t){if(!X(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ae(e))ut(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)ut(e[n],t);else if(ar(e)||St(e))e.forEach(n=>{ut(n,t)});else if(so(e))for(const n in e)ut(e[n],t);return e}function ii(e,t){const n=xe;if(n===null)return e;const r=hr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=J]=t[i];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&ut(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function ot(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(zt(),Se(l,n,8,[e.el,s,e,t]),Ut())}}/*! #__NO_SIDE_EFFECTS__ */function We(e,t){return $(e)?(()=>le({name:e.name},t,{setup:e}))():e}const Dn=e=>!!e.type.__asyncLoader,Ro=e=>e.type.__isKeepAlive;function $l(e,t){Fo(e,"a",t)}function Dl(e,t){Fo(e,"da",t)}function Fo(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(dr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ro(a.parent.vnode)&&jl(r,t,n,a),a=a.parent}}function jl(e,t,n,r){const a=dr(t,e,r,!0);$o(()=>{ca(r[t],a)},n)}function dr(e,t,n=se,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;zt(),$t(n);const s=Se(t,n,e,o);return vt(),Ut(),s});return r?a.unshift(i):a.push(i),i}}const Ve=e=>(t,n=se)=>(!on||e==="sp")&&dr(e,(...r)=>t(...r),n),zl=Ve("bm"),Lo=Ve("m"),Ul=Ve("bu"),Hl=Ve("u"),Bl=Ve("bum"),$o=Ve("um"),Yl=Ve("sp"),Kl=Ve("rtg"),Wl=Ve("rtc");function Vl(e,t=se){dr("ec",e,t)}const Do="components";function ka(e,t){return Xl(Do,e,!0,t)||e}const ql=Symbol.for("v-ndc");function Xl(e,t,n=!0,r=!1){const a=xe||se;if(a){const i=a.type;if(e===Do){const s=Cf(i,!1);if(s&&(s===t||s===$e(t)||s===or($e(t))))return i}const o=oi(a[e]||i[e],t)||oi(a.appContext[e],t);return!o&&r?i:o}}function oi(e,t){return e&&(e[t]||e[$e(t)]||e[or($e(t))])}function Xt(e,t,n,r){let a;const i=n&&n[r];if(M(e)||ie(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(X(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Hr=e=>e?Xo(e)?hr(e)||e.proxy:Hr(e.parent):null,Jt=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hr(e.parent),$root:e=>Hr(e.root),$emit:e=>e.emit,$options:e=>Aa(e),$forceUpdate:e=>e.f||(e.f=()=>wa(e.update)),$nextTick:e=>e.n||(e.n=_l.bind(e.proxy)),$watch:e=>Ll.bind(e)}),Or=(e,t)=>e!==J&&!e.__isScriptSetup&&U(e,t),Jl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Or(r,t))return o[t]=1,r[t];if(a!==J&&U(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&U(c,t))return o[t]=3,i[t];if(n!==J&&U(n,t))return o[t]=4,n[t];Br&&(o[t]=0)}}const u=Jt[t];let m,p;if(u)return t==="$attrs"&&ge(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==J&&U(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,U(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Or(a,t)?(a[t]=n,!0):r!==J&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==J&&U(e,o)||Or(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Jt,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function si(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Br=!0;function Gl(e){const t=Aa(e),n=e.proxy,r=e.ctx;Br=!1,t.beforeCreate&&li(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:p,beforeUpdate:_,updated:F,activated:T,deactivated:j,beforeDestroy:k,beforeUnmount:O,destroyed:R,unmounted:S,render:K,renderTracked:fe,renderTriggered:ce,errorCaptured:_e,serverPrefetch:ye,expose:De,inheritAttrs:Bt,components:gn,directives:vn,filters:xr}=t;if(c&&Zl(c,r,null),o)for(const ee in o){const V=o[ee];$(V)&&(r[ee]=V.bind(n))}if(a){const ee=a.call(n,n);X(ee)&&(e.data=ba(ee))}if(Br=!0,i)for(const ee in i){const V=i[ee],at=$(V)?V.bind(n,n):$(V.get)?V.get.bind(n,n):Ce,bn=!$(V)&&$(V.set)?V.set.bind(n):Ce,it=Re({get:at,set:bn});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>it.value,set:Te=>it.value=Te})}if(s)for(const ee in s)jo(s[ee],r,n,ee);if(l){const ee=$(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(V=>{af(V,ee[V])})}u&&li(u,e,"c");function de(ee,V){M(V)?V.forEach(at=>ee(at.bind(n))):V&&ee(V.bind(n))}if(de(zl,m),de(Lo,p),de(Ul,_),de(Hl,F),de($l,T),de(Dl,j),de(Vl,_e),de(Wl,fe),de(Kl,ce),de(Bl,O),de($o,S),de(Yl,ye),M(De))if(De.length){const ee=e.exposed||(e.exposed={});De.forEach(V=>{Object.defineProperty(ee,V,{get:()=>n[V],set:at=>n[V]=at})})}else e.exposed||(e.exposed={});K&&e.render===Ce&&(e.render=K),Bt!=null&&(e.inheritAttrs=Bt),gn&&(e.components=gn),vn&&(e.directives=vn)}function Zl(e,t,n=Ce){M(e)&&(e=Yr(e));for(const r in e){const a=e[r];let i;X(a)?"default"in a?i=jn(a.from||r,a.default,!0):i=jn(a.from||r):i=jn(a),ae(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function li(e,t,n){Se(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function jo(e,t,n,r){const a=r.includes(".")?Mo(n,r):()=>n[r];if(ie(e)){const i=t[e];$(i)&&gt(a,i)}else if($(e))gt(a,e.bind(n));else if(X(e))if(M(e))e.forEach(i=>jo(i,t,n,r));else{const i=$(e.handler)?e.handler.bind(n):t[e.handler];$(i)&&gt(a,i,e)}}function Aa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Xn(l,c,o,!0)),Xn(l,t,o)),X(t)&&i.set(t,l),l}function Xn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Xn(e,i,n,!0),a&&a.forEach(o=>Xn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ql[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ql={data:fi,props:ci,emits:ci,methods:Vt,computed:Vt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:Vt,directives:Vt,watch:tf,provide:fi,inject:ef};function fi(e,t){return t?e?function(){return le($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function ef(e,t){return Vt(Yr(e),Yr(t))}function Yr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function Vt(e,t){return e?le(Object.create(null),e,t):t}function ci(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:le(Object.create(null),si(e),si(t??{})):t}function tf(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const r in t)n[r]=me(e[r],t[r]);return n}function zo(){return{app:null,config:{isNativeTag:Is,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nf=0;function rf(e,t){return function(r,a=null){$(r)||(r=le({},r)),a!=null&&!X(a)&&(a=null);const i=zo(),o=new WeakSet;let s=!1;const l=i.app={_uid:nf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Nf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(l,...u)):$(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const p=Q(r,a);return p.appContext=i,u&&t?t(p,c):e(p,c,m),s=!0,l._container=c,c.__vue_app__=l,hr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Jn=l;try{return c()}finally{Jn=null}}};return l}}let Jn=null;function af(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function jn(e,t,n=!1){const r=se||xe;if(r||Jn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Jn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&$(t)?t.call(r&&r.proxy):t}}function of(e,t,n,r=!1){const a={},i={};Yn(i,pr,1),e.propsDefaults=Object.create(null),Uo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:pl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function sf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(cr(e.emitsOptions,p))continue;const _=t[p];if(l)if(U(i,p))_!==i[p]&&(i[p]=_,c=!0);else{const F=$e(p);a[F]=Kr(l,s,F,_,e,!1)}else _!==i[p]&&(i[p]=_,c=!0)}}}else{Uo(e,t,a,i)&&(c=!0);let u;for(const m in s)(!t||!U(t,m)&&((u=jt(m))===m||!U(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Kr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!U(t,m))&&(delete i[m],c=!0)}c&&He(e,"set","$attrs")}function Uo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Ln(l))continue;const c=t[l];let u;a&&U(a,u=$e(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:cr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||J;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Kr(a,l,m,c[m],e,!U(c,m))}}return o}function Kr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:c}=a;n in c?r=c[n]:($t(a),r=c[n]=l.call(null,t),vt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===jt(n))&&(r=!0))}return r}function Ho(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!$(e)){const u=m=>{l=!0;const[p,_]=Ho(m,t,!0);le(o,p),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return X(e)&&r.set(e,Pt),Pt;if(M(i))for(let u=0;u<i.length;u++){const m=$e(i[u]);ui(m)&&(o[m]=J)}else if(i)for(const u in i){const m=$e(u);if(ui(m)){const p=i[u],_=o[m]=M(p)||$(p)?{type:p}:le({},p);if(_){const F=pi(Boolean,_.type),T=pi(String,_.type);_[0]=F>-1,_[1]=T<0||F<T,(F>-1||U(_,"default"))&&s.push(m)}}}const c=[o,s];return X(e)&&r.set(e,c),c}function ui(e){return e[0]!=="$"}function di(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function mi(e,t){return di(e)===di(t)}function pi(e,t){return M(t)?t.findIndex(n=>mi(n,e)):$(t)&&mi(t,e)?0:-1}const Bo=e=>e[0]==="_"||e==="$stable",Oa=e=>M(e)?e.map(Me):[Me(e)],lf=(e,t,n)=>{if(t._n)return t;const r=Sl((...a)=>Oa(t(...a)),n);return r._c=!1,r},Yo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Bo(a))continue;const i=e[a];if($(i))t[a]=lf(a,i,r);else if(i!=null){const o=Oa(i);t[a]=()=>o}}},Ko=(e,t)=>{const n=Oa(t);e.slots.default=()=>n},ff=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Yn(t,"_",n)):Yo(t,e.slots={})}else e.slots={},t&&Ko(e,t);Yn(e.slots,pr,1)},cf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=J;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(le(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Yo(t,a)),o=t}else t&&(Ko(e,t),o={default:1});if(i)for(const s in a)!Bo(s)&&o[s]==null&&delete a[s]};function Wr(e,t,n,r,a=!1){if(M(e)){e.forEach((p,_)=>Wr(p,t&&(M(t)?t[_]:t),n,r,a));return}if(Dn(r)&&!a)return;const i=r.shapeFlag&4?hr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===J?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ie(c)?(u[c]=null,U(m,c)&&(m[c]=null)):ae(c)&&(c.value=null)),$(l))Qe(l,s,12,[o,u]);else{const p=ie(l),_=ae(l);if(p||_){const F=()=>{if(e.f){const T=p?U(m,l)?m[l]:u[l]:l.value;a?M(T)&&ca(T,i):M(T)?T.includes(i)||T.push(i):p?(u[l]=[i],U(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,U(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(u[e.k]=o))};o?(F.id=-1,he(F,n)):F()}}}const he=Fl;function uf(e){return df(e)}function df(e,t){const n=Lr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:p,setScopeId:_=Ce,insertStaticContent:F}=e,T=(f,d,h,g=null,v=null,x=null,A=!1,y=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!Kt(f,d)&&(g=yn(f),Te(f,v,x,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:I,shapeFlag:C}=d;switch(b){case mr:j(f,d,h,g);break;case yt:k(f,d,h,g);break;case Er:f==null&&O(d,h,g,A);break;case re:gn(f,d,h,g,v,x,A,y,w);break;default:C&1?K(f,d,h,g,v,x,A,y,w):C&6?vn(f,d,h,g,v,x,A,y,w):(C&64||C&128)&&b.process(f,d,h,g,v,x,A,y,w,kt)}I!=null&&v&&Wr(I,f&&f.ref,x,d||f,!d)},j=(f,d,h,g)=>{if(f==null)r(d.el=s(d.children),h,g);else{const v=d.el=f.el;d.children!==f.children&&c(v,d.children)}},k=(f,d,h,g)=>{f==null?r(d.el=l(d.children||""),h,g):d.el=f.el},O=(f,d,h,g)=>{[f.el,f.anchor]=F(f.children,d,h,g,f.el,f.anchor)},R=({el:f,anchor:d},h,g)=>{let v;for(;f&&f!==d;)v=p(f),r(f,h,g),f=v;r(d,h,g)},S=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=p(f),a(f),f=h;a(d)},K=(f,d,h,g,v,x,A,y,w)=>{A=A||d.type==="svg",f==null?fe(d,h,g,v,x,A,y,w):ye(f,d,v,x,A,y,w)},fe=(f,d,h,g,v,x,A,y)=>{let w,b;const{type:I,props:C,shapeFlag:N,transition:L,dirs:D}=f;if(w=f.el=o(f.type,x,C&&C.is,C),N&8?u(w,f.children):N&16&&_e(f.children,w,null,g,v,x&&I!=="foreignObject",A,y),D&&ot(f,null,g,"created"),ce(w,f,f.scopeId,A,g),C){for(const W in C)W!=="value"&&!Ln(W)&&i(w,W,null,C[W],x,f.children,g,v,je);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Ne(b,g,f)}D&&ot(f,null,g,"beforeMount");const q=mf(v,L);q&&L.beforeEnter(w),r(w,d,h),((b=C&&C.onVnodeMounted)||q||D)&&he(()=>{b&&Ne(b,g,f),q&&L.enter(w),D&&ot(f,null,g,"mounted")},v)},ce=(f,d,h,g,v)=>{if(h&&_(f,h),g)for(let x=0;x<g.length;x++)_(f,g[x]);if(v){let x=v.subTree;if(d===x){const A=v.vnode;ce(f,A,A.scopeId,A.slotScopeIds,v.parent)}}},_e=(f,d,h,g,v,x,A,y,w=0)=>{for(let b=w;b<f.length;b++){const I=f[b]=y?Ge(f[b]):Me(f[b]);T(null,I,d,h,g,v,x,A,y)}},ye=(f,d,h,g,v,x,A)=>{const y=d.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:I}=d;w|=f.patchFlag&16;const C=f.props||J,N=d.props||J;let L;h&&st(h,!1),(L=N.onVnodeBeforeUpdate)&&Ne(L,h,d,f),I&&ot(d,f,h,"beforeUpdate"),h&&st(h,!0);const D=v&&d.type!=="foreignObject";if(b?De(f.dynamicChildren,b,y,h,g,D,x):A||V(f,d,y,null,h,g,D,x,!1),w>0){if(w&16)Bt(y,d,C,N,h,g,v);else if(w&2&&C.class!==N.class&&i(y,"class",null,N.class,v),w&4&&i(y,"style",C.style,N.style,v),w&8){const q=d.dynamicProps;for(let W=0;W<q.length;W++){const ne=q[W],we=C[ne],At=N[ne];(At!==we||ne==="value")&&i(y,ne,we,At,v,f.children,h,g,je)}}w&1&&f.children!==d.children&&u(y,d.children)}else!A&&b==null&&Bt(y,d,C,N,h,g,v);((L=N.onVnodeUpdated)||I)&&he(()=>{L&&Ne(L,h,d,f),I&&ot(d,f,h,"updated")},g)},De=(f,d,h,g,v,x,A)=>{for(let y=0;y<d.length;y++){const w=f[y],b=d[y],I=w.el&&(w.type===re||!Kt(w,b)||w.shapeFlag&70)?m(w.el):h;T(w,b,I,null,g,v,x,A,!0)}},Bt=(f,d,h,g,v,x,A)=>{if(h!==g){if(h!==J)for(const y in h)!Ln(y)&&!(y in g)&&i(f,y,h[y],null,A,d.children,v,x,je);for(const y in g){if(Ln(y))continue;const w=g[y],b=h[y];w!==b&&y!=="value"&&i(f,y,b,w,A,d.children,v,x,je)}"value"in g&&i(f,"value",h.value,g.value)}},gn=(f,d,h,g,v,x,A,y,w)=>{const b=d.el=f?f.el:s(""),I=d.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:N,slotScopeIds:L}=d;L&&(y=y?y.concat(L):L),f==null?(r(b,h,g),r(I,h,g),_e(d.children,h,I,v,x,A,y,w)):C>0&&C&64&&N&&f.dynamicChildren?(De(f.dynamicChildren,N,h,v,x,A,y),(d.key!=null||v&&d===v.subTree)&&Wo(f,d,!0)):V(f,d,h,I,v,x,A,y,w)},vn=(f,d,h,g,v,x,A,y,w)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?v.ctx.activate(d,h,g,A,w):xr(d,h,g,v,x,A,w):Ha(f,d,w)},xr=(f,d,h,g,v,x,A)=>{const y=f.component=wf(f,g,v);if(Ro(f)&&(y.ctx.renderer=kt),kf(y),y.asyncDep){if(v&&v.registerDep(y,de),!f.el){const w=y.subTree=Q(yt);k(null,w,d,h)}return}de(y,f,d,h,v,x,A)},Ha=(f,d,h)=>{const g=d.component=f.component;if(Nl(f,d,h))if(g.asyncDep&&!g.asyncResolved){ee(g,d,h);return}else g.next=d,kl(g.update),g.update();else d.el=f.el,g.vnode=d},de=(f,d,h,g,v,x,A)=>{const y=()=>{if(f.isMounted){let{next:I,bu:C,u:N,parent:L,vnode:D}=f,q=I,W;st(f,!1),I?(I.el=D.el,ee(f,I,A)):I=D,C&&$n(C),(W=I.props&&I.props.onVnodeBeforeUpdate)&&Ne(W,L,I,D),st(f,!0);const ne=Ar(f),we=f.subTree;f.subTree=ne,T(we,ne,m(we.el),yn(we),f,v,x),I.el=ne.el,q===null&&Ml(f,ne.el),N&&he(N,v),(W=I.props&&I.props.onVnodeUpdated)&&he(()=>Ne(W,L,I,D),v)}else{let I;const{el:C,props:N}=d,{bm:L,m:D,parent:q}=f,W=Dn(d);if(st(f,!1),L&&$n(L),!W&&(I=N&&N.onVnodeBeforeMount)&&Ne(I,q,d),st(f,!0),C&&wr){const ne=()=>{f.subTree=Ar(f),wr(C,f.subTree,f,v,null)};W?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=Ar(f);T(null,ne,h,g,f,v,x),d.el=ne.el}if(D&&he(D,v),!W&&(I=N&&N.onVnodeMounted)){const ne=d;he(()=>Ne(I,q,ne),v)}(d.shapeFlag&256||q&&Dn(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&he(f.a,v),f.isMounted=!0,d=h=g=null}},w=f.effect=new ha(y,()=>wa(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,st(f,!0),b()},ee=(f,d,h)=>{d.component=f;const g=f.vnode.props;f.vnode=d,f.next=null,sf(f,d.props,g,h),cf(f,d.children,h),zt(),ri(),Ut()},V=(f,d,h,g,v,x,A,y,w=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,C=d.children,{patchFlag:N,shapeFlag:L}=d;if(N>0){if(N&128){bn(b,C,h,g,v,x,A,y,w);return}else if(N&256){at(b,C,h,g,v,x,A,y,w);return}}L&8?(I&16&&je(b,v,x),C!==b&&u(h,C)):I&16?L&16?bn(b,C,h,g,v,x,A,y,w):je(b,v,x,!0):(I&8&&u(h,""),L&16&&_e(C,h,g,v,x,A,y,w))},at=(f,d,h,g,v,x,A,y,w)=>{f=f||Pt,d=d||Pt;const b=f.length,I=d.length,C=Math.min(b,I);let N;for(N=0;N<C;N++){const L=d[N]=w?Ge(d[N]):Me(d[N]);T(f[N],L,h,null,v,x,A,y,w)}b>I?je(f,v,x,!0,!1,C):_e(d,h,g,v,x,A,y,w,C)},bn=(f,d,h,g,v,x,A,y,w)=>{let b=0;const I=d.length;let C=f.length-1,N=I-1;for(;b<=C&&b<=N;){const L=f[b],D=d[b]=w?Ge(d[b]):Me(d[b]);if(Kt(L,D))T(L,D,h,null,v,x,A,y,w);else break;b++}for(;b<=C&&b<=N;){const L=f[C],D=d[N]=w?Ge(d[N]):Me(d[N]);if(Kt(L,D))T(L,D,h,null,v,x,A,y,w);else break;C--,N--}if(b>C){if(b<=N){const L=N+1,D=L<I?d[L].el:g;for(;b<=N;)T(null,d[b]=w?Ge(d[b]):Me(d[b]),h,D,v,x,A,y,w),b++}}else if(b>N)for(;b<=C;)Te(f[b],v,x,!0),b++;else{const L=b,D=b,q=new Map;for(b=D;b<=N;b++){const ve=d[b]=w?Ge(d[b]):Me(d[b]);ve.key!=null&&q.set(ve.key,b)}let W,ne=0;const we=N-D+1;let At=!1,Ka=0;const Yt=new Array(we);for(b=0;b<we;b++)Yt[b]=0;for(b=L;b<=C;b++){const ve=f[b];if(ne>=we){Te(ve,v,x,!0);continue}let Ie;if(ve.key!=null)Ie=q.get(ve.key);else for(W=D;W<=N;W++)if(Yt[W-D]===0&&Kt(ve,d[W])){Ie=W;break}Ie===void 0?Te(ve,v,x,!0):(Yt[Ie-D]=b+1,Ie>=Ka?Ka=Ie:At=!0,T(ve,d[Ie],h,null,v,x,A,y,w),ne++)}const Wa=At?pf(Yt):Pt;for(W=Wa.length-1,b=we-1;b>=0;b--){const ve=D+b,Ie=d[ve],Va=ve+1<I?d[ve+1].el:g;Yt[b]===0?T(null,Ie,h,Va,v,x,A,y,w):At&&(W<0||b!==Wa[W]?it(Ie,h,Va,2):W--)}}},it=(f,d,h,g,v=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){it(f.component.subTree,d,h,g);return}if(b&128){f.suspense.move(d,h,g);return}if(b&64){A.move(f,d,h,kt);return}if(A===re){r(x,d,h);for(let C=0;C<w.length;C++)it(w[C],d,h,g);r(f.anchor,d,h);return}if(A===Er){R(f,d,h);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,d,h),he(()=>y.enter(x),v);else{const{leave:C,delayLeave:N,afterLeave:L}=y,D=()=>r(x,d,h),q=()=>{C(x,()=>{D(),L&&L()})};N?N(x,D,q):q()}else r(x,d,h)},Te=(f,d,h,g=!1,v=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:I,patchFlag:C,dirs:N}=f;if(y!=null&&Wr(y,null,h,f,!0),I&256){d.ctx.deactivate(f);return}const L=I&1&&N,D=!Dn(f);let q;if(D&&(q=A&&A.onVnodeBeforeUnmount)&&Ne(q,d,f),I&6)Ts(f.component,h,g);else{if(I&128){f.suspense.unmount(h,g);return}L&&ot(f,null,d,"beforeUnmount"),I&64?f.type.remove(f,d,h,v,kt,g):b&&(x!==re||C>0&&C&64)?je(b,d,h,!1,!0):(x===re&&C&384||!v&&I&16)&&je(w,d,h),g&&Ba(f)}(D&&(q=A&&A.onVnodeUnmounted)||L)&&he(()=>{q&&Ne(q,d,f),L&&ot(f,null,d,"unmounted")},h)},Ba=f=>{const{type:d,el:h,anchor:g,transition:v}=f;if(d===re){Ss(h,g);return}if(d===Er){S(f);return}const x=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:y}=v,w=()=>A(h,x);y?y(f.el,x,w):w()}else x()},Ss=(f,d)=>{let h;for(;f!==d;)h=p(f),a(f),f=h;a(d)},Ts=(f,d,h)=>{const{bum:g,scope:v,update:x,subTree:A,um:y}=f;g&&$n(g),v.stop(),x&&(x.active=!1,Te(A,f,d,h)),y&&he(y,d),he(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},je=(f,d,h,g=!1,v=!1,x=0)=>{for(let A=x;A<f.length;A++)Te(f[A],d,h,g,v)},yn=f=>f.shapeFlag&6?yn(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),Ya=(f,d,h)=>{f==null?d._vnode&&Te(d._vnode,null,null,!0):T(d._vnode||null,f,d,null,null,null,h),ri(),So(),d._vnode=f},kt={p:T,um:Te,m:it,r:Ba,mt:xr,mc:_e,pc:V,pbc:De,n:yn,o:e};let _r,wr;return t&&([_r,wr]=t(kt)),{render:Ya,hydrate:_r,createApp:rf(Ya,_r)}}function st({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function mf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wo(e,t,n=!1){const r=e.children,a=t.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ge(a[i]),s.el=o.el),n||Wo(o,s)),s.type===mr&&(s.el=o.el)}}function pf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const hf=e=>e.__isTeleport,re=Symbol.for("v-fgt"),mr=Symbol.for("v-txt"),yt=Symbol.for("v-cmt"),Er=Symbol.for("v-stc"),Gt=[];let Oe=null;function z(e=!1){Gt.push(Oe=e?null:[])}function gf(){Gt.pop(),Oe=Gt[Gt.length-1]||null}let an=1;function hi(e){an+=e}function Vo(e){return e.dynamicChildren=an>0?Oe||Pt:null,gf(),an>0&&Oe&&Oe.push(e),e}function H(e,t,n,r,a,i){return Vo(B(e,t,n,r,a,i,!0))}function Ea(e,t,n,r,a){return Vo(Q(e,t,n,r,a,!0))}function Vr(e){return e?e.__v_isVNode===!0:!1}function Kt(e,t){return e.type===t.type&&e.key===t.key}const pr="__vInternal",qo=({key:e})=>e??null,zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ie(e)||ae(e)||$(e)?{i:xe,r:e,k:t,f:!!n}:e:null);function B(e,t=null,n=null,r=0,a=null,i=e===re?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qo(t),ref:t&&zn(t),scopeId:ur,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:xe};return s?(Ca(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ie(n)?8:16),an>0&&!o&&Oe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Oe.push(l),l}const Q=vf;function vf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===ql)&&(e=yt),Vr(e)){const s=Lt(e,t,!0);return n&&Ca(s,n),an>0&&!i&&Oe&&(s.shapeFlag&6?Oe[Oe.indexOf(e)]=s:Oe.push(s)),s.patchFlag|=-2,s}if(Pf(e)&&(e=e.__vccOpts),t){t=bf(t);let{class:s,style:l}=t;s&&!ie(s)&&(t.class=ma(s)),X(l)&&(wo(l)&&!M(l)&&(l=le({},l)),t.style=da(l))}const o=ie(e)?1:Rl(e)?128:hf(e)?64:X(e)?4:$(e)?2:0;return B(e,t,n,r,a,o,i,!0)}function bf(e){return e?wo(e)||pr in e?le({},e):e:null}function Lt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?yf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&qo(s),ref:t&&t.ref?n&&a?M(a)?a.concat(zn(t)):[a,zn(t)]:zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==re?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function dt(e=" ",t=0){return Q(mr,null,e,t)}function xt(e="",t=!1){return t?(z(),Ea(yt,null,e)):Q(yt,null,e)}function Me(e){return e==null||typeof e=="boolean"?Q(yt):M(e)?Q(re,null,e.slice()):typeof e=="object"?Ge(e):Q(mr,null,String(e))}function Ge(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lt(e)}function Ca(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ca(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(pr in t)?t._ctx=xe:a===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:xe},n=32):(t=String(t),r&64?(n=16,t=[dt(t)]):n=8);e.children=t,e.shapeFlag|=n}function yf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ma([t.class,r.class]));else if(a==="style")t.style=da([t.style,r.style]);else if(rr(a)){const i=t[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ne(e,t,n,r=null){Se(e,t,7,[n,r])}const xf=zo();let _f=0;function wf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||xf,i={uid:_f++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ks(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ho(r,a),emitsOptions:Io(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=El.bind(null,i),e.ce&&e.ce(i),i}let se=null,Pa,Ot,gi="__VUE_INSTANCE_SETTERS__";(Ot=Lr()[gi])||(Ot=Lr()[gi]=[]),Ot.push(e=>se=e),Pa=e=>{Ot.length>1?Ot.forEach(t=>t(e)):Ot[0](e)};const $t=e=>{Pa(e),e.scope.on()},vt=()=>{se&&se.scope.off(),Pa(null)};function Xo(e){return e.vnode.shapeFlag&4}let on=!1;function kf(e,t=!1){on=t;const{props:n,children:r}=e.vnode,a=Xo(e);of(e,n,a,t),ff(e,r);const i=a?Af(e,t):void 0;return on=!1,i}function Af(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ko(new Proxy(e.ctx,Jl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Ef(e):null;$t(e),zt();const i=Qe(r,e,0,[e.props,a]);if(Ut(),vt(),io(i)){if(i.then(vt,vt),t)return i.then(o=>{vi(e,o,t)}).catch(o=>{fr(o,e,0)});e.asyncDep=i}else vi(e,i,t)}else Jo(e,t)}function vi(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=Eo(t)),Jo(e,n)}let bi;function Jo(e,t,n){const r=e.type;if(!e.render){if(!t&&bi&&!r.render){const a=r.template||Aa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=le(le({isCustomElement:i,delimiters:s},o),l);r.render=bi(a,c)}}e.render=r.render||Ce}{$t(e),zt();try{Gl(e)}finally{Ut(),vt()}}}function Of(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}}))}function Ef(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Of(e)},slots:e.slots,emit:e.emit,expose:t}}function hr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Eo(ko(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jt)return Jt[n](e)},has(t,n){return n in t||n in Jt}}))}function Cf(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function Pf(e){return $(e)&&"__vccOpts"in e}const Re=(e,t)=>yl(e,t,on);function Sf(e,t,n){const r=arguments.length;return r===2?X(t)&&!M(t)?Vr(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Vr(n)&&(n=[n]),Q(e,t,n))}const Tf=Symbol.for("v-scx"),If=()=>jn(Tf),Nf="3.3.7",Mf="http://www.w3.org/2000/svg",ft=typeof document<"u"?document:null,yi=ft&&ft.createElement("template"),Rf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ft.createElementNS(Mf,e):ft.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{yi.innerHTML=r?`<svg>${e}</svg>`:e;const s=yi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ff=Symbol("_vtc");function Lf(e,t,n){const r=e[Ff];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const $f=Symbol("_vod");function Df(e,t,n){const r=e.style,a=ie(n);if(n&&!a){if(t&&!ie(t))for(const i in t)n[i]==null&&qr(r,i,"");for(const i in n)qr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),$f in e&&(r.display=i)}}const xi=/\s*!important$/;function qr(e,t,n){if(M(n))n.forEach(r=>qr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=jf(e,t);xi.test(n)?e.setProperty(jt(r),n.replace(xi,""),"important"):e[r]=n}}const _i=["Webkit","Moz","ms"],Cr={};function jf(e,t){const n=Cr[t];if(n)return n;let r=$e(t);if(r!=="filter"&&r in e)return Cr[t]=r;r=or(r);for(let a=0;a<_i.length;a++){const i=_i[a]+r;if(i in e)return Cr[t]=i}return t}const wi="http://www.w3.org/1999/xlink";function zf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(wi,t.slice(6,t.length)):e.setAttributeNS(wi,t,n);else{const i=Hs(t);n==null||i&&!lo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Uf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=lo(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function ct(e,t,n,r){e.addEventListener(t,n,r)}function Hf(e,t,n,r){e.removeEventListener(t,n,r)}const ki=Symbol("_vei");function Bf(e,t,n,r,a=null){const i=e[ki]||(e[ki]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Yf(t);if(r){const c=i[t]=Vf(r,a);ct(e,s,c,l)}else o&&(Hf(e,s,o,l),i[t]=void 0)}}const Ai=/(?:Once|Passive|Capture)$/;function Yf(e){let t;if(Ai.test(e)){t={};let r;for(;r=e.match(Ai);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),t]}let Pr=0;const Kf=Promise.resolve(),Wf=()=>Pr||(Kf.then(()=>Pr=0),Pr=Date.now());function Vf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Se(qf(r,n.value),t,5,[r])};return n.value=e,n.attached=Wf(),n}function qf(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Oi=/^on[a-z]/,Xf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Lf(e,r,a):t==="style"?Df(e,n,r):rr(t)?fa(t)||Bf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Jf(e,t,r,a))?Uf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),zf(e,t,r,a))};function Jf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Oi.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Oi.test(t)&&ie(n)?!1:t in e}const Gn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return M(t)?n=>$n(t,n):t};function Gf(e){e.target.composing=!0}function Ei(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Nt=Symbol("_assign"),Zf={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Nt]=Gn(a);const i=r||a.props&&a.props.type==="number";ct(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Kn(s)),e[Nt](s)}),n&&ct(e,"change",()=>{e.value=e.value.trim()}),t||(ct(e,"compositionstart",Gf),ct(e,"compositionend",Ei),ct(e,"change",Ei))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Nt]=Gn(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Kn(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Qf={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=ar(t);ct(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Kn(Zn(o)):Zn(o));e[Nt](e.multiple?a?new Set(i):i:i[0])}),e[Nt]=Gn(r)},mounted(e,{value:t}){Ci(e,t)},beforeUpdate(e,t,n){e[Nt]=Gn(n)},updated(e,{value:t}){Ci(e,t)}};function Ci(e,t){const n=e.multiple;if(!(n&&!M(t)&&!ar(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=Zn(i);if(n)M(t)?i.selected=Ys(t,o)>-1:i.selected=t.has(o);else if(sr(Zn(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Zn(e){return"_value"in e?e._value:e.value}const ec=["ctrl","shift","alt","meta"],tc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ec.some(n=>e[`${n}Key`]&&!t.includes(n))},nc=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=tc[t[a]];if(i&&i(n,t))return}return e(n,...r)},rc=le({patchProp:Xf},Rf);let Pi;function ac(){return Pi||(Pi=uf(rc))}const ic=(...e)=>{const t=ac().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=oc(r);if(!a)return;const i=t._component;!$(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function oc(e){return ie(e)?document.querySelector(e):e}const sc={class:"container-fluid d-flex flex-wrap justify-content-center py-3 mb-4 text-bg-secondary"},lc={class:"d-flex fs-4 mb-0 me-md-auto"},fc={class:"fs-4 text-decoration-none text-light",href:"https://github.com/mlocati/unipoints"},cc=We({__name:"HeaderElement",props:{unicodeVersion:{}},setup(e){return(t,n)=>{const r=ka("font-awesome-icon");return z(),H("header",sc,[B("h1",lc,"Codepoints from Unicode v"+Pe(t.unicodeVersion),1),B("a",fc,[Q(r,{icon:["fab","github"]})])])}}}),uc={class:"container-fluid"},dc={class:"input-group mb-3"},mc=B("span",{class:"input-group-text"},"Block",-1),pc=B("option",{value:null},"any",-1),hc=["label"],gc={key:0,disabled:""},vc=["value"],bc=B("span",{class:"input-group-text"},"Search",-1),yc=We({__name:"DataFilter",props:{unipointsData:{}},emits:["change"],setup(e,{emit:t}){const n=e;let r=tn(null),a=tn(""),i=null;function o(){i!==null&&(clearTimeout(i),i=null)}const s=t;function l(u,m){return!m.some(p=>{if(!u.name.toUpperCase().includes(p))return!0})}gt(r,async()=>{c()}),gt(a,async()=>{o(),i=setTimeout(()=>c(),300)});function c(){o();const u=a.value.split(/\s+/).filter(p=>p.length>0).map(p=>p.toUpperCase()),m=[];n.unipointsData!==null&&n.unipointsData.planes.forEach(p=>{if(r.value!==null&&r.value.plane!==p.id)return;const _=[];p.blocks.forEach(F=>{if(r.value!==null&&r.value.block!==void 0&&r.value.block!==F.codename)return;let T;u.length===0?T=F.codepoints:T=F.codepoints.filter(j=>l(j,u)),T.length!==0&&_.push({block:F,codepoints:T})}),_.length!==0&&m.push({plane:p,blocks:_})}),s("change",m)}return Lo(()=>c()),(u,m)=>(z(),H("div",uc,[B("div",dc,[mc,u.unipointsData!==null?ii((z(),H("select",{key:0,class:"form-control","onUpdate:modelValue":m[0]||(m[0]=p=>ae(r)?r.value=p:r=p)},[pc,(z(!0),H(re,null,Xt(u.unipointsData.planes,p=>(z(),H("optgroup",{key:p.id.toString(),label:`Plane ${p.id}`+(p.name!==""?` (${p.name})`:p.unassigned?" (unassigned)":"")},[p.blocks.length===0?(z(),H("option",gc,"No blocks in this plane")):(z(!0),H(re,{key:1},Xt(p.blocks,_=>(z(),H("option",{key:`${p.id}-${_.codename}`,value:{plane:p.id,block:_.codename}},Pe(_.name),9,vc))),128))],8,hc))),128))],512)),[[Qf,Vn(r)]]):xt("",!0),bc,ii(B("input",{type:"search",class:"form-control","onUpdate:modelValue":m[1]||(m[1]=p=>ae(a)?a.value=p:a=p),placeholder:"Filter by name"},null,512),[[Zf,Vn(a),void 0,{trim:!0}]])])]))}}),xc={colspan:"99",class:"text-center text-light bg-dark"},_c={class:"mb-0"},wc=We({__name:"PlaneViewer",props:{plane:{}},setup(e){return(t,n)=>(z(),H("tr",null,[B("th",xc,[B("h3",_c,[dt(" Plane "+Pe(t.plane.id)+" ",1),t.plane.name!==""?(z(),H(re,{key:0},[dt(" ("),t.plane.shortName!==""?(z(),H(re,{key:0},[dt(Pe(t.plane.shortName)+" - ",1)],64)):xt("",!0),dt(Pe(t.plane.name)+") ",1)],64)):xt("",!0)])])]))}}),kc={colspan:"99",class:"text-center text-light bg-secondary"},Ac={class:"mb-0"},Si=We({__name:"BlockViewer",props:{block:{}},setup(e){return(t,n)=>(z(),H("tr",null,[B("th",kc,[B("h4",Ac,Pe(t.block.name),1)])]))}}),Oc={class:"copiable"},Ec={key:0},Ti="bg-success",Ii="bg-danger",Cc=We({__name:"CopiableText",props:{text:{},displayText:{},code:{type:[Boolean,null]}},setup(e){var c;const t=e,n=Re(()=>t.displayText??t.text),r=tn(null);let a=null;function i(){r.value===null||a===null||(clearTimeout(a),a=null,r.value.classList.remove(Ti,Ii))}function o(u){i(),r.value!==null&&(r.value.classList.add(u?Ti:Ii),a=setTimeout(()=>i(),500))}let s;(c=navigator==null?void 0:navigator.clipboard)!=null&&c.writeText?s=()=>navigator.clipboard.writeText(t.text):s=()=>new Promise((u,m)=>{const p=document.createElement("textarea");p.style.width="1px",p.style.height="1px",p.style.overflow="hidden",p.style.top="0",p.style.left="0",p.style.position="fixed",p.value=t.text,document.body.appendChild(p);try{p.focus(),p.select(),document.execCommand("copy")?u():m(new Error("Copy command failed"))}catch(_){m(_)}finally{document.body.removeChild(p)}});function l(u){u.preventDefault(),i(),s().then(()=>{o(!0)}).catch(m=>{console.error(m),o(!1)})}return(u,m)=>{const p=ka("font-awesome-icon");return z(),H("span",Oc,[u.code?(z(),H("code",Ec,Pe(n.value),1)):(z(),H(re,{key:1},[dt(Pe(n.value),1)],64)),B("a",{href:"#",title:"Copy to clipboard",ref_key:"link",ref:r,onClick:l},[Q(p,{icon:["far","copy"]})],512)])}}});const Go=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Sr=Go(Cc,[["__scopeId","data-v-7e73e309"]]),Zo=e=>(Cl("data-v-e771dd01"),e=e(),Pl(),e),Pc={class:"char"},Sc={class:"mb-0"},Tc=Zo(()=>B("br",null,null,-1)),Ic=Zo(()=>B("br",null,null,-1)),Nc=We({__name:"CodepointViewer",props:{block:{},codepoint:{}},setup(e){const t=e,n=Re(()=>t.codepoint.id.toString(16).toUpperCase());return(r,a)=>(z(),H("tr",null,[B("td",null,[Q(Sr,{text:`"\\u{${n.value}}"`,"display-text":`\\u{${n.value}}`,code:!0},null,8,["text","display-text"])]),B("td",Pc,[B("pre",Sc,Pe(r.codepoint.char),1)]),B("td",null,[B("code",null,Pe(r.codepoint.name),1)]),B("td",null,[Q(Sr,{text:`\\MLUnipoints\\Codepoint::${r.codepoint.codename}`,"display-text":`Codepoint::${r.codepoint.codename}`,code:!0},null,8,["text","display-text"]),Tc,Q(Sr,{text:`\\MLUnipoints\\Codepoint\\${r.block.codename}::${r.codepoint.codename}`,"display-text":`Codepoint\\${r.block.codename}::${r.codepoint.codename}`,code:!0},null,8,["text","display-text"]),Ic])]))}});const Mc=Go(Nc,[["__scopeId","data-v-e771dd01"]]),Rc={class:"container-fluid"},Fc={key:0,class:"alert alert-info"},Lc={key:1,class:"table table-striped table-hover table-sm"},$c=B("colgroup",null,[B("col",{width:"1"}),B("col",{width:"1"})],-1),Dc={key:0},jc={key:0},zc={class:"text-center",colspan:"99"},En=1e3,Uc=We({__name:"DataViewer",props:{filterResults:{}},setup(e){let t=tn(En),n=!1;const r=e;gt(r.filterResults,async()=>{t.value=En});const a=Re(()=>{if(n=!1,r.filterResults===null)return[];let i=t.value;const o=[];return r.filterResults.some(s=>{const l={plane:s.plane,blocks:[]};if(s.blocks.some(c=>{const u={block:c.block,codepoints:[]};if(c.codepoints.length<=i?u.codepoints=c.codepoints:u.codepoints=c.codepoints.slice(0,i),l.blocks.push(u),i-=u.codepoints.length,i<=0)return n=!0,!0}),o.push(l),i<=0)return!0}),o});return(i,o)=>(z(),H("div",Rc,[a.value.length===0?(z(),H("div",Fc,"No results")):(z(),H("table",Lc,[$c,(z(!0),H(re,null,Xt(a.value,s=>(z(),H(re,{key:s.plane.id.toString()},[B("thead",null,[Q(wc,{plane:s.plane},null,8,["plane"]),Q(Si,{block:s.blocks[0].block},null,8,["block"])]),(z(!0),H(re,null,Xt(s.blocks,(l,c)=>(z(),H(re,{key:`${s.plane.id}@${l.codename}`},[c!==0?(z(),H("thead",Dc,[Q(Si,{block:l.block},null,8,["block"])])):xt("",!0),B("tbody",null,[(z(!0),H(re,null,Xt(l.codepoints,u=>(z(),Ea(Mc,{key:u.name,block:l.block,codepoint:u},null,8,["block","codepoint"]))),128))])],64))),128))],64))),128)),Vn(n)?(z(),H("tfoot",jc,[B("tr",null,[B("td",zc,[B("button",{class:"btn btn-secondary",onClick:o[0]||(o[0]=nc(s=>ae(t)?t.value+=En:t+=En,["prevent"]))}," Show more ")])])])):xt("",!0)]))]))}}),Hc={key:0,class:"container-fluid"},Bc={key:0,class:"alert alert-danger mt-5 text-center"},Yc={key:1,class:"alert alert-info mt-5 text-center fs-4"},Kc=B("br",null,null,-1),Wc={key:0},Vc=We({__name:"App",props:{unipointsData:{},loadError:{}},setup(e){const t=tn(null);return(n,r)=>{const a=ka("font-awesome-icon");return n.unipointsData===null?(z(),H("main",Hc,[n.loadError!==null?(z(),H("div",Bc,Pe(n.loadError),1)):(z(),H("div",Yc,[dt(" Loading..."),Kc,Q(a,{icon:"fa-solid fa-spinner",spin:""})]))])):(z(),H(re,{key:1},[Q(cc,{"unicode-version":n.unipointsData.unicodeVersion},null,8,["unicode-version"]),n.unipointsData?(z(),H("main",Wc,[Q(yc,{"unipoints-data":n.unipointsData,onChange:r[0]||(r[0]=i=>t.value=i)},null,8,["unipoints-data"]),t.value!==null?(z(),Ea(Uc,{key:0,filterResults:t.value},null,8,["filterResults"])):xt("",!0)])):xt("",!0)],64))}}});let Tr=null;function qc(){return Tr===null&&(Tr=fetch("/assets/data.json").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})),Tr}function Ni(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ni(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ni(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qn(e){"@babel/helpers - typeof";return Qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qn(e)}function Xc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Mi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Jc(e,t,n){return t&&Mi(e.prototype,t),n&&Mi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sa(e,t){return Zc(e)||eu(e,t)||Qo(e,t)||nu()}function mn(e){return Gc(e)||Qc(e)||Qo(e)||tu()}function Gc(e){if(Array.isArray(e))return Xr(e)}function Zc(e){if(Array.isArray(e))return e}function Qc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function eu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Qo(e,t){if(e){if(typeof e=="string")return Xr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xr(e,t)}}function Xr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ri=function(){},Ta={},es={},ts=null,ns={mark:Ri,measure:Ri};try{typeof window<"u"&&(Ta=window),typeof document<"u"&&(es=document),typeof MutationObserver<"u"&&(ts=MutationObserver),typeof performance<"u"&&(ns=performance)}catch{}var ru=Ta.navigator||{},Fi=ru.userAgent,Li=Fi===void 0?"":Fi,tt=Ta,Z=es,$i=ts,Cn=ns;tt.document;var qe=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",rs=~Li.indexOf("MSIE")||~Li.indexOf("Trident/"),Pn,Sn,Tn,In,Nn,Be="___FONT_AWESOME___",Jr=16,as="fa",is="svg-inline--fa",_t="data-fa-i2svg",Gr="data-fa-pseudo-element",au="data-fa-pseudo-element-pending",Ia="data-prefix",Na="data-icon",Di="fontawesome-i2svg",iu="async",ou=["HTML","HEAD","STYLE","SCRIPT"],os=function(){try{return!0}catch{return!1}}(),G="classic",te="sharp",Ma=[G,te];function pn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[G]}})}var sn=pn((Pn={},oe(Pn,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),oe(Pn,te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Pn)),ln=pn((Sn={},oe(Sn,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),oe(Sn,te,{solid:"fass",regular:"fasr",light:"fasl"}),Sn)),fn=pn((Tn={},oe(Tn,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),oe(Tn,te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Tn)),su=pn((In={},oe(In,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),oe(In,te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),In)),lu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,ss="fa-layers-text",fu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,cu=pn((Nn={},oe(Nn,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),oe(Nn,te,{900:"fass",400:"fasr",300:"fasl"}),Nn)),ls=[1,2,3,4,5,6,7,8,9,10],uu=ls.concat([11,12,13,14,15,16,17,18,19,20]),du=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},cn=new Set;Object.keys(ln[G]).map(cn.add.bind(cn));Object.keys(ln[te]).map(cn.add.bind(cn));var mu=[].concat(Ma,mn(cn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mt.GROUP,mt.SWAP_OPACITY,mt.PRIMARY,mt.SECONDARY]).concat(ls.map(function(e){return"".concat(e,"x")})).concat(uu.map(function(e){return"w-".concat(e)})),Zt=tt.FontAwesomeConfig||{};function pu(e){var t=Z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function hu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Z&&typeof Z.querySelector=="function"){var gu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gu.forEach(function(e){var t=Sa(e,2),n=t[0],r=t[1],a=hu(pu(n));a!=null&&(Zt[r]=a)})}var fs={styleDefault:"solid",familyDefault:"classic",cssPrefix:as,replacementClass:is,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Zt.familyPrefix&&(Zt.cssPrefix=Zt.familyPrefix);var Dt=E(E({},fs),Zt);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var P={};Object.keys(fs).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Dt[e]=n,Qt.forEach(function(r){return r(P)})},get:function(){return Dt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Dt.cssPrefix=t,Qt.forEach(function(n){return n(P)})},get:function(){return Dt.cssPrefix}});tt.FontAwesomeConfig=P;var Qt=[];function vu(e){return Qt.push(e),function(){Qt.splice(Qt.indexOf(e),1)}}var Je=Jr,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bu(e){if(!(!e||!qe)){var t=Z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Z.head.insertBefore(t,r),e}}var yu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function un(){for(var e=12,t="";e-- >0;)t+=yu[Math.random()*62|0];return t}function Ht(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ra(e){return e.classList?Ht(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function cs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(cs(e[n]),'" ')},"").trim()}function gr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Fa(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function _u(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function wu(e){var t=e.transform,n=e.width,r=n===void 0?Jr:n,a=e.height,i=a===void 0?Jr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&rs?l+="translate(".concat(t.x/Je-r/2,"em, ").concat(t.y/Je-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Je,"em), calc(-50% + ").concat(t.y/Je,"em)) "):l+="translate(".concat(t.x/Je,"em, ").concat(t.y/Je,"em) "),l+="scale(".concat(t.size/Je*(t.flipX?-1:1),", ").concat(t.size/Je*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ku=`:root, :host {
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
}`;function us(){var e=as,t=is,n=P.cssPrefix,r=P.replacementClass,a=ku;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ji=!1;function Ir(){P.autoAddCss&&!ji&&(bu(us()),ji=!0)}var Au={mixout:function(){return{dom:{css:us,insertCss:Ir}}},hooks:function(){return{beforeDOMElementCreation:function(){Ir()},beforeI2svg:function(){Ir()}}}},Ye=tt||{};Ye[Be]||(Ye[Be]={});Ye[Be].styles||(Ye[Be].styles={});Ye[Be].hooks||(Ye[Be].hooks={});Ye[Be].shims||(Ye[Be].shims=[]);var Ee=Ye[Be],ds=[],Ou=function e(){Z.removeEventListener("DOMContentLoaded",e),er=1,ds.map(function(t){return t()})},er=!1;qe&&(er=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),er||Z.addEventListener("DOMContentLoaded",Ou));function Eu(e){qe&&(er?setTimeout(e,0):ds.push(e))}function hn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?cs(e):"<".concat(t," ").concat(xu(r),">").concat(i.map(hn).join(""),"</").concat(t,">")}function zi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Cu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Nr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Cu(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function Pu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Zr(e){var t=Pu(e);return t.length===1?t[0].toString(16):null}function Su(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ui(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Qr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ui(t);typeof Ee.hooks.addPack=="function"&&!a?Ee.hooks.addPack(e,Ui(t)):Ee.styles[e]=E(E({},Ee.styles[e]||{}),i),e==="fas"&&Qr("fa",t)}var Mn,Rn,Fn,Et=Ee.styles,Tu=Ee.shims,Iu=(Mn={},oe(Mn,G,Object.values(fn[G])),oe(Mn,te,Object.values(fn[te])),Mn),La=null,ms={},ps={},hs={},gs={},vs={},Nu=(Rn={},oe(Rn,G,Object.keys(sn[G])),oe(Rn,te,Object.keys(sn[te])),Rn);function Mu(e){return~mu.indexOf(e)}function Ru(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Mu(a)?a:null}var bs=function(){var t=function(i){return Nr(Et,function(o,s,l){return o[l]=Nr(s,i,{}),o},{})};ms=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ps=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),vs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Et||P.autoFetchSvg,r=Nr(Tu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});hs=r.names,gs=r.unicodes,La=vr(P.styleDefault,{family:P.familyDefault})};vu(function(e){La=vr(e.styleDefault,{family:P.familyDefault})});bs();function $a(e,t){return(ms[e]||{})[t]}function Fu(e,t){return(ps[e]||{})[t]}function pt(e,t){return(vs[e]||{})[t]}function ys(e){return hs[e]||{prefix:null,iconName:null}}function Lu(e){var t=gs[e],n=$a("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function nt(){return La}var Da=function(){return{prefix:null,iconName:null,rest:[]}};function vr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?G:n,a=sn[r][e],i=ln[r][e]||ln[r][a],o=e in Ee.styles?e:null;return i||o||null}var Hi=(Fn={},oe(Fn,G,Object.keys(fn[G])),oe(Fn,te,Object.keys(fn[te])),Fn);function br(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},oe(t,G,"".concat(P.cssPrefix,"-").concat(G)),oe(t,te,"".concat(P.cssPrefix,"-").concat(te)),t),o=null,s=G;(e.includes(i[G])||e.some(function(c){return Hi[G].includes(c)}))&&(s=G),(e.includes(i[te])||e.some(function(c){return Hi[te].includes(c)}))&&(s=te);var l=e.reduce(function(c,u){var m=Ru(P.cssPrefix,u);if(Et[u]?(u=Iu[s].includes(u)?su[s][u]:u,o=u,c.prefix=u):Nu[s].indexOf(u)>-1?(o=u,c.prefix=vr(u,{family:s})):m?c.iconName=m:u!==P.replacementClass&&u!==i[G]&&u!==i[te]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var p=o==="fa"?ys(c.iconName):{},_=pt(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||_||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Et.far&&Et.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},Da());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===te&&(Et.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=pt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=nt()||"fas"),l}var $u=function(){function e(){Xc(this,e),this.definitions={}}return Jc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Qr(s,o[s]);var l=fn[G][s];l&&Qr(l,o[s]),bs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Bi=[],Ct={},Mt={},Du=Object.keys(Mt);function ju(e,t){var n=t.mixoutsTo;return Bi=e,Ct={},Object.keys(Mt).forEach(function(r){Du.indexOf(r)===-1&&delete Mt[r]}),Bi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Qn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ct[o]||(Ct[o]=[]),Ct[o].push(i[o])})}r.provides&&r.provides(Mt)}),n}function ea(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ct[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function wt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ct[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ke(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Mt[e]?Mt[e].apply(null,t):void 0}function ta(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||nt();if(t)return t=pt(n,t)||t,zi(xs.definitions,n,t)||zi(Ee.styles,n,t)}var xs=new $u,zu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,wt("noAuto")},Uu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qe?(wt("beforeI2svg",t),Ke("pseudoElements2svg",t),Ke("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Eu(function(){Bu({autoReplaceSvgRoot:n}),wt("watch",t)})}},Hu={icon:function(t){if(t===null)return null;if(Qn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=vr(t[0]);return{prefix:r,iconName:pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(lu))){var a=br(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||nt(),iconName:pt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=nt();return{prefix:i,iconName:pt(i,t)||t}}}},be={noAuto:zu,config:P,dom:Uu,parse:Hu,library:xs,findIconDefinition:ta,toHtml:hn},Bu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(Ee.styles).length>0||P.autoFetchSvg)&&qe&&P.autoReplaceSvg&&be.dom.i2svg({node:r})};function yr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return hn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(qe){var r=Z.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Yu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Fa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=gr(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ku(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function ja(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,_=p===void 0?!1:p,F=r.found?r:n,T=F.width,j=F.height,k=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(ye){return m.classes.indexOf(ye)===-1}).filter(function(ye){return ye!==""||!!ye}).concat(m.classes).join(" "),R={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(j)})},S=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/j*16*.0625,"em")}:{};_&&(R.attributes[_t]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(u||un())},children:[l]}),delete R.attributes.title);var K=E(E({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},S),m.styles)}),fe=r.found&&n.found?Ke("generateAbstractMask",K)||{children:[],attributes:{}}:Ke("generateAbstractIcon",K)||{children:[],attributes:{}},ce=fe.children,_e=fe.attributes;return K.children=ce,K.attributes=_e,s?Ku(K):Yu(K)}function Yi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[_t]="");var u=E({},o.styles);Fa(a)&&(u.transform=wu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=gr(u);m.length>0&&(c.style=m);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Wu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=gr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Mr=Ee.styles;function na(e){var t=e[0],n=e[1],r=e.slice(4),a=Sa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(mt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(mt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Vu={found:!1,width:512,height:512};function qu(e,t){!os&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ra(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=nt()),new Promise(function(r,a){if(Ke("missingIconAbstract"),n==="fa"){var i=ys(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Mr[t]&&Mr[t][e]){var o=Mr[t][e];return r(na(o))}qu(e,t),r(E(E({},Vu),{},{icon:P.showMissingIcons&&e?Ke("missingIconAbstract")||{}:{}}))})}var Ki=function(){},aa=P.measurePerformance&&Cn&&Cn.mark&&Cn.measure?Cn:{mark:Ki,measure:Ki},qt='FA "6.4.2"',Xu=function(t){return aa.mark("".concat(qt," ").concat(t," begins")),function(){return _s(t)}},_s=function(t){aa.mark("".concat(qt," ").concat(t," ends")),aa.measure("".concat(qt," ").concat(t),"".concat(qt," ").concat(t," begins"),"".concat(qt," ").concat(t," ends"))},za={begin:Xu,end:_s},Un=function(){};function Wi(e){var t=e.getAttribute?e.getAttribute(_t):null;return typeof t=="string"}function Ju(e){var t=e.getAttribute?e.getAttribute(Ia):null,n=e.getAttribute?e.getAttribute(Na):null;return t&&n}function Gu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Zu(){if(P.autoReplaceSvg===!0)return Hn.replace;var e=Hn[P.autoReplaceSvg];return e||Hn.replace}function Qu(e){return Z.createElementNS("http://www.w3.org/2000/svg",e)}function ed(e){return Z.createElement(e)}function ws(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Qu:ed:n;if(typeof e=="string")return Z.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ws(o,{ceFn:r}))}),a}function td(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Hn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ws(a),n)}),n.getAttribute(_t)===null&&P.keepOriginalSource){var r=Z.createComment(td(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ra(n).indexOf(P.replacementClass))return Hn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return hn(s)}).join(`
`);n.setAttribute(_t,""),n.innerHTML=o}};function Vi(e){e()}function ks(e,t){var n=typeof t=="function"?t:Un;if(e.length===0)n();else{var r=Vi;P.mutateApproach===iu&&(r=tt.requestAnimationFrame||Vi),r(function(){var a=Zu(),i=za.begin("mutate");e.map(a),i(),n()})}}var Ua=!1;function As(){Ua=!0}function ia(){Ua=!1}var tr=null;function qi(e){if($i&&P.observeMutations){var t=e.treeCallback,n=t===void 0?Un:t,r=e.nodeCallback,a=r===void 0?Un:r,i=e.pseudoElementsCallback,o=i===void 0?Un:i,s=e.observeMutationsRoot,l=s===void 0?Z:s;tr=new $i(function(c){if(!Ua){var u=nt();Ht(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Wi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Wi(m.target)&&~du.indexOf(m.attributeName))if(m.attributeName==="class"&&Ju(m.target)){var p=br(Ra(m.target)),_=p.prefix,F=p.iconName;m.target.setAttribute(Ia,_||u),F&&m.target.setAttribute(Na,F)}else Gu(m.target)&&a(m.target)})}}),qe&&tr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function nd(){tr&&tr.disconnect()}function rd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ad(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=br(Ra(e));return a.prefix||(a.prefix=nt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Fu(a.prefix,e.innerText)||$a(a.prefix,Zr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function id(e){var t=Ht(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||un()):(t["aria-hidden"]="true",t.focusable="false")),t}function od(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ad(e),r=n.iconName,a=n.prefix,i=n.rest,o=id(e),s=ea("parseNodeAttributes",{},e),l=t.styleParser?rd(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var sd=Ee.styles;function Os(e){var t=P.autoReplaceSvg==="nest"?Xi(e,{styleParser:!1}):Xi(e);return~t.extra.classes.indexOf(ss)?Ke("generateLayersText",e,t):Ke("generateSvgReplacementMutation",e,t)}var rt=new Set;Ma.map(function(e){rt.add("fa-".concat(e))});Object.keys(sn[G]).map(rt.add.bind(rt));Object.keys(sn[te]).map(rt.add.bind(rt));rt=mn(rt);function Ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qe)return Promise.resolve();var n=Z.documentElement.classList,r=function(m){return n.add("".concat(Di,"-").concat(m))},a=function(m){return n.remove("".concat(Di,"-").concat(m))},i=P.autoFetchSvg?rt:Ma.map(function(u){return"fa-".concat(u)}).concat(Object.keys(sd));i.includes("fa")||i.push("fa");var o=[".".concat(ss,":not([").concat(_t,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(_t,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ht(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=za.begin("onTree"),c=s.reduce(function(u,m){try{var p=Os(m);p&&u.push(p)}catch(_){os||_.name==="MissingIcon"&&console.error(_)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(p){ks(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),m(p)})})}function ld(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Os(e).then(function(n){n&&ks([n],t)})}function fd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ta(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ta(a||{})),e(r,E(E({},n),{},{mask:a}))}}var cd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Le:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,p=m===void 0?null:m,_=n.titleId,F=_===void 0?null:_,T=n.classes,j=T===void 0?[]:T,k=n.attributes,O=k===void 0?{}:k,R=n.styles,S=R===void 0?{}:R;if(t){var K=t.prefix,fe=t.iconName,ce=t.icon;return yr(E({type:"icon"},t),function(){return wt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(p?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(F||un()):(O["aria-hidden"]="true",O.focusable="false")),ja({icons:{main:na(ce),mask:l?na(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:fe,transform:E(E({},Le),a),symbol:o,title:p,maskId:u,titleId:F,extra:{attributes:O,styles:S,classes:j}})})}},ud={mixout:function(){return{icon:fd(cd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ji,n.nodeCallback=ld,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?Z:r,i=n.callback,o=i===void 0?function(){}:i;return Ji(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,p=r.extra;return new Promise(function(_,F){Promise.all([ra(a,s),u.iconName?ra(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var j=Sa(T,2),k=j[0],O=j[1];_([n,ja({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=gr(s);l.length>0&&(a.style=l);var c;return Fa(o)&&(c=Ke("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},dd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return yr({type:"layer"},function(){wt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(mn(i)).join(" ")},children:o}]})}}}},md={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return yr({type:"counter",content:n},function(){return wt("beforeDOMElementCreation",{content:n,params:r}),Wu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(mn(s))}})})}}}},pd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Le:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,p=r.styles,_=p===void 0?{}:p;return yr({type:"text",content:n},function(){return wt("beforeDOMElementCreation",{content:n,params:r}),Yi({content:n,transform:E(E({},Le),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(P.cssPrefix,"-layers-text")].concat(mn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(rs){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Yi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},hd=new RegExp('"',"ug"),Gi=[1105920,1112319];function gd(e){var t=e.replace(hd,""),n=Su(t,0),r=n>=Gi[0]&&n<=Gi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Zr(a?t[0]:t),isSecondary:r||a}}function Zi(e,t){var n="".concat(au).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ht(e.children),o=i.filter(function(ce){return ce.getAttribute(Gr)===t})[0],s=tt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(fu),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?te:G,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ln[p][l[2].toLowerCase()]:cu[p][c],F=gd(m),T=F.value,j=F.isSecondary,k=l[0].startsWith("FontAwesome"),O=$a(_,T),R=O;if(k){var S=Lu(T);S.iconName&&S.prefix&&(O=S.iconName,_=S.prefix)}if(O&&!j&&(!o||o.getAttribute(Ia)!==_||o.getAttribute(Na)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var K=od(),fe=K.extra;fe.attributes[Gr]=t,ra(O,_).then(function(ce){var _e=ja(E(E({},K),{},{icons:{main:ce,mask:Da()},prefix:_,iconName:R,extra:fe,watchable:!0})),ye=Z.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ye,e.firstChild):e.appendChild(ye),ye.outerHTML=_e.map(function(De){return hn(De)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function vd(e){return Promise.all([Zi(e,"::before"),Zi(e,"::after")])}function bd(e){return e.parentNode!==document.head&&!~ou.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Gr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Qi(e){if(qe)return new Promise(function(t,n){var r=Ht(e.querySelectorAll("*")).filter(bd).map(vd),a=za.begin("searchPseudoElements");As(),Promise.all(r).then(function(){a(),ia(),t()}).catch(function(){a(),ia(),n()})})}var yd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Qi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Z:r;P.searchPseudoElements&&Qi(a)}}},eo=!1,xd={mixout:function(){return{dom:{unwatch:function(){As(),eo=!0}}}},hooks:function(){return{bootstrap:function(){qi(ea("mutationObserverCallbacks",{}))},noAuto:function(){nd()},watch:function(n){var r=n.observeMutationsRoot;eo?ia():qi(ea("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},to=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},_d={mixout:function(){return{parse:{transform:function(n){return to(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=to(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:p};return{tag:"g",attributes:E({},_.outer),children:[{tag:"g",attributes:E({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),_.path)}]}]}}}},Rr={x:0,y:0,width:"100%",height:"100%"};function no(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function wd(e){return e.tag==="g"?e.children:[e]}var kd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?br(a.split(" ").map(function(o){return o.trim()})):Da();return i.prefix||(i.prefix=nt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,p=o.icon,_=_u({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:E(E({},Rr),{},{fill:"white"})},T=u.children?{children:u.children.map(no)}:{},j={tag:"g",attributes:E({},_.inner),children:[no(E({tag:u.tag,attributes:E(E({},u.attributes),_.path)},T))]},k={tag:"g",attributes:E({},_.outer),children:[j]},O="mask-".concat(s||un()),R="clip-".concat(s||un()),S={tag:"mask",attributes:E(E({},Rr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,k]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:wd(p)},S]};return r.push(K,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(O,")")},Rr)}),{children:r,attributes:a}}}},Ad={provides:function(t){var n=!1;tt.matchMedia&&(n=tt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Od={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ed=[Au,ud,dd,md,pd,yd,xd,_d,kd,Ad,Od];ju(Ed,{mixoutsTo:be});be.noAuto;be.config;var Cd=be.library;be.dom;var oa=be.parse;be.findIconDefinition;be.toHtml;var Pd=be.icon;be.layer;be.text;be.counter;function ro(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ro(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ro(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nr(e){"@babel/helpers - typeof";return nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nr(e)}function pe(e,t,n){return t=Nd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Td(e,t){if(e==null)return{};var n=Sd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Id(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Nd(e){var t=Id(e,"string");return typeof t=="symbol"?t:String(t)}var Md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Es={exports:{}};(function(e){(function(t){var n=function(k,O,R){if(!c(O)||m(O)||p(O)||_(O)||l(O))return O;var S,K=0,fe=0;if(u(O))for(S=[],fe=O.length;K<fe;K++)S.push(n(k,O[K],R));else{S={};for(var ce in O)Object.prototype.hasOwnProperty.call(O,ce)&&(S[k(ce,R)]=n(k,O[ce],R))}return S},r=function(k,O){O=O||{};var R=O.separator||"_",S=O.split||/(?=[A-Z])/;return k.split(S).join(R)},a=function(k){return F(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,R){return R?R.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},u=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},p=function(k){return s.call(k)=="[object RegExp]"},_=function(k){return s.call(k)=="[object Boolean]"},F=function(k){return k=k-0,k===k},T=function(k,O){var R=O&&"process"in O?O.process:O;return typeof R!="function"?k:function(S,K){return R(S,k,K)}},j={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(T(a,O),k)},decamelizeKeys:function(k,O){return n(T(o,O),k,O)},pascalizeKeys:function(k,O){return n(T(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=j:t.humps=j})(Md)})(Es);var Rd=Es.exports,Fd=["class","style"];function Ld(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Rd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function $d(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Cs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Cs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=$d(u);break;case"style":l.style=Ld(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Td(n,Fd);return Sf(e.tag,Ue(Ue(Ue({},t),{},{class:a.class,style:Ue(Ue({},a.style),o)},a.attrs),s),r)}var Ps=!1;try{Ps=!0}catch{}function Dd(){if(!Ps&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Fr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?pe({},e,t):{}}function jd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},pe(t,"fa-".concat(e.size),e.size!==null),pe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),pe(t,"fa-pull-".concat(e.pull),e.pull!==null),pe(t,"fa-swap-opacity",e.swapOpacity),pe(t,"fa-bounce",e.bounce),pe(t,"fa-shake",e.shake),pe(t,"fa-beat",e.beat),pe(t,"fa-fade",e.fade),pe(t,"fa-beat-fade",e.beatFade),pe(t,"fa-flash",e.flash),pe(t,"fa-spin-pulse",e.spinPulse),pe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ao(e){if(e&&nr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(oa.icon)return oa.icon(e);if(e===null)return null;if(nr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var zd=We({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Re(function(){return ao(t.icon)}),i=Re(function(){return Fr("classes",jd(t))}),o=Re(function(){return Fr("transform",typeof t.transform=="string"?oa.transform(t.transform):t.transform)}),s=Re(function(){return Fr("mask",ao(t.mask))}),l=Re(function(){return Pd(a.value,Ue(Ue(Ue(Ue({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});gt(l,function(u){if(!u)return Dd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=Re(function(){return l.value?Cs(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Ud={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Hd={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"]},Bd={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};Cd.add(Ud,Hd,Bd);const Bn=ic(Vc,{unipointsData:null,loadError:null}).component("font-awesome-icon",zd);Bn.mount("#app");function sa(e,t){Bn._instance!==null?(Bn._instance.props.unipointsData=e,Bn._instance.props.loadError=t):setTimeout(()=>{sa(e,t)},100)}qc().then(e=>{sa(e,null)}).catch(e=>{sa(null,e)});
