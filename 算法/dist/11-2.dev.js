"use strict";

var exchange = function exchange(nums) {
  var oddArr = [];
  var evenArr = []; //判断奇数 偶数 然后合并

  for (var index = 0; index < nums.length; index++) {
    if (nums[index] % 2 === 1) {
      oddArr.push(nums[index]);
    } else {
      evenArr.push(nums[index]);
    }
  }

  return oddArr.concat(evenArr);
};

console.log(exchange([2, 16, 3, 5, 13, 1, 16, 1, 12, 18, 11, 8, 11, 11, 5, 1])); // var exchange = function (nums) {
//     let i = 0;
//     let j = nums.length - 1
//     while (i < j) {
//         // i 遇到了偶数  或者 j 遇到了奇数 
//         if (nums[i] % 2 === 0 || nums[j] % 2 === 1) { // i
//             [nums[i],nums[j]]= [nums[j],nums[i]]
//         }
//         if (nums[i] % 2 === 1) {
//             ++i
//         }
//         if (nums[j] % 2 === 0) {
//             --j
//         }
//     }
// return nums
// }