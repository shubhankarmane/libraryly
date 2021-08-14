const Joi = require('joi');

function validateSubscription(subscription) {
    const schema = Joi.object({
        customerId: Joi.number().required().min(1)
    });

    return schema.validate(subscription);
}

module.exports = validateSubscription;