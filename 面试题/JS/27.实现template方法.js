var str = "您好，<%=name%>.欢迎来到<%=loaction%> "

function template(str){
    return data =>str.replace(/<%=(\w+)%>/g,(match,p)=>data[p]||"")
}
var compoiled = template(str)
console.log(compoiled({
    name:"张三",
    loaction:"网易云"
}))