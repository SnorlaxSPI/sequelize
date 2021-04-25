'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Turmas', [{
        data_inicio: "2020-04-25",
        nivel_id: 1,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2020-04-01",
        nivel_id: 2,
        docente_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      data_inicio: "2021-04-25",
      nivel_id: 3,
      docente_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    {});    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Turmas', null, {});    
  }
};
