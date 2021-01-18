"use strict";

// var rotate = function(nums, k) {
//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop())
//     }
//     return nums
// };
var rotate = function rotate(nums, k) {
  var l = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nums.length;

  // 数组平移
  for (var i = nums.length; i--;) {
    nums[i + k] = nums[i];
  }

  console.log(nums, 12);

  for (var i = k; i--;) {
    nums[i] = nums[nums.length - k + i];
  }

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.reduce = function (fn) {
  var result = this[this.length - 1];

  for (var i = this.length - 2; i >= 0; i--) {
    result = fn(result, this[i], i, this);
  } // 返回结果


  return result;
};

var result = arr.reduce(function (pre, value, index, arr) {
  return pre * value;
}); // console.log(result)