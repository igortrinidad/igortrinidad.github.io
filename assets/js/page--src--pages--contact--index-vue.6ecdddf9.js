(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{227:function(t,e,n){},230:function(t,e,n){},234:function(t,e,n){"use strict";var s=n(227);n.n(s).a},235:function(t,e,n){"use strict";var s={name:"HomeThis",data:function(){return{pageLT:0}},mounted:function(){this.pageLT=(window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart)/1e3+" seconds"}},i=(n(234),n(31)),a=Object(i.a)(s,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("h1",{staticClass:"text-center"},[this._v("\n    let that = this\n  ")]),e("div",{staticClass:"w-full mt-4 text-center"},[e("p",[this._v("This project was made using "),e("a",{attrs:{href:"https://github.com/vuejs/vue",target:"_blank"}},[this._v("Vue.Js")]),this._v(" and "),e("a",{attrs:{href:"https://gridsome.org/",target:"_blank"}},[this._v("Gridsome")])]),e("p",[this._v("Did you see something that could be improved here? Send a pull request \\o/")]),e("div",{staticClass:"w-full text-center mt-4"},[e("a",{staticClass:"btn btn-outline btn-primary btn-xs",attrs:{href:"https://github.com/igortrinidad/igortrindade-portfolio",target:"_blank"}},[this._v("See this repo on GitHub")])])])])}],!1,null,null,null);e.a=a.exports},247:function(t,e,n){"use strict";var s=n(230);n.n(s).a},248:function(t,e,n){},252:function(t,e,n){"use strict";var s={name:"HomeContact",components:{},head:function(){return{title:"Igor Trindade's Terminal - Web Development",meta:[{hid:"description",name:"description",content:"Igor Trindade Web Development"}]}},methods:{startWhatsAppMessage:function(){window.open("https://api.whatsapp.com/send?phone=+5531991455975&text=Hi, Igor! I loved your terminal ! \\o/","_system",null)},emailMe:function(){window.open("mailto:igorlucast@hotmail.com","_self")}}},i=(n(247),n(31)),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",{staticClass:"text-center"},[t._v("\n    sayHi()\n  ")]),n("hr"),n("p",{staticClass:"text-center"},[t._v("\n    It will be nice to hear from you!\n  ")]),n("div",{staticClass:"w-full flex flex-wrap mt-4"},[n("div",{staticClass:"w-full sm:w-1/2 text-center mt-4"},[n("button",{staticClass:"btn btn-outline btn-primary m-t-10",attrs:{type:"button"},on:{click:function(e){return t.emailMe()}}},[t._v("\n        emailMe()\n      ")])]),n("div",{staticClass:"w-full sm:w-1/2 text-center mt-4"},[n("button",{staticClass:"btn btn-outline btn-primary m-t-10",attrs:{type:"button"},on:{click:function(e){return t.startWhatsAppMessage()}}},[t._v("\n        whatsAppMe()\n      ")])])])])}),[],!1,null,null,null);e.a=a.exports},257:function(t,e,n){"use strict";var s=n(248);n.n(s).a},269:function(t,e,n){"use strict";n.r(e);var s=n(252),i=n(235),a={name:"ContactIndex",components:{HomeContact:s.a,HomeThis:i.a},metaInfo:{title:"Contact"}},o=(n(257),n(31)),r=Object(o.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[e("section",[e("HomeContact"),e("HomeThis")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);