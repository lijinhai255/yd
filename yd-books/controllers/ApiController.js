/**
 * 首页IndexController
 */
class IndexController {
    constructor() { }
    actionIndex() {
        return async (ctx, next) => {
            // ctx.body = 'hello world'
            const data = "京程一灯SSR";
            ctx.body = [
                {
                    data:[123]
                }
            ]
        };
    }
}
module.exports = IndexController;
