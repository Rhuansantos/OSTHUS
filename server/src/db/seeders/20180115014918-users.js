'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'Rhuan',
      email: 'rhuansantosdev@gmail.com',
      uuid: '1dd777d8-d7fd-4db8-8949-6454385cc71f',
      phone: '407-683-6105',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};