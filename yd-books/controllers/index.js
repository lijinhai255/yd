const Router = require('koa-router')
var router = new Router();
const IndexController = require("./IndexController");
const indexController = new IndexController();
const ApiController = require("./ApiController");
const apiController = new ApiController();
const VuePressController = require("./Vuepress");
const vuePressController = new VuePressController();
function InitController(app){
    router.get('/',indexController.actionIndex());
    router.get('/apiData',apiController.actionIndex());
    router.get('/vuepress',vuePressController.actionIndex());
      app
        .use(router.routes())
        .use(router.allowedMethods());

}
module.exports = InitController
