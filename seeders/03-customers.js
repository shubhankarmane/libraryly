"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Customers",
      [
        {
          FirstName: "John",
          LastName: "Doe",
          Email: "johndoe@gmail.com",
          Phone: "8879103146",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          FirstName: "Anil",
          LastName: "Pal",
          Email: "anilpal@gmail.com",
          Phone: "7732817491",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          FirstName: "Paheli",
          LastName: "Gupta",
          Email: "pgupta@gmail.com",
          Phone: "9324112745",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Customers", null, {});
  },
};
