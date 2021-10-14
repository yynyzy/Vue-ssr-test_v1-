const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
const views = require('koa-views')
const path = require('path')

router.get('/', async ctx => {
    await ctx.render('index', {
        title: 'yanyinuo',
        lists: [
            { name: 'yyn', age: 22 }, { name: 'yzy', age: 22 }]
    })
})

app.use(views(path.resolve(__dirname, 'template'), {
    extension: 'pug'
}))


app.use(router.routes())
app.listen(8080, () => {
    console.log('服务器已启动');
})