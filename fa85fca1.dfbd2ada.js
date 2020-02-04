/*! For license information please see fa85fca1.dfbd2ada.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{410:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(6),l=(r(420),r(419)),a={},u={id:"exercises/css/ex_11",title:"ex_11",description:"# Exercise 11",source:"@site/../docs/exercises/css/ex_11.md",permalink:"/docs/exercises/css/ex_11",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/exercises/css/ex_11.md"},c=[{value:"index11.html",id:"index11html",children:[]}],i={rightToc:c};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"exercise-11"},"Exercise 11"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Create a index11.html file"),Object(l.b)("li",{parentName:"ul"},"Copy and paste the following HTML code:")),Object(l.b)("h2",{id:"index11html"},"index11.html"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Learning CSS</title>\n  </head>\n  <body>\n    <div id="container">\n      <a href="#">link</a>\n      <a href="#">link</a>\n      <a href="#">link</a>\n      <a href="#">link</a>\n      <a href="#">link</a>\n    </div>\n  </body>\n</html>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"After applying all styles the document must look like this:")),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"./results/ex_11.png",alt:"Ex 11"})),"\n",Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"./results/ex_11b.png",alt:"Ex 11"}))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Add a style element"),Object(l.b)("li",{parentName:"ul"},"Select the body element and apply the following styles:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Use Arial, Helvetica, sans-serif as font family"))),Object(l.b)("li",{parentName:"ul"},"Select the element with the container id and apply the following styles:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Background color must be gray"),Object(l.b)("li",{parentName:"ul"},"The element must be 600px wide"),Object(l.b)("li",{parentName:"ul"},"Center this element using margin auto"))),Object(l.b)("li",{parentName:"ul"},"Select all the link element that are children of the container id element and apply the following styles:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Change the display property to be block"),Object(l.b)("li",{parentName:"ul"},"Center align the text"),Object(l.b)("li",{parentName:"ul"},"Use white for font color"),Object(l.b)("li",{parentName:"ul"},"Remove the link text decoration"),Object(l.b)("li",{parentName:"ul"},"Add a 1px solid black bottom border"),Object(l.b)("li",{parentName:"ul"},"Add 10px padding to all sides"),Object(l.b)("li",{parentName:"ul"},"Transform the text to be uppercase"),Object(l.b)("li",{parentName:"ul"},"Add the hover pseudoclass and apply the following styles:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Background color must be #eee"),Object(l.b)("li",{parentName:"ul"},"Use gray for font color")))))))}f.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),f=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u({},t,{},e)),r},s=function(e){var t=f(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=f(r),b=n,y=s["".concat(a,".").concat(b)]||s[b]||p[b]||l;return r?o.a.createElement(y,u({ref:t},i,{components:r})):o.a.createElement(y,u({ref:t},i))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=b;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var i=2;i<l;i++)a[i]=r[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},420:function(e,t,r){"use strict";e.exports=r(421)},421:function(e,t,r){"use strict";var n=r(422),o="function"==typeof Symbol&&Symbol.for,l=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||j}function w(){}function x(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||j}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw O(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=g.prototype;var S=x.prototype=new w;S.constructor=x,n(S,g.prototype),S.isPureReactComponent=!0;var k={current:null},_={suspense:null},E={current:null},N=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)N.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var i=Array(c),f=0;f<c;f++)i[f]=arguments[f+2];o.children=i}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:l,type:e,key:a,ref:u,props:o,_owner:E.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var R=/\/+/g,T=[];function A(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function U(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case l:case a:c=!0}}if(c)return n(o,t,""===r?"."+M(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var i=0;i<t.length;i++){var f=r+M(u=t[i],i);c+=e(u,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=h&&t[h]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),i=0;!(u=t.next()).done;)c+=e(u=u.value,f=r+M(u,i++),n,o);else if("object"===u)throw n=""+t,O(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return c}(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var l="";null!=r&&(l=(""+r).replace(R,"$&/")+"/"),U(e,L,t=A(t,l,n,o)),D(t)}function F(){var e=k.current;if(null===e)throw O(Error(321));return e}var B={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;U(e,I,t=A(null,null,t,r)),D(t)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw O(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:u,Profiler:i,StrictMode:c,Suspense:b,unstable_SuspenseList:y,createElement:P,cloneElement:function(e,t,r){if(null==e)throw O(Error(267),e);var o=n({},e.props),a=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=E.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in t)N.call(t,f)&&!C.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==i?i[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){i=Array(f);for(var s=0;s<f;s++)i[s]=arguments[s+2];o.children=i}return{$$typeof:l,type:e.type,key:a,ref:u,props:o,_owner:c}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=_.suspense;_.suspense=void 0===t?null:t;try{e()}finally{_.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:_,ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n}},H={default:B},V=H&&B||H;e.exports=V.default||V},422:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,c=a(e),i=1;i<arguments.length;i++){for(var f in r=Object(arguments[i]))o.call(r,f)&&(c[f]=r[f]);if(n){u=n(r);for(var s=0;s<u.length;s++)l.call(r,u[s])&&(c[u[s]]=r[u[s]])}}return c}}}]);