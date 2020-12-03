function factorial(n,total=1){
    if(n===1) return total;
    return factorial(n-1,n*total)
}

// 斐波那契数列

const Fibonacci = (n,pre=1,current=1)=>{
    if(n<=1) return current;
    return Fibonacci(n-1,pre,pre+current)

}
console.log(Fibonacci(50))