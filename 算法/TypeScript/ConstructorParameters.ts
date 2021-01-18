class User{
    constructor(name:string,age:number){}
    
}
// ConstructorParameters:类构造函数的参数类型的元祖

type TCtor = ConstructorParameters<typeof User>;

function init(...info:TCtor){
    const [name] = info;
    console.log('name',name);
}

init("京城一灯",20)