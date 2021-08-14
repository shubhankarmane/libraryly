const user = require("../routes/user");
const customers = require("../routes/customer");
const books = require("../routes/book");
const authors = require("../routes/author");
const genres = require("../routes/genre");
const rentals = require("../routes/rental");
const subscription = require("../routes/subscription");
const express = require("express");
const helmet = require("helmet");
const errorHandler = require("../middleware/globalErrorHandler");

function routes(app) {
    app.use(express.json());
    app.use(helmet());

    app.use("/api/users", user);
    app.use("/api/customers", customers);
    app.use("/api/books", books);
    app.use("/api/authors", authors);
    app.use("/api/genres", genres);
    app.use("/api/rentals", rentals);
    app.use("/api/subscription", subscription);

    app.use(errorHandler);
}

module.exports = routes;