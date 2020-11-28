//  函数柯里化
/**
 * 函数柯里化概念： 柯里化 是把接受多个参数函数 
 * 转变为接受一个单一参数的函数，
 * 并且返回接受余下的参数并返回结果的新函数技术
 * **/

//  function add (a){
//      return function(b){
//          return function(c){
//              return a+b+c
//          }
//      }
//  }

 // 参数长度固定
 const curry =(fn)=>(judge=(...args)=>args.length===fn.length?
 fn(...args):(...arg)=>judge(...args,...arg))
//  const add = (a,b,c)=>a+b+c
 const curryAdd = curry(add)
 console.log(curryAdd(1)(2)(3))
 console.log(curryAdd(1,2,3))

 // 参数不固定
 function add(...args){
     return args.reduce((a,b)=>a+b)
 }
 function currying(fn){
     let args = [];
     return function temp(...newArgs){
         if(newArgs.length){
             args = [
                 ...args,
                 ...newArgs
             ]
             return temp
         }else{
             let val = fn.apply(this,args)
             args = [];
             return val
         }
     }
 }
 let addCurry = currying(add)
 console.log(addCurry(1)(2)())