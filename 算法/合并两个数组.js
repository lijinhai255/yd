
let nums1 = [3, 1, 2, 3, 4, 5, 6, 5];
let nums2 = [9, 6, 6, 5, 7, 5, 7]
let mergeToOne = (nums1, nums2) => {
    const nums = [...nums1, ...nums2];
    let res = [];
    const map = new Map();
    const filterFunc = (arr, n) => arr.filter(it => it === n);
    for (let i = 0; i < nums.length; i++) {
        const it = nums[i];
        if ((nums1.includes(it) && !nums2.includes(it)) || (!nums1.includes(it) && nums2.includes(it))) {
            res.push(it)
        } else {
            if (map.get(it)) continue;
            const cur1 = filterFunc(nums1, it);
            const cur2 = filterFunc(nums2, it);
            res = res.concat(cur1.length > cur2.length ? cur1 : cur2);
            map.set(it, true)
        }
    }
    return res.sort((a, b) => a - b)
}
const res = mergeToOne(nums1, nums2)
console.log(res)
