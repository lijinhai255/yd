document.onclick = function(e){
    let e = e|| window.event;// 处理兼容，获取事件对象
    let o = e["target"] || e["srcElement"];
    alert(o.target.toLowerCase())
}

// 优雅实现
function elementName(evt){
    evt = evt || window.event;
    var selected = evt.target||evt.srcElement
    var eleName = selected&&selected.tagName?selected.target.toLowerCase():"no tagName"
    alert(eleName)
}
window.onload = function(){
    var el = document.getElementsByTagName("body")
    el[0].onclick = elementName
}