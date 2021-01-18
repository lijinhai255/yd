"use strict";

function culNum(arr) {
  var map = new Map();
  var length = arr.length;

  for (var index = 0; index < arr.length; index++) {
    // 先从map中获取 当前的值 存在吗 
    if (map.has(arr[index])) {
      var value = map.get(arr[index]);
      map.set(arr[index], ++value);
    } else {
      map.set(arr[index], 0);
    }
  }

  console.log(map, 121); // 遍历map

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      console.log(item[0], item[1], item[1] > length / 2, parseInt(length / 2));

      if (item[1] >= parseInt(length / 2)) {
        return item[0];
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

var newMap = culNum([1, 2, 3, 2, 2, 2, 5, 4, 2]);
console.log(newMap);