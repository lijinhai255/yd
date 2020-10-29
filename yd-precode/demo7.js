function test(m) {
  m = { v: 5 };
  //   m.v = 5;
}
var m = { k: 30 };
test(m);
alert(m.v);

// 按址传递（按引用传递） + 按值传递

// var a = '老袁';
// var b = a;

// b = '测试';
// console.log(a);

// var a = {
//   age: 30,
// };
// var b = a;
// // b.age = 40;
// b = {
//   age: 40,
// };
// console.log(a.age);
