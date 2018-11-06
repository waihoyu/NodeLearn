var  http =  require("http");

var server = http.createServer(function (req,res) {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"})
    res.end("<h1>好高兴H1</h1>")
});

server.listen(3000,"127.0.0.1");
