'use strict';
const users = require('../mockupdata/users.json');
const models = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    users.map((_data) => {
      return queryInterface.bulkInsert('users', [{
        name: _data.name,
        email: _data.email,
        phone: _data.phone,
        role: _data.role,
      }], {});
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
