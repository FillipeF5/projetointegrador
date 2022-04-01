module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define("Cliente", {
        "id": {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        "nome": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "email": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "nascimento": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "genero": {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        "tableName": "cliente",
        "timestamps": false
    });

    return Cliente;
};