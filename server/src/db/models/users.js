'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  });

  Users.associate = function (models) {
    Users.hasMany(models.histories, { foreignKey: 'userId'});
  };

  return Users;
};