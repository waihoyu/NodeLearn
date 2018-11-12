var  http = require("http");
var fs = require("fs")
var url = require("url")


var server = http.createServer(function (request,response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname == "/music"){
        response.end("音乐频道");
    }else if (pathname == "/news"){
        response.end("新闻频道");
    } else if (/^\/student\/([\d]{6})$/.test(pathname)){
        var xuehao = /\/student\/([\d]{6})$/.exec(pathname)[1]
        response.end("学生频道，学号是"+xuehao);
    } else {
        response.end("错误的频道号码");
    }
})
