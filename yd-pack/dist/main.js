(function (modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // module.exports = {};
    var module = (installedModules[moduleId] = {
      exports: {},
    });
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    return module.exports;
  }
  return __webpack_require__('/Users/xinxin/Desktop/yd/yd-pack/src/index.js');
})({
  '/Users/xinxin/Desktop/yd/yd-pack/src/index.js': function (module, exports, require) {
    "use strict";

    var _data = _interopRequireDefault(require("./data.js"));

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    console.log("================================");
    console.log(_data["default"]);
    console.log("================================");
  },
  './data.js': function (module, exports, require) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _result = _interopRequireDefault(require("./result.js"));

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    var data = 10;
    console.log(_result["default"], "result");
    var _default = data;
    exports["default"] = _default;
  },

});
