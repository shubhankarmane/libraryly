"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Statuses",
      [
        {
          status: "OPEN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "CLOSED",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Statuses", null, {});
  },
};
