(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),i=(n(0),n(455)),o={},s={id:"exercises/js/ex_61",title:"ex_61",description:"# Exercise 61\r",source:"@site/..\\docs\\exercises\\js\\ex_61.md",permalink:"/node_comit/docs/exercises/js/ex_61",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/js/ex_61.md",lastUpdatedBy:"prma85",lastUpdatedAt:1580786636,sidebar:"exercises",previous:{title:"ex_60",permalink:"/node_comit/docs/exercises/js/ex_60"},next:{title:"ex_62",permalink:"/node_comit/docs/exercises/js/ex_62"}},c=[{value:"Switch version:",id:"switch-version",children:[]},{value:"IF/ELSE/IF version:",id:"ifelseif-version",children:[]},{value:"Refactor",id:"refactor",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"exercise-61"},"Exercise 61"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a new index61.js file"),Object(i.b)("li",{parentName:"ul"},"Define weekdayNumber and assign a numeric value between 1 and 7"),Object(i.b)("li",{parentName:"ul"},"If weekday number is 1 show the following message: Today it's Monday"),Object(i.b)("li",{parentName:"ul"},"If weekday number is 2 show the following message: Today it's Tuesday"),Object(i.b)("li",{parentName:"ul"},"If weekday number is 3 show the following message: Today it's Wednesday"),Object(i.b)("li",{parentName:"ul"},"If weekday number is 4 show the following message: Today it's Thursday"),Object(i.b)("li",{parentName:"ul"},"If weekday number is 5 show the following message: Today it's Friday"),Object(i.b)("li",{parentName:"ul"},"If weekday number is 6 show the following message: Today it's Saturday"),Object(i.b)("li",{parentName:"ul"},"If weekday number is 7 show the following message: Today it's Sunday"),Object(i.b)("li",{parentName:"ul"},"If weekday number it's not bettwen 1 and 7 show an error message: Error: Please input a number bettwen 1 and 7")),Object(i.b)("h2",{id:"switch-version"},"Switch version:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use a switch statement to show weekday name using the weekday variable value")),Object(i.b)("h2",{id:"ifelseif-version"},"IF/ELSE/IF version:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"After the switch version create the same functionality but using if/else/if statement")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Try all the posible cases/scenarios (even the error message) by changing the weekdayNumber value"))),Object(i.b)("h2",{id:"refactor"},"Refactor"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Once you have the code working for both statements refactor the code as follows",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Don't use console.log() inside the switch statement"),Object(i.b)("li",{parentName:"ul"},"Instead add a message variable so each case only adds the selected weekname message"),Object(i.b)("li",{parentName:"ul"},"Use only one console.log() after the switch statement to show the result and error")))))}u.isMDXComponent=!0},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,p=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return n?a.a.createElement(p,s({ref:t},l,{components:n})):a.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);