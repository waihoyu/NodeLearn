

var express = require("express");

var app = express()


app.set("view engine","ejs")

app.get("/",function (request,repose) {
    repose.send("我是首页")
})

app.get("/music",function (request,repose) {
    repose.send("音乐频道")
})



app.get("/news",function (request,repose) {
    repose.send("新闻频道")
})


app.get("/student",function (request,repose) {
    repose.send("学生频道")
})


app.listen(3000)
