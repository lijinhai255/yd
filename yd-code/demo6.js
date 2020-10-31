$('#test').click(function (argument) {
  console.log(1);
});
setTimeout(function () {
  console.log(2);
}, 0);
while (true) {
  console.log(Math.random());
}
// Concurrent.Thread.create(function () {
//   while (true) {
//     console.log(Math.random());
//   }
// });
// setTimeout(console.log,)
