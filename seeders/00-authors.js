"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "authors",
      [
        {
          name: "Mario Puzo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mario Conde",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sun Tzu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("authors", null, {});
  },
};
