'use strict';
const { faker } =require('@faker-js/faker');
const { v4: uuid } = require('uuid');


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produtos', [
    {
      id: uuid(),
      titulo: 'Apple iPhone 13 Pro',
      descricao:"O maior upgrade do sistema de câmera Pro até hoje. Tela Super Retina XDR com ProMotion. Chip A15 Bionic com velocidade impressionante. Design resistente. E um salto imenso na duração da bateria.",
      preco:"R$ 7.540,99",
      cor: 'blue',
      memoria: 128,
      os: "iOS",
      tela: '6.3',
      imagem: "/images/iphone-13-pro-blue.png"
    },
    {
      id: uuid(),
      titulo: "Samsung A20",
      descricao: 'Smartphone completo, que não tem muito a invejar aos mais avançados dispositivos. Tela de 6.4". A resolução também é alta: 1560x720 pixel. Quanto às funções, no Samsung Galaxy A20 realmente não falta nada',
      preco: 'R$ 1.541,99',
      cor: "silver",
      memoria: 128,
      os: "Android",
      tela: '6.4',
      imagem: "/images/samsung-a20.jpg"
    },
    {
      id: uuid(),
      titulo: "Samsung Galaxy Note",
      descricao: "Um dos smartphones Android mais avançados e completos. Tem um grande display de 6.7 polegadas com uma resolução de 2400x1080. Funcionalidades oferecidas muitas e inovadoras.",
      preco: "R$ 2.955,07",
      cor: "cyan",
      memoria: 128,
      os: "iOS",
      tela: '6.7',
      imagem: "/images/samsung-galaxy-note.jpg"
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};
