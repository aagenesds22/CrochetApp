const {Router} = require('express');
const router = Router();
const {createProduct, modifyProduct} = require('../controllers/product')


router.post('/create_product', createProduct)
router.put('/:id/update', modifyProduct)

module.exports = router;