import Controller from "./Controller"
/**
 * 首页IndexController
 */
class IndexController extends Controller {
    constructor() { 
        super()
    }
    actionIndex() {
        return async (ctx, next) => {
            // ctx.body = 'hello world'
            // throw new Error("自定义错误")
            const data = "hellow world";
            ctx.body = data;
        };
    }
}
export default IndexController;
