const router = require("express").Router();
const authorize = require("../middleware/authorize");
const wrapperFactory = require("../middleware/wrapperFactoryFunction");
const validate = require("../validation/genreValidator");

router.post("/", authorize, wrapperFactory(async (req, res) => {
    const validationResult = validate(req.body);
    if (validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }

    const genre = await prisma.genres.create({
        data: {
            name: req.body.name
        }
    })
    return res.send(genre);
}));

module.exports = router;
