const express = require("express");
const helmet = require("helmet");

function routes(app) {
    app.use(express.json());
    app.use(helmet());

    app.use("/api/users", require("../routes/user"));
    app.use("/api/customers", require("../routes/customer"));
    app.use("/api/books", require("../routes/book"));
    app.use("/api/authors", require("../routes/author"));
    app.use("/api/genres", require("../routes/genre"));
    app.use("/api/rentals", require("../routes/rental"));
    app.use("/api/subscription", require("../routes/subscription"));

    app.use(require("../middleware/globalErrorHandler"));
}

module.exports = routes;