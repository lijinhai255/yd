
import img from "./assets/img/WechatIMG11.jpeg"
import ttf from "./assets/front/1.ttf"
import "./assets/css/index.less"
const s = ()=>{
    console.log(121)
}
s()
// console.log(img)
// console.log(ttf)
console.log(module,121)

if(module.hot){
    module.hot.accept("./list",()=>{
        console.log("更新完成")
    })
}


