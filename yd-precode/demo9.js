// constructor(color) {
//     this.color = color;
//   }
// class Car {
//   static yideng = '京程一灯';
// }

// class BMW extends Car {}
// console.log(BMW.yideng);
'use strict';
function Car(color) {
  this.color = color;
}
Car.myName = '京程一灯🏮';
Car.prototype.x = function () {
  console.log('父类方法');
};

function BMW(color) {
  Car.call(this, color);
}
// BMW.prototype = new Car();
// BMW.prototype = Car.prototype;
// var __proto = Object.create(Car.prototype);
// __proto.constructor = BMW;
// BMW.prototype = __proto;
BMW.prototype = Object.create(Car.prototype, {
  constructor: {
    value: BMW,
    writeable: false,
  },
  xx: {
    value: function () {},
  },
});
// BMW.prototype.constructor = 123;
// BMW.prototype.xx = function () {};
//继承静态属性
var staticKeys = Object.entries(Car);
for (var i = 0; i < staticKeys.length; i++) {
  var key = staticKeys[i][0];
  var value = staticKeys[i][1];
  BMW[key] = value;
}
console.log(BMW.myName);
var bmw = new BMW('Red');
console.log(bmw);
