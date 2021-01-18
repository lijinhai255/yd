"use strict";

function binarySearch(arr, target) {
  var low = 0,
      high = arr.length - 1,
      mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (target === arr[mid]) {
      return "\u627E\u5230\u4E86".concat(target, ",\u5728\u7B2C").concat(mid + 1, "\u4E2A");
    }

    if (target > arr[mid]) {
      low = mid + 1;
    } else if (target < arr[mid]) {
      high = mid - 1;
    }
  }

  return -1;
}

function binarySearch1(arr, target) {
  var low = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var high = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arr.length - 1;
  var n = Math.floor((low + high) / 2);
  var cur = arr[n];

  if (cur === target) {
    return "\u627E\u5230\u4E86".concat(target, ",\u5728\u7B2C").concat(n + 1, "\u4E2A");
  } else if (cur > target) {
    return binarySearch1(arr, target, low, n - 1);
  } else if (cur < target) {
    return binarySearch1(arr, target, n + 1, high);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 7, 9, 11, 14, 16, 17, 22, 33, 55, 65], 4));
console.log(binarySearch1([1, 2, 3, 4, 5, 7, 9, 11, 14, 16, 17, 22, 33, 55, 65], 4));