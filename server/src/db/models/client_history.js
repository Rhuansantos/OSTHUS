'use strict';

module.exports = (sequelize, DataTypes) => {
  const ClientHistories = sequelize.define('clientHistories', {
    action: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  });

  ClientHistories.associate = function (models) {
    ClientHistories.belongsToMany(models.clients, { through: 'testbla', foreignKey: 'userId'});
  };

  return ClientHistories;
};
