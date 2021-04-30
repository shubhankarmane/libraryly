const express = require("express");
const authorize = require("../../middleware/authorize");
const authorServices = require("../services/authorServices");
const router = express.Router();

// Routes
router.post("/add", authorize, addAuthor);

module.exports = router;

function addAuthor(req, res, next) {
  authorServices
    .createAuthor(req.body)
    .then((author) =>
      res.json({ message: "Author added successfully", author: author })
    )
    .catch(next);
}
