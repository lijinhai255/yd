const climbStairs = function(n){
    var dp = new Array();
    dp[0] = 1;
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-2]+dp[i-1]
    }
    console.log(dp)
    return dp[n]
}
console.log(climbStairs(4))