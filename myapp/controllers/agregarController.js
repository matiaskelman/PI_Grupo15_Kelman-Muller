const db = require('../db/db');

const addProducto = {
    addProducto: function (req, res) {
        let usuarioLogueado = usuario.usuario;
        res.render("addProducto", { usuarioLogueado });
    }
};

module.exports = addProducto;
