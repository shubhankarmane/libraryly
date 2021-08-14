require("dotenv").config();
const express = require("express");
const app = express();
const errorHandler = require("./middleware/globalErrorHandler");
const db = require("./models");
const port = process.env.PORT || 5000;
const helmet = require("helmet");

app.use(express.json());
app.use(helmet());


const user = require("./routes/user");
const customers = require("./routes/customer");
const books = require("./routes/book");
const authors = require("./routes/author");
const genres = require("./routes/genre");
const rentals = require("./routes/rental");
const subscription = require("./routes/subscription");


app.use("/api/users", user);
app.use("/api/customers", customers);
app.use("/api/books", books);
app.use("/api/authors", authors);
app.use("/api/genres", genres);
app.use("/api/rentals", rentals);
app.use("/api/subscription", subscription);

app.use(errorHandler);
db.sequelize.authenticate().then(() => {
    app.listen(port, () => {
        console.log(`Listening at: http://localhost:${port}`);
    });
});
