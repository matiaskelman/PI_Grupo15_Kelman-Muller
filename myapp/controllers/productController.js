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
  
  },
createProduct: function (req, res) {
  let archivoImg = req.body.archivoImg;
  let nombre = req.body.nombre;
  let descripcion = req.body.descripcion;
  let users_id = 1;

  Productos.create({
    archivoImg: archivoImg,
    nombre: nombre,
    descripcion: descripcion,
    users_id : users_id
  }).then(function(r){
    return res.redirect("/")
  })
}
};

module.exports = productoController;

