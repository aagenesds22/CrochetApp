const {Schema, model} = require('mongoose');


const dbProduct = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    pictures: {
        type: [String],
    }
})

const Product = model('Product', dbProduct); 


module.exports = {Product};

