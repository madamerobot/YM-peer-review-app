const router = require('koa-router')()
const koaBody = require('koa-body')()
const app = require('../server.js')

router.get('/', async(ctx) => {
    await ctx.render('home')
})

router.get('/register', async(ctx) => {
    await ctx.render('registration')
})

router.get('/users', async(ctx) => {
    await ctx.render('user-overview')
})

router.get('/user/:username', async(ctx) => {
    await ctx.render('user-detail')
})

router.get('/conflicts', async(ctx) => {
    await ctx.render('conflict-overview')
})

router.get('/conflicts/:username', async(ctx) => {
    await ctx.render('conflict-detail')
})

router.get('/underallocated', async(ctx) => {
    await ctx.render('underallocated-overview')
})

module.exports = router