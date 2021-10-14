const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data scheme
const productSchema = new Schema({
    name: {type: String, required: false},
    description: {type: String, required: false},
    img: {type: String, requried: false},
    price: {type: Number, required: false},
    qty: {type: Number, required: false}
});

const products = mongoose.model('products', productSchema);

module.exports = products;