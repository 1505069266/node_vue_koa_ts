/**
 * 
 * http://www.baidu.com
 * 
 * http请求 baidu.com => 
 * 1.用户通过浏览器发送一个http的请求到指定的主机
 * 2.服务器接收到该请求,对该请求进行分析和处理
 * 3.服务器处理完成以后, 返回对应的数据到用户机器
 * 4.浏览器接收到服务器返回的数据, 并根据接收的数据进行分析和处理
 * 
 */

/**
 * 客户端      服务端
 * 由客户端发送一个http请求到指定的服务端 -> 服务端接收并处理请求 -> 返回数据到客户端
 * 
 * Http模块
 * 
 */

/**
 * 搭建一个http的服务器,用户处理用户发送的http请求
 * 需要使用http模块
 */
//导入模块
const http = require('http')

//创建web服务
let server = http.createServer((req,res)=>{

  res.setHeader('name','zxl')

  //响应头放在write前面
  res.writeHead(200, '', {
    'Content-Type': 'text/html;charset=utf-8'
  })

  //html
  res.write('<h1>23213</h1>')
  
  res.end()
})

//监听服务
//通过端口分清服务在那里运行,不能冲突,1000+端口是可以使用的端口
//默认是随机的
server.listen(6018,'localhost');

server.on('error', (err)=>{
  console.log(err);
})

server.on('request',()=>{
  console.log('有客户请求了服务器');
})

server.on('listening',()=>{
  console.log('listening');
})

console.log(server.address());