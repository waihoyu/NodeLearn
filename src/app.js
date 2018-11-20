

var express = require("express")
var  app = express()
var mainctril = require("./controllers/mainctrl")

// app.get("/",function (req,res) {
// //     res.send("adfadsf")
// // })

//将public文件夹静态化出来
app.set("view enginie","ejs")

app.get("/",mainctril.showIndex)

app.get("/dingdan/:shoujihao",mainctril.showOnedingdan)

app.post("/baocun",mainctril.baocun)

    // console.log("有人提交表单了");
    // res.send("1")
app.get("/showAlldingcan",mainctril.showAlldingcan)

app.use(express.static("public"))

app.listen(3000)

console.log("服务已经启动")
