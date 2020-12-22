# React同构

<a name="6kiKG"></a>
## ![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608602666971-4dbf9815-f738-4da5-93e4-a6cd0593bf88.png#align=left&display=inline&height=462&margin=%5Bobject%20Object%5D&name=image.png&originHeight=924&originWidth=1752&size=230921&status=done&style=none&width=876)
<a name="NjsV3"></a>
## 安装React项目
```javascript
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
$ npm config set registry https://registry.npm.taobao.org
$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
```
<a name="aWskl"></a>
## 技术选型
基于Koa和React
<a name="XPx6n"></a>
### 安装的依赖
```javascript
yarn add koa
yarn add react @types/react react-dom @types/react-dom @types/node
```
<a name="QAEhF"></a>
### 客户端初始化 client/index.jsx
```javascript
import React from "react"

import ReactDOM from "react-dom"

// 引入App
import App from "../shared/App"

ReactDOM.render(<App/>,document.getElementById("root"))
```
<a name="vJuHS"></a>
### 服务端初始化 server/app.js
```javascript
const Koa = require("koa");
const serve = require('koa-static')
const app = new Koa();

app.use(serve("dist"))
app.use((ctx) => {
  ctx.body = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React SSR</title>
        </head>
        <body>
            <div id="root">q132</div>
            <script src="./bundle.js"></script>

        </body>
    </html>
    `;
});

app.listen(3000, () => {
  console.log("server is running");
});

```
<a name="0NbsN"></a>
#### 创建静态资源服务器
```javascript
const serve = require('koa-static')
app.use(serve("dist"))
```
<a name="YgDW7"></a>
### 共享模板初始化 share/App.jsx
```javascript
import React from 'react';

const App =()=>{
    return <h1>hellow React</h1>
}

export default App
```
<a name="NZhF2"></a>
## webpack打包
```javascript
yarn add webpack webpack-cli -D
```
<a name="n72K0"></a>
### webpack.client
```javascript
yarn add babel-loader @babel/core -D

```
[babel-loader](https://webpack.docschina.org/loaders/babel-loader/)用法 [babel官网](https://www.babeljs.cn/)
```javascript
 rules:[
            { 
                test:/\.ts(x)?/,
                use: ["babel-loader"],
            }
        ]
```
<a name="Kp0XQ"></a>
#### [ babel插件 解析react](https://babeljs.io/docs/en/babel-preset-react#docsNav)
```javascript
yarn add @babel/preset-react -D
```
```javascript
{
    "presets": ["@babel/preset-react"]
}
```
<a name="nS938"></a>
#### 添加拓展名
```javascript
resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
```
<a name="75wFS"></a>
### webpack.server
[webpack-node-externals](https://webpack.docschina.org/configuration/externals/)<br />`externals` 配置选项提供了「从输出的 bundle 中排除依赖」的方法。相反，所创建的 bundle 依赖于那些存在于用户环境(consumer's environment)中的依赖。此功能通常对 **library 开发人员**来说是最有用的，然而也会有各种各样的应用程序用到它。
```javascript
const nodeExternals = require("webpack-node-externals");

