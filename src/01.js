var fs = require("fs");

fs.readFile("./test.txt",function (err,data) {
    console.log(data.toString())
});

// var fs1 = require
var sum = 0

for (var i = 0; i<= 100; i++){
    sum += 1;
}

console.log(sum)
