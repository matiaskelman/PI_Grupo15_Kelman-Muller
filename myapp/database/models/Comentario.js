module.exports = (sequelize, dataTypes) => {
  let alias = "Comentario"
  let cols = {
    id: { type: dataTypes.INTEGER, primaryKey: true},
    users_id: { type: dataTypes.INTEGER },
    producto_id: { type: dataTypes.INTEGER },
    descripcion: { type: dataTypes.TEXT },

  }
  let config = {
    tableName: "comentarios",
    timestamps: true
  }
  const Comentario = sequelize.define(alias, cols, config);

  Comentario.associate = function (models) {
    Comentario.belongsTo(models.Product, {
      as: "Product",
      foreignKey: "producto_id"
    },
      Comentario.belongsTo(models.User, {
      as: "User",
      foreignKey: "users_id"
    }))
  }
  return Comentario
}