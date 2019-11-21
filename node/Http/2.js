const http = require('http')
const url = require('url')
const fs = require('fs')

let server = http.createServer((req,res)=>{
  let urlStr = url.parse(req.url)
  console.log(`${__dirname}\\index.html`);
  console.log(urlStr.pathname);
  switch (urlStr.pathname){
    case '/':
      sendData(`${__dirname}\\index.html`,req,res)
      break;
    case '/user':
      sendData(`${__dirname}\\user.html`,req,res)
      break;
    default:
      //其他情况
      
      break;
  }
})

function sendData(file,req,res){
  fs.readFile(file,(err,data)=>{
    if(err){
      res.write(404,{
        "content-type": 'text/html;'
      })
      res.end('<h1>404错误哦</h1>')
    }else{
      console.log(data);
      res.writeHead(200,{
        "content-type": 'text/html;'
      })
      res.end(data)
    }
  })
}

server.listen(8080)