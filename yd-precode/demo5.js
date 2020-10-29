// 没有name的话 不赋值 找原型链
function C1(name) {
  if (name) this.name = name;
}
//不管name等于什么 这边都要赋值 undefined
function C2(name) {
  this.name = name;
}
function C3(name) {
  this.name = name || 'fe';
}
C1.prototype.name = 'yideng';
C2.prototype.name = 'lao';
C3.prototype.name = 'yuan';
console.log(new C1().name + new C2().name + new C3().name);
