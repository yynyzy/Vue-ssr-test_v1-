const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const ejs = require('koa-ejs')

const app = new Koa()
const router = new Router()

ejs(app, {
    root: path.resolve(__dirname, 'template'),
    layout: false,
    viewExt: 'ejs',
    cache: false,
    debug: false,
})

router.get('/', async ctx => {
    await ctx.render('index', {
        title: 'yanyinuo',
        lists: [
            { name: 'yyn', age: 22 }, { name: 'yzy', age: 22 }]
    })
})

app.use(router.routes())
app.listen(3000, () => {
    console.log('服务器已启动');
})