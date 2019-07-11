'use strict'

/*
 * App Router configuration
 *
 */

 const fs = require('fs');

const jwt = require('jsonwebtoken')

const isAuth = require('./auth').isAuth

module.exports = (app, controller, collections, params) => {
    app // api route
        .get('/', (req, resp) => {
            resp.status(404).redirect('/api')
        })
        .get('/login', (req, resp) => {
            resp.status(404).render('login', { url: params.url + '/api'})
        })
        .get('/api', (req, resp) => {
            resp.status(200).render('api')
        })
        .post('/api', (req, resp) => {
            try {
                const email = req.body.email
                const token = jwt.sign({
                    username: email
                }, req.body.password)

                resp.status(200)
                    .cookie('heroku-api-access-token', JSON.stringify({ email, token }), {
                        expires: new Date(Date.now() + 900000),
                        httpOnly: false
                    })
                    .redirect('/api')
            } catch (err) {
                resp.json(err)
            }
        })
        .get('/api/access-logs', (req, resp) => {
            fs.readFile('../api-access.log', 'utf8', (err, file) => {
                if (err) {
                    resp.status(400).json(err)
                } else {
                    resp.status(200).json(file)
                }
            })
        })

    // all models routes
    collections.forEach(element => {
        app.get(`/api/${element}`, controller[element].getAll)
        app.post(`/api/${element}`, controller[element].post)
        app.post(`/api/${element}-login`, controller[element].login)
        app.get(`/api/${element}/:id`, controller[element].getById)
        app.delete(`/api/${element}/:id`, controller[element].delete)
        app.put(`/api/${element}/:id`, controller[element].update)
    })

    // all not existed routes
    app.get('*', (req, resp) => {
        resp.status(404).redirect('/api')
    })
}