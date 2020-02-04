(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{287:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),o=(n(0),n(455)),i={id:"13-deploy",title:"Deploying a Node.js Application"},l={id:"13-deploy",title:"Deploying a Node.js Application",description:"## Deploying to Heroku\r",source:"@site/..\\docs\\13-deploy.md",permalink:"/node_comit/docs/13-deploy",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/13-deploy.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"course",previous:{title:"MongoDB & Mongoose",permalink:"/node_comit/docs/12-mongodb"},next:{title:"Debugging & Troubleshooting",permalink:"/node_comit/docs/14-debug"}},c=[{value:"Deploying to Heroku",id:"deploying-to-heroku",children:[]},{value:"Setting up the MongoDB database",id:"setting-up-the-mongodb-database",children:[]},{value:"Resources",id:"resources",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"deploying-to-heroku"},"Deploying to Heroku"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"To deploy your Node.js app you can use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://heroku.com"}),"Heroku")," as hosting")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"From the site: ",Object(o.b)("inlineCode",{parentName:"p"},"Heroku is a fully managed container-based cloud platform, with integrated data services and a powerful ecosystem, for deploying and running modern apps"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Let's get started with installing the Heroku Command Line Interface (CLI)"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Windows",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up"}),"Download the installer")))),Object(o.b)("li",{parentName:"ul"},"MacOS",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew install heroku/brew/heroku\n"))),Object(o.b)("li",{parentName:"ul"},"Ubuntu 16+",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo snap install heroku --classic\n"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"heroku login")," command to log in to the Heroku CLI:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"heroku login\nheroku: Press any key to open up the browser to login or q to exit\n\u203a   Warning: If browser does not open, visit\n\u203a   https://cli-auth.heroku.com/auth/browser/***\nheroku: Waiting for login...\nLogging in... done\nLogged in as me@example.com\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Let's create a new node package"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd node-example\nnpm init\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Next install express"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install express --save\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For Heroku, it is important to specify the version of node to match your version ",Object(o.b)("inlineCode",{parentName:"p"},"node --version"),", edit the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," to set the engine version."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "node-example",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "express": "^4.17.1"\n  },\n  "engines": {\n    "node": "10.x"\n  }\n}\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Specify the start script in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "start": "node index.js"\n  }\n}\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Next lets update the ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," to include a basic express app. Note that we are passing the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env"}),"environment variable")," PORT to our app."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const express = require("express");\nconst port = process.env.PORT;\nconst app = express();\n\napp.get("/", (request, response) => {\n  response.send("Hello Heroku World!");\n});\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`);\n});\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Build and run your application locally"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install\nheroku local\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"After you commit your changes to git, you can deploy your app to Heroku."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'git init\ngit add .\ngit commit -m "Added a Procfile."\nheroku login\nEnter your Heroku credentials.\n...\nheroku create\nCreating arcane-lowlands-8408... done, stack is cedar\nhttp://arcane-lowlands-8408.herokuapp.com/ | git@heroku.com:arcane-lowlands-8408.git\nGit remote heroku added\ngit push heroku master\n...\n-----\x3e Node.js app detected\n...\n-----\x3e Launching... done\n      http://arcane-lowlands-8408.herokuapp.com deployed to Heroku\n\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"To open the app in your browser, type ",Object(o.b)("inlineCode",{parentName:"p"},"heroku open"),"."))),Object(o.b)("h2",{id:"setting-up-the-mongodb-database"},"Setting up the MongoDB database"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For our course and development, we will leverage ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.mongodb.com/cloud/atlas"}),"MongoDB Atlas")," free cloud-hosted sandbox database. This database tier is not considered suitable for production websites because it has no redundancy, but it is great for development and prototyping."),Object(o.b)("li",{parentName:"ul"},"You will first need to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.mongodb.com/cloud/atlas/register"}),"create an account")," with MongoDB Atlas (this is free, and just requires that you enter basic contact details and acknowledge their terms of service)"),Object(o.b)("li",{parentName:"ul"},"After logging in, you'll be taken to the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://cloud.mongodb.com/v2"}),"home")," screen:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Build a Cluster")," button in the Clusters Overview section.\n",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_CreateCluster.jpg",alt:"Create a cluster on MongoDB Atlas."}))),Object(o.b)("li",{parentName:"ul"},"This will open the ",Object(o.b)("em",{parentName:"li"},"Create New Cluster")," screen.\n",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_ChooseProviderRegion.jpg",alt:"Choose a cloud provider when using MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Select any provider from the ",Object(o.b)("em",{parentName:"li"},"Cloud Provider & Region")," section. Different providers offer different regions."),Object(o.b)("li",{parentName:"ul"},'Select any region marked "FREE TIER AVAILABLE".'),Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Create Cluster")," button (creation of the cluster will take some minutes)."))),Object(o.b)("li",{parentName:"ul"},"You will return to the ",Object(o.b)("em",{parentName:"li"},"Cluster Overview")," screen.\n",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_CreateCollection.jpg",alt:"Setup a collection on MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Collections")," button."))),Object(o.b)("li",{parentName:"ul"},"This will open the ",Object(o.b)("em",{parentName:"li"},"Collections")," section.\n",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_CreateDatabase.jpg",alt:"Create a database on MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Create Database")," button."))),Object(o.b)("li",{parentName:"ul"},"This will open the ",Object(o.b)("em",{parentName:"li"},"Create Database")," screen.\n",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_DatabaseDetails.jpg",alt:"Details during database creation on MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Enter the name for the new database as ",Object(o.b)("inlineCode",{parentName:"li"},"public"),"."),Object(o.b)("li",{parentName:"ul"},"Enter the name of the collection as ",Object(o.b)("inlineCode",{parentName:"li"},"Collection0"),"."),Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Create")," button to create the database."))),Object(o.b)("li",{parentName:"ul"},"You will return to the ",Object(o.b)("em",{parentName:"li"},"Collection")," screen with your database created.\n",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_DatabaseCreated.jpg",alt:"Database creation confirmation on MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("em",{parentName:"li"},"Overview")," tab to return the cluster overview."))),Object(o.b)("li",{parentName:"ul"},"From the Cluster0 Overview screen click the ",Object(o.b)("strong",{parentName:"li"},"Connect")," button.\n",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_Connectbutton.jpg",alt:"Configure a connection when after setting up a cluster in MongoDB Atlas."}))),Object(o.b)("li",{parentName:"ul"},"This will open the Connect to Cluster screen.\n",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_ConnectCluster.jpg",alt:"Setup a connection when using MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Add a Different IP Address")," button, enter ",Object(o.b)("inlineCode",{parentName:"li"},"0.0.0.0/0")," for the IP Address and click ",Object(o.b)("strong",{parentName:"li"},"Add IP Address")," button.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Note: It is a best practice to limit the IP addresses that can connect to your database and other resources. Here we allow a connection from anywhere because we don't know where the request will come from after deployment."))),Object(o.b)("li",{parentName:"ul"},"Enter a username and password and click ",Object(o.b)("strong",{parentName:"li"},"Create MongoDB User")," button.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Note: Avoid using special characters in your MongoDB user password as mongoose may not parse the connection string properly."))),Object(o.b)("li",{parentName:"ul"},"If you have completed the 2 previous steps, the button ",Object(o.b)("strong",{parentName:"li"},"Choose a connection method")," will turn green."),Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Choose a connection method")," button."))),Object(o.b)("li",{parentName:"ul"},"This will access the ",Object(o.b)("em",{parentName:"li"},"Choose a connection method")," tab.\n",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_ChooseAConnectionMethod.jpg",alt:"Choose a connection type when connecting with MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Connect Your Application")," option."))),Object(o.b)("li",{parentName:"ul"},"This will open the Connect screen.\n",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_ConnectForShortSRV.jpg",alt:"Choose the Short SRV connection when settinup a connection on MongoDB Atalas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Short SRV connection string")," option to copy the connection string."))),Object(o.b)("li",{parentName:"ul"},"This will open the connection string URL.\n",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_CopyShortSRV.jpg",alt:"Copy the Short SRV connection string when setting up a connection on MongoDB Atlas"})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Choose ",Object(o.b)("strong",{parentName:"li"},"Copy")," button to copy the string."),Object(o.b)("li",{parentName:"ul"},"Save this string somewhere safe."),Object(o.b)("li",{parentName:"ul"},"Update the password with your users password."),Object(o.b)("li",{parentName:"ul"},"Replace test with ",Object(o.b)("inlineCode",{parentName:"li"},"public"),"."))),Object(o.b)("li",{parentName:"ul"},"You have now created the database, and have an URL (with username and password) that can be used to access it. This will look something like: ",Object(o.b)("inlineCode",{parentName:"li"},"mongodb+srv://your_user_name:your_password@cluster0-mbdj7.mongodb.net/public?retryWrites=true"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DO NOT COMMIT THE VALUE TO GIT"),". Since this contains a secret (the user and password in the connection string), it is best practice to leverage enviroment variables.")))),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction"}),"Getting Started on Heroku with Node.js")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://devcenter.heroku.com/articles/deploying-nodejs"}),"Deploying Node.js Apps on Heroku")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose"}),"MDN Using a Database (with Mongoose)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment"}),"MDN Deploying to production"))))}b.isMDXComponent=!0},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(d,l({ref:t},s,{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);