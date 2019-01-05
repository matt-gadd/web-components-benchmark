var atomicoApp=function(t,e){"use strict";function o(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}var i=":host{display:block}form{border-bottom:1px solid #ededed}form,input{position:relative;font-size:24px}input{background:rgba(0,0,0,.003);margin:0;width:100%;font-family:inherit;font-weight:inherit;line-height:1.4em;outline:none;color:inherit;padding:6px;border:1px solid #ccc;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-sizing:border-box}";o(i);var n=':host,li{display:block}li{font-size:24px;position:relative;border-bottom:1px solid #ededed}li input{text-align:center;width:40px;height:auto;position:absolute;top:9px;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;appearance:none;padding:0;box-shadow:none}li input:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\')}li input:checked:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\')}li label{white-space:pre;word-break:break-word;padding:15px 60px 15px 15px;margin-left:45px;display:block;line-height:1.2;transition:color .4s}li.completed label{color:#d9d9d9;text-decoration:line-through}li button,li input[type=checkbox]{outline:none}li button{margin:0;padding:0;border:0;background:none;font-size:100%;vertical-align:baseline;font-family:inherit;font-weight:inherit;color:inherit;-webkit-appearance:none;appearance:none;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;font-smoothing:antialiased;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;font-size:30px;color:#cc9a9a;margin:auto 0 11px;transition:color .2s ease-out}li button:hover{color:#af5b5e}';o(n);var a=":host{display:block}h1{font-size:70px;line-height:70px;font-weight:100;text-align:center;color:rgba(175,47,47,.15)}section{background:#fff;margin:30px 0 40px;position:relative;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}#list-container{margin:0;padding:0;list-style:none;border-top:1px solid #e6e6e6}";o(a);class r extends e.Element{constructor(){super(),this.attachShadow({mode:"open"}),this.state.list=[{text:"my initial todo",checked:!1},{text:"Learn about Web Components",checked:!0}]}render(){var t=this,o=this.state.list;return void 0===o&&(o=[]),e.h("div",null,e.h("h1",null,"Todos Atomico"),e.h("section",null,e.h("style",null,a),e.h("todo-input",{placeholder:"What needs to be done?",create:function(e){var i=e.detail;t.setState({list:o.concat({text:i.text,checked:!1})})}}),e.h("div",{id:"list-container"},o.map(function(i,n){var a=i.text,r=i.checked;return e.h("todo-item",{text:a,checked:r,remove:function(){t.setState({list:o.filter(function(t,e){return e!==n})})},toggle:function(){t.setState({list:o.map(function(t,e){return e===n?Object.assign({},t,{checked:!t.checked}):t})})}})}))))}}return customElements.define("todo-item",class extends e.Element{constructor(){super(),this.attachShadow({mode:"open"})}static get props(){return["text","checked"]}render(){var t=this;return e.h("li",{class:this.props.checked?"completed":""},e.h("style",null,n),e.h("input",{type:"checkbox",change:function(){t.dispatch("toggle")},checked:this.props.checked}),e.h("label",null,this.props.text),e.h("button",{click:function(){t.dispatch("remove")}},"x"))}}),customElements.define("todo-input",class extends e.Element{constructor(){super(),this.attachShadow({mode:"open"})}static get props(){return["placeholder"]}render(){var t=this;return e.h("form",{submit:function(e){e.preventDefault(),t.dispatch("create",{text:e.target.task.value}),e.target.reset()}},e.h("style",null,i),e.h("input",{name:"task",type:"text",placeholder:this.props.placeholder}))}}),customElements.define("my-todo",r),t.TAG_TODO="my-todo",t.TAG_ITEM="todo-item",t.TAG_INPUT="todo-input",t.default=r,t}({},atomico);
