/*! For license information please see f0ded66a.c39c9d55.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{404:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),u=(n(422),n(421)),c={},l={id:"exercises/browser/ex_17",title:"ex_17",description:"# Exercise 17",source:"@site/../docs/exercises/browser/ex_17.md",permalink:"/node_comit/docs/exercises/browser/ex_17",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_17.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_16",permalink:"/node_comit/docs/exercises/browser/ex_16"},next:{title:"ex_18",permalink:"/node_comit/docs/exercises/browser/ex_18"}},a=[{value:"index.html",id:"indexhtml",children:[]}],i={rightToc:a};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"exercise-17"},"Exercise 17"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_17\n  |-- index.html\n")),Object(u.b)("h2",{id:"indexhtml"},"index.html"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(u.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(u.b)("li",{parentName:"ul"},"Add the following html code")),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>Attributes</title>\n    <style>\n      a {\n        font-family: Arial, Helvetica, sans-serif;\n      }\n\n      .menu {\n        display: block;\n        width: 400px;\n        border: 1px solid black;\n        background-color: #eee;\n        padding: 5px 0 5px 10px;\n      }\n\n      a.menu {\n        color: black;\n        text-decoration: none;\n      }\n\n      a.menu:hover {\n        background-color: #ddd;\n      }\n\n      a.green {\n        color: green;\n      }\n      a.blue {\n        color: blue;\n      }\n      a.red {\n        color: red;\n      }\n    </style>\n  </head>\n  <body>\n    <a href="#" class="menu">Link 1</a>\n    <a href="#" class="menu">Link 2</a>\n    <a href="#" class="menu">Link 3</a>\n    <a href="#" class="menu">Link 4</a>\n    <a href="#" class="menu">Link 5</a>\n  </body>\n</html>\n')),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Ask the user to select a color showing the following message:")),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{}),"Please choose & input one of the following colors: green, blue or red\n")),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Select the first link element"),Object(u.b)("li",{parentName:"ul"},"Add the user selected color as class name to the selected element (first link)"),Object(u.b)("li",{parentName:"ul"},"Avoid adding the class if the user inputs a color that's not an option"),Object(u.b)("li",{parentName:"ul"},"So if the user selects blue as color we need to add the blue class to the first link")))}s.isMDXComponent=!0},421:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},f=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,c=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||u;return n?o.a.createElement(b,l({ref:t},i,{components:n})):o.a.createElement(b,l({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,c=new Array(u);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<u;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},422:function(e,t,n){"use strict";e.exports=n(423)},423:function(e,t,n){"use strict";var r=n(424),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.suspense_list"):60120,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||O}function w(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=j.prototype;var k=x.prototype=new w;k.constructor=x,r(k,j.prototype),k.isPureReactComponent=!0;var _={current:null},S={suspense:null},P={current:null},E=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function $(e,t,n){var r,o={},c=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var i=Array(a),s=0;s<a;s++)i[s]=arguments[s+2];o.children=i}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:u,type:e,key:c,ref:l,props:o,_owner:P.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,A=[];function T(e,t,n,r){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function D(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var a=!1;if(null===t)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case u:case c:a=!0}}if(a)return r(o,t,""===n?"."+M(t,0):n),1;if(a=0,n=""===n?".":n+":",Array.isArray(t))for(var i=0;i<t.length;i++){var s=n+M(l=t[i],i);a+=e(l,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),i=0;!(l=t.next()).done;)a+=e(l=l.value,s=n+M(l,i++),r,o);else if("object"===l)throw r=""+t,v(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return a}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(R,"$&/")+"/"),D(e,I,t=T(t,u,r,o)),L(t)}function F(){var e=_.current;if(null===e)throw v(Error(321));return e}var B={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,U,t=T(null,null,t,n)),L(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!N(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:l,Profiler:i,StrictMode:a,Suspense:d,unstable_SuspenseList:b,createElement:$,cloneElement:function(e,t,n){if(null==e)throw v(Error(267),e);var o=r({},e.props),c=e.key,l=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,a=P.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)E.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:u,type:e.type,key:c,ref:l,props:o,_owner:a}},createFactory:function(e){var t=$.bind(null,e);return t.type=e,t},isValidElement:N,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var n=S.suspense;S.suspense=void 0===t?null:t;try{e()}finally{S.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentBatchConfig:S,ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:r}},H={default:B},V=H&&B||H;e.exports=V.default||V},424:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,a=c(e),i=1;i<arguments.length;i++){for(var s in n=Object(arguments[i]))o.call(n,s)&&(a[s]=n[s]);if(r){l=r(n);for(var f=0;f<l.length;f++)u.call(n,l[f])&&(a[l[f]]=n[l[f]])}}return a}}}]);