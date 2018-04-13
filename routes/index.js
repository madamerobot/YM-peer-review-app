const router = require('koa-router')()
const koaBody = require('koa-body')()
const app = require('../server.js')

router.get('/', async(ctx) => {
    await ctx.render('home')
})

module.exports = router