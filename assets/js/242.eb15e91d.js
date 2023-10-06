(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{655:function(v,_,e){"use strict";e.r(_);var n=e(62),p=Object(n.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"linux-find命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-find命令"}},[v._v("#")]),v._v(" Linux find命令")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://www.runoob.com/linux/linux-command-manual.html",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://www.runoob.com/images/up.gif",alt:"Linux 命令大全"}}),v._v(" Linux 命令大全"),e("OutboundLink")],1)]),v._v(" "),e("p",[v._v("Linux find命令用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则find命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。")]),v._v(" "),e("h3",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[v._v("#")]),v._v(" 语法")]),v._v(" "),e("p",[e("code",[v._v("find path -option [ -print ] [ -exec -ok command ] {} \\;")])]),v._v(" "),e("p",[e("strong",[v._v("参数说明")]),v._v(" :")]),v._v(" "),e("p",[v._v("find 根据下列规则判断 path 和 expression，在命令列上第一个 - ( ) , ! 之前的部份为 path，之后的是 expression。如果 path 是空字串则使用目前路径，如果 expression 是空字串则使用 -print 为预设 expression。")]),v._v(" "),e("p",[v._v("expression 中可使用的选项有二三十个之多，在此只介绍最常用的部份。")]),v._v(" "),e("p",[v._v("-mount, -xdev : 只检查和指定目录在同一个文件系统下的文件，避免列出其它文件系统中的文件")]),v._v(" "),e("p",[v._v("-amin n : 在过去 n 分钟内被读取过")]),v._v(" "),e("p",[v._v("-anewer file : 比文件 file 更晚被读取过的文件")]),v._v(" "),e("p",[v._v("-atime n : 在过去n天内被读取过的文件")]),v._v(" "),e("p",[v._v("-cmin n : 在过去 n 分钟内被修改过")]),v._v(" "),e("p",[v._v("-cnewer file :比文件 file 更新的文件")]),v._v(" "),e("p",[v._v("-ctime n : 在过去n天内被修改过的文件")]),v._v(" "),e("p",[v._v("-empty : 空的文件-gid n or -group name : gid 是 n 或是 group 名称是 name")]),v._v(" "),e("p",[v._v("-ipath p, -path p : 路径名称符合 p 的文件，ipath 会忽略大小写")]),v._v(" "),e("p",[v._v("-name name, -iname name : 文件名称符合 name 的文件。iname 会忽略大小写")]),v._v(" "),e("p",[v._v("-size n : 文件大小 是 n 单位，b 代表 512 位元组的区块，c 表示字元数，k 表示 kilo bytes，w 是二个位元组。-type c : 文件类型是 c 的文件。")]),v._v(" "),e("p",[v._v("d: 目录")]),v._v(" "),e("p",[v._v("c: 字型装置文件")]),v._v(" "),e("p",[v._v("b: 区块装置文件")]),v._v(" "),e("p",[v._v("p: 具名贮列")]),v._v(" "),e("p",[v._v("f: 一般文件")]),v._v(" "),e("p",[v._v("l: 符号连结")]),v._v(" "),e("p",[v._v("s: socket")]),v._v(" "),e("p",[v._v("-pid n : process id 是 n 的文件")]),v._v(" "),e("p",[v._v("你可以使用 ( ) 将运算式分隔，并使用下列运算。")]),v._v(" "),e("p",[v._v("exp1 -and exp2")]),v._v(" "),e("p",[v._v("! expr")]),v._v(" "),e("p",[v._v("-not expr")]),v._v(" "),e("p",[v._v("exp1 -or exp2")]),v._v(" "),e("p",[v._v("exp1, exp2")]),v._v(" "),e("h3",{attrs:{id:"实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[v._v("#")]),v._v(" 实例")]),v._v(" "),e("p",[v._v("将目前目录及其子目录下所有延伸档名是 c 的文件列出来。")]),v._v(" "),e("p",[e("code",[v._v('find . -name "*.c"')])]),v._v(" "),e("p",[v._v("将目前目录其其下子目录中所有一般文件列出")]),v._v(" "),e("p",[e("code",[v._v("find . -type f")])]),v._v(" "),e("p",[v._v("将目前目录及其子目录下所有最近 20 天内更新过的文件列出")]),v._v(" "),e("p",[e("code",[v._v("find . -ctime -20")])]),v._v(" "),e("p",[v._v("查找/var/log目录中更改时间在7日以前的普通文件，并在删除之前询问它们：")]),v._v(" "),e("p",[e("code",[v._v("find /var/log -type f -mtime +7 -ok rm {} \\;")])]),v._v(" "),e("p",[v._v("查找前目录中文件属主具有读、写权限，并且文件所属组的用户和其他用户具有读权限的文件：")]),v._v(" "),e("p",[e("code",[v._v("find . -type f -perm 644 -exec ls -l {} \\;")])]),v._v(" "),e("p",[v._v("为了查找系统中所有文件长度为0的普通文件，并列出它们的完整路径：")]),v._v(" "),e("p",[e("code",[v._v("find / -type f -size 0 -exec ls -l {} \\;")])]),v._v(" "),e("h3",{attrs:{id:"场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[v._v("#")]),v._v(" 场景")]),v._v(" "),e("p",[e("strong",[v._v("场景1")]),v._v("：服务器磁盘满，一般由大的日志文件导致，需找到大文件并删除。")]),v._v(" "),e("p",[e("strong",[v._v("解决1")]),v._v(": "),e("code",[v._v("find / -size +500M -print0|xargs -0 du -m|sort -nr")])]),v._v(" "),e("p",[v._v("find指令为找出500M以上的文件，print0和xargs -0配合使用，用来解决文件名中有空格或特殊字符问题。du -m是查看这些文件的大小，并以m为单位显示。最后sort -nr是按照数字反向排序（大的文件在前）")]),v._v(" "),e("p",[e("strong",[v._v("解决2")]),v._v("：上述方法从根路径查找，可能列出一些系统文件。可以在这个查找之前先进行一下过滤。")]),v._v(" "),e("p",[v._v("使用"),e("code",[v._v("du -m -d 1 /|sort -nr")]),v._v(" 先看看根路径下，哪个文件夹比较大，并且有嫌疑是导致磁盘满的罪魁祸首。然后再基于那个目录进行find。")]),v._v(" "),e("p",[v._v("----------------------------------------")]),v._v(" "),e("p",[e("strong",[v._v("场景2:")]),v._v(" 记得写过一个xxx.c的文件，但是忘了放哪里了")]),v._v(" "),e("p",[e("strong",[v._v("解决：")]),e("code",[v._v("find / -name *xxx*.c")]),v._v(" 模糊查找下这个文件")])])}),[],!1,null,null,null);_.default=p.exports}}]);