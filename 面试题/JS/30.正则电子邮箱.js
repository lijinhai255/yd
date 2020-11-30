var isEmail = function(val){
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z)-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var domains = ["qq.com","163.com"]
    console.log(pattern.test(val))
    if(pattern.test(val)){
        var domain = val.substring(val.indexOf("@")+1)
        console.log(domain,"domain")
        for (let i = 0; i < domains.length; i++) {
            if(domain===domains[i]){
                return true

            }
            
        }
    }
}
console.log(isEmail("12121212@163.com"))