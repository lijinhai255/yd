"use strict";

function toGetArr(arr, target) {
  var result = [];
  var slow = 0;
  var fast = 1;

  while (slow < arr.length) {
    if (arr[slow] + arr[fast] !== target) {
      if (fast > arr.length - 1) {
        slow++;
        fast = slow + 1;
      } else {
        fast++;
      }
    } else {
      result.push([slow, fast]);
      slow++;
      fast = slow + 1;
    }
  }

  return result;
}

console.log(toGetArr([2, 4, 5, 6, 7, 1, 8], 8));