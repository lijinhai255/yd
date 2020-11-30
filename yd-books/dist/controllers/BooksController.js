"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BooksModel = _interopRequireDefault(require("../models/BooksModel"));

var _Controller = _interopRequireDefault(require("./Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 首页IndexController
 */
class BooksController extends _Controller.default {
  constructor() {
    super();
  }

  actionBooksListPage(ctx) {
    return async (ctx, next) => {
      // ctx.body = 'hello world'
      const booksModel = new _BooksModel.default();
      const result = await booksModel.getBooksList();
      console.log(result.data); // ctx.body = await ctx.render("books/list",{
      //     data: result.data
      // })

      ctx.body = await ctx.render("books/pages/list");
    };
  }

  actionBooksCreatePage(ctx) {
    return async (ctx, next) => {
      // ctx.body = 'hello world'
      const booksModel = new _BooksModel.default();
      const result = await booksModel.getBooksList();
      console.log(result.data); // ctx.body = await ctx.render("books/list",{
      //     data: result.data
      // })

      ctx.body = await ctx.render("books/pages/create");
    };
  }

}

var _default = BooksController;
exports.default = _default;