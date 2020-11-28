alert(a);// 'function a(){ alert(10) }'
a();//10
var a = 3;
function a(){
    alert(10);
}
alert(a)//3
a = 6;
a()//typeError: a is not a function