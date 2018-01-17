'use strict';

module.exports = (sequelize, DataTypes) => {
  const TestBla = sequelize.define('testblas', {
    userId: DataTypes.STRING,
    roleId: DataTypes.STRING,
  });
  return TestBla;
};
