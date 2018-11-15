

var url = require("url")
var http = require("http")
var finalhandler = require("finalhandler")
var fs  = require("fs");

var serve = serveStatic('public',{'index':['index.html','index.htm']});

var server = http.createServer(function onRequest(request,response) {
    serve(request,response,finalhandler(request,response))
    var pathname = url.parse(request.url).pathname;
    if (pathname == "/addStudent"){
        var queryJSON  = url.parse(request.url,true).query;
        response.end("OK");
    }
})

server.listen(3000)
console.log("服务器已经运行在3000端口")
