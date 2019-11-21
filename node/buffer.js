// let a = new Buffer("朱晓乐")

// console.log(a);

// var bf = new Buffer(5)



// console.log(bf);

// bf[1] = 22

// console.log(bf);

//new Buffer(array)

// var bf = new Buffer([1,2,3])

// console.log(bf);

// bf[10] = 10

// console.log(bf);


//new Buffer(string, [encoding])

// var bf = new Buffer('zhuxiaole','utf-8')

// console.log(bf);
// console.log(bf.length);

// for(let i=0; i< bf.length; i++){
//   // console.log(bf[i].toString(16));
//   console.log(String.fromCharCode(bf[i]));
  
// }

var str = "驻西安"

var bf = new Buffer(str)

// bf.write(str)
console.log(bf);
  
console.log(bf.toString());

console.log(bf.toJSON());

console.log(Buffer.isEncoding('utf-8'));

console.log(Buffer.isBuffer(str));
console.log(Buffer.isBuffer(bf));



