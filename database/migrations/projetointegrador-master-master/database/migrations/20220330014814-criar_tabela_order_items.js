'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('order_items', {

            "id": {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            "produto_id": {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "produtos",
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
        await queryInterface.dropTable('order_items');

    }
};