module.exports ={
	...,
  externals:[nodeExternals()],
}
```
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608608265701-e9c8a68b-c491-4fc0-80fb-50d1f2e08039.png#align=left&display=inline&height=238&margin=%5Bobject%20Object%5D&name=image.png&originHeight=476&originWidth=946&size=95209&status=done&style=none&width=473)
```javascript
yarn add webpack-node-externals
```
```javascript
"build:client": "webpack --config build/webpack.client.js",
"build:server": "webpack --config build/webpack.server.js",
"build": "npm-run-all  build:*",
```
<a name="ZcFKy"></a>
## 同构使用的API
<a name="3xeRz"></a>
### [服务端ReactDOMServer](https://zh-hans.reactjs.org/docs/react-dom-server.html#gatsby-focus-wrapper)
`ReactDOMServer` 对象允许你将组件渲染成静态标记。通常，它被使用在 Node 服务端上：
```
// ES modules
import ReactDOMServer from 'react-dom/server';
// CommonJS
var ReactDOMServer = require('react-dom/server');
```
<a name="7qlil"></a>
#### 概览
下述方法可以被使用在服务端和浏览器环境。

- [`renderToString()`](https://zh-hans.reactjs.org/docs/react-dom-server.html#rendertostring)
- [`renderToStaticMarkup()`](https://zh-hans.reactjs.org/docs/react-dom-server.html#rendertostaticmarkup)

下述附加方法依赖一个**只能在服务端使用**的 package（`stream`）。它们在浏览器中不起作用。

- [`renderToNodeStream()`](https://zh-hans.reactjs.org/docs/react-dom-server.html#rendertonodestream)
- [`renderToStaticNodeStream()`](https://zh-hans.reactjs.org/docs/react-dom-server.html#rendertostaticnodestream)

`<br />`<br />`参考`<br />`renderToString()`<br />`ReactDOMServer.renderToString(element)`<br />`将 React 元素渲染为初始 HTML。React 将返回一个 HTML 字符串。你可以使用此方法在服务端生成 HTML，并在首次请求时将标记下发，以加快页面加载速度，并允许搜索引擎爬取你的页面以达到 SEO 优化的目的。如果你在已有服务端渲染标记的节点上调用 ``ReactDOM.hydrate()`` 方法，React 将会保留该节点且只进行事件处理绑定，从而让你有一个非常高性能的首次加载体验。`
```javascript
const Router = require("@koa/router");
// 同构开始
import React from "react"
import {renderToString} from 'react-dom/server';
import App from "../shared/App"

const router = new Router()

const router = new Router()
router.get('/',(ctx,next) =>{
  const html = renderToString(<App></App>)
  // console.log(html)
    ctx.body = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React SSR</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script src="./script/bundle.js"></script>
        </body>
    </html>
    `;
})

app.use(router.routes()).use(router.allowedMethods());

```
```javascript
ReactDOM.hydrate(<App/>,document.getElementById("root"))
```
<a name="s0P5L"></a>
### 路由优化流程
[react-routert](https://reactrouter.com/web/guides/quick-start) 官网
<a name="g3cKN"></a>
#### 添加client端 路由
```javascript
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
```
但是运行在服务器端是 会报错
```javascript
Browser history needs a DOM
```
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608615702455-023185f6-4e43-45e0-bf92-d2fc7e702cba.png#align=left&display=inline&height=283&margin=%5Bobject%20Object%5D&name=image.png&originHeight=566&originWidth=982&size=123440&status=done&style=none&width=491)
<a name="8yA6J"></a>
#### 修改
[server-rendering](https://reactrouter.com/web/guides/server-rendering)<br />例子
```javascript
// client
<BrowserRouter>
  <App/>
</BrowserRouter>

// server (not the complete story)
<StaticRouter
  location={req.url}
  context={context}
>
  <App/>
</StaticRouter>
```
客户端
```javascript
// 引入 路由
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

ReactDOM.hydrate(<Router><App/></Router>,document.getElementById("root"))
```
服务端
```javascript
import {
  StaticRouter
} from "react-router-dom";

router.get('/',(ctx,next) =>{
  const html = renderToString(<StaticRouter 
    location={ctx.req.url}
    >
      <App></App></StaticRouter>)
  // console.log(html)
    ctx.body = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React SSR</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script src="./script/bundle.js"></script>

        </body>
    </html>
    `;

})
```
<a name="7nkAG"></a>
### 请求处理
```javascript
yarn add axios
```
<a name="oZufU"></a>
#### 在About页面中进行使用
```javascript
import React from 'react';
import axios from "axios";

class About extends React.Component{
    state ={
      data:""
    }
    return(){
      return <h2>About</h2>;
    }
    
}

export default About;  
```
![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608618113514-bc884c10-ec02-41c8-8b13-352296c13878.png#align=left&display=inline&height=224&margin=%5Bobject%20Object%5D&name=image.png&originHeight=448&originWidth=954&size=58942&status=done&style=none&width=477)
```javascript
 "plugins": ["@babel/plugin-proposal-class-properties"]
```
在首页渲染时 想把写入页面中的请求 提前放入到服务端  将从服务器端获取的数据 和 填充好的页面一起返回给浏览器
<a name="IB8ri"></a>
#### 在服务器端 进行数据的请求
客户端<br />[Data Loading](https://reactrouter.com/web/guides/server-rendering)<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608619429460-6f7b5d74-6798-4d17-bc0d-9d5dfea789bb.png#align=left&display=inline&height=458&margin=%5Bobject%20Object%5D&name=image.png&originHeight=916&originWidth=1970&size=164452&status=done&style=none&width=985)<br />统一配置router
```javascript
import Home from "./Home"
import About from "./About"

const routes = [
    {
      path: "/",
      component: Home,
      exact: true,
      loadData: () => Home.getSomeData()
    },
    {
        path: "/about",
        exact: true,
        component: About,
      }
    // etc.
  ];

  export default routes
```


```javascript
yarn add react-router-config 
```
[react-router-config](https://www.npmjs.com/package/react-router-config) npm 官网<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/388400/1608620381889-3d49ae8c-15a1-4ef2-81ce-5351c4edee5c.png#align=left&display=inline&height=304&margin=%5Bobject%20Object%5D&name=image.png&originHeight=608&originWidth=1452&size=89061&status=done&style=none&width=726)<br />

```javascript
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {renderRoutes } from "react-router-config";
import routes from "./Router";

export default function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

       {
         renderRoutes(routes)
       }
      </div>
  );
}

