!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function i(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.dispatchEvent(new CustomEvent(e,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}({bubbles:!1},n)))}function c(t,e){var n=window.ShadyCSS;return n&&!n.nativeShadow?t(n):e}function u(t){var e=String(t.tagName).toLowerCase();return"<".concat(e,">")}n.r(e);var a="ActiveXObject"in window;function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=function(t){return t},s=function(t){if("object"!==f(t))throw TypeError("[property] Argument is not an object: ".concat("undefined"==typeof v?"undefined":f(v)));return t&&Object.freeze(t)};function d(t,e){var n=f(t),o=l;switch(n){case"string":o=String;break;case"number":o=Number;break;case"boolean":o=Boolean;break;case"function":t=(o=t)();break;case"object":t&&Object.freeze(t),o=s}return{get:function(e){return arguments.length>1&&void 0!==arguments[1]?arguments[1]:t},set:function(t,e,n){return o(e,n)},connect:"object"!==n&&"undefined"!==n?function(n,o,i){if(n[o]===t){var c=r(o);if(n.hasAttribute(c)){var u=n.getAttribute(c);n[o]=""===u||u}}return e&&e(n,o,i)}:e}}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var y=new WeakMap,h=new WeakMap,m=1e3/60,g=[];function w(t){var e=t.composedPath()[0];e===t.currentTarget&&(g[0]||requestAnimationFrame(function(){return function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(n&&performance.now()-n>m)requestAnimationFrame(function(){return t(e)});else{var o=g[e],r=performance.now();if(o){if(y.has(o)){var i=y.get(o),u=h.get(o);try{var a=o[i];a!==u&&(h.set(o,a),a(),u||c(function(t){return t.styleElement(o)}))}catch(n){throw t(e+1,r),n}}t(e+1,r)}else c(function(t){return g.forEach(function(e){return t.styleSubtree(e)})}),g=[]}}()}),-1===g.indexOf(e)&&g.push(e))}function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"!=typeof t)throw TypeError("[render] The first argument must be a function: ".concat(b(t)));var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){p(t,e,n[e])})}return t}({shadowRoot:!0},e);return{get:function(e){var o=t(e);return function(){return o(e,n.shadowRoot?e.shadowRoot:e)}},connect:function(t,e){if(y.has(t))throw Error("[render] Render factory already used in '".concat(y.get(t),"' key"));if(n.shadowRoot&&!t.shadowRoot){var o={mode:"open"};"object"===b(n.shadowRoot)&&Object.assign(o,n.shadowRoot),t.attachShadow(o)}return t.addEventListener("@invalidate",w),y.set(t,e),function(){t.removeEventListener("@invalidate",w),y.delete(t)}}}}var x=new WeakMap;function k(t,e){var n=x.get(t);n||(n=new Map,x.set(t,n));var o=n.get(e);return o||(o={target:t,key:e,value:void 0,deps:new Set,state:1,checksum:0},n.set(e,o)),o}function j(t){var e=t.state,n=t.deps,o=e;return n.forEach(function(t){t.target[t.key],o+=t.state}),o}var O=null;function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function N(t,e){return!e||"object"!==A(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t){var e="function"==typeof Map?new Map:void 0;return(T=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return M(t,arguments,W(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),C(o,t)})(t)}function M(t,e,n){return(M=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&C(r,n.prototype),r}).apply(null,arguments)}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function W(t){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t){i(t,"@invalidate",{bubbles:!0,composed:!0})}var B=function(t,e){return e};function P(t,e){t.hybrids=e,t.connects=[],Object.keys(e).forEach(function(n){var o=e[n],r=A(o);"function"===r?o="render"===n?S(o):{get:o}:null!==o&&"object"===r&&("object"!==r||o.get||o.set)||(o=d(o)),o.get=o.get||B,Object.defineProperty(t.prototype,n,{get:function(){return function(t,e,n){var o=k(t,e);if(O===o)throw O=null,Error("[cache] Circular '".concat(e,"' get invocation in '").concat(u(t),"'"));O&&O.deps.add(o);var r=O;if(O=o,o.checksum&&o.checksum===j(o))return O=r,o.value;o.deps.clear();try{var i=n(t,o.value);i!==o.value&&(o.state+=1,o.value=i),o.checksum=j(o),O=r}catch(t){throw O=null,t}return o.value}(this,n,o.get)},set:o.set&&function(t){var e=this;!function(t,e,n,o,r){if(O)throw O=null,Error("[cache] Try to set '".concat(e,"' of '").concat(u(t),"' in get call"));var i=k(t,e),c=n(t,o,i.value);c!==i.value&&(i.state+=1,i.value=c,r())}(this,n,o.set,t,function(){return z(e)})},enumerable:!0,configurable:!1}),o.connect&&t.connects.push(function(t){return o.connect(t,n,function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&function(t,e,n){if(O)throw O=null,Error("[cache] Try to invalidate '".concat(e,"' in '").concat(u(t),"' get call"));var o=k(t,e);o.checksum=0,n&&(o.value=void 0)}(t,n),z(t)})})})}var F=new WeakMap;function D(t,e){var n=A(e);if("object"!==n&&"function"!==n)throw TypeError("[define] Invalid second argument. It must be an object or a function");var o=window.customElements.get(t);if("function"===n)return o!==e?window.customElements.define(t,e):o;if(o){if(o.hybrids===e)return o;throw Error("[define] Element '".concat(t,"' already defined"))}var r=function(e){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),N(this,W(n).apply(this,arguments))}var o,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(n,T(HTMLElement)),o=n,i=[{key:"name",get:function(){return t}}],(r=[{key:"connectedCallback",value:function(){var t=this,e=this.constructor.connects.reduce(function(e,n){var o=n(t);return o&&e.add(o),e},new Set);F.set(this,e),z(this)}},{key:"disconnectedCallback",value:function(){F.get(this).forEach(function(t){return t()})}}])&&E(o.prototype,r),i&&E(o,i),n}();return P(r,e),customElements.define(t,r),r}function R(t){return Object.keys(t).reduce(function(e,n){var o,i=r(o=(o=n)[0].toLowerCase()+o.slice(1));return e[n]=D(i,t[n]),e},{})}function $(){return"object"===A(arguments.length<=0?void 0:arguments[0])?R(arguments.length<=0?void 0:arguments[0]):D.apply(void 0,arguments)}var H=new WeakMap;document.addEventListener("@invalidate",function(t){var e=H.get(t.composedPath()[0]);e&&e.forEach(function(t){return t()})});var K=new WeakMap,Z={get:function(t,e){return K.has(t)?K.get(t):(void 0!==e&&K.set(t,e),e)},set:function(t,e){return K.set(t,e),e}};function J(t){for(var e;t&&(e=Z.get(t))&&e.endNode;)t=e.endNode;return t}function Y(t){var e=Z.get(t),n=e.startNode;if(n)for(var o=n,r=J(e.endNode).nextSibling;o;){var i=o.nextSibling;o.parentNode.removeChild(o),o=i!==r&&i}}var X=new WeakMap;function I(t,e,n){var o=X.get(e),r=n.map(function(t,e){return{id:Object.prototype.hasOwnProperty.call(t,"id")?t.id:e,value:t,placeholder:null,available:!0}});if(X.set(e,r),o){var i=new Set;r.forEach(function(t){return i.add(t.id)}),o=o.filter(function(t){return!!i.has(t.id)||(Y(t.placeholder),t.placeholder.parentNode.removeChild(t.placeholder),!1)})}var c=e,u=n.length-1,a=Z.get(e);r.forEach(function(e,n){var r,i=o&&o.find(function(t){return t.available&&t.id===e.id});i?(i.available=!1,(r=i.placeholder).previousSibling!==c&&function(t,e){var n=Z.get(t),o=n.startNode,r=J(n.endNode);e.parentNode.insertBefore(t,e.nextSibling);for(var i=t,c=o;c;){var u=c.nextSibling;i.parentNode.insertBefore(c,i.nextSibling),i=c,c=u!==r.nextSibling&&u}}(r,c),i.value!==e.value&&Q(t,r,e.value)):(r=document.createTextNode(""),c.parentNode.insertBefore(r,c.nextSibling),Q(t,r,e.value)),c=J(Z.get(r).endNode||r),0===n&&(a.startNode=r),n===u&&(a.endNode=c),e.placeholder=r}),o&&o.forEach(function(t){t.available&&(Y(t.placeholder),t.placeholder.parentNode.removeChild(t.placeholder))})}function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Q(t,e,n){var o=Array.isArray(n)?"array":L(n),r=Z.get(e,{});switch(r.type!==o&&(Y(e),r=Z.set(e,{type:o}),""!==e.textContent&&(e.textContent="")),o){case"function":n(t,e);break;case"array":I(t,e,n);break;default:e.textContent="number"===o||n?n:""}}function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var G=new WeakMap;function V(t){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var _=new WeakMap;function U(t,e,n){var o=_.get(e)||new Set,r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set;return Array.isArray(t)?t.forEach(function(t){return e.add(t)}):null!==t&&"object"===V(t)?Object.keys(t).forEach(function(n){return t[n]&&e.add(n)}):e.add(t),e}(n);_.set(e,r),r.forEach(function(t){e.classList.add(t),o.delete(t)}),o.forEach(function(t){e.classList.remove(t)})}function tt(t){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var et=new WeakMap;function nt(t,e,n){if(null===n||"object"!==tt(n))throw TypeError("Style value must be an object instance in ".concat(u(e),":"),n);var o=et.get(e)||new Map,i=Object.keys(n).reduce(function(t,i){var c=r(i),u=n[i];return u||0===u?e.style.setProperty(c,u):e.style.removeProperty(c),t.set(c,u),o.delete(c),t},new Map);o.forEach(function(t,n){e.style[n]=""}),et.set(e,i)}function ot(t,e,n){if("on"===e.substr(0,2))return function(t){return function(e,n,o,r){if(r&&n.removeEventListener(t,G.get(r),void 0!==r.options&&r.options),o){if("function"!=typeof o)throw Error("Event listener must be a function: ".concat(q(o)));G.set(o,o.bind(null,e)),n.addEventListener(t,G.get(o),void 0!==o.options&&o.options)}}}(e.substr(2));switch(t){case"class":return U;case"style":return nt;default:return function(o,r,i){if(n||r instanceof SVGElement||!(e in r))if(!1===i||null==i)r.removeAttribute(t);else{var c=!0===i?"":String(i);r.setAttribute(t,c)}else r[e]!==i&&(r[e]=i)}}}function rt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(o=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==u.return||u.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function it(t){return(it="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var ct=Date.now(),ut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"{{h-".concat(ct,"-").concat(t,"}}")},at=ut("(\\d+)"),ft=new RegExp("^".concat(at,"$")),lt=new RegExp(at,"g"),st="--".concat(ct,"--"),dt=new RegExp(st,"g"),pt=new WeakMap;var bt="object"===it(window.ShadyDOM)&&window.ShadyDOM.inUse?function(t){var e;return{get currentNode(){return e},nextNode:function(){return!!(e=void 0===e?t.childNodes[0]:e.childNodes.length?e.childNodes[0]:e.nextSibling?e.nextSibling:e.parentNode.nextSibling)}}}:function(t){return document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1)},yt=document.createElement("div");function vt(t,e){var n=document.createElement("template"),o=[],r=function(t){var e=t.reduce(function(e,n,o){return 0===o?n:t.slice(o).join("").match(/\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)?"".concat(e,"\x3c!--").concat(ut(o-1),"--\x3e").concat(n):e+ut(o-1)+n},"");return a?e.replace(/style\s*=\s*(["][^"]+["]|['][^']+[']|[^\s"'<>\/]+)/g,function(t){return"".concat(st).concat(t)}):e}(t);if(e&&(r="<svg>".concat(r,"</svg>")),a?n.innerHTML=r:(yt.innerHTML="<template>".concat(r,"</template>"),n.content.appendChild(yt.children[0].content)),e){var i=n.content.firstChild;n.content.removeChild(i),Array.from(i.childNodes).forEach(function(t){return n.content.appendChild(t)})}!function(t){for(var e,n=document.createNodeIterator(t,NodeFilter.SHOW_COMMENT,null,!1);e=n.nextNode();)ft.test(e.textContent)&&(e.parentNode.insertBefore(document.createTextNode(e.textContent),e),e.parentNode.removeChild(e))}(n.content);for(var u=bt(n.content),f=0,l=function(){var n=u.currentNode;if(n.nodeType===Node.TEXT_NODE){var r=n.textContent;if(!r.match(ft)){var i=r.match(lt);if(i){var c=n;i.reduce(function(t,e){var n=rt(t.pop().split(e),2),o=n[0],r=n[1];return o&&t.push(o),t.push(e),r&&t.push(r),t},[r]).forEach(function(t,e){0===e?c.textContent=t:c=c.parentNode.insertBefore(document.createTextNode(t),c.nextSibling)})}}var l=n.textContent.match(ft);l&&(a||(n.textContent=""),o[l[1]]=[f,Q])}else n.nodeType===Node.ELEMENT_NODE&&Array.from(n.attributes).forEach(function(r){var i=r.value.trim(),c=a?r.name.replace(st,""):r.name,u=i.match(ft);if(u){var l=t[u[1]].replace(/\s*=\s*['"]*$/g,"").split(" ").pop();o[u[1]]=[f,ot(c,l,e)],n.removeAttribute(r.name)}else{var s=i.match(lt);if(s){var d="attr__".concat(c);s.forEach(function(t,e){var n=rt(t.match(ft),2)[1];o[n]=[f,function(n,o,r){var u=Z.get(o,{});u[d]=(u[d]||i).replace(t,null==r?"":r),1!==s.length&&e+1!==s.length||(o.setAttribute(c,u[d]),u[d]=void 0)}]}),r.value="",a&&c!==r.name&&(n.removeAttribute(r.name),n.setAttribute(c,""))}}});f+=1};u.nextNode();)l();return function(t,e,r){var i=Z.get(e,{type:"function"});if(n!==i.template){i.template&&Y(e);var u=document.importNode(function(t,e){return e?c(function(n){var o=pt.get(t);o||(o=new Map,pt.set(t,o));var r=o.get(e);if(!r){(r=document.createElement("template")).content.appendChild(t.content.cloneNode(!0)),o.set(e,r);var i=r.content.querySelectorAll("style");Array.from(i).forEach(function(t){for(var e=t.childNodes.length+1,n=0;n<e;n+=1)t.parentNode.insertBefore(document.createTextNode(ut()),t)}),n.prepareTemplate(r,e.toLowerCase())}return r},t):t}(n,t.tagName).content,!0),f=bt(u),l=o.slice(0),s=0,d=l.shift(),p=[];for(Object.assign(i,{template:n,markers:p});f.nextNode();){var b=f.currentNode;for(b.nodeType===Node.TEXT_NODE&&(ft.test(b.textContent)?b.textContent="":a&&(b.textContent=b.textContent.replace(dt,"")));d&&d[0]===s;)p.push([b,d[1]]),d=l.shift();s+=1}var y=Array.from(u.childNodes);if(i.startNode=y[0],i.endNode=y[y.length-1],e.nodeType===Node.TEXT_NODE){var v=e;y.forEach(function(t){e.parentNode.insertBefore(t,v.nextSibling),v=t})}else e.appendChild(u)}i.markers.forEach(function(e,n){var o=rt(e,2),c=o[0],u=o[1];i.lastArgs&&i.lastArgs[n]===r[n]||u(t,c,r[n],i.lastArgs?i.lastArgs[n]:void 0)}),i.lastArgs=r}}var ht=new WeakMap;function mt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;return function(o,r){var i;e&&(i=setTimeout(function(){i=void 0,requestAnimationFrame(function(){e(o,r)})},n)),ht.set(r,t),t.then(function(e){i&&clearTimeout(i),ht.get(r)===t&&(e(o,r),ht.set(r,null))})}}function gt(t){return $(t),this}function wt(t){return this.id=t,this}var St=new Map;function xt(t,e,n){return Object.assign(function(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,i=function(t,e){return"".concat(e?"svg:":"").concat(t.join(ut()))}(t,n),c=St.get(i);c||(c=vt(t,n),St.set(i,c)),c(o,r,e)},{define:gt,key:wt})}function kt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return xt(t,n)}Object.assign(kt,{resolve:mt}),Object.assign(function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return xt(t,n,!0)},{resolve:mt});$("my-todo",{list:[{id:0,text:"my initial todo",checked:!1},{id:1,text:"Learn about Web Components",checked:!0}],render:({list:t})=>kt`
    <style>
    h1 {
        font-size: 100px;
        font-weight: 100;
        text-align: center;
        color: rgba(175, 47, 47, 0.15);
    }
    
    section {
        background: #fff;
        margin: 130px 0 40px 0;
        position: relative;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    }
    
    #list-container {
        margin: 0;
        padding: 0;
        list-style: none;
        border-top: 1px solid #e6e6e6;
    }
    </style>
    <h1>Todos Hybrids</h1>
    <todo-input onsubmit=${(t,e)=>{t.list=[...t.list,{id:t.list.length,text:e.detail,checked:!1}]}}></todo-input>
    <ul id="list-container">
        ${t.map((t,e)=>kt`<todo-item text="${t.text}" checked="${t.checked}" index="${e}" onremoved="${(t,e)=>{t.list=[...t.list.slice(0,e.detail),...t.list.slice(e.detail+1)]}}" onchecked=${(t,e)=>{const n=t.list[e.detail],o=t.list.slice(0);o[e.detail]=Object.assign({},n,{checked:!n.checked}),t.list=[...o]}}></todo-item>`)}
    </ul>
    `});$("todo-input",{val:"",render:()=>kt`
    <style>
    #new-todo-form {
        position: relative;
        font-size: 24px;
        border-bottom: 1px solid #ededed;
    }

    #new-todo {
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
        border: 1px solid #CCC;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
    }
</style>
<form id="new-todo-form" onsubmit="${(t,e)=>{e.preventDefault(),i(t,"submit",{detail:t.val});let n=t.shadowRoot.querySelector("#new-todo");n.value="",n.blur()}}">
    <input id="new-todo" type="text" placeholder="What needs to be done?" oninput="${(t,e)=>{t.val=e.target.value}}"/>
</form>
      `});$("todo-item",{text:d("text"),checked:d("checked"),index:d("index"),render:({text:t})=>kt`
    <style>
    :host {
        display: block;
    }

    li.item {
        font-size: 24px;
        display: block;
        position: relative;
        border-bottom: 1px solid #ededed;
    }

    li.item input {
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

    li.item input:after {
        content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
    }

    li.item input:checked:after {
        content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
    }

    li.item label {
        white-space: pre;
        word-break: break-word;
        padding: 15px 60px 15px 15px;
        margin-left: 45px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s;
    }

    li.item.completed label {
        color: #d9d9d9;
        text-decoration: line-through;
    }

    li.item button,
        li.item input[type="checkbox"] {
        outline: none;
    }

    li.item button {
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

    li.item .destroy {
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

    li.item .destroy:hover {
        color: #af5b5e;
    }
</style>
<li class="item">
    <input type="checkbox" onchange="${(t,e)=>{i(t,"checked",{detail:parseInt(t.index)})}}">
    <label>${t}</label>
    <button class="destroy" onclick="${(t,e)=>{i(t,"removed",{detail:parseInt(t.index)})}}">x</button>
</li>`})}]);