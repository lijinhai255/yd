import { IApi } from '../interface/IApi';
import { IData } from '../interface/IData';
import {provide} from "inversify-binding-decorators"
import TAGS from "../constant/tags"

@provide(TAGS.IndexServices)
class Indexervices implements IApi {
    
    getInfo(){
        return new Promise<IData>((resolve)=>{
            resolve({
                item:"后台数据"
            })
        })
    }
}

export default Indexervices