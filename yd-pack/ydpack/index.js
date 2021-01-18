const Compiler = require('./Compiler');

const options = require('../ydpack.config');

const compiler = new Compiler(options)
// console.log(options.plugins,"options.plugins",compiler)

for(const plugin of options.plugins){
    // console.log(plugin,"plugin-plugin")
    plugin.apply(compiler)
}

compiler.run()