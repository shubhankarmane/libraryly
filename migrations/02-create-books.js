"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("books", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            stock: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            isbn: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            imageUrl: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            pages: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            authorId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "authors",
                    key: "id",
                },
            },
            genreId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "genres",
                    key: "id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable("books");
    },
};
