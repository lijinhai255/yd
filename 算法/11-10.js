var hasCycle = (head) => {
    let p1 = head;
    let p2 = head;
    while (p1) {                         // 快指针指向真实节点
      if (p1.next == null) return false; // 如果下一个为null，说明没有环
      p2 = p2.next;                   // 慢的走一步
      p1 = p1.next.next;   // 快的走两步
      console.log(p1,p2,p1==2)
      if (p2 == p1) return true;      // 快慢指针相遇，有环
    }
    return false;                           // fastP指向null了，也始终不相遇
  }


function ListNode(val) {
    this.val = val;
    this.next = null;
}
let list = new ListNode(3)
list.next = new ListNode(2)
list.next.next = new ListNode(0)
list.next.next.next = new ListNode(-4)
list.next.next.next.next = new ListNode(2)

console.log(hasCycle(list))