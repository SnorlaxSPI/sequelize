'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Pessoas', [{
        nome: 'Ana Souza',
        ativo: true,
        email: 'ana@ana.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Alessandro Lins',
        ativo: true,
        email: 'alessandro@alessandro.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      nome: 'Caio Adalto',
      ativo: true,
      email: 'caio@caio.com',
      role: 'Docente',
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    {});    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pessoas', null, {});    
  }
};
