const busquedaControllers =  {
    busqueda: function(req, res) {
      const requerimiento = req.query.search;
      
  
      res.render('resultados', { resultados, requerimiento});
    }
  };
  
  module.exports = busquedaControllers;