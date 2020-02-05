/*! For license information please see d08c0f0e.139615a3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{368:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),u=(r(422),r(421)),a={},c={id:"exercises/browser/ex_50",title:"ex_50",description:"# Exercise 50",source:"@site/../docs/exercises/browser/ex_50.md",permalink:"/node_comit/docs/exercises/browser/ex_50",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_50.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_49",permalink:"/node_comit/docs/exercises/browser/ex_49"},next:{title:"ex_51",permalink:"/node_comit/docs/exercises/browser/ex_51"}},i=[{value:"index.html",id:"indexhtml",children:[]}],l={rightToc:i};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"exercise-50"},"Exercise 50"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_50\n  |-- index.html\n")),Object(u.b)("h2",{id:"indexhtml"},"index.html"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Copy and paste exercise 49 code"),Object(u.b)("li",{parentName:"ul"},"Add an HTML text input with id and name attributes with email as value")),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<input type="text" id="email" name="email" />\n')),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Give all elements a placeholder attribute with the corresponding value (username and email)"),Object(u.b)("li",{parentName:"ul"},"Add one more validation to make sure that username and password only contains numbers and letters (alphanumeric)"),Object(u.b)("li",{parentName:"ul"},"Validate that the email is correct using an email regex"),Object(u.b)("li",{parentName:"ul"},"Show an error message if the username, password and email values are not valid")))}s.isMDXComponent=!0},421:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,y=f["".concat(a,".").concat(d)]||f[d]||p[d]||u;return r?o.a.createElement(y,c({ref:t},l,{components:r})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,a=new Array(u);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<u;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},422:function(e,t,r){"use strict";e.exports=r(423)},423:function(e,t,r){"use strict";var n=r(424),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}function w(){}function x(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=g.prototype;var _=x.prototype=new w;_.constructor=x,n(_,g.prototype),_.isPureReactComponent=!0;var S={current:null},k={suspense:null},E={current:null},P=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function $(e,t,r){var n,o={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)P.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:u,type:e,key:a,ref:c,props:o,_owner:E.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var N=/\/+/g,T=[];function A(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function M(e,t,r){return null==e?0:function e(t,r,n,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var i=!1;if(null===t)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case u:case a:i=!0}}if(i)return n(o,t,""===r?"."+U(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=r+U(c=t[l],l);i+=e(c,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(c=t.next()).done;)i+=e(c=c.value,s=r+U(c,l++),n,o);else if("object"===c)throw n=""+t,v(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return i}(e,"",t,r)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(N,"$&/")+"/"),M(e,L,t=A(t,u,n,o)),D(t)}function F(){var e=S.current;if(null===e)throw v(Error(321));return e}var V={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,I,t=A(null,null,t,r)),D(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:c,Profiler:l,StrictMode:i,Suspense:d,unstable_SuspenseList:y,createElement:$,cloneElement:function(e,t,r){if(null==e)throw v(Error(267),e);var o=n({},e.props),a=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=E.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)P.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:u,type:e.type,key:a,ref:c,props:o,_owner:i}},createFactory:function(e){var t=$.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=k.suspense;k.suspense=void 0===t?null:t;try{e()}finally{k.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:S,ReactCurrentBatchConfig:k,ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n}},B={default:V},H=B&&V||B;e.exports=H.default||H},424:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,i=a(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(i[s]=r[s]);if(n){c=n(r);for(var f=0;f<c.length;f++)u.call(r,c[f])&&(i[c[f]]=r[c[f]])}}return i}}}]);