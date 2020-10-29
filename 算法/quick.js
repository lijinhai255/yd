let arr = [8,3,5,1,9,6]
function quickSort(arr){
    // 终止条件
    if(arr.length<=1){
        return arr
    }
    let left = [];
    let right = [];
    let flag = arr.shift();
    console.log(flag)
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<flag){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
        
    }
    return quickSort(left).concat(flag,quickSort(right))

}
// 原地快排
function quickSort1(arr,low=0,high=arr.length-1){
  if(low>=high){
      return
  }
  let left = low ;
  let right = high;
  let flag = arr[left]
  while(left<right){
      // 从右边尝试找比flag 小的,  如果比flag大 ，right 左移
      if(left<right&&flag<=arr[right]){
          right --;
      }
      arr[left] = arr[right]
      if (left<right&&flag>=arr[left]) {
          left ++;
          
      }
      arr[right] = arr[left]
  }
  arr[left] = flag
  quickSort1(arr,low,left-1)
  quickSort1(arr,left+1,high)
  return arr


}
// console.log(quickSort(arr))
console.log(quickSort1(arr))