/*! For license information please see 22c4d112.117f34e5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{135:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(6),u=(r(420),r(419)),c={},l={id:"exercises/browser/ex_35",title:"ex_35",description:"# Exercise 35",source:"@site/../docs/exercises/browser/ex_35.md",permalink:"/docs/exercises/browser/ex_35",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/exercises/browser/ex_35.md"},i=[{value:"index.html",id:"indexhtml",children:[]}],a={rightToc:i};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},a,r,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"exercise-35"},"Exercise 35"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_35\n  |-- index.html\n")),Object(u.b)("h2",{id:"indexhtml"},"index.html"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(u.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(u.b)("li",{parentName:"ul"},"Add the following html code")),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Events</title>\n  </head>\n  <body>\n    <button id="firstButton">Click Me!!</button>\n    <button id="secondButton">Remove event listener</button>\n    <a href="https://google.com">Link with JavaScript handler</a>\n  </body>\n</html>\n')),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Copy and paste exercise 34 code"),Object(u.b)("li",{parentName:"ul"},"Add a link element like the one in html example"),Object(u.b)("li",{parentName:"ul"},"Select the link element using ",Object(u.b)("inlineCode",{parentName:"li"},"querySelector")," method"),Object(u.b)("li",{parentName:"ul"},"Add the link element an click event handler using ",Object(u.b)("inlineCode",{parentName:"li"},"addEventListener")),Object(u.b)("li",{parentName:"ul"},"When the user clicks on the link we need to prevent the default behaviour"),Object(u.b)("li",{parentName:"ul"},"Show the following message using alert")),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{}),"This link doesn't send us to a differen page as we're preventing the default behaviour\n")))}f.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=o.a.createContext({}),f=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},s=function(e){var t=f(e.components);return o.a.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,c=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),s=f(r),b=n,d=s["".concat(c,".").concat(b)]||s[b]||p[b]||u;return r?o.a.createElement(d,l({ref:t},a,{components:r})):o.a.createElement(d,l({ref:t},a))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,c=new Array(u);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var a=2;a<u;a++)c[a]=r[a];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},420:function(e,t,r){"use strict";e.exports=r(421)},421:function(e,t,r){"use strict";var n=r(422),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}function w(){}function x(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=g.prototype;var S=x.prototype=new w;S.constructor=x,n(S,g.prototype),S.isPureReactComponent=!0;var k={current:null},_={suspense:null},E={current:null},C=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,o={},c=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var a=Array(i),f=0;f<i;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:u,type:e,key:c,ref:l,props:o,_owner:E.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,T=[];function A(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function M(e,t,r){return null==e?0:function e(t,r,n,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var i=!1;if(null===t)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case u:case c:i=!0}}if(i)return n(o,t,""===r?"."+L(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){var f=r+L(l=t[a],a);i+=e(l,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=h&&t[h]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),a=0;!(l=t.next()).done;)i+=e(l=l.value,f=r+L(l,a++),n,o);else if("object"===l)throw n=""+t,v(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return i}(e,"",t,r)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(R,"$&/")+"/"),M(e,q,t=A(t,u,n,o)),D(t)}function F(){var e=k.current;if(null===e)throw v(Error(321));return e}var B={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,I,t=A(null,null,t,r)),D(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:l,Profiler:a,StrictMode:i,Suspense:b,unstable_SuspenseList:d,createElement:N,cloneElement:function(e,t,r){if(null==e)throw v(Error(267),e);var o=n({},e.props),c=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=E.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in t)C.call(t,f)&&!P.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==a?a[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){a=Array(f);for(var s=0;s<f;s++)a[s]=arguments[s+2];o.children=a}return{$$typeof:u,type:e.type,key:c,ref:l,props:o,_owner:i}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=_.suspense;_.suspense=void 0===t?null:t;try{e()}finally{_.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:_,ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n}},V={default:B},H=V&&B||V;e.exports=H.default||H},422:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,l,i=c(e),a=1;a<arguments.length;a++){for(var f in r=Object(arguments[a]))o.call(r,f)&&(i[f]=r[f]);if(n){l=n(r);for(var s=0;s<l.length;s++)u.call(r,l[s])&&(i[l[s]]=r[l[s]])}}return i}}}]);