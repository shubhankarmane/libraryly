const express = require("express");
const router = express.Router();
const lodash = require('lodash');
const db = require("../models");
const authorize = require("../middleware/authorize");
const wrapperFactory = require("../middleware/wrapperFactoryFunction");
const validate = require("../validation/bookValidator");

module.exports = router;

router.post("/add", authorize, wrapperFactory(async (req, res) => {
    const input = getBookDetailsFromRequest(req);
    const validationResult = validate(input);
    if(validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }
    const book = await db.book.create({
        title: input.title,
        stock: input.stock,
        isbn: input.isbn,
        imageUrl: input.imageUrl,
        pages: input.pages,
        authorId: input.authorId,
        genreId: input.genreId
    });
    return res.json({message: "Book added successfully", book: book});
}));

router.get("/view/all", authorize, wrapperFactory(async (req, res) => {
    const books = await db.book.findAll();
    return res.send(books);
}));

router.get("/view/:id", authorize, wrapperFactory(async (req, res) => {
    const book = await db.book.findByPk(req.params.id);
    if (!book) {
        return res.status(404).send("Book not found");
    }
    return res.send(book);
}));

router.put("/update/:id", authorize, wrapperFactory(async (req, res) => {
    const input = getBookDetailsFromRequest(req);
    const validationResult = validate(input);
    if(validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }
    const book = await db.book.findByPk(req.params.id);
    if (!book) {
        return res.status(404).send("Book not found");
    }
    book.title = input.title;
    book.stock = input.stock;
    book.isbn = input.isbn;
    book.imageUrl = input.imageUrl;
    book.pages = input.pages;
    book.authorId = input.authorId;
    book.genreId = input.genreId;
    await book.save();
    return res.send(book);
}));

function getBookDetailsFromRequest(req) {
    return lodash.pick(req.body, ["title", "stock", "isbn", "imageUrl", "pages", "authorId", "genreId"]);
}