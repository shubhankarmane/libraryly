const Joi = require('joi');

function validateRental(rental) {
    const schema = Joi.object({
        bookId: Joi.number().required().min(1),
        customerId: Joi.number().required().min(1)
    });

    return schema.validate(rental);
}

module.exports = validateRental;