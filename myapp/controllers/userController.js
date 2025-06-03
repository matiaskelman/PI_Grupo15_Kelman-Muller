const db = require("../database/models"); // Asegurate de que db.js tenga `module.exports = db;`
const logueado = require("../db/logueado");
const User = db.User;
const op = db.Sequelize.Op;


const userController = {
  register: function(req, res) {
    res.render('register');
  },
  login: function(req, res) {
    res.render('login');
  },
  profile: function(req, res) {
       let pk = req.params.id;
    User.findByPk(pk).then(function(resultado){
         return res.render('perfil', { usuario: resultado});
    })
 
  }
};

module.exports = userController;
