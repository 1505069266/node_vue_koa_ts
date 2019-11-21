const Koa = require('koa')//http

//创建一个http服务器,监听请求
const app = new Koa()

//logger
app.use(async (ctx,next)=>{
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url}-${rt}`);
})

//x-response-time
app.use(async (ctx, next)=>{
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time',`${ms}ms`)
})

app.use(async ctx=>{
  console.log(ctx.request);
  ctx.throw(404)
  ctx.body = "hello world"
})

app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});

//监听当前机器的地址,端口
app.listen(6018)