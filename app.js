// 引用 express 来支持 HTTP Server 的实现
const express = require('express');

// 引用微信公共平台自动回复消息接口服务中间件
var wechat = require('wechat');

// 创建一个 express 实例
const app = express();

// 载入配置文件
var config = require('./config/config');

app.use(express.query());

app.use('/', wechat(config, function (req, res, next) {
	var message = req.weixin;
	console.log(message);
	if (message.MsgType == 'event')
	{
		//关注事件
		if (message.Event == 'subscribe')
		{
			_wxSubscribeEvent(message, res);
		}
		//用户自定义菜单事件
		if (message.Event === 'CLICK')
		{
			//_wxMenuEvent(message,res);
		}
	}
	else if (message.MsgType == 'text')
	{
		_wxSubTextMsg(message, res);
	}
}));

// 监听端口，等待连接
const port = 5050;
app.listen(port);

// 输出服务器启动日志
console.log(`Server listening at http://127.0.0.1:${port}`);


//关注
function _wxSubscribeEvent(message, res) {
	var emptyStr = "          ";    
	var replyStr = "感谢你的关注!";
	res.reply(replyStr);
}

//用户输入处理
function _wxSubTextMsg(message, res) {
	var emptyStr = "          ";    
	var replyStr = "你输入的是：" + message.Content;
	res.reply(replyStr);
}