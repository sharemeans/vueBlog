(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{160:function(e,n,a){"use strict";a.r(n);var t=a(0),i=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"base64字符串保存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#base64字符串保存","aria-hidden":"true"}},[this._v("#")]),this._v(" base64字符串保存")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n\n</body>\n<script>\n//方法1\nfunction saveAsLink(base64Str) {\n  var a = document.createElement('a');   // 转换完成，创建一个a标签用于下载\n  a.download = fileName;\n  a.href = 'data:application/msword;base64,' + base64Str;\n  a.style.display = 'none';\n  document.body.appendChild(a)    // 修复firefox中无法触发click\n  a.click();\n  document.body.removeChild(a)\n}\nsaveAsLink(fileBse64Str)\n//方法2(firefox浏览器不兼容)\nvar blob = new Blob([_base64ToArrayBuffer(fileBse64Str)], {type: 'application/msword'}), fileName = '文件名称.doc'\nfunction _base64ToArrayBuffer(base64) {\n    var binary_string =  window.atob(base64);\n    var len = binary_string.length;\n    var bytes = new Uint8Array( len );\n    for (var i = 0; i < len; i++)        {\n        bytes[i] = binary_string.charCodeAt(i);\n    }\n    return bytes.buffer;\n}\nfunction downFile(blob, fileName) {\n  if (window.navigator.msSaveOrOpenBlob) {\n      navigator.msSaveBlob(blob, fileName);\n  } else {\n      var link = document.createElement('a');\n      debugger\n      link.href = window.URL.createObjectURL(blob);\n      link.download = fileName;\n      link.click();\n      window.URL.revokeObjectURL(link.href);\n  }\n}\ndownFile(blob, fileName)\n<\/script>\n</html>\n\n")])])])])}],!1,null,null,null);n.default=i.exports}}]);