(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{723:function(s,a,t){"use strict";t.r(a);var n=t(62),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux环境"}},[s._v("#")]),s._v(" Linux环境")]),s._v(" "),t("p",[s._v("配置环境变量：")]),s._v(" "),t("p",[s._v("环境变量"),t("code",[s._v("LD_LIBRARY_PATH")]),s._v("也可保存目录列表，用(:)分开，该变量被动态\n连接器检查并用该变量指出的目录查找共享库。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看环境变量")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/resources/dll "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改环境变量")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/resources/dll:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#追加环境变量")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"文件授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件授权"}},[s._v("#")]),s._v(" 文件授权")]),s._v(" "),t("p",[t("code",[s._v("chmod -R 755 startup.sh")])]),s._v(" "),t("h4",{attrs:{id:"解压asar压缩包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压asar压缩包"}},[s._v("#")]),s._v(" 解压asar压缩包")]),s._v(" "),t("p",[t("code",[s._v("asar extract app.asar ./app")])]),s._v(" "),t("p",[s._v("打包成tar.gz格式压缩包")]),s._v(" "),t("p",[t("code",[s._v("tar -czvf linux.tar.gz linux-unpacked/")])]),s._v(" "),t("p",[s._v("解压tar.gz格式压缩包")]),s._v(" "),t("p",[t("code",[s._v("tar xzvf linux.tar.gz")])]),s._v(" "),t("h2",{attrs:{id:"执行脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行脚本"}},[s._v("#")]),s._v(" 执行脚本")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#startup.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LD_LIBRARY_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/resources/dll:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/app\n./app --no-sandbox\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"桌面快捷方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#桌面快捷方式"}},[s._v("#")]),s._v(" 桌面快捷方式")]),s._v(" "),t("p",[s._v("/usr/share/applications 目录")]),s._v(" "),t("p",[s._v("app.desktop")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Desktop Entry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Encoding")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UTF-8\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Application\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Terminal")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Exec")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/build/startup.sh "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动脚本路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("APP名称 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#快捷方式名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Icon")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("build/gmLogo.png "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#快捷方式图标")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("安装electron的命令\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g electron --unsafe-perm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true --allow-root\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("打开开发者工具")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("label")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"切换开发者工具"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("accelerator")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"darwin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("platform"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Alt+Command+I"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ctrl+Shift+I"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("click")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toggleDevTools")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\nmainWindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("webContents"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("openDevTools")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("追加文件")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("appendFileSync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./test.log"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"日志"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("soffice --headless --convert-to pdf:writer_pdf_Export 1.docx --outdir  /usr/local/pdf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);