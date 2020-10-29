Object.prototype.a = 'a'; 
Function.prototype.a = 'a1'; 
function Person(){}; 
var yideng = new Person(); 
console.log(Person.a); //a1
console.log(yideng.a); //a 
console.log(1..a); //a
// console.log(1.a); 
console.log(yideng.__proto__.__proto__.constructor.constructor.constructor);
console.log(Object.prototype,"Object.prototype")
console.log(Function.prototype,"Object.prototype")