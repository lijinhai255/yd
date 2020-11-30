"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _router = _interopRequireDefault(require("@koa/router"));

var _IndexController = _interopRequireDefault(require("./IndexController"));

var _ApiController = _interopRequireDefault(require("./ApiController"));

var _Vuepress = _interopRequireDefault(require("./Vuepress"));

var _BooksController = _interopRequireDefault(require("./BooksController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _router.default();
const indexController = new _IndexController.default();
const apiController = new _ApiController.default();
const vuePressController = new _Vuepress.default(); // 图书列表页面

const booksController = new _BooksController.default();

function InitController(app) {
  router.get('/', indexController.actionIndex());
  router.get('/apiBooks', apiController.actionBooksList());
  router.get('/vuepress', vuePressController.actionIndex());
  router.get('/books/list', booksController.actionBooksListPage());
  router.get('/books/create', booksController.actionBooksCreatePage());
  app.use(router.routes()).use(router.allowedMethods());
}

var _default = InitController;
exports.default = _default;