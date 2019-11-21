const Koa = require('koa')
const Router = require('koa-router')
const router = new Router()
const Swig = require('koa-swig')
const co = require('co')
let app = new Koa()
const koaStaticCache = require('koa-static-cache')

/**
 * 处理静态文件
 */
app.use(koaStaticCache('./static',{
  prefix: '/static',
  gzip: true
}))

/**
 * 存储所有的任务数据
 *  当前数据是储存在服务器中的
 */
let datas = {
  appName: 'TodoList',
  skin: 'index.css',
  tasks:[
    {id:1,title: '测试任务1',done: true},
    {id:2,title: '学习koz',done: false},
    {id:3,title: '爱璇璇',done: true}
  ]
}


/**
 * 设置模板引擎
 */
app.context.render = co.wrap( Swig({
  root: __dirname + '/views',
  autoescape: false,  //是否html编码,为了安全起见,一般是false   可以解析html编码
  cache: false,
  // cache: 'memory',  // 把解析后的机构保存在内存中, 比如每次访问都去解析模板
  //一般用于线上生成环境
  ext: 'html'
}))

/**
 * 首页,用于展示任务清单
 * 
 */
router.get('/',async ctx=>{
  
  ctx.body = await ctx.render('index.html',{
    datas: datas
  })

})

/**
 * 添加,添加新的任务
 */
router.get('/add',ctx=>{
  ctx.body = '/add'
})

/**
 * 改变,修改任务的状态
 */
router.get('/change/:id', ctx => {
  ctx.body = '/change' + ctx.params.id
})

/**
 * 删除任务
 */
router.get('/remove/:id', ctx=>{
  ctx.body = '/remove' + ctx.params.id
})

app.use(router.routes())


app.listen(80)