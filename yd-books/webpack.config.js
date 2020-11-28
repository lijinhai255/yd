const {argv} = require("yargs")
const _mode = argv.mode || "development"

const { merge } = require("webpack-merge")

// 读取文件
const {sync} = require("glob")

const HtmlWebpackPlugin = require("html-webpack-plugin")

const {join} = require("path")
const files = sync("./src/web/views/**/*.entry.js")
let _entry = {}
// 读取配置文件
let _plugin = []
for(let item of files){
    if(/([a-zA-Z]+-[a-zA-Z]+)\.entry.js/.test(item)){
    console.log(item,RegExp.$1)
        const entryKey = RegExp.$1
        _entry[entryKey] = item
        const [dist,template] = entryKey.split("-")
       _plugin.push(new HtmlWebpackPlugin({
        filename:`../views/${dist}/pages/${template}.html`,
        template:`./src/web/views/${dist}/pages/${template}.html`,
        chunks:["runtime",entryKey],
        // inject:false
    })) 

    }

}
const _mergeConfig = require(`./config/webpack.${_mode}.js`)

const webpackConfig = {
    entry:_entry,
    optimization:{
        runtimeChunk:"single"
    },
    output:{
        path:join(__dirname,"./dist/assets"),
        filename:"scripts/[name].bundle.js"
    },
    plugins:[
        ..._plugin
    ]

}

module.exports = merge(webpackConfig,_mergeConfig)