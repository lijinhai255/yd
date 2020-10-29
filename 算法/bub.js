let arr = [8,3,5,1,9,6]

function  bubleSotr(arr) {
    const len = arr.length;
    for (let o = len; o >=2; o--) {
        for(let i=0;i<=o-1;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            }
        }
    }
    return arr
    
}
console.log(bubleSotr(arr))