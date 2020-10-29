function Stack(){
    this.dataStore = [];// 保存栈内元素
    this.top=0;// 标记可以插入新元素的位置 栈内亚茹元素 该变量变大 弹出元素 变量变小
    this.push = push; // 入栈操作
    this.pop = pop; // 出栈操作
    this.peek = peek; //返回栈顶元素
    this.clear = clear; // 清空栈
    this.length = length; // 栈的长度
}
// 向栈中压入元素 同时让指针top+1 
function push(element){
    this.dataStore[this.top++] = element
}
// 出栈操作 同时将 top-1
function pop(){
    return  this.dataStore[--this.top]
}
// 返回栈顶元素 变量top值-1 返回不删除
function peek(){
    return this.dataStore[this.top-1]
}
// 返回栈内元素的元素 个数
function length(){
    return this.top
}
// 清空一个栈
function clear(){
    this.top = 0
}

var s  = new Stack();
s.push("小红第一")
s.push("小红第二")
s.push("小红第三")
s.push("小红第四")
s.push("小红第五")
console.log(s.length());
console.log(s.peek())

/*===回文算法===*/
function isPalindrome(word){
    var s = new Stack();
    for (let i = 0; i < word.length; i++) {
        s.push(word[i])     
    }
    var rword = ""
    while(s.length()>0){
        rword +=s.pop()
    }
    console.warn(rword)
    if(rword==word){
        return true
    }else{
        return false
    }
}
var word ="racecar"
console.log(isPalindrome(word))