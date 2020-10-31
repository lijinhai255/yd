function Tree() {
  return new Proxy({}, handler);
}

const handler = {
  get(target, key, receiver) {
    console.log(receiver);
    if (!(key in target)) {
      target[key] = Tree();
    }
    // return target[key ]
    return Reflect.get(target, key, receiver);
  },
};

let tree = Tree();
tree.yideng.student.paofan = '炮饭';
// {
//     yideng:{
//         student:{
//             paofan: '炮饭'
//         }
//     }
// }

console.log(tree);
