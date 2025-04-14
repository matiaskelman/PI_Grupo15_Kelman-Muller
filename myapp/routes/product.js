const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para mostrar un producto
router.get('/', productController.detalle);

module.exports = router;