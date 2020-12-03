const obj = {
    name:"lijinhai",
    skill:["es6","react","angular"],
    say:function(){
        for (let i = 0,len =this.skill.length;i<len;i++) {
           setTimeout(()=>{
               console.log(this.skill[i])
           },0)
        }
    }
}
obj.say()