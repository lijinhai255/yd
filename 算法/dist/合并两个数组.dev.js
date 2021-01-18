"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var nums1 = [3, 1, 2, 3, 4, 5, 6, 5];
var nums2 = [9, 6, 6, 5, 7, 5, 7];

var mergeToOne = function mergeToOne(nums1, nums2) {
  var nums = [].concat(_toConsumableArray(nums1), _toConsumableArray(nums2));
  var res = [];
  var map = new Map();

  var filterFunc = function filterFunc(arr, n) {
    return arr.filter(function (it) {
      return it === n;
    });
  };

  for (var i = 0; i < nums.length; i++) {
    var it = nums[i];

    if (nums1.includes(it) && !nums2.includes(it) || !nums1.includes(it) && nums2.includes(it)) {
      res.push(it);
    } else {
      if (map.get(it)) continue;
      var cur1 = filterFunc(nums1, it);
      var cur2 = filterFunc(nums2, it);
      res = res.concat(cur1.length > cur2.length ? cur1 : cur2);
      map.set(it, true);
    }
  }

  return res.sort(function (a, b) {
    return a - b;
  });
};

var res = mergeToOne(nums1, nums2);
console.log(res);