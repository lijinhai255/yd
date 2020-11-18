const Rize = require("rize")
const rize = new Rize()
// rize
//   .goto('https://github.com/')
//   .type('input.header-search-input', 'node')
//   .press('Enter')
//   .waitForNavigation()
//   .assertSee('Node.js')
//   .end()   

rize
    .goto('http://localhost:3010/books/list')
    .assertTitle('图书列表')
    .end() // Don't forget to call `end` function to exit browser!