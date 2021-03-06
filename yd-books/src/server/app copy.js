const Koa = require("koa");
const app = new Koa();
const co = require("co");
const render = require('koa-swig');
const serve = require('koa-static');
const errorHandler = require("./middleware/errorHandler");
const log4js = require('log4js');
const config = require("./config")
app.use(serve(config.staticDir));
//注入我们的路由机制
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: "memory",
    ext: 'html',
    varControls: ["[[", "]]"],
    writeBody: false
}));
//逻辑和业务错误 http日志
log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: 'logs/yd.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
});
const logger = log4js.getLogger('cheese');
errorHandler.error(app, logger);
require("./controllers")(app);
app.listen(config.port, () => {
    console.log("服务已启动🍺🍞");
});