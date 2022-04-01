module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define("Produto", {
        "id": {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        "titulo": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "cor": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "preco": {
            type: DataTypes.DECIMAL(5,3),
            allowNull: false
        },
        "tela": {
            type: DataTypes.DECIMAL(2,1),
            allowNull: false
        },
        "os": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "memoria": {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        "provadagua": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "descricao": {
            type: DataTypes.STRING,
            allowNull: true
        },
        "foto": {
            type: DataTypes.BLOB,
            allowNull: true
        }
    }, {
        "tableName": "produto",
        "timestamps": false
    });

    return Produto;
};