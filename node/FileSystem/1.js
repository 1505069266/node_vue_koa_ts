
let fs = require('fs')

/**
 * fs.open(path, [mode], callback)
 * path:要打开的文件的路径
 * flags: 打开文件的方式  读/写
 * mode: 设置文件的模式 读/写/执行   4/2/1
 * 
 *  callback: 回调
 *    err: 文件打开失败的错误再err里面, 如果成功err=null
 *    fd: 被打开文件的标识
 */

console.log(__dirname);
fs.open(`${__dirname}/1.txt`, 'r', (err,data)=>{
  console.log(err);
  console.log(data.toString());
})

 