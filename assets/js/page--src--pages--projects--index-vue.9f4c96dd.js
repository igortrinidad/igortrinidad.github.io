(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{168:function(e,t,a){},172:function(e,t,a){"use strict";var i={name:"Card",props:{project:{type:Object,required:!0}}},o=(a(177),a(21)),s=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"click-enter"},[a("g-link",{staticClass:"card click-enter",attrs:{to:"/projects/"+e.project.slug}},[a("div",{staticClass:"card-header click-enter"},[a("h3",{staticClass:"t-overflow"},[e._v("\n        "+e._s(e.project.name)+"\n      ")]),a("p",{staticClass:"max-lines"},[e._v("\n        "+e._s(e.project.description)+"\n      ")])]),a("div",{staticClass:"card-body click-enter"},[a("img",{staticClass:"project-icon",attrs:{src:e.project.imageUrl,height:"60px"}})])])],1)}),[],!1,null,"5de4bffc",null);t.a=s.exports},177:function(e,t,a){"use strict";var i=a(168);a.n(i).a},205:function(e,t,a){"use strict";a.r(t);var i={metaInfo:{title:"Projects"},name:"ProjectsIndex",components:{Card:a(172).a},scrollToTop:!0,mounted:function(){document.getElementById("main-div").scrollTo({top:0,left:0,behavior:"smooth"})}},o=a(21),s=a(0),r=s.a.config.optionMergeStrategies.computed,n={projects:{edges:[{node:{id:"45e14cde",name:"Simbora.fun Social",slug:"simbora.social",website:"https://simbora.fun/social",isActive:!0,imageUrl:null,logoWidth:"55%",description:"Simbora Social is whole new feature of Simbora that aim the client final, where they can invite friends and family for your parties and win gifts in money through Simbora.",year:"2019",stack:["Laravel","Vue.js","MySql","Webpack","Wirecard","Firebase"]}},{node:{id:"337dd519",name:"Simbora.fun",slug:"simbora.fun",website:"https://simbora.fun",isActive:!0,imageUrl:null,logoWidth:"55%",description:"Simbora.fun is a platform for producer send list of tickets with discount for their clients",year:"2019",stack:["Laravel","Vue.js","MySql","Webpack","Stone Payments"]}},{node:{id:"6446fcee",name:"Root Burger Website",slug:"rootburger-website",website:"https://rootburger.com.br",isActive:!0,imageUrl:null,logoWidth:"55%",description:"Website of Root Burger Restaurant and the administration part of the whole system.",year:"2018",stack:["Laravel","Vue.js","MySql","Webpack","Stone Payments"]}},{node:{id:"1485e2f4",name:"Root Burger POS",slug:"rootburger-pos-one",website:"https://rootburger.com.br",isActive:!0,imageUrl:null,logoWidth:"55%",description:"An POS application with a lot of administration features used for my restaurant, that was integrated directly with Stone over an pinpad bluetooth device",year:"2018",stack:["Cordova","Vue.JS","Laravel 5.6","MySql"]}},{node:{id:"db32e8fe",name:"goUp Today",slug:"goup",website:"https://goup.today",isActive:!1,imageUrl:null,logoWidth:"45%",description:"An App to people find the hot places to go out today.",year:"2017",stack:["Cordova","Vue.JS","Laravel 5.4","MySql"]}},{node:{id:"ba4bb028",name:"iSaudavel",slug:"isaudavel",website:"https://isaudavel.com",isActive:!0,imageUrl:null,logoWidth:"35%",description:"An application to Healthy Professionals sell your services and manager your clients",year:"2016",stack:["Cordova","Vue.JS","Laravel 5.4","MySql"]}},{node:{id:"a86fcda2",name:"We Places",slug:"weplaces",website:"https://weplaces.com.br",isActive:!1,imageUrl:null,logoWidth:"95%",description:"A platform that provide for event places tools for exibite their estructure and an online calendar to sell their available dates for costumers.",year:"2016",stack:["Cordova","Vue.JS","Laravel 5.4","MySql"]}},{node:{id:"140b5322",name:"We-Planner",slug:"weplanner",website:"https://app.we-planner.com",isActive:!1,imageUrl:null,logoWidth:"95%",description:"We Planner was our first project and it was a tool for companies in the event and party industry, where the companies could centralize their resources to manage and sell your services.",year:"2016",stack:["Vue.JS","Laravel 5.4","MySql"]}}]}},l=function(e){var t=e.options;t.__staticData?t.__staticData.data=n:(t.__staticData=s.a.observable({data:n}),t.computed=r({$static:function(){return t.__staticData.data}},t.computed))},c=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("layout",[t("section",[t("div",{staticClass:"w-full flex flex-wrap justify-between items-center content-center "},[t("h1",{staticClass:"flex-none"},[this._v("Projects[]")]),t("g-link",{staticClass:"flex-none btn btn-outline btn-primary btn-xs",attrs:{to:"/"}},[this._v("\n        Back to home\n      ")])],1),t("hr"),t("div",{staticClass:"w-full flex flex-wrap"},this._l(this.$static.projects.edges,(function(e){return t("div",{key:e.node.id,staticClass:"w-full sm:w-1/2 md:w-1/3 p-3"},[t("card",{attrs:{project:e.node}})],1)})),0)])])}),[],!1,null,null,null);"function"==typeof l&&l(c);t.default=c.exports}}]);