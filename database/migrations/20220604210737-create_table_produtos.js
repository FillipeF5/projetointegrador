'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', { 
      id: {
        type:Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      descricao: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      preco: {
        type:Sequelize.STRING,
        allowNull: false
      },
      titulo: {
        type:Sequelize.STRING,
        allowNull: false
      },
      cor: {
        type:Sequelize.STRING,
        allowNull: false
      },
      tela: {
        type:Sequelize.STRING,
        allowNull: false
      },
      os: {
        type:Sequelize.STRING,
        allowNull: false
      },
      memoria: {
        type:Sequelize.INTEGER,
        allowNull: false
      },
      imagem: {
        type:Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('produtos');
  }
};
