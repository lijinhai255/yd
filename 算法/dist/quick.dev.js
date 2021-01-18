"use strict";

var arr = [8, 3, 5, 1, 9, 6];

function quickSort(arr) {
  // 终止条件
  if (arr.length <= 1) {
    return arr;
  }

  var left = [];
  var right = [];
  var flag = arr.shift();
  console.log(flag);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < flag) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(flag, quickSort(right));
} // 原地快排


function quickSort1(arr) {
  var low = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var high = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length - 1;

  if (low >= high) {
    return;
  }

  var left = low;
  var right = high;
  var flag = arr[left];

  while (left < right) {
    // 从右边尝试找比flag 小的,  如果比flag大 ，right 左移
    if (left < right && flag <= arr[right]) {
      right--;
    }

    arr[left] = arr[right];

    if (left < right && flag >= arr[left]) {
      left++;
    }

    arr[right] = arr[left];
  }

  arr[left] = flag;
  quickSort1(arr, low, left - 1);
  quickSort1(arr, left + 1, high);
  return arr;
} // console.log(quickSort(arr))


console.log(quickSort1(arr));