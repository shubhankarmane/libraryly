"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "books",
            [
                {
                    title: "Book One",
                    stock: 5,
                    isbn: "9874223457654",
                    pages: 281,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    authorId: 1,
                    genreId: 2,
                },
                {
                    title: "Book Two",
                    stock: 5,
                    isbn: "9825324716432",
                    pages: 231,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    authorId: 3,
                    genreId: 6,
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("books", null, {});
    },
};
