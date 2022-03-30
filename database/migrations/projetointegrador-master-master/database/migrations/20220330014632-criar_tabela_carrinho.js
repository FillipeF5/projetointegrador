'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('carrinho', {

            "id": {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            "cliente_id": {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "clientes",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "cascade"
            },
            "quantidade": {
                type: Sequelize.INTEGER,
                allowNull: false
            },

        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('carrinho');

    }
};