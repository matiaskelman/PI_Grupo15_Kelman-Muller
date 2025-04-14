const db = require('../db/db');
const busquedaControllers =  {
    busqueda: function(req, res) {
      const requerimiento = req.query.search;
      
      const resultados = [
  

      ];
  
      res.render('resultados', { resultados, requerimiento});
    }
  };
  
  module.exports = busquedaControllers;