module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define("Produto", {
        "id": {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        "title": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "color": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "price": {
            type: DataTypes.INTEGER,
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
        "waterproof": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "description": {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        "tableName": "produto",
        "timestamps": false
    });

    return Produto;
};