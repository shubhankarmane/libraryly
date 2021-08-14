const Joi = require("joi");

function validateBook(book) {
    const schema = Joi.object({
        title: Joi.string().required().min(1).max(255),
        stock: Joi.number().required().min(1).max(300),
        isbn: Joi.number().required().min(13).max(13),
        imageUrl: Joi.string().max(255),
        pages: Joi.number().required().min(1).max(10000),
        authorId: Joi.number().required(),
        genreId: Joi.number().required()
    });

    return schema.validate(book);
}

module.exports = validateBook;