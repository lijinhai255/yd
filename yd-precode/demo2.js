var x = 1,
  y = 0,
  z = 0;
function add(x) {
  return (x = x + 1);
}
//2
y = add(x);
console.log(y);
function add(x) {
  return (x = x + 3);
}
z = add(x);
console.log(z);
