// function fn() {
//   console.log(this.length);
// }
// var yideng = {
//   length: 5,
//   method: function () {
//     'use strict';
//     fn();
//     arguments[0]();
//   },
// };
// const result = yideng.method.bind(null);
// result(fn, 1);

function bar() {
  console.log(myName);
}
function foo() {
  var myName = '老袁';
  bar();
}
var myName = '京程一灯';
foo();
