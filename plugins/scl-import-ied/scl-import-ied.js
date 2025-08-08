/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window,e$3=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;class o$4{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}}const r$2=t=>new o$4("string"==typeof t?t:t+"",void 0,s$3),i$3=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$4(n,t,s$3)},S$1=(s,n)=>{e$3?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$2=window,r$1=e$2.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$3=e$2.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$1},d$1="finalized";class u$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$3||o$3({ReactiveElement:u$1}),(null!==(s$2=e$2.reactiveElementVersions)&&void 0!==s$2?s$2:e$2.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i$2=window,s$1=i$2.trustedTypes,e$1=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$2="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$3,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$1?e$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$2+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$2)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$2).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$2.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i$2.litHtmlVersions)&&void 0!==t?t:i$2.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o$1;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o$1=globalThis.litElementVersions)&&void 0!==o$1?o$1:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$1=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e(n,t,o):i$1(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(i,n){return o({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/** Utility function to create element with `tagName` and its`attributes` */
function createElement(doc, tag, attrs) {
    const element = doc.createElementNS(doc.documentElement.namespaceURI, tag);
    Object.entries(attrs)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => value !== null)
        .forEach(([name, value]) => element.setAttribute(name, value));
    return element;
}

const tAbstractConductingEquipment = [
    "TransformerWinding",
    "ConductingEquipment",
];
const tEquipment = [
    "GeneralEquipment",
    "PowerTransformer",
    ...tAbstractConductingEquipment,
];
const tEquipmentContainer = ["Substation", "VoltageLevel", "Bay"];
const tGeneralEquipmentContainer = ["Process", "Line"];
const tAbstractEqFuncSubFunc = ["EqSubFunction", "EqFunction"];
const tPowerSystemResource = [
    "SubFunction",
    "Function",
    "TapChanger",
    "SubEquipment",
    ...tEquipment,
    ...tEquipmentContainer,
    ...tGeneralEquipmentContainer,
    ...tAbstractEqFuncSubFunc,
];
const tLNodeContainer = ["ConnectivityNode", ...tPowerSystemResource];
const tCertificate = ["GOOSESecurity", "SMVSecurity"];
const tNaming = ["SubNetwork", ...tCertificate, ...tLNodeContainer];
const tAbstractDataAttribute = ["BDA", "DA"];
const tControlWithIEDName = ["SampledValueControl", "GSEControl"];
const tControlWithTriggerOpt = ["LogControl", "ReportControl"];
const tControl = [...tControlWithIEDName, ...tControlWithTriggerOpt];
const tControlBlock = ["GSE", "SMV"];
const tUnNaming = [
    "ConnectedAP",
    "PhysConn",
    "SDO",
    "DO",
    "DAI",
    "SDI",
    "DOI",
    "Inputs",
    "RptEnabled",
    "Server",
    "ServerAt",
    "SettingControl",
    "Communication",
    "Log",
    "LDevice",
    "DataSet",
    "AccessPoint",
    "IED",
    "NeutralPoint",
    ...tControl,
    ...tControlBlock,
    ...tAbstractDataAttribute,
];
const tAnyLN = ["LN0", "LN"];
const tAnyContentFromOtherNamespace = [
    "Text",
    "Private",
    "Hitem",
    "AccessControl",
];
const tCert = ["Subject", "IssuerName"];
const tDurationInMilliSec = ["MinTime", "MaxTime"];
const tIDNaming = ["LNodeType", "DOType", "DAType", "EnumType"];
const tServiceYesNo = [
    "FileHandling",
    "TimeSyncProt",
    "CommProt",
    "SGEdit",
    "ConfSG",
    "GetDirectory",
    "GetDataObjectDefinition",
    "DataObjectDirectory",
    "GetDataSetValue",
    "SetDataSetValue",
    "DataSetDirectory",
    "ReadWrite",
    "TimerActivatedControl",
    "GetCBValues",
    "GSEDir",
    "ConfLdName",
];
const tServiceWithMaxAndMaxAttributes = ["DynDataSet", "ConfDataSet"];
const tServiceWithMax = [
    "GSSE",
    "GOOSE",
    "ConfReportControl",
    "SMVsc",
    ...tServiceWithMaxAndMaxAttributes,
];
const tServiceWithMaxNonZero = ["ConfLogControl", "ConfSigRef"];
const tServiceSettings = [
    "ReportSettings",
    "LogSettings",
    "GSESettings",
    "SMVSettings",
];
const tBaseElement = ["SCL", ...tNaming, ...tUnNaming, ...tIDNaming];
const sCLTags = [
    ...tBaseElement,
    ...tAnyContentFromOtherNamespace,
    "Header",
    "LNode",
    "Val",
    "Voltage",
    "Services",
    ...tCert,
    ...tDurationInMilliSec,
    "Association",
    "FCDA",
    "ClientLN",
    "IEDName",
    "ExtRef",
    "Protocol",
    ...tAnyLN,
    ...tServiceYesNo,
    "DynAssociation",
    "SettingGroups",
    ...tServiceWithMax,
    ...tServiceWithMaxNonZero,
    ...tServiceSettings,
    "ConfLNs",
    "ClientServices",
    "SupSubscription",
    "ValueHandling",
    "RedProt",
    "McSecurity",
    "KDC",
    "Address",
    "P",
    "ProtNs",
    "EnumVal",
    "Terminal",
    "BitRate",
    "Authentication",
    "DataTypeTemplates",
    "History",
    "OptFields",
    "SmvOpts",
    "TrgOps",
    "SamplesPerSec",
    "SmpRate",
    "SecPerSamples",
];
const tBaseNameSequence = ["Text", "Private"];
const tNamingSequence = [...tBaseNameSequence];
const tUnNamingSequence = [...tBaseNameSequence];
const tIDNamingSequence = [...tBaseNameSequence];
const tAbstractDataAttributeSequence = [...tUnNamingSequence, "Val"];
const tLNodeContainerSequence = [...tNamingSequence, "LNode"];
const tPowerSystemResourceSequence = [...tLNodeContainerSequence];
const tEquipmentSequence = [...tPowerSystemResourceSequence];
const tEquipmentContainerSequence = [
    ...tPowerSystemResourceSequence,
    "PowerTransformer",
    "GeneralEquipment",
];
const tAbstractConductingEquipmentSequence = [
    ...tEquipmentSequence,
    "Terminal",
];
const tControlBlockSequence = [...tUnNamingSequence, "Address"];
const tControlSequence = [...tNamingSequence];
const tControlWithIEDNameSequence = [...tControlSequence, "IEDName"];
const tAnyLNSequence = [
    ...tUnNamingSequence,
    "DataSet",
    "ReportControl",
    "LogControl",
    "DOI",
    "Inputs",
    "Log",
];
const tGeneralEquipmentContainerSequence = [
    ...tPowerSystemResourceSequence,
    "GeneralEquipment",
    "Function",
];
const tControlWithTriggerOptSequence = [...tControlSequence, "TrgOps"];
const tAbstractEqFuncSubFuncSequence = [
    ...tPowerSystemResourceSequence,
    "GeneralEquipment",
    "EqSubFunction",
];
const tags = {
    AccessControl: {
        parents: ["LDevice"],
        children: [],
    },
    AccessPoint: {
        parents: ["IED"],
        children: [
            ...tNamingSequence,
            "Server",
            "LN",
            "ServerAt",
            "Services",
            "GOOSESecurity",
            "SMVSecurity",
        ],
    },
    Address: {
        parents: ["ConnectedAP", "GSE", "SMV"],
        children: ["P"],
    },
    Association: {
        parents: ["Server"],
        children: [],
    },
    Authentication: {
        parents: ["Server"],
        children: [],
    },
    BDA: {
        parents: ["DAType"],
        children: [...tAbstractDataAttributeSequence],
    },
    BitRate: {
        parents: ["SubNetwork"],
        children: [],
    },
    Bay: {
        parents: ["VoltageLevel"],
        children: [
            ...tEquipmentContainerSequence,
            "ConductingEquipment",
            "ConnectivityNode",
            "Function",
        ],
    },
    ClientLN: {
        parents: ["RptEnabled"],
        children: [],
    },
    ClientServices: {
        parents: ["Services"],
        children: ["TimeSyncProt", "McSecurity"],
    },
    CommProt: {
        parents: ["Services"],
        children: [],
    },
    Communication: {
        parents: ["SCL"],
        children: [...tUnNamingSequence, "SubNetwork"],
    },
    ConductingEquipment: {
        parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
        children: [
            ...tAbstractConductingEquipmentSequence,
            "EqFunction",
            "SubEquipment",
        ],
    },
    ConfDataSet: {
        parents: ["Services"],
        children: [],
    },
    ConfLdName: {
        parents: ["Services"],
        children: [],
    },
    ConfLNs: {
        parents: ["Services"],
        children: [],
    },
    ConfLogControl: {
        parents: ["Services"],
        children: [],
    },
    ConfReportControl: {
        parents: ["Services"],
        children: [],
    },
    ConfSG: {
        parents: ["SettingGroups"],
        children: [],
    },
    ConfSigRef: {
        parents: ["Services"],
        children: [],
    },
    ConnectedAP: {
        parents: ["SubNetwork"],
        children: [...tUnNamingSequence, "Address", "GSE", "SMV", "PhysConn"],
    },
    ConnectivityNode: {
        parents: ["Bay", "Line"],
        children: [...tLNodeContainerSequence],
    },
    DA: {
        parents: ["DOType"],
        children: [...tAbstractDataAttributeSequence],
    },
    DAI: {
        parents: ["DOI", "SDI"],
        children: [...tUnNamingSequence, "Val"],
    },
    DAType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "BDA", "ProtNs"],
    },
    DO: {
        parents: ["LNodeType"],
        children: [...tUnNamingSequence],
    },
    DOI: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence, "SDI", "DAI"],
    },
    DOType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "SDO", "DA"],
    },
    DataObjectDirectory: {
        parents: ["Services"],
        children: [],
    },
    DataSet: {
        parents: [...tAnyLN],
        children: [...tNamingSequence, "FCDA"],
    },
    DataSetDirectory: {
        parents: ["Services"],
        children: [],
    },
    DataTypeTemplates: {
        parents: ["SCL"],
        children: ["LNodeType", "DOType", "DAType", "EnumType"],
    },
    DynAssociation: {
        parents: ["Services"],
        children: [],
    },
    DynDataSet: {
        parents: ["Services"],
        children: [],
    },
    EnumType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "EnumVal"],
    },
    EnumVal: {
        parents: ["EnumType"],
        children: [],
    },
    EqFunction: {
        parents: [
            "GeneralEquipment",
            "TapChanger",
            "TransformerWinding",
            "PowerTransformer",
            "SubEquipment",
            "ConductingEquipment",
        ],
        children: [...tAbstractEqFuncSubFuncSequence],
    },
    EqSubFunction: {
        parents: ["EqSubFunction", "EqFunction"],
        children: [...tAbstractEqFuncSubFuncSequence],
    },
    ExtRef: {
        parents: ["Inputs"],
        children: [],
    },
    FCDA: {
        parents: ["DataSet"],
        children: [],
    },
    FileHandling: {
        parents: ["Services"],
        children: [],
    },
    Function: {
        parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
        children: [
            ...tPowerSystemResourceSequence,
            "SubFunction",
            "GeneralEquipment",
            "ConductingEquipment",
        ],
    },
    GeneralEquipment: {
        parents: [
            "SubFunction",
            "Function",
            ...tGeneralEquipmentContainer,
            ...tAbstractEqFuncSubFunc,
            ...tEquipmentContainer,
        ],
        children: [...tEquipmentSequence, "EqFunction"],
    },
    GetCBValues: {
        parents: ["Services"],
        children: [],
    },
    GetDataObjectDefinition: {
        parents: ["Services"],
        children: [],
    },
    GetDataSetValue: {
        parents: ["Services"],
        children: [],
    },
    GetDirectory: {
        parents: ["Services"],
        children: [],
    },
    GOOSE: {
        parents: ["Services"],
        children: [],
    },
    GOOSESecurity: {
        parents: ["AccessPoint"],
        children: [...tNamingSequence, "Subject", "IssuerName"],
    },
    GSE: {
        parents: ["ConnectedAP"],
        children: [...tControlBlockSequence, "MinTime", "MaxTime"],
    },
    GSEDir: {
        parents: ["Services"],
        children: [],
    },
    GSEControl: {
        parents: ["LN0"],
        children: [...tControlWithIEDNameSequence, "Protocol"],
    },
    GSESettings: {
        parents: ["Services"],
        children: [],
    },
    GSSE: {
        parents: ["Services"],
        children: [],
    },
    Header: {
        parents: ["SCL"],
        children: ["Text", "History"],
    },
    History: {
        parents: ["Header"],
        children: ["Hitem"],
    },
    Hitem: {
        parents: ["History"],
        children: [],
    },
    IED: {
        parents: ["SCL"],
        children: [...tUnNamingSequence, "Services", "AccessPoint", "KDC"],
    },
    IEDName: {
        parents: ["GSEControl", "SampledValueControl"],
        children: [],
    },
    Inputs: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence, "ExtRef"],
    },
    IssuerName: {
        parents: ["GOOSESecurity", "SMVSecurity"],
        children: [],
    },
    KDC: {
        parents: ["IED"],
        children: [],
    },
    LDevice: {
        parents: ["Server"],
        children: [...tUnNamingSequence, "LN0", "LN", "AccessControl"],
    },
    LN: {
        parents: ["AccessPoint", "LDevice"],
        children: [...tAnyLNSequence],
    },
    LN0: {
        parents: ["LDevice"],
        children: [
            ...tAnyLNSequence,
            "GSEControl",
            "SampledValueControl",
            "SettingControl",
        ],
    },
    LNode: {
        parents: [...tLNodeContainer],
        children: [...tUnNamingSequence],
    },
    LNodeType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "DO"],
    },
    Line: {
        parents: ["Process", "SCL"],
        children: [
            ...tGeneralEquipmentContainerSequence,
            "Voltage",
            "ConductingEquipment",
        ],
    },
    Log: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence],
    },
    LogControl: {
        parents: [...tAnyLN],
        children: [...tControlWithTriggerOptSequence],
    },
    LogSettings: {
        parents: ["Services"],
        children: [],
    },
    MaxTime: {
        parents: ["GSE"],
        children: [],
    },
    McSecurity: {
        parents: ["GSESettings", "SMVSettings", "ClientServices"],
        children: [],
    },
    MinTime: {
        parents: ["GSE"],
        children: [],
    },
    NeutralPoint: {
        parents: ["TransformerWinding"],
        children: [...tUnNamingSequence],
    },
    OptFields: {
        parents: ["ReportControl"],
        children: [],
    },
    P: {
        parents: ["Address", "PhysConn"],
        children: [],
    },
    PhysConn: {
        parents: ["ConnectedAP"],
        children: [...tUnNamingSequence, "P"],
    },
    PowerTransformer: {
        parents: [...tEquipmentContainer],
        children: [
            ...tEquipmentSequence,
            "TransformerWinding",
            "SubEquipment",
            "EqFunction",
        ],
    },
    Private: {
        parents: [],
        children: [],
    },
    Process: {
        parents: ["Process", "SCL"],
        children: [
            ...tGeneralEquipmentContainerSequence,
            "ConductingEquipment",
            "Substation",
            "Line",
            "Process",
        ],
    },
    ProtNs: {
        parents: ["DAType", "DA"],
        children: [],
    },
    Protocol: {
        parents: ["GSEControl", "SampledValueControl"],
        children: [],
    },
    ReadWrite: {
        parents: ["Services"],
        children: [],
    },
    RedProt: {
        parents: ["Services"],
        children: [],
    },
    ReportControl: {
        parents: [...tAnyLN],
        children: [...tControlWithTriggerOptSequence, "OptFields", "RptEnabled"],
    },
    ReportSettings: {
        parents: ["Services"],
        children: [],
    },
    RptEnabled: {
        parents: ["ReportControl"],
        children: [...tUnNamingSequence, "ClientLN"],
    },
    SamplesPerSec: {
        parents: ["SMVSettings"],
        children: [],
    },
    SampledValueControl: {
        parents: ["LN0"],
        children: [...tControlWithIEDNameSequence, "SmvOpts"],
    },
    SecPerSamples: {
        parents: ["SMVSettings"],
        children: [],
    },
    SCL: {
        parents: [],
        children: [
            ...tBaseNameSequence,
            "Header",
            "Substation",
            "Communication",
            "IED",
            "DataTypeTemplates",
            "Line",
            "Process",
        ],
    },
    SDI: {
        parents: ["DOI", "SDI"],
        children: [...tUnNamingSequence, "SDI", "DAI"],
    },
    SDO: {
        parents: ["DOType"],
        children: [...tNamingSequence],
    },
    Server: {
        parents: ["AccessPoint"],
        children: [
            ...tUnNamingSequence,
            "Authentication",
            "LDevice",
            "Association",
        ],
    },
    ServerAt: {
        parents: ["AccessPoint"],
        children: [...tUnNamingSequence],
    },
    Services: {
        parents: ["IED", "AccessPoint"],
        children: [
            "DynAssociation",
            "SettingGroups",
            "GetDirectory",
            "GetDataObjectDefinition",
            "DataObjectDirectory",
            "GetDataSetValue",
            "SetDataSetValue",
            "DataSetDirectory",
            "ConfDataSet",
            "DynDataSet",
            "ReadWrite",
            "TimerActivatedControl",
            "ConfReportControl",
            "GetCBValues",
            "ConfLogControl",
            "ReportSettings",
            "LogSettings",
            "GSESettings",
            "SMVSettings",
            "GSEDir",
            "GOOSE",
            "GSSE",
            "SMVsc",
            "FileHandling",
            "ConfLNs",
            "ClientServices",
            "ConfLdName",
            "SupSubscription",
            "ConfSigRef",
            "ValueHandling",
            "RedProt",
            "TimeSyncProt",
            "CommProt",
        ],
    },
    SetDataSetValue: {
        parents: ["Services"],
        children: [],
    },
    SettingControl: {
        parents: ["LN0"],
        children: [...tUnNamingSequence],
    },
    SettingGroups: {
        parents: ["Services"],
        children: ["SGEdit", "ConfSG"],
    },
    SGEdit: {
        parents: ["SettingGroups"],
        children: [],
    },
    SmpRate: {
        parents: ["SMVSettings"],
        children: [],
    },
    SMV: {
        parents: ["ConnectedAP"],
        children: [...tControlBlockSequence],
    },
    SmvOpts: {
        parents: ["SampledValueControl"],
        children: [],
    },
    SMVsc: {
        parents: ["Services"],
        children: [],
    },
    SMVSecurity: {
        parents: ["AccessPoint"],
        children: [...tNamingSequence, "Subject", "IssuerName"],
    },
    SMVSettings: {
        parents: ["Services"],
        children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"],
    },
    SubEquipment: {
        parents: [
            "TapChanger",
            "PowerTransformer",
            "ConductingEquipment",
            "TransformerWinding",
            ...tAbstractConductingEquipment,
        ],
        children: [...tPowerSystemResourceSequence, "EqFunction"],
    },
    SubFunction: {
        parents: ["SubFunction", "Function"],
        children: [
            ...tPowerSystemResourceSequence,
            "GeneralEquipment",
            "ConductingEquipment",
            "SubFunction",
        ],
    },
    SubNetwork: {
        parents: ["Communication"],
        children: [...tNamingSequence, "BitRate", "ConnectedAP"],
    },
    Subject: {
        parents: ["GOOSESecurity", "SMVSecurity"],
        children: [],
    },
    Substation: {
        parents: ["SCL"],
        children: [...tEquipmentContainerSequence, "VoltageLevel", "Function"],
    },
    SupSubscription: {
        parents: ["Services"],
        children: [],
    },
    TapChanger: {
        parents: ["TransformerWinding"],
        children: [...tPowerSystemResourceSequence, "SubEquipment", "EqFunction"],
    },
    Terminal: {
        parents: [...tEquipment],
        children: [...tUnNamingSequence],
    },
    Text: {
        parents: sCLTags.filter((tag) => tag !== "Text" && tag !== "Private"),
        children: [],
    },
    TimerActivatedControl: {
        parents: ["Services"],
        children: [],
    },
    TimeSyncProt: {
        parents: ["Services", "ClientServices"],
        children: [],
    },
    TransformerWinding: {
        parents: ["PowerTransformer"],
        children: [
            ...tAbstractConductingEquipmentSequence,
            "TapChanger",
            "NeutralPoint",
            "EqFunction",
            "SubEquipment",
        ],
    },
    TrgOps: {
        parents: ["ReportControl"],
        children: [],
    },
    Val: {
        parents: ["DAI", "DA", "BDA"],
        children: [],
    },
    ValueHandling: {
        parents: ["Services"],
        children: [],
    },
    Voltage: {
        parents: ["VoltageLevel"],
        children: [],
    },
    VoltageLevel: {
        parents: ["Substation"],
        children: [...tEquipmentContainerSequence, "Voltage", "Bay", "Function"],
    },
};
const tagSet = new Set(sCLTags);
function isSCLTag(tag) {
    return tagSet.has(tag);
}

