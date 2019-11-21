const fs = require('fs')

fs.readFile('2.txt', (err,data)=>{
  if(err){
    console.log(err);
    return
  }
  console.log(data.toString());
})


// fs.unlink('2.txt',(err)=>{ //删除文件
//   if(err){
//     console.log(err);
//     console.log('删除成功');
//   }
// })

// fs.rename() //文件重命名

//fs.watch()//监听文件状态变化

// fs.mkdir('./ww',()=>{  //创建文件夹

// })

// fs.rmdir('./ww',()=>{  //删除文件夹

// })


fs.readdir('./',(err,fileList)=>{ //获取当前文件夹下的文件
  fileList.forEach((item)=>{
    fs.stat(item,()=>{
      console.log(arguments);
    })
  })
})