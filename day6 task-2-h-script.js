/*
setColor()
*/
class circle{
    constructor(radius,color){
      this.radius=radius;
      this.color=color;
    }
    set setColor(modify){
      this.color=modify
    }
  }
var obj=new circle(1.0,"red")
obj.setColor="white"
console.log(obj.color)