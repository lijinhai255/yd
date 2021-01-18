"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stack =
/*#__PURE__*/
function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.items = [];
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(item) {
      this.items.push(item);
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.items.pop();
    }
  }, {
    key: "size",
    value: function size() {
      return this.items.length;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.items = [];
    }
  }]);

  return Stack;
}();

function isBalance(symbol) {
  var stack = new Stack();
  var left = '{(';
  var right = '})';
  var popValue;
  var tag = true;

  var match = function match(popValue, current) {
    if (left.indexOf(popValue) !== right.indexOf(current)) {
      tag = false;
    }
  };

  for (var i = 0; i < symbol.length; i++) {
    if (left.includes(symbol[i])) {
      stack.push(symbol[i]);
    } else if (right.includes(symbol[i])) {
      popValue = stack.pop();
      match(popValue, symbol[i]);
    }
  }

  return tag;
}

console.log(isBalance('{{(({}))}}'));
console.log(isBalance('{{(({})}}'));