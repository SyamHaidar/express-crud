const express = require('express')
const product = require('../controllers/product')

// -----------------------------------------------------------------------------

const router = express.Router()

router.get('/', product.getProducts)
router.get('/:id', product.getProduct)
router.post('/', product.create)
router.patch('/:id', product.update)
router.delete('/:id', product.delete)

module.exports = router
