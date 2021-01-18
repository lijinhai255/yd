"use strict";

function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.show = show;
}

function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
  } else {
    return false;
  }
}

function remove(data) {
  var pos = this.dataStore.indexOf(data);

  if (pos > -1) {
    this.dataStore.splice(pos, 1);
  } else {
    return false;
  }
}

function show() {
  return this.dataStore;
}

function union(set) {
  var temSet = new Set();

  for (var index = 0; index < this.dataStore.length; index++) {
    temSet.add(this.dataStore[i]);
  }

  for (var _index = 0; _index < set.dataStore.length; _index++) {
    if (!temSet.contains(set.dataStore[i])) {
      temSet.dataStore.push(set.dataStore[i]);
    }
  }

  return temSet;
}

function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  } else {
    return false;
  }
}

function interset(set) {// var tempSet 
}

function difference(set) {}

var names = new Set();
names.add("小红");
names.add("小李");
names.add("小张");
names.add("小黄");
names.add("小王");
console.log(names.show());
names.remove("小王");
console.log(names.show());