/**
 * Helper function for to determine schema valid `reference` for OpenSCD
 * core Insert event.
 * !! only valid with Edition 2.1 projects (2007B4)
 * @param parent - The parent element the new child shall be added to
 * @param tag - The `tagName` of the new child
 * @returns Reference for new [[`tag`]] child within [[`parent`]]  or `null`
 */
function getReference(parent, tag) {
    if (!isSCLTag(tag))
        return null;
    const parentTag = parent.tagName;
    const children = Array.from(parent.children);
    if (parentTag === "Services" ||
        parentTag === "SettingGroups" ||
        !isSCLTag(parentTag))
        return children.find((child) => child.tagName === tag) ?? null;
    const sequence = tags[parentTag].children;
    let index = sequence.findIndex((element) => element === tag);
    if (index < 0)
        return null;
    let nextSibling;
    while (index < sequence.length && !nextSibling) {
        // eslint-disable-next-line no-loop-func
        nextSibling = children.find((child) => child.tagName === sequence[index]);
        index += 1;
    }
    return nextSibling ?? null;
}

/**
 * Copies an SCL SubNetwork element but without its ConnectedAP children.
 * @param subNetwork - SCL SubNetwork element.
 * @returns cloned SubNetwork without Element children.
 */
function getNewSubNetwork(subNetwork) {
    const newSubNetwork = subNetwork.cloneNode(true);
    newSubNetwork.childNodes.forEach((childNode) => {
        if (childNode.nodeType === Node.ELEMENT_NODE &&
            childNode.nodeName === "ConnectedAP")
            newSubNetwork.removeChild(childNode);
    });
    return newSubNetwork;
}
function addCommunicationElements(newIed, scl) {
    const edits = [];
    const existingCommunication = scl.querySelector(":root > Communication");
    const communication = existingCommunication
        ? existingCommunication
        : createElement(scl.ownerDocument, "Communication", {});
    if (!existingCommunication)
        edits.push({
            parent: scl,
            node: communication,
            reference: getReference(scl, "Communication"),
        });
    const subNetworks = Array.from(newIed.ownerDocument.querySelectorAll(":root > Communication > SubNetwork")).filter((subNetwork) => subNetwork.querySelector(`:scope > ConnectedAP[iedName="${newIed.getAttribute("name")}"]`));
    subNetworks.forEach((subNetwork) => {
        const connectedAps = Array.from(subNetwork.querySelectorAll(`:scope > ConnectedAP[iedName="${newIed.getAttribute("name")}"]`));
        const existingSubNetwork = communication.querySelector(`:root > Communication > SubNetwork[name="${subNetwork?.getAttribute("name")}"]`);
        const usedSubNetwork = existingSubNetwork
            ? existingSubNetwork
            : getNewSubNetwork(subNetwork);
        if (!existingSubNetwork)
            edits.push({
                parent: communication,
                node: usedSubNetwork,
                reference: getReference(communication, "SubNetwork"),
            });
        connectedAps.forEach((connectedAp) => {
            const iedName = newIed.getAttribute("name");
            const apName = connectedAp.getAttribute("apName");
            const existingConnectedAp = existingSubNetwork?.querySelector(`:scope > ConnectedAP[iedName="${iedName}"][apName="${apName}"]`);
            if (!existingConnectedAp) {
                const connectedAP = connectedAp.cloneNode(true);
                edits.push({
                    parent: usedSubNetwork,
                    node: connectedAP,
                    reference: getReference(usedSubNetwork, "ConnectedAP"),
                });
            }
        });
    });
    return edits;
}
function isDataTypeConnectionToIed(dataType, newIed) {
    const dataTypeTemplates = dataType.parentElement;
    const id = dataType.getAttribute("id");
    if (!dataTypeTemplates || !id)
        return false;
    if (dataType.tagName === "EnumType")
        return Array.from(dataTypeTemplates.querySelectorAll(`DOType > DA[type="${id}"],DAType > BDA[type="${id}"]`)).some((typeChild) => isDataTypeConnectionToIed(typeChild.parentElement, newIed));
    if (dataType.tagName === "DAType")
        return Array.from(dataTypeTemplates.querySelectorAll(`DOType > DA[type="${id}"],DAType > BDA[type="${id}"]`)).some((typeChild) => isDataTypeConnectionToIed(typeChild.parentElement, newIed));
    if (dataType.tagName === "DOType")
        return Array.from(dataTypeTemplates.querySelectorAll(`LNodeType > DO[type="${id}"], DOType > SDO[type="${id}"]`)).some((typeChild) => isDataTypeConnectionToIed(typeChild.parentElement, newIed));
    return Array.from(newIed.getElementsByTagName("LN0"))
        .concat(Array.from(newIed.getElementsByTagName("LN")))
        .some((anyLn) => anyLn.getAttribute("lnType") === id);
}
/**
 * Generates a new DTT section id in case of a collision by adding a number in hex
 * prefixed with an underscore to the existing id.
 *
 * @param existingId - Existing string for id attribute.
 * @param existingLNodeType - Existing LNodeType for which a new ID is required.
 * @param dataTypeTemplates - Existing Element of DTTs from the SCL file.
 * @returns New string which is unique in the DTT section.
 */
