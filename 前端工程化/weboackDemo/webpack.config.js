const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");
const config= {
    //默认production 打包文件压缩， 开发室development 不被压缩
    // mode:"production",
    mode:"development",
    devtool:"cheap-module-source-map",
    // devtool:"cheap-module-eval-source-map",
    entry:{
        index:"./src/index.js",
        demo:"./src/demo.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 10000,
        hot:true

      },
   
    output:{
        filename:"[name].[hash:5].js",
        path:path.resolve(__dirname,"dist"),
        publicPath:"./"
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
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template:"./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
]

}
module.exports = config