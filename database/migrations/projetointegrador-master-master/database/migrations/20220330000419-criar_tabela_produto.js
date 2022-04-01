'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('produto', {

            "id": {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            "titulo": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "cor": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "preco": {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            "tela": {
                type: Sequelize.DECIMAL(2, 1),
                allowNull: false
            },
            "os": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "memoria": {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            "provadagua": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "descricao": {
                type: Sequelize.STRING,
                allowNull: true
            },
        });
    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('produto');

    }
};