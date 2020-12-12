// 
var maxProfit = function(prices) {
    console.log(prices)
    let min = prices[0]
    let result = 0
    for (let i = 1; i < prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i]
        }
        // result = Math.max(result, prices[i] - min)
        if (result < prices[i] - min) {
            result = prices[i] - min
        }

    }
    return result

};
console.log(maxProfit([7, 6, 4, 3, 1]))