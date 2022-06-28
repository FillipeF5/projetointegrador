'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('carrinhos', { 
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      idUsuario: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'usuarios',
          id: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      total: {
        type:Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.00
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
    await queryInterface.dropTable('carrinhos');
  }
};
