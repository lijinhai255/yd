var a={}, 
 b={key:'b'}, 
 c={key:'c'}; 
a[b]=123; 
console.log(a)
a[c]=456; 
console.log(a[b],a); 
console.log(Symbol(b) == Symbol(b))//false