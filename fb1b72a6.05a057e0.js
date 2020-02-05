/*! For license information please see fb1b72a6.05a057e0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{412:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(1),o=t(6),a=(t(422),t(421)),c={},u={id:"exercises/js/ex_155",title:"ex_155",description:"# Exercise 155",source:"@site/../docs/exercises/js/ex_155.md",permalink:"/node_comit/docs/exercises/js/ex_155",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/js/ex_155.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_154",permalink:"/node_comit/docs/exercises/js/ex_154"},next:{title:"ex_156",permalink:"/node_comit/docs/exercises/js/ex_156"}},l=[{value:"Games:",id:"games",children:[]}],i={rightToc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"exercise-155"},"Exercise 155"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a new index155.js"),Object(a.b)("li",{parentName:"ul"},"We'll create a games collection and list there names as output"),Object(a.b)("li",{parentName:"ul"},"The games have the following properties and methods",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"property: name (string)"),Object(a.b)("li",{parentName:"ul"},"property: price (number)"),Object(a.b)("li",{parentName:"ul"},"property: sold (number)"),Object(a.b)("li",{parentName:"ul"},"property: console (string)"))),Object(a.b)("li",{parentName:"ul"},"Define a games variable and assign a literal array value"),Object(a.b)("li",{parentName:"ul"},"Define the following games literal objects and assign them as items to the game array")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Example:\n\n[\n  {},\n  {},\n  {}\n]\n")),Object(a.b)("h2",{id:"games"},"Games:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"name: Crash Bandicoot N. Sane Trilogy\nprice: 1060\nsold: 20\nconsole: PS4\n\nname: Lego Marvel Super Heroes\nprice: 700\nsold: 25\nconsole: XBOX\n\nname: Gta V\nprice: 1449\nsold: 30\nconsole: PS4\n\nname: Mortal Kombat Xl\nprice: 1190\nsold: 34\nconsole: PS4\n\nname: Gta V\nprice: 1250\nsold: 60\nconsole: XBOX\n\nname: Fifa 2017\nprice: 890\nsold: 15\nconsole: PS4\n\nname: Uncharted 4\nprice: 950\nsold: 30\nconsole: PS4\n\nname: Mortal Kombat Xl\nprice: 940\nsold: 30\nconsole: XBOX\n\nname: Need For Speed\nprice: 790\nsold: 10\nconsole: PS4\n\nname: Lego Batman\nprice: 1000\nsold: 18\nconsole: PS4\n\nname: Fifa 17\nprice: 1290\nsold: 12\nconsole: PS4\n\nname: Resident Evil 7\nprice: 1390\nsold: 10\nconsole: PS4\n\nname: Dragon Ball XX\nprice: 1390\nsold: 25\nconsole: XBOX\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Iterate over the games array and show the following output for each games item:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Use games item properties\n\nname: %name%\nprice: %price%\nsold: %sold%\nconsole: %console%\n")))}s.isMDXComponent=!0},421:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),s=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u({},n,{},e)),t},f=function(e){var n=s(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),f=s(t),m=r,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return t?o.a.createElement(d,u({ref:n},i,{components:t})):o.a.createElement(d,u({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var i=2;i<a;i++)c[i]=t[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},422:function(e,n,t){"use strict";e.exports=t(423)},423:function(e,n,t){"use strict";var r=t(424),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var n=e.message,t="https://reactjs.org/docs/error-decoder.html?invariant="+n,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||O}function S(){}function w(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=g.prototype;var x=w.prototype=new S;x.constructor=w,r(x,g.prototype),x.isPureReactComponent=!0;var _={current:null},P={suspense:null},E={current:null},k=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function N(e,n,t){var r,o={},c=null,u=null;if(null!=n)for(r in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(c=""+n.key),n)k.call(n,r)&&!C.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];o.children=i}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:E.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,T=[];function X(e,n,t,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=n,o.func=t,o.context=r,o.count=0,o}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function A(e,n,t){return null==e?0:function e(n,t,r,o){var u=typeof n;"undefined"!==u&&"boolean"!==u||(n=null);var l=!1;if(null===n)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(n.$$typeof){case a:case c:l=!0}}if(l)return r(o,n,""===t?"."+M(n,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(n))for(var i=0;i<n.length;i++){var s=t+M(u=n[i],i);l+=e(u,s,r,o)}else if(null===n||"object"!=typeof n?s=null:s="function"==typeof(s=h&&n[h]||n["@@iterator"])?s:null,"function"==typeof s)for(n=s.call(n),i=0;!(u=n.next()).done;)l+=e(u=u.value,s=t+M(u,i++),r,o);else if("object"===u)throw r=""+n,v(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(n).join(", ")+"}":r,"");return l}(e,"",n,t)}function M(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function U(e,n){e.func.call(e.context,n,e.count++)}function B(e,n,t){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?I(e,r,t,(function(e){return e})):null!=e&&($(e)&&(e=function(e,n){return{$$typeof:a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+t)),r.push(e))}function I(e,n,t,r,o){var a="";null!=t&&(a=(""+t).replace(R,"$&/")+"/"),A(e,B,n=X(n,a,r,o)),D(n)}function F(){var e=_.current;if(null===e)throw v(Error(321));return e}var L={Children:{map:function(e,n,t){if(null==e)return e;var r=[];return I(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;A(e,U,n=X(null,null,n,t)),D(n)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var n=[];return I(e,n,null,(function(e){return e})),n},only:function(e){if(!$(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:w,createContext:function(e,n){return void 0===n&&(n=null),(e={$$typeof:f,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,n){return{$$typeof:y,type:e,compare:void 0===n?null:n}},useCallback:function(e,n){return F().useCallback(e,n)},useContext:function(e,n){return F().useContext(e,n)},useEffect:function(e,n){return F().useEffect(e,n)},useImperativeHandle:function(e,n,t){return F().useImperativeHandle(e,n,t)},useDebugValue:function(){},useLayoutEffect:function(e,n){return F().useLayoutEffect(e,n)},useMemo:function(e,n){return F().useMemo(e,n)},useReducer:function(e,n,t){return F().useReducer(e,n,t)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:u,Profiler:i,StrictMode:l,Suspense:m,unstable_SuspenseList:d,createElement:N,cloneElement:function(e,n,t){if(null==e)throw v(Error(267),e);var o=r({},e.props),c=e.key,u=e.ref,l=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,l=E.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in n)k.call(n,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==i?i[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:a,type:e.type,key:c,ref:u,props:o,_owner:l}},createFactory:function(e){var n=N.bind(null,e);return n.type=e,n},isValidElement:$,version:"16.10.2",unstable_withSuspenseConfig:function(e,n){var t=P.suspense;P.suspense=void 0===n?null:n;try{e()}finally{P.suspense=t}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentBatchConfig:P,ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:r}},q={default:L},V=q&&L||q;e.exports=V.default||V},424:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,n){for(var t,u,l=c(e),i=1;i<arguments.length;i++){for(var s in t=Object(arguments[i]))o.call(t,s)&&(l[s]=t[s]);if(r){u=r(t);for(var f=0;f<u.length;f++)a.call(t,u[f])&&(l[u[f]]=t[u[f]])}}return l}}}]);