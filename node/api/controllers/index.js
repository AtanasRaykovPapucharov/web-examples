/*
 * HTTP controller
 *
 */

module.exports = (collections, db, params) => {
    const controller = {}

    collections.forEach(element => {
        controller[element] = require(`./${element}-controller`)(db[element], db[`${element}Model`], params)
    })

    return controller
}