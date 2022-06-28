'use strict';
const { faker } =require('@faker-js/faker');
const { v4: uuid } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
    {
      id: uuid(),
      avatar: faker.image.people(),
      nome: faker.name.firstName(),
      sobrenome: faker.name.middleName(),
      email: faker.internet.exampleEmail(),
      nascimento: '1990-10-15',
      genero: faker.name.gender(true)
    },
    {
      id: uuid(),
      avatar: faker.image.people(),
      nome: faker.name.firstName(),
      sobrenome: faker.name.middleName(),
      email: faker.internet.exampleEmail(),
      nascimento: '1990-10-15',
      genero: faker.name.gender(true)
    },
    {
      id: uuid(),
      avatar: faker.image.people(),
      nome: faker.name.firstName(),
      sobrenome: faker.name.middleName(),
      email: faker.internet.exampleEmail(),
      nascimento: '1990-10-15',
      genero: faker.name.gender(true)
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};