(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{2703:function(t,e,n){"use strict";var r=n(414);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,o,s){if(s!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},5697:function(t,e,n){t.exports=n(2703)()},414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3586:function(t,e,n){"use strict";n.d(e,{Z:function(){return B}});var r=n(7294),i=n(3884),o=n.n(i),s=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),c="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,a="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),u="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(a):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var h=["top","right","bottom","left","width","height","size","weight"],f="undefined"!==typeof MutationObserver,p=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&c()}function s(){u(o)}function c(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){c&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),f?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){c&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;h.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),l=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},d=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||a},v=w(0,0,0,0);function b(t){return parseFloat(t)||0}function y(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+b(t["border-"+n+"-width"])}),0)}function m(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return v;var r=d(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=b(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=b(r.width),a=b(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=y(r,"left","right")+o),Math.round(a+s)!==n&&(a-=y(r,"top","bottom")+s)),!function(t){return t===d(t).document.documentElement}(t)){var u=Math.round(c+o)-e,h=Math.round(a+s)-n;1!==Math.abs(u)&&(c-=u),1!==Math.abs(h)&&(a-=h)}return w(i.left,i.top,c,a)}var g="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"===typeof t.getBBox};function _(t){return c?g(t)?function(t){var e=t.getBBox();return w(0,0,e.width,e.height)}(t):m(t):v}function w(t,e,n,r){return{x:t,y:e,width:n,height:r}}var O=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=w(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=_(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),E=function(t,e){var n=function(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return l(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}(e);l(this,{target:t,contentRect:n})},T=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new s,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new O(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new E(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),k="undefined"!==typeof WeakMap?new WeakMap:new s,R=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=p.getInstance(),r=new T(e,n,this);k.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){R.prototype[t]=function(){var e;return(e=k.get(this))[t].apply(e,arguments)}}));var x="undefined"!==typeof a.ResizeObserver?a.ResizeObserver:R;function M(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S(){return S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},S.apply(this,arguments)}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){M(t,e,n[e])}))}return t}function j(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var C={cursor:"pointer"},W=function(t){var e=t.index,n=t.onClick,i=t.photo,o=t.margin,s=t.direction,c=t.top,a=t.left,u=t.key,h={margin:o,display:"block"};"column"===s&&(h.position="absolute",h.left=a,h.top=c);return r.createElement("img",S({key:u,style:n?A({},h,C):h},i,{onClick:n?function(t){n(t,{photo:i,index:e})}:null}))},D=o().shape({key:o().string,src:o().string.isRequired,width:o().number.isRequired,height:o().number.isRequired,alt:o().string,title:o().string,srcSet:o().oneOfType([o().string,o().array]),sizes:o().oneOfType([o().string,o().array])});W.propTypes={index:o().number.isRequired,onClick:o().func,photo:D.isRequired,margin:o().number,top:function(t){if("column"===t.direction&&"number"!==typeof t.top)return new Error("top is a required number when direction is set to `column`")},left:function(t){if("column"===t.direction&&"number"!==typeof t.left)return new Error("left is a required number when direction is set to `column`")},direction:o().string};var H=function(t,e){return e||(e=0),Number(Math.round(t+"e"+e)+"e-"+e)},q=function(t){var e=t.width,n=t.height;return H(e/n,2)};function F(t){this.content=[],this.scoreFunction=t}F.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1)},pop:function(){var t=this.content[0],e=this.content.pop();return this.content.length>0&&(this.content[0]=e,this.sinkDown(0)),t},remove:function(t){for(var e=this.content.length,n=0;n<e;n++)if(this.content[n]==t){var r=this.content.pop();if(n==e-1)break;this.content[n]=r,this.bubbleUp(n),this.sinkDown(n);break}},size:function(){return this.content.length},bubbleUp:function(t){for(var e=this.content[t],n=this.scoreFunction(e);t>0;){var r=Math.floor((t+1)/2)-1,i=this.content[r];if(n>=this.scoreFunction(i))break;this.content[r]=e,this.content[t]=i,t=r}},sinkDown:function(t){for(var e=this.content.length,n=this.content[t],r=this.scoreFunction(n);;){var i=2*(t+1),o=i-1,s=null;if(o<e){var c=this.content[o],a=this.scoreFunction(c);a<r&&(s=o)}if(i<e){var u=this.content[i];this.scoreFunction(u)<(null==s?r:a)&&(s=i)}if(null==s)break;this.content[t]=this.content[s],this.content[s]=n,t=s}}};var I=function(t,e,n){var r=function(t,e,n){var r={},i={},o={};o[e]=0;var s=new F((function(t){return t.weight}));for(s.push({id:e,weight:0});s.size();){var c=s.pop(),a=c.id;if(!i[a]){var u=t(a)||{};for(var h in i[a]=1,u){var f=c.weight+u[h];("undefined"===typeof o[h]||o[h]>f)&&(o[h]=f,s.push({id:h,weight:f}),r[h]=a)}}}if("undefined"===typeof o[n])throw new Error("There is no path from ".concat(e," to ").concat(n));return r}(t,e,n);return function(t,e){for(var n=[],r=e;r;)n.push(r),t[r],r=t[r];return n.reverse()}(r,n)},L=function(t,e,n){return(e-t.length*(2*n))/t.reduce((function(t,e){return t+q(e)}),0)},z=function(t,e,n,r,i,o){var s=t.slice(e,n),c=L(s,r,o);return Math.pow(Math.abs(c-i),2)},N=function(t){var e=t.containerWidth,n=t.limitNodeSearch,r=t.targetRowHeight,i=t.margin,o=t.photos,s=function(t,e,n,r,i){return function(o){var s={};s[+(o=+o)]=0;for(var c=o+1;c<n.length+1&&!(c-o>r);++c)s[c.toString()]=z(n,o,c,e,t,i);return s}}(r,e,o,n,i),c=I(s,"0",o.length);c=c.map((function(t){return+t}));for(var a=1;a<c.length;++a)for(var u=o.slice(c[a-1],c[a]),h=L(u,e,i),f=c[a-1];f<c[a];++f)o[f].width=H(h*q(o[f]),1),o[f].height=h;return o},U=r.memo((function(t){var e=t.photos,n=t.onClick,i=t.direction,o=t.margin,s=t.limitNodeSearch,c=t.targetRowHeight,a=t.columns,u=t.renderImage,h=P((0,r.useState)(0),2),f=h[0],p=h[1],l=(0,r.useRef)(null);(0,r.useLayoutEffect)((function(){var t=null,e=new x((function(e){var n=e[0].contentRect.width;f!==n&&(t=window.requestAnimationFrame((function(){p(Math.floor(n))})))}));return e.observe(l.current),function(){e.disconnect(),window.cancelAnimationFrame(t)}}));var d=function(t,r){var i=r.index;n(t,{index:i,photo:e[i],previous:e[i-1]||null,next:e[i+1]||null})};if(!f)return r.createElement("div",{ref:l},"\xa0");var v,b,y=f-1;"row"===i&&("function"===typeof s&&(s=s(f)),"function"===typeof c&&(c=c(f)),void 0===s&&(s=2,f>=450&&(s=function(t){var e=t.targetRowHeight,n=t.containerWidth;return H(n/e/1.5)+8}({containerWidth:f,targetRowHeight:c}))),v={display:"flex",flexWrap:"wrap",flexDirection:"row"},b=N({containerWidth:y,limitNodeSearch:s,targetRowHeight:c,margin:o,photos:e})),"column"===i&&("function"===typeof a&&(a=a(f)),void 0===a&&(a=1,f>=500&&(a=2),f>=900&&(a=3),f>=1500&&(a=4)),v={position:"relative"},b=function(t){for(var e=t.photos,n=t.columns,r=t.containerWidth,i=t.margin,o=(r-2*i*n)/n,s=e.map((function(t){var e=t.height/t.width*o;return A({},t,{width:H(o,1),height:H(e,1)})})),c=[],a=[],u=0;u<n;u++)c[u]=H(u*(o+2*i),1),a[u]=0;var h=s.map((function(t){var e=a.reduce((function(t,e,n){return e<a[t]?n:t}),0);t.top=a[e],t.left=c[e],a[e]=a[e]+t.height+2*i;var n=a.reduce((function(t,e,n){return e>a[t]?n:t}),0);return t.containerHeight=a[n],t}));return h}({containerWidth:y,columns:a,margin:o,photos:e}),v.height=b[b.length-1].containerHeight);var m=u||W;return r.createElement("div",{className:"react-photo-gallery--gallery"},r.createElement("div",{ref:l,style:v},b.map((function(t,e){var r=t.left,s=t.top,c=t.containerHeight,a=j(t,["left","top","containerHeight"]);return m({left:r,top:s,key:t.key||t.src,containerHeight:c,index:e,margin:o,direction:i,onClick:n?d:null,photo:a})}))))}));U.propTypes={photos:o().arrayOf(D).isRequired,direction:o().string,onClick:o().func,columns:o().oneOfType([o().func,o().number]),targetRowHeight:o().oneOfType([o().func,o().number]),limitNodeSearch:o().oneOfType([o().func,o().number]),margin:o().number,renderImage:o().func},U.defaultProps={margin:2,direction:"row",targetRowHeight:300};var B=U},4880:function(t,e,n){"use strict";var r=n(3976);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,o,s){if(s!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},3884:function(t,e,n){t.exports=n(4880)()},3976:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);