'use strict';

module.exports = (sequelize, DataTypes) => {
  const ClientHistories = sequelize.define('clientHistories', {
    action: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  });

  ClientHistories.associate = function (models) {
    ClientHistories.belongsTo(models.clients, { foreignKey: 'userId', as: 'clients'});
  };

  return ClientHistories;
};
