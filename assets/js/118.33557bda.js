(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{531:function(n,s,a){"use strict";a.r(s);var t=a(62),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"centeros7安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centeros7安装nginx"}},[n._v("#")]),n._v(" CenterOs7安装nginx")]),n._v(" "),a("h3",{attrs:{id:"_1-上传依赖包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-上传依赖包"}},[n._v("#")]),n._v(" 1.上传依赖包")]),n._v(" "),a("p",[n._v("到目录执行")]),n._v(" "),a("p",[n._v("rpm -Uvh *.rpm --nodeps --force")]),n._v(" "),a("h3",{attrs:{id:"_2-解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解压"}},[n._v("#")]),n._v(" 2.解压")]),n._v(" "),a("p",[n._v("tar zxvf nginx-1.18.0.tar.gz")]),n._v(" "),a("p",[n._v("进入nginx目录")]),n._v(" "),a("p",[n._v("./configure")]),n._v(" "),a("p",[n._v("最后会看到类似下面信息，表示编译成功")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Configuration summary  \n\n+ using system PCRE library  \n+ OpenSSL library is not used  \n+ md5: using system crypto library  \n+ sha1 library is not used  \n+ using system zlib library     \n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br")])]),a("h3",{attrs:{id:"_3-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装"}},[n._v("#")]),n._v(" 3.安装")]),n._v(" "),a("p",[n._v("执行 make")]),n._v(" "),a("p",[n._v("执行 make  install")]),n._v(" "),a("p",[n._v("默认会安装到/usr/local/nginx目录下面")]),n._v(" "),a("h3",{attrs:{id:"_4-启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动"}},[n._v("#")]),n._v(" 4.启动")]),n._v(" "),a("p",[n._v("/usr/local/nginx/sbin/nginx")]),n._v(" "),a("p",[n._v("查看是否启动成功")]),n._v(" "),a("p",[a("code",[n._v("ps -ef|grep nginx")])]),n._v(" "),a("p",[n._v("启动成功，master是主进程，关闭的时候kill这个进程，其他子进程会自动关掉")]),n._v(" "),a("p",[n._v("打开浏览器http://localhost/ 即可看到nginx的默认欢迎页")]),n._v(" "),a("p",[n._v("Welcome to nginx!")]),n._v(" "),a("p",[n._v("nginx默认是用80端口，我们可以在nginx安装目录下的conf/nginx.conf文件中更改。")]),n._v(" "),a("p",[n._v("vim /usr/local/nginx/conf/nginx.conf")]),n._v(" "),a("p",[n._v("找到以下片段进行更改，然后重启")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("server {  \n       listen       80; //端口  \n       server_name  localhost; //绑定域名  \n       location / {  \n           root   html; //默认目录  \n           index  index.html index.htm; //默认首页名称  \n       }  \n}  \n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br")])]),a("p",[n._v("更改好后，重启nginx。")]),n._v(" "),a("p",[a("code",[n._v("./nginx -s reload")])])])}),[],!1,null,null,null);s.default=e.exports}}]);