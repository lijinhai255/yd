const { join } = require("path")
const CopyPlugin = require("copy-webpack-plugin");
var minify = require('html-minifier').minify;
module.exports = {
    output: {
        path: join(__dirname, "../dist/assets"),
        filename: "scripts/[name].[contenthash:5].bundle.js"
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: join(__dirname,"../src/web/views/layouts/layouts.html"), to: "../views/layouts/layouts.html" },
                { from: join(__dirname,"../src/web/components/**/*.html"), 
                to: "../components", 
                transform(content, absoluteFrom) {
                    let result = minify(content.toString('utf-8'), {
                        collapseWhitespace: true
                    })
                    return result;
                },
                transformPath(targetPath, absolutePath) {
                    return targetPath.replace("src/web/components","")
                  },},
            ],
            options: {
                concurrency: 100,
            },
        }),
    ],
}