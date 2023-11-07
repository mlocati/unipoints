(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function oa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const J={},St=[],Ce=()=>{},Ss=()=>!1,Ts=/^on[^a-z]/,nr=e=>Ts.test(e),sa=e=>e.startsWith("onUpdate:"),le=Object.assign,la=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Is=Object.prototype.hasOwnProperty,U=(e,t)=>Is.call(e,t),M=Array.isArray,Tt=e=>dn(e)==="[object Map]",rr=e=>dn(e)==="[object Set]",Wa=e=>dn(e)==="[object Date]",$=e=>typeof e=="function",ie=e=>typeof e=="string",Ft=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",ro=e=>(X(e)||$(e))&&$(e.then)&&$(e.catch),ao=Object.prototype.toString,dn=e=>ao.call(e),Ns=e=>dn(e).slice(8,-1),io=e=>dn(e)==="[object Object]",fa=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ln=oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ar=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ms=/-(\w)/g,$e=ar(e=>e.replace(Ms,(t,n)=>n?n.toUpperCase():"")),Rs=/\B([A-Z])/g,zt=ar(e=>e.replace(Rs,"-$1").toLowerCase()),ir=ar(e=>e.charAt(0).toUpperCase()+e.slice(1)),wr=ar(e=>e?`on${ir(e)}`:""),yt=(e,t)=>!Object.is(e,t),$n=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Bn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Yn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Va;const Fr=()=>Va||(Va=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ca(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ie(r)?js(r):ca(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(ie(e)||X(e))return e}const Fs=/;(?![^(]*\))/g,Ls=/:([^]+)/,$s=/\/\*[^]*?\*\//g;function js(e){const t={};return e.replace($s,"").split(Fs).forEach(n=>{if(n){const r=n.split(Ls);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ua(e){let t="";if(ie(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=ua(e[n]);r&&(t+=r+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ds="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zs=oa(Ds);function oo(e){return!!e||e===""}function Us(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=or(e[r],t[r]);return n}function or(e,t){if(e===t)return!0;let n=Wa(e),r=Wa(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Ft(e),r=Ft(t),n||r)return e===t;if(n=M(e),r=M(t),n||r)return n&&r?Us(e,t):!1;if(n=X(e),r=X(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!or(e[o],t[o]))return!1}}return String(e)===String(t)}function Hs(e,t){return e.findIndex(n=>or(n,t))}const Pe=e=>ie(e)?e:e==null?"":M(e)||X(e)&&(e.toString===ao||!$(e.toString))?JSON.stringify(e,so,2):String(e),so=(e,t)=>t&&t.__v_isRef?so(e,t.value):Tt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:rr(t)?{[`Set(${t.size})`]:[...t.values()]}:X(t)&&!M(t)&&!io(t)?String(t):t;let ke;class Bs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ke,!t&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ke;try{return ke=this,t()}finally{ke=n}}}on(){ke=this}off(){ke=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ys(e,t=ke){t&&t.active&&t.effects.push(e)}function Ks(){return ke}const da=e=>{const t=new Set(e);return t.w=0,t.n=0,t},lo=e=>(e.w&et)>0,fo=e=>(e.n&et)>0,Ws=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=et},Vs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];lo(a)&&!fo(a)?a.delete(e):t[n++]=a,a.w&=~et,a.n&=~et}t.length=n}},Lr=new WeakMap;let Vt=0,et=1;const $r=30;let Ae;const ht=Symbol(""),jr=Symbol("");class ma{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ys(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=Ze;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,Ze=!0,et=1<<++Vt,Vt<=$r?Ws(this):qa(this),this.fn()}finally{Vt<=$r&&Vs(this),et=1<<--Vt,Ae=this.parent,Ze=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(qa(this),this.onStop&&this.onStop(),this.active=!1)}}function qa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ze=!0;const co=[];function Ut(){co.push(Ze),Ze=!1}function Ht(){const e=co.pop();Ze=e===void 0?!0:e}function ge(e,t,n){if(Ze&&Ae){let r=Lr.get(e);r||Lr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=da()),uo(a)}}function uo(e,t){let n=!1;Vt<=$r?fo(e)||(e.n|=et,n=!lo(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function He(e,t,n,r,a,i){const o=Lr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&M(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Ft(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":M(e)?fa(n)&&s.push(o.get("length")):(s.push(o.get(ht)),Tt(e)&&s.push(o.get(jr)));break;case"delete":M(e)||(s.push(o.get(ht)),Tt(e)&&s.push(o.get(jr)));break;case"set":Tt(e)&&s.push(o.get(ht));break}if(s.length===1)s[0]&&Dr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Dr(da(l))}}function Dr(e,t){const n=M(e)?e:[...e];for(const r of n)r.computed&&Xa(r);for(const r of n)r.computed||Xa(r)}function Xa(e,t){(e!==Ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const qs=oa("__proto__,__v_isRef,__isVue"),mo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ft)),Ja=Xs();function Xs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ut();const r=Y(this)[t].apply(this,n);return Ht(),r}}),e}function Js(e){const t=Y(this);return ge(t,"has",e),t.hasOwnProperty(e)}class po{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?fl:bo:i?vo:go).get(t))return t;const o=M(t);if(!a){if(o&&U(Ja,n))return Reflect.get(Ja,n,r);if(n==="hasOwnProperty")return Js}const s=Reflect.get(t,n,r);return(Ft(n)?mo.has(n):qs(n))||(a||ge(t,"get",n),i)?s:ae(s)?o&&fa(n)?s:s.value:X(s)?a?yo(s):ga(s):s}}class ho extends po{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Lt(i)&&ae(i)&&!ae(r))return!1;if(!this._shallow&&(!Kn(r)&&!Lt(r)&&(i=Y(i),r=Y(r)),!M(t)&&ae(i)&&!ae(r)))return i.value=r,!0;const o=M(t)&&fa(n)?Number(n)<t.length:U(t,n),s=Reflect.set(t,n,r,a);return t===Y(a)&&(o?yt(r,i)&&He(t,"set",n,r):He(t,"add",n,r)),s}deleteProperty(t,n){const r=U(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&He(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Ft(n)||!mo.has(n))&&ge(t,"has",n),r}ownKeys(t){return ge(t,"iterate",M(t)?"length":ht),Reflect.ownKeys(t)}}class Gs extends po{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Zs=new ho,Qs=new Gs,el=new ho(!0),pa=e=>e,sr=e=>Reflect.getPrototypeOf(e);function xn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(yt(t,i)&&ge(a,"get",t),ge(a,"get",i));const{has:o}=sr(a),s=r?pa:n?ba:tn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function _n(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(yt(e,a)&&ge(r,"has",e),ge(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function wn(e,t=!1){return e=e.__v_raw,!t&&ge(Y(e),"iterate",ht),Reflect.get(e,"size",e)}function Ga(e){e=Y(e);const t=Y(this);return sr(t).has.call(t,e)||(t.add(e),He(t,"add",e,e)),this}function Za(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=sr(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?yt(t,o)&&He(n,"set",e,t):He(n,"add",e,t),this}function Qa(e){const t=Y(this),{has:n,get:r}=sr(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&He(t,"delete",e,void 0),i}function ei(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&He(e,"clear",void 0,void 0),n}function kn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?pa:e?ba:tn;return!e&&ge(s,"iterate",ht),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function An(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=Tt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?pa:t?ba:tn;return!t&&ge(i,"iterate",l?jr:ht),{next(){const{value:m,done:p}=c.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:this}}function tl(){const e={get(i){return xn(this,i)},get size(){return wn(this)},has:_n,add:Ga,set:Za,delete:Qa,clear:ei,forEach:kn(!1,!1)},t={get(i){return xn(this,i,!1,!0)},get size(){return wn(this)},has:_n,add:Ga,set:Za,delete:Qa,clear:ei,forEach:kn(!1,!0)},n={get(i){return xn(this,i,!0)},get size(){return wn(this,!0)},has(i){return _n.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:kn(!0,!1)},r={get(i){return xn(this,i,!0,!0)},get size(){return wn(this,!0)},has(i){return _n.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=An(i,!1,!1),n[i]=An(i,!0,!1),t[i]=An(i,!1,!0),r[i]=An(i,!0,!0)}),[e,n,t,r]}const[nl,rl,al,il]=tl();function ha(e,t){const n=t?e?il:al:e?rl:nl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const ol={get:ha(!1,!1)},sl={get:ha(!1,!0)},ll={get:ha(!0,!1)},go=new WeakMap,vo=new WeakMap,bo=new WeakMap,fl=new WeakMap;function cl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ul(e){return e.__v_skip||!Object.isExtensible(e)?0:cl(Ns(e))}function ga(e){return Lt(e)?e:va(e,!1,Zs,ol,go)}function dl(e){return va(e,!1,el,sl,vo)}function yo(e){return va(e,!0,Qs,ll,bo)}function va(e,t,n,r,a){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ul(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function It(e){return Lt(e)?It(e.__v_raw):!!(e&&e.__v_isReactive)}function Lt(e){return!!(e&&e.__v_isReadonly)}function Kn(e){return!!(e&&e.__v_isShallow)}function xo(e){return It(e)||Lt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function _o(e){return Bn(e,"__v_skip",!0),e}const tn=e=>X(e)?ga(e):e,ba=e=>X(e)?yo(e):e;function wo(e){Ze&&Ae&&(e=Y(e),uo(e.dep||(e.dep=da())))}function ko(e,t){e=Y(e);const n=e.dep;n&&Dr(n)}function ae(e){return!!(e&&e.__v_isRef===!0)}function gt(e){return ml(e,!1)}function ml(e,t){return ae(e)?e:new pl(e,t)}class pl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:tn(t)}get value(){return wo(this),this._value}set value(t){const n=this.__v_isShallow||Kn(t)||Lt(t);t=n?t:Y(t),yt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:tn(t),ko(this))}}function Wn(e){return ae(e)?e.value:e}const hl={get:(e,t,n)=>Wn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ae(a)&&!ae(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ao(e){return It(e)?e:new Proxy(e,hl)}class gl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ma(t,()=>{this._dirty||(this._dirty=!0,ko(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return wo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function vl(e,t,n=!1){let r,a;const i=$(e);return i?(r=e,a=Ce):(r=e.get,a=e.set),new gl(r,a,i||!a,n)}function Qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){lr(i,t,n)}return a}function Se(e,t,n,r){if($(e)){const i=Qe(e,t,n,r);return i&&ro(i)&&i.catch(o=>{lr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Se(e[i],t,n,r));return a}function lr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Qe(l,null,10,[e,o,s]);return}}bl(e,n,a,r)}function bl(e,t,n,r=!0){console.error(e)}let nn=!1,zr=!1;const ue=[];let Fe=0;const Nt=[];let ze=null,lt=0;const Oo=Promise.resolve();let ya=null;function yl(e){const t=ya||Oo;return e?t.then(this?e.bind(this):e):t}function xl(e){let t=Fe+1,n=ue.length;for(;t<n;){const r=t+n>>>1,a=ue[r],i=rn(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function xa(e){(!ue.length||!ue.includes(e,nn&&e.allowRecurse?Fe+1:Fe))&&(e.id==null?ue.push(e):ue.splice(xl(e.id),0,e),Eo())}function Eo(){!nn&&!zr&&(zr=!0,ya=Oo.then(Po))}function _l(e){const t=ue.indexOf(e);t>Fe&&ue.splice(t,1)}function wl(e){M(e)?Nt.push(...e):(!ze||!ze.includes(e,e.allowRecurse?lt+1:lt))&&Nt.push(e),Eo()}function ti(e,t=nn?Fe+1:0){for(;t<ue.length;t++){const n=ue[t];n&&n.pre&&(ue.splice(t,1),t--,n())}}function Co(e){if(Nt.length){const t=[...new Set(Nt)];if(Nt.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((n,r)=>rn(n)-rn(r)),lt=0;lt<ze.length;lt++)ze[lt]();ze=null,lt=0}}const rn=e=>e.id==null?1/0:e.id,kl=(e,t)=>{const n=rn(e)-rn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Po(e){zr=!1,nn=!0,ue.sort(kl);const t=Ce;try{for(Fe=0;Fe<ue.length;Fe++){const n=ue[Fe];n&&n.active!==!1&&Qe(n,null,14)}}finally{Fe=0,ue.length=0,Co(),nn=!1,ya=null,(ue.length||Nt.length)&&Po()}}function Al(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[u]||J;p&&(a=n.map(_=>ie(_)?_.trim():_)),m&&(a=n.map(Yn))}let s,l=r[s=wr(t)]||r[s=wr($e(t))];!l&&i&&(l=r[s=wr(zt(t))]),l&&Se(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Se(c,e,6,a)}}function So(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!$(e)){const l=c=>{const u=So(c,t,!0);u&&(s=!0,le(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(X(e)&&r.set(e,null),null):(M(i)?i.forEach(l=>o[l]=null):le(o,i),X(e)&&r.set(e,o),o)}function fr(e,t){return!e||!nr(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,zt(t))||U(e,t))}let xe=null,cr=null;function Vn(e){const t=xe;return xe=e,cr=e&&e.type.__scopeId||null,t}function Ol(e){cr=e}function El(){cr=null}function Cl(e,t=xe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&mi(-1);const i=Vn(t);let o;try{o=e(...a)}finally{Vn(i),r._d&&mi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:p,setupState:_,ctx:F,inheritAttrs:T}=e;let D,k;const O=Vn(e);try{if(n.shapeFlag&4){const S=a||r;D=Me(u.call(S,S,m,i,_,p,F)),k=l}else{const S=t;D=Me(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),k=t.props?l:Pl(l)}}catch(S){Zt.length=0,lr(S,e,1),D=Q(xt)}let R=D;if(k&&T!==!1){const S=Object.keys(k),{shapeFlag:K}=R;S.length&&K&7&&(o&&S.some(sa)&&(k=Sl(k,o)),R=$t(R,k))}return n.dirs&&(R=$t(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),D=R,Vn(O),D}const Pl=e=>{let t;for(const n in e)(n==="class"||n==="style"||nr(n))&&((t||(t={}))[n]=e[n]);return t},Sl=(e,t)=>{const n={};for(const r in e)(!sa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Tl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ni(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(o[p]!==r[p]&&!fr(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ni(r,o,c):!0:!!o;return!1}function ni(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!fr(n,i))return!0}return!1}function Il({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Nl=e=>e.__isSuspense;function Ml(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):wl(e)}const On={};function vt(e,t,n){return To(e,t,n)}function To(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=J){var s;const l=Ks()===((s=se)==null?void 0:s.scope)?se:null;let c,u=!1,m=!1;if(ae(e)?(c=()=>e.value,u=Kn(e)):It(e)?(c=()=>e,r=!0):M(e)?(m=!0,u=e.some(S=>It(S)||Kn(S)),c=()=>e.map(S=>{if(ae(S))return S.value;if(It(S))return ut(S);if($(S))return Qe(S,l,2)})):$(e)?t?c=()=>Qe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),Se(e,l,3,[_])}:c=Ce,t&&r){const S=c;c=()=>ut(S())}let p,_=S=>{p=O.onStop=()=>{Qe(S,l,4)}},F;if(on)if(_=Ce,t?n&&Se(t,l,3,[c(),m?[]:void 0,_]):c(),a==="sync"){const S=Sf();F=S.__watcherHandles||(S.__watcherHandles=[])}else return Ce;let T=m?new Array(e.length).fill(On):On;const D=()=>{if(O.active)if(t){const S=O.run();(r||u||(m?S.some((K,fe)=>yt(K,T[fe])):yt(S,T)))&&(p&&p(),Se(t,l,3,[S,T===On?void 0:m&&T[0]===On?[]:T,_]),T=S)}else O.run()};D.allowRecurse=!!t;let k;a==="sync"?k=D:a==="post"?k=()=>he(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>xa(D));const O=new ma(c,k);t?n?D():T=O.run():a==="post"?he(O.run.bind(O),l&&l.suspense):O.run();const R=()=>{O.stop(),l&&l.scope&&la(l.scope.effects,O)};return F&&F.push(R),R}function Rl(e,t,n){const r=this.proxy,a=ie(e)?e.includes(".")?Io(r,e):()=>r[e]:e.bind(r,r);let i;$(t)?i=t:(i=t.handler,n=t);const o=se;jt(this);const s=To(a,i.bind(r),n);return o?jt(o):bt(),s}function Io(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ut(e,t){if(!X(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ae(e))ut(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)ut(e[n],t);else if(rr(e)||Tt(e))e.forEach(n=>{ut(n,t)});else if(io(e))for(const n in e)ut(e[n],t);return e}function ri(e,t){const n=xe;if(n===null)return e;const r=pr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=J]=t[i];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&ut(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function ot(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ut(),Se(l,n,8,[e.el,s,e,t]),Ht())}}/*! #__NO_SIDE_EFFECTS__ */function We(e,t){return $(e)?(()=>le({name:e.name},t,{setup:e}))():e}const jn=e=>!!e.type.__asyncLoader,No=e=>e.type.__isKeepAlive;function Fl(e,t){Mo(e,"a",t)}function Ll(e,t){Mo(e,"da",t)}function Mo(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ur(t,r,n),n){let a=n.parent;for(;a&&a.parent;)No(a.parent.vnode)&&$l(r,t,n,a),a=a.parent}}function $l(e,t,n,r){const a=ur(t,e,r,!0);Fo(()=>{la(r[t],a)},n)}function ur(e,t,n=se,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ut(),jt(n);const s=Se(t,n,e,o);return bt(),Ht(),s});return r?a.unshift(i):a.push(i),i}}const Ve=e=>(t,n=se)=>(!on||e==="sp")&&ur(e,(...r)=>t(...r),n),jl=Ve("bm"),Ro=Ve("m"),Dl=Ve("bu"),zl=Ve("u"),Ul=Ve("bum"),Fo=Ve("um"),Hl=Ve("sp"),Bl=Ve("rtg"),Yl=Ve("rtc");function Kl(e,t=se){ur("ec",e,t)}const Lo="components";function _a(e,t){return Vl(Lo,e,!0,t)||e}const Wl=Symbol.for("v-ndc");function Vl(e,t,n=!0,r=!1){const a=xe||se;if(a){const i=a.type;if(e===Lo){const s=Of(i,!1);if(s&&(s===t||s===$e(t)||s===ir($e(t))))return i}const o=ai(a[e]||i[e],t)||ai(a.appContext[e],t);return!o&&r?i:o}}function ai(e,t){return e&&(e[t]||e[$e(t)]||e[ir($e(t))])}function Jt(e,t,n,r){let a;const i=n&&n[r];if(M(e)||ie(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(X(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Ur=e=>e?Vo(e)?pr(e)||e.proxy:Ur(e.parent):null,Gt=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ur(e.parent),$root:e=>Ur(e.root),$emit:e=>e.emit,$options:e=>wa(e),$forceUpdate:e=>e.f||(e.f=()=>xa(e.update)),$nextTick:e=>e.n||(e.n=yl.bind(e.proxy)),$watch:e=>Rl.bind(e)}),Ar=(e,t)=>e!==J&&!e.__isScriptSetup&&U(e,t),ql={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Ar(r,t))return o[t]=1,r[t];if(a!==J&&U(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&U(c,t))return o[t]=3,i[t];if(n!==J&&U(n,t))return o[t]=4,n[t];Hr&&(o[t]=0)}}const u=Gt[t];let m,p;if(u)return t==="$attrs"&&ge(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==J&&U(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,U(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Ar(a,t)?(a[t]=n,!0):r!==J&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==J&&U(e,o)||Ar(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Gt,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ii(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Hr=!0;function Xl(e){const t=wa(e),n=e.proxy,r=e.ctx;Hr=!1,t.beforeCreate&&oi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:p,beforeUpdate:_,updated:F,activated:T,deactivated:D,beforeDestroy:k,beforeUnmount:O,destroyed:R,unmounted:S,render:K,renderTracked:fe,renderTriggered:ce,errorCaptured:_e,serverPrefetch:ye,expose:je,inheritAttrs:Yt,components:gn,directives:vn,filters:yr}=t;if(c&&Jl(c,r,null),o)for(const ee in o){const V=o[ee];$(V)&&(r[ee]=V.bind(n))}if(a){const ee=a.call(n,n);X(ee)&&(e.data=ga(ee))}if(Hr=!0,i)for(const ee in i){const V=i[ee],at=$(V)?V.bind(n,n):$(V.get)?V.get.bind(n,n):Ce,bn=!$(V)&&$(V.set)?V.set.bind(n):Ce,it=Re({get:at,set:bn});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>it.value,set:Te=>it.value=Te})}if(s)for(const ee in s)$o(s[ee],r,n,ee);if(l){const ee=$(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(V=>{nf(V,ee[V])})}u&&oi(u,e,"c");function de(ee,V){M(V)?V.forEach(at=>ee(at.bind(n))):V&&ee(V.bind(n))}if(de(jl,m),de(Ro,p),de(Dl,_),de(zl,F),de(Fl,T),de(Ll,D),de(Kl,_e),de(Yl,fe),de(Bl,ce),de(Ul,O),de(Fo,S),de(Hl,ye),M(je))if(je.length){const ee=e.exposed||(e.exposed={});je.forEach(V=>{Object.defineProperty(ee,V,{get:()=>n[V],set:at=>n[V]=at})})}else e.exposed||(e.exposed={});K&&e.render===Ce&&(e.render=K),Yt!=null&&(e.inheritAttrs=Yt),gn&&(e.components=gn),vn&&(e.directives=vn)}function Jl(e,t,n=Ce){M(e)&&(e=Br(e));for(const r in e){const a=e[r];let i;X(a)?"default"in a?i=Dn(a.from||r,a.default,!0):i=Dn(a.from||r):i=Dn(a),ae(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function oi(e,t,n){Se(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function $o(e,t,n,r){const a=r.includes(".")?Io(n,r):()=>n[r];if(ie(e)){const i=t[e];$(i)&&vt(a,i)}else if($(e))vt(a,e.bind(n));else if(X(e))if(M(e))e.forEach(i=>$o(i,t,n,r));else{const i=$(e.handler)?e.handler.bind(n):t[e.handler];$(i)&&vt(a,i,e)}}function wa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>qn(l,c,o,!0)),qn(l,t,o)),X(t)&&i.set(t,l),l}function qn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&qn(e,i,n,!0),a&&a.forEach(o=>qn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Gl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Gl={data:si,props:li,emits:li,methods:qt,computed:qt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:qt,directives:qt,watch:Ql,provide:si,inject:Zl};function si(e,t){return t?e?function(){return le($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function Zl(e,t){return qt(Br(e),Br(t))}function Br(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?le(Object.create(null),e,t):t}function li(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:le(Object.create(null),ii(e),ii(t??{})):t}function Ql(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const r in t)n[r]=me(e[r],t[r]);return n}function jo(){return{app:null,config:{isNativeTag:Ss,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ef=0;function tf(e,t){return function(r,a=null){$(r)||(r=le({},r)),a!=null&&!X(a)&&(a=null);const i=jo(),o=new WeakSet;let s=!1;const l=i.app={_uid:ef++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Tf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(l,...u)):$(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const p=Q(r,a);return p.appContext=i,u&&t?t(p,c):e(p,c,m),s=!0,l._container=c,c.__vue_app__=l,pr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Xn=l;try{return c()}finally{Xn=null}}};return l}}let Xn=null;function nf(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function Dn(e,t,n=!1){const r=se||xe;if(r||Xn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Xn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&$(t)?t.call(r&&r.proxy):t}}function rf(e,t,n,r=!1){const a={},i={};Bn(i,mr,1),e.propsDefaults=Object.create(null),Do(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:dl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function af(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(fr(e.emitsOptions,p))continue;const _=t[p];if(l)if(U(i,p))_!==i[p]&&(i[p]=_,c=!0);else{const F=$e(p);a[F]=Yr(l,s,F,_,e,!1)}else _!==i[p]&&(i[p]=_,c=!0)}}}else{Do(e,t,a,i)&&(c=!0);let u;for(const m in s)(!t||!U(t,m)&&((u=zt(m))===m||!U(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Yr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!U(t,m))&&(delete i[m],c=!0)}c&&He(e,"set","$attrs")}function Do(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Ln(l))continue;const c=t[l];let u;a&&U(a,u=$e(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:fr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||J;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Yr(a,l,m,c[m],e,!U(c,m))}}return o}function Yr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(jt(a),r=c[n]=l.call(null,t),bt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===zt(n))&&(r=!0))}return r}function zo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!$(e)){const u=m=>{l=!0;const[p,_]=zo(m,t,!0);le(o,p),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return X(e)&&r.set(e,St),St;if(M(i))for(let u=0;u<i.length;u++){const m=$e(i[u]);fi(m)&&(o[m]=J)}else if(i)for(const u in i){const m=$e(u);if(fi(m)){const p=i[u],_=o[m]=M(p)||$(p)?{type:p}:le({},p);if(_){const F=di(Boolean,_.type),T=di(String,_.type);_[0]=F>-1,_[1]=T<0||F<T,(F>-1||U(_,"default"))&&s.push(m)}}}const c=[o,s];return X(e)&&r.set(e,c),c}function fi(e){return e[0]!=="$"}function ci(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ui(e,t){return ci(e)===ci(t)}function di(e,t){return M(t)?t.findIndex(n=>ui(n,e)):$(t)&&ui(t,e)?0:-1}const Uo=e=>e[0]==="_"||e==="$stable",ka=e=>M(e)?e.map(Me):[Me(e)],of=(e,t,n)=>{if(t._n)return t;const r=Cl((...a)=>ka(t(...a)),n);return r._c=!1,r},Ho=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Uo(a))continue;const i=e[a];if($(i))t[a]=of(a,i,r);else if(i!=null){const o=ka(i);t[a]=()=>o}}},Bo=(e,t)=>{const n=ka(t);e.slots.default=()=>n},sf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Bn(t,"_",n)):Ho(t,e.slots={})}else e.slots={},t&&Bo(e,t);Bn(e.slots,mr,1)},lf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=J;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(le(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Ho(t,a)),o=t}else t&&(Bo(e,t),o={default:1});if(i)for(const s in a)!Uo(s)&&o[s]==null&&delete a[s]};function Kr(e,t,n,r,a=!1){if(M(e)){e.forEach((p,_)=>Kr(p,t&&(M(t)?t[_]:t),n,r,a));return}if(jn(r)&&!a)return;const i=r.shapeFlag&4?pr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===J?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ie(c)?(u[c]=null,U(m,c)&&(m[c]=null)):ae(c)&&(c.value=null)),$(l))Qe(l,s,12,[o,u]);else{const p=ie(l),_=ae(l);if(p||_){const F=()=>{if(e.f){const T=p?U(m,l)?m[l]:u[l]:l.value;a?M(T)&&la(T,i):M(T)?T.includes(i)||T.push(i):p?(u[l]=[i],U(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,U(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(u[e.k]=o))};o?(F.id=-1,he(F,n)):F()}}}const he=Ml;function ff(e){return cf(e)}function cf(e,t){const n=Fr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:p,setScopeId:_=Ce,insertStaticContent:F}=e,T=(f,d,h,g=null,v=null,x=null,A=!1,y=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!Wt(f,d)&&(g=yn(f),Te(f,v,x,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:I,shapeFlag:C}=d;switch(b){case dr:D(f,d,h,g);break;case xt:k(f,d,h,g);break;case Or:f==null&&O(d,h,g,A);break;case re:gn(f,d,h,g,v,x,A,y,w);break;default:C&1?K(f,d,h,g,v,x,A,y,w):C&6?vn(f,d,h,g,v,x,A,y,w):(C&64||C&128)&&b.process(f,d,h,g,v,x,A,y,w,At)}I!=null&&v&&Kr(I,f&&f.ref,x,d||f,!d)},D=(f,d,h,g)=>{if(f==null)r(d.el=s(d.children),h,g);else{const v=d.el=f.el;d.children!==f.children&&c(v,d.children)}},k=(f,d,h,g)=>{f==null?r(d.el=l(d.children||""),h,g):d.el=f.el},O=(f,d,h,g)=>{[f.el,f.anchor]=F(f.children,d,h,g,f.el,f.anchor)},R=({el:f,anchor:d},h,g)=>{let v;for(;f&&f!==d;)v=p(f),r(f,h,g),f=v;r(d,h,g)},S=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=p(f),a(f),f=h;a(d)},K=(f,d,h,g,v,x,A,y,w)=>{A=A||d.type==="svg",f==null?fe(d,h,g,v,x,A,y,w):ye(f,d,v,x,A,y,w)},fe=(f,d,h,g,v,x,A,y)=>{let w,b;const{type:I,props:C,shapeFlag:N,transition:L,dirs:j}=f;if(w=f.el=o(f.type,x,C&&C.is,C),N&8?u(w,f.children):N&16&&_e(f.children,w,null,g,v,x&&I!=="foreignObject",A,y),j&&ot(f,null,g,"created"),ce(w,f,f.scopeId,A,g),C){for(const W in C)W!=="value"&&!Ln(W)&&i(w,W,null,C[W],x,f.children,g,v,De);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Ne(b,g,f)}j&&ot(f,null,g,"beforeMount");const q=uf(v,L);q&&L.beforeEnter(w),r(w,d,h),((b=C&&C.onVnodeMounted)||q||j)&&he(()=>{b&&Ne(b,g,f),q&&L.enter(w),j&&ot(f,null,g,"mounted")},v)},ce=(f,d,h,g,v)=>{if(h&&_(f,h),g)for(let x=0;x<g.length;x++)_(f,g[x]);if(v){let x=v.subTree;if(d===x){const A=v.vnode;ce(f,A,A.scopeId,A.slotScopeIds,v.parent)}}},_e=(f,d,h,g,v,x,A,y,w=0)=>{for(let b=w;b<f.length;b++){const I=f[b]=y?Ge(f[b]):Me(f[b]);T(null,I,d,h,g,v,x,A,y)}},ye=(f,d,h,g,v,x,A)=>{const y=d.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:I}=d;w|=f.patchFlag&16;const C=f.props||J,N=d.props||J;let L;h&&st(h,!1),(L=N.onVnodeBeforeUpdate)&&Ne(L,h,d,f),I&&ot(d,f,h,"beforeUpdate"),h&&st(h,!0);const j=v&&d.type!=="foreignObject";if(b?je(f.dynamicChildren,b,y,h,g,j,x):A||V(f,d,y,null,h,g,j,x,!1),w>0){if(w&16)Yt(y,d,C,N,h,g,v);else if(w&2&&C.class!==N.class&&i(y,"class",null,N.class,v),w&4&&i(y,"style",C.style,N.style,v),w&8){const q=d.dynamicProps;for(let W=0;W<q.length;W++){const ne=q[W],we=C[ne],Ot=N[ne];(Ot!==we||ne==="value")&&i(y,ne,we,Ot,v,f.children,h,g,De)}}w&1&&f.children!==d.children&&u(y,d.children)}else!A&&b==null&&Yt(y,d,C,N,h,g,v);((L=N.onVnodeUpdated)||I)&&he(()=>{L&&Ne(L,h,d,f),I&&ot(d,f,h,"updated")},g)},je=(f,d,h,g,v,x,A)=>{for(let y=0;y<d.length;y++){const w=f[y],b=d[y],I=w.el&&(w.type===re||!Wt(w,b)||w.shapeFlag&70)?m(w.el):h;T(w,b,I,null,g,v,x,A,!0)}},Yt=(f,d,h,g,v,x,A)=>{if(h!==g){if(h!==J)for(const y in h)!Ln(y)&&!(y in g)&&i(f,y,h[y],null,A,d.children,v,x,De);for(const y in g){if(Ln(y))continue;const w=g[y],b=h[y];w!==b&&y!=="value"&&i(f,y,b,w,A,d.children,v,x,De)}"value"in g&&i(f,"value",h.value,g.value)}},gn=(f,d,h,g,v,x,A,y,w)=>{const b=d.el=f?f.el:s(""),I=d.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:N,slotScopeIds:L}=d;L&&(y=y?y.concat(L):L),f==null?(r(b,h,g),r(I,h,g),_e(d.children,h,I,v,x,A,y,w)):C>0&&C&64&&N&&f.dynamicChildren?(je(f.dynamicChildren,N,h,v,x,A,y),(d.key!=null||v&&d===v.subTree)&&Yo(f,d,!0)):V(f,d,h,I,v,x,A,y,w)},vn=(f,d,h,g,v,x,A,y,w)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?v.ctx.activate(d,h,g,A,w):yr(d,h,g,v,x,A,w):za(f,d,w)},yr=(f,d,h,g,v,x,A)=>{const y=f.component=xf(f,g,v);if(No(f)&&(y.ctx.renderer=At),_f(y),y.asyncDep){if(v&&v.registerDep(y,de),!f.el){const w=y.subTree=Q(xt);k(null,w,d,h)}return}de(y,f,d,h,v,x,A)},za=(f,d,h)=>{const g=d.component=f.component;if(Tl(f,d,h))if(g.asyncDep&&!g.asyncResolved){ee(g,d,h);return}else g.next=d,_l(g.update),g.update();else d.el=f.el,g.vnode=d},de=(f,d,h,g,v,x,A)=>{const y=()=>{if(f.isMounted){let{next:I,bu:C,u:N,parent:L,vnode:j}=f,q=I,W;st(f,!1),I?(I.el=j.el,ee(f,I,A)):I=j,C&&$n(C),(W=I.props&&I.props.onVnodeBeforeUpdate)&&Ne(W,L,I,j),st(f,!0);const ne=kr(f),we=f.subTree;f.subTree=ne,T(we,ne,m(we.el),yn(we),f,v,x),I.el=ne.el,q===null&&Il(f,ne.el),N&&he(N,v),(W=I.props&&I.props.onVnodeUpdated)&&he(()=>Ne(W,L,I,j),v)}else{let I;const{el:C,props:N}=d,{bm:L,m:j,parent:q}=f,W=jn(d);if(st(f,!1),L&&$n(L),!W&&(I=N&&N.onVnodeBeforeMount)&&Ne(I,q,d),st(f,!0),C&&_r){const ne=()=>{f.subTree=kr(f),_r(C,f.subTree,f,v,null)};W?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=kr(f);T(null,ne,h,g,f,v,x),d.el=ne.el}if(j&&he(j,v),!W&&(I=N&&N.onVnodeMounted)){const ne=d;he(()=>Ne(I,q,ne),v)}(d.shapeFlag&256||q&&jn(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&he(f.a,v),f.isMounted=!0,d=h=g=null}},w=f.effect=new ma(y,()=>xa(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,st(f,!0),b()},ee=(f,d,h)=>{d.component=f;const g=f.vnode.props;f.vnode=d,f.next=null,af(f,d.props,g,h),lf(f,d.children,h),Ut(),ti(),Ht()},V=(f,d,h,g,v,x,A,y,w=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,C=d.children,{patchFlag:N,shapeFlag:L}=d;if(N>0){if(N&128){bn(b,C,h,g,v,x,A,y,w);return}else if(N&256){at(b,C,h,g,v,x,A,y,w);return}}L&8?(I&16&&De(b,v,x),C!==b&&u(h,C)):I&16?L&16?bn(b,C,h,g,v,x,A,y,w):De(b,v,x,!0):(I&8&&u(h,""),L&16&&_e(C,h,g,v,x,A,y,w))},at=(f,d,h,g,v,x,A,y,w)=>{f=f||St,d=d||St;const b=f.length,I=d.length,C=Math.min(b,I);let N;for(N=0;N<C;N++){const L=d[N]=w?Ge(d[N]):Me(d[N]);T(f[N],L,h,null,v,x,A,y,w)}b>I?De(f,v,x,!0,!1,C):_e(d,h,g,v,x,A,y,w,C)},bn=(f,d,h,g,v,x,A,y,w)=>{let b=0;const I=d.length;let C=f.length-1,N=I-1;for(;b<=C&&b<=N;){const L=f[b],j=d[b]=w?Ge(d[b]):Me(d[b]);if(Wt(L,j))T(L,j,h,null,v,x,A,y,w);else break;b++}for(;b<=C&&b<=N;){const L=f[C],j=d[N]=w?Ge(d[N]):Me(d[N]);if(Wt(L,j))T(L,j,h,null,v,x,A,y,w);else break;C--,N--}if(b>C){if(b<=N){const L=N+1,j=L<I?d[L].el:g;for(;b<=N;)T(null,d[b]=w?Ge(d[b]):Me(d[b]),h,j,v,x,A,y,w),b++}}else if(b>N)for(;b<=C;)Te(f[b],v,x,!0),b++;else{const L=b,j=b,q=new Map;for(b=j;b<=N;b++){const ve=d[b]=w?Ge(d[b]):Me(d[b]);ve.key!=null&&q.set(ve.key,b)}let W,ne=0;const we=N-j+1;let Ot=!1,Ba=0;const Kt=new Array(we);for(b=0;b<we;b++)Kt[b]=0;for(b=L;b<=C;b++){const ve=f[b];if(ne>=we){Te(ve,v,x,!0);continue}let Ie;if(ve.key!=null)Ie=q.get(ve.key);else for(W=j;W<=N;W++)if(Kt[W-j]===0&&Wt(ve,d[W])){Ie=W;break}Ie===void 0?Te(ve,v,x,!0):(Kt[Ie-j]=b+1,Ie>=Ba?Ba=Ie:Ot=!0,T(ve,d[Ie],h,null,v,x,A,y,w),ne++)}const Ya=Ot?df(Kt):St;for(W=Ya.length-1,b=we-1;b>=0;b--){const ve=j+b,Ie=d[ve],Ka=ve+1<I?d[ve+1].el:g;Kt[b]===0?T(null,Ie,h,Ka,v,x,A,y,w):Ot&&(W<0||b!==Ya[W]?it(Ie,h,Ka,2):W--)}}},it=(f,d,h,g,v=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){it(f.component.subTree,d,h,g);return}if(b&128){f.suspense.move(d,h,g);return}if(b&64){A.move(f,d,h,At);return}if(A===re){r(x,d,h);for(let C=0;C<w.length;C++)it(w[C],d,h,g);r(f.anchor,d,h);return}if(A===Or){R(f,d,h);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,d,h),he(()=>y.enter(x),v);else{const{leave:C,delayLeave:N,afterLeave:L}=y,j=()=>r(x,d,h),q=()=>{C(x,()=>{j(),L&&L()})};N?N(x,j,q):q()}else r(x,d,h)},Te=(f,d,h,g=!1,v=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:I,patchFlag:C,dirs:N}=f;if(y!=null&&Kr(y,null,h,f,!0),I&256){d.ctx.deactivate(f);return}const L=I&1&&N,j=!jn(f);let q;if(j&&(q=A&&A.onVnodeBeforeUnmount)&&Ne(q,d,f),I&6)Ps(f.component,h,g);else{if(I&128){f.suspense.unmount(h,g);return}L&&ot(f,null,d,"beforeUnmount"),I&64?f.type.remove(f,d,h,v,At,g):b&&(x!==re||C>0&&C&64)?De(b,d,h,!1,!0):(x===re&&C&384||!v&&I&16)&&De(w,d,h),g&&Ua(f)}(j&&(q=A&&A.onVnodeUnmounted)||L)&&he(()=>{q&&Ne(q,d,f),L&&ot(f,null,d,"unmounted")},h)},Ua=f=>{const{type:d,el:h,anchor:g,transition:v}=f;if(d===re){Cs(h,g);return}if(d===Or){S(f);return}const x=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:y}=v,w=()=>A(h,x);y?y(f.el,x,w):w()}else x()},Cs=(f,d)=>{let h;for(;f!==d;)h=p(f),a(f),f=h;a(d)},Ps=(f,d,h)=>{const{bum:g,scope:v,update:x,subTree:A,um:y}=f;g&&$n(g),v.stop(),x&&(x.active=!1,Te(A,f,d,h)),y&&he(y,d),he(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},De=(f,d,h,g=!1,v=!1,x=0)=>{for(let A=x;A<f.length;A++)Te(f[A],d,h,g,v)},yn=f=>f.shapeFlag&6?yn(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),Ha=(f,d,h)=>{f==null?d._vnode&&Te(d._vnode,null,null,!0):T(d._vnode||null,f,d,null,null,null,h),ti(),Co(),d._vnode=f},At={p:T,um:Te,m:it,r:Ua,mt:yr,mc:_e,pc:V,pbc:je,n:yn,o:e};let xr,_r;return t&&([xr,_r]=t(At)),{render:Ha,hydrate:xr,createApp:tf(Ha,xr)}}function st({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function uf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Yo(e,t,n=!1){const r=e.children,a=t.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ge(a[i]),s.el=o.el),n||Yo(o,s)),s.type===dr&&(s.el=o.el)}}function df(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const mf=e=>e.__isTeleport,re=Symbol.for("v-fgt"),dr=Symbol.for("v-txt"),xt=Symbol.for("v-cmt"),Or=Symbol.for("v-stc"),Zt=[];let Oe=null;function z(e=!1){Zt.push(Oe=e?null:[])}function pf(){Zt.pop(),Oe=Zt[Zt.length-1]||null}let an=1;function mi(e){an+=e}function Ko(e){return e.dynamicChildren=an>0?Oe||St:null,pf(),an>0&&Oe&&Oe.push(e),e}function H(e,t,n,r,a,i){return Ko(B(e,t,n,r,a,i,!0))}function Aa(e,t,n,r,a){return Ko(Q(e,t,n,r,a,!0))}function Wr(e){return e?e.__v_isVNode===!0:!1}function Wt(e,t){return e.type===t.type&&e.key===t.key}const mr="__vInternal",Wo=({key:e})=>e??null,zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ie(e)||ae(e)||$(e)?{i:xe,r:e,k:t,f:!!n}:e:null);function B(e,t=null,n=null,r=0,a=null,i=e===re?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wo(t),ref:t&&zn(t),scopeId:cr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:xe};return s?(Oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ie(n)?8:16),an>0&&!o&&Oe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Oe.push(l),l}const Q=hf;function hf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Wl)&&(e=xt),Wr(e)){const s=$t(e,t,!0);return n&&Oa(s,n),an>0&&!i&&Oe&&(s.shapeFlag&6?Oe[Oe.indexOf(e)]=s:Oe.push(s)),s.patchFlag|=-2,s}if(Ef(e)&&(e=e.__vccOpts),t){t=gf(t);let{class:s,style:l}=t;s&&!ie(s)&&(t.class=ua(s)),X(l)&&(xo(l)&&!M(l)&&(l=le({},l)),t.style=ca(l))}const o=ie(e)?1:Nl(e)?128:mf(e)?64:X(e)?4:$(e)?2:0;return B(e,t,n,r,a,o,i,!0)}function gf(e){return e?xo(e)||mr in e?le({},e):e:null}function $t(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?vf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Wo(s),ref:t&&t.ref?n&&a?M(a)?a.concat(zn(t)):[a,zn(t)]:zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==re?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$t(e.ssContent),ssFallback:e.ssFallback&&$t(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function dt(e=" ",t=0){return Q(dr,null,e,t)}function _t(e="",t=!1){return t?(z(),Aa(xt,null,e)):Q(xt,null,e)}function Me(e){return e==null||typeof e=="boolean"?Q(xt):M(e)?Q(re,null,e.slice()):typeof e=="object"?Ge(e):Q(dr,null,String(e))}function Ge(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$t(e)}function Oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(mr in t)?t._ctx=xe:a===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:xe},n=32):(t=String(t),r&64?(n=16,t=[dt(t)]):n=8);e.children=t,e.shapeFlag|=n}function vf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ua([t.class,r.class]));else if(a==="style")t.style=ca([t.style,r.style]);else if(nr(a)){const i=t[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ne(e,t,n,r=null){Se(e,t,7,[n,r])}const bf=jo();let yf=0;function xf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||bf,i={uid:yf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zo(r,a),emitsOptions:So(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Al.bind(null,i),e.ce&&e.ce(i),i}let se=null,Ea,Et,pi="__VUE_INSTANCE_SETTERS__";(Et=Fr()[pi])||(Et=Fr()[pi]=[]),Et.push(e=>se=e),Ea=e=>{Et.length>1?Et.forEach(t=>t(e)):Et[0](e)};const jt=e=>{Ea(e),e.scope.on()},bt=()=>{se&&se.scope.off(),Ea(null)};function Vo(e){return e.vnode.shapeFlag&4}let on=!1;function _f(e,t=!1){on=t;const{props:n,children:r}=e.vnode,a=Vo(e);rf(e,n,a,t),sf(e,r);const i=a?wf(e,t):void 0;return on=!1,i}function wf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=_o(new Proxy(e.ctx,ql));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Af(e):null;jt(e),Ut();const i=Qe(r,e,0,[e.props,a]);if(Ht(),bt(),ro(i)){if(i.then(bt,bt),t)return i.then(o=>{hi(e,o,t)}).catch(o=>{lr(o,e,0)});e.asyncDep=i}else hi(e,i,t)}else qo(e,t)}function hi(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=Ao(t)),qo(e,n)}let gi;function qo(e,t,n){const r=e.type;if(!e.render){if(!t&&gi&&!r.render){const a=r.template||wa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=le(le({isCustomElement:i,delimiters:s},o),l);r.render=gi(a,c)}}e.render=r.render||Ce}{jt(e),Ut();try{Xl(e)}finally{Ht(),bt()}}}function kf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}}))}function Af(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return kf(e)},slots:e.slots,emit:e.emit,expose:t}}function pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ao(_o(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Gt)return Gt[n](e)},has(t,n){return n in t||n in Gt}}))}function Of(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function Ef(e){return $(e)&&"__vccOpts"in e}const Re=(e,t)=>vl(e,t,on);function Cf(e,t,n){const r=arguments.length;return r===2?X(t)&&!M(t)?Wr(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wr(n)&&(n=[n]),Q(e,t,n))}const Pf=Symbol.for("v-scx"),Sf=()=>Dn(Pf),Tf="3.3.7",If="http://www.w3.org/2000/svg",ft=typeof document<"u"?document:null,vi=ft&&ft.createElement("template"),Nf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ft.createElementNS(If,e):ft.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{vi.innerHTML=r?`<svg>${e}</svg>`:e;const s=vi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Mf=Symbol("_vtc");function Rf(e,t,n){const r=e[Mf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ff=Symbol("_vod");function Lf(e,t,n){const r=e.style,a=ie(n);if(n&&!a){if(t&&!ie(t))for(const i in t)n[i]==null&&Vr(r,i,"");for(const i in n)Vr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Ff in e&&(r.display=i)}}const bi=/\s*!important$/;function Vr(e,t,n){if(M(n))n.forEach(r=>Vr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=$f(e,t);bi.test(n)?e.setProperty(zt(r),n.replace(bi,""),"important"):e[r]=n}}const yi=["Webkit","Moz","ms"],Er={};function $f(e,t){const n=Er[t];if(n)return n;let r=$e(t);if(r!=="filter"&&r in e)return Er[t]=r;r=ir(r);for(let a=0;a<yi.length;a++){const i=yi[a]+r;if(i in e)return Er[t]=i}return t}const xi="http://www.w3.org/1999/xlink";function jf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(xi,t.slice(6,t.length)):e.setAttributeNS(xi,t,n);else{const i=zs(t);n==null||i&&!oo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Df(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=oo(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function ct(e,t,n,r){e.addEventListener(t,n,r)}function zf(e,t,n,r){e.removeEventListener(t,n,r)}const _i=Symbol("_vei");function Uf(e,t,n,r,a=null){const i=e[_i]||(e[_i]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Hf(t);if(r){const c=i[t]=Kf(r,a);ct(e,s,c,l)}else o&&(zf(e,s,o,l),i[t]=void 0)}}const wi=/(?:Once|Passive|Capture)$/;function Hf(e){let t;if(wi.test(e)){t={};let r;for(;r=e.match(wi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):zt(e.slice(2)),t]}let Cr=0;const Bf=Promise.resolve(),Yf=()=>Cr||(Bf.then(()=>Cr=0),Cr=Date.now());function Kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Se(Wf(r,n.value),t,5,[r])};return n.value=e,n.attached=Yf(),n}function Wf(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ki=/^on[a-z]/,Vf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Rf(e,r,a):t==="style"?Lf(e,n,r):nr(t)?sa(t)||Uf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qf(e,t,r,a))?Df(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),jf(e,t,r,a))};function qf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ki.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ki.test(t)&&ie(n)?!1:t in e}const Jn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return M(t)?n=>$n(t,n):t};function Xf(e){e.target.composing=!0}function Ai(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Mt=Symbol("_assign"),Jf={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Mt]=Jn(a);const i=r||a.props&&a.props.type==="number";ct(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Yn(s)),e[Mt](s)}),n&&ct(e,"change",()=>{e.value=e.value.trim()}),t||(ct(e,"compositionstart",Xf),ct(e,"compositionend",Ai),ct(e,"change",Ai))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Mt]=Jn(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Yn(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Gf={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=rr(t);ct(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Yn(Gn(o)):Gn(o));e[Mt](e.multiple?a?new Set(i):i:i[0])}),e[Mt]=Jn(r)},mounted(e,{value:t}){Oi(e,t)},beforeUpdate(e,t,n){e[Mt]=Jn(n)},updated(e,{value:t}){Oi(e,t)}};function Oi(e,t){const n=e.multiple;if(!(n&&!M(t)&&!rr(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=Gn(i);if(n)M(t)?i.selected=Hs(t,o)>-1:i.selected=t.has(o);else if(or(Gn(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Gn(e){return"_value"in e?e._value:e.value}const Zf=["ctrl","shift","alt","meta"],Qf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Zf.some(n=>e[`${n}Key`]&&!t.includes(n))},ec=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Qf[t[a]];if(i&&i(n,t))return}return e(n,...r)},tc=le({patchProp:Vf},Nf);let Ei;function nc(){return Ei||(Ei=ff(tc))}const rc=(...e)=>{const t=nc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=ac(r);if(!a)return;const i=t._component;!$(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function ac(e){return ie(e)?document.querySelector(e):e}let Pr=null;function ic(){return Pr===null&&(Pr=fetch("./assets/data.json").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})),Pr}const oc={class:"container-fluid d-flex flex-wrap justify-content-center py-3 mb-4 text-bg-secondary"},sc={class:"d-flex fs-4 mb-0 me-md-auto"},lc={class:"fs-4 text-decoration-none text-light",href:"https://github.com/mlocati/unipoints"},fc=We({__name:"HeaderElement",props:{unicodeVersion:{}},setup(e){return(t,n)=>{const r=_a("font-awesome-icon");return z(),H("header",oc,[B("h1",sc,"Codepoints from Unicode v"+Pe(t.unicodeVersion),1),B("a",lc,[Q(r,{icon:["fab","github"]})])])}}}),cc={class:"container-fluid"},uc={class:"input-group mb-3"},dc=B("span",{class:"input-group-text"},"Block",-1),mc=B("option",{value:null},"any",-1),pc=["label"],hc={key:0,disabled:""},gc=["value"],vc=B("span",{class:"input-group-text"},"Search",-1),bc=We({__name:"DataFilter",props:{unipointsData:{}},emits:["change"],setup(e,{emit:t}){const n=e;let r=gt(null),a=gt(""),i=null;function o(){i!==null&&(clearTimeout(i),i=null)}const s=t;function l(u,m){return!m.some(p=>{if(!u.name.toUpperCase().includes(p))return!0})}vt(r,async()=>{c()}),vt(a,async()=>{o(),i=setTimeout(()=>c(),300)});function c(){o();const u=a.value.split(/\s+/).filter(p=>p.length>0).map(p=>p.toUpperCase()),m=[];n.unipointsData!==null&&n.unipointsData.planes.forEach(p=>{if(r.value!==null&&r.value.plane!==p.id)return;const _=[];p.blocks.forEach(F=>{if(r.value!==null&&r.value.block!==void 0&&r.value.block!==F.codename)return;let T;u.length===0?T=F.codepoints:T=F.codepoints.filter(D=>l(D,u)),T.length!==0&&_.push({block:F,codepoints:T})}),_.length!==0&&m.push({plane:p,blocks:_})}),s("change",m)}return Ro(()=>c()),(u,m)=>(z(),H("div",cc,[B("div",uc,[dc,u.unipointsData!==null?ri((z(),H("select",{key:0,class:"form-control","onUpdate:modelValue":m[0]||(m[0]=p=>ae(r)?r.value=p:r=p)},[mc,(z(!0),H(re,null,Jt(u.unipointsData.planes,p=>(z(),H("optgroup",{key:p.id.toString(),label:`Plane ${p.id}`+(p.name!==""?` (${p.name})`:p.unassigned?" (unassigned)":"")},[p.blocks.length===0?(z(),H("option",hc,"No blocks in this plane")):(z(!0),H(re,{key:1},Jt(p.blocks,_=>(z(),H("option",{key:`${p.id}-${_.codename}`,value:{plane:p.id,block:_.codename}},Pe(_.name),9,gc))),128))],8,pc))),128))],512)),[[Gf,Wn(r)]]):_t("",!0),vc,ri(B("input",{type:"search",class:"form-control","onUpdate:modelValue":m[1]||(m[1]=p=>ae(a)?a.value=p:a=p),placeholder:"Filter by name"},null,512),[[Jf,Wn(a),void 0,{trim:!0}]])])]))}}),yc={colspan:"99",class:"text-center text-light bg-dark"},xc={class:"mb-0"},_c=We({__name:"PlaneViewer",props:{plane:{}},setup(e){return(t,n)=>(z(),H("tr",null,[B("th",yc,[B("h3",xc,[dt(" Plane "+Pe(t.plane.id)+" ",1),t.plane.name!==""?(z(),H(re,{key:0},[dt(" ("),t.plane.shortName!==""?(z(),H(re,{key:0},[dt(Pe(t.plane.shortName)+" - ",1)],64)):_t("",!0),dt(Pe(t.plane.name)+") ",1)],64)):_t("",!0)])])]))}}),wc={colspan:"99",class:"text-center text-light bg-secondary"},kc={class:"mb-0"},Ci=We({__name:"BlockViewer",props:{block:{}},setup(e){return(t,n)=>(z(),H("tr",null,[B("th",wc,[B("h4",kc,Pe(t.block.name),1)])]))}}),Ac={class:"copiable"},Oc={key:0},Pi="bg-success",Si="bg-danger",Ec=We({__name:"CopiableText",props:{text:{},displayText:{},code:{type:[Boolean,null]}},setup(e){var c;const t=e,n=Re(()=>t.displayText??t.text),r=gt(null);let a=null;function i(){r.value===null||a===null||(clearTimeout(a),a=null,r.value.classList.remove(Pi,Si))}function o(u){i(),r.value!==null&&(r.value.classList.add(u?Pi:Si),a=setTimeout(()=>i(),500))}let s;(c=navigator==null?void 0:navigator.clipboard)!=null&&c.writeText?s=()=>navigator.clipboard.writeText(t.text):s=()=>new Promise((u,m)=>{const p=document.createElement("textarea");p.style.width="1px",p.style.height="1px",p.style.overflow="hidden",p.style.top="0",p.style.left="0",p.style.position="fixed",p.value=t.text,document.body.appendChild(p);try{p.focus(),p.select(),document.execCommand("copy")?u():m(new Error("Copy command failed"))}catch(_){m(_)}finally{document.body.removeChild(p)}});function l(u){u.preventDefault(),i(),s().then(()=>{o(!0)}).catch(m=>{console.error(m),o(!1)})}return(u,m)=>{const p=_a("font-awesome-icon");return z(),H("span",Ac,[u.code?(z(),H("code",Oc,Pe(n.value),1)):(z(),H(re,{key:1},[dt(Pe(n.value),1)],64)),B("a",{href:"#",title:"Copy to clipboard",ref_key:"link",ref:r,onClick:l},[Q(p,{icon:["far","copy"]})],512)])}}});const Xo=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Sr=Xo(Ec,[["__scopeId","data-v-7e73e309"]]),Jo=e=>(Ol("data-v-e771dd01"),e=e(),El(),e),Cc={class:"char"},Pc={class:"mb-0"},Sc=Jo(()=>B("br",null,null,-1)),Tc=Jo(()=>B("br",null,null,-1)),Ic=We({__name:"CodepointViewer",props:{block:{},codepoint:{}},setup(e){const t=e,n=Re(()=>t.codepoint.id.toString(16).toUpperCase());return(r,a)=>(z(),H("tr",null,[B("td",null,[Q(Sr,{text:`"\\u{${n.value}}"`,"display-text":`\\u{${n.value}}`,code:!0},null,8,["text","display-text"])]),B("td",Cc,[B("pre",Pc,Pe(r.codepoint.char),1)]),B("td",null,[B("code",null,Pe(r.codepoint.name),1)]),B("td",null,[Q(Sr,{text:`\\MLUnipoints\\Codepoint::${r.codepoint.codename}`,"display-text":`Codepoint::${r.codepoint.codename}`,code:!0},null,8,["text","display-text"]),Sc,Q(Sr,{text:`\\MLUnipoints\\Codepoint\\${r.block.codename}::${r.codepoint.codename}`,"display-text":`Codepoint\\${r.block.codename}::${r.codepoint.codename}`,code:!0},null,8,["text","display-text"]),Tc])]))}});const Nc=Xo(Ic,[["__scopeId","data-v-e771dd01"]]),Mc={class:"container-fluid"},Rc={key:0,class:"alert alert-info"},Fc={key:1,class:"table table-striped table-hover table-sm"},Lc=B("colgroup",null,[B("col",{width:"1"}),B("col",{width:"1"})],-1),$c={key:0},jc={key:0},Dc={class:"text-center",colspan:"99"},En=1e3,zc=We({__name:"DataViewer",props:{filterResults:{}},setup(e){let t=gt(En),n=!1;const r=e;vt(r.filterResults,async()=>{t.value=En});const a=Re(()=>{if(n=!1,r.filterResults===null)return[];let i=t.value;const o=[];return r.filterResults.some(s=>{const l={plane:s.plane,blocks:[]};if(s.blocks.some(c=>{const u={block:c.block,codepoints:[]};if(c.codepoints.length<=i?u.codepoints=c.codepoints:u.codepoints=c.codepoints.slice(0,i),l.blocks.push(u),i-=u.codepoints.length,i<=0)return n=!0,!0}),o.push(l),i<=0)return!0}),o});return(i,o)=>(z(),H("div",Mc,[a.value.length===0?(z(),H("div",Rc,"No results")):(z(),H("table",Fc,[Lc,(z(!0),H(re,null,Jt(a.value,s=>(z(),H(re,{key:s.plane.id.toString()},[B("thead",null,[Q(_c,{plane:s.plane},null,8,["plane"]),Q(Ci,{block:s.blocks[0].block},null,8,["block"])]),(z(!0),H(re,null,Jt(s.blocks,(l,c)=>(z(),H(re,{key:`${s.plane.id}@${l.codename}`},[c!==0?(z(),H("thead",$c,[Q(Ci,{block:l.block},null,8,["block"])])):_t("",!0),B("tbody",null,[(z(!0),H(re,null,Jt(l.codepoints,u=>(z(),Aa(Nc,{key:u.name,block:l.block,codepoint:u},null,8,["block","codepoint"]))),128))])],64))),128))],64))),128)),Wn(n)?(z(),H("tfoot",jc,[B("tr",null,[B("td",Dc,[B("button",{class:"btn btn-secondary",onClick:o[0]||(o[0]=ec(s=>ae(t)?t.value+=En:t+=En,["prevent"]))}," Show more ")])])])):_t("",!0)]))]))}}),Uc={key:0,class:"container-fluid"},Hc={key:0,class:"alert alert-danger mt-5 text-center"},Bc={key:1,class:"alert alert-info mt-5 text-center fs-4"},Yc=B("br",null,null,-1),Kc={key:0},Wc=We({__name:"App",setup(e){const t=gt(null),n=gt(null),r=gt(null);return ic().then(a=>{t.value=a}).catch(a=>{n.value=a}),(a,i)=>{const o=_a("font-awesome-icon");return t.value===null?(z(),H("main",Uc,[n.value!==null?(z(),H("div",Hc,Pe(n.value),1)):(z(),H("div",Bc,[dt(" Loading..."),Yc,Q(o,{icon:"fa-solid fa-spinner",spin:""})]))])):(z(),H(re,{key:1},[Q(fc,{"unicode-version":t.value.unicodeVersion},null,8,["unicode-version"]),t.value?(z(),H("main",Kc,[Q(bc,{"unipoints-data":t.value,onChange:i[0]||(i[0]=s=>r.value=s)},null,8,["unipoints-data"]),r.value!==null?(z(),Aa(zc,{key:0,filterResults:r.value},null,8,["filterResults"])):_t("",!0)])):_t("",!0)],64))}}});function Ti(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ti(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ti(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zn(e){"@babel/helpers - typeof";return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zn(e)}function Vc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ii(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qc(e,t,n){return t&&Ii(e.prototype,t),n&&Ii(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ca(e,t){return Jc(e)||Zc(e,t)||Go(e,t)||eu()}function mn(e){return Xc(e)||Gc(e)||Go(e)||Qc()}function Xc(e){if(Array.isArray(e))return qr(e)}function Jc(e){if(Array.isArray(e))return e}function Gc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Go(e,t){if(e){if(typeof e=="string")return qr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qr(e,t)}}function qr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Qc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ni=function(){},Pa={},Zo={},Qo=null,es={mark:Ni,measure:Ni};try{typeof window<"u"&&(Pa=window),typeof document<"u"&&(Zo=document),typeof MutationObserver<"u"&&(Qo=MutationObserver),typeof performance<"u"&&(es=performance)}catch{}var tu=Pa.navigator||{},Mi=tu.userAgent,Ri=Mi===void 0?"":Mi,tt=Pa,Z=Zo,Fi=Qo,Cn=es;tt.document;var qe=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",ts=~Ri.indexOf("MSIE")||~Ri.indexOf("Trident/"),Pn,Sn,Tn,In,Nn,Be="___FONT_AWESOME___",Xr=16,ns="fa",rs="svg-inline--fa",wt="data-fa-i2svg",Jr="data-fa-pseudo-element",nu="data-fa-pseudo-element-pending",Sa="data-prefix",Ta="data-icon",Li="fontawesome-i2svg",ru="async",au=["HTML","HEAD","STYLE","SCRIPT"],as=function(){try{return!0}catch{return!1}}(),G="classic",te="sharp",Ia=[G,te];function pn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[G]}})}var sn=pn((Pn={},oe(Pn,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),oe(Pn,te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Pn)),ln=pn((Sn={},oe(Sn,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),oe(Sn,te,{solid:"fass",regular:"fasr",light:"fasl"}),Sn)),fn=pn((Tn={},oe(Tn,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),oe(Tn,te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Tn)),iu=pn((In={},oe(In,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),oe(In,te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),In)),ou=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,is="fa-layers-text",su=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,lu=pn((Nn={},oe(Nn,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),oe(Nn,te,{900:"fass",400:"fasr",300:"fasl"}),Nn)),os=[1,2,3,4,5,6,7,8,9,10],fu=os.concat([11,12,13,14,15,16,17,18,19,20]),cu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},cn=new Set;Object.keys(ln[G]).map(cn.add.bind(cn));Object.keys(ln[te]).map(cn.add.bind(cn));var uu=[].concat(Ia,mn(cn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mt.GROUP,mt.SWAP_OPACITY,mt.PRIMARY,mt.SECONDARY]).concat(os.map(function(e){return"".concat(e,"x")})).concat(fu.map(function(e){return"w-".concat(e)})),Qt=tt.FontAwesomeConfig||{};function du(e){var t=Z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function mu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Z&&typeof Z.querySelector=="function"){var pu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pu.forEach(function(e){var t=Ca(e,2),n=t[0],r=t[1],a=mu(du(n));a!=null&&(Qt[r]=a)})}var ss={styleDefault:"solid",familyDefault:"classic",cssPrefix:ns,replacementClass:rs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qt.familyPrefix&&(Qt.cssPrefix=Qt.familyPrefix);var Dt=E(E({},ss),Qt);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var P={};Object.keys(ss).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Dt[e]=n,en.forEach(function(r){return r(P)})},get:function(){return Dt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Dt.cssPrefix=t,en.forEach(function(n){return n(P)})},get:function(){return Dt.cssPrefix}});tt.FontAwesomeConfig=P;var en=[];function hu(e){return en.push(e),function(){en.splice(en.indexOf(e),1)}}var Je=Xr,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gu(e){if(!(!e||!qe)){var t=Z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Z.head.insertBefore(t,r),e}}var vu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function un(){for(var e=12,t="";e-- >0;)t+=vu[Math.random()*62|0];return t}function Bt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Na(e){return e.classList?Bt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ls(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ls(e[n]),'" ')},"").trim()}function hr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ma(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function yu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function xu(e){var t=e.transform,n=e.width,r=n===void 0?Xr:n,a=e.height,i=a===void 0?Xr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ts?l+="translate(".concat(t.x/Je-r/2,"em, ").concat(t.y/Je-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Je,"em), calc(-50% + ").concat(t.y/Je,"em)) "):l+="translate(".concat(t.x/Je,"em, ").concat(t.y/Je,"em) "),l+="scale(".concat(t.size/Je*(t.flipX?-1:1),", ").concat(t.size/Je*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var _u=`:root, :host {
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
}`;function fs(){var e=ns,t=rs,n=P.cssPrefix,r=P.replacementClass,a=_u;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var $i=!1;function Tr(){P.autoAddCss&&!$i&&(gu(fs()),$i=!0)}var wu={mixout:function(){return{dom:{css:fs,insertCss:Tr}}},hooks:function(){return{beforeDOMElementCreation:function(){Tr()},beforeI2svg:function(){Tr()}}}},Ye=tt||{};Ye[Be]||(Ye[Be]={});Ye[Be].styles||(Ye[Be].styles={});Ye[Be].hooks||(Ye[Be].hooks={});Ye[Be].shims||(Ye[Be].shims=[]);var Ee=Ye[Be],cs=[],ku=function e(){Z.removeEventListener("DOMContentLoaded",e),Qn=1,cs.map(function(t){return t()})},Qn=!1;qe&&(Qn=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),Qn||Z.addEventListener("DOMContentLoaded",ku));function Au(e){qe&&(Qn?setTimeout(e,0):cs.push(e))}function hn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ls(e):"<".concat(t," ").concat(bu(r),">").concat(i.map(hn).join(""),"</").concat(t,">")}function ji(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ou=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Ir=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ou(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function Eu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Gr(e){var t=Eu(e);return t.length===1?t[0].toString(16):null}function Cu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Di(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Zr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Di(t);typeof Ee.hooks.addPack=="function"&&!a?Ee.hooks.addPack(e,Di(t)):Ee.styles[e]=E(E({},Ee.styles[e]||{}),i),e==="fas"&&Zr("fa",t)}var Mn,Rn,Fn,Ct=Ee.styles,Pu=Ee.shims,Su=(Mn={},oe(Mn,G,Object.values(fn[G])),oe(Mn,te,Object.values(fn[te])),Mn),Ra=null,us={},ds={},ms={},ps={},hs={},Tu=(Rn={},oe(Rn,G,Object.keys(sn[G])),oe(Rn,te,Object.keys(sn[te])),Rn);function Iu(e){return~uu.indexOf(e)}function Nu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Iu(a)?a:null}var gs=function(){var t=function(i){return Ir(Ct,function(o,s,l){return o[l]=Ir(s,i,{}),o},{})};us=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ds=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),hs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ct||P.autoFetchSvg,r=Ir(Pu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ms=r.names,ps=r.unicodes,Ra=gr(P.styleDefault,{family:P.familyDefault})};hu(function(e){Ra=gr(e.styleDefault,{family:P.familyDefault})});gs();function Fa(e,t){return(us[e]||{})[t]}function Mu(e,t){return(ds[e]||{})[t]}function pt(e,t){return(hs[e]||{})[t]}function vs(e){return ms[e]||{prefix:null,iconName:null}}function Ru(e){var t=ps[e],n=Fa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function nt(){return Ra}var La=function(){return{prefix:null,iconName:null,rest:[]}};function gr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?G:n,a=sn[r][e],i=ln[r][e]||ln[r][a],o=e in Ee.styles?e:null;return i||o||null}var zi=(Fn={},oe(Fn,G,Object.keys(fn[G])),oe(Fn,te,Object.keys(fn[te])),Fn);function vr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},oe(t,G,"".concat(P.cssPrefix,"-").concat(G)),oe(t,te,"".concat(P.cssPrefix,"-").concat(te)),t),o=null,s=G;(e.includes(i[G])||e.some(function(c){return zi[G].includes(c)}))&&(s=G),(e.includes(i[te])||e.some(function(c){return zi[te].includes(c)}))&&(s=te);var l=e.reduce(function(c,u){var m=Nu(P.cssPrefix,u);if(Ct[u]?(u=Su[s].includes(u)?iu[s][u]:u,o=u,c.prefix=u):Tu[s].indexOf(u)>-1?(o=u,c.prefix=gr(u,{family:s})):m?c.iconName=m:u!==P.replacementClass&&u!==i[G]&&u!==i[te]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var p=o==="fa"?vs(c.iconName):{},_=pt(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||_||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Ct.far&&Ct.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},La());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===te&&(Ct.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=pt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=nt()||"fas"),l}var Fu=function(){function e(){Vc(this,e),this.definitions={}}return qc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Zr(s,o[s]);var l=fn[G][s];l&&Zr(l,o[s]),gs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ui=[],Pt={},Rt={},Lu=Object.keys(Rt);function $u(e,t){var n=t.mixoutsTo;return Ui=e,Pt={},Object.keys(Rt).forEach(function(r){Lu.indexOf(r)===-1&&delete Rt[r]}),Ui.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Zn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Pt[o]||(Pt[o]=[]),Pt[o].push(i[o])})}r.provides&&r.provides(Rt)}),n}function Qr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Pt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function kt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Pt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ke(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Rt[e]?Rt[e].apply(null,t):void 0}function ea(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||nt();if(t)return t=pt(n,t)||t,ji(bs.definitions,n,t)||ji(Ee.styles,n,t)}var bs=new Fu,ju=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,kt("noAuto")},Du={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qe?(kt("beforeI2svg",t),Ke("pseudoElements2svg",t),Ke("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Au(function(){Uu({autoReplaceSvgRoot:n}),kt("watch",t)})}},zu={icon:function(t){if(t===null)return null;if(Zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=gr(t[0]);return{prefix:r,iconName:pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(ou))){var a=vr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||nt(),iconName:pt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=nt();return{prefix:i,iconName:pt(i,t)||t}}}},be={noAuto:ju,config:P,dom:Du,parse:zu,library:bs,findIconDefinition:ea,toHtml:hn},Uu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(Ee.styles).length>0||P.autoFetchSvg)&&qe&&P.autoReplaceSvg&&be.dom.i2svg({node:r})};function br(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return hn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(qe){var r=Z.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Hu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ma(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=hr(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Bu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function $a(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,_=p===void 0?!1:p,F=r.found?r:n,T=F.width,D=F.height,k=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(ye){return m.classes.indexOf(ye)===-1}).filter(function(ye){return ye!==""||!!ye}).concat(m.classes).join(" "),R={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(D)})},S=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/D*16*.0625,"em")}:{};_&&(R.attributes[wt]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(u||un())},children:[l]}),delete R.attributes.title);var K=E(E({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},S),m.styles)}),fe=r.found&&n.found?Ke("generateAbstractMask",K)||{children:[],attributes:{}}:Ke("generateAbstractIcon",K)||{children:[],attributes:{}},ce=fe.children,_e=fe.attributes;return K.children=ce,K.attributes=_e,s?Bu(K):Hu(K)}function Hi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[wt]="");var u=E({},o.styles);Ma(a)&&(u.transform=xu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=hr(u);m.length>0&&(c.style=m);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Yu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=hr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Nr=Ee.styles;function ta(e){var t=e[0],n=e[1],r=e.slice(4),a=Ca(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(mt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(mt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Ku={found:!1,width:512,height:512};function Wu(e,t){!as&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function na(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=nt()),new Promise(function(r,a){if(Ke("missingIconAbstract"),n==="fa"){var i=vs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Nr[t]&&Nr[t][e]){var o=Nr[t][e];return r(ta(o))}Wu(e,t),r(E(E({},Ku),{},{icon:P.showMissingIcons&&e?Ke("missingIconAbstract")||{}:{}}))})}var Bi=function(){},ra=P.measurePerformance&&Cn&&Cn.mark&&Cn.measure?Cn:{mark:Bi,measure:Bi},Xt='FA "6.4.2"',Vu=function(t){return ra.mark("".concat(Xt," ").concat(t," begins")),function(){return ys(t)}},ys=function(t){ra.mark("".concat(Xt," ").concat(t," ends")),ra.measure("".concat(Xt," ").concat(t),"".concat(Xt," ").concat(t," begins"),"".concat(Xt," ").concat(t," ends"))},ja={begin:Vu,end:ys},Un=function(){};function Yi(e){var t=e.getAttribute?e.getAttribute(wt):null;return typeof t=="string"}function qu(e){var t=e.getAttribute?e.getAttribute(Sa):null,n=e.getAttribute?e.getAttribute(Ta):null;return t&&n}function Xu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Ju(){if(P.autoReplaceSvg===!0)return Hn.replace;var e=Hn[P.autoReplaceSvg];return e||Hn.replace}function Gu(e){return Z.createElementNS("http://www.w3.org/2000/svg",e)}function Zu(e){return Z.createElement(e)}function xs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Gu:Zu:n;if(typeof e=="string")return Z.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(xs(o,{ceFn:r}))}),a}function Qu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Hn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(xs(a),n)}),n.getAttribute(wt)===null&&P.keepOriginalSource){var r=Z.createComment(Qu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Na(n).indexOf(P.replacementClass))return Hn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return hn(s)}).join(`
`);n.setAttribute(wt,""),n.innerHTML=o}};function Ki(e){e()}function _s(e,t){var n=typeof t=="function"?t:Un;if(e.length===0)n();else{var r=Ki;P.mutateApproach===ru&&(r=tt.requestAnimationFrame||Ki),r(function(){var a=Ju(),i=ja.begin("mutate");e.map(a),i(),n()})}}var Da=!1;function ws(){Da=!0}function aa(){Da=!1}var er=null;function Wi(e){if(Fi&&P.observeMutations){var t=e.treeCallback,n=t===void 0?Un:t,r=e.nodeCallback,a=r===void 0?Un:r,i=e.pseudoElementsCallback,o=i===void 0?Un:i,s=e.observeMutationsRoot,l=s===void 0?Z:s;er=new Fi(function(c){if(!Da){var u=nt();Bt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Yi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Yi(m.target)&&~cu.indexOf(m.attributeName))if(m.attributeName==="class"&&qu(m.target)){var p=vr(Na(m.target)),_=p.prefix,F=p.iconName;m.target.setAttribute(Sa,_||u),F&&m.target.setAttribute(Ta,F)}else Xu(m.target)&&a(m.target)})}}),qe&&er.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ed(){er&&er.disconnect()}function td(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function nd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=vr(Na(e));return a.prefix||(a.prefix=nt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Mu(a.prefix,e.innerText)||Fa(a.prefix,Gr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function rd(e){var t=Bt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||un()):(t["aria-hidden"]="true",t.focusable="false")),t}function ad(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=nd(e),r=n.iconName,a=n.prefix,i=n.rest,o=rd(e),s=Qr("parseNodeAttributes",{},e),l=t.styleParser?td(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var id=Ee.styles;function ks(e){var t=P.autoReplaceSvg==="nest"?Vi(e,{styleParser:!1}):Vi(e);return~t.extra.classes.indexOf(is)?Ke("generateLayersText",e,t):Ke("generateSvgReplacementMutation",e,t)}var rt=new Set;Ia.map(function(e){rt.add("fa-".concat(e))});Object.keys(sn[G]).map(rt.add.bind(rt));Object.keys(sn[te]).map(rt.add.bind(rt));rt=mn(rt);function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qe)return Promise.resolve();var n=Z.documentElement.classList,r=function(m){return n.add("".concat(Li,"-").concat(m))},a=function(m){return n.remove("".concat(Li,"-").concat(m))},i=P.autoFetchSvg?rt:Ia.map(function(u){return"fa-".concat(u)}).concat(Object.keys(id));i.includes("fa")||i.push("fa");var o=[".".concat(is,":not([").concat(wt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(wt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Bt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ja.begin("onTree"),c=s.reduce(function(u,m){try{var p=ks(m);p&&u.push(p)}catch(_){as||_.name==="MissingIcon"&&console.error(_)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(p){_s(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),m(p)})})}function od(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ks(e).then(function(n){n&&_s([n],t)})}function sd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ea(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ea(a||{})),e(r,E(E({},n),{},{mask:a}))}}var ld=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Le:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,p=m===void 0?null:m,_=n.titleId,F=_===void 0?null:_,T=n.classes,D=T===void 0?[]:T,k=n.attributes,O=k===void 0?{}:k,R=n.styles,S=R===void 0?{}:R;if(t){var K=t.prefix,fe=t.iconName,ce=t.icon;return br(E({type:"icon"},t),function(){return kt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(p?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(F||un()):(O["aria-hidden"]="true",O.focusable="false")),$a({icons:{main:ta(ce),mask:l?ta(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:fe,transform:E(E({},Le),a),symbol:o,title:p,maskId:u,titleId:F,extra:{attributes:O,styles:S,classes:D}})})}},fd={mixout:function(){return{icon:sd(ld)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=qi,n.nodeCallback=od,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?Z:r,i=n.callback,o=i===void 0?function(){}:i;return qi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,p=r.extra;return new Promise(function(_,F){Promise.all([na(a,s),u.iconName?na(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var D=Ca(T,2),k=D[0],O=D[1];_([n,$a({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=hr(s);l.length>0&&(a.style=l);var c;return Ma(o)&&(c=Ke("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},cd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return br({type:"layer"},function(){kt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(mn(i)).join(" ")},children:o}]})}}}},ud={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return br({type:"counter",content:n},function(){return kt("beforeDOMElementCreation",{content:n,params:r}),Yu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(mn(s))}})})}}}},dd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Le:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,p=r.styles,_=p===void 0?{}:p;return br({type:"text",content:n},function(){return kt("beforeDOMElementCreation",{content:n,params:r}),Hi({content:n,transform:E(E({},Le),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(P.cssPrefix,"-layers-text")].concat(mn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ts){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Hi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},md=new RegExp('"',"ug"),Xi=[1105920,1112319];function pd(e){var t=e.replace(md,""),n=Cu(t,0),r=n>=Xi[0]&&n<=Xi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Gr(a?t[0]:t),isSecondary:r||a}}function Ji(e,t){var n="".concat(nu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Bt(e.children),o=i.filter(function(ce){return ce.getAttribute(Jr)===t})[0],s=tt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(su),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?te:G,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ln[p][l[2].toLowerCase()]:lu[p][c],F=pd(m),T=F.value,D=F.isSecondary,k=l[0].startsWith("FontAwesome"),O=Fa(_,T),R=O;if(k){var S=Ru(T);S.iconName&&S.prefix&&(O=S.iconName,_=S.prefix)}if(O&&!D&&(!o||o.getAttribute(Sa)!==_||o.getAttribute(Ta)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var K=ad(),fe=K.extra;fe.attributes[Jr]=t,na(O,_).then(function(ce){var _e=$a(E(E({},K),{},{icons:{main:ce,mask:La()},prefix:_,iconName:R,extra:fe,watchable:!0})),ye=Z.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ye,e.firstChild):e.appendChild(ye),ye.outerHTML=_e.map(function(je){return hn(je)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function hd(e){return Promise.all([Ji(e,"::before"),Ji(e,"::after")])}function gd(e){return e.parentNode!==document.head&&!~au.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Jr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Gi(e){if(qe)return new Promise(function(t,n){var r=Bt(e.querySelectorAll("*")).filter(gd).map(hd),a=ja.begin("searchPseudoElements");ws(),Promise.all(r).then(function(){a(),aa(),t()}).catch(function(){a(),aa(),n()})})}var vd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Gi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Z:r;P.searchPseudoElements&&Gi(a)}}},Zi=!1,bd={mixout:function(){return{dom:{unwatch:function(){ws(),Zi=!0}}}},hooks:function(){return{bootstrap:function(){Wi(Qr("mutationObserverCallbacks",{}))},noAuto:function(){ed()},watch:function(n){var r=n.observeMutationsRoot;Zi?aa():Wi(Qr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Qi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},yd={mixout:function(){return{parse:{transform:function(n){return Qi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Qi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:p};return{tag:"g",attributes:E({},_.outer),children:[{tag:"g",attributes:E({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),_.path)}]}]}}}},Mr={x:0,y:0,width:"100%",height:"100%"};function eo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function xd(e){return e.tag==="g"?e.children:[e]}var _d={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?vr(a.split(" ").map(function(o){return o.trim()})):La();return i.prefix||(i.prefix=nt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,p=o.icon,_=yu({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:E(E({},Mr),{},{fill:"white"})},T=u.children?{children:u.children.map(eo)}:{},D={tag:"g",attributes:E({},_.inner),children:[eo(E({tag:u.tag,attributes:E(E({},u.attributes),_.path)},T))]},k={tag:"g",attributes:E({},_.outer),children:[D]},O="mask-".concat(s||un()),R="clip-".concat(s||un()),S={tag:"mask",attributes:E(E({},Mr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,k]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:xd(p)},S]};return r.push(K,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(O,")")},Mr)}),{children:r,attributes:a}}}},wd={provides:function(t){var n=!1;tt.matchMedia&&(n=tt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},kd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ad=[wu,fd,cd,ud,dd,vd,bd,yd,_d,wd,kd];$u(Ad,{mixoutsTo:be});be.noAuto;be.config;var Od=be.library;be.dom;var ia=be.parse;be.findIconDefinition;be.toHtml;var Ed=be.icon;be.layer;be.text;be.counter;function to(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?to(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):to(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tr(e){"@babel/helpers - typeof";return tr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tr(e)}function pe(e,t,n){return t=Td(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Pd(e,t){if(e==null)return{};var n=Cd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Sd(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Td(e){var t=Sd(e,"string");return typeof t=="symbol"?t:String(t)}var Id=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},As={exports:{}};(function(e){(function(t){var n=function(k,O,R){if(!c(O)||m(O)||p(O)||_(O)||l(O))return O;var S,K=0,fe=0;if(u(O))for(S=[],fe=O.length;K<fe;K++)S.push(n(k,O[K],R));else{S={};for(var ce in O)Object.prototype.hasOwnProperty.call(O,ce)&&(S[k(ce,R)]=n(k,O[ce],R))}return S},r=function(k,O){O=O||{};var R=O.separator||"_",S=O.split||/(?=[A-Z])/;return k.split(S).join(R)},a=function(k){return F(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,R){return R?R.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},u=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},p=function(k){return s.call(k)=="[object RegExp]"},_=function(k){return s.call(k)=="[object Boolean]"},F=function(k){return k=k-0,k===k},T=function(k,O){var R=O&&"process"in O?O.process:O;return typeof R!="function"?k:function(S,K){return R(S,k,K)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(T(a,O),k)},decamelizeKeys:function(k,O){return n(T(o,O),k,O)},pascalizeKeys:function(k,O){return n(T(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Id)})(As);var Nd=As.exports,Md=["class","style"];function Rd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Nd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Fd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Os(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Os(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Fd(u);break;case"style":l.style=Rd(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Pd(n,Md);return Cf(e.tag,Ue(Ue(Ue({},t),{},{class:a.class,style:Ue(Ue({},a.style),o)},a.attrs),s),r)}var Es=!1;try{Es=!0}catch{}function Ld(){if(!Es&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Rr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?pe({},e,t):{}}function $d(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},pe(t,"fa-".concat(e.size),e.size!==null),pe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),pe(t,"fa-pull-".concat(e.pull),e.pull!==null),pe(t,"fa-swap-opacity",e.swapOpacity),pe(t,"fa-bounce",e.bounce),pe(t,"fa-shake",e.shake),pe(t,"fa-beat",e.beat),pe(t,"fa-fade",e.fade),pe(t,"fa-beat-fade",e.beatFade),pe(t,"fa-flash",e.flash),pe(t,"fa-spin-pulse",e.spinPulse),pe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function no(e){if(e&&tr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ia.icon)return ia.icon(e);if(e===null)return null;if(tr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var jd=We({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Re(function(){return no(t.icon)}),i=Re(function(){return Rr("classes",$d(t))}),o=Re(function(){return Rr("transform",typeof t.transform=="string"?ia.transform(t.transform):t.transform)}),s=Re(function(){return Rr("mask",no(t.mask))}),l=Re(function(){return Ed(a.value,Ue(Ue(Ue(Ue({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});vt(l,function(u){if(!u)return Ld("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=Re(function(){return l.value?Os(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Dd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},zd={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"]},Ud={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};Od.add(Dd,zd,Ud);rc(Wc).component("font-awesome-icon",jd).mount("#app");
