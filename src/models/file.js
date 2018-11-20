
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
        var resultArray = []
        for (var i =0;i <filenameArray.length ;i++){
            resultArray.push(filenameArray[i].substr(0,filenameArray[i].length - 4))
        }
        callback(resultArray);
    })
}

// getAllFilesName()

exports.read = function (shoujihao,callback) {
    fs.readFile(baseurl + "/" + shoujihao + ".txt",function (err, data) {
        if (err){
            // throw new Error("文件读取错误")
            callback(-1)
            return
        }
        callback(data.toString())
    })
}

