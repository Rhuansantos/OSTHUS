'use strict';

module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('roles', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  });

  Roles.associate = function (models) {
    Roles.belongsTo(models.users, { through: 'userRoles', as: 'roles' });
  };

  return Roles;
};
