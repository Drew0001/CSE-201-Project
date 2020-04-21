'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teamname: {
        allowNull: true,
        type: Sequelize.STRING
      },
      confname: {
        allowNull: true,
        type: Sequelize.STRING
      },
      player1: {
        allowNull: true,
        type: Sequelize.STRING
      },
      player2: {
        allowNull: true,
        type: Sequelize.STRING
      },
      player3: {
        allowNull: true,
        type: Sequelize.STRING
      },
      player4: {
        allowNull: true,
        type: Sequelize.STRING
      },
      player5: {
        allowNull: true,
        type: Sequelize.STRING
      },
      wins: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      loses: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Accounts');
  }
};