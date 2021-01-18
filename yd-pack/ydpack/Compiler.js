const {SyncHook} =  require('tapable')
const Compilation = require("./Compilation")
class Compiler{
    constructor(options){
        this.options = options;
        this.modules = [];
        this.hooks = {
            run: new SyncHook(["compilation"])
        }
    }
    run(){
        const compilation = this.newCompilation()
        // 合适的时机  调度初始后钩子执行
        this.hooks.run.call(compilation)
        // 找到entry 按照入口文件开始分析
        const entryModule = compilation.buildModule(this.options.entry,true)
        this.modules.push(entryModule);
        console.log("🍌",this.modules)
        this.modules.map((_module) =>{

            _module.dependencies.map((dependencie) =>{
                // console.log(dependencie,"dependencie")
                this.modules.push(compilation.buildModule(dependencie,false))
            })
        })
        // console.log(this.modules,"this.modules")
        compilation.emitFiles()
    }
    newCompilation(){
        const compilation = this.createCompilation()
        return compilation;

    }
    createCompilation(){
        return new Compilation(this)
    }
}
module.exports =  Compiler