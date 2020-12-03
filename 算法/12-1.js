var isHappy = function(n){
    console.log(n)
    // map 存储计算过的数字
    var store = {};
    // 如果store中有这个数字 或者数字邓毅1 停止循环
    while(!store[n]&&n!==1){
        store[n] = n;
        console.log("n::",n.toString().split(""))
        n.toString().split("").forEach((v,i) => {
            if(i==0) n = 0;
            n += v*v
        });
        n = parseInt(n)
    }

    return n ===1 
}
console.log(isHappy(4))

// 
class EventEmitter{
    constructor(){
        this.eventQueue = {}
    }
    on(eventName,callback){
        if(this.eventQueue[eventName]){
            this.eventQueue[eventName].push(callback)
        }else{
            this.eventQueue[eventName] = [callback]
        }

    }
    off(eventName){
        if(this.eventQueue[eventName]){
            this.eventQueue[eventName] = null;
        }else{
            return 
        }

    }
    once(eventName,callback){
        let fn = ()=>{
            callback()
            this.off(eventName)
        }
        if(this.eventQueue[eventName]){
            this.eventQueue[eventName].push(fn)
        }else{
            this.eventQueue[eventName] = [fn]
        }
    }
    trigger(eventName){
        if(this.eventQueue[eventName]){
            this.eventQueue[eventName]&&this.eventQueue[eventName].forEach((item)=>item())
        }else{
            console.log(`${eventName} is not defined` )
        }
    }
}

let eventEmitter =  new EventEmitter()
eventEmitter.on("setName",()=>{console.log("setName")})
eventEmitter.once("once",()=>{console.log("once")})
eventEmitter.trigger("setName")
eventEmitter.trigger("once")
eventEmitter.trigger("setName")
eventEmitter.trigger("once")
eventEmitter.off("setName")
eventEmitter.trigger("setName")

