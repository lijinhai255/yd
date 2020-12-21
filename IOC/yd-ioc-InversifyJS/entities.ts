import {Student, Teacher, ClassRoom} from "./interfaces"

import { inject , injectable } from "inversify"
import 'reflect-metadata';
import TYPES from "./types"


@injectable()
class XiaoMing implements Student {
    public learn(){
        return `👊努力学习`
    }
}

@injectable()
class ZhiJia implements Teacher {
    public teaching(){
        return `教高级前端 🌶`
        
    }
}

@injectable()
class YD implements ClassRoom {
    private _xiaoming: Student;
    private _zhijia: Teacher;
    // 注入
    constructor(@inject(TYPES.Student) xiaoming, @inject(TYPES.Teacher) zhijia){
        this._xiaoming = xiaoming
        this._zhijia = zhijia

    }
    public studying(){
        return this._xiaoming.learn()+this._zhijia.teaching()
    }
}

export {
    XiaoMing,
    ZhiJia,
    YD
}