var findContinuousSequence = function(target) {
    var res = [];
    var left = 1, right = 2, sum = 3, tmp = [1,2];
    if (target === 3) { return [[1,2]] };
    while (right <= Math.ceil(target / 2)) {
        // console.log(tmp);
        if (sum === target) {
            res.push(tmp);
            left++;
            right = left + 1;
            sum = left + right;
            tmp = [left, right]
        } else if (sum < target) {
            right++;
            sum = sum + right;
            tmp.push(right);
        } else {
            sum = sum - left;
            tmp.shift();
            left++;
        }
    }
    return res;
};
console.log(findContinuousSequence(9))