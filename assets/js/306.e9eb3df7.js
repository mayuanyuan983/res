(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{729:function(e,s,t){"use strict";t.r(s);var n=t(62),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"electron-vue-集成-element-ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#electron-vue-集成-element-ui"}},[e._v("#")]),e._v(" electron-vue 集成 element-ui")]),e._v(" "),t("h2",{attrs:{id:"安装-electron-vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-electron-vue"}},[e._v("#")]),e._v(" 安装 electron-vue")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 安装 vue-cli 和 脚手架样板代码\nnpm install -g vue-cli  //如果你已经安装忽略此处\nvue init simulatedgreg/electron-vue electron-vue-demo\n\n# 安装依赖并运行你的程序\ncd electron-vue-demo\ncnpm install\nnpm run dev\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("h2",{attrs:{id:"安装-element-ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-element-ui"}},[e._v("#")]),e._v(" 安装 element-ui")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cnpm i element-ui -S\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("在 "),t("code",[e._v("/electron-vue-demo/src/renderer/main.js")]),e._v(" 中引入 element ui")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// element-ui\nimport ElementUI from 'element-ui'\nimport 'element-ui/lib/theme-chalk/index.css'\nVue.use(ElementUI)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("此时就可以在任意 .vue 文件中添加和使用 element-ui 元素了。")]),e._v(" "),t("h2",{attrs:{id:"el-table不显示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#el-table不显示"}},[e._v("#")]),e._v(" el-table不显示")]),e._v(" "),t("p",[e._v(".electron-vue文件夹下的webpack.renderer.config.js文件")]),e._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//原语句")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" whiteListedModules "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//修改后的语句")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" whiteListedModules "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'element-ui'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);