const db = require("../database/models"); // Asegurate de que db.js tenga `module.exports = db;`
const logueado = require("../db/logueado");
const Productos = db.Product
module.exports = {
    index: function (req, res) {
        let isLogged = logueado.logueado;
        console.log(isLogged)
        Productos.findAll()
            .then(function(productos) 
            {
                res.render('index', { productos: productos, isLogged: isLogged })
            });
    },

    login: function (req, res) {
        res.render('login');
    },
};
