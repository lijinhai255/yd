"use strict";

(function () {
  var root = this;

  var _ = function (obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  _.each = function (arr, fn) {
    for (let i = 0; i < arr.length; i++) {
      fn(arr[i], i);
    }

    return arr;
  };

  return root._ = _;
})();