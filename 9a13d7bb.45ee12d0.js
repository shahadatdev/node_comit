/*! For license information please see 9a13d7bb.45ee12d0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{298:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),a=(r(422),r(421)),l={},i={id:"exercises/browser/ex_42",title:"ex_42",description:"# Exercise 42",source:"@site/../docs/exercises/browser/ex_42.md",permalink:"/node_comit/docs/exercises/browser/ex_42",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_42.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_41",permalink:"/node_comit/docs/exercises/browser/ex_41"},next:{title:"ex_43",permalink:"/node_comit/docs/exercises/browser/ex_43"}},c=[{value:"index.html",id:"indexhtml",children:[]},{value:"styles.css",id:"stylescss",children:[]},{value:"script.js",id:"scriptjs",children:[{value:"Tip:",id:"tip",children:[]}]}],u={rightToc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"exercise-42"},"Exercise 42"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_42\n  |--img\n  |  |-- batman.png\n  |  |-- batmanwb.png\n  |  |-- flash.png\n  |  |-- flashwb.png\n  |  |-- superman.png\n  |  |-- supermanwb.png\n  |  |-- wonder_woman.png\n  |  |-- wonder_womanwb.png\n  |\n  |-- index.html\n  |-- style.css\n  |-- script.js\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Download the following ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"../../resources/images/js-browser/"}),"superheroes images")," and add the to the img folder")),Object(a.b)("h2",{id:"indexhtml"},"index.html"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(a.b)("li",{parentName:"ul"},"Link the css ",Object(a.b)("inlineCode",{parentName:"li"},"styles.css")," file"),Object(a.b)("li",{parentName:"ul"},"Link the js ",Object(a.b)("inlineCode",{parentName:"li"},"script.js")," file")),Object(a.b)("h2",{id:"stylescss"},"styles.css"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Select the body element and add the following properties:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Background color: #eee"))),Object(a.b)("li",{parentName:"ul"},"Select all the img elements and add the following properties:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Border: 1px solid black"),Object(a.b)("li",{parentName:"ul"},"Left, right & Bottom margin: 20px"),Object(a.b)("li",{parentName:"ul"},"Cursor must be pointer"),Object(a.b)("li",{parentName:"ul"},"Border radius: 10px"))),Object(a.b)("li",{parentName:"ul"},"Select the hover pseudoclass for images and add the following properties:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Box shadow: 2px 2px 16px 1px rgba(0,0,0,0.75)")))),Object(a.b)("h2",{id:"scriptjs"},"script.js"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Define a images array and add all the images names (only if wb is part of the name) and extension"),Object(a.b)("li",{parentName:"ul"},"Create a img element for each image in the images array"),Object(a.b)("li",{parentName:"ul"},"Set the image ",Object(a.b)("inlineCode",{parentName:"li"},"src")," attribute with the image name (example: batmanwb.png)"),Object(a.b)("li",{parentName:"ul"},"We'll show the black and white pictures When the document gets rendered"),Object(a.b)("li",{parentName:"ul"},"Replace the black and white picture for the color one when the user rolls over the image element (like it's active)"),Object(a.b)("li",{parentName:"ul"},"Replace the color image for the black and white one when the user rolls out of the image element (like it's inactive again)"),Object(a.b)("li",{parentName:"ul"},"Show an alert with the superhero name in upper case when the user clicks on an image using"),Object(a.b)("li",{parentName:"ul"},"Append all the created image elements to the body element")),Object(a.b)("h3",{id:"tip"},"Tip:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The images has almost the same name for black and white and color"),Object(a.b)("li",{parentName:"ul"},"You can use the picture name to show the superheroe name")))}s.isMDXComponent=!0},421:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,m=p["".concat(l,".").concat(b)]||p[b]||f[b]||a;return r?o.a.createElement(m,i({ref:t},u,{components:r})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},422:function(e,t,r){"use strict";e.exports=r(423)},423:function(e,t,r){"use strict";var n=r(424),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.suspense_list"):60120,d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||j}function w(){}function x(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||j}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw O(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var _=x.prototype=new w;_.constructor=x,n(_,v.prototype),_.isPureReactComponent=!0;var S={current:null},k={suspense:null},N={current:null},C=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:l,ref:i,props:o,_owner:N.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,T=[];function A(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function L(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var c=!1;if(null===t)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case l:c=!0}}if(c)return n(o,t,""===r?"."+M(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=r+M(i=t[u],u);c+=e(i,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(i=t.next()).done;)c+=e(i=i.value,s=r+M(i,u++),n,o);else if("object"===i)throw n=""+t,O(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return c}(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function B(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,n,r,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function I(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(R,"$&/")+"/"),L(e,B,t=A(t,a,n,o)),D(t)}function q(){var e=S.current;if(null===e)throw O(Error(321));return e}var F={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return I(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;L(e,U,t=A(null,null,t,r)),D(t)},count:function(e){return L(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw O(Error(143));return e}},createRef:function(){return{current:null}},Component:v,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,r){return q().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,r){return q().useReducer(e,t,r)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:i,Profiler:u,StrictMode:c,Suspense:b,unstable_SuspenseList:m,createElement:P,cloneElement:function(e,t,r){if(null==e)throw O(Error(267),e);var o=n({},e.props),l=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=N.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)C.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:a,type:e.type,key:l,ref:i,props:o,_owner:c}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=k.suspense;k.suspense=void 0===t?null:t;try{e()}finally{k.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:S,ReactCurrentBatchConfig:k,ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n}},V={default:F},H=V&&F||V;e.exports=H.default||H},424:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,c=l(e),u=1;u<arguments.length;u++){for(var s in r=Object(arguments[u]))o.call(r,s)&&(c[s]=r[s]);if(n){i=n(r);for(var p=0;p<i.length;p++)a.call(r,i[p])&&(c[i[p]]=r[i[p]])}}return c}}}]);