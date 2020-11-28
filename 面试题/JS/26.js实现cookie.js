function setCookit(name,value){
    var  Days = 30 ;
    var  exp = new Date();
    exp.setTime(exp.getTime()+Days*24*60*60*1000)
    document.cookie = name + "=" +escape(value)+";expires="+exp.toGMTString()
}
// 读取cookie
function getCookie(name){
    var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)")
    if(arr=document.cookie.match(reg))
    return unescape(aarr[2])
    else
    return null
}

function delCookie(){
    var exp = new Date()
    exp.setTime(exp.getTime()-1)
    var cval = getCookie(name)
    if(cval!=null){
        document.cookie = name + "=" +cval +";expires="+exp.toGMTString()

    }
}