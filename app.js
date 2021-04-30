require("dotenv").config();
const express = require("express");
const app = express();
const authorize = require("./middleware/authorize");
const errorHandler = require("./middleware/errorHandler");
const db = require("./models");
const port = process.env.PORT;
const helmet = require("helmet");

app.use(express.json());
app.use(helmet());

// Routes go here
const user = require("./routes/controllers/userController");
const customers = require("./routes/controllers/customerController");
const books = require("./routes/controllers/bookController");

// Use routes
app.use("/api/users", user);
app.use("/api/customers", customers);
app.use("/api/books", books);

/*
TODO: Route for adding an author
TODO: Route for adding a genre
TODO: Route for the entire CRUD for rentals
*/

// Global error handler
app.use(errorHandler);
db.sequelize.authenticate().then(() => {
  app.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`);
  });
});
