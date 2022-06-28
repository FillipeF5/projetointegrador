const { v4:uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define("Produto", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        preco: {
            type: DataTypes.STRING,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tela: {
            type: DataTypes.STRING,
            allowNull: false
        },
        os: {
            type: DataTypes.STRING,
            allowNull: false
        },
        memoria: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imagem: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        "tableName": "produtos"
    });

    Produto.beforeValidate((produto) => {
        produto.id = uuid()
    });

    Produto.associate = (models) => {
        Produto.hasMany(models.CarrinhoItem, {
            foreignKey: 'idProduto',
            as: 'carrinhoItens'
        });
    }

    return Produto;
};