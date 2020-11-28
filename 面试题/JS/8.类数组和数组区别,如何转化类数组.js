/**
 * 数组
 * 定义：
 * 数组是一个特殊的对象，与对象的区别：
 * 1、当新的元素添加到列表中，自动更新length
 * 2、设置length属性，可以截断数组
 * 3、 从Array.prototype中继承方法
 * 4、属性Array
 * **/ 
/**
 * 类数组：
 * 是一个拥有length属性，并且它的属性为非负整数的普通对象
 * 类数组不能调用数组方法
 * **/
/**
 * 区别：
 * **/
let arrayLike = {
    length:10
}
console.log(arrayLike instanceof Array)//false
console.log(arrayLike.__proto__.constructor===Array)// false
console.log(arrayLike.toString())// [object Object]
console.log(arrayLike.valueOf())// {length:10}

let array = [];
console.log(array instanceof Array)// true
console.log(array.__proto__.constructor===Array)// true
console.log(array.toString());// ""
console.log(array.valueOf());//[]
/**
 * 3) 类数组转化为数组
 * 转化方法
 * 1、Array.from()
 * 2、Array.prototype.slice.call()
 * 3、Array.prototype.forEach()
 * **/