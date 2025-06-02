const db = require('../db/db'); // Asegurate de que db.js tenga `module.exports = db;`
let dbS = require("../database/models")
const logueado = require("../db/logueado");
module.exports = {
    index: function (req, res) {
        let isLogged = logueado.logueado;
        console.log(isLogged)
        dbS.Productos.findAll()
            .then(function(productos) 
            {
                res.render('index', { productos: productos, isLogged: isLogged })
            });
    },

    login: function (req, res) {
        res.render('login');
    },

    productos: function (req, res) {
        let productos = db.posts;
        res.render('productos', { productos });
    }
};
