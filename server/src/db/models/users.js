'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  });

  Users.associate = function (models) {
    Users.belongsTo(models.roles, { through: 'userRoles', as: 'users' });
  };

  return Users;
};
