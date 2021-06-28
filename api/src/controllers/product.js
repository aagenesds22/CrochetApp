
const {Product} = require('../models/Product.js');


async function createProduct(req, res, next) {

    try {

        await Product.create({
            name: req.body.name,
            description: req.body.description,
            pictures: '',
        })

        return res.status(200).send('Allowed. Created');

    }catch(err){

        console.log(err)

    } 

    res.status(200).send('Allowed. Not created');
}


async function modifyProduct(req, res, next) {

    await Product.findOne()
    res.status(200).send('Modified');
}



module.exports = 
        {
            createProduct,
            modifyProduct}