const add = {
    init() {
      console.log('add组件');
      $('#js-btn').click(function () {
        alert('京程一灯');
      });
      //react 事件库的原理 代理
      //$.on 代理 整个事件绑定到了document
    },
  };
  export default add;
  