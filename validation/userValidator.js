const Joi = require('joi');

function validateUser(user) {
    const schema = Joi.object({
        userName: Joi.string().required().max(10),
        password: Joi.string().required().min(8).max(255),
    });

    return schema.validate(user);
}

module.exports = validateUser;