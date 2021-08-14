const Joi = require("joi");

function validateAuthor(author) {
    const schema = Joi.object({
        name: Joi.string().required().min(1).max(255)
    });

    return schema.validate(author);
}

module.exports = validateAuthor;