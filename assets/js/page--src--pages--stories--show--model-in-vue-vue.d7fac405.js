(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{232:function(n,t,a){"use strict";function e(n){for(var t=arguments,a=1;a<arguments.length;a++)for(var e in arguments[a])n[e]=t[a][e];return n}var r={functional:!0,props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},render:function(n,t){var a=t.props.code||(t.children&&t.children.length>0?t.children[0].text:""),r=t.props.inline,s=t.props.language,i=Prism.languages[s],o="language-"+s;return r?n("code",e({},t.data,{class:[t.data.class,o],domProps:e({},t.data.domProps,{innerHTML:Prism.highlight(a,i)})})):n("pre",e({},t.data,{class:[t.data.class,o]}),[n("code",{class:o,domProps:{innerHTML:Prism.highlight(a,i)}})])}};n.exports=r},234:function(n,t,a){},248:function(n,t,a){"use strict";var e=a(234);a.n(e).a},257:function(n,t,a){"use strict";a.r(t);var e=a(232),r={components:{Prism:a.n(e).a},data:function(){return{json:{name:"json"},html:'\n      <article>\n        <h1 class="title">How to Use Prism in a Vue/Nuxt Project</h1>\n        <p>Go to https://www.yasminzy.com/tutorial/prism.html</p>\n      </article>'}}},s=(a(248),a(31)),i=Object(s.a)(r,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("layout",[a("h1",[n._v("Prism Demo")]),a("h2",[n._v("HTML")]),a("pre",{staticClass:"language-html"},[n._v("    "),a("code",[n._v("\n      "+n._s(n.html)+"\n    ")]),n._v("\n  ")]),a("h2",[n._v("JavaScript")]),a("prism",{attrs:{language:"javascript"}},[n._v(n._s(n.json))])],1)}),[],!1,null,"0a698000",null);t.default=i.exports}}]);