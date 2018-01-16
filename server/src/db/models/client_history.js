'use strict';

module.exports = (sequelize, DataTypes) => {
  const Client_history = sequelize.define('client_history', {
    action: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  });

  // Client_history.associate = function (models) {
  //   Client_history.belongsTo(models.clients, { through: 'clients', as: 'clients'});
  // };

  return Client_history;
};
