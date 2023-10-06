(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{652:function(s,a,t){"use strict";t.r(a);var e=t(62),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"windows-terminal-scp文件操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-terminal-scp文件操作"}},[s._v("#")]),s._v(" Windows Terminal SCP文件操作")]),s._v(" "),t("h3",{attrs:{id:"_1、上传本地文件到服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、上传本地文件到服务器"}},[s._v("#")]),s._v(" 1、上传本地文件到服务器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#scp /path/filename username@servername:/path/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把本机/var/www/目录下的test.php文件上传到192.168.0.101这台服务器上的/var/www/目录中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" /var/www/test.php root@192.168.0.101:/var/www/ \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_2、从服务器上下载文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、从服务器上下载文件"}},[s._v("#")]),s._v(" 2、从服务器上下载文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#scp username@servername:/path/filename /var/www/local_dir（本地目录）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把192.168.0.101上的/var/www/test.txt 的文件下载到/var/www/local_dir（本地目录）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" root@192.168.0.101:/var/www/test.txt \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_3、从服务器下载整个目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、从服务器下载整个目录"}},[s._v("#")]),s._v(" 3、从服务器下载整个目录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#scp -r username@servername:/var/www/remote_dir/（远程目录） /var/www/local_dir（本地目录）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r root@192.168.0.101:/var/www/test /var/www/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_4、上传目录到服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、上传目录到服务器"}},[s._v("#")]),s._v(" 4、上传目录到服务器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#scp -r local_dir username@servername:remote_dir")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把当前目录下的test目录上传到服务器的/var/www/ 目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" root@192.168.0.101:/var/www/ \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);