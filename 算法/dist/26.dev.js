"use strict";

var minNumber = function minNumber(nums) {
  nums.sort(function (a, b) {
    var s1 = a + "" + b;
    console.log(s1, "s1");
    var s2 = b + "" + a;
    console.log(s2, "s2");
    if (s1 < s2) return -1;
    if (s1 > s2) return 1;
    return 0;
  });
  return nums.join("");
};

minNumber([10, 2, 3]);