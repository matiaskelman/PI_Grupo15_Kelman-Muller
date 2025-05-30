const db = require('../db/db'); // Asegurate de que db.js tenga `module.exports = db;`
const logueado = require("../db/logueado");
module.exports = {
    index: function(req, res) {
        let isLogged = logueado.logueado;
        console.log(isLogged)
        let productos = db.posts; // 'posts' es la propiedad que tiene los productos
        res.render('index', { productos: productos, isLogged: isLogged }); // Pasás los productos a la vista
    },

    login: function(req, res) {
        res.render('login');
    },

    productos: function(req, res) {
        let productos = db.posts;
        res.render('productos', { productos });
    }
};
