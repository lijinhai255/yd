/**
 * 在js中经常出现嵌套调用的这种情况
 * 
*/
function get(source,path,defaultValue=undefined){
    // path 存在的情况 
    // a[3].b
    //a.3.b
    //[a,3,b]
    const paths = path.replace(/\[(\d+)\]/g,".$1").split(".")
    console.log(paths,"path")
    let result = source;
    for (const p of paths) {
        console.log(result,1)
        result = Object(result)[p]
        console.log(result,2)
        if(result==undefined){
            return defaultValue
        }
    }
    return result
}
// console.log(get({a:{b:{c:14}}},"a.b.c",3))
// console.log(get({a:undefined},"a",3))
// console.log(get({a:[{b:1}]},"a[0].b",3))

/**
 * 不实现 数组情况
 * 
*/
const _get = (object,keys,val)=>{
    return keys.split(/\./).reduce((o,j)=> ((o||{})[j]),object)||val
}
console.log(_get({a:{b:{c:14}}},"a.b.c",3))
console.log(_get({a:null},"a.b.c",3))
