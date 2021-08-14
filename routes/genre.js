const express = require("express");
const authorize = require("../middleware/authorize");
const router = express.Router();
const wrapperFactory = require("../middleware/wrapperfactoryfunction");
const db = require("../models");

router.post("/add", authorize, wrapperFactory(async (req, res, next) => {
    const genre = await db.genre.findOrCreate({
        where: {
            name: req.body.name,
        },
    });
    return res.json({ message: "Genre added successfully", genre: genre });
}));

module.exports = router;
