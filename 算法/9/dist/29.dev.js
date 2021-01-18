"use strict";

// 二位数组进行比较 判断是否含有该整数
// # 从左下角进行比较
//  如果 目标值大于坐标值 x坐标+1
//  目标值 小于坐标值 y坐标-1
//  arr[i][j]
//arr[[1,2,3],[4,5,6],[7,8,9]] 4
function compareArr(arr, targetNum) {
  // 第一步 从左下角进行比较
  var i = 0;
  var j = arr.length - 1;
  var arrNum = arr[i][j];
  isOld(targetNum, arrNum, i, j, arr);
}

function isOld(targetNum, arrNum, i, j, arr) {
  if (Number(targetNum) > Number(arrNum)) {
    //  如果 目标值大于坐标值 x坐标+1
    if (i < arr.length) {
      arrNum = arr[i++][j];
      isOld(targetNum, arrNum, i, j, arr);
    } else {
      console.log(false);
    }
  } else if (Number(targetNum) < Number(arrNum)) {
    //  目标值 小于坐标值 y坐标+1
    if (j < arr.length) {
      arrNum = arr[i][j++];
      isOld(targetNum, arrNum, i, j, arr);
    } else {
      console.log(false);
    }
  } else {
    console.log(true);
  }
} // compareArr([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 11)
// 使用二叉树


function compareArr_ts(arr, targetNum) {
  // 获取数组中中点值
  var i = Math.floor((arr.length - 1) / 2);
  var j = (arr[0].length - 1) / 2;
  console.log(i, arr[i], j, arr[i][j]);
  var midNum = arr[i][j];
  isOld_ts(midNum, targetNum, i, j, arr);
}

function isOld_ts(midNum, targetNum, i, j, arr) {
  // 从arr 右侧进行查找
  if (Number(midNum) < Number(targetNum)) {
    if (i < arr.length - 1) {
      i++; // 在进行一次二叉树 进行判断

      midNum = arr[i][j];
      isOld_ts(midNum, targetNum, i, j, arr);
    } else {
      console.log(false);
    }
  } else if (Number(midNum) > Number(targetNum)) {
    console.log(121); // 从arr 的左侧进行查找

    if (i > 0) {
      i--; // 在进行一次二叉树 进行判断

      midNum = arr[i][j];
      isOld_ts(midNum, targetNum, i, j, arr);
    } else {
      console.log(false);
    }
  } else {
    console.log(true);
  }
}

compareArr_ts([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]], 2);
var path = {
  rc: 2,
  beta: 1,
  alpha: 0
};

function compare(a, b) {
  // 思路 major minor 部分主要是数字的比较
  // 当两者相同时 进项path 比较
  var a_path = a.replace(/-(\w*)/g, function (match, $1) {
    return path[$1];
  });
  var b_path = b.replace(/-(\w*)/g, function (match, $1) {
    return path[$1];
  });

  if (a_path > b_path) {
    return 1;
  } else if (a_path < b_path) {
    return -1;
  } else {
    return 0;
  }
} // console.log(compare("1.3.0","1.2.4"))
// console.log(compare("1.3.0-alpha.1","1.2.4"))