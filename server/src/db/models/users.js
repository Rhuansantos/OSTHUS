'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    uuid: DataTypes.STRING,
    phone: DataTypes.STRING,
  });
  return Users;
};
