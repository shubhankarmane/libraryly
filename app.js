require("dotenv").config();
const express = require("express");
const app = express();
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
const authors = require("./routes/controllers/authorController");
const genres = require("./routes/controllers/genreController");
const rentals = require("./routes/controllers/rentalController");
const subscription = require("./routes/controllers/subscriptionController");

// Use routes
app.use("/api/users", user);
app.use("/api/customers", customers);
app.use("/api/books", books);
app.use("/api/authors", authors);
app.use("/api/genres", genres);
app.use("/api/rentals", rentals);
app.use("/api/subscription", subscription);

// Global error handler
app.use(errorHandler);
db.sequelize.authenticate().then(() => {
  app.listen(port, () => {
    console.log(`Mode: ${process.env.NODE_ENV}`);
    console.log(`Listening at: http://localhost:${port}`);
  });
});
