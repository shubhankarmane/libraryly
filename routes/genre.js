const express = require("express");
const router = express.Router();
const db = require("../models");
const authorize = require("../middleware/authorize");
const wrapperFactory = require("../middleware/wrapperFactoryFunction");
const validate = require("../validation/genreValidator");

router.post("/add", authorize, wrapperFactory(async (req, res) => {
    const validationResult = validate(req.body);
    if(validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }
    const genre = await db.genre.findOrCreate({
        where: {
            name: req.body.name,
        },
    });
    return res.send(genre);
}));

module.exports = router;
