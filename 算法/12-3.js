var removeElement = function(nums, val) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!==val){
            // nums[i] = nums[i+1]
            nums[j++] = nums[i]
        }
    }
    nums.length = j
    return nums
};

function formatNumber(num){
    var [formatnum,unformatnum] = `${num}`.split(".")
    let newStr = new Intl.NumberFormat().format(formatnum)
    console.log(`${newStr}.${unformatnum}`)
}
// console.log(removeElement([0,1,2,2,3,0,4,2],2))
console.log(formatNumber(12345678.002345))