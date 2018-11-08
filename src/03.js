
var http = require("http")

var server = http.createServer(function (request,response) {
    if (request.url == "/news"){
        response.setHeader("Content-Type","text/html;charset=UTF-8");
        response.end("News ");
    }
    else
    {
        response.setHeader("Content-Type","text/html;charset=UTF-8");
        response.end("Hello ");
    }
});
server.listen(3000,"127.0.0.1");

// reg.exec()