function generateNewId(existingId, newIed, existingLNodeType, dataTypeTemplates) {
    const iedName = newIed.getAttribute("name");
    const tagType = existingLNodeType.tagName;
    const duplicatesFound = function (counter) {
        return !!dataTypeTemplates.querySelector(`${tagType}[id="${existingId}@${iedName}#${counter.toString(10)}"]`);
    };
    let counter = 1;
    // 2,000 limit reasonable way to avoid infinite loop
    while (duplicatesFound(counter) && counter < 2000) {
        counter += 1;
    }
    return `${existingId}@${iedName}#${counter.toString(10)}`;
}
function addEnumType(newIed, newEnumType, oldDataTypeTemplates) {
    if (!isDataTypeConnectionToIed(newEnumType, newIed))
        return;
    const existEnumType = oldDataTypeTemplates.querySelector(`EnumType[id="${newEnumType.getAttribute("id")}"]`);
    if (existEnumType && newEnumType.isEqualNode(existEnumType))
        return;
    if (existEnumType) {
        // There is an `id` conflict in the project that must be resolved by
        // concatenating the IED name with the id
        const data = newEnumType.parentElement;
        const idOld = newEnumType.getAttribute("id");
        const idNew = generateNewId(idOld, newIed, existEnumType, oldDataTypeTemplates);
        newEnumType.setAttribute("id", idNew);
        data
            .querySelectorAll(`DOType > DA[type="${idOld}"],DAType > BDA[type="${idOld}"]`)
            .forEach((type) => type.setAttribute("type", idNew));
    }
    return {
        parent: oldDataTypeTemplates,
        node: newEnumType,
        reference: getReference(oldDataTypeTemplates, "EnumType"),
    };
}
function addDAType(newIed, newDAType, oldDataTypeTemplates) {
    if (!isDataTypeConnectionToIed(newDAType, newIed))
        return;
    const existDAType = oldDataTypeTemplates.querySelector(`DAType[id="${newDAType.getAttribute("id")}"]`);
    if (existDAType && newDAType.isEqualNode(existDAType))
        return;
    if (existDAType) {
        // There is an `id` conflict in the project that must be resolved by
        // concatenating the IED name with the id
        const data = newDAType.parentElement;
        const idOld = newDAType.getAttribute("id");
        const idNew = generateNewId(idOld, newIed, existDAType, oldDataTypeTemplates);
        newDAType.setAttribute("id", idNew);
        data
            .querySelectorAll(`DOType > DA[type="${idOld}"],DAType > BDA[type="${idOld}"]`)
            .forEach((type) => type.setAttribute("type", idNew));
    }
    return {
        parent: oldDataTypeTemplates,
        node: newDAType,
        reference: getReference(oldDataTypeTemplates, "DAType"),
    };
}
function addDOType(newIed, newDOType, oldDataTypeTemplates) {
    if (!isDataTypeConnectionToIed(newDOType, newIed))
        return;
    const existDOType = oldDataTypeTemplates.querySelector(`DOType[id="${newDOType.getAttribute("id")}"]`);
    if (existDOType && newDOType.isEqualNode(existDOType))
        return;
    if (existDOType) {
        // There is an `id` conflict in the project that must be resolved by
        // concatenating the IED name with the id
        const data = newDOType.parentElement;
        const idOld = newDOType.getAttribute("id");
        const idNew = generateNewId(idOld, newIed, existDOType, oldDataTypeTemplates);
        newDOType.setAttribute("id", idNew);
        data
            .querySelectorAll(`LNodeType > DO[type="${idOld}"], DOType > SDO[type="${idOld}"]`)
            .forEach((type) => type.setAttribute("type", idNew));
    }
    return {
        parent: oldDataTypeTemplates,
        node: newDOType,
        reference: getReference(oldDataTypeTemplates, "DOType"),
    };
}
function addLNodeType(newIed, newLNodeType, oldDataTypeTemplates) {
    if (!isDataTypeConnectionToIed(newLNodeType, newIed))
        return;
    const existLNodeType = oldDataTypeTemplates.querySelector(`LNodeType[id="${newLNodeType.getAttribute("id")}"]`);
    if (existLNodeType && newLNodeType.isEqualNode(existLNodeType))
        return;
    if (existLNodeType) {
        // There is an `id` conflict in the project that must be resolved by
        // concatenating the IED name with the id
        const idOld = newLNodeType.getAttribute("id");
        const idNew = generateNewId(idOld, newIed, existLNodeType, oldDataTypeTemplates);
        newLNodeType.setAttribute("id", idNew);
        Array.from(newIed.querySelectorAll(`LN0[lnType="${idOld}"],LN[lnType="${idOld}"]`))
            .filter((anyLn) => !anyLn.closest("Private"))
            .forEach((ln) => ln.setAttribute("lnType", idNew));
    }
    return {
        parent: oldDataTypeTemplates,
        node: newLNodeType,
        reference: getReference(oldDataTypeTemplates, "LNodeType"),
    };
}
function addDataTypeTemplates(newIed, scl) {
    const dataTypeEdit = [];
    const dataTypeTemplates = scl.querySelector(":root > DataTypeTemplates")
        ? scl.querySelector(":root > DataTypeTemplates")
        : createElement(scl.ownerDocument, "DataTypeTemplates", {});
    if (!dataTypeTemplates.parentElement) {
        dataTypeEdit.push({
            parent: scl,
            node: dataTypeTemplates,
            reference: getReference(scl, "DataTypeTemplates"),
        });
    }
    const typeEdits = [];
    newIed.ownerDocument
        .querySelectorAll(":root > DataTypeTemplates > EnumType")
        .forEach((enumType) => typeEdits.push(addEnumType(newIed, enumType, dataTypeTemplates)));
    newIed.ownerDocument
        .querySelectorAll(":root > DataTypeTemplates > DAType")
        .forEach((daType) => typeEdits.push(addDAType(newIed, daType, dataTypeTemplates)));
    newIed.ownerDocument
        .querySelectorAll(":root > DataTypeTemplates > DOType")
        .forEach((doType) => typeEdits.push(addDOType(newIed, doType, dataTypeTemplates)));
    newIed.ownerDocument
        .querySelectorAll(":root > DataTypeTemplates > LNodeType")
        .forEach((lNodeType) => typeEdits.push(addLNodeType(newIed, lNodeType, dataTypeTemplates)));
    return dataTypeEdit.concat(typeEdits.reverse().filter((item) => item !== undefined));
}
function isNameUnique(scl, ied) {
    return !!scl.querySelector(`IED[name="${ied.getAttribute("name")}"]`);
}
function isIED(node) {
    return node.tagName === "IED";
}
function isSCL(node) {
    return node.tagName === "SCL";
}
/** Function to import !single IEDs with its `DataTypeTemplates` and
 * optionally linked `Communication`section elements.
 * >NOTE: Element are MOVED from ied document to the project not copied
 * @param scl - the parent SCL element to insert the IED to
 * @param ied - the new IED to be added to the project (SCL)
 * @param options
 * @returns An array containing diff objects representing an import IED edit
 * section */
