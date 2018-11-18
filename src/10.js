

//call 和apply 是用来执行上下文运行函数的

// 我们写了一个函数，比如


function fun() {
  this.a = 100;
}
// 在dom 编程，此时函数的上下文就是window对象


function fun2(m,n) {
    this.a = m + n;
}

var xiaoming = {
    a:8,
    b:9
}
var xiaoming2 = {
    a:8,
    b:9
}
var xiaohong ={
    a:10,
    b:3
}

fun.call(xiaoming)
fun2.apply(xiaoming2,[2,3])


console.log(xiaoming);
console.log(xiaoming2);
