(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{311:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),o=(r(0),r(455)),c={},i={id:"exercises/browser/ex_43",title:"ex_43",description:"# Exercise 43\r",source:"@site/..\\docs\\exercises\\browser\\ex_43.md",permalink:"/node_comit/docs/exercises/browser/ex_43",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_43.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_42",permalink:"/node_comit/docs/exercises/browser/ex_42"},next:{title:"ex_44",permalink:"/node_comit/docs/exercises/browser/ex_44"}},l=[{value:"index.html",id:"indexhtml",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"exercise-43"},"Exercise 43"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_43\n  |-- index.html\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8" />\n    <title>Form Properties</title>\n  </head>\n  <body>\n    <form\n      action="save_user.html"\n      method="post"\n      enctype="application/x-www-form-urlencoded"\n      name="login"\n    >\n      <input type="text" id="username" name="username" />\n      <input type="password" id="pass" name="pass" />\n      <input type="submit" name="submit" value="Send" />\n    </form>\n    <div></div>\n  </body>\n</html>\n')),Object(o.b)("h2",{id:"indexhtml"},"index.html"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(o.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(o.b)("li",{parentName:"ul"},"Select the form element using any of the JavaScript selectors"),Object(o.b)("li",{parentName:"ul"},"Crete a variable for each form property"),Object(o.b)("li",{parentName:"ul"},"Example define a action variable and assign the form action property"),Object(o.b)("li",{parentName:"ul"},"Show each form property value as div content")))}s.isMDXComponent=!0},455:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return r?a.a.createElement(d,i({ref:t},p,{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);