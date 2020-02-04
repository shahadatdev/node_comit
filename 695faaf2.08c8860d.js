/*! For license information please see 695faaf2.08c8860d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{214:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),l=(r(420),r(419)),u={},a={id:"exercises/css/ex_12",title:"ex_12",description:"# Exercise 12",source:"@site/../docs/exercises/css/ex_12.md",permalink:"/docs/exercises/css/ex_12",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/exercises/css/ex_12.md"},i=[{value:"index12.html",id:"index12html",children:[]}],c={rightToc:i};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"exercise-12"},"Exercise 12"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Create a index12.html file"),Object(l.b)("li",{parentName:"ul"},"Copy and paste the following HTML code:")),Object(l.b)("h2",{id:"index12html"},"index12.html"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Learning CSS</title>\n  </head>\n  <body>\n    <ul>\n      <li>item 1</li>\n      <li>item 2</li>\n      <li>item 3</li>\n      <li>item 4</li>\n      <li>item 5</li>\n    </ul>\n  </body>\n</html>\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"After applying all styles the document must look like this:")),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"./results/ex_12.png",alt:"Ex 12"}))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Add a style element"),Object(l.b)("li",{parentName:"ul"},"Select the body element and apply the following styles:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Use Arial, Helvetica, sans-serif as font family"))),Object(l.b)("li",{parentName:"ul"},"Select all the unordered list element and apply the following styles:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Background color must be lightblue"),Object(l.b)("li",{parentName:"ul"},"Use 1px solid blue for all sides border"),Object(l.b)("li",{parentName:"ul"},"Add 20px padding to all sides"),Object(l.b)("li",{parentName:"ul"},"Center align text"),Object(l.b)("li",{parentName:"ul"},"Change the font size to 0"))),Object(l.b)("li",{parentName:"ul"},"Select all list item elements and apply the following styles:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Change the display property to inline-block"),Object(l.b)("li",{parentName:"ul"},"Use mediumblue for font color"),Object(l.b)("li",{parentName:"ul"},"Use 1px dashed blue only for the right side"),Object(l.b)("li",{parentName:"ul"},"Remove all padding"),Object(l.b)("li",{parentName:"ul"},"Apply 10px padding only to the right side"),Object(l.b)("li",{parentName:"ul"},"Add 10px to the right margin"),Object(l.b)("li",{parentName:"ul"},"Change the font size to 16px"))),Object(l.b)("li",{parentName:"ul"},"Use the last-child pseudo-class to select only the last list item and apply the following style:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Remove all borders")))))}s.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},f=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),b=n,y=f["".concat(u,".").concat(b)]||f[b]||p[b]||l;return r?o.a.createElement(y,a({ref:t},c,{components:r})):o.a.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,u=new Array(l);u[0]=b;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,u[1]=a;for(var c=2;c<l;c++)u[c]=r[c];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},420:function(e,t,r){"use strict";e.exports=r(421)},421:function(e,t,r){"use strict";var n=r(422),o="function"==typeof Symbol&&Symbol.for,l=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.suspense_list"):60120,d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||j}function w(){}function x(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||j}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw O(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var S=x.prototype=new w;S.constructor=x,n(S,v.prototype),S.isPureReactComponent=!0;var _={current:null},k={suspense:null},N={current:null},C=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},u=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)C.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var c=Array(i),s=0;s<i;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:l,type:e,key:u,ref:a,props:o,_owner:N.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var R=/\/+/g,A=[];function T(e,t,r,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function U(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function D(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var i=!1;if(null===t)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case l:case u:i=!0}}if(i)return n(o,t,""===r?"."+M(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var s=r+M(a=t[c],c);i+=e(a,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),c=0;!(a=t.next()).done;)i+=e(a=a.value,s=r+M(a,c++),n,o);else if("object"===a)throw n=""+t,O(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return i}(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var l="";null!=r&&(l=(""+r).replace(R,"$&/")+"/"),D(e,L,t=T(t,l,n,o)),U(t)}function F(){var e=_.current;if(null===e)throw O(Error(321));return e}var z={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,I,t=T(null,null,t,r)),U(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw O(Error(143));return e}},createRef:function(){return{current:null}},Component:v,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:a,Profiler:c,StrictMode:i,Suspense:b,unstable_SuspenseList:y,createElement:P,cloneElement:function(e,t,r){if(null==e)throw O(Error(267),e);var o=n({},e.props),u=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=N.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)C.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:l,type:e.type,key:u,ref:a,props:o,_owner:i}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=k.suspense;k.suspense=void 0===t?null:t;try{e()}finally{k.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentBatchConfig:k,ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n}},B={default:z},H=B&&z||B;e.exports=H.default||H},422:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,a,i=u(e),c=1;c<arguments.length;c++){for(var s in r=Object(arguments[c]))o.call(r,s)&&(i[s]=r[s]);if(n){a=n(r);for(var f=0;f<a.length;f++)l.call(r,a[f])&&(i[a[f]]=r[a[f]])}}return i}}}]);