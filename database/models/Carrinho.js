module.exports = (sequelize, DataTypes) => {
    const Carrinho = sequelize.define("Carrinho", {
        "id": {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
    }, {
        "tableName": "carrinho",
        "timestamps": false
    });

    return Carrinho;
};