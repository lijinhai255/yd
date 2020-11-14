const Koa = require('koa')
const Router = require('koa-router')
const config = require("./config/index")
// const bodyParser = require('koa-bodyparser')
const errorHandler = require("./middleware/errorHandler")
const staticServer = require("koa-static")
const request = require('request');
const InitController = require("./controllers/index")
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
const app = new Koa()
const router = new Router()
const port = 3010
var render = require('koa-swig');
const co = require('co');
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: config.cache, // disable, set to false
    ext: 'html',
    varControls:["[[","]]"]
  }));

// router.use(bodyParser())
var getData =  function getBoots(){
    return new Promise((resolve,reject)=>{
        request('http://localhost/basic/web/index.php?r=books',  function (error, response, data) {
        if(!error&&response.statusCode==200){
            resolve(data)
        }else{
            reject(err)
        }
    });

    })
    
}
router.get('/api/feedback', (ctx)=>{
    ctx.type = 'html';
    ctx.body = getData().then((data)=>{
        console.log(data,121)
        // ctx.body = data
        return JSON.parse(data) 
    })
    // ctx.body = [121212]

})

// app.use(router.routes()).use(router.allowedMethods())
// app.use(ctx=>{
// 
InitController(app) 

// 
app.use(staticServer(config.staticDir))
app.use(historyApiFallback({ index:"/",whiteList: ['/api'] }));
errorHandler.error(app)
// ctx.body= "hellow world"
// })
const host = `http://localhost:${ config.port }`
app.listen(config.port, () => console.log(`server is running on ${ host }`))
