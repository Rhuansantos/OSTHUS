'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
      id: 1,
      name: 'admin',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
