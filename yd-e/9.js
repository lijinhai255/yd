$('#test').click(function(argument) { 
    console.log(1); 
   }); 
setTimeout(function() { 
    console.log(2); 
    while (true) { 
        console.log(Math.random()); 
       }
   }, 10000); 
