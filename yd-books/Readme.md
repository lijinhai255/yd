koa-swig 渲染静态页面


koa2-connect-history-api-fallback


- model 层
- 完善项目工程化
-- 测试 tests
-- 错误日志
 log4js 持久化


-- 模块化改造
yarn  add -D @babel/node
babel-preset-env
@babel/preset-env

gulp 打包node端代码
webpack 打包前端代码

-- commonjs -》 babel 转成ES6
- 节流函数 underscore.js

## 错误日志


## 测试

cnpress

rize

tree-sli


/Users/bao/Desktop/yd/yd-books
├── Readme.md
├── api.js
├── app copy 2.js
├── app copy.js
├── app.js
├── assets
├── bin
├── components
├── config
├── controllers
├── logs
├── middleware
├── models
├── node_modules
├── package-lock.json
├── package.json
├── service
├── tests
├── utils
├── views
├── yarn-error.log
└── yarn.lock

directory: 13 file: 9

├── README.md
├── app.js
├── assets
├── bin
├── components
├── config
├── controllers
├── logs
├── middlewares
├── models
├── node_modules
├── package-lock.json
├── package.json
├── tests
├── utils
├── views
└── yarn.lock

pnp
scripty
npm-run-all
sonar
jscpd 检测代码的重复率

如果是 html
可以使用 webcomponents import '../xxx.html';
后台模板 node 来渲染
html
js import

vue 代码两份 前端 后端  
react

mpa  
html -> node -> 数据灌进去 -> 吐给浏览器

前后端分离

服务端 -> 数据
前端 ajax 请求数据渲染到页面

两套模板引擎

swig index.html 最直接的展示 html
{{data}} .vue 为 dom 服务

项目经验

1. js jquery dom

- 简历被忽略了

2. vue/react 页面组件 没有用 node

- 常态
- 给到后端上线

----分水岭

3.mpa + spa node

- 真假路由的混用
- swig
- vue/react

4. 直接上框架

- next.js
- nuxt.js

5. 归一化

- ssr

6. 纯手写一套组件，前后端通用，start

7. chunk 生成途径

- 入口
- 异步产生 chunk
- 代码分割

代码清洗

a = 0;

清洗的更彻底，比较激进 prepack

```js
function init(num){
    var num = num + 10;
    num = Math.sin(num);
    console.log(num);
}
init(30);

// 计算出最终的值
console.log(num)
```


hash 所有文件的hash值都会变化

chunkhash 
js chunks
    js css 
    js.bundle  css.bundle
contenthash
    js css 
    js.bundle  css.bundle


