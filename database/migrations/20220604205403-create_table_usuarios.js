'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', { 
      id: {
        type:Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nome: {
        type:Sequelize.STRING,
        allowNull: false
      },
      sobrenome: {
        type:Sequelize.STRING,
        allowNull: false
      },
      email: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      nascimento: {
        type:Sequelize.DATE,
        allowNull: false
      },
      genero: {
        type:Sequelize.STRING,
        allowNull: false
      },
      password: {
        type:Sequelize.CHAR(60),
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
    await queryInterface.dropTable('usuarios');
  }
};