function insertIed(scl, ied, options = { addCommunicationSection: true }) {
    if (!isSCL(scl) || !isIED(ied) || isNameUnique(scl, ied))
        return [];
    const insertCommunication = [];
    if (options.addCommunicationSection)
        insertCommunication.push(...addCommunicationElements(ied, scl));
    const insertDataTypes = [];
    insertDataTypes.push(...addDataTypeTemplates(ied, scl));
    const insertIed = {
        parent: scl,
        node: ied,
        reference: getReference(scl, "IED"),
    };
    return [...insertCommunication, insertIed, ...insertDataTypes];
}

/** maximum value for `lnInst` attribute */
const maxLnInst = 99;
Array(maxLnInst)
    .fill(1)
    .map((_, i) => `${i + 1}`);

const maxGseMacAddress = 0x010ccd0101ff;
const minGseMacAddress = 0x010ccd010000;
const maxSmvMacAddress = 0x010ccd0401ff;
const minSmvMacAddress = 0x010ccd040000;
function convertToMac(mac) {
    const str = 0 + mac.toString(16).toUpperCase();
    const arr = str.match(/.{1,2}/g);
    return arr.join("-");
}
Array(maxGseMacAddress - minGseMacAddress)
    .fill(1)
    .map((_, i) => convertToMac(minGseMacAddress + i));
