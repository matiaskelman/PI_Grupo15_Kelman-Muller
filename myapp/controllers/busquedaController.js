const db = require("../database/models"); // Asegurate de que db.js tenga `module.exports = db;`
const logueado = require("../db/logueado");
const op = db.Sequelize.Op;
const Productos = db.Product
const busquedaControllers =  {
    busqueda: function(req, res) {
      const requerimiento = req.query.search;
      
  Productos.findAll(
   {    where: [
                    {  nombre: {[op.like]: `%${requerimiento}%` } }
                ]}
  ).then(function (resultados) {
    console.log(resultados)
return  res.render('resultados', { resultados, resultados});
  })
    
  
     
    }
  };
  
  module.exports = busquedaControllers;