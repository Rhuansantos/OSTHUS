'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    uuid: DataTypes.STRING,
    phone: DataTypes.STRING,
  });

  Users.associate = function (models) {
    Users.belongsTo(models.roles);
  };
  return Users;
};
