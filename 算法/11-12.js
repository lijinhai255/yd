var heightChecker = function(heights) {
    let cont = 0;
    let copyArr = heights.concat()
    let newheights = copyArr.sort((a,b)=>a-b)
    console.log(heights,newheights)
    for (let index = 0; index < heights.length; index++) {
       if( heights[index]!==newheights[index]) cont++
    }
    return cont

};

var heightChecker_1 = function (heights) {
    // 创建一个桶，index对应0-100的数值，其值代表它出现的次数
    let bucket = new Array(101).fill(0);
  
    // 遍历heights，对heights中所有值进行计数
    // 例如heights为[1, 1, 4, 2, 1, 3]，即可计算出其中有3个1，1个2，1个3，1个4
    for (let i = 0; i < heights.length; i++) {
      bucket[heights[i]]++;
    }
  
    // 统计最终未正常排序的结果
    let count = 0;
  
    // 按顺序遍历桶，相当于按顺序遍历了排序好的heights
    for (let i = 1, j = 0; i < bucket.length; i++) {
      // 每遍历到一个bucket[i]大于0，即为i还有数量，就将其值进行循环，
      while (bucket[i] > 0) {
        // 如果此时heights[j]的值与i的值不同，则表示该值未正确排序，即count++
        if (heights[j] !== i) {
          count++;
        }
        // 每次循环bucket[i]减1，表示i的数量减少1个
        bucket[i]--;
        // 每次i减1，都将heights数组的index加1，即j++
        j++;
      }
    }
  
    return count;
  };


console.log(heightChecker([1,1,4,2,1,3]))