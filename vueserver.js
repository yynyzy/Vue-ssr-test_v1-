const Koa = require('koa')
const Router = require('koa-router')
const Vue = require('vue')
const render = require('vue-server-renderer').createRenderer()


const app = new Koa()
const router = new Router()

const vue = new Vue({
    data() {
        return {
            msg: '严以诺'
        }
    },
    template: `
    <div>
        <h1>yanyinuo</h1>
    </div>
    `
})

router.get('/', async ctx => {
    render.renderToString(vue, (err, html) => {
        if (!err) {
            ctx.body = `<html><body>${html}</body></html>`
        }
    })
})

app.use(router.routes())
app.listen(3001)