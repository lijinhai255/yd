var User = /** @class */ (function () {
    function User(name, age) {
    }
    return User;
}());
function init() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    var name = info[0];
    console.log('name', name);
}
init("京城一灯", 20);
