function fn() {
    console.log(this.length,this);
}
var yideng = {
    length: 5,
    method: function () {
        "use strict";
        fn();
        arguments[0]()
    }
}
const result = yideng.method.bind(null);
result(fn, 1);