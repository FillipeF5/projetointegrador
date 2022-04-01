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
            "title": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "color": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "price": {
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
            "waterproof": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "description": {
                type: Sequelize.STRING,
                allowNull: true
            },
        });
    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('produto');

    }
};