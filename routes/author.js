const express = require("express");
const router = express.Router();
const db = require("../models");
const lodash = require('lodash');
const authorize = require("../middleware/authorize");
const wrapperFactory = require("../middleware/wrapperFactoryFunction");

module.exports = router;

router.post("/add", authorize, wrapperFactory(async (req, res) => {
    const input = getAuthorFromRequest(req);
    const author = await db.author.findOrCreate({
        where: {
            name: input.name,
        },
    });
    res.send(author);
}));

function getAuthorFromRequest(req) {
    return lodash.pick(req.body, ["name"]);
}
