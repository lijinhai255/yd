// function yideng(){
//     console.log(1)
// }
// (function(){
//     if(false){
//         function yideng(){
//             console.log(2)
//         }
//     }
//     console.log(typeof yideng) // undefined
//     yideng() // is not a function
// })()
// // 直接在函数体内定义的函数声明 整个会提前，但是在块中定义的函数声明，智慧提升其声明的部分，不分配实际的内存空间。
// // 所以lijinhai 被提升的只是声明的函数名称变量，并未实际赋值
// //

// function yideng(){
//     console.log(1)
// }
// (
//     function(){
//         var yideng;
//         if(false){
//             function yideng(){
//                 console.log(2)
//             }
//         }
//         console.log(typeof yideng)
//         yideng()
//     }

// )()



// console.log(a)
// var a = 10 
// // 等价于
// var a;
// console.log(a)
// a = 10

console.log(a)
function test(){
    var a = 10
}

