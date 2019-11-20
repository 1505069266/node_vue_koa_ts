let fn = ()=>{
  var a = 1;
  console.log(this.a);
}

let fn1 = function(){
  var a = 222;
  console.log(this);
}

fn()
fn1()


//箭头函数的this在函数创建期间就绑定好了,箭头函数的this指向创建该函数的作用域
let fn7 = ()=>{
  console.log(this);
}





