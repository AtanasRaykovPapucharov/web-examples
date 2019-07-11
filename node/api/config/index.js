'use strict'

/*
 * Environment parameters
 *
 */

module.exports = {
    development: {
        db: 'mongodb://localhost:27017/api-db-name',
        collections: ['user', 'product', 'order'],
        port: 3001
    },
    production: {
        db: 'mongodb://admin:1qazxsw2@ds133260.mlab.com:33260/mongocloud',
        collections: ['user', 'product', 'order'],
        port: process.env.PORT
    }
}