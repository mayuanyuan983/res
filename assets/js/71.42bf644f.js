(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{485:function(a,s,t){"use strict";t.r(s);var r=t(62),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mysql字符串数字大小排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql字符串数字大小排序"}},[a._v("#")]),a._v(" mysql字符串数字大小排序")]),a._v(" "),t("p",[a._v("对mysql数值字符串类型进行排序，在默认情况下使用order by 字段名称 desc/asc 进行排序的时候，mysql进行的排序规则是按照ASCII码进行排序的，并不会自动的识别出这些数据是数值")]),a._v(" "),t("p",[a._v("order by 字段名称+0 desc/asc的形式进行排序")]),a._v(" "),t("p",[a._v("----这样mysql会将数值字符串类型的数据当作数值进行处理，但是存在效率问题，不推荐使用varchar/char类型来存储数值，这样会带来不不必要的问题.")]),a._v(" "),t("p",[a._v("查询数据对数字排序的时候出现1 11 12 13 14....2 21 22 23 24...")]),a._v(" "),t("p",[a._v("现需要按数字大小排序则需要处理")]),a._v(" "),t("p",[a._v("①：ORDER BY 字段+0")]),a._v(" "),t("p",[a._v("②：ORDER BY CAST(字段 AS SIGNED)")]),a._v(" "),t("p",[a._v("③：ORDER BY 字段*1")]),a._v(" "),t("p",[a._v("根据测试此方式只支持纯数字（1,10）或者以数字开头（1a,11a）的字段，如果字段是按字符+数字形式的（a1,a2,b1,b2,a1a,a2a），则上面的方式达不到排序的目的")])])}),[],!1,null,null,null);s.default=e.exports}}]);