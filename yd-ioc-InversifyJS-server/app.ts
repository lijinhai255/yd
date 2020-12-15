import "reflect-metadata"
import "./ioc/loader"
import { Container } from "inversify"
import {InversifyKoaServer} from "inversify-koa-utils"
import { buildProviderModule } from "inversify-binding-decorators"

const container = new Container()

container.load(buildProviderModule())

let server = new InversifyKoaServer(container)

let app = server.build()
app.listen(3000,()=>{
    console.log("inversify-server 启动了")
})