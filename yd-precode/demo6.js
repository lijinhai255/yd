var list_li = document.getElementsByTagName('li');
for (let i = 0; i < list_li.length; i++) {
  //   (function (i) {
  list_li[i].onclick = function () {
    // console.log(i + 1);
    console.log(this.innerHTML);
  };
  //   list_li[i].onclick = function () {
  //     console.log(i + 1);
  //   };
  //   })(i);
}

// (function(){
// function yideng() {
//   debugger;
// }
// yideng();
// })();

// (function () {
//   debugger;
// })();
// var a;
// {
//   a = '老袁最帅';
//   let a;
//   //   init = 5;
//   function init() {}
//   //   init = 4;
// }
// console.log(init);
// function init(){}
