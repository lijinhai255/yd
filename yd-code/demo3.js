// function test() {
//   var a = 'yideng';
//   return function () {
//     debugger;
//     window.eval('console.log(a)');
//     // return a;
//   };
// }
// test()();

// function Test(name) {
//   this.name = name;
// }
// var yideng = new Test('京程一灯');
// var yideng2 = new Test('京程一灯');
// yideng = null;
// yideng2 = null;
var a = '我是外面';
function init() {
  var a = '我是里面';
  var fn = new Function(console.log(a));
  fn();
}

// new Function（字符串） == window.eval
// init();

// var outter = {
//   yd: '京程一灯',
// };
// with (outter) {
//   age = 18;
// }

// console.log(age);

// try {
// } catch {
//   throw new Error('');
// }

// 闭包在堆区
