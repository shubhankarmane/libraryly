const express = require("express");
const authorize = require("../../middleware/authorize");
const router = express.Router();
const bookServices = require("../services/bookServices");

// Routes
router.post("/add", authorize, addBook);
router.get("/view/:id", authorize, getById);
router.put("/update/:id", authorize, update);
// TODO: Delete book

module.exports = router;

function addBook(req, res, next) {
  bookServices
    .create(req.body)
    .then((book) =>
      res.json({ message: "Book added successfully", book: book })
    )
    .catch(next);
}

function getById(req, res, next) {
  bookServices
    .getById(req.params.id)
    .then((book) => res.json({ message: "Book found", book: book }))
    .catch(next);
}

function update(req, res, next) {
  bookServices
    .updateBook(req.params.id, req.body)
    .then((book) => res.json({ message: "Updated successfully", book: book }))
    .catch(next);
}
