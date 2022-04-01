'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cliente', [{
      nome: 'Sheldon Cooper',
      email: "drcooper@email.com",
      nascimento: "1988",
      genero: "M"
    }, {
      nome: 'Bruce Wayne',
      email: "wayne@email.com",
      nascimento: "1972",
      genero: "M"
    }, {
      nome: 'Penny',
      email: "penny@email.com",
      nascimento: "1994",
      genero: "F"
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cliente', null, {});
  }
};
