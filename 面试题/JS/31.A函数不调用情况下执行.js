function A(){
    console.log("函数执行了")
}
/**
 * 装饰器写法
 * ***/
const myDecorator = (fn,execute,obj=window)=>{
    let old = obj[fn];
    obj[fn] = ()=>{
        return execute(old.bind(obj))
    }

}
myDecorator("A",(fn)=>{
    fn()
    console.log("hellow world")
})
// A()

// 添加原型的方法
Function.prototype.before = function(beforeFn){
    let _selt = this;
    return function(){
        beforeFn.apply(_selt,arguments)
        console.log(_selt,arguments,"1")

        return _selt.apply(this,arguments)
    }
}
Function.prototype.after = function(afterFn){
    var _selt = this;
    return function(){
        var fn = _selt.apply(this,arguments)
        console.log(fn,arguments,"2")
        afterFn.apply(_selt,arguments)
        return fn 
    }
}
A = A.before(function(){
    console.log("前置函数")
}).after(function(){
    console.log("后置函数")
})
// A()

/**
 * 粗暴直接方法
 * **/ 
const nativeA= A;
A = function(){
    console.log("hellow world")
    nativeA()
}
A()
