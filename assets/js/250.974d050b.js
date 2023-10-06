(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{663:function(s,t,a){"use strict";a.r(t);var n=a(62),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"日志查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志查看"}},[s._v("#")]),s._v(" 日志查看")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("容器名称/id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实时查看日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs -f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("容器id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找其中包含某些内容（如 xxx）的所有行 这里的 2>&1 代表 把标准错误（文件描述符2）重定向（>）到标准输出（文件描述符 1）的位置（&）。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("容器名称/id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如下查看10行日志，并且会一直更新。类似linux中的tail -f 的效果")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs -tf --tail num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("容器id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 可以查看启动容器的最新num行的日志\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs -f --tail"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("容器id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导出日志文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# grep 的 -i 表示不区分大小写 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("容器名称/id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i logpath\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#然后可以看到一个文件路径，把这个文件拷贝下来就可以啦。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);