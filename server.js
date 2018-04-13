require('dotenv').config()
const Koa = require('koa')
const app = new Koa()

const koaStatic = require('koa-static')
const views = require('koa-views')
const routes = require('./routes')

const nunjucksMiddleware = require('./lib/middleware.js')
app.use(nunjucksMiddleware)

//Serving static files
app.use(koaStatic(__dirname + '/static'))

app.use(routes.allowedMethods())
app.use(routes.routes())

app.listen(process.env.PORT)

module.exports = app