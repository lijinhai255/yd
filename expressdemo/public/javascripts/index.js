console.log($)
$(function(argument){
    $("#btnsubmit").click(function(event){
        event.preventDefault();
        console.log(event)
        $.ajax({
            url:"/receive",
            type:"get",
            dataType:"json",
            data:{
                username:$("#username").val()
            },
            success:function(data){
                console.info(data)

            },
            error:function(){

            }
        })
        
    })


})