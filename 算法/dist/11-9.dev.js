"use strict";

var integerBreak = function integerBreak(n) {
  var b = n % 3;
  var a = (n - b) / 3;
  console.log(a, b);
  if (a === 0) return 1; //a = 2

  if (a === 1 && b === 0) return 2; //a=3

  if (b === 0 && a > 1) {
    return Math.pow(3, a);
  } else if (b === 1) {
    return Math.pow(3, a - 1) * 4;
  } else if (b === 2) {
    return Math.pow(3, a) * 2;
  }
}; // 动态规划


var integerBreak_1 = function integerBreak_1(n) {
  var db = new Array(n + 1).fill(0);

  for (var i = 3; i <= n; i++) {
    for (var j = 1; j < i; j++) {
      db[i] = Math.max(db[i], j * (i - j), j * db[i - j]); // console.log(db[i],"db[i]",i-j,"i-j",j*(i-j),"j*(i-j)",j*db[i-j],"j*db[i-j",i,"i",j,"j",db,"dbß")
    }
  }

  return db[n];
};

console.log(integerBreak(4));