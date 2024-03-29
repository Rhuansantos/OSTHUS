'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING,
  });

  Users.associate = (models) => {
    Users.hasMany(models.histories, { onDelete: 'CASCADE', foreignKey: 'userId' });
  };

  return Users;
};
