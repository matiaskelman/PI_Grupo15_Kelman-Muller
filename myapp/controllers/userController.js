const db = require('../db/db');


const userController = {
  register: function(req, res) {
    res.render('register');
  },
  login: function(req, res) {
    res.render('login');
  },
  profile: function(req, res) {
    let Usuario = db.usuario; 
    res.render('perfil', { perfil:Usuario});
  }
};

module.exports = userController;
