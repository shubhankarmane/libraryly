"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CreatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      UpdatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  },
};
