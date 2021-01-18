const findTwoSum = (arr, n) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])){
            return [map.get(arr[i]),arr[i]];
        }else{
            map.set(n - arr[i],arr[i])
        }

    }
    return []
}

console.log(findTwoSum([2,7,11,15],9))