'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    team: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
  //  User.hasMany(models.Accounts, {as: 'Accounts'});
  };
  return User;
};