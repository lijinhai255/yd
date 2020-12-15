import { interfaces,controller,httpGet,TYPE } from "inversify-koa-utils"
import provideThrowable from "../ioc";
import { IApi } from "../interface/IApi";
import {inject} from "inversify"
import TAGS from "../constant/tags";
import { IRouterContext } from "koa-router";

@controller("/")
@provideThrowable(TYPE.Controller,"IndexController")
export default class IndexController implements interfaces.Controller {
    private indexService:IApi;
    constructor(@inject(TAGS.IndexServices) indexService){
        this.indexService = indexService
    }
    @httpGet("/")
    private async index(
        ctx:IRouterContext,
        next:()=>Promise<unknown>):Promise<any>{
            const data = await this.indexService.getInfo()
             ctx.body = {
                 data
             } 
    }

}

/**
 * 1、定义interface
 * 2、定义常量 注入容器
 * 3、插入到构造函数中 注入过程
 * 
 * **/