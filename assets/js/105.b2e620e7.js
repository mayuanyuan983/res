(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{518:function(t,a,s){"use strict";s.r(a);var e=s(62),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"idea常用设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea常用设置"}},[t._v("#")]),t._v(" IDEA常用设置")]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[s("strong",[t._v("File->Invalidate Caches/Restart 清除缓存重启")])]),t._v(" "),s("img",{staticStyle:{zoom:"60%"},attrs:{src:t.$withBase("/img/image-20200830150400487.png"),alt:"dock"}}),t._v(" "),s("img",{staticStyle:{zoom:"60%"},attrs:{src:t.$withBase("/img/image-20200830150513771.png"),alt:"dock"}}),t._v(" "),s("img",{staticStyle:{zoom:"60%"},attrs:{src:t.$withBase("/img/image-20200830150828315.png"),alt:"dock"}}),t._v(" "),s("p",[t._v("显示行号，显示svn/git最近提交人")]),t._v(" "),s("h2",{attrs:{id:"使用vpn时无法连接mysql错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用vpn时无法连接mysql错误"}},[t._v("#")]),t._v(" 使用vpn时无法连接mysql错误")]),t._v(" "),s("h3",{attrs:{id:"_1-使用xshell配置隧道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用xshell配置隧道"}},[t._v("#")]),t._v(" 1.使用xshell配置隧道")]),t._v(" "),s("img",{staticStyle:{zoom:"60%"},attrs:{src:t.$withBase("/img/image-20200831222245292.png"),alt:"dock"}}),t._v(" "),s("p",[t._v("ssh须保持连接")]),t._v(" "),s("h3",{attrs:{id:"_2-配置idea"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置idea"}},[t._v("#")]),t._v(" 2.配置IDEA")]),t._v(" "),s("p",[t._v("配置VM option：\n-DsocksProxyHost=127.0.0.1 -DsocksProxyPort=3306")]),t._v(" "),s("img",{staticStyle:{zoom:"60%"},attrs:{src:t.$withBase("/img/image-20200831222322385.png"),alt:"dock"}}),t._v(" "),s("img",{staticStyle:{zoom:"60%"},attrs:{src:t.$withBase("/img/image-20200831222341105.png"),alt:"dock"}}),t._v(" "),s("h2",{attrs:{id:"idea断点调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea断点调试"}},[t._v("#")]),t._v(" IDEA断点调试")]),t._v(" "),s("h3",{attrs:{id:"_1-断点类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-断点类型"}},[t._v("#")]),t._v(" 1.断点类型")]),t._v(" "),s("ol",[s("li",[t._v("行断点（Line Breakpoints）：最经常用的方式， 可以设置在任何可执行的代码行上")]),t._v(" "),s("li",[t._v("方法断点（Method Breakpoints）：在进入或退出指定的方法或其实现之一时挂起程序，允许您检查方法的进入/退出条件")]),t._v(" "),s("li",[t._v("字段断点（Field Watchpoints）：当指定的字段被读取或写入时，挂起程序。需要注意的是，默认只有写才会停下，想要让读取时也停下，需要右击断点，在"),s("strong",[t._v("Watch")]),t._v("的"),s("strong",[t._v("Field access")]),t._v("上打勾才行")]),t._v(" "),s("li",[t._v("异常断点（Exception Breakpoints）：当抛出Throwable或其子类时挂起程序 。可以在 **Run — View Breakpoints **中的 Java Exception Breakpoints 里添加异常的具体类型。这样的话，程序中一旦发生了这种异常马上就会停下来")])]),t._v(" "),s("h3",{attrs:{id:"_2-条件断点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-条件断点"}},[t._v("#")]),t._v(" 2.条件断点")]),t._v(" "),s("p",[t._v("有时候我们在循环处理数据时候，可能只关心某个条件的数据，就可以在断点位置右键，设置"),s("strong",[t._v("断点条件")])]),t._v(" "),s("img",{staticStyle:{zoom:"60%"},attrs:{src:t.$withBase("/img/image-20200913123442744.png"),alt:"dock"}}),t._v(" "),s("h3",{attrs:{id:"_3-异常断点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-异常断点"}},[t._v("#")]),t._v(" 3.异常断点")]),t._v(" "),s("p",[t._v("可以新建异常检测，或者检测所有异常（"),s("strong",[t._v("Any Exception")]),t._v("） 情况，这样只要程序有相应异常，就会挂起")]),t._v(" "),s("img",{staticStyle:{zoom:"60%"},attrs:{src:t.$withBase("/img/image-20200913123549413.png"),alt:"dock"}}),t._v(" "),s("h3",{attrs:{id:"_4-逐步执行程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-逐步执行程序"}},[t._v("#")]),t._v(" 4.逐步执行程序")]),t._v(" "),s("img",{staticStyle:{zoom:"60%"},attrs:{src:t.$withBase("/img/image-20200913123115198.png"),alt:"dock"}}),t._v(" "),s("h2",{attrs:{id:"远程调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程调试"}},[t._v("#")]),t._v(" 远程调试")]),t._v(" "),s("p",[t._v("线上使用此命令启动")]),t._v(" "),s("p",[s("code",[t._v("java -Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8081 -jar demo.jar")])]),t._v(" "),s("img",{staticStyle:{zoom:"60%"},attrs:{src:t.$withBase("/img/image-20200913123115198.png"),alt:"dock"}}),t._v(" "),s("p",[t._v("在IDEA中启动DEBUG")]),t._v(" "),s("p",[t._v("注意：线上代码需和线下代码完全一致")])])}),[],!1,null,null,null);a.default=r.exports}}]);