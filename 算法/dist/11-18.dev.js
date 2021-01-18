"use strict";

var removeDuplicates = function removeDuplicates(nums) {
  var count = 0;
  var n = nums.length;

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[i - count] = nums[i];
    } else {
      count++;
    }
  }

  return n - count;
};

var fractionToDecimal = function fractionToDecimal(arr, res) {
  console.log(arr, res);
  var resStr = "".concat(res).slice(2);
  var resArr = [];
  console.log(resStr, "resStr");

  for (var i = 1; i < resStr.length; i++) {
    var el = resStr[0];

    if (el === resStr[i]) {}
  }

  console.log(Array.from(new Set(resArr)));
};

console.log(removeDuplicates([1, 1, 2]));
console.log(fractionToDecimal([1, 243], 1 / 243));