(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{495:function(a,s,t){"use strict";t.r(s);var e=t(62),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"表空间、用户创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表空间、用户创建"}},[a._v("#")]),a._v(" 表空间、用户创建")]),a._v(" "),t("p",[a._v("oracle内部有两个建好的用户：system和sys。用户可直接登录到system用户以创建其他用户，因为system具有创建别的用户的权限。在安装oracle时，用户或系统管理员首先可以为自己建立一个用户。")]),a._v(" "),t("img",{staticStyle:{zoom:"60%"},attrs:{src:a.$withBase("/img/image-20200918141709976.png"),alt:"dock"}}),a._v(" "),t("h2",{attrs:{id:"_1-查看表空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看表空间"}},[a._v("#")]),a._v(" 1.查看表空间")]),a._v(" "),t("p",[t("code",[a._v("select * from v$dbfile;")])]),a._v(" "),t("h2",{attrs:{id:"_2-查看表空间的名称及大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看表空间的名称及大小"}},[a._v("#")]),a._v(" 2.查看表空间的名称及大小")]),a._v(" "),t("blockquote",[t("p",[a._v("1.查看表空间的名称及大小")]),a._v(" "),t("p",[a._v("SELECT t.tablespace_name, round(SUM(bytes / (1024 * 1024)), 0) ts_size FROM dba_tablespaces t, dba_data_files d WHERE t.tablespace_name = d.tablespace_name GROUP BY t.tablespace_name;\n2.查看表空间物理文件的名称及大小")]),a._v(" "),t("p",[a._v("SELECT tablespace_name, file_id, file_name, round(bytes / (1024 * 1024), 0) total_space FROM dba_data_files ORDER BY tablespace_name;")])]),a._v(" "),t("h2",{attrs:{id:"_3-创建表空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建表空间"}},[a._v("#")]),a._v(" 3.创建表空间")]),a._v(" "),t("blockquote",[t("p",[a._v("1.创建数据表临时空间")]),a._v(" "),t("p",[a._v("create temporary tablespace kc_temp tempfile 'C:\\app\\Administrator\\oradata\\orcl\\kc_temp.dbf' size 50m  autoextend on  next 50m maxsize 20480m  extent management local;")]),a._v(" "),t("p",[a._v("2.创建数据表空间")]),a._v(" "),t("p",[a._v("create tablespace kc  logging  datafile 'C:\\app\\Administrator\\oradata\\orcl\\kc.dbf' size 50m  autoextend on  next 50m maxsize 20480m  extent management local;")])]),a._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- 创建表空间")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Create")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("tablespace")]),a._v(" fm\n\nlogging\n\ndatafile "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/oracle/app/oradata/orcl/fm.dbf'")]),a._v("\n\nsize "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("m\n\nautoextend "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("on")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("next")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("m\n\nextent management "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("local")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- 查询表空间")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" dba_data_files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- 删除表空间")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLESPACE")]),a._v(" fm INCLUDING CONTENTS "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("AND")]),a._v(" DATAFILES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);