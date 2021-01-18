let ydarr : number[] = [1,2,3,4,5,6];

let ro:ReadonlyArray<number> = ydarr
// 类型“readonly number[]”上不存在属性“push”。
ro.push(2)