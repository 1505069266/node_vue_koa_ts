

var Person = (function(){
  let gender = "男"
  function P(name,sex){
    this.name = name;
    this.gender = sex
  }

  P.prototype.getSex = function(){
    return gender
  }
  return P
})()

let dd = new Person('朱','女')

console.log(dd.getSex());
console.log(dd.gender);

var a = 11
var a = 22
console.log(a);

const c = 1;

console.log(c=2);


