"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Genres",
      [
        {
          name: "Fantasy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Science Fiction",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Horror",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mystery",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dystopian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Action",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Romance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Historical",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Food And Drink",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Genres", null, {});
  },
};
