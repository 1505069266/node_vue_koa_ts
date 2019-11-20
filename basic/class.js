/**
 * 
 * class 语法
 * 
 */

//  const Miaov = function (a,b){
//    this.a = a;
//    this.b = b;
//    return this;
//  }

//  Miaov.prototype = {
//    constructor: Miaov,
//    print: function(){
//      console.log(this.a + ' ' + this.b);
//    }
//  }

//  const miaov = new Miaov('hello', 'world').print()

class Miaov{
  constructor(a,b){
    this.a = a;
    this.b = b;
    return this;
  };
  print(){
    console.log(this.a + " " + this.b);
  }
}


let miaov = new Miaov('hello', 'world')

miaov.print()

console.log(typeof Miaov);

console.log(Miaov.prototype);

console.log(Object.keys(Miaov));