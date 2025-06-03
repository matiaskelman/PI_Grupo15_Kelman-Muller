const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para mostrar un producto
router.get('/', productController.detalle);

// Ruta para agregar productos
router.get('/add', (req, res) => {
  res.render('product-add');
});
router.post('/product-add', productController.createProduct)

module.exports = router;
