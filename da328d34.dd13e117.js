/*! For license information please see da328d34.dd13e117.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{378:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(6),a=(n(421),n(420)),i={id:"13-deploy",title:"Deploying a Node.js Application"},c={id:"13-deploy",title:"Deploying a Node.js Application",description:"## Deploying to Heroku",source:"@site/../docs/13-deploy.md",permalink:"/node_comit/docs/13-deploy",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/13-deploy.md",sidebar:"course",previous:{title:"MongoDB & Mongoose",permalink:"/node_comit/docs/12-mongodb"},next:{title:"Debugging & Troubleshooting",permalink:"/node_comit/docs/14-debug"}},l=[{value:"Deploying to Heroku",id:"deploying-to-heroku",children:[]},{value:"Setting up the MongoDB database",id:"setting-up-the-mongodb-database",children:[]},{value:"Resources",id:"resources",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"deploying-to-heroku"},"Deploying to Heroku"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To deploy your Node.js app you can use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://heroku.com"}),"Heroku")," as hosting")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"From the site: ",Object(a.b)("inlineCode",{parentName:"p"},"Heroku is a fully managed container-based cloud platform, with integrated data services and a powerful ecosystem, for deploying and running modern apps"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Let's get started with installing the Heroku Command Line Interface (CLI)"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Windows",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up"}),"Download the installer")))),Object(a.b)("li",{parentName:"ul"},"MacOS",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"brew install heroku/brew/heroku\n"))),Object(a.b)("li",{parentName:"ul"},"Ubuntu 16+",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo snap install heroku --classic\n"))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"heroku login")," command to log in to the Heroku CLI:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"heroku login\nheroku: Press any key to open up the browser to login or q to exit\n\u203a   Warning: If browser does not open, visit\n\u203a   https://cli-auth.heroku.com/auth/browser/***\nheroku: Waiting for login...\nLogging in... done\nLogged in as me@example.com\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Let's create a new node package"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd node-example\nnpm init\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Next install express"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install express --save\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"For Heroku, it is important to specify the version of node to match your version ",Object(a.b)("inlineCode",{parentName:"p"},"node --version"),", edit the ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," to set the engine version."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "node-example",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "express": "^4.17.1"\n  },\n  "engines": {\n    "node": "10.x"\n  }\n}\n'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Specify the start script in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "start": "node index.js"\n  }\n}\n'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Next lets update the ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," to include a basic express app. Note that we are passing the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env"}),"environment variable")," PORT to our app."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const express = require('express')\nconst port = process.env.PORT\nconst app = express()\n\napp.get('/', (request, response) => {\n  response.send('Hello Heroku World!')\n})\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`)\n})\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Build and run your application locally"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install\nheroku local\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"After you commit your changes to git, you can deploy your app to Heroku."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'git init\ngit add .\ngit commit -m "Added a Procfile."\nheroku login\nEnter your Heroku credentials.\n...\nheroku create\nCreating arcane-lowlands-8408... done, stack is cedar\nhttp://arcane-lowlands-8408.herokuapp.com/ | git@heroku.com:arcane-lowlands-8408.git\nGit remote heroku added\ngit push heroku master\n...\n-----\x3e Node.js app detected\n...\n-----\x3e Launching... done\n      http://arcane-lowlands-8408.herokuapp.com deployed to Heroku\n\n'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To open the app in your browser, type ",Object(a.b)("inlineCode",{parentName:"p"},"heroku open"),"."))),Object(a.b)("h2",{id:"setting-up-the-mongodb-database"},"Setting up the MongoDB database"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"For our course and development, we will leverage ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.mongodb.com/cloud/atlas"}),"MongoDB Atlas")," free cloud-hosted sandbox database. This database tier is not considered suitable for production websites because it has no redundancy, but it is great for development and prototyping."),Object(a.b)("li",{parentName:"ul"},"You will first need to ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.mongodb.com/cloud/atlas/register"}),"create an account")," with MongoDB Atlas (this is free, and just requires that you enter basic contact details and acknowledge their terms of service)"),Object(a.b)("li",{parentName:"ul"},"After logging in, you'll be taken to the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.mongodb.com/v2"}),"home")," screen:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Click ",Object(a.b)("strong",{parentName:"li"},"Build a Cluster")," button in the Clusters Overview section.\n",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_CreateCluster.jpg",alt:"Create a cluster on MongoDB Atlas."}))),Object(a.b)("li",{parentName:"ul"},"This will open the ",Object(a.b)("em",{parentName:"li"},"Create New Cluster")," screen.\n",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_ChooseProviderRegion.jpg",alt:"Choose a cloud provider when using MongoDB Atlas."})),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Select any provider from the ",Object(a.b)("em",{parentName:"li"},"Cloud Provider & Region")," section. Different providers offer different regions."),Object(a.b)("li",{parentName:"ul"},'Select any region marked "FREE TIER AVAILABLE".'),Object(a.b)("li",{parentName:"ul"},"Click the ",Object(a.b)("strong",{parentName:"li"},"Create Cluster")," button (creation of the cluster will take some minutes)."))),Object(a.b)("li",{parentName:"ul"},"You will return to the ",Object(a.b)("em",{parentName:"li"},"Cluster Overview")," screen.\n",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_CreateCollection.jpg",alt:"Setup a collection on MongoDB Atlas."})),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Click the ",Object(a.b)("strong",{parentName:"li"},"Collections")," button."))),Object(a.b)("li",{parentName:"ul"},"This will open the ",Object(a.b)("em",{parentName:"li"},"Collections")," section.\n",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_CreateDatabase.jpg",alt:"Create a database on MongoDB Atlas."})),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Click the ",Object(a.b)("strong",{parentName:"li"},"Create Database")," button."))),Object(a.b)("li",{parentName:"ul"},"This will open the ",Object(a.b)("em",{parentName:"li"},"Create Database")," screen.\n",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_DatabaseDetails.jpg",alt:"Details during database creation on MongoDB Atlas."})),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Enter the name for the new database as ",Object(a.b)("inlineCode",{parentName:"li"},"public"),"."),Object(a.b)("li",{parentName:"ul"},"Enter the name of the collection as ",Object(a.b)("inlineCode",{parentName:"li"},"Collection0"),"."),Object(a.b)("li",{parentName:"ul"},"Click the ",Object(a.b)("strong",{parentName:"li"},"Create")," button to create the database."))),Object(a.b)("li",{parentName:"ul"},"You will return to the ",Object(a.b)("em",{parentName:"li"},"Collection")," screen with your database created.\n",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_DatabaseCreated.jpg",alt:"Database creation confirmation on MongoDB Atlas."})),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Click the ",Object(a.b)("em",{parentName:"li"},"Overview")," tab to return the cluster overview."))),Object(a.b)("li",{parentName:"ul"},"From the Cluster0 Overview screen click the ",Object(a.b)("strong",{parentName:"li"},"Connect")," button.\n",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_Connectbutton.jpg",alt:"Configure a connection when after setting up a cluster in MongoDB Atlas."}))),Object(a.b)("li",{parentName:"ul"},"This will open the Connect to Cluster screen.\n",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_ConnectCluster.jpg",alt:"Setup a connection when using MongoDB Atlas."})),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Click the ",Object(a.b)("strong",{parentName:"li"},"Add a Different IP Address")," button, enter ",Object(a.b)("inlineCode",{parentName:"li"},"0.0.0.0/0")," for the IP Address and click ",Object(a.b)("strong",{parentName:"li"},"Add IP Address")," button.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Note: It is a best practice to limit the IP addresses that can connect to your database and other resources. Here we allow a connection from anywhere because we don't know where the request will come from after deployment."))),Object(a.b)("li",{parentName:"ul"},"Enter a username and password and click ",Object(a.b)("strong",{parentName:"li"},"Create MongoDB User")," button.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Note: Avoid using special characters in your MongoDB user password as mongoose may not parse the connection string properly."))),Object(a.b)("li",{parentName:"ul"},"If you have completed the 2 previous steps, the button ",Object(a.b)("strong",{parentName:"li"},"Choose a connection method")," will turn green."),Object(a.b)("li",{parentName:"ul"},"Click the ",Object(a.b)("strong",{parentName:"li"},"Choose a connection method")," button."))),Object(a.b)("li",{parentName:"ul"},"This will access the ",Object(a.b)("em",{parentName:"li"},"Choose a connection method")," tab.\n",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_ChooseAConnectionMethod.jpg",alt:"Choose a connection type when connecting with MongoDB Atlas."})),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Click the ",Object(a.b)("strong",{parentName:"li"},"Connect Your Application")," option."))),Object(a.b)("li",{parentName:"ul"},"This will open the Connect screen.\n",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_ConnectForShortSRV.jpg",alt:"Choose the Short SRV connection when settinup a connection on MongoDB Atalas."})),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Click the ",Object(a.b)("strong",{parentName:"li"},"Short SRV connection string")," option to copy the connection string."))),Object(a.b)("li",{parentName:"ul"},"This will open the connection string URL.\n",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_CopyShortSRV.jpg",alt:"Copy the Short SRV connection string when setting up a connection on MongoDB Atlas"})),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Choose ",Object(a.b)("strong",{parentName:"li"},"Copy")," button to copy the string."),Object(a.b)("li",{parentName:"ul"},"Save this string somewhere safe."),Object(a.b)("li",{parentName:"ul"},"Update the password with your users password."),Object(a.b)("li",{parentName:"ul"},"Replace test with ",Object(a.b)("inlineCode",{parentName:"li"},"public"),"."))),Object(a.b)("li",{parentName:"ul"},"You have now created the database, and have an URL (with username and password) that can be used to access it. This will look something like: ",Object(a.b)("inlineCode",{parentName:"li"},"mongodb+srv://your_user_name:your_password@cluster0-mbdj7.mongodb.net/public?retryWrites=true"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DO NOT COMMIT THE VALUE TO GIT"),". Since this contains a secret (the user and password in the connection string), it is best practice to leverage enviroment variables.")))),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction"}),"Getting Started on Heroku with Node.js")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://devcenter.heroku.com/articles/deploying-nodejs"}),"Deploying Node.js Apps on Heroku")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose"}),"MDN Using a Database (with Mongoose)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment"}),"MDN Deploying to production"))))}u.isMDXComponent=!0},420:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(d,c({ref:t},s,{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},421:function(e,t,n){"use strict";e.exports=n(422)},422:function(e,t,n){"use strict";var r=n(423),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,b=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,f=o?Symbol.for("react.memo"):60115,j=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function N(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||O}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||O}N.prototype.isReactComponent={},N.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw g(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},N.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=N.prototype;var C=w.prototype=new v;C.constructor=w,r(C,N.prototype),C.isPureReactComponent=!0;var k={current:null},_={suspense:null},S={current:null},D=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)D.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var M=/\/+/g,P=[];function R(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function B(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function T(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var l=!1;if(null===t)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case i:l=!0}}if(l)return r(o,t,""===n?"."+I(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var u=n+I(c=t[s],s);l+=e(c,u,r,o)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=h&&t[h]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),s=0;!(c=t.next()).done;)l+=e(c=c.value,u=n+I(c,s++),r,o);else if("object"===c)throw r=""+t,g(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?H(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+n)),r.push(e))}function H(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(M,"$&/")+"/"),T(e,L,t=R(t,a,r,o)),B(t)}function U(){var e=k.current;if(null===e)throw g(Error(321));return e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return H(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,$,t=R(null,null,t,n)),B(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return H(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw g(Error(143));return e}},createRef:function(){return{current:null}},Component:N,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:j,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,n){return U().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,n){return U().useReducer(e,t,n)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:c,Profiler:s,StrictMode:l,Suspense:m,unstable_SuspenseList:d,createElement:A,cloneElement:function(e,t,n){if(null==e)throw g(Error(267),e);var o=r({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)D.call(t,u)&&!x.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){s=Array(u);for(var p=0;p<u;p++)s[p]=arguments[p+2];o.children=s}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:l}},createFactory:function(e){var t=A.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var n=_.suspense;_.suspense=void 0===t?null:t;try{e()}finally{_.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:_,ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r}},F={default:q},V=F&&q||F;e.exports=V.default||V},423:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,l=i(e),s=1;s<arguments.length;s++){for(var u in n=Object(arguments[s]))o.call(n,u)&&(l[u]=n[u]);if(r){c=r(n);for(var p=0;p<c.length;p++)a.call(n,c[p])&&(l[c[p]]=n[c[p]])}}return l}}}]);