'use strict'

/*
 * Order mongoose model
 *
 */

module.exports.init = mongoose => {
    try {
        const Schema = mongoose.Schema

        let order = new Schema({
            id: {
                type: Number
            },
            date: {
                type: Object,
                default: new Date()
            },
            products: {
                type: [Object],
                default: []
            },
            status: {
                type: String,
                required: true
            }
        })

        order.statics.getName = () => {
            return 'Order'
        }

        const Order = mongoose.model('Order', order)

        return Order
    } catch (error) {
        throw new Error('Order model error: ' + error)
    }
}