const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=(t,...i)=>{const o=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new s(o,e)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new s("string"==typeof t?t:t+"",e))(i)})(t):t;var r;const a=window.trustedTypes,l=a?a.emptyScript:"",h=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},c=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:c};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var s,o;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:d.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var i,s,o;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),a=t.converter,l=null!==(o=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==o?o:d.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var v;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:u}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.3.2");const m=globalThis.trustedTypes,g=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,f="?"+$,w=`<${f}>`,_=document,y=(t="")=>_.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,b=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,x=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,T=/"/g,P=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),R=new WeakMap,D=_.createTreeWalker(_,129,null,!1),M=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=E;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===E?"!--"===l[1]?r=S:void 0!==l[1]?r=x:void 0!==l[2]?(P.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=C):void 0!==l[3]&&(r=C):r===C?">"===l[0]?(r=null!=o?o:E,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?C:'"'===l[3]?T:k):r===T||r===k?r=C:r===S||r===x?r=E:(r=C,o=void 0);const c=r===C&&t[e+1].startsWith("/>")?" ":"";n+=r===E?i+w:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+$+c):i+$+(-2===h?(s.push(void 0),e):c)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(a):a,s]};class N{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,h]=M(t,e);if(this.el=N.createElement(l,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=D.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?V:"@"===e[1]?W:j})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(P.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=m?m.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],y()),D.nextNode(),a.push({type:2,index:++o});s.append(t[e],y())}}}else if(8===s.nodeType)if(s.data===f)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)a.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function O(t,e,i=t,s){var o,n,r,a;if(e===z)return e;let l=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const h=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=O(t,l._$AS(t,e.values),l,s)),e}class L{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(i,!0);D.currentNode=o;let n=D.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new B(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new J(n,this,t)),this.v.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=D.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,s){var o;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),A(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==z&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return b(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==H&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new L(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new N(t)),e}S(t){b(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new B(this.M(y()),this.M(y()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,i,s,o){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=O(this,t,e,0),n=!A(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=O(this,s[i+r],e,r),a===z&&(a=this._$AH[r]),n||(n=!A(a)||a!==this._$AH[r]),a===H?t=H:t!==H&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.C(t)}C(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends j{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===H?void 0:t}}const q=m?m.emptyScript:"";class V extends j{constructor(){super(...arguments),this.type=4}C(t){t&&t!==H?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class W extends j{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=O(this,t,e,0))&&void 0!==i?i:H)===z)return;const s=this._$AH,o=t===H&&s!==H||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==H&&(s===H||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const F=window.litHtmlPolyfillSupport;var K,Z;null==F||F(N,B),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.5");class G extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new B(e.insertBefore(y(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return z}}G.finalized=!0,G._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:G});const Q=globalThis.litElementPolyfillSupport;function X(t,e){if(function(t){return t?new RegExp("^(|/)"+t.replace(/:[^\s/]+/g,"([\\wÀ-ÖØ-öø-ÿ-]+)")+"(|/)$"):new RegExp("(^$|^/$)")}(e).test(t))return!0}function Y(t){return class extends t{static get properties(){return{route:{type:String,reflect:!0,attribute:"route"},canceled:{type:Boolean}}}constructor(...t){super(...t),this.route="",this.canceled=!1}connectedCallback(...t){super.connectedCallback(...t),this.routing(this.constructor.routes,((...t)=>this.router(...t))),window.addEventListener("route",(()=>{this.routing(this.constructor.routes,((...t)=>this.router(...t)))})),window.onpopstate=()=>{window.dispatchEvent(new CustomEvent("route"))}}routed(t,e,i,s,o,n){n&&n(t,e,i,s),o(t,e,i,s)}routing(t,e){this.canceled=!0;const i=decodeURI(window.location.pathname),s=decodeURI(window.location.search);let o=t.filter((t=>"*"===t.pattern))[0],n=t.filter((t=>"*"!==t.pattern&&X(i,t.pattern)))[0],r=function(t){return t?JSON.parse('{"'+t.substring(1).replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}(s);n?(n.params=function(t,e){let i={};const s=t.split("/").filter((t=>""!=t)),o=e.split("/").filter((t=>""!=t));return s.map(((t,e)=>{/^:/.test(t)&&(i[t.substring(1)]=o[e])})),i}(n.pattern,i),n.data=n.data||{},n.authentication&&n.authentication.authenticate&&"function"==typeof n.authentication.authenticate?(this.canceled=!1,Promise.resolve(n.authentication.authenticate.bind(this).call()).then((t=>{this.canceled||(t?n.authorization&&n.authorization.authorize&&"function"==typeof n.authorization.authorize?(this.canceled=!1,Promise.resolve(n.authorization.authorize.bind(this).call()).then((t=>{this.canceled||(t?this.routed(n.name,n.params,r,n.data,e,n.callback):this.routed(n.authorization.unauthorized.name,n.params,r,n.data,e,n.callback))}))):this.routed(n.name,n.params,r,n.data,e,n.callback):this.routed(n.authentication.unauthenticated.name,n.params,r,n.data,e,n.callback))}))):n.authorization&&n.authorization.authorize&&"function"==typeof n.authorization.authorize?(this.canceled=!1,Promise.resolve(n.authorization.authorize.bind(this).call()).then((t=>{this.canceled||(t?this.routed(n.name,n.params,r,n.data,e,n.callback):this.routed(n.authorization.unauthorized.name,n.params,r,n.data,e,n.callback))}))):this.routed(n.name,n.params,r,n.data,e,n.callback)):o&&(o.data=o.data||{},this.routed(o.name,{},r,o.data,e,o.callback))}}}null==Q||Q({LitElement:G}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.2.0");function tt(t){if(t.status>=200&&t.status<300)return t;{const t=new Error("HTTP Error");throw console.log("Error communicating with TVMaze"),t}}function et(t){return t.json()}const it={searchShows:t=>fetch(`https://api.tvmaze.com/search/shows?q=${t}`,{method:"get",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(tt).then(et),getShow:t=>fetch(`https://api.tvmaze.com/shows/${t}`,{method:"get",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(tt).then(et)};var st;null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements,console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");class ot extends(function(t){return class extends t{navigate(t){window.history.pushState({},null,t),window.dispatchEvent(new CustomEvent("route"))}}}(G)){static get properties(){return{href:{type:String}}}constructor(){super(),this.href=""}render(){return U` <a href="${this.href}" @click="${this.linkClick}"> <slot></slot> </a> `}linkClick(t){t.preventDefault(),this.navigate(this.href)}}customElements.define("app-link",ot);class nt extends(function(t){return class extends t{static get properties(){return{activeRoute:{type:String,reflect:!0,attribute:"active-route"}}}attributeChangedCallback(...t){super.attributeChangedCallback(...t),t.some((t=>"active-route"===t))&&this.outlet()}connectedCallback(...t){super.connectedCallback(...t),setTimeout((()=>{this.outlet()}))}outlet(){Array.from(this.querySelectorAll("[route]")).map((t=>{t.style.display="none"})),Array.from(this.shadowRoot.querySelectorAll("[route]")).map((t=>{t.style.display="none"})),this.activeRoute&&(Array.from(this.querySelectorAll(`[route~=${this.activeRoute}]`)).map((t=>{t.style.display=""})),Array.from(this.shadowRoot.querySelectorAll(`[route~=${this.activeRoute}]`)).map((t=>{t.style.display=""})))}}}(G)){render(){return U` <slot></slot> `}}customElements.define("app-main",nt);class rt extends(Y(G)){static get properties(){return{route:{type:String},params:{type:Object},query:{type:Object},title:{type:String},shows:{type:[]},showDetail:{type:Object}}}static get routes(){return[{name:"home",pattern:""},{name:"tv-show",pattern:"tv-show/:id"},{name:"not-found",pattern:"*"}]}constructor(){super(),this.route="",this.params={},this.query={},this.title="TV Search",this.shows=[],this.showDetail=null}router(t,e,i,s){this.route=t,this.params=e,this.query=i,this.data=s,"tv-show"==t&&null!=e.id&&this.getShowDetail(e.id)}render(){const t=new DOMParser,e="home"==this.route&&this.shows.length>0?this.shows.map((e=>{var i,s;const o=null===(i=t.parseFromString(e.show.summary,"text/html").getElementsByTagName("p").item(0))||void 0===i?void 0:i.textContent.slice(0,150);return U`
        <div class="show-item">
          <div class="left-col">
            <img class="show-image" src="${null===(s=e.show.image)||void 0===s?void 0:s.medium}" />
          </div>
          <div class="right-col">
            <div class="show-title">${e.show.name}</div>
            <div class="show-rating">${e.show.rating.average}</div>
            <div class="show-description">
              ${o}... 
              <app-link href="/tv-show/${e.show.id}" class="read-more">Read more</app-link>
            </div>
          </div>
        </div>
      `})):[],i=null!=this.showDetail?this.parseShowDetail(this.showDetail):{};return U`
      <main>
        <h1>${this.title}</h1>

        <app-main active-route=${this.route}>
          <div route="home">
            <input type="text" @keypress="${this.search}" class="search-input" placeholder="Search TV shows" />
            <div class="app-tv-shows">
                ${e}
            </div>
          </div>
          <div route="tv-show">
            <div class="back-to-home"><app-link href="/">Back to Home</app-linka></div>
            <div class="app-tv-show-detail">
              ${i}
            </div>
          </div>
          <div route="not-found">

          </div>
        </app-main>

      </main>

      <p class="app-footer">
        Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jurerick"
          >Jur Erick Porras</a
        >.
      </p>
    `}parseShowDetail(t){var e,i,s;const o=new DOMParser,n=this.showDetail.genres.length?this.showDetail.genres.map((t=>U`
          <span class="genre-item">${t}</span>
        `)):[];return U`
        <div>
          <div class="left-col">
            <img src=${null===(e=this.showDetail.image)||void 0===e?void 0:e.original} />
          </div>
          <div class="right-col">
            
            <h1 class="show-name">${this.showDetail.name}</h1>

            <div class="genres">${n}</div>

            <div class="show-description">
              ${null===(i=o.parseFromString(this.showDetail.summary,"text/html").getElementsByTagName("p").item(0))||void 0===i?void 0:i.textContent}
            </div>

            <div class="other-details">
              <div>
                <label>Website</label>
                <div>
                  <a href="${this.showDetail.officialSite}" target="_blank">${this.showDetail.officialSite}</a>
                </div>
              </div>
              <div>
                <label>Premiered</label>
                <div>${this.showDetail.premiered}</div>
              </div>                
              <div>
                <label>Rating</label>
                <div>${null===(s=this.showDetail.rating)||void 0===s?void 0:s.average}</div>
              </div>                
              <div>
                <label>Status</label>
                <div>${this.showDetail.status}</div>
              </div>                
              <div>
                <label>Language</label>
                <div>${this.showDetail.language}</div>
              </div>  
            </div>
          </div>
        </div>
      `}async getShowDetail(t){this.showDetail=await it.getShow(t)}async search(t){13===t.keyCode&&"Enter"===t.key&&(this.shows=await it.searchShows(t.currentTarget.value))}static get styles(){return o`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        color: #1a2b42;
        margin: 0 auto;
        text-align: center;
        background-color: var(--tv-search-app-background-color);
      }

      main {
        flex-grow: 1;
        margin: 5em;
        width: 1200px;
      }


      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }

      .app-tv-show-detail > div {
        display: flex;
      }

      .app-tv-show-detail h1 {
        margin: 0;
      }

      .app-tv-show-detail .other-details {
        font-size: 14px;
      }
      .app-tv-show-detail .other-details > div {
        margin-bottom: 1em;
      }
      .app-tv-show-detail .other-details > div > label {
        font-weight: bold;
      }

      .app-tv-show-detail .genres{ 
        margin: .5em 0;
      }

      .app-tv-show-detail .genre-item  {
        background: #efd;
        font-size: .9em;
        padding: 0.2em 0.4em;
        border-radius: 0.4em;
        margin-right: 0.4em;
        color: #333;
      }

      .app-tv-show-detail .left-col {
        width: 50%;
      }
      
      .app-tv-show-detail .left-col img{ width: 100% }

      .app-tv-show-detail .right-col {
        padding: 0 1em;
        text-align: left;
        width: 50%;
      }

      .app-tv-show-detail .show-description {
        line-height: 1.6em;
        margin: 1em 0;
      }

      .app-tv-shows {
        display: flex;
        flex-wrap: wrap;
      }

      .app-tv-shows .show-item:hover { 
        box-shadow: 5px 10px #333;
      }

      .app-tv-shows .show-item{
        width: 30%;
        margin: .5em;
        box-sizing: border-box;
        border: 1px solid #333;
        display: flex;
      }

      .app-tv-shows .show-item .left-col {
        width: 45%;
      }

      .app-tv-shows .show-item .right-col {
        text-align: left;
        margin: 0.5em 0.5em 1em 1em;
        width: 50%;
      }

      .app-tv-shows .show-item .show-image {
        width: 100%;
      }

      .app-tv-shows .show-item .read-more {
        font-weight: bold;
        font-style: oblique;
      }

      .app-tv-shows .show-title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: .2em;
      }

      .app-tv-shows .show-rating {
        color: maroon;
        font-weight: bold;
        margin-bottom: .5em;
      }

      .search-input {
        margin: 1em;
        padding: .5em;
        font-size: 18px;
      }

      .back-to-home {
        margin: 1em;
      }

      @media (max-width: 575.98px) { 
        main {
          width: 100%;
          margin: 2em 5em;
        }

        .app-tv-shows .show-item{
          width: 100%;
        }

        .app-tv-show-detail > div {
          display: block;
        }
        .app-tv-show-detail .left-col {
          width: 100%;
        }
        .app-tv-show-detail .right-col {
          width: 90%;
          padding: 1em;
        }
      }
    `}}customElements.define("tv-search-app",rt);
