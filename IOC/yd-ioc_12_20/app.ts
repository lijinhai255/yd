import {parseScript} from "esprima";
import {Pattern} from "estree";
import  "reflect-metadata";
import CreateIoc from "./ioc"
const container =new CreateIoc();
interface IIndexService{
    log(str:string):void;
}

interface ITypes {
    [key:string]:Symbol;
}
const TYPES:ITypes = {
    indexService:Symbol.for("indexService")
}

class IndexService implements IIndexService{
    public log(str:string):void {
        console.log(str);
    }
}

container.bind(TYPES.indexService,()=>new IndexService())

// 定义方法 获取函数的参数
function getParames(fn:Function){
    const ast = parseScript(fn.toString());
    const node = ast.body[0];
    console.log(node,"node")
    
    let fnParams:Pattern[] = []
    // 如果node 节点 是函数声明
    if(node.type === "FunctionDeclaration"){
        fnParams = node.params
    }
    
    console.log(fnParams,"fnParams")

    const vaildParams:string[] = [];
    fnParams.forEach((obj)=>{
        if(obj.type === "Identifier"){
            vaildParams.push(obj.name)
        }
    })
    console.log(vaildParams,"vaildParams")
    return vaildParams


    // if(){

    // }

}

function hasKey<O extends Object>(obj:O,key:keyof any): key is keyof O{
    return obj.hasOwnProperty(key)
}

// constructor 是个泛型 继承自可以new 的一个类
function controller<T extends {new (...args:any[]):{}} >(constructor:T){
    // 
    console.log(constructor,"constructor")
    class Controller extends constructor{
        constructor(...args: any[]){
            super(args);
            console.log(args,"args")
            const  _params =  getParames(constructor)
            let identity:string ;
            for (identity of _params) {
                if (hasKey(this, identity)) {
                  // this[identity] = Reflect.getMetadata()
                  this[identity] = container.get(TYPES[identity]);
                } else {
                  throw new Error('挂载不正确');
                }
              }

        }
    }
    return Controller;

}

@controller

class IndexController {
    private indexService:IIndexService
    // 注入 
    constructor(indexService?:IIndexService){
        this.indexService = indexService!;
    }
    // constructor(){
    //     const indexService = new IndexService();
    //     this.indexService = indexService;

    // }
    infor(str:string):void {
        this.indexService.log(str)

    }

}
const index = new IndexController();
index.infor("lijinhai")