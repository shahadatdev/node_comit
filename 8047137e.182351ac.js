(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{289:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(9),i=(n(0),n(455)),a={id:"14-debug",title:"Debugging & Troubleshooting"},c={id:"14-debug",title:"Debugging & Troubleshooting",description:"- Copy and paste the error into Google.\r",source:"@site/..\\docs\\14-debug.md",permalink:"/node_comit/docs/14-debug",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/14-debug.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"course",previous:{title:"Deploying a Node.js Application",permalink:"/node_comit/docs/13-deploy"}},l=[{value:"Build Errors",id:"build-errors",children:[]},{value:"Debugging",id:"debugging",children:[{value:"Express Application",id:"express-application",children:[]},{value:"Using Breakpoints In Chrome DevTools",id:"using-breakpoints-in-chrome-devtools",children:[]}]},{value:"Resources",id:"resources",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Copy and paste the error into Google.")),Object(i.b)("h2",{id:"build-errors"},"Build Errors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ensure that you have the correct dependencies in your ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")," and run a ",Object(i.b)("inlineCode",{parentName:"li"},"npm install"))),Object(i.b)("h4",{id:"exercises"},"Exercises"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/node_comit/docs/exercises/debug/ex_1"}),"Exercise 1")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/node_comit/docs/exercises/debug/ex_2"}),"Exercise 2"))),Object(i.b)("h2",{id:"debugging"},"Debugging"),Object(i.b)("h3",{id:"express-application"},"Express Application"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use VS Code's Debug tools\n",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"https://code.visualstudio.com/assets/docs/nodejs/nodejs-debugging/loaded-scripts-explorer.gif",alt:"VS Code Debug"}))),Object(i.b)("li",{parentName:"ul"},"Select the node file you want to run. ie. ",Object(i.b)("inlineCode",{parentName:"li"},"index.js")),Object(i.b)("li",{parentName:"ul"},"Add a configuration for the application, by clicking the dropdown next to the play Debug and select ",Object(i.b)("strong",{parentName:"li"},"Add Configuration")," and select ",Object(i.b)("strong",{parentName:"li"},"Node")),Object(i.b)("li",{parentName:"ul"},"It should autofill with the details of the project and look like the following:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  // Use IntelliSense to learn about possible attributes.\n  // Hover to view descriptions of existing attributes.\n  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Express App",\n      "skipFiles": ["<node_internals>/**"],\n      "program": "${workspaceFolder}/index.js"\n    }\n  ]\n}\n'))),Object(i.b)("li",{parentName:"ul"},"Hit the play debug button to run the application"),Object(i.b)("li",{parentName:"ul"},"Place breakpoint in the application to stop the application to view the line.")),Object(i.b)("h4",{id:"exercises-1"},"Exercises"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/node_comit/docs/exercises/debug/ex_3"}),"Exercise 3"))),Object(i.b)("h3",{id:"using-breakpoints-in-chrome-devtools"},"Using Breakpoints In Chrome DevTools"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click the Sources tab."),Object(i.b)("li",{parentName:"ul"},"Open the file containing the line of code you want to break on."),Object(i.b)("li",{parentName:"ul"},"Go the line of code."),Object(i.b)("li",{parentName:"ul"},"To the left of the line of code is the line number column. Click on it. A blue icon appears on top of the line number column.\n",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"https://developers.google.com/web/tools/chrome-devtools/javascript/imgs/loc-breakpoint.png",alt:"A line-of-code breakpoint."})))),Object(i.b)("h4",{id:"exercises-2"},"Exercises"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/node_comit/docs/exercises/debug/ex_4"}),"Exercise 4")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/node_comit/docs/exercises/debug/ex_5"}),"Exercise 5"))),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"}),"Node.js debugging in VS Code")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints"}),"How To Pause Your Code With Breakpoints In Chrome DevTools"))))}b.isMDXComponent=!0},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||p[d]||i;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);