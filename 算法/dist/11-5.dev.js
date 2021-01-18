"use strict";

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function mergeTwoLists(l1, l2) {
  var preHead = new ListNode();
  var pre = preHead;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      pre.next = l1;
      l1 = l1.next;
    } else {
      pre.next = l2;
      l2 = l2.next;
    }

    pre = pre.next;
  }

  pre.next = l1 ? l1 : l2;
  return preHead.next;
};

var listNode_1 = new ListNode(1);
listNode_1.next = new ListNode(2);
listNode_1.next.next = new ListNode(4);
var listNode_2 = new ListNode(1);
listNode_2.next = new ListNode(3);
listNode_2.next.next = new ListNode(4); // listNode_1.next.next =4

console.log(mergeTwoLists(listNode_1, listNode_2));