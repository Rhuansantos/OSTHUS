module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    discorduser: DataTypes.STRING,
    email: DataTypes.STRING,
    uuid: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate: (models) => {
        // console.log(models);
      },
    },
  });
  return Users;
};
