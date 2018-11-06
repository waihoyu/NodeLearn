var  http =  require("http");

var server = http.createServer(function (req,res) {
    res.end("<h1>好高兴</h1>")
});

server.listen("127.0.0.1",3000);
