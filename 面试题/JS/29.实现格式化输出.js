function formatNumber(num){
    let arr = [],
        str = num+"",
        count = str.length;

    while(count>=3){
        // 将字符串3个一组存入数组
        arr.unshift(str.slice(count-3,count))
        count -= 3
    }  
    // 如果不是3的倍数 就另外追加到数组
    str.length%3&&arr.unshift(str.slice(0,str.length%3))
    console.log(arr,"arr")
    return arr.toString()  

}
// 进阶版
function formatNumber1(num){
    return num.toString().split("").reverse().reduce((prev,next,index,)=>{
        console.log(prev,next,index)
        return ((index%3)?next:(next+","))+prev
    })

}
// 正则
function formatNumber2(num){
    /**
     * ① /\B(?=(\d{3})+(?!\d))/g: 正则匹配费单次边界\B,即除了1之前的位置,其他字符之间的边界，
     * 后边必须跟着3N个数字知道字符串末尾
     * ② (\d{3}) 必须是一个或者多个3个连续数字
     * ③ (?!\d)) 第二步三个数字不允许后面跟着数字
     * **/ 
    return (num+"").replace(/\B(?=(\d{3})+(?!\d))/g,",")

}

/**
 * toLocaleString
 * **/
function formatNumber3(num){
    return num.toLocaleString('en-US')
}
/**
 * Intl 对象
 * Collator
 * NumberFormat
 * DateTimeFormat
 * **/
function formatNumber4(num){
    return new Intl.NumberFormat().format(num)
}


console.log(formatNumber4(1234567890))