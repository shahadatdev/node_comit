(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{427:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(455)),c={},i={id:"exercises/node/ex_12",title:"ex_12",description:"# Exercise 12\r",source:"@site/..\\docs\\exercises\\node\\ex_12.md",permalink:"/node_comit/docs/exercises/node/ex_12",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/node/ex_12.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_11",permalink:"/node_comit/docs/exercises/node/ex_11"},next:{title:"ex_13",permalink:"/node_comit/docs/exercises/node/ex_13"}},l=[{value:"index.js",id:"indexjs",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"exercise-12"},"Exercise 12"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_12\n  |-- index.js\n")),Object(o.b)("h2",{id:"indexjs"},"index.js"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a Express web server using port 3000"),Object(o.b)("li",{parentName:"ul"},"Create the following routes:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"GET '/api/products': send the following object as JSON")))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"{\n  description: 'Products',\n  items: [\n    { name: 'Star Wars jacket' , price: 100},\n    { name: 'FIFA 22 PS4' , price: 79},\n    { name: 'Superheore t-shirt' , price: 10},\n    { name: 'Riders game shirt' , price: 200},\n    { name: 'Large Meat lovers pizza' , price: 12},\n    { name: 'Canada Dry  bottle' , price: 2}\n  ]\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the browser and request ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:3000/api/products")),Object(o.b)("li",{parentName:"ul"},"You should get the JSON object as response")))}p.isMDXComponent=!0},455:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,i({ref:t},s,{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);