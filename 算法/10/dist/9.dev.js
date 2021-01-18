"use strict";

/**
 * 排序数组查找
 * 统计一个数字在排好的数组中出现的次数
 * 提示： 有多种解法  那种解法更好
 * ****/
// 遍历数组
function searNum(arr, target) {
  var start = 0;
  var end = arr.length;
  var num = 0;

  for (start; start < end; start++) {
    console.log(start, arr[start]);

    if (target === arr[start]) {
      num++;
    }
  }

  return num;
} // console.log(searNum([1,2,3,4,5,5,6,6,7,8],1))
// 二分查找 找到目标值  向前向后遍历  找到所有的书


function searchNumTwo(arr, target) {
  // 找到目标值
  // let startIndex = arr.indexOf(target);
  var startIndex = Math.floor(arr.length / 2);
  binarySearch(arr, target, 0, arr.length, 0); // if(target>=arr[startIndex]){
  //     for(startIndex;startIndex<arr.length;startIndex++){
  //         if(target===arr[startIndex]){
  //             num++
  //           }
  //     }
  // }else{
  //     for(startIndex;startIndex>0;startIndex--){
  //         if(target===arr[startIndex]){
  //             num++
  //           }
  //     }
  // }
  // return num
} // 定义一个方法 用于二分法查找

/**
 * @param {type} target I am argument target. 
 * @param {type} arr[startIndex] I am argument arr[startIndex]. 
 * @param {type} startIndex I am argument startIndex. 
 */


function binarySearch(arr, target, start, end, num) {
  console.log(num);
  if (start > end) return -1;
  var mid = Math.floor((end + start) / 2); // console.log(mid)

  if (target === arr[mid]) {
    ++num;
    console.log(num);
    return num;
  } else if (target < arr[mid]) {
    // 向右查找
    return binarySearch(arr, target, start, mid - 1, num);
  } else {
    // 向左查找
    return binarySearch(arr, target, mid + 1, end, num);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8], 5, 0, 13)); // 二分查找 分别找出 目标值的出现位置和最后位置
// function searchNumTree(arr,target){
//     // 找到目标值
//     let startIndex = arr.indexOf(target);
//     let lastIndex = arr.lastIndexOf(target)
//     if(startIndex&&lastIndex){
//         return lastIndex-startIndex
//     }else{
//         return 0
//     }
// } 
// console.log(searchNumTree([1,2,3,4,5,5,5,6,6,7,8],0))