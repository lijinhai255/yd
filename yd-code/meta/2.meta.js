// var yideng = 1;

var yideng = {
  [Symbol.toPrimitive]: ((i) => () => ++i)(0),
};

if ((yideng == 1) & (yideng == 2) & (yideng == 3)) {
  console.log('京程一灯');
}

var yideng = { a: 2, b: 3 };

Object.defineProperty(yideng, Symbol.iterator, {
  value: function () {
    var o = this;
    var idx = 0;
    var ks = Object.keys(o);
    return {
      next: function () {
        return {
          value: o[ks[idx++]],
          done: idx > ks.length,
        };
      },
    };
  },
});

// var it = yideng[Symbol.iterator]();
// console.log(it.next());
for (var v of yideng) {
  console.log(v);
}
