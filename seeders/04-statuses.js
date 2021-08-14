"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "statuses",
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
        return queryInterface.bulkDelete("statuses", null, {});
    },
};
