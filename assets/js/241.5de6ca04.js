(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{653:function(a,t,o){"use strict";o.r(t);var n=o(62),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"jar启动命令"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jar启动命令"}},[a._v("#")]),a._v(" JAR启动命令")]),a._v(" "),o("h4",{attrs:{id:"启动命令"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#启动命令"}},[a._v("#")]),a._v(" 启动命令")]),a._v(" "),o("p",[a._v("nohup java -jar -Dspring.config.location=application.yml  tva-wechat-0.0.1.jar 1>/dev/null 2>&1&")]),a._v(" "),o("p",[a._v("nohup java -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -Xloggc:$path/gc.log -XX:MetaspaceSize=256M -XX:MaxMetaspaceSize=256M -jar $path/tva-dec-0.0.1.jar --spring.profiles.active=prod 1>/dev/null 2>&1&")]),a._v(" "),o("p",[a._v("指定目录下的配置文件执行-Dspring.config.location=$path/application.yml（application.yml可重命名）")]),a._v(" "),o("p",[o("code",[a._v("nohup java -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -Xloggc:$path/gc.log -jar -Dspring.config.location=application.yml monitor-0.0.1.jar 1>/dev/null 2>&1&")])]),a._v(" "),o("p",[o("code",[a._v("nohup java -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -Xloggc:$path/gc.log -XX:MetaspaceSize=256M -XX:MaxMetaspaceSize=256M -jar tva-dec-0.0.1.jar --spring.profiles.active=prod 1>/dev/null 2>&1&")])]),a._v(" "),o("p",[o("code",[a._v("nohup java -jar monitor-0.0.1.jar &")])]),a._v(" "),o("p",[a._v("1.不输出nohup日志")]),a._v(" "),o("p",[o("code",[a._v("nohup java -jar monitor-0.0.1.jar 1>/dev/null 2>&1&")])]),a._v(" "),o("p",[a._v("2.指定配置")]),a._v(" "),o("p",[o("code",[a._v("nohup java -jar -Dspring.config.location=application.yml monitor-0.0.1.jar 1>/dev/null 2>&1&")])]),a._v(" "),o("p",[a._v("3.指定环境 prod dev test")]),a._v(" "),o("p",[o("code",[a._v("nohup java -jar monitor-0.0.1.jar --spring.profiles.active=prod 1>/dev/null 2>&1&")])])])}),[],!1,null,null,null);t.default=r.exports}}]);