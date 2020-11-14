const _ = require("lodash");
const { join } = require('path');
let config = {
    "viewDir": join(__dirname, "..", 'views'),
    "staticDir": join(__dirname, "..", 'assets')
};
if (process.env.NODE_ENV == "development") {
    const devConfig = {
        port: 3000,
        catch:false
    }
    config = _.extend(config, devConfig);
}

if (process.env.NODE_ENV == "production") {
    const prodConfig = {
        port: 80,
        catch:true
    }
    config = _.extend(config, prodConfig);
}
module.exports = config;