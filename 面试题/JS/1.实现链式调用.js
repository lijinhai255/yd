// 链式调用的核心 就是在于调用方法 将自身实例返回
function  Class1(){
    console.log("初始化")
}
Class1.prototype.method = function(param){
    console.log(this)
    return this 
}
let cl = new Class1();
cl.method("第一次调用").method("第二次调用")


// 第二种
var obj = {
    a:function(){
        console.log("a")
        return this;
    },
    b:function(){
        console.log("b");
        return this
    }
}
obj.a().b()

// 第三种
class Math{
    constructor(value){
        this.hasInit = true;
        this.value = value;
        if(!value){
            this.value = 0;
            this.hasInit = false
        }
    }
    add(){
        let args = [...arguments]
        let initValue = this.hasInit?this.value:args.shift();
        const value = args.reduce((prev,curv)=>prev+curv,initValue)
        return new Math(value)
    }
    minus(){
        let args = [...arguments]
        let initValue = this.hasInit?this.value:args.shift();
        const value = args.reduce((prev,curv)=>prev-curv,initValue)
        return new Math(value)
    }
    mul(){
        let args = [...arguments]
        let initValue = this.hasInit?this.value:args.shift();
        const value = args.reduce((prev,curv)=>prev*curv,initValue)
        return new Math(value)

    }
    divide(){
        let args = [...arguments]
        let initValue = this.hasInit?this.value:args.shift();
        const value = args.reduce((prev,curv)=>prev/(+curv?curv:1),initValue)
        return new Math(value)

    }
}

let test = new Math()
const res = test.add(222,333,444).minus(333,222).mul(3,3).divide(2,3)
console.log(res.value)
Number.prototype.add = function(){
    let _this = this;
    _this = [...arguments].reduce((prev,curv)=>prev+curv,_this)
    return _this;
}
Number.prototype.minus = function(){
    let _this = this;
    _this = [...arguments].reduce((prev,curv)=>prev-curv,_this)
    return _this;
}
Number.prototype.mul = function(){
    let _this = this;
    _this = [...arguments].reduce((prev,curv)=>prev*curv,_this)
    return _this;
}
Number.prototype.divide = function(){
    let _this = this;
    _this = [...arguments].reduce((prev,curv)=>prev/(+curv?curv:1),_this)
    return _this;
}
let num = 0
let newNum = num.add(222,333,444).minus(333,222).mul(3,3).divide(2,3)
console.log(newNum,"newNum")