let laoyuan = {
  age: 31,
};

const validator = {
  set(target, key, value) {
    if (typeof value != 'number' || Number.isNaN(value)) {
      throw new TypeError('年龄必须是数字');
    }
  },
};

const proxy = new Proxy(laoyuan, validator);
proxy.age = '京程一灯';
