'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produto', [{
      title: 'Apple iPhone 13',
      color: "Blue",
      price: "13489",
      tela: "6,6",
      os: "iOS",
      memoria: "128",
      waterproof: "sim"
    }, {
      title: 'Samsung A20',
      color: "Black",
      price: "2489",
      tela: "6.2",
      os: "Android",
      memoria: "128",
      waterproof: "não"
    }, {
      title: 'Samsung Galaxy Note',
      color: "Black",
      price: "2489",
      tela: "6.8",
      os: "Android",
      memoria: "128",
      waterproof: "não"
    }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produto', null, {});
  }
};
