/*! For license information please see 9213b206.24320f09.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{283:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),u=(r(420),r(419)),c={},l={id:"exercises/node/ex_11",title:"ex_11",description:"# Exercise 11",source:"@site/../docs/exercises/node/ex_11.md",permalink:"/docs/exercises/node/ex_11",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/exercises/node/ex_11.md"},a=[{value:"index.js",id:"indexjs",children:[]},{value:"index.html",id:"indexhtml",children:[]},{value:"products.html",id:"productshtml",children:[]}],i={rightToc:a};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"exercise-11"},"Exercise 11"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_11\n  |-- index.js\n  |-- index.html\n  |-- products.html\n")),Object(u.b)("h2",{id:"indexjs"},"index.js"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create a Express web server using port 3000"),Object(u.b)("li",{parentName:"ul"},"Create the following routes:",Object(u.b)("ul",{parentName:"li"},Object(u.b)("li",{parentName:"ul"},"GET '/': send the index.html file"),Object(u.b)("li",{parentName:"ul"},"GET '/products': send the products.html file")))),Object(u.b)("h2",{id:"indexhtml"},"index.html"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create an HTML document"),Object(u.b)("li",{parentName:"ul"},"Create an h1 element with the Home text as content"),Object(u.b)("li",{parentName:"ul"},"Create an h2 element with Lorem Ipsum as content"),Object(u.b)("li",{parentName:"ul"},"Create three paragraph elements with random lorem ipsum text (you can google the site or look to the HTML docs)"),Object(u.b)("li",{parentName:"ul"},"Create a link element to link to products.html and add Products text as content")),Object(u.b)("h2",{id:"productshtml"},"products.html"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("p",{parentName:"li"},"Create an HTML document")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("p",{parentName:"li"},"Create an h1 element with the Products text as content")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("p",{parentName:"li"},"Add a table element with 10 products that you'll like to get")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("p",{parentName:"li"},"The table columns must be product name, price and store name")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("p",{parentName:"li"},"Create a link element to link to index.html and add Home text as content")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("p",{parentName:"li"},"Open the browser and call:"),Object(u.b)("ul",{parentName:"li"},Object(u.b)("li",{parentName:"ul"},"localhost:3000 (get index.html)"),Object(u.b)("li",{parentName:"ul"},"localhost:3000/products (get products.html)"),Object(u.b)("li",{parentName:"ul"},"Make sure that the links work fine")))))}s.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},f=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,c=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),f=s(r),b=n,d=f["".concat(c,".").concat(b)]||f[b]||p[b]||u;return r?o.a.createElement(d,l({ref:t},i,{components:r})):o.a.createElement(d,l({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,c=new Array(u);c[0]=b;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<u;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},420:function(e,t,r){"use strict";e.exports=r(421)},421:function(e,t,r){"use strict";var n=r(422),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||j}function w(){}function x(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||j}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw O(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=g.prototype;var S=x.prototype=new w;S.constructor=x,n(S,g.prototype),S.isPureReactComponent=!0;var k={current:null},_={suspense:null},C={current:null},E=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},c=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var i=Array(a),s=0;s<a;s++)i[s]=arguments[s+2];o.children=i}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:u,type:e,key:c,ref:l,props:o,_owner:C.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,T=[];function M(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function D(e,t,r){return null==e?0:function e(t,r,n,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var a=!1;if(null===t)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case u:case c:a=!0}}if(a)return n(o,t,""===r?"."+L(t,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var i=0;i<t.length;i++){var s=r+L(l=t[i],i);a+=e(l,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),i=0;!(l=t.next()).done;)a+=e(l=l.value,s=r+L(l,i++),n,o);else if("object"===l)throw n=""+t,O(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return a}(e,"",t,r)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(R,"$&/")+"/"),D(e,U,t=M(t,u,n,o)),A(t)}function H(){var e=k.current;if(null===e)throw O(Error(321));return e}var F={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,I,t=M(null,null,t,r)),A(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw O(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return H().useCallback(e,t)},useContext:function(e,t){return H().useContext(e,t)},useEffect:function(e,t){return H().useEffect(e,t)},useImperativeHandle:function(e,t,r){return H().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return H().useLayoutEffect(e,t)},useMemo:function(e,t){return H().useMemo(e,t)},useReducer:function(e,t,r){return H().useReducer(e,t,r)},useRef:function(e){return H().useRef(e)},useState:function(e){return H().useState(e)},Fragment:l,Profiler:i,StrictMode:a,Suspense:b,unstable_SuspenseList:d,createElement:P,cloneElement:function(e,t,r){if(null==e)throw O(Error(267),e);var o=n({},e.props),c=e.key,l=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,a=C.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)E.call(t,s)&&!N.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:u,type:e.type,key:c,ref:l,props:o,_owner:a}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=_.suspense;_.suspense=void 0===t?null:t;try{e()}finally{_.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:_,ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n}},V={default:F},B=V&&F||V;e.exports=B.default||B},422:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,l,a=c(e),i=1;i<arguments.length;i++){for(var s in r=Object(arguments[i]))o.call(r,s)&&(a[s]=r[s]);if(n){l=n(r);for(var f=0;f<l.length;f++)u.call(r,l[f])&&(a[l[f]]=r[l[f]])}}return a}}}]);