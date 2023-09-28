/*
circumference of circle
*/
class circle{
    constructor(radius,color){
      this.radius=radius;
      this.color=color;
    }
    get circumference(){
        return Math.floor(2*Math.PI*this.radius);
    }
  }
  var obj=new circle(1.0,"red")
  console.log(obj.circumference)