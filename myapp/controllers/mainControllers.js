const db = require('../db/db'); // Asegurate de que db.js tenga `module.exports = db;`

module.exports = {
    index: (req, res) => {
        let productos = db.posts; // 'posts' es la propiedad que tiene los productos
        res.render('index', { productos }); // Pasás los productos a la vista
    },

    login: (req, res) => {
        res.render('login');
    },

    productos: (req, res) => {
        let productos = db.posts;
        res.render('productos', { productos });
    }
};