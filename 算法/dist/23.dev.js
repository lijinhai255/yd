"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function movingCount(m, n, k) {
  var res = 0;
  var directions = [[1, 0], [0, 1]];
  var queue = [[0, 0]];
  var visited = {
    "0-0": true
  };

  while (queue.length) {
    var _queue$shift = queue.shift(),
        _queue$shift2 = _slicedToArray(_queue$shift, 2),
        x = _queue$shift2[0],
        y = _queue$shift2[1];

    console.log(x, y, directions);

    if (bitSum(x) + bitSum(y) > k) {
      continue;
    }

    ++res;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = directions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var direction = _step.value;
        var newx = direction[0] + x;
        var newy = direction[1] + y;

        if (!visited["".concat(newx, "-").concat(newy)] && newx >= 0 && newy >= 0 && newx < m && newy < n) {
          queue.push([newx, newy]);
          visited["".concat(newx, "-").concat(newy)] = true;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return res;
};

function bitSum(n) {
  var res = 0;

  while (n) {
    res = res + n % 10;
    n = Math.floor(n / 10);
  }

  return res;
}

movingCount(2, 2, 1);