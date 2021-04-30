"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Rentals", {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      BookId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Books",
          key: "Id",
        },
      },
      CustomerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Customers",
          key: "Id",
        },
      },
      StatusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Statuses",
          key: "id",
        },
      },
      DateRented: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      DateReturned: {
        type: Sequelize.DATE,
        allowNull: true,
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
    return queryInterface.dropTable("Rentals");
  },
};
