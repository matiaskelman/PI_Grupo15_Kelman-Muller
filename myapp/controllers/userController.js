const db = require("../database/models"); // Asegurate de que db.js tenga `module.exports = db;`
const logueado = require("../db/logueado");
const Users = db.User;
const op = db.Sequelize.Op;


const userController = {
  register: function (req, res) {
    res.render('register');
  },
  login: function (req, res) {
    res.render('login');
  },
  profile: function (req, res) {
    let pk = parseInt(req.params.id);

    Users.findByPk(pk, {include: [{ association: 'Product' }]})
      .then(function (user) {
        console.log(user);
        return res.render('perfil', { usuario: user });
      })
  }
};

module.exports = userController;
