import { GET, route } from 'awilix-koa';
import * as Router from 'koa-router';
import { Context } from '../interface/IKoa';

@route("/")
class ApiController{
    private apiService
    constructor({apiServices}){
        this.apiService = apiServices
    }
    @route("/")
    @GET()
    async actionIndex(
        ctx:Context,
        next:()=>Promise<unknown>):Promise<void>{
            ctx.body = await ctx.render('index')
    }

}
export default ApiController