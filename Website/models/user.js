'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    favteam: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Accounts, {as: 'Accounts'});
  };
  return User;
};