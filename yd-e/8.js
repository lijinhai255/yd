let a = 0;
let yideng = async () => {
    a = a + await 10;
    console.log(a)
}
yideng();
console.log(++a);


// async function async1(){ 
//     console.log(1) 
//     await async2(); 
//     console.log(3) 
//    } 
//    async function async2(){ 
//     console.log(2) 
//    } 
//    async1(); 
//    console.log(4)



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg); 
        var value = info.value;
    }
    catch (error) {
        reject(error
        ); return;
    }
    if (info.done) {
        resolve(value);
    }
    else {
        Promise.resolve(value).then(_next, _throw);
    }
}

function _asyncToGenerator(fn) {
    return function () {
        var self = this,
            args = arguments;
        return new Promise(
            function (resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                } function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                } _next(undefined);
            });
    };
}

let a = 0;

let yideng = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
        a = a + (yield 10);
        console.log(a);
    });

    return function yideng() {
        return _ref.apply(this, arguments);
    };
}();