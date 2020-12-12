"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const _ = require("lodash");
// const { join } = require('path');
let config = {
  "viewDir": (0, _path.join)(__dirname, "..", 'views'),
  "staticDir": (0, _path.join)(__dirname, "..", 'assets')
};

if (process.env.NODE_ENV == "development") {
  const devConfig = {
    port: 3011,
    catch: false
  };
  config = _lodash.default.extend(config, devConfig);
}

if (false) {
  console.log("121212");
}

if (process.env.NODE_ENV == "production") {
  const prodConfig = {
    port: 81,
    catch: true
  };
  config = _lodash.default.extend(config, prodConfig);
}

var _default = config; // module.exports = config;

exports.default = _default;