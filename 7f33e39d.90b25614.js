/*! For license information please see 7f33e39d.90b25614.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{249:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(6),u=(r(420),r(419)),c={},i={id:"exercises/js/ex_16",title:"ex_16",description:"# Exercise 16",source:"@site/../docs/exercises/js/ex_16.md",permalink:"/docs/exercises/js/ex_16",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/exercises/js/ex_16.md"},a=[],l={rightToc:a};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"exercise-16"},"Exercise 16"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create a new index16.js file"),Object(u.b)("li",{parentName:"ul"},"Copy and paste the previous exercise code"),Object(u.b)("li",{parentName:"ul"},"Refactor the code to use string concatenation instead of template")))}f.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=f(r),y=n,d=s["".concat(c,".").concat(y)]||s[y]||p[y]||u;return r?o.a.createElement(d,i({ref:t},l,{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,c=new Array(u);c[0]=y;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<u;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},420:function(e,t,r){"use strict";e.exports=r(421)},421:function(e,t,r){"use strict";var n=r(422),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var v="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||O}function w(){}function S(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw h(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=j.prototype;var x=S.prototype=new w;x.constructor=S,n(x,j.prototype),x.isPureReactComponent=!0;var _={current:null},E={suspense:null},k={current:null},P=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function $(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:k.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var T=/\/+/g,D=[];function N(e,t,r,n){if(D.length){var o=D.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var a=!1;if(null===t)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case u:case c:a=!0}}if(a)return n(o,t,""===r?"."+M(t,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=r+M(i=t[l],l);a+=e(i,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(i=t.next()).done;)a+=e(i=i.value,f=r+M(i,l++),n,o);else if("object"===i)throw n=""+t,h(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return a}(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(T,"$&/")+"/"),I(e,q,t=N(t,u,n,o)),A(t)}function F(){var e=_.current;if(null===e)throw h(Error(321));return e}var V={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,U,t=N(null,null,t,r)),A(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw h(Error(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:i,Profiler:l,StrictMode:a,Suspense:y,unstable_SuspenseList:d,createElement:$,cloneElement:function(e,t,r){if(null==e)throw h(Error(267),e);var o=n({},e.props),c=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)P.call(t,f)&&!C.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:u,type:e.type,key:c,ref:i,props:o,_owner:a}},createFactory:function(e){var t=$.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=E.suspense;E.suspense=void 0===t?null:t;try{e()}finally{E.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentBatchConfig:E,ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n}},B={default:V},X=B&&V||B;e.exports=X.default||X},422:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,a=c(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(a[f]=r[f]);if(n){i=n(r);for(var s=0;s<i.length;s++)u.call(r,i[s])&&(a[i[s]]=r[i[s]])}}return a}}}]);