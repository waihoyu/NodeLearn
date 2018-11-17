
/*
   这个案例演示POST请求通过formidable来处理参数

 */

var finalhandler = require('finalhandler');
var http = require('http')
var serveStatic = require('serve-static')
var url = require('url')
var fs = require("fs")
var querystring = require("querystring")
var formidable = require("formidable")
var path = require("path")

var serve = serveStatic('public',{'index':['index.html','index.htm']})

var server = http.createServer(function onRequest(request,response) {
    var pathname = url.parse(request.url).pathname
    if (pathname == "/shangchuan"){
        var form = new formidable.IncomingForm();
        form.uploadDir="./uploads"
        form.parse(request,function (err,fields,files) {
            // response.writeHead(200,{'content-type':'text/plain'});
            response.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"})
            // response.write('received upload:\n\n');
            // response.end(util.inspect({fields:fields,files:files}));
            if (!files.touxiang){
                response.end("请上传东西啊")
                return
            }
            if (!files.touxiang.name || !files.touxiang){
                response.end("请上传东西啊")
                return
            }
            var extname = path.extname(files.touxiang.name)
            fs.rename(files.touxiang.path,files.touxiang.path+extname,function () {
                response.end("上传成功！")
            })

        })
        return;
    }
    serve(request,response,finalhandler(request,response))
})
server.listen(3000,"127.0.0.1")
console.log("服务器已启动！")


