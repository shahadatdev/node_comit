/*! For license information please see 05bbe6bf.ff0cbd3c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{421:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=o.a.createContext({}),s=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},f=function(e){var t=s(e.components);return o.a.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,c=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),f=s(r),b=n,d=f["".concat(c,".").concat(b)]||f[b]||p[b]||u;return r?o.a.createElement(d,i({ref:t},a,{components:r})):o.a.createElement(d,i({ref:t},a))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,c=new Array(u);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var a=2;a<u;a++)c[a]=r[a];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},422:function(e,t,r){"use strict";e.exports=r(423)},423:function(e,t,r){"use strict";var n=r(424),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}function x(){}function w(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw j(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=g.prototype;var _=w.prototype=new x;_.constructor=w,n(_,g.prototype),_.isPureReactComponent=!0;var S={current:null},E={suspense:null},P={current:null},k=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var a=Array(l),s=0;s<l;s++)a[s]=arguments[s+2];o.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:P.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,T=[];function A(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function D(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case u:case c:l=!0}}if(l)return n(o,t,""===r?"."+U(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){var s=r+U(i=t[a],a);l+=e(i,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),a=0;!(i=t.next()).done;)l+=e(i=i.value,s=r+U(i,a++),n,o);else if("object"===i)throw n=""+t,j(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return l}(e,"",t,r)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(R,"$&/")+"/"),D(e,q,t=A(t,u,n,o)),I(t)}function F(){var e=S.current;if(null===e)throw j(Error(321));return e}var B={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,M,t=A(null,null,t,r)),I(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw j(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:i,Profiler:a,StrictMode:l,Suspense:b,unstable_SuspenseList:d,createElement:N,cloneElement:function(e,t,r){if(null==e)throw j(Error(267),e);var o=n({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=P.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)k.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==a?a[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){a=Array(s);for(var f=0;f<s;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:u,type:e.type,key:c,ref:i,props:o,_owner:l}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=E.suspense;E.suspense=void 0===t?null:t;try{e()}finally{E.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:S,ReactCurrentBatchConfig:E,ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:n}},V={default:B},X=V&&B||V;e.exports=X.default||X},424:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,l=c(e),a=1;a<arguments.length;a++){for(var s in r=Object(arguments[a]))o.call(r,s)&&(l[s]=r[s]);if(n){i=n(r);for(var f=0;f<i.length;f++)u.call(r,i[f])&&(l[i[f]]=r[i[f]])}}return l}},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),u=(r(422),r(421)),c={},i={id:"exercises/node/ex_5",title:"ex_5",description:"# Exercise 5",source:"@site/../docs/exercises/node/ex_5.md",permalink:"/node_comit/docs/exercises/node/ex_5",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/node/ex_5.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_4",permalink:"/node_comit/docs/exercises/node/ex_4"},next:{title:"ex_6",permalink:"/node_comit/docs/exercises/node/ex_6"}},l=[{value:"numbers.js",id:"numbersjs",children:[]},{value:"index.js",id:"indexjs",children:[]}],a={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},a,r,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"exercise-5"},"Exercise 5"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_5\n  |-- index.js\n  |-- numbers.js\n")),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Init an NPM project inside the ex_5 folder"),Object(u.b)("li",{parentName:"ul"},"Use ex_5 as project name"),Object(u.b)("li",{parentName:"ul"},"Add a start script to run the index.js file")),Object(u.b)("h2",{id:"numbersjs"},"numbers.js"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Define a isEven function"),Object(u.b)("li",{parentName:"ul"},"This function accepts a number as parameter"),Object(u.b)("li",{parentName:"ul"},"Return a boolean value whether the number is even (true) or not (false)"),Object(u.b)("li",{parentName:"ul"},"Export the isEven function")),Object(u.b)("h2",{id:"indexjs"},"index.js"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Install the ",Object(u.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/haadcode/logplease"}),"logplease module documentation")," module as dev dependency"),Object(u.b)("li",{parentName:"ul"},"Import the logplease module"),Object(u.b)("li",{parentName:"ul"},"Import the numbers module"),Object(u.b)("li",{parentName:"ul"},"Call the isEven function with the following values: 2, 3, 101, 201, 202, 100 (one call for each number)"),Object(u.b)("li",{parentName:"ul"},"Show the following message using the ",Object(u.b)("inlineCode",{parentName:"li"},"info method")," if the number is even:")),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{}),"%number% is even\n")),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Show the following message using the error method if the number is not even:")),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{}),"%number% is odd\n")))}s.isMDXComponent=!0}}]);