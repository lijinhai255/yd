const {argv} = require("yargs")
const _mode = argv.mode || "development"
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require("webpack-merge")

// 读取文件
const {sync} = require("glob")

const HtmlWebpackPlugin = require("html-webpack-plugin")

const HtmlAfterPlugin = require("./config/HtmlAfterPlugin.js")

const {join,resolve} = require("path")
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
        inject:false
    })) 

    }

}
const _mergeConfig = require(`./config/webpack.${_mode}.js`)

const webpackConfig = {
    entry:_entry,
    optimization:{
        runtimeChunk:"single"
    },
    
    module:{
        rules:[
            {
                test:/\.(jpg|jpeg|png|gif)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        name: '[name][hash5].[ext]',
                        outputPath:"img/",
                        limit: 2048,
                    }
                }
            },
            {
                test:/\.ttf$/,
                use:{
                    loader:"file-loader",
                    
                }
            },
            {
                test:/\.less$/,
                use:[
                    {
                        loader: "style-loader",
                      },
                    {
                      loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                           
                          },
                        },
                      },
                    {
                      loader: "less-loader",
                      options: {
                        lessOptions: {
                          strictMath: true,
                        },
                      },
                    },
                  ]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
        ]
    },
    plugins:[
        ..._plugin,
        new MiniCssExtractPlugin({filename:"css/[name].css"}),
        new HtmlAfterPlugin(),

    ],
    resolve:{
        alias: {
            "@":resolve('./src/web')
        }
    }

}

module.exports = merge(webpackConfig,_mergeConfig)