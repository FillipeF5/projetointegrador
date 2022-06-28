const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", {
        id: {
            type:DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nome: {
            type:DataTypes.STRING,
            allowNull: false
        },
        sobrenome: {
            type:DataTypes.STRING,
            allowNull: false
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nascimento: {
            type:DataTypes.DATE,
            allowNull: false
        },
        genero: {
            type:DataTypes.STRING,
            allowNull: false
        },
        password: {
            type:DataTypes.CHAR(60),
            allowNull: false
        }
    }, {
        "tableName": "usuarios",
    });

    Usuario.beforeValidate((usuario) => {
        usuario.id = uuid()
    });

    Usuario.associate = (models) => {
        Usuario.hasOne(models.Carrinho, {
            foreignKey: 'idUsuario',
            as: 'carrinho'
        });
    }

    return Usuario;
};