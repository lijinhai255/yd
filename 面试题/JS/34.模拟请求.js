let debounce = function(func,delay=100,immediate=false){
    let timeoutId,last,context,args,result
    function later () {
        const interval = Date.now() - last;
        if(interval<delay&&interval>=0){
            timeoutId = setTimeout(later,delay-interval)
        }else{
            timeoutId = null
            if(!immediate){
                result = func.apply(context,args)
                context = args = null
            }
        }
    }
    return function(){
        context = this;
        args = arguments;
        last = Date.now();
        if(immediate&&!timeoutId){
            result = func.apply(context,args)
            context = args = null
        }
        if(!timeoutId){
            timeoutId = setTimeout(later,delay)

        }
       return result 
        
    }  
}
let flag = false;
let xhr = null;

let request = (i)=>{
    if(flag){
        clearTimeout(xhr)
        console.log(`取消请求第${i-1}次请求`)
    }
    flag = true
    console.log(`开始第${i}次请求`)
    xhr = setTimeout(()=>{
        console.log(`请求${i}相应成功`)
        flag = false
    },Math.random()*200)
}
let fetchData = debounce(request,50)
let count = 1; // 模拟连续触发请求
let getData = ()=>{
    setTimeout(()=>{
        fetchData(count)
        count ++
        if(count<11){
            getData()
        }
    },Math.random()*200)
}
getData()