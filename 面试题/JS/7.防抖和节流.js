/**
 * 防抖：
 * 原理： 在事件被触发n秒后执行回调，如果在这n秒内又被触发，则重新计时
 * 
 * **/ 
/**
 * 简易版
 * **/
function debounce(func,wait){
    let timeout;
    return function(){
        const context = this;
        const args = arguments;
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context,args)
        },wait)
    }
}
/**
 * ⭕️立即执行
 * 有时希望立即执行函数，然后等到停止触发n秒后，才可以重新触发执行
 * **/
function debounce(func,wait,immediate){
    let timeout;
    return function(){
        const context = this;
        const args = arguments
        console.log('121', 121)
        if(timeout) clearTimeout(timeout)
        if(immediate){
            const calNow = !timeout;
            console.log(calNow,121)
            timeout = setTimeout(function(){
                timeout = null;
            },wait)
            if(calNow)func.apply(context,args)
        }else{
            timeout = setTimeout(function(){
                func.apply(context,args)
            },wait)

        }
    }

}
// debounce(function text(){console.log(2121)},10,true)
/**
 * 节流
 * 在单位事件内 只触发一次
 * 单位内多次触发  只执行一次
 * */
 /**
  * 时间戳
  * */
 function throttle(func,wait){
     let context,args;
     let previous = 0;
     return function(){
         let now = +new Date()
         context = this;
         args = arguments;
         if(now-previous>wait){
             func.apply(context,args)
             previous =now
         }
     }
 }
 /**
  * 定时器
  * **/
 function throttle (cb, t) {
    let isFirst = true;
    let execDate = +new Date();
    let timeoutId = null;
    return function () {
        if (isFirst) {
            cb();
            execDate = +new Date();
            isFirst = false;
        } else {
            const currentDate = +new Date();
            if (currentDate - execDate >= t) {
                cb();
                execDate = +new Date();
            } else {
                timeoutId && clearTimeout(timeoutId);
                const timeWait = t - ((+new Date()) - execDate);
                timeoutId = setTimeout(() => {
                    cb();
                    execDate = +new Date();
                }, timeWait)
            }
        }
    }
}