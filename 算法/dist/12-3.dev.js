"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var removeElement = function removeElement(nums, val) {
  var j = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // nums[i] = nums[i+1]
      nums[j++] = nums[i];
    }
  }

  nums.length = j;
  return nums;
};

function formatNumber(num) {
  var _$split = "".concat(num).split("."),
      _$split2 = _slicedToArray(_$split, 2),
      formatnum = _$split2[0],
      unformatnum = _$split2[1];

  var newStr = new Intl.NumberFormat().format(formatnum);
  console.log("".concat(newStr, ".").concat(unformatnum));
} // console.log(removeElement([0,1,2,2,3,0,4,2],2))


console.log(formatNumber(12345678.002345));