
module.exports = function mainDoIt() {
    const program = require("commander")
    program.version(require("./../package.json").version)
    program
        .command('init ', '初始化')
        .command('list <number> [number]', '所有列表')
    // .action(()=>console.log("12121"))

    program.parse(process.argv)

}
