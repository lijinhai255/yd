#!/usr/bin/env node
const shell = require("shelljs")
const path = require("path")

const chokidar = require("chokidar")

const from = "./\\*"
const to = "root@47.95.203.53:/root/nodeApp"


const expectPath = path.join(__dirname,"./expect.exp")
// 创建监听器
const password = "lijinhai@12345"
const watcher = chokidar.watch(process.cwd())
watcher.on("change",function(filePath){
    console.log("filePath",filePath)
shell.exec(`expect ${expectPath} ${filePath} ${to} ${password}`)


})
// shell.exec(`scp ${from} ${to}`)
console.log(11)