const nunjucks = require('nunjucks')

const env = nunjucks.configure(__dirname + '/../views/', {
    watch: true
})

module.exports = async(ctx, next) => {
    ctx.render = function (template, data) {
        ctx.body = env.render(template + '.njk', data)
    }
    await next()
}