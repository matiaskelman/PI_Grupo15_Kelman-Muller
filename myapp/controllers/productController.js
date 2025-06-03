// const db = require('../db/db');
const db = require("../database/models"); // Asegurate de que db.js tenga `module.exports = db;`
const logueado = require("../db/logueado");
const op = db.Sequelize.Op;
const Productos = db.Product
const productoController = {
  detalle: function (req, res) {
       let idProducto = parseInt(req.params.id);
    Productos.findByPk(idProducto,{
            include: [
            {association:'Comentario', include: [{ association:'User'}]  }, 
            {association: 'User' } ]})
            
            .then(function(producto){
      console.log(producto);
      res.render('product', { producto });
    })
  
  }
};
module.exports = productoController;

