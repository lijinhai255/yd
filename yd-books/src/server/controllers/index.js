import Router from '@koa/router'
var router = new Router();
import IndexController  from "./IndexController";
const indexController = new IndexController();
import ApiController  from "./ApiController";
const apiController = new ApiController();
import VuePressController  from "./Vuepress";
const vuePressController = new VuePressController();

// 图书列表页面
import BooksController from "./BooksController"
const booksController = new BooksController()


function InitController(app){
    router.get('/',indexController.actionIndex());
    router.get('/apiBooks',apiController.actionBooksList());
    router.get('/vuepress',vuePressController.actionIndex());
    router.get('/books/list',booksController.actionBooksListPage());
    router.get('/books/create',booksController.actionBooksCreatePage());
      app
        .use(router.routes())
        .use(router.allowedMethods());

}
export default  InitController