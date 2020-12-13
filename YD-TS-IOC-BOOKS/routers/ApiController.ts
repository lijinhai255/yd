import { GET, route } from 'awilix-koa';
import * as Router from 'koa-router';
@route("/api")
class ApiController{
    private apiService
    constructor({apiServices}){
        this.apiService = apiServices
    }
    @route("/list")
    @GET()
    async actionList(ctx:Router.IRouterContext,next:()=>Promise<unknown>):Promise<any>{
        // const data = {
        //     result:123
        // }
        const data = await this.apiService.getInfo()
        ctx.body = {
            data
        }
    }

}
export default ApiController