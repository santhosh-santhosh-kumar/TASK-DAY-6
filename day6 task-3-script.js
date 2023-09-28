//Write a “person” class to hold all the details.

class Person{
    constructor(name,age,area){
      this.name=name;
      this.age=age;
      this.area=area;
    }
    get myDetails(){
  console.log(`Hi! My name is ${this.name} and i m ${this.age} years old,I m from ${this.area}.`);
    }
  }
    var details=new Person("santhosh",27,"gobichettipalayam")
    details.myDetails