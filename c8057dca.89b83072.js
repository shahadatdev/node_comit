/*! For license information please see c8057dca.89b83072.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{359:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(6),a=(r(422),r(421)),c={id:"07-bootstrap",title:"Bootstrap"},i={id:"07-bootstrap",title:"Bootstrap",description:"[<- Go Back](06-css.md)",source:"@site/../docs/07-bootstrap.md",permalink:"/node_comit/docs/07-bootstrap",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/07-bootstrap.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"course",previous:{title:"CSS - Cascade Style Sheet",permalink:"/node_comit/docs/06-css"},next:{title:"Javascript",permalink:"/node_comit/docs/08-javascript"}},s=[{value:"Get Started",id:"get-started",children:[{value:"CSS",id:"css",children:[]},{value:"JS",id:"js",children:[]},{value:"Starter template",id:"starter-template",children:[]}]},{value:"Layout",id:"layout",children:[{value:"Grid system",id:"grid-system",children:[]}]},{value:"Content",id:"content",children:[{value:"Images",id:"images",children:[]}]},{value:"Components",id:"components",children:[{value:"Buttons",id:"buttons",children:[]},{value:"Forms",id:"forms",children:[]},{value:"Navbar",id:"navbar",children:[]}]},{value:"Utilities",id:"utilities",children:[{value:"Colors",id:"colors",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/06-css"}),"<- Go Back")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Build responsive, mobile-first projects on the web with the world\u2019s most popular front-end component library."),Object(a.b)("li",{parentName:"ul"},"Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.")),Object(a.b)("h2",{id:"get-started"},"Get Started"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Looking to quickly add Bootstrap to your project? Use ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://getbootstrap.com/docs/4.3/getting-started/introduction/"}),"BootstrapCDN"),". Using a package manager or need to download the source files? ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://getbootstrap.com/docs/4.3/getting-started/download/"}),"Head to the downloads page"),".")),Object(a.b)("h3",{id:"css"},"CSS"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Copy-paste the stylesheet ",Object(a.b)("inlineCode",{parentName:"li"},"<link>")," into your ",Object(a.b)("inlineCode",{parentName:"li"},"<head>")," before all other stylesheets to load our CSS.",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<link\n  rel="stylesheet"\n  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"\n  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"\n  crossorigin="anonymous"\n/>\n')))),Object(a.b)("h3",{id:"js"},"JS"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Many of the components require the use of JavaScript to function. Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. Place the following ",Object(a.b)("inlineCode",{parentName:"p"},"<script>"),"s near the end of your pages, right before the closing ",Object(a.b)("inlineCode",{parentName:"p"},"</body>")," tag, to enable them. jQuery must come first, then Popper.js, and then the JavaScript plugins."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script\n  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"\n  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"\n  crossorigin="anonymous"\n><\/script>\n<script\n  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"\n  integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"\n  crossorigin="anonymous"\n><\/script>\n<script\n  src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"\n  integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"\n  crossorigin="anonymous"\n><\/script>\n')))),Object(a.b)("h3",{id:"starter-template"},"Starter template"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    \x3c!-- Required meta tags --\x3e\n    <meta charset="utf-8" />\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1, shrink-to-fit=no"\n    />\n\n    \x3c!-- Bootstrap CSS --\x3e\n    <link\n      rel="stylesheet"\n      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"\n      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"\n      crossorigin="anonymous"\n    />\n\n    <title>Hello, world!</title>\n  </head>\n  <body>\n    <h1>Hello, world!</h1>\n\n    \x3c!-- Optional JavaScript --\x3e\n    \x3c!-- jQuery first, then Popper.js, then Bootstrap JS --\x3e\n    <script\n      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"\n      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"\n      crossorigin="anonymous"\n    ><\/script>\n    <script\n      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"\n      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"\n      crossorigin="anonymous"\n    ><\/script>\n    <script\n      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"\n      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"\n      crossorigin="anonymous"\n    ><\/script>\n  </body>\n</html>\n')))),Object(a.b)("h4",{id:"practice"},"Practice"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/exercises/bootstrap/ex_1"}),"Exercise 1")),Object(a.b)("h2",{id:"layout"},"Layout"),Object(a.b)("h3",{id:"grid-system"},"Grid system"),Object(a.b)("p",null,"\ud83d\udea7 Under Construction \ud83d\udea7"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.3/layout/grid/"}),"Please review the Bootstrap Documentation")),Object(a.b)("h4",{id:"practice-1"},"Practice"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/exercises/bootstrap/ex_2"}),"Exercise 2")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/exercises/bootstrap/ex_3"}),"Exercise 3")),Object(a.b)("h2",{id:"content"},"Content"),Object(a.b)("h3",{id:"images"},"Images"),Object(a.b)("p",null,"\ud83d\udea7 Under Construction \ud83d\udea7"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.3/content/images/"}),"Please review the Bootstrap Documentation")),Object(a.b)("h4",{id:"practice-2"},"Practice"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/exercises/bootstrap/ex_4"}),"Exercise 4")),Object(a.b)("h2",{id:"components"},"Components"),Object(a.b)("h3",{id:"buttons"},"Buttons"),Object(a.b)("p",null,"\ud83d\udea7 Under Construction \ud83d\udea7"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.3/components/buttons/"}),"Please review the Bootstrap Documentation")),Object(a.b)("h3",{id:"forms"},"Forms"),Object(a.b)("p",null,"\ud83d\udea7 Under Construction \ud83d\udea7"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.3/components/forms/"}),"Please review the Bootstrap Documentation")),Object(a.b)("h4",{id:"practice-3"},"Practice"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/exercises/bootstrap/ex_5"}),"Exercise 5")),Object(a.b)("h3",{id:"navbar"},"Navbar"),Object(a.b)("p",null,"\ud83d\udea7 Under Construction \ud83d\udea7"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.3/components/navbar/"}),"Please review the Bootstrap Documentation")),Object(a.b)("h4",{id:"practice-4"},"Practice"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/node_comit/docs/exercises/bootstrap/ex_6"}),"Exercise 6")),Object(a.b)("h2",{id:"utilities"},"Utilities"),Object(a.b)("h3",{id:"colors"},"Colors"),Object(a.b)("p",null,"\ud83d\udea7 Under Construction \ud83d\udea7"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.3/utilities/colors/"}),"Please review the Bootstrap Documentation")))}u.isMDXComponent=!0},421:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return r?o.a.createElement(d,i({ref:t},l,{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},422:function(e,t,r){"use strict";e.exports=r(423)},423:function(e,t,r){"use strict";var n=r(424),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,b=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var y="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||O}function w(){}function S(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||O}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw j(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var x=S.prototype=new w;x.constructor=S,n(x,v.prototype),x.isPureReactComponent=!0;var C={current:null},P={suspense:null},k={current:null},_=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)_.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:k.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var T=/\/+/g,D=[];function B(e,t,r,n){if(D.length){var o=D.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function J(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function U(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var s=!1;if(null===t)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case a:case c:s=!0}}if(s)return n(o,t,""===r?"."+I(t,0):r),1;if(s=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var u=r+I(i=t[l],l);s+=e(i,u,n,o)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=y&&t[y]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),l=0;!(i=t.next()).done;)s+=e(i=i.value,u=r+I(i,l++),n,o);else if("object"===i)throw n=""+t,j(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return s}(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,n,r,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+r)),n.push(e))}function $(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(T,"$&/")+"/"),U(e,q,t=B(t,a,n,o)),J(t)}function Q(){var e=C.current;if(null===e)throw j(Error(321));return e}var H={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return $(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;U(e,M,t=B(null,null,t,r)),J(t)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var t=[];return $(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw j(Error(143));return e}},createRef:function(){return{current:null}},Component:v,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return Q().useCallback(e,t)},useContext:function(e,t){return Q().useContext(e,t)},useEffect:function(e,t){return Q().useEffect(e,t)},useImperativeHandle:function(e,t,r){return Q().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return Q().useLayoutEffect(e,t)},useMemo:function(e,t){return Q().useMemo(e,t)},useReducer:function(e,t,r){return Q().useReducer(e,t,r)},useRef:function(e){return Q().useRef(e)},useState:function(e){return Q().useState(e)},Fragment:i,Profiler:l,StrictMode:s,Suspense:f,unstable_SuspenseList:d,createElement:E,cloneElement:function(e,t,r){if(null==e)throw j(Error(267),e);var o=n({},e.props),c=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)_.call(t,u)&&!N.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:s}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=P.suspense;P.suspense=void 0===t?null:t;try{e()}finally{P.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:P,ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n}},z={default:H},A=z&&H||z;e.exports=A.default||A},424:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,s=c(e),l=1;l<arguments.length;l++){for(var u in r=Object(arguments[l]))o.call(r,u)&&(s[u]=r[u]);if(n){i=n(r);for(var p=0;p<i.length;p++)a.call(r,i[p])&&(s[i[p]]=r[i[p]])}}return s}}}]);