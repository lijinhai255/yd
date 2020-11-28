const http = require('http')
const qs = require('querystring')
exports.feed_back = (args,done) => {
    return new Promise( (resolve,reject) => {
        let options = {
            hostname: 'http://localhost',
            path: '/basic/web/index.php?r=books',
            port: '80',
            method: 'get',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const req = http.request(options,(res) => {
            let resData = '';
            res.setEncoding('utf8');
            res.on('data', chunk => {
                resData += chunk;
            })
            res.on('end', () => {
                resolve(resData)
            })
        })
        req.on('error', e => {
            console.log('error:',e.message)
            reject(e.message)
        })
        req.write(ctx)
        req.end();
    } )
}