"use strict";

var CQueue = function CQueue() {
  this.stack1 = [];
  this.stack2 = [];
};

CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value);
};

CQueue.prototype.deleteHead = function () {
  if (this.stack2.length) return this.stack2.pop();

  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }

  return this.stack2.pop() || -1;
};

var cqueue = new CQueue();
cqueue.appendTail(1);
cqueue.appendTail(2);
cqueue.appendTail(3);
cqueue.appendTail(4);
console.log(cqueue.stack1);
cqueue.deleteHead();
console.log(cqueue.stack2);