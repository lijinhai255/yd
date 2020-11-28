function promiseAll(promises){
    return new Promise(function(resolve,reject){
        if(!Array.isArray(promises)){
            throw new TypeError("Argument must a  Array")
        }
        var resolveCounter = 0 ;
        var promiseNum = promises.length;
        var resolveResult = [];
        for (let i = 0; i < promiseNum; i++) {
            Promise.resolve(promises[i]).then(value=>{
                resolveCounter++
                resolveResult[i] =value
                if(resolveCounter===promiseNum){
                    return resolve(resolveResult)
                }

            },error=>{
                return reject(error)
            })
            
        }
    })
}
let p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(1)
    })
})
let p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(2)
    })
})
let p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(3)
    })
})
promiseAll([p1,p2,p3]).then(res=>{
    console.log(res)
})