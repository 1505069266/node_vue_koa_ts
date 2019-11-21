/**
 * 
 * 
 * @anthor 朱晓乐
 * 
 * 自动创建一个项目
 * 
 * 
 */

let projectData = {
  'name': 'project',
  'fileData': [
    {
      'name': 'css',
      'type': 'dir'
    },
    {
      'name': 'js',
      'type': 'dir'
    },{
      'name': 'images',
      'type': 'dir'
    },{
      'name': 'index.html',
      'type': 'file',
      'content': '<html></html>'
    }
  ] 
}

let fs = require('fs')

if(projectData.name){
  fs.mkdir(projectData.name,()=>{
    let fileData = projectData.fileData

  if(fileData){
    fileData.map((item)=>{
      console.log(item);
      item.path = projectData.name + '/' + item.name
      switch(item.type){
        case 'dir':
          fs.mkdir(item.path,()=>{
            
          })
        case 'file':
          fs.writeFile(item.path,item.content,(err,data)=>{
            
          })
      }
    })
  }
  })

  
}