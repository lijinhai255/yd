function Permutation(str){
  const result = [];
  if(str){
    queue = str.split('')
    console.log(queue,"queue-queue-queue")
    PermutationnnCore(queue,result)
  }
  result.sort()
  console.log(" result.sort()",result)
  return [...new Set(result)]
}
function PermutationnnCore(queue,result,temp="",current=""){
  console.log('queue1', queue,"queilength",queue.length,"result1",result,"temp1",temp,"current1",current)
  current +=temp;
  console.log("current-1",current)
  if(queue.length===0){
    result.push(current)
    console.log("resule--result",result)
    return ;
  }
  for(let i = 0; i<queue.length;i++){
    console.log("queue-queue",queue)
    temp = queue.shift();
    console.log("queue2",queue,"result2",result,"temp2",temp,"current2",current)
    PermutationnnCore(queue,result,temp,current);
    queue.push(temp)
  }
}
console.log(Permutation("abc"))