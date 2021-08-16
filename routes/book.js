const express = require("express");
const router = express.Router();
const lodash = require('lodash');
// const db = require("../models");
const authorize = require("../middleware/authorize");
const wrapperFactory = require("../middleware/wrapperFactoryFunction");
const validate = require("../validation/bookValidator");

const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = router;

router.post("/", authorize, wrapperFactory(async (req, res) => {
    const input = getBookDetailsFromRequest(req);

    const validationResult = validate(input);
    if (validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }

    // const book = await db.book.create({
    //     title: input.title,
    //     stock: input.stock,
    //     isbn: input.isbn,
    //     imageUrl: input.imageUrl,
    //     pages: input.pages,
    //     authorId: input.authorId,
    //     genreId: input.genreId
    // });
    const book = await prisma.books.create({
        data: {
            title: input.title,
            stock: input.stock,
            isbn: input.isbn,
            imageUrl: input.imageUrl,
            pages: input.pages,
            authorId: input.authorId,
            genreId: input.genreId
        }
    });

    return res.send(book);
}));

router.get("/all", authorize, wrapperFactory(async (req, res) => {
    // const books = await db.book.findAll();
    const result = await prisma.books.findMany();
    return res.send(result);
}));

router.get("/:id", authorize, wrapperFactory(async (req, res) => {
    // const book = await db.book.findByPk(req.params.id);
    const book = await prisma.books.findUnique({where: {id: parseInt(req.params.id)}});

    if (!book) {
        return res.status(404).send("Book not found");
    }

    return res.send(book);
}));

router.put("/:id", authorize, wrapperFactory(async (req, res) => {
    const input = getBookDetailsFromRequest(req);

    const validationResult = validate(input);
    if (validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }

    // const book = await db.book.findByPk(req.params.id);
    const book = await prisma.books.findUnique({where: {id: parseInt(req.params.id)}});
    if (!book) {
        return res.status(404).send("Book not found");
    }

    // book.title = input.title;
    // book.stock = input.stock;
    // book.isbn = input.isbn;
    // book.imageUrl = input.imageUrl;
    // book.pages = input.pages;
    // book.authorId = input.authorId;
    // book.genreId = input.genreId;
    // await book.save();
    const updateBook = await prisma.books.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            title: input.title,
            stock: input.stock,
            isbn: input.isbn,
            imageUrl: input.imageUrl,
            pages: input.pages,
            authorId: input.authorId,
            genreId: input.genreId
        }
    });
    return res.send(updateBook);
}));

function getBookDetailsFromRequest(req) {
    return lodash.pick(req.body, ["title", "stock", "isbn", "imageUrl", "pages", "authorId", "genreId"]);
}