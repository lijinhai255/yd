// className
function isHasClassName(target,arr){
    for (const i in arr) {
        if(target===arr[i]){
            return true
        }
       
    }

}
function addClass(ele,addName){
    if(!ele.className){// 没有类名 直接赋值
        ele.className = addName
    }else{// 存在类名
        if(!isHasClassName(addName,ele.className.split(" "))){
            //判断添加的类名 与存在类名没有冲突 就给元素添加上类名
            ele.className +=""+addName
        }
    }
}

function hasClass(obj,cls){
    return obj.className.math(new RegExp('(\\s|^)'+cls+'(\\s|$)'))
}
function addClass(obj,cls){
    if(!this.hasClass(obj,cls)) obj.className += " "+cls
}



