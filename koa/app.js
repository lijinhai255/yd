const Koa = require('koa');
const router = require('koa-simple-router')
const koaConvert = require("koa-convert")
const serve = require("koa-static")
const path = require("path")
const co = require("co")
var render = require('koa-swig');

let app = new Koa()


app.context.render = co.wrap(render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody:false
  }))



app.use(router(_ => {
  _.get('/', (ctx, next) => {
    ctx.body = 'hello'
  })
//   app.use(async ctx => ctx.body = await ctx.render('index'));

  _.get('/index', async(ctx, next) => {
    ctx.body = await ctx.render('index.html');
  })
})
)

app.use(koaConvert(serve(path.join(__dirname,"./public"))))

app.listen(3000,()=>{
    console.log("server started")
});