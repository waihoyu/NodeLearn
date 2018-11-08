
var http = require("http")
var fs = require("fs")
var url = require("url")

http.createServer((request,response)=>{
    var urljson = url.parse(request.url)
    console.log(urljson)
    response.end("")
}).listen(3000,"127.0.0.1")
console.log("server start at 3000 port")
