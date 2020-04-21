'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accounts = sequelize.define('Accounts', {
    id: DataTypes.INTEGER,
    teamname: DataTypes.STRING,
    confname: DataTypes.STRING,
    player1: DataTypes.STRING,
    player2: DataTypes.STRING,
    player3: DataTypes.STRING,
    player4: DataTypes.STRING,
    player5: DataTypes.STRING,
    wins: DataTypes.INTEGER,
    loses: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  Accounts.associate = function(models) {
    Accounts.belongsTo(models.User);
  };
  return Accounts;
};