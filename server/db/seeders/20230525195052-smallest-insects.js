'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Insects', [
      {
        name: 'Western Pygmy Blue Butterfly',
        description: 'It can be recognized by the copper brown and dull blue pattern at the bases of both wings',
        territory: 'North America, Hawaii, Middle East',
        fact: 'Smallest member of the butterfly family',
        millimeters: 12
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Insects', {
      name: ['Western Pygmy Blue Butterfly']
    });
  }
};
