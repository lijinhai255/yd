"use strict";

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteNode = function deleteNode(head, val) {
  if (head.val === val) return head.next;
  head.next = deleteNode(head.next, val);
  return head;
};

var listNode_1 = new ListNode(4);
listNode_1.next = new ListNode(5);
listNode_1.next.next = new ListNode(1);
listNode_1.next.next.next = new ListNode(9);
console.log(deleteNode(listNode_1, 5));