var merge = function (A, m, B, n) {
    let i = m - 1;
    let j = n - 1;
    let index = n + m - 1;
    while (i >= 0 && j >= 0) {
        // console.log(index,A[i],B[j],i,j,A)

        if (A[i] >= B[j]) {
            A[index--] = A[i--]

        } else {
            A[index--] = B[j--]
        }
    }
    while (j >= 0) {
        A[index--] = B[j--]
    }
    while (i >= 0) {
        A[index--] = A[i--]
    }
    return A
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))