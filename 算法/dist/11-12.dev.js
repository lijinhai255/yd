"use strict";

var heightChecker = function heightChecker(heights) {
  var cont = 0;
  var copyArr = heights.concat();
  var newheights = copyArr.sort(function (a, b) {
    return a - b;
  });
  console.log(heights, newheights);

  for (var index = 0; index < heights.length; index++) {
    if (heights[index] !== newheights[index]) cont++;
  }

  return cont;
};

var heightChecker_1 = function heightChecker_1(heights) {
  // 创建一个桶，index对应0-100的数值，其值代表它出现的次数
  var bucket = new Array(101).fill(0); // 遍历heights，对heights中所有值进行计数
  // 例如heights为[1, 1, 4, 2, 1, 3]，即可计算出其中有3个1，1个2，1个3，1个4

  for (var i = 0; i < heights.length; i++) {
    bucket[heights[i]]++;
  } // 统计最终未正常排序的结果


  var count = 0; // 按顺序遍历桶，相当于按顺序遍历了排序好的heights

  for (var _i = 1, j = 0; _i < bucket.length; _i++) {
    // 每遍历到一个bucket[i]大于0，即为i还有数量，就将其值进行循环，
    while (bucket[_i] > 0) {
      // 如果此时heights[j]的值与i的值不同，则表示该值未正确排序，即count++
      if (heights[j] !== _i) {
        count++;
      } // 每次循环bucket[i]减1，表示i的数量减少1个


      bucket[_i]--; // 每次i减1，都将heights数组的index加1，即j++

      j++;
    }
  }

  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));