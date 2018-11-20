

var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/student'

MongoClient.connect(url, function (err, db) {
    if (err){
        console.log("Connected failed to server")
        return
    }
    console.log("Connected successfully to server")
    // db.close()
    const mydb = db.db('student');
    mydb.collection("1120").insertOne({"xinming":"刘备","nianling":12,"xingbie":"男"},function (err,r) {
        if (err){
            console.log("出错了")
            return
        }
        console.log("成功插入")
        db.close()
    })
})
