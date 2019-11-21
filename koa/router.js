const Koa = require('koa')
const Router = require('koa-router')
const router = new Router()

let app = new Koa()

router.get('/',async (ctx,next)=>{
  ctx.response.body = `<h1>我是首页</h1>`
})

app.use(router.routes());


app.listen(8000)