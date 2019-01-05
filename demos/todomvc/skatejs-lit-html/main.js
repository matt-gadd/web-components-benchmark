!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,n=t=>"function"==typeof t&&i.has(t),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,s=null)=>{let i=e;for(;i!==s;){const e=i.nextSibling;t.removeChild(i),i=e}},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,a=new RegExp(`${c}|${h}`),u="$lit$";class d{constructor(t,e){this.parts=[],this.element=e;let s=-1,i=0;const n=[],o=e=>{const r=e.content,l=document.createTreeWalker(r,133,null,!1);let h,d;for(;l.nextNode();){s++,h=d;const e=d=l.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const n=e.attributes;let o=0;for(let t=0;t<n.length;t++)n[t].value.indexOf(c)>=0&&o++;for(;o-- >0;){const n=t.strings[i],o=b.exec(n)[2],r=o.toLowerCase()+u,l=e.getAttribute(r).split(a);this.parts.push({type:"attribute",index:s,name:o,strings:l}),e.removeAttribute(r),i+=l.length-1}}"TEMPLATE"===e.tagName&&o(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(c)<0)continue;const o=e.parentNode,r=t.split(a),l=r.length-1;i+=l;for(let t=0;t<l;t++)o.insertBefore(""===r[t]?m():document.createTextNode(r[t]),e),this.parts.push({type:"node",index:s++});o.insertBefore(""===r[l]?m():document.createTextNode(r[l]),e),n.push(e)}else if(8===e.nodeType)if(e.nodeValue===c){const t=e.parentNode,o=e.previousSibling;null===o||o!==h||o.nodeType!==Node.TEXT_NODE?t.insertBefore(m(),e):s--,this.parts.push({type:"node",index:s++}),n.push(e),null===e.nextSibling?t.insertBefore(m(),e):s--,d=h,i++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(c,t+1));)this.parts.push({type:"node",index:-1})}}};o(e);for(const t of n)t.parentNode.removeChild(t)}}const p=t=>-1!==t.index,m=()=>document.createComment(""),b=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class f{constructor(t,e,s){this._parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this._parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let s=0,i=0;const n=t=>{const o=document.createTreeWalker(t,133,null,!1);let r=o.nextNode();for(;s<e.length&&null!==r;){const t=e[s];if(p(t))if(i===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(r),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(r,t.name,t.strings,this.options));s++}else i++,"TEMPLATE"===r.nodeName&&n(r.content),r=o.nextNode();else this._parts.push(void 0),s++}};return n(t),o&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class g{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="";for(let s=0;s<t;s++){const t=this.strings[s];let i=!1;e+=t.replace(b,(t,e,s,n)=>(i=!0,e+s+u+n+c)),i||(e+=h)}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=t=>null===t||!("object"==typeof t||"function"==typeof t);class y{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new _(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)s+="string"==typeof e?e:String(e);else s+="string"==typeof t?t:String(t)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class _{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===l||v(t)&&t===this.value||(this.value=t,n(t)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const t=this.value;this.value=l,t(this)}this.value!==l&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=m()),t._insert(this.endNode=m())}insertAfterPart(t){t._insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=l,t(this)}const t=this._pendingValue;t!==l&&(v(t)?t!==this.value&&this._commitText(t):t instanceof g?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const s=new f(e,t.processor,this.options),i=s._clone();s.update(t.values),this._commitNode(i),this.value=s}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)void 0===(s=e[i])&&(s=new x(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class w{constructor(t,e,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=l,t(this)}if(this._pendingValue===l)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=l}}class E extends y{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends _{}let C=!1;try{const t={get capture(){return C=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class k{constructor(t,e,s){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=l,t(this)}if(this._pendingValue===l)return;const t=this._pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=T(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=l}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const O=new class{handleAttributeExpressions(t,e,s,i){const n=e[0];return"."===n?new E(t,e.slice(1),s).parts:"@"===n?[new k(t,e.slice(1),i.eventContext)]:"?"===n?[new w(t,e.slice(1),s)]:new y(t,e,s).parts}handleTextExpression(t){return new x(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function A(t){let e=P.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},P.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(c);return void 0===(s=e.keyString.get(i))&&(s=new d(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const P=new Map,z=new WeakMap,j=(t,...e)=>new g(t,e,"html",O);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function V(t){return"string"==typeof t?t.split(/([_A-Z])/).reduce((t,e,s)=>{return`${t}${t&&s%2!=0?"-":""}${(e="_"===e?"":e).toLowerCase()}`}):t}const S=t=>null==t;function M(t){t=t||{};const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e}var $=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t};const L={bubbles:!0,cancelable:!0,composed:!1};const H=(t=HTMLElement)=>(class extends t{childrenUpdated(){super.childrenUpdated&&super.childrenUpdated(),this.props&&this.props.hasOwnProperty("children")&&(this.props={children:this.children})}connectedCallback(){if(super.connectedCallback&&super.connectedCallback(),this.childrenUpdated){const t=this.childrenUpdated.bind(this);this._mo=new MutationObserver(t),this._mo.observe(this,{childList:!0}),t()}}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this._mo&&this._mo.disconnect()}}),U=(t=HTMLElement)=>(class extends t{get context(){if(this._context)return this._context;let t=this;for(;t=t.parentNode||t.host;)if("context"in t)return t.context;return{}}set context(t){this._context=t}}),B=(t=HTMLElement)=>(class extends t{connectedCallback(){this.connecting&&this.connecting(),super.connectedCallback&&super.connectedCallback(),this.connected&&this.connected()}disconnectedCallback(){this.disconnecting&&this.disconnecting(),super.disconnectedCallback&&super.disconnectedCallback(),this.disconnected&&this.disconnected()}});var W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t};function R(t,e){const{attribute:s}=e,i="object"==typeof s?W({},s):{source:s,target:s};return!0===i.source&&(i.source=V(t)),!0===i.target&&(i.target=V(t)),i}function D(t){return t}const F=new Map;function J(t){const e=t||{},s=function({constructor:t},s){const i=function(t,e){const{coerce:s,default:i,deserialize:n,serialize:o}=e;return{attribute:R(t,e),coerce:s||D,default:i,deserialize:n||D,serialize:o||D}}(s,e);t.hasOwnProperty("_propsNormalized")||(t._propsNormalized={}),t._propsNormalized[s]=i;const{attribute:{source:n,target:o}}=i;n&&(t._observedAttributes.push(n),t._attributeToPropertyMap[n]=s,n!==o&&(t._attributeToAttributeMap[n]=o)),Object.defineProperty(t.prototype,s,{configurable:!0,get(){const t=this._props[s];return null==t?i.default:t},set(t){const{attribute:{target:e},serialize:n}=i;if(e){const s=n?n(t):t;null==s?this.removeAttribute(e):this.setAttribute(e,s)}this._props[s]=i.coerce(t),this.triggerUpdate()}})};return Object.keys(e).forEach(t=>s[t]=e[t]),s}const X=(t=HTMLElement)=>{var e,s;return s=e=class extends t{constructor(...t){var e;return e=super(...t),this._prevProps={},this._prevState={},this._props={},this._state={},e}static get observedAttributes(){return function(t){if(t.hasOwnProperty("_propsNormalized"))return;const{props:e}=t;M(e).forEach(s=>{let i=e[s]||e.any;F.has(i)&&(i=F.get(i)),"function"!=typeof i&&(i=J(i)),i({constructor:t},s)})}(this),this._observedAttributes.concat(super.observedAttributes||[])}static get props(){return this._props}static set props(t){this._props=t}get props(){return M(this.constructor.props).reduce((t,e)=>(t[e]=this[e],t),{})}set props(t){const e=this.constructor.props;M(t).forEach(s=>s in e&&(this[s]=t[s]))}get state(){return this._state}set state(t){this._state=t,this.triggerUpdate()}attributeChangedCallback(t,e,s){const{_attributeToAttributeMap:i,_attributeToPropertyMap:n,_propsNormalized:o}=this.constructor;super.attributeChangedCallback&&super.attributeChangedCallback(t,e,s);const r=n[t];if(r){const t=o[r];if(t){const{default:e,deserialize:i}=t,n=i?i(s):s;this._props[r]=null==n?e:n,this.triggerUpdate()}}const l=i[t];l&&(null==s?this.removeAttribute(l):this.setAttribute(l,s))}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.triggerUpdate()}shouldUpdate(){return!0}triggerUpdate(){var t;this._updating||(this._updating=!0,t=(()=>{const{_prevProps:t,_prevState:e}=this;this.updating&&this.updating(t,e),this.updated&&this.shouldUpdate(t,e)&&this.updated(t,e),this._prevProps=this.props,this._prevState=this.state,this._updating=!1}),window.Promise?Promise.resolve().then(t):setTimeout(t))}},e._attributeToAttributeMap={},e._attributeToPropertyMap={},e._observedAttributes=[],e._props={},s},{parse:K,stringify:Z}=JSON,q=Object.freeze({source:!0}),G=t=>S(t)?0:Number(t),Q=J({attribute:q}),Y=J({attribute:q,coerce:t=>Array.isArray(t)?t:S(t)?null:[t],default:Object.freeze([]),deserialize:K,serialize:Z}),I=J({attribute:q,coerce:Boolean,default:!1,deserialize:t=>!S(t),serialize:t=>t?"":null}),tt=J({attribute:q,default:0,coerce:G,deserialize:G,serialize:t=>S(t)?null:String(Number(t))}),et=J({attribute:q,default:Object.freeze({}),deserialize:K,serialize:Z}),st=J({attribute:q,default:"",coerce:String,serialize:t=>S(t)?null:String(t)});F.set(Array,Y),F.set(Boolean,I),F.set(Number,tt),F.set(Object,et),F.set(String,st);const it={any:Q,array:Y,boolean:I,number:tt,object:et,string:st},nt=(t=HTMLElement)=>(class extends t{get renderRoot(){return super.renderRoot||((t=this)._shadowRoot||(t._shadowRoot=t.shadowRoot||t.attachShadow({mode:"open"})));var t}renderer(t,e){super.renderer?super.renderer(t,e):t.innerHTML=e()||""}updated(t,e){super.updated&&super.updated(t,e),this.rendering&&this.rendering(),this.renderer(this.renderRoot,()=>this.render&&this.render(this)),this.rendered&&this.rendered()}});const ot=((t=HTMLElement)=>{return class extends t{constructor(...t){var e,s,i;super(...t),i={},(s="__events")in(e=this)?Object.defineProperty(e,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[s]=i}static get observedAttributes(){return(this.events||[]).forEach(t=>{const e=`on${t[0].toUpperCase()+t.substring(1)}`;Object.defineProperty(this.prototype,e,{get(){return this.__events[t]||(this[e]=(()=>{})),this.__events[t]},set(e){this.__events[t]=(s=>{e(s),function(t,e,s){const i=$({},L,s);let n;"composed"in CustomEvent.prototype?n=new CustomEvent(e,i):((n=document.createEvent("CustomEvent")).initCustomEvent(e,i.bubbles,i.cancelable,i.detail),Object.defineProperty(n,"composed",{value:i.composed})),t.dispatchEvent(n)}(this,t,{detail:s})}),this.triggerUpdate&&this.triggerUpdate()}})}),super.observedAttributes}}})(((t=HTMLElement)=>B(H(U(X(nt(t||HTMLElement))))))(((t=HTMLElement)=>(class extends t{renderer(t,e){((t,e,s)=>{let i=z.get(e);void 0===i&&(r(e,e.firstChild),z.set(e,i=new x(Object.assign({templateFactory:A},s))),i.appendInto(e)),i.setValue(t),i.commit()})(e(),t)}}))()));function rt(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function lt(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class ct extends ot{constructor(...t){super(...t),lt(this,"state",{value:""}),lt(this,"handleInput",t=>{this.state={value:t.target.value}}),lt(this,"handleSubmit",t=>{t.preventDefault(),this.state.value&&(this.onSubmit({value:this.state.value}),this.state={value:""})})}render({handleInput:t,handleSubmit:e}){return j`
            <style>
                :host {
                    display: block;
                }

                form {
                    position: relative;
                    font-size: 24px;
                    border-bottom: 1px solid #ededed;
                }

                input {
                    padding: 16px 16px 16px 60px;
                    border: none;
                    background: rgba(0, 0, 0, 0.003);
                    position: relative;
                    margin: 0;
                    width: 100%;
                    font-size: 24px;
                    font-family: inherit;
                    font-weight: inherit;
                    line-height: 1.4em;
                    border: 0;
                    outline: none;
                    color: inherit;
                    padding: 6px;
                    border: 1px solid #ccc;
                    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
                    box-sizing: border-box;
                }
            </style>
            <form @submit="${e}">
                <input
                    value="${this.state.value}"
                    type="text"
                    placeholder="What needs to be done?"
                    @input="${t}"
                />
            </form>
        `}}function ht(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}lt(ct,"events",["submit"]);class at extends ot{constructor(...t){super(...t),ht(this,"handleCheck",t=>{this.onCheck({index:this.index,value:t.target.checked})}),ht(this,"handleRemove",()=>{this.onRemove({index:this.index})})}render({checked:t,handleCheck:e,handleRemove:s}){return j`
      <style>
        :host {
          display: block;
        }

        li {
          font-size: 24px;
          display: block;
          position: relative;
          border-bottom: 1px solid #ededed;
        }

        li input {
          text-align: center;
          width: 40px;
          /* auto, since non-WebKit browsers doesn't support input styling */
          height: auto;
          position: absolute;
          top: 9px;
          bottom: 0;
          margin: auto 0;
          border: none;
          /* Mobile Safari */
          -webkit-appearance: none;
          appearance: none;
        }

        li input:after {
          content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
        }

        li input:checked:after {
          content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
        }

        li label {
          white-space: pre;
          word-break: break-word;
          padding: 15px 60px 15px 15px;
          margin-left: 45px;
          display: block;
          line-height: 1.2;
          transition: color 0.4s;
        }

        li.completed label {
          color: #d9d9d9;
          text-decoration: line-through;
        }

        li button,
        li input[type="checkbox"] {
          outline: none;
        }

        li button {
          margin: 0;
          padding: 0;
          border: 0;
          background: none;
          font-size: 100%;
          vertical-align: baseline;
          font-family: inherit;
          font-weight: inherit;
          color: inherit;
          -webkit-appearance: none;
          appearance: none;
          -webkit-font-smoothing: antialiased;
          -moz-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        li button {
          position: absolute;
          top: 0;
          right: 10px;
          bottom: 0;
          width: 40px;
          height: 40px;
          margin: auto 0;
          font-size: 30px;
          color: #cc9a9a;
          margin-bottom: 11px;
          transition: color 0.2s ease-out;
        }

        li button:hover {
          color: #af5b5e;
        }
      </style>
      <li class="${t?"completed":""}">
        <input type="checkbox" ?checked="${t}" @change="${e}" />
        <label><slot></slot></label>
        <button @click="${s}">x</button>
      </li>
    `}}ht(at,"events",["check","remove"]),ht(at,"props",{checked:it.boolean,index:it.number}),customElements.define("my-todo",class extends ot{constructor(...t){super(...t),rt(this,"state",{list:[{text:"my initial todo",checked:!1},{text:"Learn about Web Components",checked:!0}]}),rt(this,"handleCheck",t=>{this.state.list[t.detail.index].checked=t.detail.value,this.state=this.state}),rt(this,"handleRemove",t=>{this.state={list:this.state.list.filter((e,s)=>s!==t.detail.index)}}),rt(this,"handleSubmit",t=>{this.state={list:[...this.state.list,{text:t.detail.value,checked:!1}]}})}render({handleCheck:t,handleRemove:e,handleSubmit:s}){return j`
            <style>
                :host {
                    display: block;
                }

                h1 {
                    font-size: 60px;
                    font-weight: 100;
                    text-align: center;
                    color: rgba(175, 47, 47, 0.15);
                }

                section {
                    background: #fff;
                    margin: 130px 0 40px 0;
                    position: relative;
                    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                        0 25px 50px 0 rgba(0, 0, 0, 0.1);
                }

                #list-container {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    border-top: 1px solid #e6e6e6;
                }
            </style>
            <h1>SkateJS & lit-html</h1>
            <section>
                <todo-input @submit="${s}"></todo-input>
                <ul id="list-container">
                    ${this.state.list.map(({checked:s,text:i},n)=>j`
                                <todo-item
                                    .checked="${s}"
                                    .index="${n}"
                                    @check="${t}"
                                    @remove="${e}"
                                    >${i}</todo-item
                                >
                            `)}
                </ul>
            </section>
        `}}),customElements.define("todo-input",ct),customElements.define("todo-item",at)}]);