Array(maxSmvMacAddress - minSmvMacAddress)
    .fill(1)
    .map((_, i) => convertToMac(minSmvMacAddress + i));

const maxGseAppId = 0x3fff;
const minGseAppId = 0x0000;
// APPID range for Type1A(Trip) GOOSE acc. IEC 61850-8-1
const maxGseTripAppId = 0xbfff;
const minGseTripAppId = 0x8000;
const maxSmvAppId = 0x7fff;
const minSmvAppId = 0x4000;
Array(maxGseAppId - minGseAppId)
    .fill(1)
    .map((_, i) => (minGseAppId + i).toString(16).toUpperCase().padStart(4, "0"));
Array(maxGseTripAppId - minGseTripAppId)
    .fill(1)
    .map((_, i) => (minGseTripAppId + i).toString(16).toUpperCase().padStart(4, "0"));
Array(maxSmvAppId - minSmvAppId)
    .fill(1)
    .map((_, i) => (minSmvAppId + i).toString(16).toUpperCase().padStart(4, "0"));

await fetch(new URL(new URL('assets/nsd-0a370a57.json', import.meta.url).href, import.meta.url)).then((res) => res.json());

/**
 * @deprecated
 * @param edit
 * @returns a custom event `oscd-edit`
 */
function newEditEventV1(edit) {
    return new CustomEvent('oscd-edit', {
        composed: true,
        bubbles: true,
        detail: edit,
    });
}

