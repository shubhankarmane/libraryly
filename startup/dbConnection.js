// const db = require("../models");
//
// function connect() {
//     db.sequelize.authenticate()
//         .then(() => console.log('Database connection successful'))
//         .catch(err => console.log(err));
// }
//
// module.exports = connect;

const { PrismaClient } = require('@prisma/client');

module.exports = new PrismaClient();