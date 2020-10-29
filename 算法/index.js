function Car (color,price){
	this.color = color
    this.price = price
  
}
Car.prototype.sale = function(){
    console.log("开始售卖了")
    
}
class Cruze extends Car{
  constructor(props,price){
    super(props)
    this.price = price
    console.log(props,1)
  }

}

let xiaowang = new Cruze("red",140000)

console.log(xiaowang)