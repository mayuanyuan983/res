(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{434:function(s,t,a){"use strict";a.r(t);var n=a(62),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"常用sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用sql"}},[s._v("#")]),s._v(" 常用SQL")]),s._v(" "),a("h2",{attrs:{id:"外键查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外键查询"}},[s._v("#")]),s._v(" 外键查询")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("table_name      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" org_table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("constraint_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" org_constraint_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("constraint_type "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" org_constriant_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         n1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("column_name     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" org_colun_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("table_name      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" ref_table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("constraint_type "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" ref_constraint_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("constraint_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" ref_constraint_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         n2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("column_name     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" ref_column_name\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dba_constraints  c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         dba_constraints  c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         dba_cons_columns n1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         dba_cons_columns n2\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OMS_SHAOX'")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'BASE_ROLE'")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" n1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("constraint_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("constraint_name\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" n1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("owner\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("constraint_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'R'")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("r_constraint_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("constraint_name\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" n2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("owner\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" n2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("constraint_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("constraint_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);