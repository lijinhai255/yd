const Koa = require("koa");
const serve = require('koa-static')
const Router = require("@koa/router");
const app = new Koa();


// 同构开始
import React from "react"
import {renderToString} from 'react-dom/server';
import { StaticRouter, matchPath } from "react-router-dom";
import App from "../shared/App";
import rotues from "../shared/Router";

// store
import { Provider } from "react-redux";
import { createServerStore } from "../shared/store";
const router = new Router()
router.get(['/',"/about"],async (ctx,next) =>{
  const promises = [];
  let html = "";
  const store = createServerStore();
  console.log(store,"12121")
  rotues.some((route) => {
    const match = matchPath(ctx.request.path, route);
    if (match && route.loadData) {
      promises.push(route.loadData(store));
    }
    return match;
  });
  await Promise.all(promises).then((data) => {
    console.log("data", data);
    html = renderToString(
      <Provider store={store}>
        <StaticRouter location={ctx.req.url}>
          <App />
        </StaticRouter>
        </Provider>
    );
  });
  console.log(html)
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
            <script>
            window.REDUX_STORE = ${JSON.stringify(
              store.getState()
            )}</script>
            <script src="./script/bundle.js"></script>

        </body>
    </html>
    `;

})

router.get("/getData", (ctx) => {
  ctx.body = {
    code: 0,
    message: "",
    data: "后端返回的数据",
  };
});
// app.use((ctx) => {
//   ctx.body = `
//     <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>React SSR</title>
//         </head>
//         <body>
//             <div id="root">q132</div>
//             <script src="./script/bundle.js"></script>

//         </body>
//     </html>
//     `;
// });
app.use(serve("assets"))

app.use(router.routes()).use(router.allowedMethods());
app.listen(3001, () => {
  console.log("server is running121");
});
