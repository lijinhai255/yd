"use strict";

var countPrimes = function countPrimes(n) {
  var arr = new Array(n + 1);
  var count = 0;

  for (var i = 2; i < n; i++) {
    if (!arr[i]) {
      count++;

      for (var j = 2 * i; j < n; j += i) {
        // console.log("j:",j,"i:",i)
        arr[j] = true;
      }
    }
  }

  return count;
};

console.log(countPrimes(11));