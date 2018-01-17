'use strict';

module.exports = (sequelize, DataTypes) => {
  const Histories = sequelize.define('histories', {
    userId: DataTypes.INTEGER,
    action: DataTypes.STRING,
  });
  Histories.associate = (models) => {
    Histories.belongsTo(models.users, { foreignKey: 'userId' });
  };
  return Histories;
};
