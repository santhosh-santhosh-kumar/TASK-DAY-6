/*
setRadius()
*/
class circle{
    constructor(radius,color){
      this.radius=radius;
      this.color=color;
    }
    set setRadius(modify){
      this.radius=modify
    }
  }
var obj=new circle(1.0,"red")
obj.setRadius=2.0
console.log(obj.radius)