(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{169:function(e,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"flex上中下布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex上中下布局","aria-hidden":"true"}},[e._v("#")]),e._v(" flex上中下布局")]),e._v(" "),t("pre",[t("code",[e._v("此文档只是说明如何实现，采用最新的弹性盒子布局规范，对旧写法不做考虑。\n")])]),e._v(" "),t("h2",{attrs:{id:"盒子组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#盒子组成","aria-hidden":"true"}},[e._v("#")]),e._v(" 盒子组成")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<body class="flex-ver">\n    <div class="header red">header</div>\n    <div class="container flex-auto orange">\n        <div>content</div>\n        <div>content</div>\n        <div>content</div>\n        <div>content</div>\n    </div>\n    <div class="footer blue">footer</div>\n</body>\n')])])]),t("h2",{attrs:{id:"步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤","aria-hidden":"true"}},[e._v("#")]),e._v(" 步骤")]),e._v(" "),t("h3",{attrs:{id:"步骤一：body元素设置为flex容器，纵向主轴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤一：body元素设置为flex容器，纵向主轴","aria-hidden":"true"}},[e._v("#")]),e._v(" 步骤一：body元素设置为flex容器，纵向主轴")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".flex-ver {\n    display: flex;\n    flex-direction: column;\n}\n")])])]),t("h3",{attrs:{id:"步骤二：header和footer固定高度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤二：header和footer固定高度","aria-hidden":"true"}},[e._v("#")]),e._v(" 步骤二：header和footer固定高度")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".header {\n    height: 150px;\n}\n.footer {\n    height: 100px;\n}\n")])])]),t("h3",{attrs:{id:"步骤三：主体区域container设置为占用剩余高度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤三：主体区域container设置为占用剩余高度","aria-hidden":"true"}},[e._v("#")]),e._v(" 步骤三：主体区域container设置为占用剩余高度")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".flex-auto {\n  flex-grow: 1;\n  flex-basis: 0%;\n}\n")])])]),t("h2",{attrs:{id:"完整代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完整代码","aria-hidden":"true"}},[e._v("#")]),e._v(" 完整代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n    <link rel="stylesheet" href="./flex.css">\n</head>\n<body class="flex-ver">\n    <div class="header red">header</div>\n    <div class="container flex-auto orange">\n        <div>content</div>\n        <div>content</div>\n        <div>content</div>\n        <div>content</div>\n    </div>\n    <div class="footer blue">footer</div>\n</body>\n<style>\n    .header {\n        height: 150px;\n    }\n    .footer {\n        height: 100px;\n    }\n    .flex-item {\n        height: auto;\n    }\n    .flex {\n        display: flex;\n        flex-direction: row;\n    }\n    .flex-ver {\n        display: flex;\n        flex-direction: column;\n    }\n    .red {\n        background: red;\n    }\n    .blue {\n        background: blue;\n    }\n    .black {\n        background: black;\n    }\n    .orange {\n        background: orange;\n    }\n</style>\n</html>\n\n')])])]),t("h2",{attrs:{id:"整体效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体效果","aria-hidden":"true"}},[e._v("#")]),e._v(" 整体效果")]),e._v(" "),t("ol",[t("li",[e._v("主体内容高度自适应")]),e._v(" "),t("li",[e._v("底部footer位于文档最底部，即使主体区域高度不足以占满视口，footer依旧贴在底部。")])]),e._v(" "),t("h2",{attrs:{id:"兼容性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#兼容性","aria-hidden":"true"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),t("p",[e._v("火狐浏览器未能实现该效果，主体内容的高度根据内容自适应的，body的整体高度有可能低于视口高度。")]),e._v(" "),t("h2",{attrs:{id:"解决火狐浏览器兼容性问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决火狐浏览器兼容性问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 解决火狐浏览器兼容性问题")]),e._v(" "),t("p",[e._v("注意，html不要设置为overflow: hidden，要设置为overflow:visible。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("html, body , div {\n    padding: 0;\n    margin: 0;\n}\nhtml {\n    height: 100%;\n}\nbody {\n    min-height: 100%\n}\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);