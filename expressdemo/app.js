var express = require("express");
const request = require('request');
var cheerio = require("cheerio")
var app = express();

var mysql = require("mysql")

app.use(express.static("public"));
var path = require('path');


// 配置mysql
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
  });
  connection.connect();
 
// 配合swig
var swig = require("swig");
app.set("view engine","html")
app.engine("html",swig.renderFile);

// 配置路由
app.use(express.static(path.join(__dirname, 'public')));
app.get("/",function(req,res,next){
    res.render("index")

})
app.get("/request",function(req,res){
    request('https://www.jikexueyuan.com/', function (error, response, body) {
        const $ = cheerio.load(body);//  整个body 的前端选择器
        res.json({
            "Classnum":$(".aside-cList li").length
        })
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
});
})
app.get("/receive",function(req,res,next){
    console.log(req.query.username)
    var post  = {username:req.query.username};
    var query = connection.query('INSERT INTO userinfo SET ?', post, function (error, results, fields) {
        if(error){
            res.json({
                success:"fill",
                data:"插入失败"
            })
        }else{
            res.json({
                success:"ok",
                data:"插入成功"
            })

        }
 
      // Neat!
    });
    // res.render("index")

})

app.get("*",function(req,res,next){
    res.status(404)
    res.end("404")
})
// 启动服务
app.listen(8081,function(){
    console.log("Server is running")
})