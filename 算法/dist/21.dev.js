"use strict";

var missingNumber = function missingNumber(nums) {
  var i = nums.length - 1;
  var j = 0;
  var mid;

  while (j <= i) {
    mid = ~~((i + j) / 2);
    mid === nums[mid] ? j = mid + 1 : i = mid - 1;
  }

  return j; //最后j指向的索引就是结果
};

console.log(missingNumber([0, 2, 3]));