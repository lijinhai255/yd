function culNum(arr){
    let map = new Map()
    let length = arr.length
    for (let index = 0; index < arr.length; index++){
        // 先从map中获取 当前的值 存在吗 
        if(map.has(arr[index])){
            let value = map.get(arr[index])
            map.set(arr[index],++value)

        }else{
            map.set(arr[index],0)
        }
        
    }
    console.log(map,121)
    // 遍历map
    for (let item of map) {
            console.log(item[0],item[1],item[1]>length/2,parseInt(length/2))
            if(item[1]>=parseInt(length/2)){
                return item[0]
            }
        }
}
let newMap = culNum([1,2,3,2,2,2,5,4,2])
console.log(newMap)
