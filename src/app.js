

var express = require("express")
var  app = express()
var formidable = require("formidable")
var fs = require("fs")

app.get("/",function (req,res) {

    res.send("adfadsf")
})

//将public文件夹静态化出来



app.post("/baocun",function (req,res) {
    var form = new formidable.IncomingForm()
    form.parse(req, function (err,fields,files) {
        fs.appendFile("./public/dingcan.txt",JSON.stringify(fields),function (err) {
            if (err){
                res.send("-1")
            }else
            {
                res.send("1")
            }

        })
        console.log(fields);
    })
    // console.log("有人提交表单了");
    // res.send("1")

})
app.use(express.static("public"))
app.listen(3000)


