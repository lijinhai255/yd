"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var isHappy = function isHappy(n) {
  console.log(n); // map 存储计算过的数字

  var store = {}; // 如果store中有这个数字 或者数字邓毅1 停止循环

  while (!store[n] && n !== 1) {
    store[n] = n;
    console.log("n::", n.toString().split(""));
    n.toString().split("").forEach(function (v, i) {
      if (i == 0) n = 0;
      n += v * v;
    });
    n = parseInt(n);
  }

  return n === 1;
};

console.log(isHappy(4)); // 

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.eventQueue = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(eventName, callback) {
      if (this.eventQueue[eventName]) {
        this.eventQueue[eventName].push(callback);
      } else {
        this.eventQueue[eventName] = [callback];
      }
    }
  }, {
    key: "off",
    value: function off(eventName) {
      if (this.eventQueue[eventName]) {
        this.eventQueue[eventName] = null;
      } else {
        return;
      }
    }
  }, {
    key: "once",
    value: function once(eventName, callback) {
      var _this = this;

      var fn = function fn() {
        callback();

        _this.off(eventName);
      };

      if (this.eventQueue[eventName]) {
        this.eventQueue[eventName].push(fn);
      } else {
        this.eventQueue[eventName] = [fn];
      }
    }
  }, {
    key: "trigger",
    value: function trigger(eventName) {
      if (this.eventQueue[eventName]) {
        this.eventQueue[eventName] && this.eventQueue[eventName].forEach(function (item) {
          return item();
        });
      } else {
        console.log("".concat(eventName, " is not defined"));
      }
    }
  }]);

  return EventEmitter;
}();

var eventEmitter = new EventEmitter();
eventEmitter.on("setName", function () {
  console.log("setName");
});
eventEmitter.once("once", function () {
  console.log("once");
});
eventEmitter.trigger("setName");
eventEmitter.trigger("once");
eventEmitter.trigger("setName");
eventEmitter.trigger("once");
eventEmitter.off("setName");
eventEmitter.trigger("setName");