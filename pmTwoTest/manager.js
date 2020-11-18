// master
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
//  console.log(cluster.isMaster)
if (cluster.isMaster) {
    console.log(numCPUs);
    for (var i = 0; i < numCPUs; i++) {
        var worker = cluster.fork();
    }
} else {
    console.log(1)
    require("./app.js");
}