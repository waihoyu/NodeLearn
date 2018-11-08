
var  http = require("http")
var fs = require("fs")
var url = require("url")
var path = require("path")
var querystring = require("querystring")


var mime = {
    ".jpg":"image/jpg",
    ".jpeg":"image/jpeg",
    ".gif":"image/gif",
    ".png":"image/png",
    ".html" : "text/html;charset=UTF-8",
    ".css":"text/css",
    ".js":"application/x-javascript"
}

http.createServer(function (request,response) {

    var pathname = url.parse(request.url).pathname;
    var extname = path.extname(pathname)
    console.log(extname);
    fs.readFile("./myweb/"+ pathname,function (err, data) {
        if (mime.hasOwnProperty(extname)){
            response.setHeader("content-type",mime[extname])
        }
        response.end(data)
        return
    })

}).listen(3000,"127.0.0.1")

console.log("server start at 3000 port")
