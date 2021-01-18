"use strict";

var map = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var convertToTitle = function convertToTitle(n) {
  var arr = [];
  var result = "";

  if (n < 26) {
    return map[n - 1];
  }

  if (n % 26 === 0) {
    var count = n / 26;
    console.log(count, "121"); // return 

    while (count > 0) {
      arr.push(26);
      count--;
    }
  } else {
    arr = "".concat(Math.floor(n / 26)).split("").concat(n % 26);
  }

  arr.map(function (num) {
    result += map[+num - 1];
  });
  return result;
};

console.log(convertToTitle(104));