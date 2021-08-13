const express = require("express");
const authorize = require("../../middleware/authorize");
const router = express.Router();
const lodash = require('lodash');
const db = require("../../models");
const wrapperFactory = require("../../middleware/wrapperFactory");

module.exports = router;

router.post("/add", authorize, wrapperFactory(async (req, res) => {
    const input = getBookDetailsFromRequest(req);
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
  return res.json({books: books});
}));

router.get("/view/:id", authorize, wrapperFactory(async (req, res) => {
  const book = await db.book.findByPk(req.params.id);
  if (!book) throw "Book not found";

  return res.json({message: "Book found", book: book});
}));

router.put("/update/:id", authorize, wrapperFactory(async (req, res) => {
  const input = getBookDetailsFromRequest(req);
  const book = await db.book.findByPk(req.params.id);
  if (!book) throw "Book not found";

  book.title = input.title;
  book.stock = input.stock;
  book.isbn = input.isbn;
  book.imageUrl = input.imageUrl;
  book.pages = input.pages;
  book.authorId = input.authorId;
  book.genreId = input.genreId;

  await book.save();

  return res.json({message: "Updated successfully", book: book});
}));

function getBookDetailsFromRequest(req) {
  return lodash.pick(req.body, ["title", "stock", "isbn", "imageUrl", "pages", "authorId", "genreId"]);
}