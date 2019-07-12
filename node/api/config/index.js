'use strict'

/*
 * Environment parameters
 *
 */

module.exports = {
    development: {
        db: 'mongodb://admin:1qazxsw2@ds131983.mlab.com:31983/products',
        collections: ['user', 'product', 'order'],
        port: 3001,
        url: 'http://localhost:3001'
    },
    production: {
        db: 'mongodb://admin:1qazxsw2@ds131983.mlab.com:31983/products',
        collections: ['user', 'product', 'order'],
        port: process.env.PORT,
        url: 'https://node-api-products.herokuapp.com/'
    }
}