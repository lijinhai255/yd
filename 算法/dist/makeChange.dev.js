"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Change =
/*#__PURE__*/
function () {
  function Change(changeType) {
    _classCallCheck(this, Change);

    this.changeType = changeType;
    this.cache = [];
  }

  _createClass(Change, [{
    key: "makeChange",
    value: function makeChange(amount) {
      // 最少张数
      var min = [];

      if (!amount) {
        return [];
      }

      if (this.cache[amount]) {
        return this.cache[amount];
      }

      for (var i = 0; i < this.changeType.length; i++) {
        var letAmount = amount - this.changeType[i];
        var newMin = void 0;

        if (letAmount >= 0) {
          newMin = this.makeChange(letAmount);
        } // 下一步找钱逻辑


        if (letAmount >= 0 && newMin.length < min.length - 1 || !min.length) {
          //纠正结果
          min = [this.changeType[i]].concat(newMin);
        }
      }

      return this.cache[amount] = min;
    }
  }]);

  return Change;
}();

var change = new Change([1, 5, 10, 20, 50, 100]);
console.log(change.makeChange(2));
console.log(change.makeChange(5));
console.log(change.makeChange(13));