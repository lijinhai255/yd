const Router = require('koa-router')
var router = new Router();
const Controller = require("./IndexController");
const indexController = new Controller();
const ApiController = require("./ApiController");
const apiController = new ApiController();
// module.exports = (app) => {
//     app.use(router(_ => {
//         _.get('/index.html', indexController.actionIndex());
//         _.get('/', indexController.actionIndex());
//     }));
// }
function IndexController(app){
    router.get('/',indexController.actionIndex());
    router.get('/apiData',apiController.actionIndex());
      
      app
        .use(router.routes())
        .use(router.allowedMethods());

}
module.exports = IndexController
