var missingNumber = function (nums) {
    let i = nums.length - 1;
    let j = 0;
    let mid;
    while (j <= i) {
      mid = ~~((i + j) / 2);
      mid === nums[mid] ? (j = mid + 1) : (i = mid - 1);
    }
    return j; //最后j指向的索引就是结果
  };
  console.log(missingNumber([0,2,3]))
  