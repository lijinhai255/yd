"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SafeRequest = _interopRequireDefault(require("../utils/SafeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BooksModel {
  getBooksList() {
    return _SafeRequest.default.fetch("http://localhost/basic/web/index.php?r=books");
  }

  finBooks(id) {}

}

var _default = BooksModel;
exports.default = _default;