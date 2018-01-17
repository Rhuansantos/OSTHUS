'use strict';

module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define('clients', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING,
  });

  Clients.associate = function (models) {
    Clients.belongsToMany(models.clientHistories, { through: 'testbla', foreignKey: 'userId' });
  };

  return Clients;
};
