function multiply(num1: string, num2: string): string {
    const m:number=num1.length
    const n:number=num2.length
    const ans:number[]=[]
    for(let i=m-1;i>=0;i--){
        for(let j=n-1;j>=0;j--){
            const index1=i+j
            const index2=i+j+1
            const mul=+num1[i]* +num2[j]+(ans[index2]||0)
            ans[index1]=Math.floor(mul/10)+(ans[index1]||0)
            ans[index2]=mul%10
        }
    }
    const res:string=ans.join('')
    return +res===0?'0':res.replace(/^0+/,'')
};
