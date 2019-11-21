const fs = require('fs')

fs.open(`${__dirname}/1.txt`, 'r', (err,data)=>{
  if(err){
    console.log(err);
    return
  }
  let bf = new Buffer(20)
  fs.read(data, bf, 0, 20, 0, (err, len,newbf)=>{
    console.log(bf);
    console.log(bf.toString());
    console.log(newbf.toString());
    console.log(bf == newbf);
  })
})