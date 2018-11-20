
    var formidable = require("formidable")
    var file = require("../models/file")

    exports.baocun = function (req,res) {
        var form = new formidable.IncomingForm()
        form.parse(req, function (err,fields,files) {
            var shoujihao = fields.shoujihao
            var cai = fields.cai
            file.save(shoujihao,cai,function (err) {
                if (err){
                    res.send("-1")
                }
                else {
                    res.send("1")
                }
            })
        })

        }


    exports.showAlldingcan = function (req,res) {
    file.getAllFilesName(function (arr) {
        console.log(arr)
        res.render("showAlldingcan.ejs",{
            "quanbushoujihao":arr
        })
    })


    }

    exports.showIndex = function (req,res) {
        res.render("index.ejs")
    }

    exports.showOnedingdan = function (req,res) {
        var shoujihao = req.params.shoujihao
        file.read(shoujihao,function (cai) {
            if (cai == -1){
                res.send("没有此用户")
                return
            }
            res.render("onedingdan.ejs",{
                "shoujihao":shoujihao,
                "cai":cai
            })
        })

    }


