'use strict'

/*
 * App Router configuration
 *
 */

 const fs = require('fs');

module.exports = (app, controller, params) => {
    console.log('Controller:')
    console.log(controller)
    
    app // api routes
        .get('/api', (req, resp) => {
            resp.status(200).render('api')
        })

        .get('/login', (req, resp) => {
            resp.status(404).render('login', { url: params.url + '/login'})
        })
        .post('/login', controller.user.login)

        .get('/api/access-logs', (req, resp) => {
            fs.readFile('../api-access.log', 'utf8', (err, file) => {
                if (err) {
                    resp.status(400).json(err)
                } else {
                    resp.status(200).json(file)
                }
            })
        })

        .get('/api/product', controller.product.getAll)
        .post('/api/product', controller.product.post)
        .put('/api/product', controller.product.update)
        .delete('/api/product', controller.product.delete)

        .get('/api/order', controller.order.getAll)
        .post('/api/order', controller.order.post)
        .put('/api/order', controller.order.update)
        .delete('/api/order', controller.order.delete)

    // all not existed routes
    app.get('*', (req, resp) => {
        resp.status(404).redirect('/api')
    })
}