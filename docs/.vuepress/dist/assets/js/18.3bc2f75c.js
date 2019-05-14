(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{163:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),a("p",[t._v("上面这个报错是指在构建DOM的时候，有个变量是undefined，但是这个变量被当成Array类型并访问了下标值。")]),t._v(" "),a("p",[t._v("这种情况通常出现在数据初始化的时候，某些属性不存在，但是访问了这个不存在的属性的子属性")]),t._v(" "),t._m(3),t._v(" "),t._m(4),a("p",[t._v("通常这个报错的原因是，用一个计算属性绑定到v-model上面。")]),t._v(" "),t._m(5),a("p",[t._v("解决办法")]),t._v(" "),a("ol",[a("li",[t._v("尽量避免计算属性用在v-model上，因为计算属性一般是通过现有的值计算出来的。如果可以通过其它方式修改计算属性的话，数据状态会比较混乱。")]),t._v(" "),a("li",[t._v("计算属性默认是只有getter的，就是说只能取值，不能设值。computed支持手动添加set函数。具体参考"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#computed",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue 计算属性"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"常见的vue-报错信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的vue-报错信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 常见的vue 报错信息")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"模板渲染初始化问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板渲染初始化问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 模板渲染初始化问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[this._v("Proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),this._v("render "),s("span",{pre:!0,attrs:{class:"token constant"}},[this._v("Cannot")]),this._v(" read property "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v("'0'")]),this._v(" of undefined\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"计算属性绑定v-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算属性绑定v-model","aria-hidden":"true"}},[this._v("#")]),this._v(" 计算属性绑定v-model")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[this._v("Computed")]),this._v(" property "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v('""')]),this._v(" was assigned to but it has no setter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("  template部分\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rate\n v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rate"')]),t._v("\n disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" js部分\ncomputed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" parseFloat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("starRating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=r.exports}}]);