```
服务器端
```javascript
import { StaticRouter, matchPath } from "react-router-dom";
import rotues from "../shared/Router";

```
```javascript
router.get(['/',"/about"],async (ctx,next) =>{
  const promises = [];
  let html = "";
  rotues.some((route) => {
    // 匹配当前路由
    const match = matchPath(ctx.request.path, route);
    if (match && route.loadData) {
      // 服务器端发起请求 等待数据
      promises.push(route.loadData());
      console.log(route.loadData(),"route.loadData")
    }
    return match;
  });
  // 填充数据
  await Promise.all(promises).then((data) => {
    console.log("data", data);
    html = renderToString(
        <StaticRouter location={ctx.req.url}>
          <App />
        </StaticRouter>
    );
  });
  console.log(html)
// 页面 数据 返回给客户端
    ctx.body = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React SSR</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script src="./script/bundle.js"></script>

        </body>
    </html>
    `;

})
```
<a name="wGC0K"></a>
### 使用redux 保存服务器端的数据 
```javascript
yarn add react-redux  @types/redux @types/react-redux
```
创建store
```javascript
import {createStore} from "redux"

const initState = {
    data:""
}

function reducer(state=initState,action){
    switch(action.type){
        case "CHANGE_HOME_DATA": 
            return {
                ...state,
                ...action.payload,
            }
        default:
            return {...state}    
    }

}

export function createClientStore() {
    return createStore(reducer, (window as any).REDUX_STORE);
  }
export function createServerStore() {
    return createStore(reducer);
  }
  
```
客户端 引入provider 创建store
```javascript
//创建provider
import {Provider} from "react-redux";
import {createClientStore} from "../shared/store/index"

ReactDOM.hydrate(<Provider store={createClientStore()}><Router><App/></Router></Provider>,document.getElementById("root"))
```
服务端 同样引入provider 创建store
```javascript
// store
import { Provider } from "react-redux";
import { createServerStore } from "../shared/store";


const store = createServerStore();
 <Provider store={store}>
        <StaticRouter location={ctx.req.url}>
          <App />
  </StaticRouter>
  </Provider>
```
home页面中使用store
```javascript
 static getSomeData(store){
      console.log(store,"store")
      return new Promise(resolve =>{
        axios.get("http://localhost:3001/getData").then(({data})=>{
          console.log(data.data)
          store.dispatch({
            type: "CHANGE_HOME_DATA",
            payload: {
              data: data.data,
            },
          });
          resolve({data:data.data});
      })
      })

    }
```


