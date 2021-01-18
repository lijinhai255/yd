"use strict";

// 
var maxProfit = function maxProfit(prices) {
  console.log(prices);
  var min = prices[0];
  var result = 0;

  for (var i = 1; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } // result = Math.max(result, prices[i] - min)


    if (result < prices[i] - min) {
      result = prices[i] - min;
    }
  }

  return result;
};

console.log(maxProfit([7, 6, 4, 3, 1]));