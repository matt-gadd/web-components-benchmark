function VNode(){}function getGlobal(){if(typeof global!=="object"||!global||global.Math!==Math||global.Array!==Array){return self||window||global||function(){return this}()}return global}var options={store:null,root:getGlobal()};var stack=[];var EMPTY_CHILDREN=[];function h(nodeName,attributes){var children=EMPTY_CHILDREN,lastSimple,child,simple,i;for(i=arguments.length;i-- >2;){stack.push(arguments[i])}if(attributes&&attributes.children!=null){if(!stack.length)stack.push(attributes.children);delete attributes.children}while(stack.length){if((child=stack.pop())&&child.pop!==undefined){for(i=child.length;i--;){stack.push(child[i])}}else{if(typeof child==="boolean")child=null;if(simple=typeof nodeName!=="function"){if(child==null)child="";else if(typeof child==="number")child=String(child);else if(typeof child!=="string")simple=false}if(simple&&lastSimple){children[children.length-1]+=child}else if(children===EMPTY_CHILDREN){children=[child]}else{children.push(child)}lastSimple=simple}}var p=new VNode;p.nodeName=nodeName;p.children=children;p.attributes=attributes==null?undefined:attributes;p.key=attributes==null?undefined:attributes.key;if(options.vnode!==undefined)options.vnode(p);return p}(function(){if(window.Reflect===undefined||window.customElements===undefined||window.customElements.hasOwnProperty("polyfillWrapFlushCallback")){return}var BuiltInHTMLElement=HTMLElement;window.HTMLElement=function HTMLElement(){return Reflect.construct(BuiltInHTMLElement,[],this.constructor)};HTMLElement.prototype=BuiltInHTMLElement.prototype;HTMLElement.prototype.constructor=HTMLElement;Object.setPrototypeOf(HTMLElement,BuiltInHTMLElement)})();function cssToDom(css){var node=document.createElement("style");node.textContent=css;return node}function npn(str){return str.replace(/-(\w)/g,function($,$1){return $1.toUpperCase()})}function extend(obj,props){for(var i in props){obj[i]=props[i]}return obj}function applyRef(ref,value){if(ref!=null){if(typeof ref=="function")ref(value);else ref.current=value}}var defer=typeof Promise=="function"?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function isArray(obj){return Object.prototype.toString.call(obj)==="[object Array]"}function nProps(props){if(!props||isArray(props))return{};var result={};Object.keys(props).forEach(function(key){result[key]=props[key].value});return result}var IS_NON_DIMENSIONAL=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function isSameNodeType(node,vnode,hydrating){if(typeof vnode==="string"||typeof vnode==="number"){return node.splitText!==undefined}if(typeof vnode.nodeName==="string"){return!node._componentConstructor&&isNamedNode(node,vnode.nodeName)}return hydrating||node._componentConstructor===vnode.nodeName}function isNamedNode(node,nodeName){return node.normalizedNodeName===nodeName||node.nodeName.toLowerCase()===nodeName.toLowerCase()}function createNode(nodeName,isSvg){var node=isSvg?document.createElementNS("http://www.w3.org/2000/svg",nodeName):document.createElement(nodeName);node.normalizedNodeName=nodeName;return node}function removeNode(node){var parentNode=node.parentNode;if(parentNode)parentNode.removeChild(node)}function setAccessor(node,name,old,value,isSvg){if(name==="className")name="class";if(name==="key");else if(name==="ref"){applyRef(old,null);applyRef(value,node)}else if(name==="class"&&!isSvg){node.className=value||""}else if(name==="style"){if(!value||typeof value==="string"||typeof old==="string"){node.style.cssText=value||""}if(value&&typeof value==="object"){if(typeof old!=="string"){for(var i in old){if(!(i in value))node.style[i]=""}}for(var i in value){node.style[i]=typeof value[i]==="number"&&IS_NON_DIMENSIONAL.test(i)===false?value[i]+"px":value[i]}}}else if(name==="dangerouslySetInnerHTML"){if(value)node.innerHTML=value.__html||""}else if(name[0]=="o"&&name[1]=="n"){var useCapture=name!==(name=name.replace(/Capture$/,""));name=name.toLowerCase().substring(2);if(value){if(!old){node.addEventListener(name,eventProxy,useCapture);if(name=="tap"){node.addEventListener("touchstart",touchStart,useCapture);node.addEventListener("touchend",touchEnd,useCapture)}}}else{node.removeEventListener(name,eventProxy,useCapture);if(name=="tap"){node.removeEventListener("touchstart",touchStart,useCapture);node.removeEventListener("touchend",touchEnd,useCapture)}}(node._listeners||(node._listeners={}))[name]=value}else if(name!=="list"&&name!=="type"&&!isSvg&&name in node){try{node[name]=value==null?"":value}catch(e){}if((value==null||value===false)&&name!="spellcheck")node.removeAttribute(name)}else{var ns=isSvg&&name!==(name=name.replace(/^xlink:?/,""));if(value==null||value===false){if(ns)node.removeAttributeNS("http://www.w3.org/1999/xlink",name.toLowerCase());else node.removeAttribute(name)}else if(typeof value!=="function"){if(ns){node.setAttributeNS("http://www.w3.org/1999/xlink",name.toLowerCase(),value)}else{node.setAttribute(name,value)}}}}function eventProxy(e){return this._listeners[e.type](options.event&&options.event(e)||e)}function touchStart(e){this.___touchX=e.touches[0].pageX;this.___touchY=e.touches[0].pageY;this.___scrollTop=document.body.scrollTop}function touchEnd(e){if(Math.abs(e.changedTouches[0].pageX-this.___touchX)<30&&Math.abs(e.changedTouches[0].pageY-this.___touchY)<30&&Math.abs(document.body.scrollTop-this.___scrollTop)<30){this.dispatchEvent(new CustomEvent("tap",{detail:e}))}}var diffLevel=0;var isSvgMode=false;var hydrating=false;function diff(dom,vnode,context,mountAll,parent,componentRoot){var ret;if(!diffLevel++){isSvgMode=parent!=null&&parent.ownerSVGElement!==undefined;hydrating=dom!=null&&!("__omiattr_"in dom)}if(isArray(vnode)){ret=[];var parentNode=null;if(isArray(dom)){var domLength=dom.length;var vnodeLength=vnode.length;var maxLength=domLength>=vnodeLength?domLength:vnodeLength;parentNode=dom[0].parentNode;for(var i=0;i<maxLength;i++){var ele=idiff(dom[i],vnode[i],context,mountAll,componentRoot);ret.push(ele);if(i>domLength-1){parentNode.appendChild(ele)}}}else{vnode.forEach(function(item){var ele=idiff(dom,item,context,mountAll,componentRoot);ret.push(ele);parent&&parent.appendChild(ele)})}}else{if(isArray(dom)){ret=idiff(dom[0],vnode,context,mountAll,componentRoot)}else{ret=idiff(dom,vnode,context,mountAll,componentRoot)}if(parent&&ret.parentNode!==parent)parent.appendChild(ret)}if(!--diffLevel){hydrating=false}return ret}function idiff(dom,vnode,context,mountAll,componentRoot){if(dom&&vnode&&dom.props){dom.props.children=vnode.children}var out=dom,prevSvgMode=isSvgMode;if(vnode==null||typeof vnode==="boolean")vnode="";if(typeof vnode==="string"||typeof vnode==="number"){if(dom&&dom.splitText!==undefined&&dom.parentNode&&(!dom._component||componentRoot)){if(dom.nodeValue!=vnode){dom.nodeValue=vnode}}else{out=document.createTextNode(vnode);if(dom){if(dom.parentNode)dom.parentNode.replaceChild(out,dom);recollectNodeTree(dom,true)}}out["__omiattr_"]=true;return out}var vnodeName=vnode.nodeName;isSvgMode=vnodeName==="svg"?true:vnodeName==="foreignObject"?false:isSvgMode;vnodeName=String(vnodeName);if(!dom||!isNamedNode(dom,vnodeName)){out=createNode(vnodeName,isSvgMode);if(dom){while(dom.firstChild){out.appendChild(dom.firstChild)}if(dom.parentNode)dom.parentNode.replaceChild(out,dom);recollectNodeTree(dom,true)}}var fc=out.firstChild,props=out["__omiattr_"],vchildren=vnode.children;if(props==null){props=out["__omiattr_"]={};for(var a=out.attributes,i=a.length;i--;){props[a[i].name]=a[i].value}}if(!hydrating&&vchildren&&vchildren.length===1&&typeof vchildren[0]==="string"&&fc!=null&&fc.splitText!==undefined&&fc.nextSibling==null){if(fc.nodeValue!=vchildren[0]){fc.nodeValue=vchildren[0]}}else if(vchildren&&vchildren.length||fc!=null){if(!(out.constructor.is=="WeElement"&&out.constructor.noSlot)){innerDiffNode(out,vchildren,context,mountAll,hydrating||props.dangerouslySetInnerHTML!=null)}}diffAttributes(out,vnode.attributes,props,vnode.children);if(out.props){out.props.children=vnode.children}isSvgMode=prevSvgMode;return out}function innerDiffNode(dom,vchildren,context,mountAll,isHydrating){var originalChildren=dom.childNodes,children=[],keyed={},keyedLen=0,min=0,len=originalChildren.length,childrenLen=0,vlen=vchildren?vchildren.length:0,j,c,f,vchild,child;if(len!==0){for(var i=0;i<len;i++){var _child=originalChildren[i],props=_child["__omiattr_"],key=vlen&&props?_child._component?_child._component.__key:props.key:null;if(key!=null){keyedLen++;keyed[key]=_child}else if(props||(_child.splitText!==undefined?isHydrating?_child.nodeValue.trim():true:isHydrating)){children[childrenLen++]=_child}}}if(vlen!==0){for(var i=0;i<vlen;i++){vchild=vchildren[i];child=null;var key=vchild.key;if(key!=null){if(keyedLen&&keyed[key]!==undefined){child=keyed[key];keyed[key]=undefined;keyedLen--}}else if(!child&&min<childrenLen){for(j=min;j<childrenLen;j++){if(children[j]!==undefined&&isSameNodeType(c=children[j],vchild,isHydrating)){child=c;children[j]=undefined;if(j===childrenLen-1)childrenLen--;if(j===min)min++;break}}}child=idiff(child,vchild,context,mountAll);f=originalChildren[i];if(child&&child!==dom&&child!==f){if(f==null){dom.appendChild(child)}else if(child===f.nextSibling){removeNode(f)}else{dom.insertBefore(child,f)}}}}if(keyedLen){for(var i in keyed){if(keyed[i]!==undefined)recollectNodeTree(keyed[i],false)}}while(min<=childrenLen){if((child=children[childrenLen--])!==undefined)recollectNodeTree(child,false)}}function recollectNodeTree(node,unmountOnly){if(node["__omiattr_"]!=null&&node["__omiattr_"].ref)node["__omiattr_"].ref(null);if(unmountOnly===false||node["__omiattr_"]==null){removeNode(node)}removeChildren(node)}function removeChildren(node){node=node.lastChild;while(node){var next=node.previousSibling;recollectNodeTree(node,true);node=next}}function diffAttributes(dom,attrs,old,children){var name;var update=false;var isWeElement=dom.update;var oldClone;if(dom.receiveProps){oldClone=Object.assign({},old)}for(name in old){if(!(attrs&&attrs[name]!=null)&&old[name]!=null){setAccessor(dom,name,old[name],old[name]=undefined,isSvgMode);if(isWeElement){delete dom.props[name];update=true}}}for(name in attrs){if(isWeElement&&typeof attrs[name]==="object"){if(name==="style"){setAccessor(dom,name,old[name],old[name]=attrs[name],isSvgMode)}if(dom.receiveProps){try{old[name]=JSON.parse(JSON.stringify(attrs[name]))}catch(e){console.warn("When using receiveProps, you cannot pass prop of cyclic dependencies down.")}}dom.props[npn(name)]=attrs[name];update=true}else if(name!=="children"&&name!=="innerHTML"&&(!(name in old)||attrs[name]!==(name==="value"||name==="checked"?dom[name]:old[name]))){setAccessor(dom,name,old[name],old[name]=attrs[name],isSvgMode);if(isWeElement){dom.props[npn(name)]=attrs[name];update=true}}}if(isWeElement&&dom.parentNode){if(update||children.length>0){dom.receiveProps(dom.props,dom.data,oldClone);dom.update()}}}var JSONPatcherProxy=function(){function deepClone(obj){switch(typeof obj){case"object":return JSON.parse(JSON.stringify(obj));case"undefined":return null;default:return obj}}JSONPatcherProxy.deepClone=deepClone;function escapePathComponent(str){if(str.indexOf("/")==-1&&str.indexOf("~")==-1)return str;return str.replace(/~/g,"~0").replace(/\//g,"~1")}JSONPatcherProxy.escapePathComponent=escapePathComponent;function findObjectPath(instance,obj){var pathComponents=[];var parentAndPath=instance.parenthoodMap.get(obj);while(parentAndPath&&parentAndPath.path){pathComponents.unshift(parentAndPath.path);parentAndPath=instance.parenthoodMap.get(parentAndPath.parent)}if(pathComponents.length){var path=pathComponents.join("/");return"/"+path}return""}function setTrap(instance,target,key,newValue){var parentPath=findObjectPath(instance,target);var destinationPropKey=parentPath+"/"+escapePathComponent(key);if(instance.proxifiedObjectsMap.has(newValue)){var newValueOriginalObject=instance.proxifiedObjectsMap.get(newValue);instance.parenthoodMap.set(newValueOriginalObject.originalObject,{parent:target,path:key})}var revokableInstance=instance.proxifiedObjectsMap.get(newValue);if(revokableInstance&&!instance.isProxifyingTreeNow){revokableInstance.inherited=true}if(newValue&&typeof newValue=="object"&&!instance.proxifiedObjectsMap.has(newValue)){instance.parenthoodMap.set(newValue,{parent:target,path:key});newValue=instance._proxifyObjectTreeRecursively(target,newValue,key)}var operation={op:"remove",path:destinationPropKey};if(typeof newValue=="undefined"){if(!Array.isArray(target)&&!target.hasOwnProperty(key)){return Reflect.set(target,key,newValue)}if(Array.isArray(target)){operation.op="replace",operation.value=null}var oldValue=instance.proxifiedObjectsMap.get(target[key]);if(oldValue){instance.parenthoodMap.delete(target[key]);instance.disableTrapsForProxy(oldValue);instance.proxifiedObjectsMap.delete(oldValue)}}else{if(Array.isArray(target)&&!Number.isInteger(+key.toString())){if(key!="length"){console.warn("JSONPatcherProxy noticed a non-integer prop was set for an array. This will not emit a patch")}return Reflect.set(target,key,newValue)}operation.op="add";if(target.hasOwnProperty(key)){if(typeof target[key]!=="undefined"||Array.isArray(target)){operation.op="replace"}}operation.value=newValue}operation.oldValue=target[key];var reflectionResult=Reflect.set(target,key,newValue);instance.defaultCallback(operation);return reflectionResult}function deleteTrap(instance,target,key){if(typeof target[key]!=="undefined"){var parentPath=findObjectPath(instance,target);var destinationPropKey=parentPath+"/"+escapePathComponent(key);var revokableProxyInstance=instance.proxifiedObjectsMap.get(target[key]);if(revokableProxyInstance){if(revokableProxyInstance.inherited){revokableProxyInstance.inherited=false}else{instance.parenthoodMap.delete(revokableProxyInstance.originalObject);instance.disableTrapsForProxy(revokableProxyInstance);instance.proxifiedObjectsMap.delete(target[key])}}var reflectionResult=Reflect.deleteProperty(target,key);instance.defaultCallback({op:"remove",path:destinationPropKey});return reflectionResult}}function resume(){var _this=this;this.defaultCallback=function(operation){_this.isRecording&&_this.patches.push(operation);_this.userCallback&&_this.userCallback(operation)};this.isObserving=true}function pause(){this.defaultCallback=function(){};this.isObserving=false}function JSONPatcherProxy(root,showDetachedWarning){this.isProxifyingTreeNow=false;this.isObserving=false;this.proxifiedObjectsMap=new Map;this.parenthoodMap=new Map;if(typeof showDetachedWarning!=="boolean"){showDetachedWarning=true}this.showDetachedWarning=showDetachedWarning;this.originalObject=root;this.cachedProxy=null;this.isRecording=false;this.userCallback;this.resume=resume.bind(this);this.pause=pause.bind(this)}JSONPatcherProxy.prototype.generateProxyAtPath=function(parent,obj,path){var _this2=this;if(!obj){return obj}var traps={set:function set(target,key,value,receiver){return setTrap(_this2,target,key,value,receiver)},deleteProperty:function deleteProperty(target,key){return deleteTrap(_this2,target,key)}};var revocableInstance=Proxy.revocable(obj,traps);revocableInstance.trapsInstance=traps;revocableInstance.originalObject=obj;this.parenthoodMap.set(obj,{parent:parent,path:path});this.proxifiedObjectsMap.set(revocableInstance.proxy,revocableInstance);return revocableInstance.proxy};JSONPatcherProxy.prototype._proxifyObjectTreeRecursively=function(parent,root,path){for(var key in root){if(root.hasOwnProperty(key)){if(root[key]instanceof Object){root[key]=this._proxifyObjectTreeRecursively(root,root[key],escapePathComponent(key))}}}return this.generateProxyAtPath(parent,root,path)};JSONPatcherProxy.prototype.proxifyObjectTree=function(root){this.pause();this.isProxifyingTreeNow=true;var proxifiedObject=this._proxifyObjectTreeRecursively(undefined,root,"");this.isProxifyingTreeNow=false;this.resume();return proxifiedObject};JSONPatcherProxy.prototype.disableTrapsForProxy=function(revokableProxyInstance){if(this.showDetachedWarning){var message="You're accessing an object that is detached from the observedObject tree, see https://github.com/Palindrom/JSONPatcherProxy#detached-objects";revokableProxyInstance.trapsInstance.set=function(targetObject,propKey,newValue){console.warn(message);return Reflect.set(targetObject,propKey,newValue)};revokableProxyInstance.trapsInstance.set=function(targetObject,propKey,newValue){console.warn(message);return Reflect.set(targetObject,propKey,newValue)};revokableProxyInstance.trapsInstance.deleteProperty=function(targetObject,propKey){return Reflect.deleteProperty(targetObject,propKey)}}else{delete revokableProxyInstance.trapsInstance.set;delete revokableProxyInstance.trapsInstance.get;delete revokableProxyInstance.trapsInstance.deleteProperty}};JSONPatcherProxy.prototype.observe=function(record,callback){if(!record&&!callback){throw new Error("You need to either record changes or pass a callback")}this.isRecording=record;this.userCallback=callback;if(record)this.patches=[];this.cachedProxy=this.proxifyObjectTree(this.originalObject);return this.cachedProxy};JSONPatcherProxy.prototype.generate=function(){if(!this.isRecording){throw new Error("You should set record to true to get patches later")}return this.patches.splice(0,this.patches.length)};JSONPatcherProxy.prototype.revoke=function(){this.proxifiedObjectsMap.forEach(function(el){el.revoke()})};JSONPatcherProxy.prototype.disableTraps=function(){this.proxifiedObjectsMap.forEach(this.disableTrapsForProxy,this)};return JSONPatcherProxy}();var callbacks=[];var nextTickCallback=[];function tick(fn,scope){callbacks.push({fn:fn,scope:scope})}function fireTick(){callbacks.forEach(function(item){item.fn.call(item.scope)});nextTickCallback.forEach(function(nextItem){nextItem.fn.call(nextItem.scope)});nextTickCallback.length=0}function nextTick(fn,scope){nextTickCallback.push({fn:fn,scope:scope})}function observe(target){target.observe=true}function proxyUpdate(ele){var timeout=null;ele.data=new JSONPatcherProxy(ele.data).observe(false,function(){if(ele._willUpdate){return}if(ele.constructor.mergeUpdate){clearTimeout(timeout);timeout=setTimeout(function(){ele.update();fireTick()},0)}else{ele.update();fireTick()}})}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var id=0;var WeElement=function(_HTMLElement){_inherits(WeElement,_HTMLElement);function WeElement(){_classCallCheck(this,WeElement);var _this=_possibleConstructorReturn(this,_HTMLElement.call(this));_this.props=Object.assign(nProps(_this.constructor.props),_this.constructor.defaultProps);_this.elementId=id++;_this.data=_this.constructor.data||{};return _this}WeElement.prototype.connectedCallback=function connectedCallback(){if(!this.constructor.pure){var p=this.parentNode;while(p&&!this.store){this.store=p.store;p=p.parentNode||p.host}if(this.store){this.store.instances.push(this)}}this.beforeInstall();!this._isInstalled&&this.install();this.afterInstall();var shadowRoot;if(!this.shadowRoot){shadowRoot=this.attachShadow({mode:"open"})}else{shadowRoot=this.shadowRoot;var fc;while(fc=shadowRoot.firstChild){shadowRoot.removeChild(fc)}}this.css&&shadowRoot.appendChild(cssToDom(this.css()));!this._isInstalled&&this.beforeRender();options.afterInstall&&options.afterInstall(this);if(this.constructor.observe){this.beforeObserve();proxyUpdate(this);this.observed()}this._host=diff(null,this.render(this.props,this.data,this.store),{},false,null,false);this.rendered();if(isArray(this._host)){this._host.forEach(function(item){shadowRoot.appendChild(item)})}else{shadowRoot.appendChild(this._host)}!this._isInstalled&&this.installed();this._isInstalled=true};WeElement.prototype.disconnectedCallback=function disconnectedCallback(){this.uninstall();this._isInstalled=false;if(this.store){for(var i=0,len=this.store.instances.length;i<len;i++){if(this.store.instances[i]===this){this.store.instances.splice(i,1);break}}}};WeElement.prototype.update=function update(){this._willUpdate=true;this.beforeUpdate();this.beforeRender();this._host=diff(this._host,this.render(this.props,this.data,this.store),null,null,this.shadowRoot);this.afterUpdate();this.updated();this._willUpdate=false};WeElement.prototype.fire=function fire(name,data){this.dispatchEvent(new CustomEvent(name.toLowerCase(),{detail:data}))};WeElement.prototype.beforeInstall=function beforeInstall(){};WeElement.prototype.install=function install(){};WeElement.prototype.afterInstall=function afterInstall(){};WeElement.prototype.installed=function installed(){};WeElement.prototype.uninstall=function uninstall(){};WeElement.prototype.beforeUpdate=function beforeUpdate(){};WeElement.prototype.afterUpdate=function afterUpdate(){};WeElement.prototype.updated=function updated(){};WeElement.prototype.beforeRender=function beforeRender(){};WeElement.prototype.rendered=function rendered(){};WeElement.prototype.receiveProps=function receiveProps(){};WeElement.prototype.beforeObserve=function beforeObserve(){};WeElement.prototype.observed=function observed(){};return WeElement}(HTMLElement);WeElement.is="WeElement";function render(vnode,parent,store){parent=typeof parent==="string"?document.querySelector(parent):parent;if(store){store.instances=[];extendStoreUpate(store);var timeout=null;var patchs={};store.data=new JSONPatcherProxy(store.data).observe(false,function(patch){clearTimeout(timeout);if(patch.op==="remove"){var kv=getArrayPatch(patch.path,store);patchs[kv.k]=kv.v;timeout=setTimeout(function(){update(patchs,store);patchs={}},0)}else{var key=fixPath(patch.path);patchs[key]=patch.value;timeout=setTimeout(function(){update(patchs,store);patchs={}},0)}});parent.store=store}return diff(null,vnode,{},false,parent,false)}function update(patch,store){store.update(patch)}function extendStoreUpate(store){store.update=function(patch){var _this=this;var updateAll=matchGlobalData(this.globalData,patch);if(Object.keys(patch).length>0){this.instances.forEach(function(instance){if(updateAll||_this.updateAll||instance.constructor.updatePath&&needUpdate(patch,instance.constructor.updatePath)){instance.update()}});this.onChange&&this.onChange(patch)}}}function matchGlobalData(globalData,diffResult){if(!globalData)return false;for(var keyA in diffResult){if(globalData.indexOf(keyA)>-1){return true}for(var i=0,len=globalData.length;i<len;i++){if(includePath(keyA,globalData[i])){return true}}}return false}function needUpdate(diffResult,updatePath){for(var keyA in diffResult){if(updatePath[keyA]){return true}for(var keyB in updatePath){if(includePath(keyA,keyB)){return true}}}return false}function includePath(pathA,pathB){if(pathA.indexOf(pathB)===0){var next=pathA.substr(pathB.length,1);if(next==="["||next==="."){return true}}return false}function fixPath(path){var mpPath="";var arr=path.replace("/","").split("/");arr.forEach(function(item,index){if(index){if(isNaN(Number(item))){mpPath+="."+item}else{mpPath+="["+item+"]"}}else{mpPath+=item}});return mpPath}function getArrayPatch(path,store){var arr=path.replace("/","").split("/");var current=store.data[arr[0]];for(var i=1,len=arr.length;i<len-1;i++){current=current[arr[i]]}return{k:fixArrPath(path),v:current}}function fixArrPath(path){var mpPath="";var arr=path.replace("/","").split("/");var len=arr.length;arr.forEach(function(item,index){if(index<len-1){if(index){if(isNaN(Number(item))){mpPath+="."+item}else{mpPath+="["+item+"]"}}else{mpPath+=item}}});return mpPath}function _classCallCheck$1(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn$1(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits$1(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}function define(name,ctor){if(ctor.is==="WeElement"){customElements.define(name,ctor);if(ctor.data&&!ctor.pure){ctor.updatePath=getUpdatePath(ctor.data)}}else{var Element=function(_WeElement){_inherits$1(Element,_WeElement);function Element(){var _temp,_this,_ret;_classCallCheck$1(this,Element);for(var _len=arguments.length,args=Array(_len),key=0;key<_len;key++){args[key]=arguments[key]}return _ret=(_temp=(_this=_possibleConstructorReturn$1(this,_WeElement.call.apply(_WeElement,[this].concat(args))),_this),_this._useId=0,_this._useMap={},_this._preCss=null,_temp),_possibleConstructorReturn$1(_this,_ret)}Element.prototype.render=function render(props,data){return ctor.call(this,props,data)};Element.prototype.beforeRender=function beforeRender(){this._useId=0};Element.prototype.useCss=function useCss(css){if(css===this._preCss){return}this._preCss=css;var style=this.shadowRoot.querySelector("style");style&&this.shadowRoot.removeChild(style);this.shadowRoot.appendChild(cssToDom(css))};Element.prototype.useData=function useData(data){return this.use({data:data})};Element.prototype.use=function use(option){var _this2=this;this._useId++;var updater=function updater(newValue){var item=_this2._useMap[updater.id];item.data=newValue;_this2.update();item.effect&&item.effect()};updater.id=this._useId;if(!this._isInstalled){this._useMap[this._useId]=option;return[option.data,updater]}return[this._useMap[this._useId].data,updater]};Element.prototype.installed=function installed(){this._isInstalled=true};return Element}(WeElement);customElements.define(name,Element)}}function getUpdatePath(data){var result={};dataToPath(data,result);return result}function dataToPath(data,result){Object.keys(data).forEach(function(key){result[key]=true;var type=Object.prototype.toString.call(data[key]);if(type==="[object Object]"){_objToPath(data[key],key,result)}else if(type==="[object Array]"){_arrayToPath(data[key],key,result)}})}function _objToPath(data,path,result){Object.keys(data).forEach(function(key){result[path+"."+key]=true;delete result[path];var type=Object.prototype.toString.call(data[key]);if(type==="[object Object]"){_objToPath(data[key],path+"."+key,result)}else if(type==="[object Array]"){_arrayToPath(data[key],path+"."+key,result)}})}function _arrayToPath(data,path,result){data.forEach(function(item,index){result[path+"["+index+"]"]=true;delete result[path];var type=Object.prototype.toString.call(item);if(type==="[object Object]"){_objToPath(item,path+"["+index+"]",result)}else if(type==="[object Array]"){_arrayToPath(item,path+"["+index+"]",result)}})}function tag(name,pure){return function(target){target.pure=pure;define(name,target)}}function cloneElement(vnode,props){return h(vnode.nodeName,extend(extend({},vnode.attributes),props),arguments.length>2?[].slice.call(arguments,2):vnode.children)}function getHost(ele){var p=ele.parentNode;while(p){if(p.host){return p.host}else if(p.shadowRoot&&p.shadowRoot.host){return p.shadowRoot.host}else{p=p.parentNode}}}function rpx(str){return str.replace(/([1-9]\d*|0)(\.\d*)*rpx/g,function(a,b){return window.innerWidth*Number(b)/750+"px"})}function _classCallCheck$2(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn$2(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits$2(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var ModelView=function(_WeElement){_inherits$2(ModelView,_WeElement);function ModelView(){_classCallCheck$2(this,ModelView);return _possibleConstructorReturn$2(this,_WeElement.apply(this,arguments))}ModelView.prototype.beforeInstall=function beforeInstall(){this.data=this.vm.data};ModelView.prototype.observed=function observed(){this.vm.data=this.data};return ModelView}(WeElement);ModelView.observe=true;ModelView.mergeUpdate=true;var hasOwn={}.hasOwnProperty;function classNames(){var classes=[];for(var i=0;i<arguments.length;i++){var arg=arguments[i];if(!arg)continue;var argType=typeof arg;if(argType==="string"||argType==="number"){classes.push(arg)}else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);if(inner){classes.push(inner)}}else if(argType==="object"){for(var key in arg){if(hasOwn.call(arg,key)&&arg[key]){classes.push(key)}}}}return classes.join(" ")}function extractClass(){var _Array$prototype$slic=Array.prototype.slice.call(arguments,0),props=_Array$prototype$slic[0],args=_Array$prototype$slic.slice(1);if(props.class){args.unshift(props.class);delete props.class}else if(props.className){args.unshift(props.className);delete props.className}if(args.length>0){return{class:classNames.apply(null,args)}}}var Component=WeElement;var defineElement=define;var omi={tag:tag,WeElement:WeElement,Component:Component,render:render,h:h,createElement:h,options:options,define:define,observe:observe,cloneElement:cloneElement,getHost:getHost,rpx:rpx,tick:tick,nextTick:nextTick,ModelView:ModelView,defineElement:defineElement,classNames:classNames,extractClass:extractClass};options.root.Omi=omi;options.root.omi=omi;options.root.Omi.version="5.0.19";class TriangleItem extends WeElement{render(props){return Omi.h("span",null,[props.text])}}define("triangle-item",TriangleItem);class PascalTriangle extends WeElement{css(){return``}static get data(){return{list:null}}handleLoad(e){length=parseInt(e.target.getAttribute("data-value"));this.store.data.list=generateData(length)}render(props,data,store){return Omi.h("div",null,[Omi.h("div",null,[Omi.h("button",{"data-value":"10",onClick:this.handleLoad.bind(this)},["Load 10"]),Omi.h("button",{"data-value":"100",onClick:this.handleLoad.bind(this)},["Load 100"]),Omi.h("button",{"data-value":"500",onClick:this.handleLoad.bind(this)},["Load 500"])]),Omi.h("div",null,[this.store.data.list.map(line=>Omi.h("div",null,[line.map(item=>Omi.h("triangle-item",{text:item}))]))])])}}define("pascal-triangle",PascalTriangle);let _length=100;function generateData(rows){const n=rows;const data=[];data[0]=[1];data[1]=[1,1];for(let row=2;row<n;row++){data[row]=[1];for(let col=1;col<=row-1;col++){const prevRow=data[row-1];data[row][col]=prevRow[col]+prevRow[col-1];data[row].push(1)}}return data}let list=generateData(_length);const store={data:{list:list}};render(Omi.h("div",null,[Omi.h("a",{href:"../",id:"back"},["⬅ Back to other implementations"]),Omi.h("pascal-triangle")]),"body",store);