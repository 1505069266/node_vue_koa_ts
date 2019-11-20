/**
 * 一个文件就是一个模块
 * 每个模块都有自己的作用域
 * 
 * 我们使用var来生命的一个变量,他并不是全局的,而是属于当前模块下
 */

//  var a = 100

//  console.log(a);

//  global.a = 200

//  console.log(global.a);


console.log(__filename); //当前文件的位置

console.log(__dirname);  //当前文件所在文件夹的位置

// require('./2.js')

// require('2.js')  //这样是加载node的核心模块

require(`${__dirname}/2.js`)

/**
 * 
 * 1.首先按照加载的模块的模块名称进行查找
 * 2.如果没有找到, 则会在模块文件名称后加上.js的后缀,进行查找
 * 3.如果还没有找到,则会在文件名称后加上.json的后缀,进行查找
 * 4.如果还没有,则会在文件名称后加上.node的后缀,进行查找
 * 
 * 文件名称-> .js --> .json --> .node
 * 
 */