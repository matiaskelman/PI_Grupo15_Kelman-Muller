module.exports = (sequelize, dataTypes) => {
    let alias = "User"
    let cols = {
        id: { type: dataTypes.INTEGER, primaryKey: true, },
        email: { type: dataTypes.STRING },
        contraseña: { type: dataTypes.STRING },
        fecha: { type: dataTypes.DATE },
        dni: { type: dataTypes.INTEGER },
        fotoPerfil: { type: dataTypes.STRING },

    }
    let config = {
        tableName: "users",
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);
    User.associate = function (models) {
        User.hasMany(models.Product, {
            as: "Product",
            foreignKey: "users_id"
        });
        User.hasMany(models.Comentario, {
            as: "Comentario",
            foreignKey: "users_id"
        })
    }

    return User
}