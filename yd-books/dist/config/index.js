'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));
var path = require('path');

// const _ = require("lodash");
let config = {
    "viewDir": path.join(__dirname, "..", 'views'),
    "staticDir": path.join(__dirname, "..", 'assets')
};
{
    const prodConfig = {
        port: 81,
        catch:true
    };
    config = _.extend(config, prodConfig);
}
var config$1 = config;
// module.exports = config;

module.exports = config$1;
