'use strict';

module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define('clients', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING,
  });

  // Clients.associate = function (models) {
  //   Clients.belongsTo(models.roles, { through: 'history', as: 'users' });
  // };

  return Clients;
};
