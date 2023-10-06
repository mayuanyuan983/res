module.exports = [
	{
		title:'首页',
		path:'/page/linux/'
	},
	{
		title:'linux连接数据库',
		collapsable: true,
		children:[
			{
				title:'linux连接Mysql数据库',
				path:'/page/linux/notes/1'
			},
			{
				title:'linux连接Redis数据库',
				path:'/page/linux/notes/2'
			},
		]
	},
	{
		title:'Linux命令',
		collapsable: true,
		children:[
			{
				title:'linux命令',
				path:'/page/linux/notes/3'
			},
			{
				title:'JAR启动命令',
				path:'/page/linux/notes/4'
			},
			{
				title:'Linux find命令',
				path:'/page/linux/notes/5'
			},
			{
				title:'Linux基本命令',
				path:'/page/linux/notes/6'
			},
			{
				title:'linux发送get/post请求',
				path:'/page/linux/notes/7'
			},
			{
				title:'chmod授权',
				path:'/page/linux/notes/10'
			},
			{
				title:'Linux压缩、解压命令',
				path:'/page/linux/notes/13'
			},
			{
				title:'linux 创建连接命令 ln -s 软链接',
				path:'/page/linux/notes/14'
			},
		]
	},
	{
		title:'文件操作',
		collapsable: true,
		children:[
			{
				title:'GREP',
				path:'/page/linux/notes/15'
			},
			{
				title:'CAT',
				path:'/page/linux/notes/16'
			},
			{
				title:'查看日志',
				path:'/page/linux/notes/18'
			},
			{
				title:'其他',
				path:'/page/linux/notes/17'
			},
		]
	},
	{
		title:'其他',
		collapsable: true,
		children:[
			{
				title:'定时任务实现删除功能',
				path:'/page/linux/notes/8'
			},
			'/page/linux/notes/9',
			{
				title:'Xmanager',
				path:'/page/linux/notes/11'
			},
			'/page/linux/notes/12',
			'/page/linux/notes/20',
			'/page/linux/notes/21',
			'/page/linux/notes/22',
			'/page/linux/notes/23',
		]
	},
	{
		title:'K8s',
		collapsable: true,
		children:[
			'/page/linux/notes/19'
		]
	},
	{
		title:'Docker',
		collapsable: true,
		children:[
			'/page/linux/notes/docker/0',
			'/page/linux/notes/docker/1',
			'/page/linux/notes/docker/2',
			'/page/linux/notes/docker/3',
			'/page/linux/notes/docker/4',
			'/page/linux/notes/docker/5',
			'/page/linux/notes/docker/6',
			'/page/linux/notes/docker/7',
		]
	},
]