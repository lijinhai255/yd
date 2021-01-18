"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function Permutation(str) {
  var result = [];

  if (str) {
    queue = str.split('');
    console.log(queue, "queue-queue-queue");
    PermutationnnCore(queue, result);
  }

  result.sort();
  console.log(" result.sort()", result);
  return _toConsumableArray(new Set(result));
}

function PermutationnnCore(queue, result) {
  var temp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var current = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  console.log('queue1', queue, "queilength", queue.length, "result1", result, "temp1", temp, "current1", current);
  current += temp;
  console.log("current-1", current);

  if (queue.length === 0) {
    result.push(current);
    console.log("resule--result", result);
    return;
  }

  for (var i = 0; i < queue.length; i++) {
    console.log("queue-queue", queue);
    temp = queue.shift();
    console.log("queue2", queue, "result2", result, "temp2", temp, "current2", current);
    PermutationnnCore(queue, result, temp, current);
    queue.push(temp);
  }
}

console.log(Permutation("abc"));