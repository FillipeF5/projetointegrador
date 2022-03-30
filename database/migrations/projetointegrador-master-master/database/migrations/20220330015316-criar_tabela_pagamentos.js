'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('pagamentos', {
            "id": {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            "order_items_id": {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "order_items",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "cascade"
            },
            "quantidade": {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            "tipo_pagamento": {
                type: Sequelize.STRING,
                allowNull: false
            },

            "Status": {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },

        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('pagamentos');

    }
};