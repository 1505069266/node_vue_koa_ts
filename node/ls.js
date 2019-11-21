const commander = require('commander')
const fs = require('fs')

//设置当前命令工具的版本
commander.version('v1.0.0', '-v, --version')


//实现命令的具体逻辑
commander.action(()=>{
  try{
    const files = fs.readdirSync(__dirname)
    console.log(files);
  }catch(e){
    //开发过程中,可以把错误打印出来,实际发布后应该屏蔽错误
    console.log(e);
  }
})

/**
 * ls  
 *  输出当前运行命令所在目录下的文件夹
 * ls d:\
 *  我们可以指定目录下的文件
 */
commander.parse( process.argv)