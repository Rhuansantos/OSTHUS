'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_roles', [{
      uuid: '1dd777d8-d7fd-4db8-8949-6454385cc71f',
      roleId: 1,
      userId: 1,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_roles', null, {});
  }
};
