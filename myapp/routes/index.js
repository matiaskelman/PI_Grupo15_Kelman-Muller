const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainControllers');

// Rutas principales
router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/productos', mainController.productos);

module.exports = router;
