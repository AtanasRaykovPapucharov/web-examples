'use strict'

/*
 * Product mongoose model
 *
 */

module.exports.init = mongoose => {
    try {
        const Schema = mongoose.Schema

        let product = new Schema({
            _id: {
                type: Number
            },
            name: {
                type: String,
                required: true
            },
            category: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        })

        product.statics.getName = () => {
            return 'Product'
        }

        const Product = mongoose.model('Product', product)

        return Product
    } catch (error) {
        throw new Error('Product model error: ' + error)
    }
}