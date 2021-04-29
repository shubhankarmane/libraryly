require("dotenv").config();
const express = require("express");
const authorize = require("./middleware/authorize");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const db = require("./models");
const port = process.env.PORT;

app.use(express.json());

// Routes go here
const user = require("./routes/controllers/userController");
// Use routes
app.use("/api/users", user);

app.get("/", authorize, userAuth);

function userAuth() {
  console.log("User authorized!");
}

// Global error handler
app.use(errorHandler);
db.sequelize.authenticate().then(() => {
  app.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`);
  });
});
