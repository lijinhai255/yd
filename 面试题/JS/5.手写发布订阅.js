var Observer = (function(){
    let msg = {};
    return {
        on(type,fn){
            if(msg[type]){
                msg[type].push(fn)
            }else{
                msg[type] = [fn]
            }
        },
        trigger(type,...args){
            msg[type]&&msg[type].forEach(fn => fn(...args));
        }
    }
})()