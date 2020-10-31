onmessage = function (event) {
  while (true) {
    // 向线程创建源送回消息
    postMessage(Math.random());
  }
};
