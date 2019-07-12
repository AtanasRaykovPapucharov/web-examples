const environment = process.env.NODE_ENV || 'development'

const path = require('path')
const express = require('express')
const app = express()

// App Constants
const params = require('./config')[environment]

// Database
const mongoose = require('mongoose')
const mongoConnection = params.db
const collections = params.collections
const dbRequester = require('./services/db-requester')
// const ngrok = require('ngrok')

// (async () => {
// 	await ngrok.connect(params.port)
// })()

// Express configuration
require('./config/express')(app)
app.use('/', express.static(path.join(__dirname, './public')));

// Mongoose configuration
require('./config/mongoose')(mongoose, mongoConnection)

// Main data object
const db = {}

collections.forEach(element => {
	const modelPath = `./models/${element}-model`
	const model = require(modelPath).init(mongoose)

	db[element] = require('./services/data')(model, dbRequester)
	db[`${element}Model`] = model
})

// Main controller object
const controller = require('./controllers')(collections, db, params)

// Routing
require('./router')(app, controller, params)

// Server listener
app.listen(params.port, () => {
	console.log(`Server is listening on ${params.url}`)
})