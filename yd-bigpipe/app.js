const Koa = require("koa");
const fs = require("fs");
const { resolve } = require("path");
const Router = require("@koa/router");
const { createContext } = require("vm");
const { rejects } = require("assert");

const app = new Koa();
const router = new Router();

// demo1 自己控制ctx.res.write 直接读出html

const file = fs.readFileSync("./index.html")
ctx.res.write(file)
ctx.res.end()

// demo2 读 无需人工干涉 读多少直接吐出来
const filename = path.join(__dirname, "index.html")
const stream = fs.createReadStream(filename)
stream.on("error", (err) => {
    rejects(err)
}).pipe(ctx.res)

//demo3  边读边写
stream.on("data", (chunk) => {
    ctx.res.write(chunk)
})

// demo4  先吐一个占位符 index.html送出去 然后再通过JS慢慢的去填充那个模块