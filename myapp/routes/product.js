const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para mostrar un producto
router.get('/', productController.detalle);

// Ruta para agregar productos
router.get('/add', (req, res) => {
  res.render('product-add');
});

module.exports = router;
