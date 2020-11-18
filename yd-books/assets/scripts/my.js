(function(){
    var root = this;
    var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

    var _ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
      };
      _.each = function(arr,fn){
          for (let i = 0; i < arr.length; i++) {
              fn(arr[i],i)
              
          }
          return arr;
      }
      _.mixin = function(obj) {
        _.each(_.functions(obj), function(name) {
          var func = _[name] = obj[name];
          _.prototype[name] = function() {
            var args = [this._wrapped];
            push.apply(args, arguments);
            return func.apply(_, ...args);
          };
        });
      };
      _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) {
          if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
      };
      _.isFunction = function(obj) {
        return typeof obj == 'function' || false;
      };
      _.mixin(_);
      /**
       * 
       * 1、 每隔一段时间 执行一次函数
       * 2、 第一次触发 立即执行
       * 3、 如果再间隔内助兴 放在间隔末尾执行
       * **/

      _.throttle = function(){
          let isFrist = true;
          let execDate = +new Date();
          let tiemout = null
          if(isFrist){
              cb()
              execDate = +new Date();
              isFrist = false
          }else{
              const currentDate = +new Date();
              if(currentDate - execDate>=t){
                  cb()
                  execDate = +new Date()

              }else{
                tiemout && clearTimeout(tiemout)
                  const timeWate = t - ((+new Date())-execDate)
                  tiemout = setTimeout(() => {
                      execDate = +new Date()
                      
                  }, timeWate);
              }

          }

      }
      return root._ = _

})()