var removeDuplicates = function(nums) {
    let count=0;
    let n = nums.length
    for (let i = 1; i < nums.length; i++) {
        if(nums[i]!==nums[i-1]){
            nums[i-count] = nums[i]
        }else{
            count++
        }
    }
    return n - count
};
var fractionToDecimal = function(arr,res){
    console.log(arr,res)
    let resStr = `${res}`.slice(2)
    let resArr = []
    console.log(resStr,"resStr")
    for (let i = 1; i < resStr.length; i++) {
        const el = resStr[0];
        if(el ===resStr[i]){

        }
    }
    console.log(Array.from(new Set(resArr)))

}
console.log(removeDuplicates([1,1,2]))
console.log(fractionToDecimal([1,243],1/243))