function Node(element){
    this.element = element
    this.next = null;

}
// 链表操作方法 
function List(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display
    this.findPrevious = findPrevious
    this.remove = remove;
}
//插入位置
function find(item){
    var currNode = this.head;
    while(currNode.element!=item){
        currNode = currNode.next
    }
    return currNode;

}
// 插入
function insert(newElement,item){
    var newNode = new Node(newElement);
    var currNode = this.find(item)
    newNode.next = currNode.next;
    currNode.next = newNode

 }

 function findPrevious(item){
     var currNode = this.head;
     while((currNode.next!==null)&&(currNode.next.element!==item)){
         currNode = currNode.next;
     }
     return currNode
     
 }
 function remove (item){
     var preNode = this.findPrevious(item)
     var currNode = this.find(item)
     if(preNode.next!==null){
         preNode.next = currNode.next;
         currNode.next = null
     }
 }

function display(){
    var currNode = this.head;
    while(currNode.next!==null){
        console.log('currNode.next.element', currNode.next.element)
        currNode = currNode.next
    }

}
var cities = new List()
cities.insert("first","head")
cities.insert("second", "first")
cities.insert("thrid","second")
cities.display()
console.log("========")
cities.remove("second")
cities.display()


