require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");

app.use(express.json());

db.sequelize.authenticate().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening at: http://localhost:${process.env.PORT}`);
  });
});
