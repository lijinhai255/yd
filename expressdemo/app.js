var express = require("express");

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