module.exports = (sequelize, dataTypes) => {
    let alias = "Product"
    let cols = {
        id: { type: dataTypes.INTEGER, primaryKey: true },
        nombre: { type: dataTypes.TEXT },
        archivoImg: { type: dataTypes.TEXT },
        descripcion: { type: dataTypes.TEXT },
        users_id: { type: dataTypes.INTEGER }


    }
    let config = {
        tableName: "products",
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.User, {
            foreignKey: "users_id",
            as: "User",

        })
        Product.hasMany(models.Comentario, {
            as: "Comentario",
            foreignKey: "productos_id"
        })
    }

    return Product
}