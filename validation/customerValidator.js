const Joi = require("joi");

function validateCustomer(customer) {
    const schema = Joi.object({
        firstName: Joi.string().required().min(1).max(255),
        lastName: Joi.string().required().min(1).max(255),
        email: Joi.string().email().required(),
        phone: Joi.string().required().min(10).max(10),
    });

    return schema.validate(customer);
}

module.exports = validateCustomer;