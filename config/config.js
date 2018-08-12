// 配置微信公众平台参数，在教程第二步中获取
var config = {
    token: 'your token', // 填第二步中获取的 `token`
    appid: 'your appid', // 填第二步中获取的 `appid`
    encodingAESKey: 'your encodingAESKey', // 填第二步中获取的 `encodingAESKey`
    checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false 
};
module.exports = config;