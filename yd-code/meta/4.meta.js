// reflect - metadata;
require('reflect-metadata');
class C {
  method() {
    console.log(this);
  }
}

Reflect.defineMetadata('yideng', Math.random(), C.prototype, 'method');
// let obj = new C();
// let metadata = Reflect.getMetadata('yideng', obj, 'method');
// console.log(metadata);

let metadata = Reflect.getMetadata('yideng', C.prototype, 'method');
console.log(metadata);
