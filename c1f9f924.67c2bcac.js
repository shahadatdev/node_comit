/*! For license information please see c1f9f924.67c2bcac.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{350:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),u=(r(421),r(420)),c={},i={id:"exercises/node/ex_10",title:"ex_10",description:"# Exercise 10",source:"@site/../docs/exercises/node/ex_10.md",permalink:"/node_comit/docs/exercises/node/ex_10",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/exercises/node/ex_10.md",sidebar:"exercises",previous:{title:"ex_9",permalink:"/node_comit/docs/exercises/node/ex_9"},next:{title:"ex_11",permalink:"/node_comit/docs/exercises/node/ex_11"}},a=[{value:"index.js",id:"indexjs",children:[]}],l={rightToc:a};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"exercise-10"},"Exercise 10"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_10\n  |-- index.js\n")),Object(u.b)("h2",{id:"indexjs"},"index.js"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create a Express web server using port 3000"),Object(u.b)("li",{parentName:"ul"},"Create the following route handlers and send the corresponding response back"),Object(u.b)("li",{parentName:"ul"},"Routes:",Object(u.b)("ul",{parentName:"li"},Object(u.b)("li",{parentName:"ul"},"GET ",Object(u.b)("inlineCode",{parentName:"li"},"/"),": show a welcome message"),Object(u.b)("li",{parentName:"ul"},"GET ",Object(u.b)("inlineCode",{parentName:"li"},"jokes"),": show at least 2 jokes"),Object(u.b)("li",{parentName:"ul"},"GET ",Object(u.b)("inlineCode",{parentName:"li"},"joke"),": show 1 joke"),Object(u.b)("li",{parentName:"ul"},"POST ",Object(u.b)("inlineCode",{parentName:"li"},"joke"),": my jokes are too funny, I'm not getting new ones from you.."),Object(u.b)("li",{parentName:"ul"},"PUT ",Object(u.b)("inlineCode",{parentName:"li"},"joke"),": no, no, no.. not changing my act dude!"),Object(u.b)("li",{parentName:"ul"},"DELETE: ",Object(u.b)("inlineCode",{parentName:"li"},"joke"),": good jokes never get to old"),Object(u.b)("li",{parentName:"ul"},"All: ",Object(u.b)("inlineCode",{parentName:"li"},"joke"),": I know I'm so good that you're looking for jokes everywhere "))),Object(u.b)("li",{parentName:"ul"},"Use Postman to try all this options"),Object(u.b)("li",{parentName:"ul"},"You can use ",Object(u.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/one-liner-joke"}),"one-liner-joke module")," to create the jokes")))}s.isMDXComponent=!0},420:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(r),b=n,y=f["".concat(c,".").concat(b)]||f[b]||p[b]||u;return r?o.a.createElement(y,i({ref:t},l,{components:r})):o.a.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,c=new Array(u);c[0]=b;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<u;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},421:function(e,t,r){"use strict";e.exports=r(422)},422:function(e,t,r){"use strict";var n=r(423),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.suspense_list"):60120,d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var j="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||O}function w(){}function x(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw h(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=g.prototype;var k=x.prototype=new w;k.constructor=x,n(k,g.prototype),k.isPureReactComponent=!0;var _={current:null},S={suspense:null},E={current:null},C=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:E.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,T=[];function D(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function A(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var a=!1;if(null===t)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case u:case c:a=!0}}if(a)return n(o,t,""===r?"."+U(t,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=r+U(i=t[l],l);a+=e(i,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=j&&t[j]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(i=t.next()).done;)a+=e(i=i.value,s=r+U(i,l++),n,o);else if("object"===i)throw n=""+t,h(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return a}(e,"",t,r)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(R,"$&/")+"/"),A(e,L,t=D(t,u,n,o)),I(t)}function F(){var e=_.current;if(null===e)throw h(Error(321));return e}var V={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;A(e,M,t=D(null,null,t,r)),I(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw h(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:i,Profiler:l,StrictMode:a,Suspense:b,unstable_SuspenseList:y,createElement:N,cloneElement:function(e,t,r){if(null==e)throw h(Error(267),e);var o=n({},e.props),c=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=E.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)C.call(t,s)&&!P.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:u,type:e.type,key:c,ref:i,props:o,_owner:a}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=S.suspense;S.suspense=void 0===t?null:t;try{e()}finally{S.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentBatchConfig:S,ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n}},B={default:V},G=B&&V||B;e.exports=G.default||G},423:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,a=c(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(a[s]=r[s]);if(n){i=n(r);for(var f=0;f<i.length;f++)u.call(r,i[f])&&(a[i[f]]=r[i[f]])}}return a}}}]);