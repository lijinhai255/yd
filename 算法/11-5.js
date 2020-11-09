function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function(l1, l2) {
    let preHead=new ListNode();
    let pre = preHead;
    while(l1&&l2){
        if(l1.val<=l2.val){
            pre.next = l1
            l1 = l1.next
        }else{
            pre.next = l2
            l2 = l2.next
        }
        pre = pre.next
    }
    pre.next = l1?l1:l2;
    return preHead.next
};
let listNode_1 = new ListNode(1)
listNode_1.next =new  ListNode(2)
listNode_1.next.next = new  ListNode(4)
let listNode_2 = new ListNode(1)
listNode_2.next = new ListNode(3)
listNode_2.next.next = new ListNode(4)
// listNode_1.next.next =4
console.log(mergeTwoLists(listNode_1,listNode_2))
