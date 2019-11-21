const fs = require('fs')

fs.open(`${__dirname}/1.txt`,'r',(err,data)=>{
  console.log(err);
  console.log(data);
})

let fd = fs.openSync(`${__dirname}/1.txt`, 'r')

console.log(fd);

console.log("OK");