function isComplex$1(edit) {
    return edit instanceof Array;
}
function isSetTextContent(edit) {
    return (edit.element !== undefined &&
        edit.textContent !== undefined);
}
function isRemove$1(edit) {
    return (edit.parent === undefined && edit.node !== undefined);
}
function isSetAttributes(edit) {
    return (edit.element !== undefined &&
        edit.attributes !== undefined &&
        edit.attributesNS !== undefined);
}
function isInsert$1(edit) {
    return (edit.parent !== undefined &&
        edit.node !== undefined &&
        edit.reference !== undefined);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isEditV2(edit) {
    if (isComplex$1(edit))
        return !edit.some((e) => !isEditV2(e));
    return (isSetAttributes(edit) ||
        isSetTextContent(edit) ||
        isInsert$1(edit) ||
        isRemove$1(edit));
}

function isComplex(edit) {
    return edit instanceof Array;
}
function isInsert(edit) {
    return edit.parent !== undefined;
}
function isNamespaced(value) {
    return value !== null && typeof value !== "string";
}
function isUpdate(edit) {
    return (edit.element !== undefined &&
        edit.attributes !== undefined);
}
function isRemove(edit) {
    return (edit.parent === undefined && edit.node !== undefined);
}

function convertUpdate(edit) {
    const attributes = {};
    const attributesNS = {};
    Object.entries(edit.attributes).forEach(([key, value]) => {
        if (isNamespaced(value)) {
            const ns = value.namespaceURI;
            if (!ns)
                return;
            if (!attributesNS[ns]) {
                attributesNS[ns] = {};
            }
            attributesNS[ns][key] = value.value;
        }
        else
            attributes[key] = value;
    });
    return { element: edit.element, attributes, attributesNS };
}
function convertEdit(edit) {
    if (isRemove(edit))
        return edit;
    if (isInsert(edit))
        return edit;
    if (isUpdate(edit))
        return convertUpdate(edit);
    if (isComplex(edit))
        return edit.map(convertEdit);
    return [];
}

class PreconditionFailure extends Error {
    constructor(interruptExecution = false) {
        super();
        this.interruptExecution = interruptExecution;
        this.footprint = PreconditionFailure.SharedFootPrint;
    }
    static isFailure(err) {
        return err != null && err.footprint === PreconditionFailure.SharedFootPrint;
    }
}
PreconditionFailure.SharedFootPrint = Symbol.for('fast-check/PreconditionFailure');

class Nil {
    [Symbol.iterator]() {
        return this;
    }
    next(value) {
        return { value, done: true };
    }
}
Nil.nil = new Nil();
function nilHelper() {
    return Nil.nil;
}
function* mapHelper(g, f) {
    for (const v of g) {
        yield f(v);
    }
}
function* flatMapHelper(g, f) {
    for (const v of g) {
        yield* f(v);
    }
}
function* filterHelper(g, f) {
    for (const v of g) {
        if (f(v)) {
            yield v;
        }
    }
}
function* takeNHelper(g, n) {
    for (let i = 0; i < n; ++i) {
        const cur = g.next();
        if (cur.done) {
            break;
        }
        yield cur.value;
    }
}
function* takeWhileHelper(g, f) {
    let cur = g.next();
    while (!cur.done && f(cur.value)) {
        yield cur.value;
        cur = g.next();
    }
}
function* joinHelper(g, others) {
    for (let cur = g.next(); !cur.done; cur = g.next()) {
        yield cur.value;
    }
    for (const s of others) {
        for (let cur = s.next(); !cur.done; cur = s.next()) {
            yield cur.value;
        }
    }
}

const safeSymbolIterator = Symbol.iterator;
class Stream {
    static nil() {
        return new Stream(nilHelper());
    }
    static of(...elements) {
        return new Stream(elements[safeSymbolIterator]());
    }
    constructor(g) {
        this.g = g;
    }
    next() {
        return this.g.next();
    }
    [Symbol.iterator]() {
        return this.g;
    }
    map(f) {
        return new Stream(mapHelper(this.g, f));
    }
    flatMap(f) {
        return new Stream(flatMapHelper(this.g, f));
    }
    dropWhile(f) {
        let foundEligible = false;
        function* helper(v) {
            if (foundEligible || !f(v)) {
                foundEligible = true;
                yield v;
            }
        }
        return this.flatMap(helper);
    }
    drop(n) {
        if (n <= 0) {
            return this;
        }
        let idx = 0;
        function helper() {
            return idx++ < n;
        }
        return this.dropWhile(helper);
    }
    takeWhile(f) {
        return new Stream(takeWhileHelper(this.g, f));
    }
    take(n) {
        return new Stream(takeNHelper(this.g, n));
    }
    filter(f) {
        return new Stream(filterHelper(this.g, f));
    }
    every(f) {
        for (const v of this.g) {
            if (!f(v)) {
                return false;
            }
        }
        return true;
    }
    has(f) {
        for (const v of this.g) {
            if (f(v)) {
                return [true, v];
            }
        }
        return [false, null];
    }
    join(...others) {
        return new Stream(joinHelper(this.g, others));
    }
    getNthOrLast(nth) {
        let remaining = nth;
        let last = null;
        for (const v of this.g) {
            if (remaining-- === 0)
                return v;
            last = v;
        }
        return last;
    }
}
function stream(g) {
    return new Stream(g);
}

const cloneMethod = Symbol.for('fast-check/cloneMethod');
function hasCloneMethod(instance) {
    return (instance !== null &&
        (typeof instance === 'object' || typeof instance === 'function') &&
        cloneMethod in instance &&
        typeof instance[cloneMethod] === 'function');
}
function cloneIfNeeded(instance) {
    return hasCloneMethod(instance) ? instance[cloneMethod]() : instance;
}

const safeObjectDefineProperty$1 = Object.defineProperty;
class Value {
    constructor(value_, context, customGetValue = undefined) {
        this.value_ = value_;
        this.context = context;
        this.hasToBeCloned = customGetValue !== undefined || hasCloneMethod(value_);
        this.readOnce = false;
        if (this.hasToBeCloned) {
            safeObjectDefineProperty$1(this, 'value', { get: customGetValue !== undefined ? customGetValue : this.getValue });
        }
        else {
            this.value = value_;
        }
    }
    getValue() {
        if (this.hasToBeCloned) {
            if (!this.readOnce) {
                this.readOnce = true;
                return this.value_;
            }
            return this.value_[cloneMethod]();
        }
        return this.value_;
    }
}

const safeObjectAssign = Object.assign;
class Arbitrary {
    filter(refinement) {
        return new FilterArbitrary(this, refinement);
    }
    map(mapper, unmapper) {
        return new MapArbitrary(this, mapper, unmapper);
    }
    chain(chainer) {
        return new ChainArbitrary(this, chainer);
    }
    noShrink() {
        return new NoShrinkArbitrary(this);
    }
    noBias() {
        return new NoBiasArbitrary(this);
    }
}
class ChainArbitrary extends Arbitrary {
    constructor(arb, chainer) {
        super();
        this.arb = arb;
        this.chainer = chainer;
    }
    generate(mrng, biasFactor) {
        const clonedMrng = mrng.clone();
        const src = this.arb.generate(mrng, biasFactor);
        return this.valueChainer(src, mrng, clonedMrng, biasFactor);
    }
    canShrinkWithoutContext(value) {
        return false;
    }
    shrink(value, context) {
        if (this.isSafeContext(context)) {
            return (!context.stoppedForOriginal
                ? this.arb
                    .shrink(context.originalValue, context.originalContext)
                    .map((v) => this.valueChainer(v, context.clonedMrng.clone(), context.clonedMrng, context.originalBias))
                : Stream.nil()).join(context.chainedArbitrary.shrink(value, context.chainedContext).map((dst) => {
                const newContext = safeObjectAssign(safeObjectAssign({}, context), {
                    chainedContext: dst.context,
                    stoppedForOriginal: true,
                });
                return new Value(dst.value_, newContext);
            }));
        }
        return Stream.nil();
    }
    valueChainer(v, generateMrng, clonedMrng, biasFactor) {
        const chainedArbitrary = this.chainer(v.value_);
        const dst = chainedArbitrary.generate(generateMrng, biasFactor);
        const context = {
            originalBias: biasFactor,
            originalValue: v.value_,
            originalContext: v.context,
            stoppedForOriginal: false,
            chainedArbitrary,
            chainedContext: dst.context,
            clonedMrng,
        };
        return new Value(dst.value_, context);
    }
    isSafeContext(context) {
        return (context != null &&
            typeof context === 'object' &&
            'originalBias' in context &&
            'originalValue' in context &&
            'originalContext' in context &&
            'stoppedForOriginal' in context &&
            'chainedArbitrary' in context &&
            'chainedContext' in context &&
            'clonedMrng' in context);
    }
}
class MapArbitrary extends Arbitrary {
    constructor(arb, mapper, unmapper) {
        super();
        this.arb = arb;
        this.mapper = mapper;
        this.unmapper = unmapper;
        this.bindValueMapper = (v) => this.valueMapper(v);
    }
    generate(mrng, biasFactor) {
        const g = this.arb.generate(mrng, biasFactor);
        return this.valueMapper(g);
    }
    canShrinkWithoutContext(value) {
        if (this.unmapper !== undefined) {
            try {
                const unmapped = this.unmapper(value);
                return this.arb.canShrinkWithoutContext(unmapped);
            }
            catch (_err) {
                return false;
            }
        }
        return false;
    }
    shrink(value, context) {
        if (this.isSafeContext(context)) {
            return this.arb.shrink(context.originalValue, context.originalContext).map(this.bindValueMapper);
        }
        if (this.unmapper !== undefined) {
            const unmapped = this.unmapper(value);
            return this.arb.shrink(unmapped, undefined).map(this.bindValueMapper);
        }
        return Stream.nil();
    }
    mapperWithCloneIfNeeded(v) {
        const sourceValue = v.value;
        const mappedValue = this.mapper(sourceValue);
        if (v.hasToBeCloned &&
            ((typeof mappedValue === 'object' && mappedValue !== null) || typeof mappedValue === 'function') &&
            Object.isExtensible(mappedValue) &&
            !hasCloneMethod(mappedValue)) {
            Object.defineProperty(mappedValue, cloneMethod, { get: () => () => this.mapperWithCloneIfNeeded(v)[0] });
        }
        return [mappedValue, sourceValue];
    }
    valueMapper(v) {
        const [mappedValue, sourceValue] = this.mapperWithCloneIfNeeded(v);
        const context = { originalValue: sourceValue, originalContext: v.context };
        return new Value(mappedValue, context);
    }
    isSafeContext(context) {
        return (context != null &&
            typeof context === 'object' &&
            'originalValue' in context &&
            'originalContext' in context);
    }
}
class FilterArbitrary extends Arbitrary {
    constructor(arb, refinement) {
        super();
        this.arb = arb;
        this.refinement = refinement;
        this.bindRefinementOnValue = (v) => this.refinementOnValue(v);
    }
    generate(mrng, biasFactor) {
        while (true) {
            const g = this.arb.generate(mrng, biasFactor);
            if (this.refinementOnValue(g)) {
                return g;
            }
        }
    }
    canShrinkWithoutContext(value) {
        return this.arb.canShrinkWithoutContext(value) && this.refinement(value);
    }
    shrink(value, context) {
        return this.arb.shrink(value, context).filter(this.bindRefinementOnValue);
    }
    refinementOnValue(v) {
        return this.refinement(v.value);
    }
}
class NoShrinkArbitrary extends Arbitrary {
    constructor(arb) {
        super();
        this.arb = arb;
    }
    generate(mrng, biasFactor) {
        return this.arb.generate(mrng, biasFactor);
    }
    canShrinkWithoutContext(value) {
        return this.arb.canShrinkWithoutContext(value);
    }
    shrink(_value, _context) {
        return Stream.nil();
    }
    noShrink() {
        return this;
    }
}
class NoBiasArbitrary extends Arbitrary {
    constructor(arb) {
        super();
        this.arb = arb;
    }
    generate(mrng, _biasFactor) {
        return this.arb.generate(mrng, undefined);
    }
    canShrinkWithoutContext(value) {
        return this.arb.canShrinkWithoutContext(value);
    }
    shrink(value, context) {
        return this.arb.shrink(value, context);
    }
    noBias() {
        return this;
    }
}

const untouchedApply = Function.prototype.apply;
const ApplySymbol = Symbol('apply');
function safeExtractApply(f) {
    try {
        return f.apply;
    }
    catch (err) {
        return undefined;
    }
}
function safeApplyHacky(f, instance, args) {
    const ff = f;
    ff[ApplySymbol] = untouchedApply;
    const out = ff[ApplySymbol](instance, args);
    delete ff[ApplySymbol];
    return out;
}
function safeApply(f, instance, args) {
    if (safeExtractApply(f) === untouchedApply) {
        return f.apply(instance, args);
    }
    return safeApplyHacky(f, instance, args);
}

const SArray = typeof Array !== 'undefined' ? Array : undefined;
const SSet = typeof Set !== 'undefined' ? Set : undefined;
const SencodeURIComponent = typeof encodeURIComponent !== 'undefined' ? encodeURIComponent : undefined;
const untouchedMap = Array.prototype.map;
const untouchedPush = Array.prototype.push;
const untouchedSlice = Array.prototype.slice;
function extractMap(instance) {
    try {
        return instance.map;
    }
    catch (err) {
        return undefined;
    }
}
function extractPush(instance) {
    try {
        return instance.push;
    }
    catch (err) {
        return undefined;
    }
}
function extractSlice(instance) {
    try {
        return instance.slice;
    }
    catch (err) {
        return undefined;
    }
}
function safeMap(instance, fn) {
    if (extractMap(instance) === untouchedMap) {
        return instance.map(fn);
    }
    return safeApply(untouchedMap, instance, [fn]);
}
function safePush(instance, ...args) {
    if (extractPush(instance) === untouchedPush) {
        return instance.push(...args);
    }
    return safeApply(untouchedPush, instance, args);
}
function safeSlice(instance, ...args) {
    if (extractSlice(instance) === untouchedSlice) {
        return instance.slice(...args);
    }
    return safeApply(untouchedSlice, instance, args);
}
const untouchedHas = Set.prototype.has;
function extractHas(instance) {
    try {
        return instance.has;
    }
    catch (err) {
        return undefined;
    }
}
function safeHas(instance, value) {
    if (extractHas(instance) === untouchedHas) {
        return instance.has(value);
    }
    return safeApply(untouchedHas, instance, [value]);
}
const untouchedCharCodeAt = String.prototype.charCodeAt;
function extractCharCodeAt(instance) {
    try {
        return instance.charCodeAt;
    }
    catch (err) {
        return undefined;
    }
}
function safeCharCodeAt(instance, index) {
    if (extractCharCodeAt(instance) === untouchedCharCodeAt) {
        return instance.charCodeAt(index);
    }
    return safeApply(untouchedCharCodeAt, instance, [index]);
}
const untouchedNumberToString = Number.prototype.toString;
function extractNumberToString(instance) {
    try {
        return instance.toString;
    }
    catch (err) {
        return undefined;
    }
}
function safeNumberToString(instance, ...args) {
    if (extractNumberToString(instance) === untouchedNumberToString) {
        return instance.toString(...args);
    }
    return safeApply(untouchedNumberToString, instance, args);
}

class LazyIterableIterator {
    constructor(producer) {
        this.producer = producer;
    }
    [Symbol.iterator]() {
        if (this.it === undefined) {
            this.it = this.producer();
        }
        return this.it;
    }
    next() {
        if (this.it === undefined) {
            this.it = this.producer();
        }
        return this.it.next();
    }
}
function makeLazy(producer) {
    return new LazyIterableIterator(producer);
}

const safeArrayIsArray = Array.isArray;
const safeObjectDefineProperty = Object.defineProperty;
function tupleMakeItCloneable(vs, values) {
    return safeObjectDefineProperty(vs, cloneMethod, {
        value: () => {
            const cloned = [];
            for (let idx = 0; idx !== values.length; ++idx) {
                safePush(cloned, values[idx].value);
            }
            tupleMakeItCloneable(cloned, values);
            return cloned;
        },
    });
}
function tupleWrapper(values) {
    let cloneable = false;
    const vs = [];
    const ctxs = [];
    for (let idx = 0; idx !== values.length; ++idx) {
        const v = values[idx];
        cloneable = cloneable || v.hasToBeCloned;
        safePush(vs, v.value);
        safePush(ctxs, v.context);
    }
    if (cloneable) {
        tupleMakeItCloneable(vs, values);
    }
    return new Value(vs, ctxs);
}
function tupleShrink(arbs, value, context) {
    const shrinks = [];
    const safeContext = safeArrayIsArray(context) ? context : [];
    for (let idx = 0; idx !== arbs.length; ++idx) {
        safePush(shrinks, makeLazy(() => arbs[idx]
            .shrink(value[idx], safeContext[idx])
            .map((v) => {
            const nextValues = safeMap(value, (v, idx) => new Value(cloneIfNeeded(v), safeContext[idx]));
            return [...safeSlice(nextValues, 0, idx), v, ...safeSlice(nextValues, idx + 1)];
        })
            .map(tupleWrapper)));
    }
    return Stream.nil().join(...shrinks);
}
class TupleArbitrary extends Arbitrary {
    constructor(arbs) {
        super();
        this.arbs = arbs;
        for (let idx = 0; idx !== arbs.length; ++idx) {
            const arb = arbs[idx];
            if (arb == null || arb.generate == null)
                throw new Error(`Invalid parameter encountered at index ${idx}: expecting an Arbitrary`);
        }
    }
    generate(mrng, biasFactor) {
        const mapped = [];
        for (let idx = 0; idx !== this.arbs.length; ++idx) {
            safePush(mapped, this.arbs[idx].generate(mrng, biasFactor));
        }
        return tupleWrapper(mapped);
    }
    canShrinkWithoutContext(value) {
        if (!safeArrayIsArray(value) || value.length !== this.arbs.length) {
            return false;
        }
        for (let index = 0; index !== this.arbs.length; ++index) {
            if (!this.arbs[index].canShrinkWithoutContext(value[index])) {
                return false;
            }
        }
        return true;
    }
    shrink(value, context) {
        return tupleShrink(this.arbs, value, context);
    }
}

function tuple(...arbs) {
    return new TupleArbitrary(arbs);
}

var VerbosityLevel;
(function (VerbosityLevel) {
    VerbosityLevel[VerbosityLevel["None"] = 0] = "None";
    VerbosityLevel[VerbosityLevel["Verbose"] = 1] = "Verbose";
    VerbosityLevel[VerbosityLevel["VeryVerbose"] = 2] = "VeryVerbose";
})(VerbosityLevel || (VerbosityLevel = {}));

typeof Buffer !== 'undefined' ? Buffer.isBuffer : undefined;

var ExecutionStatus;
(function (ExecutionStatus) {
    ExecutionStatus[ExecutionStatus["Success"] = 0] = "Success";
    ExecutionStatus[ExecutionStatus["Skipped"] = -1] = "Skipped";
    ExecutionStatus[ExecutionStatus["Failure"] = 1] = "Failure";
})(ExecutionStatus || (ExecutionStatus = {}));

const safeMathFloor$1 = Math.floor;
const safeMathLog = Math.log;
function integerLogLike(v) {
    return safeMathFloor$1(safeMathLog(v) / safeMathLog(2));
}
function biasNumericRange(min, max, logLike) {
    if (min === max) {
        return [{ min: min, max: max }];
    }
    if (min < 0 && max > 0) {
        const logMin = logLike(-min);
        const logMax = logLike(max);
        return [
            { min: -logMin, max: logMax },
            { min: (max - logMax), max: max },
            { min: min, max: min + logMin },
        ];
    }
    const logGap = logLike((max - min));
    const arbCloseToMin = { min: min, max: min + logGap };
    const arbCloseToMax = { min: (max - logGap), max: max };
    return min < 0
        ? [arbCloseToMax, arbCloseToMin]
        : [arbCloseToMin, arbCloseToMax];
}

const safeMathCeil = Math.ceil;
const safeMathFloor = Math.floor;
function halvePosInteger(n) {
    return safeMathFloor(n / 2);
}
function halveNegInteger(n) {
    return safeMathCeil(n / 2);
}
function shrinkInteger(current, target, tryTargetAsap) {
    const realGap = current - target;
    function* shrinkDecr() {
        let previous = tryTargetAsap ? undefined : target;
        const gap = tryTargetAsap ? realGap : halvePosInteger(realGap);
        for (let toremove = gap; toremove > 0; toremove = halvePosInteger(toremove)) {
            const next = toremove === realGap ? target : current - toremove;
            yield new Value(next, previous);
            previous = next;
        }
    }
    function* shrinkIncr() {
        let previous = tryTargetAsap ? undefined : target;
        const gap = tryTargetAsap ? realGap : halveNegInteger(realGap);
        for (let toremove = gap; toremove < 0; toremove = halveNegInteger(toremove)) {
            const next = toremove === realGap ? target : current - toremove;
            yield new Value(next, previous);
            previous = next;
        }
    }
    return realGap > 0 ? stream(shrinkDecr()) : stream(shrinkIncr());
}

const safeMathSign = Math.sign;
const safeNumberIsInteger$1 = Number.isInteger;
const safeObjectIs$1 = Object.is;
class IntegerArbitrary extends Arbitrary {
    constructor(min, max) {
        super();
        this.min = min;
        this.max = max;
    }
    generate(mrng, biasFactor) {
        const range = this.computeGenerateRange(mrng, biasFactor);
        return new Value(mrng.nextInt(range.min, range.max), undefined);
    }
    canShrinkWithoutContext(value) {
        return (typeof value === 'number' &&
            safeNumberIsInteger$1(value) &&
            !safeObjectIs$1(value, -0) &&
            this.min <= value &&
            value <= this.max);
    }
    shrink(current, context) {
        if (!IntegerArbitrary.isValidContext(current, context)) {
            const target = this.defaultTarget();
            return shrinkInteger(current, target, true);
        }
        if (this.isLastChanceTry(current, context)) {
            return Stream.of(new Value(context, undefined));
        }
        return shrinkInteger(current, context, false);
    }
    defaultTarget() {
        if (this.min <= 0 && this.max >= 0) {
            return 0;
        }
        return this.min < 0 ? this.max : this.min;
    }
    computeGenerateRange(mrng, biasFactor) {
        if (biasFactor === undefined || mrng.nextInt(1, biasFactor) !== 1) {
            return { min: this.min, max: this.max };
        }
        const ranges = biasNumericRange(this.min, this.max, integerLogLike);
        if (ranges.length === 1) {
            return ranges[0];
        }
        const id = mrng.nextInt(-2 * (ranges.length - 1), ranges.length - 2);
        return id < 0 ? ranges[0] : ranges[id + 1];
    }
    isLastChanceTry(current, context) {
        if (current > 0)
            return current === context + 1 && current > this.min;
        if (current < 0)
            return current === context - 1 && current < this.max;
        return false;
    }
    static isValidContext(current, context) {
        if (context === undefined) {
            return false;
        }
        if (typeof context !== 'number') {
            throw new Error(`Invalid context type passed to IntegerArbitrary (#1)`);
        }
        if (context !== 0 && safeMathSign(current) !== safeMathSign(context)) {
            throw new Error(`Invalid context value passed to IntegerArbitrary (#2)`);
        }
        return true;
    }
}

const safeNumberIsInteger = Number.isInteger;
function buildCompleteIntegerConstraints(constraints) {
    const min = constraints.min !== undefined ? constraints.min : -0x80000000;
    const max = constraints.max !== undefined ? constraints.max : 0x7fffffff;
    return { min, max };
}
function integer(constraints = {}) {
    const fullConstraints = buildCompleteIntegerConstraints(constraints);
    if (fullConstraints.min > fullConstraints.max) {
        throw new Error('fc.integer maximum value should be equal or greater than the minimum one');
    }
    if (!safeNumberIsInteger(fullConstraints.min)) {
        throw new Error('fc.integer minimum value should be an integer');
    }
    if (!safeNumberIsInteger(fullConstraints.max)) {
        throw new Error('fc.integer maximum value should be an integer');
    }
    return new IntegerArbitrary(fullConstraints.min, fullConstraints.max);
}

const safeObjectIs = Object.is;
class ConstantArbitrary extends Arbitrary {
    constructor(values) {
        super();
        this.values = values;
    }
    generate(mrng, _biasFactor) {
        const idx = this.values.length === 1 ? 0 : mrng.nextInt(0, this.values.length - 1);
        const value = this.values[idx];
        if (!hasCloneMethod(value)) {
            return new Value(value, idx);
        }
        return new Value(value, idx, () => value[cloneMethod]());
    }
    canShrinkWithoutContext(value) {
        if (this.values.length === 1) {
            return safeObjectIs(this.values[0], value);
        }
        if (this.fastValues === undefined) {
            this.fastValues = new FastConstantValuesLookup(this.values);
        }
        return this.fastValues.has(value);
    }
    shrink(value, context) {
        if (context === 0 || safeObjectIs(value, this.values[0])) {
            return Stream.nil();
        }
        return Stream.of(new Value(this.values[0], 0));
    }
}
class FastConstantValuesLookup {
    constructor(values) {
        this.values = values;
        this.fastValues = new SSet(this.values);
        let hasMinusZero = false;
        let hasPlusZero = false;
        if (safeHas(this.fastValues, 0)) {
            for (let idx = 0; idx !== this.values.length; ++idx) {
                const value = this.values[idx];
                hasMinusZero = hasMinusZero || safeObjectIs(value, -0);
                hasPlusZero = hasPlusZero || safeObjectIs(value, 0);
            }
        }
        this.hasMinusZero = hasMinusZero;
        this.hasPlusZero = hasPlusZero;
    }
    has(value) {
        if (value === 0) {
            if (safeObjectIs(value, 0)) {
                return this.hasPlusZero;
            }
            return this.hasMinusZero;
        }
        return safeHas(this.fastValues, value);
    }
}

function constantFrom(...values) {
    if (values.length === 0) {
        throw new Error('fc.constantFrom expects at least one parameter');
    }
    return new ConstantArbitrary(values);
}

const indexToCharStringMapper = String.fromCodePoint;
function indexToCharStringUnmapper(c) {
    if (typeof c !== 'string') {
        throw new Error('Cannot unmap non-string');
    }
    if (c.length === 0 || c.length > 2) {
        throw new Error('Cannot unmap string with more or less than one character');
    }
    const c1 = safeCharCodeAt(c, 0);
    if (c.length === 1) {
        return c1;
    }
    const c2 = safeCharCodeAt(c, 1);
    if (c1 < 0xd800 || c1 > 0xdbff || c2 < 0xdc00 || c2 > 0xdfff) {
        throw new Error('Cannot unmap invalid surrogate pairs');
    }
    return c.codePointAt(0);
}

function buildCharacterArbitrary(min, max, mapToCode, unmapFromCode) {
    return integer({ min, max }).map((n) => indexToCharStringMapper(mapToCode(n)), (c) => unmapFromCode(indexToCharStringUnmapper(c)));
}

function indexToPrintableIndexMapper(v) {
    if (v < 95)
        return v + 0x20;
    if (v <= 0x7e)
        return v - 95;
    return v;
}
function indexToPrintableIndexUnmapper(v) {
    if (v >= 0x20 && v <= 0x7e)
        return v - 0x20;
    if (v >= 0 && v <= 0x1f)
        return v + 95;
    return v;
}

function identity(v) {
    return v;
}
function char() {
    return buildCharacterArbitrary(0x20, 0x7e, identity, identity);
}

const gapSize = 0xdfff + 1 - 0xd800;
function unicodeMapper(v) {
    if (v < 0xd800)
        return indexToPrintableIndexMapper(v);
    return v + gapSize;
}
function unicodeUnmapper(v) {
    if (v < 0xd800)
        return indexToPrintableIndexUnmapper(v);
    if (v <= 0xdfff)
        return -1;
    return v - gapSize;
}
function fullUnicode() {
    return buildCharacterArbitrary(0x0000, 0x10ffff - gapSize, unicodeMapper, unicodeUnmapper);
}

function percentCharArbMapper(c) {
    const encoded = SencodeURIComponent(c);
    return c !== encoded ? encoded : `%${safeNumberToString(safeCharCodeAt(c, 0), 16)}`;
}
function percentCharArbUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported');
    }
    const decoded = decodeURIComponent(value);
    return decoded;
}
fullUnicode().map(percentCharArbMapper, percentCharArbUnmapper);

