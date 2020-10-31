console.log({}+[]); // [object Object]
{}+[]// 0
[]+{}// [object Object]
console.log({} + {}); // [object Object][object Object]
console.log([] == false) // true
console.log({} == false) // false
if([]){ 
 console.log([] == false) // true
} 
console.log(("b" + "a" + + "a" + "a").toLocaleLowerCase()) // banana
console.log(0 == "0" ) // true
console.log(Boolean("0") == Boolean(0) ) // false
console.log(NaN == 0); // false
console.log(NaN <= 0);  //false 
console.log(null <= 0); // true
console.log(1 + null); // 1
var obj = {}; 
var x = +obj.yideng?.name ?? '京程⼀灯'; 
console.log(x);//NaN 
var yideng = "京程⼀灯"; 
console.log(typeof yideng); // string
console.log(yideng instanceof String); // false

// 装箱
// 基本数据类型 转化为对应的引用类型
// 拆箱 等号 运算符 toPrimitive 
// 把引用类型 转化为对应基础类型
// var yidneg ="一层" ; String 对象

// var s1  = new String("一层")