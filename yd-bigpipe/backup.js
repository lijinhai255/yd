const Koa = require("koa");
const fs = require("fs");
const { resolve } = require("path");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

const task1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(`<script>addHtml("part1","第一次需要传输的内容")</script>`)
        }, 2000)
    })
}
const task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(`<script>addHtml("part2","第二次需要传输的内容")</script>`)
        })
    }, 3000)
}

router.get("/", async(ctx, next) => {
    const filename = resolve(__dirname, "index.html")
    const stream = fs.createReadStream(filename)
    ctx.status = 200;
    ctx.type = "html"
    stream.on("data", (chunk) => {
        ctx.res.write(chunk)
    })
    const result = await task1()
    ctx.res.write(result)
    const result2 = await task2()
    ctx.res.write(result2)
    ctx.res.end()

})
app.use(router.routes()).use(router.allowedMethods())
app.listen(8085)