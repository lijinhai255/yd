console.log({}+[]); // [object Object]
console.log({}+[]) // [object Object]
console.log([]+{}) // [object Object]
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