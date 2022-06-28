const { v4:uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const CarrinhoItem = sequelize.define("CarrinhoItem", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        idCarrinho: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'carrinhos',
              id: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        idProduto: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'produtos',
              id: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNul: false
        }
    }, {
        "tableName": "carrinhoItens"
    });

    CarrinhoItem.beforeValidate((carrinhoItem) => {
        carrinhoItem.id = uuid()
    });

    CarrinhoItem.associate = (models) => {
        CarrinhoItem.belongsTo(models.Carrinho, {
            foreignKey: 'idCarrinho',
            as: 'carrinho'
        });

        CarrinhoItem.belongsTo(models.Produto, {
            foreignKey: 'idProduto',
            as: 'produto'
        });
    }

    return CarrinhoItem;
};