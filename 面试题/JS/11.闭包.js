var lijinhai =(function(){
    var foo = 0;
    function Lijinhai(){}
    Lijinhai.prototype.bar = function(){
        return foo
    }
    return Lijinhai
})()
let newLijinhai = new  lijinhai()
console.log(newLijinhai.bar())

for (let i = 0; i < 3; i++) {
    document.getElementById("id"+1).onfocus = function(){
        alert(i)
    }
    
}

// 使用闭包进行解决
function makeCallback(num){
    return function(){
        alert(num)
    }
}
for (let i = 0; i < 3; i++) {
    document.getElementById("id"+1).onfocus = makeCallback(i)
    
}