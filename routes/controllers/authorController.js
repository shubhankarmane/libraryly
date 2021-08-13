const express = require("express");
const authorize = require("../../middleware/authorize");
const authorServices = require("../services/authorServices");
const router = express.Router();
const db = require("../../models");
const lodash = require('lodash');
const wrapperFactory = require("../../middleware/wrapperFactory");

module.exports = router;

router.post("/add", authorize, wrapperFactory(async (req, res, next) => {

    const input = getAuthorFromRequest(req);
    const author = await db.Author.findOrCreate({
        where: {
            Name: input.name,
        },
    });
    res.json({message: "Author added successfully", author: author});

}));

function getAuthorFromRequest(req) {
    return lodash.pick(req.body, ["name"]);
}
