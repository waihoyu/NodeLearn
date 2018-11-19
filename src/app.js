

var express = require("express")

var  app = express()


app.get("/",function (req,res) {
    res.send("adfadsf")
})

//将public文件夹静态化出来

app.use(express.static("public"))

app.listen(3000)


