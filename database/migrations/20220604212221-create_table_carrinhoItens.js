'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('carrinhoItens', { 
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      idCarrinho: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'carrinhos',
          id: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idProduto: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'produtos',
          id: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNul: false
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('carrinhoItens');
  }
};
