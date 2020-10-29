function reverseArr(arr){
    // 找到拼合点
   let len = arr.length;
   if(len == 0) return 0;
   let low = 0;
   let high = len-1;
   console.log(low,high,len,arr.length)
   while(low<high){
       let mid = low +Math.floor((high-low)/2)
       if(arr[mid]>arr[high]){
           low = mid +1
       }else if(arr[mid]==arr[high]){
           high = high -1
       }else{
           high = mid
       }
   }
   return arr[low]
}
console.log(reverseArr([3,4,5,6,0,1,2]))