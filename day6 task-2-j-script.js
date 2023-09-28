/*
area of circle
*/
class circle{
    constructor(radius,color){
      this.radius=radius;
      this.color=color;
    }
    get area(){
        return Math.floor(2*Math.PI*Math.pow(this.radius,2));
    }
  }
  var obj=new circle(1.0,"red")
  console.log(obj.area)