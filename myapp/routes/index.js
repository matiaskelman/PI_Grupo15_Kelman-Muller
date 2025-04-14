var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainControllers');
const busquedaController = require('../controllers/busquedaController');
const productController = require('../controllers/productController');

router.get('/', mainController.index);
router.get('/search', busquedaController.busqueda);
router.get('/products/:id', productController.detalle);

module.exports = router;