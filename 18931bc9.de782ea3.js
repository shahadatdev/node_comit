/*! For license information please see 18931bc9.de782ea3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{118:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),i=(r(421),r(420)),c={id:"14-debug",title:"Debugging & Troubleshooting"},u={id:"14-debug",title:"Debugging & Troubleshooting",description:"* Copy and paste the error into Google.",source:"@site/../docs/14-debug.md",permalink:"/node_comit/docs/14-debug",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/14-debug.md",sidebar:"course",previous:{title:"Deploying a Node.js Application",permalink:"/node_comit/docs/13-deploy"}},a=[{value:"Build Errors",id:"build-errors",children:[]},{value:"Debugging",id:"debugging",children:[{value:"Express Application",id:"express-application",children:[]},{value:"Using Breakpoints In Chrome DevTools",id:"using-breakpoints-in-chrome-devtools",children:[]}]},{value:"Resources",id:"resources",children:[]}],l={rightToc:a};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Copy and paste the error into Google.")),Object(i.b)("h2",{id:"build-errors"},"Build Errors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ensure that you have the correct dependencies in your ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")," and run a ",Object(i.b)("inlineCode",{parentName:"li"},"npm install"))),Object(i.b)("h4",{id:"exercises"},"Exercises"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/node_comit/docs/exercises/debug/ex_1"}),"Exercise 1")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/node_comit/docs/exercises/debug/ex_2"}),"Exercise 2"))),Object(i.b)("h2",{id:"debugging"},"Debugging"),Object(i.b)("h3",{id:"express-application"},"Express Application"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use VS Code's Debug tools\n",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"https://code.visualstudio.com/assets/docs/nodejs/nodejs-debugging/loaded-scripts-explorer.gif",alt:"VS Code Debug"}))),Object(i.b)("li",{parentName:"ul"},"Select the node file you want to run. ie. ",Object(i.b)("inlineCode",{parentName:"li"},"index.js")),Object(i.b)("li",{parentName:"ul"},"Add a configuration for the application, by clicking the dropdown next to the play Debug and select ",Object(i.b)("strong",{parentName:"li"},"Add Configuration")," and select ",Object(i.b)("strong",{parentName:"li"},"Node")),Object(i.b)("li",{parentName:"ul"},"It should autofill with the details of the project and look like the following:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  // Use IntelliSense to learn about possible attributes.\n  // Hover to view descriptions of existing attributes.\n  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Express App",\n      "skipFiles": [\n        "<node_internals>/**"\n      ],\n      "program": "${workspaceFolder}/index.js"\n    }\n  ]\n}\n'))),Object(i.b)("li",{parentName:"ul"},"Hit the play debug button to run the application"),Object(i.b)("li",{parentName:"ul"},"Place breakpoint in the application to stop the application to view the line.")),Object(i.b)("h4",{id:"exercises-1"},"Exercises"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/node_comit/docs/exercises/debug/ex_3"}),"Exercise 3"))),Object(i.b)("h3",{id:"using-breakpoints-in-chrome-devtools"},"Using Breakpoints In Chrome DevTools"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click the Sources tab."),Object(i.b)("li",{parentName:"ul"},"Open the file containing the line of code you want to break on."),Object(i.b)("li",{parentName:"ul"},"Go the line of code."),Object(i.b)("li",{parentName:"ul"},"To the left of the line of code is the line number column. Click on it. A blue icon appears on top of the line number column.\n",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"https://developers.google.com/web/tools/chrome-devtools/javascript/imgs/loc-breakpoint.png",alt:"A line-of-code breakpoint."})))),Object(i.b)("h4",{id:"exercises-2"},"Exercises"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/node_comit/docs/exercises/debug/ex_4"}),"Exercise 4")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/node_comit/docs/exercises/debug/ex_5"}),"Exercise 5"))),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"}),"Node.js debugging in VS Code")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints"}),"How To Pause Your Code With Breakpoints In Chrome DevTools"))))}s.isMDXComponent=!0},420:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||i;return r?o.a.createElement(d,u({ref:t},l,{components:r})):o.a.createElement(d,u({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<i;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},421:function(e,t,r){"use strict";e.exports=r(422)},422:function(e,t,r){"use strict";var n=r(423),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||j}function w(){}function x(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||j}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw g(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var k=x.prototype=new w;k.constructor=x,n(k,v.prototype),k.isPureReactComponent=!0;var S={current:null},N={suspense:null},_={current:null},E=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:_.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var D=/\/+/g,R=[];function T(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var a=!1;if(null===t)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case i:case c:a=!0}}if(a)return n(o,t,""===r?"."+U(t,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=r+U(u=t[l],l);a+=e(u,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(u=t.next()).done;)a+=e(u=u.value,s=r+U(u,l++),n,o);else if("object"===u)throw n=""+t,g(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return a}(e,"",t,r)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(D,"$&/")+"/"),I(e,M,t=T(t,i,n,o)),A(t)}function B(){var e=S.current;if(null===e)throw g(Error(321));return e}var L={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,F,t=T(null,null,t,r)),A(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw g(Error(143));return e}},createRef:function(){return{current:null}},Component:v,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return B().useCallback(e,t)},useContext:function(e,t){return B().useContext(e,t)},useEffect:function(e,t){return B().useEffect(e,t)},useImperativeHandle:function(e,t,r){return B().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return B().useLayoutEffect(e,t)},useMemo:function(e,t){return B().useMemo(e,t)},useReducer:function(e,t,r){return B().useReducer(e,t,r)},useRef:function(e){return B().useRef(e)},useState:function(e){return B().useState(e)},Fragment:u,Profiler:l,StrictMode:a,Suspense:b,unstable_SuspenseList:d,createElement:P,cloneElement:function(e,t,r){if(null==e)throw g(Error(267),e);var o=n({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=_.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)E.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:i,type:e.type,key:c,ref:u,props:o,_owner:a}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=N.suspense;N.suspense=void 0===t?null:t;try{e()}finally{N.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:S,ReactCurrentBatchConfig:N,ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n}},V={default:L},H=V&&L||V;e.exports=H.default||H},423:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,a=c(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(a[s]=r[s]);if(n){u=n(r);for(var p=0;p<u.length;p++)i.call(r,u[p])&&(a[u[p]]=r[u[p]])}}return a}}}]);