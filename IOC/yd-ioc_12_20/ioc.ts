class CreateIoc{
    public container:Map<Symbol,{callback:Function}>;
    constructor(){
        this.container = new Map;
    }
    get(nameSpace:Symbol){
        let item = this.container.get(nameSpace);
        if(item){
            return item.callback();
        }else{
           throw new Error("当前的nameSpace不存在")
        }

    }
    bind(key:Symbol,callback:Function){
        this.container.set(key,{
            callback
        })

    }
}

export default CreateIoc