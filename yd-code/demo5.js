//async await
//www.npmjs.com/package/concurrent-thread-js
// let a = 0;
// let yideng = async () => {
//   a = a + (await 10);
//   console.log(a);
// };
// yideng();
// console.log(++a);

// function *(){}
//asyncmous 匿名函数执行
//父协程启动---->          （保存）---> await执行的时候
//                            yideng
// 生成器JS代码 协程主要线上
// async function async1() {
//   console.log(1);
//   await async2();
//   console.log(3);
// }
// async function async2() {
//   console.log(2);
// }
// async1();
// console.log(4);

// 1
// 2
// 3
// 4

https: const pro = new Promise((resolve, reject) => {
  const innerpro = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    });
    console.log(2);
    resolve(3);
  });
  innerpro.then((res) => console.log(res));
  resolve(4);
  console.log('yideng');
});
pro.then((res) => console.log(res));
console.log('end');

// macrotask  microtask

// 2;
// yideng;
// end;

// 3;
// 4;
