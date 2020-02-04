(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{412:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(6),i=(n(0),n(419)),c={},o={id:"exercises/browser/ex_51",title:"ex_51",description:"# Exercise 51\r",source:"@site/..\\docs\\exercises\\browser\\ex_51.md",permalink:"/node_comit/docs/exercises/browser/ex_51",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_51.md",lastUpdatedBy:"prma85",lastUpdatedAt:1580786636,sidebar:"exercises",previous:{title:"ex_50",permalink:"/node_comit/docs/exercises/browser/ex_50"},next:{title:"ex_52",permalink:"/node_comit/docs/exercises/browser/ex_52"}},s=[{value:"index.html",id:"indexhtml",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"exercise-51"},"Exercise 51"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_51\n  |-- index.html\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>JSON</title>\n</head>\n<body>\n  <div id="jsonresponse"></div>\n</body>\n</html>\n')),Object(i.b)("h2",{id:"indexhtml"},"index.html"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(i.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(i.b)("li",{parentName:"ul"},"Define a response variable and assign the following JSON object:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'`{\n  "title": "A New Hope", \n  "episode_id": 4, \n  "species": [\n    "https://swapi.co/api/species/5/", \n    "https://swapi.co/api/species/3/", \n    "https://swapi.co/api/species/2/", \n    "https://swapi.co/api/species/1/", \n    "https://swapi.co/api/species/4/"\n  ]\n}`\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Don't forget the `` as they are here to define that this is a JSON string"),Object(i.b)("li",{parentName:"ul"},"Transform this JSON object into a JavaScript one using JSON.parse"),Object(i.b)("li",{parentName:"ul"},"Select the jsonresponse id element"),Object(i.b)("li",{parentName:"ul"},"Add title, episode_id as jsonresponse content"),Object(i.b)("li",{parentName:"ul"},"Also iterate the response species and create a link for each item and assign the corresponding href"),Object(i.b)("li",{parentName:"ul"},"At the end you need to have the following HTML:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<div id="jsonresponse">\n  <h1>A New Hope</h1>\n  <p>Episode ID: 4</p>\n  <a href="https://swapi.co/api/species/5/">Link 1</a>\n  <a href="https://swapi.co/api/species/3/">Link 2</a>\n  <a href="https://swapi.co/api/species/2/">Link 3</a>\n  <a href="https://swapi.co/api/species/1/">Link 4</a>\n  <a href="https://swapi.co/api/species/4/">Link 5</a>\n</div>\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create the elements to match this structure")))}l.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,o({ref:t},p,{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);