const f64 = new Float64Array(1);
new Uint32Array(f64.buffer, f64.byteOffset);

const f32 = new Float32Array(1);
new Uint32Array(f32.buffer, f32.byteOffset);

(undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

SArray.isArray;

var TokenizerBlockMode;
(function (TokenizerBlockMode) {
    TokenizerBlockMode[TokenizerBlockMode["Full"] = 0] = "Full";
    TokenizerBlockMode[TokenizerBlockMode["Character"] = 1] = "Character";
})(TokenizerBlockMode || (TokenizerBlockMode = {}));

char();

function descendants(parent) {
    return Array.from(parent.childNodes).concat(...Array.from(parent.children).map((child) => descendants(child)));
}
const sclDocString = `<?xml version="1.0" encoding="UTF-8"?>
    <SCL version="2007" revision="B" xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:ens1="http://example.org/somePreexistingExtensionNamespace">
    <Substation name="A1" desc="test substation"></Substation>
  </SCL>`;
const testDocStrings = [
    sclDocString,
    `<?xml version="1.0" encoding="UTF-8"?>
    <testDoc1>
  <element1 property1="value1" property2="value2">SomeText</element1>
  <element2 property2="value2" property3="value3"><!--AComment--></element2>
  <element3 property3="value3" property1="value1">
    <subelement1 property1="value1" property2="value2">SomeMoreText</subelement1>
    <subelement2 property2="value2" property3="value3"><!----></subelement2>
    <subelement3 property3="value3" property1="value1"></subelement3>
  </element3>
  </testDoc1>`,
    `<?xml version="1.0" encoding="UTF-8"?>
    <testDoc2>
  <element1 property1="value1" property2="value2">SomeText</element1>
  <element2 property2="value2" property3="value3"><!--AComment--></element2>
  <element3 property3="value3" property1="value1">
    <subelement1 property1="value1" property2="value2">SomeMoreText</subelement1>
    <subelement2 property2="value2" property3="value3"><!----></subelement2>
    <subelement3 property3="value3" property1="value1"></subelement3>
  </element3>
  </testDoc2>`,
];
tuple(constantFrom(...testDocStrings), constantFrom(...testDocStrings))
    .map((strs) => strs.map((str) => new DOMParser().parseFromString(str, "application/xml")))
    .map((docs) => docs.map((doc) => ({ doc, nodes: descendants(doc).concat([doc]) })));

function newEditEventV2(edit, options) {
    return new CustomEvent('oscd-edit-v2', {
        composed: true,
        bubbles: true,
        detail: { ...options, edit },
    });
}

function newEditEvent(edit, options) {
    if (isEditV2(edit))
        return newEditEventV2(edit, options);
    if (options)
        return newEditEventV2(convertEdit(edit), options);
    return newEditEventV1(edit);
}

/** An editor [[`plugin`]] to configure `Report`, `GOOSE`, `SampledValue` control blocks and its `DataSet` */
class ImportIEDPlugin extends s {
    constructor() {
        super(...arguments);
        /** SCL change indicator */
        this.docVersion = 0;
    }
    async run() {
        this.input.click();
    }
    /** Loads the file `event.target.files[0]` into [[`src`]] as a `blob:...`. */
    async importIED(event) {
        var _a, _b;
        const file = (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b.item(0);
        if (!file)
            return;
        const text = await file.text();
        const newIed = new DOMParser()
            .parseFromString(text, 'application/xml')
            .querySelector('IED');
        const scl = this.doc.querySelector('SCL');
        const isIedNameUnique = !(scl === null || scl === void 0 ? void 0 : scl.querySelector(`IED[name="${newIed === null || newIed === void 0 ? void 0 : newIed.getAttribute('name')}"]`));
        if (scl && newIed && isIedNameUnique)
            this.dispatchEvent(newEditEvent(insertIed(scl, newIed), { title: `Import IED ${newIed.getAttribute('name')}` }));
    }
    render() {
        return x `<input
      @click=${({ target }) => {
            // eslint-disable-next-line no-param-reassign
            target.value = '';
        }}
      @change=${this.importIED}
      id="importied-plugin-input"
      accept=".iid,.cid,.icd"
      type="file"
    />`;
    }
}
ImportIEDPlugin.styles = i$3 `
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  `;
__decorate([
    n$1({ attribute: false })
], ImportIEDPlugin.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], ImportIEDPlugin.prototype, "docVersion", void 0);
__decorate([
    i('input')
], ImportIEDPlugin.prototype, "input", void 0);

export { ImportIEDPlugin as default };
//# sourceMappingURL=scl-import-ied.js.map
