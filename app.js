require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const { PrismaClient } = require('@prisma/client');


// require('./startup/dbConnection')();
require('./startup/catchers')();
require('./startup/routes')(app);

const server = app.listen(port, () => {
    global.prisma = new PrismaClient();
    console.log(`Listening at: http://localhost:${port}`);
});

module.exports = server;