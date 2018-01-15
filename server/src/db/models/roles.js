'use strict';

module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('roles', {
    name: DataTypes.STRING,
    uuid: DataTypes.UUID,
  });

  Roles.associate = function (models) {
    Roles.belongsTo(models.users);
  };
  return Roles;
};
