(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{457:function(t,a,e){"use strict";e.r(a);var r=e(62),o=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"springboot多数据源-读写分离-入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springboot多数据源-读写分离-入门"}},[t._v("#")]),t._v(" SpringBoot多数据源（读写分离）入门")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.iocoder.cn/Spring-Boot/dynamic-datasource/?yudao",target:"_blank",rel:"noopener noreferrer"}},[t._v("芋道 Spring Boot 多数据源（读写分离）入门 | 芋道源码 —— 纯源码解析博客 (iocoder.cn)"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("解锁码：coke")]),t._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[t._v("场景")]),t._v(" "),e("p",[t._v("读写分离：数据库主节点压力大，需要增加从节点提供读操作，减少压力")]),t._v(" "),e("p",[t._v("多数据源：一个复杂单体项目，未拆分为多个不同服务，需要连接多个业务的数据源")]),t._v(" "),e("p",[t._v("读写分离只是多数据源的一个场景，从节点只提供读操作。")]),t._v(" "),e("h2",{attrs:{id:"实现方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现方式"}},[t._v("#")]),t._v(" 实现方式")]),t._v(" "),e("h3",{attrs:{id:"方案一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[t._v("#")]),t._v(" 方案一")]),t._v(" "),e("p",[t._v("基于Spring AbstractRoutingDataSource做拓展")]),t._v(" "),e("p",[t._v("原理：通过继承AbstractRoutingDataSource抽象类，实现一个管理项目中多个DataSource的动态DynamicRoutingDataSource实现类。Spring在获取数据源时，可以通过其返回实际的DataSource。然后我们自定义一个注解"),e("code",[t._v("DS")]),t._v("，可以添加在Sevice或Dao方法上，表示其实际对应的DataSource。即执行数据操作时，通过其方法上配置的注解，使用DynamicRoutingDataSource获得对应的DataSource。之后通过DataSource获得Connection连接，最后发起数据库操作。")]),t._v(" "),e("p",[t._v("这种方式会存在结合Spring事务时，无法切换数据源的问题。")]),t._v(" "),e("p",[t._v("开源项目推荐使用baomidou提供的"),e("code",[t._v("dynamic-datasource-spring-boot-starter")])]),t._v(" "),e("h3",{attrs:{id:"方案二【一般不用】"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案二【一般不用】"}},[t._v("#")]),t._v(" 方案二【一般不用】")]),t._v(" "),e("p",[t._v("不同操作类，固定数据源")]),t._v(" "),e("p",[t._v("可以创建多个SqlSessionTemplate使用不同的数据源，然后配置不同的Mapper使用不同的SqlSessionTemplate。即执行数据操作时，通过Mapper可以对应其SqlSessionTemplate，使用SqlSessionTemplate获得对应的DataSource。之后通过DataSource获得Connection连接，最后发起数据库操作。")]),t._v(" "),e("p",[t._v("这种方式也会存在结合Spring事务时，无法切换数据源的问题。")]),t._v(" "),e("h3",{attrs:{id:"方案三"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案三"}},[t._v("#")]),t._v(" 方案三")]),t._v(" "),e("p",[t._v("分库分表中间件")]),t._v(" "),e("p",[t._v("分库分表中间件会解析我们编写的SQL，路由操作到对应的数据源。如此，只需要配置每个表对应的数据源，中间件便可透明的实现多数据源或读写分离。")]),t._v(" "),e("p",[t._v("目前Java最好用的分库分表中间件为"),e("code",[t._v("Apache ShardingSphere")])]),t._v(" "),e("p",[t._v("这种方式在结合Spring事务时，不会存在无法切换数据源的问题。方案一和二中，在Spring事务中，会获得对应的DataSource，再获得Connection进行数据库操作。而获得的Connection以及其上的事务，会通过ThreadLocal的方式和当前线程进行绑定。这样会导致我们无法切换数据源。")]),t._v(" "),e("p",[t._v("分库分表中间件返回的Connection返回的实际上是动态的DynamicRoutingConnection，它管理了整个请求过程中使用的所有的Connection，而最终执行SQL的时候，DynamicRoutingConnection会解析SQL，获得表对应的真正的Connection执行SQL操作。")]),t._v(" "),e("p",[t._v("它也能够解决多个Connection可能产生的多个事务的一致性问题，即分布式事务。")]),t._v(" "),e("h2",{attrs:{id:"使用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),e("p",[t._v("TODO")])])}),[],!1,null,null,null);a.default=o.exports}}]);