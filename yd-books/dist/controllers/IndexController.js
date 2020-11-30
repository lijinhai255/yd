"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 首页IndexController
 */
class IndexController extends _Controller.default {
  constructor() {
    super();
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

var _default = IndexController;
exports.default = _default;