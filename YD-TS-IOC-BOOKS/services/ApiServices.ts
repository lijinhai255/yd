import { IApi } from '../interface/IApi';
import { IData } from '../interface/IData';
class ApiServices implements IApi {
    
    getInfo(){
        return new Promise<IData>((resolve)=>{
            resolve({
                item:"后台数据"
            })
        })
    }
}

export default ApiServices