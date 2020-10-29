function isStraight(nums) {
    // 对数组进行排序
   let newNums =  nums.sort((a,b)=>a-b)
    console.log(nums,1)
    let a = 0;
    let b = 0;
    for (let i = 0; i < newNums.length; i++) {
        if(newNums[i]===0){
            // 排除  数组中大小王 
           a++
        }else{
            // 数组中没有大小王
            // 统计 数组所有相邻数的间隔
            if(newNums[i+1]-newNums[i]>1){
                b += newNums[i + 1] - newNums[i] - 1
                console.log(b)

            }else if(newNums[i+1]===newNums[i]){
            // 排除对子情况  
                return false
            }
        }
    }
    // a 的差值 最大是2  
    //b 2[ 0, 0, 4, 5, 8 ] 
    return a >= b ? true : false;
};
console.log(isStraight([0,0,8,4,5]))