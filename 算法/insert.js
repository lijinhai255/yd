let arr = [9,12,1,4,5,6,7,3,6]
function insertSort(arr){
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j>0; j--) {
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            }else{
                break
            }
        }
        
    }
    return arr;
}

console.log(insertSort(arr))



var CArry = function(){
    this.dataStore = [1,8,3,2,4,5,7,8,6,]
    this.insertSort = insertStore
}
function insertStore(){
    var temp,inner;
    for (let outer = 0; outer < this.dataStore.length; ++outer) {
        temp = this.dataStore[outer]
        inner = outer
        while(inner>0&&(this.dataStore[inner-1]>=temp)){
            this.dataStore[inner] = this.dataStore[inner-1]
            inner --

        }
        this.dataStore[inner] = temp
    }
}
var mynums = new CArry()
mynums.insertSort()
console.log(mynums.dataStore)
