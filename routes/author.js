const express = require("express");
const router = express.Router();
// const db = require("../models");
const lodash = require('lodash');
const authorize = require("../middleware/authorize");
const wrapperFactory = require("../middleware/wrapperFactoryFunction");
const validate = require("../validation/authorValidator");

const {PrismaClient} = require("@prisma/client");

module.exports = router;

router.post("/", authorize, wrapperFactory(async (req, res) => {
    const input = getAuthorFromRequest(req);

    const validationResult = validate(input);
    if(validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }

    // const author = await db.author.findOrCreate({
    //     where: {
    //         name: input.name,
    //     },
    // });
    const result = await prisma.authors.create({
        data: {
            name: input.name
        }
    });

    return res.send(result);
}));

function getAuthorFromRequest(req) {
    return lodash.pick(req.body, ["name"]);
}
