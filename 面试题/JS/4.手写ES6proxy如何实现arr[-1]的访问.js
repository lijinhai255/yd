const negativeArray = els =>{
    return new Proxy(els,{
        get:(target,propKey,receiver)=>{
            console.log(target,propKey,receiver)
           return  Reflect.get(target,
                +propKey<0?String(target.length+propKey):propKey,
                receiver)
        }
    })
}
console.log(negativeArray(["li","jin","hai"])[1])
