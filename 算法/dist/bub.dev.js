"use strict";

var arr = [8, 3, 5, 1, 9, 6];

function bubleSotr(arr) {
  var len = arr.length;

  for (var o = len; o >= 2; o--) {
    for (var i = 0; i <= o - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var _ref = [arr[i + 1], arr[i]];
        arr[i] = _ref[0];
        arr[i + 1] = _ref[1];
      }
    }
  }

  return arr;
}

console.log(bubleSotr(arr));