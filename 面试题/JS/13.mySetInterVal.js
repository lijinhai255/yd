function mySetInterVal(fn,a,b){
    this.a = a;
    this.b = b;
    this.time = 0;
    this.handle = -1;
    this.start = ()=>{
        this.handle = setTimeout(()=>{
            fn()
            this.time++
            this.start();
            console.log(this.a,this.b,this.time)
        },this.a+this.time*this.b)
    }
    this.stop =()=>{
        clearTimeout(this.handle)
        this.time = 0
    }
}
var a = new mySetInterVal(()=>{console.log(121)},1000,2000)
a.start()
a.stop()