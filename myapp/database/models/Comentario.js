module.exports = (sequelize, dataTypes) => {
    let alias = "Comentarios"
    let cols = {
        id: { type: dataTypes.INTEGER },
        descripcion: { type: dataTypes.TEXT },

    }
    let config = {
        tableName: "comentarios",
        timestamps: false
    }
    const Comentario = sequelize.define(alias, cols, config);
    
    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Products, {
            as: "Products",
            foreignKey: "producto_id"
        })
    }
    return Comentario
}