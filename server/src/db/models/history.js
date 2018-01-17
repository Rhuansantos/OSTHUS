'use strict';

module.exports = (sequelize, DataTypes) => {
  const Histories = sequelize.define('histories', {
    userId: 1,
    action: DataTypes.STRING,
  });

  Histories.associate = function (models) {
    Histories.belongsTo(models.users, { foreignKey: 'userId' });
  };
  
  return Histories;
};