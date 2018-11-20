
var fs = require("fs")

var baseurl = "./data"

exports.save = function (shoujihao,data,callback) {
    fs.writeFile(baseurl + "/" + shoujihao + ".txt",data, callback)
    // fs.appendFile(fileurl,data,callback)
}

exports.load = function () {

}

exports.getAllFilesName = function (callback) {
    fs.readdir(baseurl, function (err,filenameArray) {
        if (err){
            throw  new Error("读取文件清单错误")
            return
        }
        callback(filenameArray);
    })
}

// getAllFilesName()
