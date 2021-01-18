"use strict";

var twoSum = function twoSum(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var returnData = []; // for(var i = 0; i<nums.length;i++){
  //     console.log(i,nums[left],nums[right])
  //     if(nums[left]+nums[right]===target){
  //         returnData.push(nums[left])
  //         returnData.push(nums[right])
  //         return returnData
  //     }else if(nums[left]+nums[right]>target){
  //             // 缩小 和 右指针左移
  //             --right
  //     }else if(nums[left]+nums[right]<target){
  //         ++left
  //     }
  // }

  while (left < right) {
    if (nums[left] + nums[right] === target) {
      return [nums[left], nums[right]];
    } else if (nums[left] + nums[right] > target) {
      // 缩小 和 右指针左移
      --right;
    } else if (nums[left] + nums[right] < target) {
      ++left;
    }
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 22));