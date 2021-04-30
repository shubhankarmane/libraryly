const express = require("express");
const authorize = require("../../middleware/authorize");
const router = express.Router();
const genreServices = require("../services/genreServices");

// Routes
router.post("/add", authorize, addGenre);

module.exports = router;

function addGenre(req, res, next) {
  genreServices
    .addGenre(req.body)
    .then((genre) => {
      res.json({ message: "Genre added successfully", genre: genre });
    })
    .catch(next);
}
