const express = require('express');
const router = express.Router();

const product = require('../controllers/product.controller');

router.get('/', product.getProducts);
router.post('/', product.createProducts);
router.get('/:id', product.getProduct );
router.put('/:id', product.editProduct);
router.delete('/:id', product.deleteProduct);

module.exports = router;