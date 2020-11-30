"use strict";

const Controller = require("./Controller");
/**
 * 首页IndexController
 */


class VuePressController extends Controller {
  constructor() {
    super();
  }

  actionIndex() {
    return async (ctx, next) => {
      // ctx.body = 'hello world'
      const data = "hellow world";
      ctx.body = await ctx.render("vue", {
        data
      });
    };
  }

}

module.exports = VuePressController;