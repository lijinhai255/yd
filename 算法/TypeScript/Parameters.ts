type IFoo = (
    name:string,
    age:number
    )=>{
        name:string;
        age:number;
        gender:string;
    }
type IBar = Parameters<IFoo>;
