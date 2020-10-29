 const data = async(()=>{
    return await new Promise((resolve, reject) => {});
 })();

 data.then(()=>{})


 //top level await 
 const data =   await new Promise((resolve, reject) => {});