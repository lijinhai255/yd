// const _ = require("lodash");
// const { join } = require('path');
import _ from "lodash";
import { join } from 'path';
let config = {
    "viewDir": join(__dirname, "..", 'views'),
    "staticDir": join(__dirname, "..", 'assets')
};
if (process.env.NODE_ENV == "development") {
    const devConfig = {
        port: 3010,
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
export default  config;
// module.exports = config;