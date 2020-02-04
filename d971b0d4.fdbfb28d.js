(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{409:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),a=(r(0),r(455)),c={},i={id:"exercises/browser/ex_36",title:"ex_36",description:"# Exercise 36\r",source:"@site/..\\docs\\exercises\\browser\\ex_36.md",permalink:"/node_comit/docs/exercises/browser/ex_36",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_36.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_35",permalink:"/node_comit/docs/exercises/browser/ex_35"},next:{title:"ex_37",permalink:"/node_comit/docs/exercises/browser/ex_37"}},l=[{value:"index.html",id:"indexhtml",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"exercise-36"},"Exercise 36"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_36\n  |-- index.html\n")),Object(a.b)("h2",{id:"indexhtml"},"index.html"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(a.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(a.b)("li",{parentName:"ul"},"Copy and paste the all the code (html and js) from exercise 35"),Object(a.b)("li",{parentName:"ul"},"Select the html element using ",Object(a.b)("inlineCode",{parentName:"li"},"querySelector")," method"),Object(a.b)("li",{parentName:"ul"},"Add a click event handler to the html element using ",Object(a.b)("inlineCode",{parentName:"li"},"addEventListener")),Object(a.b)("li",{parentName:"ul"},"When the user clicks on any position we need to show the folloing console message")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{})," Click possition: x-axis: %xposition%, y-axis: %yposition%\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Use the event x and y properties to get the coordinates and show the message")))}p.isMDXComponent=!0},455:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(m,i({ref:t},s,{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);