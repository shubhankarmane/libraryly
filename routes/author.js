const express = require("express");
const authorize = require("../middleware/authorize");
const router = express.Router();
const db = require("../models");
const lodash = require('lodash');
const wrapperFactory = require("../middleware/wrapperfactoryfunction");

module.exports = router;

router.post("/add", authorize, wrapperFactory(async (req, res, next) => {

    const input = getAuthorFromRequest(req);
    const author = await db.author.findOrCreate({
        where: {
            name: input.name,
        },
    });
    res.json({message: "Author added successfully", author: author});

}));

function getAuthorFromRequest(req) {
    return lodash.pick(req.body, ["name"]);
}
