(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{708:function(n,o,t){"use strict";t.r(o);var e=t(62),s=Object(e.a)({},(function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"console控制台打印"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#console控制台打印"}},[n._v("#")]),n._v(" Console控制台打印")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/118619748",target:"_blank",rel:"noopener noreferrer"}},[n._v("JS中只会使用console.log()？你out了"),t("OutboundLink")],1)]),n._v(" "),t("h2",{attrs:{id:"基本打印信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本打印信息"}},[n._v("#")]),n._v(" 基本打印信息")]),n._v(" "),t("p",[n._v("console.log（）| info（）| debug（）| warn（）| error（）")]),n._v(" "),t("p",[n._v("控制台日志/信息/调试/警告/错误")]),n._v(" "),t("p",[n._v("// 通过在文字前加上 ‘%c’, 然后在后方写入css设置即可将console。log加上CSS样式\nconsole.log('%c这是示例的文字-Tz','color:pink;font-size:50px;font-weight: 500')\nconsole.log('%c这是示例的文字-Tz','color:red;font-size:20px;font-weight: 600')\nconsole.log('%c这是示例的文字-Tz','color:blue;font-size:12px;font-weight: 700')")]),n._v(" "),t("p",[n._v("// 通过在文字前加上 ‘%c’, 然后在后方写入css设置即可将console。log加上CSS样式")]),n._v(" "),t("p",[n._v("console.log('哪有人就哪有江湖 相持相扶%c--Tz张无忌',\n　　　　　　　　'background-color:#222;font-size:24px;font-weight: 500;color:#bada55')")]),n._v(" "),t("h4",{attrs:{id:"打印对象的json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打印对象的json"}},[n._v("#")]),n._v(" 打印对象的JSON")]),n._v(" "),t("p",[t("strong",[n._v("console.dir（）")]),n._v("\n打印指定对象的JSON表示形式。\nconst zhangwuji = {\nname: '张无忌',\nage: 3,\ntel: '"),t("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.cnblogs.com/zhaohongcheng/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.cnblogs.com/zhaohongcheng/"),t("OutboundLink")],1),n._v("'\n}")]),n._v(" "),t("p",[n._v("console.log(zhangwuji)")]),n._v(" "),t("p",[t("strong",[n._v("控制台中的HTML元素")])]),n._v(" "),t("p",[n._v("就像检查元素一样，在控制台中获取HTML元素。\nlet zhangwuji = document.getElementsByTagName('body')[0]")]),n._v(" "),t("p",[n._v("console.log(zhangwuji)")]),n._v(" "),t("h3",{attrs:{id:"打印表格形式的json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打印表格形式的json"}},[n._v("#")]),n._v(" 打印表格形式的json")]),n._v(" "),t("p",[t("strong",[n._v("console.table（）")])]),n._v(" "),t("p",[n._v("是否想以正确且易于理解的方式查看JSON？\nconst bolg =[\n{\nname: '张无忌',\nage: 3,\ntel: '"),t("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.cnblogs.com/zhaohongcheng/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.cnblogs.com/zhaohongcheng/"),t("OutboundLink")],1),n._v("'\n},\n{\nname: '令狐冲',\nage: 12,\ntel: '"),t("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.baidu.com",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.baidu.com"),t("OutboundLink")],1),n._v("'\n},\n{\nname: '扫地僧',\nage: 22,\ntel: '"),t("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.didi.com",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.didi.com"),t("OutboundLink")],1),n._v("'\n}\n]")]),n._v(" "),t("p",[n._v("console.table(bolg)")]),n._v(" "),t("h3",{attrs:{id:"分组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分组"}},[n._v("#")]),n._v(" 分组")]),n._v(" "),t("p",[t("strong",[n._v("console.group（）和console.groupEnd（）")])]),n._v(" "),t("p",[n._v("很有可能用控制台将消息分组\n// 利用console.group()和console.groupEnd()将console.log分成一组一组")]),n._v(" "),t("p",[n._v("console.group();\nconsole.log('Dream')\nconsole.groupEnd()\nconsole.group();\nconsole.log('5')\nconsole.log('2')\nconsole.log('1')\nconsole.groupEnd()\nconsole.group();\nconsole.log('1')\nconsole.log('3')\nconsole.log('1')\nconsole.log('4')\nconsole.groupEnd()")]),n._v(" "),t("h3",{attrs:{id:"计数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计数"}},[n._v("#")]),n._v(" 计数")]),n._v(" "),t("p",[t("strong",[n._v("console.count（）")])]),n._v(" "),t("p",[n._v("此函数记录此特定调用count()已被调用的次数。该函数带有一个可选参数label。\n如果label提供了该函数，则该函数记录该count()特定调用的次数label。\n如果label省略，则函数记录在此特定行count()上被调用的次数。")]),n._v(" "),t("p",[n._v("for (let i = 0; i < 11; i++) {\nconsole.count();\n}")]),n._v(" "),t("h3",{attrs:{id:"打印一些选定的日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打印一些选定的日志"}},[n._v("#")]),n._v(" 打印一些选定的日志")]),n._v(" "),t("p",[t("strong",[n._v("console.assert（）")])]),n._v(" "),t("p",[n._v("当您只想打印一些选定的日志时，这非常方便，例如，它将仅打印false参数。如果第一个参数为true，则完全不执行任何操作。\nconst errorMsg = '不符合';\nfor (let number = 2; number <= 5; number += 1) {\nconsole.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});\n}")]),n._v(" "),t("h3",{attrs:{id:"计时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计时"}},[n._v("#")]),n._v(" 计时")]),n._v(" "),t("p",[t("strong",[n._v("console.time（）")]),n._v('\nconsole.time（）是一个专用于跟踪操作所花费时间的函数，它是跟踪JavaScript执行所花费的微时间的更好方法。\nconsole.time("This");\nlet total = 0;\nfor (let j = 0; j < 10000; j++) {\ntotal += j\n}\nconsole.log("Result", total);\nconsole.timeEnd("This");')]),n._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[n._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"用时"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//代码")]),n._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("timeEnd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"用时"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br")])])])}),[],!1,null,null,null);o.default=s.exports}}]);