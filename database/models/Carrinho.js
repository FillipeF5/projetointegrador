const { v4:uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Carrinho = sequelize.define("Carrinho", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        idUsuario: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'usuarios',
              id: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        total: {
            type:DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.00
        }
    }, {
        "tableName": "carrinho"
    });

    Carrinho.beforeValidate((carrinho) => {
        carrinho.id = uuid()
    });

    Carrinho.associate = (models) => {
        Carrinho.belongsTo(models.Usuario, {
            foreignKey: 'idUsuario',
            as: 'usuario'
        });

        Carrinho.hasMany(models.CarrinhoItem, {
            foreignKey: 'idCarrinho',
            as: 'itens'
        });
    }

    return Carrinho;
};