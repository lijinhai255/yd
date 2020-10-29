// alert(a);
// a();
// var a = 3;
// function a() {
//   alert(10);
// }
// alert(a);
// a = 6;
// a();

//执行阶段
// function a() {
//   alert(10);
// }
// var a;

// //-----
// alert(a);
// a();
// a = 3;
// alert(a);
// a = 6;
// a();

function yideng() {
  console.log('1');
}
// var yideng;
// if (false) {
//   function yideng() {
//     console.log('2');
//   }
// }
function init() {
  var yideng;
  if (false) {
    function yideng() {
      console.log('2');
    }
  }
  console.log('🍊', yideng);
  yideng();
}

init();

// function init() {
//   var init = 1;
// }
