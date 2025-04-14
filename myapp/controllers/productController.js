const db = require('../db/db');

const productoController = {
  detalle: function (req, res) {
    let idProducto = parseInt(req.params.id);
    let producto = db.posts.find(p => p.id === idProducto);
    res.render('product', { producto });
  }
};

module.exports = productoController;