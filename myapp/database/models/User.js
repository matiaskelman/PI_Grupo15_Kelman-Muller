module.exports =  (sequelize, dataTypes) => {
    let alias = "Users"
    let cols = {
id: {type: dataTypes.INTEGER},
email: {type: dataTypes.STRING},
contraseña: {type: dataTypes.STRING},
fecha: {type: dataTypes.DATE},
dni: {type: dataTypes.INTEGER},
fotoPerfil: {type: dataTypes.STRING} ,

    }
    let config = {
        tableName: "users",
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    return User
}