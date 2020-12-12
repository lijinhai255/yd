const HtmlWebpackPlugin = require('html-webpack-plugin');
const pluginName = 'HtmlAfterPlugin';
// 拼接tagjs
const assetHelp = data =>{
  let js = [];
  let css= [];
  for (const item of data.js) {
    console.log(item,1212)
    
    js.push(`<script class="lazyload-js" src="${item.replace("../../../assets","")}"></script>`);
  }
  for (const item of data.css) {
    css.push(` <link class="lazyload-css" rel="stylesheet" href="${item.replace("../../../assets","")}">`)
  }
  return {
    js,
    css
  }
}

class HtmlAfterPlugin {
  constructor(){
    this.jsArr = [];
    this.cssArr = [];
  }
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      console.log('The compiler is starting a new compilation...')
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        pluginName, // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          let _html = data.html
          _html = _html.replace("<!-- injectjs -->", this.jsArr.join(""))
          _html = _html.replace("<!-- injectcss -->", this.cssArr.join(""))
          // 修改 路径
          _html = _html.replace(/@components/g,"../../../components")
          _html = _html.replace(/@layouts/g, "../../layouts")
          // console.log(_html, "html")
          data.html = _html
          cb(null, data)
        }
      )
      HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
        pluginName, // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          let {js,css} = assetHelp(data.assets)
          this.jsArr = js
          this.cssArr = css
          console.log(data,"data",js,css)

          cb(null, data)
        }
      )
    })
  }
}

module.exports = HtmlAfterPlugin;