// this.a = 20;
// function go() {
//   console.log(this.a);
//   this.a = 30;
// }
// go.prototype.a = 40;
// var test = {
//   a: 50,
//   init: function (fn) {
//     fn();
//     console.log(this.a);
//     return fn;
//   },
// };
// console.log(new go().a);
// test.init(go);
// var p = test.init(go);
// p();
// this.a = 30;
// //var self/_this/that/me  = this;
var test = {
  a: 50,
  init() {
    console.log(this.a);
    // function go() {
    //   console.log(this.a);
    // }
    // go();
    // setTimeout(() => {
    //   console.log(this.a);
    // }, 10);
  },
};
// test.init.bind()
// test.init();

// function go() {
//   this.a = 30;
// }
// go.a = 50;
// go.prototype.a = 40;

// var s = new go();
// console.log(go.a);

var yideng = () => {
  this.a = '京程一灯';
};
var instance = new yideng();
console.log(instance.a);
