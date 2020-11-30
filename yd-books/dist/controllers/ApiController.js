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
class IndexController extends _Controller.default {
  constructor() {
    super();
  }

  actionBooksList(ctx) {
    return async (ctx, next) => {
      // ctx.body = 'hello world'
      const booksModel = new _BooksModel.default();
      const result = await booksModel.getBooksList();
      ctx.body = [{
        data: result.data
      }];
    };
  }

}

var _default = IndexController;
exports.default = _default;