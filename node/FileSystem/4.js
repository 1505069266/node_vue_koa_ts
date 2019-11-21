const fs = require('fs')

let filename = '2.txt'

// fs.writeFile(filename, 'world', ()=>{
//   console.log(arguments);
// })


// fs.appendFile(filename, '朱晓乐', ()=>{
//   console.log('OK');
// })


//如何判断一个文件是否存在  fs.exists  res是true表示文件存在  false不存在
fs.exists( filename ,(res)=>{
  if(res){
    fs.appendFile(filename, '朱晓乐', ()=>{
      console.log('OK');
    })
  }else{
    fs.writeFile(filename, 'world', ()=>{
      console.log(arguments);
    })
  }
})