const express = require("express");
const router = express.Router();
const db = require("../models");
const authorize = require("../middleware/authorize");
const wrapperFactory = require("../middleware/wrapperFactoryFunction");

router.post("/add", authorize, wrapperFactory(async (req, res) => {
    const genre = await db.genre.findOrCreate({
        where: {
            name: req.body.name,
        },
    });
    return res.send(genre);
}));

module.exports = router;
