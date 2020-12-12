1、离线缓存
localStorege 5M 取数据


2、请求 SSR 切页SPA

mpa项目
    优点 一个请求 一次性需要的内容直出掉
    2、使用服务端的变量  asp jsp php 
    缺点：
    1、直出资源数据量过于庞大 bigpie
    2、服务器处理渲染模板时间过于长久的话 造成页面等待 缓存 koa-swig
    3、重复加载资源

spa
    优点：
    1、切页的时候 将切页的时候 最小化 的加载资源
    缺点：
        index.html-> vue.mian.js -> vue.router.js -> runtime.js（webpack)->app.js->组件js ->fetch(api)-> 虚拟DOM ->diff算法 >patch> innerHtml > 初始化 JS的事件引擎    
