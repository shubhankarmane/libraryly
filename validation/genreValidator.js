const Joi = require("joi");

function validateGenre(genre) {
    const schema = Joi.object({
        name: Joi.string().required().min(1).max(255),
    });

    return schema.validate(genre);
}

module.exports = validateGenre;