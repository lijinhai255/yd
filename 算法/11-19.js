
const intersection = (nums1, nums2) => {
    let map = new Map()
    let result = []
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i],true)
    }
    console.log(map)
    for (let k = 0; k < nums2.length; k++) {
        if(map.get(nums2[k])){
            map.set(nums2[k],false)
            result.push(nums2[k])
        }
    }
    return result
  };
  console.log(intersection([1,2,2,1],[2,2]))