const {Router} = require('express');
const router = Router();
const createProduct = require('../controllers/createProduct');
const product = require('./product');

router.use('/product', product);


module.exports = router;