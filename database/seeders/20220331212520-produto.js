'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produto', [{
      titulo: 'Apple iPhone 13',
      cor: "Blue",
      preco: "13489",
      tela: "6,6",
      os: "iOS",
      memoria: "128",
      provadagua: "sim"
    }, {
      titulo: 'Samsung A20',
      cor: "Black",
      preco: "2489",
      tela: "6.2",
      os: "Android",
      memoria: "128",
      provadagua: "não"
    }, {
      titulo: 'Samsung Galaxy Note',
      cor: "Black",
      preco: "2489",
      tela: "6.8",
      os: "Android",
      memoria: "128",
      provadagua: "não"
    }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produto', null, {});
  }
};
