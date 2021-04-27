"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Books", {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ISBN: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ImageURL: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Pages: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      AuthorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Authors",
          key: "Id",
        },
      },
      GenreId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Genres",
          key: "Id",
        },
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
    return queryInterface.dropTable("Books");
  },
};
