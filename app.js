require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

require('./startup/dbConnection')();
require('./startup/catchers')();
require('./startup/routes')(app);

const server = app.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`);
});

module.exports = server;