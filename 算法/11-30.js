var countPrimes = function(n) {
    let arr = new Array(n+1)
    let count = 0
    for (let i = 2; i < n; i++) {
        if(!arr[i]){
            count++
            for (let j = 2 * i; j < n; j += i) {
                // console.log("j:",j,"i:",i)
                arr[j] = true
              }
        }
    }
    return count;

};
console.log(countPrimes(11))