"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _index = _interopRequireDefault(require("./config/index"));

var _errorHandler = _interopRequireDefault(require("./middleware/errorHandler"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _request = _interopRequireDefault(require("request"));

var _index2 = _interopRequireDefault(require("./controllers/index"));

var _koa2ConnectHistoryApiFallback = require("koa2-connect-history-api-fallback");

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _co = _interopRequireDefault(require("co"));

var _log4js = _interopRequireDefault(require("log4js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Koa = require('koa')
// const Router = require('koa-router')
// const config = require("./config/index")
// // const bodyParser = require('koa-bodyparser')
// const errorHandler = require("./middleware/errorHandler")
// const staticServer = require("koa-static")
// const request = require('request');
// const InitController = require("./controllers/index")
// const { historyApiFallback } = require('koa2-connect-history-api-fallback');
// const app = new Koa()
// const router = new Router()
// const port = 3010
// var render = require('koa-swig');
// const co = require('co');
// const log4js = require("log4js");
// import bodyParser = from 'koa-bodyparser'
const app = new _koa.default();
const router = new _koaRouter.default();
const port = 3010;

// 错误日志计入
_log4js.default.configure({
  appenders: {
    globalError: {
      type: "file",
      filename: "./logs/error.log"
    }
  },
  //只有错误是error 级别 写入文件中
  categories: {
    default: {
      appenders: ["globalError"],
      level: "error"
    }
  }
});

const logger = _log4js.default.getLogger("globalError");

logger.error("Cheese is too ripe!");
app.context.render = _co.default.wrap((0, _koaSwig.default)({
  root: _index.default.viewDir,
  autoescape: true,
  cache: _index.default.cache,
  // disable, set to false
  ext: 'html',
  varControls: ["[[", "]]"]
})); // router.use(bodyParser())

var getData = function getBoots() {
  return new Promise((resolve, reject) => {
    (0, _request.default)('http://localhost/basic/web/index.php?r=books', function (error, response, data) {
      if (!error && response.statusCode == 200) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

router.get('/api/feedback', ctx => {
  ctx.type = 'html';
  ctx.body = getData().then(data => {
    console.log(data, 121); // ctx.body = data

    return JSON.parse(data);
  }); // ctx.body = [121212]
}); // app.use(router.routes()).use(router.allowedMethods())
// app.use(ctx=>{
// 

(0, _index2.default)(app); // 

app.use((0, _koaStatic.default)(_index.default.staticDir));
app.use((0, _koa2ConnectHistoryApiFallback.historyApiFallback)({
  index: "/",
  whiteList: ['/api']
}));

_errorHandler.default.error(app, logger); // ctx.body= "hellow world"
// })


const host = `http://localhost:${_index.default.port}`;
app.listen(_index.default.port, () => console.log(`server is running on ${host}`));