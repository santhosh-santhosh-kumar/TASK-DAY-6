/*
toString()
*/
class circle{
    constructor(radius,color){
      this.radius=radius;
      this.color=color;
    }
    get string(){
        return `circle [radius=${this.radius},color=${this.color}]`;
    }
  }
  var obj=new circle(1.0,"red")
  console.log(obj.string)