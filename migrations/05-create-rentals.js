"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("rentals", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            bookId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "books",
                    key: "id",
                },
            },
            customerId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "customers",
                    key: "id",
                },
            },
            statusId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "statuses",
                    key: "id",
                },
            },
            dateRented: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            dateReturned: {
                type: Sequelize.DATE,
                allowNull: true,
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
        return queryInterface.dropTable("rentals");
    },
};
