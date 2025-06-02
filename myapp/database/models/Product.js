module.exports =  (sequelize, dataTypes) => {
    let alias = "Products"
    let cols = {
id: {type: dataTypes.INTEGER},
nombre: {type: dataTypes.TEXT},
descripcion: {type: dataTypes.TEXT},

    }
    let config = {
        tableName: "products",
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

   Product.associate = function (models) {
        Product.hasMany(models.Comentarios, {
            as: "comentarios",
            foreignKey: "producto_id"
        })
    }

    return Product
}