//write a class to calculate the uber price.

class priceCalculate{
    constructor(baseRate,perMilePrice,mile){
      this.baseRate=baseRate;
      this.perMilePrice=perMilePrice;
      this.mile=mile;
    }
    get calculate(){
             return this.baseRate+(this.perMilePrice*this.mile)
    }
  }
    var details=new priceCalculate(60,10,3)
    console.log(details.calculate)