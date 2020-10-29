function bar() {
    console.log(myName,this)
}
function foo() {
    var myName = "老袁"
    bar()
}
var myName = "京程⼀灯"
foo()