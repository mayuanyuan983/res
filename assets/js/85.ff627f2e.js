(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{500:function(s,e,t){"use strict";t.r(e);var a=t(62),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"oracle连接数配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle连接数配置"}},[s._v("#")]),s._v(" oracle连接数配置")]),s._v(" "),t("h3",{attrs:{id:"_1-连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-连接"}},[s._v("#")]),s._v(" 1.连接")]),s._v(" "),t("p",[s._v("连接Linux服务器，切换oracle用户，使用系统用户（sys）登入oracle数据库")]),s._v(" "),t("p",[t("code",[s._v("su - oracle")])]),s._v(" "),t("p",[t("code",[s._v("sqlplus / as sysdba")])]),s._v(" "),t("h3",{attrs:{id:"_2-查看连接数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看连接数"}},[s._v("#")]),s._v(" 2.查看连接数")]),s._v(" "),t("p",[s._v("查看当前oracle数据库进程数（连接数）+ sessions数 和 进程数（连接数）上限 + sessions数上限")]),s._v(" "),t("blockquote",[t("p",[s._v("SQL> select count(*) from v$process;  //当前oracle数据库进程数（连接数）")]),s._v(" "),t("p",[s._v("SQL> select count(*) from v$session;  //当前oracle数据库sessions数")]),s._v(" "),t("p",[s._v("SQL> select value from v$parameter where name = 'processes';  //进程数（连接数）上限")]),s._v(" "),t("p",[s._v("SQL> select value from v$parameter where name = 'sessions';  //sessions数上限")]),s._v(" "),t("p",[s._v("SQL> show parameter processes  //当前数据库进程参数详情")]),s._v(" "),t("p",[s._v("SQL> show parameter sessions  //当前数据库进程参数详情")])]),s._v(" "),t("h3",{attrs:{id:"_3-修改进程数-连接数-sessions上限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改进程数-连接数-sessions上限"}},[s._v("#")]),s._v(" 3.修改进程数（连接数）+ sessions上限")]),s._v(" "),t("blockquote",[t("p",[s._v("SQL> alter system set processes=300 scope=spfile;")]),s._v(" "),t("p",[s._v("SQL> alter system set sessions=300 scope=spfile;")])]),s._v(" "),t("p",[s._v("引用别人关于spfile的解释：")]),s._v(" "),t("p",[s._v("注：此处如果提示错误：ORA-32001，则说明DB是以pfile启动的，需要修改为用spfile启动，具体修改方法如下：")]),s._v(" "),t("blockquote",[t("p",[s._v("SQL>show parameter spfile查一下是使用什么文件启动的。")]),s._v(" "),t("p",[s._v("SQL> show parameter spfile;")]),s._v(" "),t("p",[s._v("要动态修改一定要用spfile启动。如果现在是用pfile启动，可以这样切换成spfile启动：")]),s._v(" "),t("p",[s._v("SQL>create spfile from pfile;")]),s._v(" "),t("p",[s._v("SQL>shutdown immediate;")]),s._v(" "),t("p",[s._v("SQL>startup;")]),s._v(" "),t("p",[s._v("用show paramer spfile 查看如果values对应有值，表示是spfile启动的。否则就是pfile启动的。")])]),s._v(" "),t("h3",{attrs:{id:"_4-重启数据库-使更改生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-重启数据库-使更改生效"}},[s._v("#")]),s._v(" 4. 重启数据库，使更改生效")]),s._v(" "),t("blockquote",[t("p",[s._v("SQL> alter system checkpoint")]),s._v(" "),t("p",[s._v("SQL> shutdown immediatec")]),s._v(" "),t("p",[s._v("SQL> startup")])])])}),[],!1,null,null,null);e.default=r.exports}}]);