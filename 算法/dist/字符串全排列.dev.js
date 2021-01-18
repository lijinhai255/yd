"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function permutation(s) {
  var arr = s.split('');
  var isUse = arr.slice().fill(0);
  var result = new Set();

  function dfs(temp) {
    for (var i = 0; i < s.length; i++) {
      if (!isUse[i]) {
        temp += s[i];

        if (temp.length >= s.length) {
          result.add(temp);
          return;
        }

        isUse[i] = 1;
        dfs(temp);
        isUse[i] = 0;
        temp = temp.substr(0, temp.length - 1);
      }
    }
  }

  dfs('');
  return _toConsumableArray(result);
};