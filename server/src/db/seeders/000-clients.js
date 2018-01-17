'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('clients', [{
      name: 'Rhuan',
      email: 'rhuansantosdev@gmail.com',
      phone: '407-683-6105',
      role: 'admin',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clients', null, {});
  }
};