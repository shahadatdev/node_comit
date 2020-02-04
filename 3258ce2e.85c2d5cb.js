/*! For license information please see 3258ce2e.85c2d5cb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(6),u=(r(421),r(420)),c={},i={id:"exercises/debug/ex_5",title:"ex_5",description:"# Exercise 5",source:"@site/../docs/exercises/debug/ex_5.md",permalink:"/node_comit/docs/exercises/debug/ex_5",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/exercises/debug/ex_5.md",sidebar:"exercises",previous:{title:"ex_4",permalink:"/node_comit/docs/exercises/debug/ex_4"}},l=[{value:"Todo",id:"todo",children:[]},{value:"Result",id:"result",children:[]}],a={rightToc:l};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},a,r,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"exercise-5"},"Exercise 5"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create the following folder/file structure:",Object(u.b)("pre",{parentName:"li"},Object(u.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_5\n  |-- index.html\n  |-- scripts.js\n")))),Object(u.b)("h2",{id:"todo"},"Todo"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Add the following files to the folder:",Object(u.b)("ul",{parentName:"li"},Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"index.html"),Object(u.b)("pre",{parentName:"li"},Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>Hello World</title>\n  <script src="./scripts.js"><\/script>\n</head>\n<body>\n  <h1 id="heading"></h1>\n</body>\n</html>\n'))),Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"scripts.js"),Object(u.b)("pre",{parentName:"li"},Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"window.onload = () => {\n  let page = {title: 'Hello world'}\n  let heading = document.querySelector('.heading')\n  heading.innerText = page.title;\n}\n"))))),Object(u.b)("li",{parentName:"ul"},"Run the application using ",Object(u.b)("inlineCode",{parentName:"li"},"http-server")," or just open the ",Object(u.b)("inlineCode",{parentName:"li"},"index.html"))),Object(u.b)("h2",{id:"result"},"Result"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Once we start the project it will output the following message on the page ",Object(u.b)("strong",{parentName:"li"},"Hello world"))))}f.isMDXComponent=!0},420:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=o.a.createContext({}),f=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=f(e.components);return o.a.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,c=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),s=f(r),d=n,b=s["".concat(c,".").concat(d)]||s[d]||p[d]||u;return r?o.a.createElement(b,i({ref:t},a,{components:r})):o.a.createElement(b,i({ref:t},a))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,c=new Array(u);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var a=2;a<u;a++)c[a]=r[a];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},421:function(e,t,r){"use strict";e.exports=r(422)},422:function(e,t,r){"use strict";var n=r(423),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.suspense_list"):60120,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function w(){}function x(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw O(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=j.prototype;var S=x.prototype=new w;S.constructor=x,n(S,j.prototype),S.isPureReactComponent=!0;var _={current:null},C={suspense:null},E={current:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var a=Array(l),f=0;f<l;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:E.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var $=/\/+/g,T=[];function A(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function U(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case u:case c:l=!0}}if(l)return n(o,t,""===r?"."+q(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){var f=r+q(i=t[a],a);l+=e(i,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=h&&t[h]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),a=0;!(i=t.next()).done;)l+=e(i=i.value,f=r+q(i,a++),n,o);else if("object"===i)throw n=""+t,O(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return l}(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace($,"$&/")+"/"),U(e,M,t=A(t,u,n,o)),D(t)}function L(){var e=_.current;if(null===e)throw O(Error(321));return e}var H={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;U(e,I,t=A(null,null,t,r)),D(t)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw O(Error(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,r){return L().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,r){return L().useReducer(e,t,r)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:i,Profiler:a,StrictMode:l,Suspense:d,unstable_SuspenseList:b,createElement:N,cloneElement:function(e,t,r){if(null==e)throw O(Error(267),e);var o=n({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=E.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in t)k.call(t,f)&&!P.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==a?a[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){a=Array(f);for(var s=0;s<f;s++)a[s]=arguments[s+2];o.children=a}return{$$typeof:u,type:e.type,key:c,ref:i,props:o,_owner:l}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=C.suspense;C.suspense=void 0===t?null:t;try{e()}finally{C.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentBatchConfig:C,ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n}},V={default:H},X=V&&H||V;e.exports=X.default||X},423:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,l=c(e),a=1;a<arguments.length;a++){for(var f in r=Object(arguments[a]))o.call(r,f)&&(l[f]=r[f]);if(n){i=n(r);for(var s=0;s<i.length;s++)u.call(r,i[s])&&(l[i[s]]=r[i[s]])}}return l}}}]);