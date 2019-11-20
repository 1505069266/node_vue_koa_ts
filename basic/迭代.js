let arr = ['a','b','c']

for(let i in arr){
  console.log(i);
}

for(let i of arr){
  console.log(i);
}


let obj = {
  a:1,
  b:2,
  c:3
}

for(let i in obj){
  console.log(i);
}

obj[Symbol.iterator] = function(){
  let a=  1;
  return{
    next: function(){
      a++
      
        if(a >= 10){
          return{
          value: 'we',
          done: true
          }
        }else{
          return{
            value:'wwewee',
            done:false
          }
        }
    }
  }
}

for(let i of obj){
  console.log(i);
}