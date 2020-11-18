var http = require("http");
http.createServer(function(req,res){
    res.writeHead(200);
    res.end("hellow world\n")

}).listen(8000)