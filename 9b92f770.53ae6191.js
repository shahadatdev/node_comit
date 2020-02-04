(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{327:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),a=(r(0),r(455)),c={},i={id:"exercises/mongo/ex_10",title:"ex_10",description:"# Exercise 10\r",source:"@site/..\\docs\\exercises\\mongo\\ex_10.md",permalink:"/node_comit/docs/exercises/mongo/ex_10",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/mongo/ex_10.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_9",permalink:"/node_comit/docs/exercises/mongo/ex_9"},next:{title:"ex_11",permalink:"/node_comit/docs/exercises/mongo/ex_11"}},l=[{value:"index.js",id:"indexjs",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"exercise-10"},"Exercise 10"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_10\n  |-- index.js\n")),Object(a.b)("h2",{id:"indexjs"},"index.js"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a Express web server using port 3000"),Object(a.b)("li",{parentName:"ul"},"Create the following routes:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"GET '/'",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Connect to the MongoDB with the npm package ",Object(a.b)("inlineCode",{parentName:"li"},"mongodb")),Object(a.b)("li",{parentName:"ul"},"Select comics database"),Object(a.b)("li",{parentName:"ul"},"Find all documents in the superheroes collection"),Object(a.b)("li",{parentName:"ul"},"Returns an JSON array of superheroes")))))))}p.isMDXComponent=!0},455:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||a;return r?o.a.createElement(d,i({ref:t},u,{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);