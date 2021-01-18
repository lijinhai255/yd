"use strict";

var arr = [9, 12, 1, 4, 5, 6, 7, 3, 6];

function insertSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    for (var j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        var _ref = [arr[j - 1], arr[j]];
        arr[j] = _ref[0];
        arr[j - 1] = _ref[1];
      } else {
        break;
      }
    }
  }

  return arr;
}

console.log(insertSort(arr));

var CArry = function CArry() {
  this.dataStore = [1, 8, 3, 2, 4, 5, 7, 8, 6];
  this.insertSort = insertStore;
};

function insertStore() {
  var temp, inner;

  for (var outer = 0; outer < this.dataStore.length; ++outer) {
    temp = this.dataStore[outer];
    inner = outer;

    while (inner > 0 && this.dataStore[inner - 1] >= temp) {
      this.dataStore[inner] = this.dataStore[inner - 1];
      inner--;
    }

    this.dataStore[inner] = temp;
  }
}

var mynums = new CArry();
mynums.insertSort();
console.log(mynums.dataStore);