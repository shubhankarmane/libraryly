"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Book One",
          stock: 5,
          isbn: "9874223457654",
          pages: 281,
          createdAt: new Date(),
          updatedAt: new Date(),
          AuthorId: 1,
          GenreId: 2,
        },
        {
          title: "Book Two",
          stock: 5,
          isbn: "9825324716432",
          pages: 231,
          createdAt: new Date(),
          updatedAt: new Date(),
          AuthorId: 3,
          GenreId: 6,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
