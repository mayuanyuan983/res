(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{659:function(s,n,a){"use strict";a.r(n);var t=a(62),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"定时任务实现删除功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定时任务实现删除功能"}},[s._v("#")]),s._v(" 定时任务实现删除功能")]),s._v(" "),a("p",[s._v("clear.sh")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-mtime +n  时间为(n+1)*24")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /home/fdfs/storage/data -mtime +30 -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*..wav"')]),s._v(" -exec "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"授权脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#授权脚本"}},[s._v("#")]),s._v(" 授权脚本")]),s._v(" "),a("p",[s._v("chmod +x clear.sh")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("定时删除三十天前的后缀为"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("wav的文件  \n添加定时任务  00 02 * * * /home/clear.sh  \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".crontab -e   \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".按i：编辑  \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".输入完成，按ESC,然后shift+:  \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".输入wq保存  \n查看定时任务  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -l\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("点击 Esc 键，Vim 进入命令模式。然后输入：")]),s._v(" "),a("p",[s._v(":w            - 保存文件，不退出 vim\n:w file      -将修改另外保存到 file 中，不退出 vim\n:w!            -强制保存，不退出 vim\n:wq          -保存文件，退出 vim\n:wq!         -强制保存文件，退出 vim\n:q             -不保存文件，退出 vim\n:q!            -不保存文件，强制退出 vim\n:e!            -放弃所有修改，从上次保存文件开始再编辑")])])}),[],!1,null,null,null);n.default=e.exports}}]);