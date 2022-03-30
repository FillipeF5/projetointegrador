'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('order_details', {
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
            "total": {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            "pagamentos_id": {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "pagamentos",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "cascade"
            },
        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('order_details');

    }
};