console.log([] == false);
if ([]) {
  console.log([] == false);
} else {
  console.log('测试');
}

// //1.装箱
// 基本数据类型 转化为对应的引用类型
var yideng = '京程一灯';
String对象;
var s1 = new String('yideng');

// //2.拆箱
// 把引用类型    转化为 对应的基础类型

// 等号和运算符 ->(复杂类型/引用类型) toPrimitive 字符串相加 优先运算 数字、原始类型
//①valueOf ->toString  TypeError
// 原始类型值
[] == 0;
[].valueOf().toString();

let obj = {
  valueOf: function () {
    console.log('valueof');
    return {};
  },
  toString() {
    console.log('toString');
    return 'obj';
  },
};
console.log(1 + obj);
