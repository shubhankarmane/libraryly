"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "customers",
      [
        {
          firstname: "John",
          lastname: "Doe",
          email: "johndoe@gmail.com",
          phone: "8879103146",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: "Anil",
          lastname: "Pal",
          email: "anilpal@gmail.com",
          phone: "7732817491",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: "Paheli",
          lastname: "Gupta",
          email: "pgupta@gmail.com",
          phone: "9324112745",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("customers", null, {});
  },
};
