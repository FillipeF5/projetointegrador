'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('cart_item', {

            "carrinho_id": {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "carrinho",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "cascade"
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
        await queryInterface.dropTable('cart_item');

    }
};