function People(name, sex, age) {
    this.name =name;
    this.sex = sex;
    this.age = age;
}

People.prototype.sayHello = function () {
    console.log("你好我是" + this.name + ", 我今年" + this.age)
}


module.exports = People; //这个通常暴露构造函数
exports  // 这个通常暴露多个
