type T0 = ReturnType<()=>string>;
type T1 = ReturnType<(s:string)=>void>;
type T2 = ReturnType<(<T extends U, U extends number[]>()=>T)>

type T4 = ReturnType<(<T>() => T)>;  // {}                     
type T5 = ReturnType<any>;  // any
type T6 = ReturnType<never>;  // any
type T7 = ReturnType<string>;  // Error
type T8 = ReturnType<Function>;  // Error