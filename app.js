// 引用 express 来支持 HTTP Server 的实现
const express = require('express');

// 引用微信公共平台自动回复消息接口服务中间件
var wechat = require('wechat');

// 创建一个 express 实例
const app = express();

// 载入配置文件
var config = require('./config');

app.use(express.query());

app.use('/', wechat(config, function (req, res, next) {
    res.reply({
        content: '你好，Hello World!',
        type: 'text'
    });
}));

// 监听端口，等待连接
const port = 5050;
app.listen(port);

// 输出服务器启动日志
console.log(`Server listening at http://127.0.0.1:${port}`);